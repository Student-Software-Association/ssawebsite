import { ImageResponse } from "next/og";

export const alt = "Student Software Association";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#02030a",
          fontFamily: "sans-serif",
          gap: 24,
        }}
      >
        {/* Centered card layout for Twitter */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: 48,
            borderRadius: 24,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(11,12,42,0.8)",
            maxWidth: 800,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(255,255,255,0.1)",
              marginBottom: 8,
            }}
          />
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "white",
              margin: 0,
              letterSpacing: "-0.02em",
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Student Software Association
          </h1>
          <p
            style={{
              fontSize: 22,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            Build. Ship. Learn. — Vancouver&apos;s student tech club.
          </p>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.25)",
              margin: 0,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            studentsoftware.org
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
