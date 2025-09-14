# GitHub App + OAuth + Cloudflare Workers + DigitalOcean — Bundled Starter Guide

A single-file, implementation-oriented guide for your stack:

- **Site login**: GitHub **OAuth** (NextAuth)
- **Backend GitHub access + webhooks**: **GitHub App** (installation tokens)
- **Frontend delivery + edge cache**: **Cloudflare Workers** in front of **DigitalOcean** backend
- **Comments**: **giscus** (GitHub Discussions)
- **Applications**: Stored in **your DB**; email maintainers; org-membership gated

> Copy sections as-is into your repo. Everything here is minimal but production-leaning (least privilege, caching, webhook-driven revalidation).

---

## 0) Architecture at a glance

### Flow diagram (Mermaid)
```mermaid
flowchart LR
  U[User Browser] -->|OAuth Login| N(Next.js App)
  N -->|GET /api/projects| W{Cloudflare Worker}
  W -->|Edge cache hit?| W
  W -- miss --> DO[(DigitalOcean Backend)]
  DO -->|GraphQL| GH[(GitHub API)]
  GH --> DO
  DO --> W
  W --> N
  N -->|Embed| Giscus[giscus widget]
  Giscus --> GH
  GH -->|Webhooks| DO
  DO -->|Purge by URL| CF[Cloudflare API]
  CF --> W
```

### Sequence (SWR at the edge)
```mermaid
sequenceDiagram
  participant B as Browser
  participant W as CF Worker
  participant DO as DO Backend
  participant GH as GitHub API

  B->>W: GET /api/projects
  alt Cache hit
    W-->>B: 200 (cached JSON)
    W->>DO: (background) refresh
    DO->>GH: GraphQL org repos
    GH-->>DO: JSON
    DO-->>W: 200
    W-->>W: cache.put(new response)
  else Cache miss
    W->>DO: fetch /api/projects
    DO->>GH: GraphQL org repos
    GH-->>DO: JSON
    DO-->>W: 200
    W-->>W: cache.put(response)
    W-->>B: 200 JSON
  end
```

---

## 1) Dependencies

**Core**
- Node.js 18+
- Next.js 14+ (App Router) `next react react-dom`
- NextAuth `next-auth`
- Octokit (GitHub App) `octokit`, `@octokit/app`, `@octokit/graphql`
- giscus `@giscus/react`

**Infra / tooling**
- Cloudflare Workers (and `wrangler` CLI)
- DigitalOcean App/ Droplet / Functions (your choice)
- Optional email: `nodemailer` (or Postmark/SendGrid SDK)
- Optional cache: Redis (Upstash) or in-memory LRU

---

## 2) Environment variables (`.env`)

```bash
# OAuth (NextAuth)
GITHUB_OAUTH_CLIENT_ID=...
GITHUB_OAUTH_CLIENT_SECRET=...
NEXTAUTH_SECRET=... # e.g., `openssl rand -base64 32`
NEXTAUTH_URL=https://yourdomain.example

# GitHub App
GH_APP_ID=123456
GH_APP_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GH_APP_INSTALLATION_ID=987654321
GH_ORG=your-org
GH_WEBHOOK_SECRET=supersecret

# Cloudflare
PUBLIC_HOST=yourdomain.example
CF_ZONE_ID=...
CF_API_TOKEN=...

# Backend origin (for Worker)
BACKEND_ORIGIN=https://api.yourdomain.example
```

---

## 3) NextAuth (OAuth for Site Login)

```ts
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_OAUTH_CLIENT_ID!,
      clientSecret: process.env.GITHUB_OAUTH_CLIENT_SECRET!,
      // default scopes are fine for identity-only login
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.sub,
        login: token.login as string,
      };
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) token.login = (profile as any).login;
      return token;
    },
  },
});

export { handler as GET, handler as POST };
```

**Example UI usage**
```tsx
// app/login/page.tsx
"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginPage() {
  const { data } = useSession();
  return (
    <div>
      {data?.user ? (
        <>
          <p>Signed in as {data.user.login}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      )}
    </div>
  );
}
```

