import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — Dental Clinic in ${SITE.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0C1826",
          padding: "72px 84px",
          fontFamily: "sans-serif",
        }}
      >
        {/* monogram arch */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: "#13233A",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 12,
            }}
          >
            <div
              style={{
                width: 26,
                height: 22,
                borderTop: "3px solid #C4A76B",
                borderLeft: "3px solid #C4A76B",
                borderRight: "3px solid #C4A76B",
                borderTopLeftRadius: 13,
                borderTopRightRadius: 13,
              }}
            />
          </div>
          <div
            style={{
              color: "#C4A76B",
              fontSize: 22,
              letterSpacing: 10,
              textTransform: "uppercase",
            }}
          >
            {`${SITE.city} · ${SITE.country}`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#EDE9DF",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            {SITE.name}
          </div>
          <div
            style={{
              marginTop: 28,
              color: "#9FABBB",
              fontSize: 32,
              lineHeight: 1.4,
            }}
          >
            Careful, modern dental care — practiced as an art.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(237,233,223,0.18)",
            paddingTop: 32,
          }}
        >
          <div style={{ color: "#9FABBB", fontSize: 24 }}>
            Implants · Braces · Aligners · Whitening · Cosmetic Dentistry
          </div>
          <div style={{ color: "#C4A76B", fontSize: 24 }}>Book on WhatsApp</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
