import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = `${siteConfig.name} portfolio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          backgroundColor: "#030308",
          color: "white",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 32,
            display: "flex",
            flexDirection: "column",
            padding: 56,
            width: "100%",
          }}
        >
          <div style={{ color: "#22d3ee", fontSize: 24, letterSpacing: 5 }}>
            AI STUDENT • FULL STACK • PRODUCT BUILDER
          </div>
          <div style={{ fontSize: 82, fontWeight: 800, marginTop: 28 }}>
            {siteConfig.name}
          </div>
          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 34, marginTop: 20 }}>
            Building AI-ready products and modern web experiences.
          </div>
          <div style={{ color: "rgba(255,255,255,0.54)", fontSize: 26, marginTop: 48 }}>
            Indore, India • Nexora AI Communication Platform
          </div>
        </div>
      </div>
    ),
    size
  );
}