---

## 4) GitHub App client (backend)

```ts
// lib/githubApp.ts (Node on DO)
import { App } from "octokit";

export const githubApp = new App({
  appId: process.env.GH_APP_ID!,
  privateKey: process.env.GH_APP_PRIVATE_KEY!,
});

export async function getInstallationOctokit(installationId: number) {
  return await githubApp.getInstallationOctokit(installationId);
}
```

---

## 5) Projects API (GraphQL via installation token)

```ts
// app/api/projects/route.ts (Next.js on DO)
import { NextRequest } from "next/server";
import { getInstallationOctokit } from "@/lib/githubApp";

const ORG = process.env.GH_ORG!;
const INSTALLATION_ID = Number(process.env.GH_APP_INSTALLATION_ID!);

const query = `
  query OrgRepos($org: String!, $after: String) {
    organization(login: $org) {
      repositories(first: 50, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}, after: $after) {
        nodes {
          name
          description
          stargazerCount
          isArchived
          url
          primaryLanguage { name }
          updatedAt
          topics: repositoryTopics(first: 8) { nodes { topic { name } } }
        }
        pageInfo { hasNextPage endCursor }
      }
    }
    rateLimit { remaining resetAt }
  }
`;

export async function GET(_req: NextRequest) {
  const octokit = await getInstallationOctokit(INSTALLATION_ID);
  const all: any[] = [];
  let after: string | null = null;
  do {
    const r = await octokit.graphql<any>(query, { org: ORG, after });
    const page = r.organization.repositories;
    all.push(...page.nodes);
    after = page.pageInfo.hasNextPage ? page.pageInfo.endCursor : null;
  } while (after);

  return new Response(JSON.stringify({ repos: all }), {
    headers: {
      "Content-Type": "application/json",
      // Let the edge cache hold this for 5 minutes
      "Cache-Control": "public, max-age=0, s-maxage=300",
      // If you also store server-side, set ETag here for conditional fetches from the Worker
    },
  });
}
```

**Example GraphQL variables**
```json
{ "org": "your-org" }
```

**Example JSON response (truncated)**
```json
{
  "repos": [
    {
      "name": "awesome-project",
      "description": "Minimal starter",
      "stargazerCount": 7,
      "isArchived": false,
      "url": "https://github.com/your-org/awesome-project",
      "primaryLanguage": { "name": "TypeScript" },
      "updatedAt": "2025-09-12T20:01:22Z",
      "topics": { "nodes": [{ "topic": { "name": "nextjs" } }] }
    }
  ]
}
```

---

## 6) Org membership gate (server-side, cached)

```ts
// app/api/me/membership/route.ts
import { getInstallationOctokit } from "@/lib/githubApp";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const login = url.searchParams.get("login");
  if (!login) return new Response("login required", { status: 400 });

  const octokit = await getInstallationOctokit(Number(process.env.GH_APP_INSTALLATION_ID!));

  try {
    await octokit.request("GET /orgs/{org}/members/{username}", {
      org: process.env.GH_ORG!,
      username: login,
    });
    return Response.json({ isMember: true });
  } catch {
    return Response.json({ isMember: false });
  }
}
```

**Usage (client)**
```ts
const r = await fetch(`/api/me/membership?login=${session.user.login}`);
const { isMember } = await r.json();
```

---

## 7) Cloudflare Worker (edge cache + SWR refresh)

```js
// worker.js
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/projects") {
      const cache = caches.default;
      const cacheKey = new Request(request.url, request);
      const cached = await cache.match(cacheKey);
      if (cached) {
        // Serve immediately; refresh in background
        ctx.waitUntil(refresh(cache, cacheKey, env));
        return cached;
      }
      const resp = await fetch(env.BACKEND_ORIGIN + "/api/projects", { cf: { cacheTtl: 0 } });
      ctx.waitUntil(cache.put(cacheKey, resp.clone()));
      return resp;
    }

    return fetch(request);
  },
};

async function refresh(cache, cacheKey, env) {
  const fresh = await fetch(env.BACKEND_ORIGIN + "/api/projects", { cf: { cacheTtl: 0 } });
  await cache.put(cacheKey, fresh);
}
```

