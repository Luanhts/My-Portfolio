import { ImageResponse } from "next/og";

export const alt = "Luan Henrique, desenvolvedor front-end";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "flex-start",
          background: "#09090b",
          color: "#fafafa",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "76px 84px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: 26,
            gap: 18,
          }}
        >
          <div
            style={{
              alignItems: "center",
              border: "1px solid #3f3f46",
              borderRadius: 16,
              display: "flex",
              height: 64,
              justifyContent: "center",
              width: 64,
            }}
          >
            LH
          </div>
          <span style={{ color: "#a1a1aa" }}>/ Luan Henrique</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: "#a1a1aa", display: "flex", fontSize: 24 }}>
            DESENVOLVEDOR FRONT-END
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 700,
              letterSpacing: "-3px",
              lineHeight: 1.05,
              maxWidth: 990,
            }}
          >
            Interfaces claras para aplicações web complexas.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
