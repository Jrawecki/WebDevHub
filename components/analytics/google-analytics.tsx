import Script from "next/script";

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

  if (!measurementId) {
    return null;
  }

  const measurementIdJson = JSON.stringify(measurementId);
  const disableFlagJson = JSON.stringify(`ga-disable-${measurementId}`);

  return (
    <>
      <script
        id="google-analytics-preview-host-blocker"
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            var disableFlag = ${disableFlagJson};
            var host = window.location.hostname;
            var isPreviewHost =
              host === "localhost" ||
              host === "127.0.0.1" ||
              host === "::1" ||
              host.endsWith(".workers.dev");

            if (isPreviewHost) {
              window[disableFlag] = true;
            }
          })();
        `,
        }}
      />
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          if (!window[${disableFlagJson}]) {
            gtag('js', new Date());
            gtag('config', ${measurementIdJson});
          }
        `}
      </Script>
    </>
  );
}