**wrangler.toml**
```toml
name = "projects-edge"
main = "worker.js"
compatibility_date = "2025-09-01"

[vars]
BACKEND_ORIGIN = "https://api.yourdomain.example"
```

**Note**: Workers Cache API is **per data center**; purge globally on webhook (next section).

---

## 8) Webhooks → Purge edge cache by URL

```ts
// app/api/webhooks/github/route.ts
import crypto from "crypto";

function ok() { return new Response("ok"); }

function verify(sig256: string | null, body: string, secret: string) {
  const expected = "sha256=" + crypto.createHmac("sha256", secret).update(body).digest("hex");
  return sig256 && crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(sig256));
}

export async function POST(req: Request) {
  const raw = await req.text();
  const sig = req.headers.get("x-hub-signature-256");
  if (!verify(sig, raw, process.env.GH_WEBHOOK_SECRET!)) return new Response("bad signature", { status: 401 });

  const event = req.headers.get("x-github-event");
  if (event === "repository" || event === "organization") {
    await fetch(`https://api.cloudflare.com/client/v4/zones/${process.env.CF_ZONE_ID}/purge_cache`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ files: [`https://${process.env.PUBLIC_HOST}/api/projects`] }),
    });
  }
  return ok();
}
```

**Testing purge (curl)**
```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/$CF_ZONE_ID/purge_cache" \
  -H "Authorization: Bearer $CF_API_TOKEN" -H "Content-Type: application/json" \
  --data '{"files":["https://yourdomain.example/api/projects"]}'
```

---

## 9) Comments via Discussions (giscus)

```tsx
// components/RepoComments.tsx
import Giscus from "@giscus/react";

export default function RepoComments() {
  return (
    <Giscus
      repo="your-org/your-discussions-repo"
      repoId="REPO_ID"
      category="General"
      categoryId="CATEGORY_ID"
      mapping="specific"
      term="projects-page"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light"
      lang="en"
    />
  );
}
```

**Where do `repoId` & `categoryId` come from?**
- Inspect the repo Discussion settings or use the GitHub GraphQL Explorer to query the IDs.

**Example GraphQL snippet to look up IDs**
```graphql
query RepoAndCategories($owner: String!, $name: String!) {
  repository(owner: $owner, name: $name) {
    id
    discussionsCategories(first: 10) { nodes { id name } }
  }
}
```

---

## 10) “Apply to contribute” (your DB)

- **POST** `/api/applications` → store `applicant_login`, `requested_repos[]`, `message`.
- Email maintainers (group alias) with a link to your internal review page.
- Gate the **Apply** button on `isMember===true`.

**Example DTO**
```json
{
  "applicant_login": "octocat",
  "requested_repos": ["awesome-project"],
  "message": "I want to help with docs and tests."
}
```

---

## 11) Rate-limiting tips (operational)

- Prefer **GraphQL** “single, shaped” queries over many REST calls.
- Avoid the **Search API** for listing repos; use org repositories directly.
- Use **webhooks + purge** (no polling) to keep caches fresh.
- Where you must poll REST, use **ETag/Last-Modified** and send conditional requests (304s are free vs primary limit).
- Throttle write bursts (labels, invites) and serialize if needed.

**GraphQL self-check query**
```graphql
query RateBudget {
  rateLimit { cost remaining resetAt used }
}
```

---

## 12) Minimal permissions to request (GitHub App)

- **Repository → Metadata: read** (listing)
- **Organization → Members: read** (membership checks)
- **Webhooks**: subscribe to `repository`, `organization`
- Add more only if/when you implement write actions

---

## 13) Project structure (suggested)

```
repo/
├─ app/
│  ├─ api/
│  │  ├─ auth/[...nextauth]/route.ts
│  │  ├─ projects/route.ts
│  │  └─ webhooks/github/route.ts
│  ├─ login/page.tsx
│  └─ (components)/RepoComments.tsx
├─ lib/githubApp.ts
├─ worker.js
├─ wrangler.toml
├─ package.json
└─ .env (local only)
```

---

## 14) Quickstart commands

```bash
# 1) Install deps
pnpm add next react react-dom next-auth octokit @octokit/app @octokit/graphql @giscus/react

