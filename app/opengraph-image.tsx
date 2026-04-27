import { ImageResponse } from "next/og";

import { siteConfig } from "@/content/site-config";

export const alt = "Kuba's Web Dev Hub | Websites, landing pages, and web apps";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, rgba(248,243,236,1) 0%, rgba(242,236,227,1) 55%, rgba(235,227,215,1) 100%)",
          color: "#182836",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px",
            background:
              "radial-gradient(circle at top left, rgba(176,87,53,0.18), transparent 28%)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              fontSize: "24px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              }}
          >
            <div
              style={{
                display: "flex",
                width: "48px",
                height: "1px",
                background: "#b05735",
              }}
              />
            <span style={{ display: "flex" }}>Websites and web apps</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "860px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "74px",
                lineHeight: 0.94,
                letterSpacing: "-0.06em",
              }}
            >
              <span>{siteConfig.studioName}</span>
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "780px",
                fontFamily: "sans-serif",
                fontSize: "33px",
                lineHeight: 1.45,
                color: "#32495d",
              }}
            >
              Websites, landing pages, web apps, and workflow tools in {siteConfig.regionLabel}.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "sans-serif",
              fontSize: "26px",
              color: "#32495d",
            }}
          >
            <div style={{ display: "flex" }}>{siteConfig.contactEmail}</div>
            <div style={{ display: "flex" }}>
              Built directly by {siteConfig.founderName}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
