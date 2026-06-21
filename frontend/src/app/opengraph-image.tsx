import { ImageResponse } from "next/og";

export const alt = "Student Software Association — Build. Ship. Learn.";
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
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "#02030a",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dark blue gradient top-right accent */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(11,12,42,0.9) 0%, transparent 70%)",
          }}
        />

        {/* Top label */}
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 20, height: 20, background: "white", borderRadius: 4 }} />
          </div>
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 16, letterSpacing: "0.12em" }}>
            STUDENTSOFTWARE.ORG
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            EST. 2023 · VANCOUVER, BC
          </div>

          <h1
            style={{
              fontSize: 76,
              fontWeight: 800,
              color: "white",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Student Software
            <br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>Association</span>
          </h1>

          <p
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.5)",
              margin: 0,
              maxWidth: 680,
              lineHeight: 1.4,
            }}
          >
            A student-led tech club for builders, coders, and creatives.
          </p>

          {/* Tag chips */}
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            {["Hackathons", "Workshops", "Open Source"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: 15,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