# 2) Cloudflare worker
pnpm add -D wrangler
wrangler login
wrangler deploy

# 3) Run app locally
pnpm dev
```

---

## 15) Security checklist

- Store `GH_APP_PRIVATE_KEY`, OAuth secrets, and CF tokens in a secret manager (not in `.env` in production).
- Verify GitHub webhook signatures (`x-hub-signature-256`).
- Lock GitHub App permissions to **read-only** where possible.
- Rate-limit and validate any mutating endpoints you add later.
- Consider CSP/Headers (Next.js middleware) and HTTPS-only cookies for NextAuth.

---

## 16) FAQ

**Do we need a separate OAuth app if we already have a GitHub App?**
- Not strictly. Here we use OAuth for login convenience; the GitHub App handles backend data + webhooks. If you prefer, you can implement the App’s user authorization flow for login and skip OAuth.

**Why not write comments to Issues?**
- You want Issues for bugs/enhancements only; Discussions (via giscus) separates conversations and keeps your backend out of comment CRUD.

**Will the Worker cache update everywhere?**
- Worker cache is per data center; purging by URL on webhook ensures the **next** request to any PoP fetches fresh and re-caches locally.

---

## 17) Useful queries and REST examples

**List public repos via GraphQL (paginated)**
```graphql
query OrgRepos($org: String!, $after: String) {
  organization(login: $org) {
    repositories(first: 50, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: DESC}, after: $after) {
      nodes { name description url updatedAt stargazerCount }
      pageInfo { hasNextPage endCursor }
    }
  }
}
```

**Check membership (REST)**
```bash
curl -H "Authorization: Bearer <INSTALLATION_TOKEN>" \
  https://api.github.com/orgs/$GH_ORG/members/$LOGIN -I
# 204 if member; 404 if not
```

**Conditional REST GET with ETag**
```bash
# First request (capture ETag)
curl -i -H "Authorization: Bearer <TOKEN>" \
  https://api.github.com/repos/$ORG/$REPO
# Subsequent
curl -i -H "Authorization: Bearer <TOKEN>" -H "If-None-Match: \"<etag>\"" \
  https://api.github.com/repos/$ORG/$REPO
# Expect 304 Not Modified when unchanged
```

---

## 18) Further resources (docs & references)

> Bookmark these for deeper dives and troubleshooting.

- **GitHub GraphQL rate limits** — https://docs.github.com/en/graphql/overview/rate-limits-and-query-limits-for-the-graphql-api
- **REST rate limits & best practices (conditional requests)** — https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api , https://docs.github.com/en/rest/using-the-rest-api/best-practices-for-using-the-rest-api
- **Authenticate as a GitHub App / installation (Octokit)** — https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app , https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app
- **Org membership check (REST)** — https://docs.github.com/en/rest/orgs/members#check-organization-membership-for-a-user
- **Webhooks overview / events** — https://docs.github.com/en/webhooks , https://docs.github.com/en/webhooks/webhook-events-and-payloads
- **NextAuth GitHub provider** — https://next-auth.js.org/providers/github
- **giscus** — https://giscus.app/ , https://github.com/giscus/giscus
- **Cloudflare Workers Cache API** — https://developers.cloudflare.com/workers/runtime-apis/cache/ (scope is per data center) , https://developers.cloudflare.com/workers/reference/how-the-cache-works/
- **Cloudflare Purge by URL** — https://developers.cloudflare.com/api/resources/cache/methods/purge/ , https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/

---

### End

