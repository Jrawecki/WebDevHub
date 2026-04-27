import { defineConfig, devices } from "@playwright/test";

const host = "127.0.0.1";
const port = process.env.PLAYWRIGHT_PORT ?? "3000";
const baseURL = `http://${host}:${port}`;
const webServerCommand =
  process.env.PLAYWRIGHT_COMMAND ??
  `cmd /c npm run dev -- --hostname ${host} --port ${port}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 0,
  reporter: "line",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "desktop",
      use: {
        browserName: "chromium",
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1080 },
      },
    },
    {
      name: "tablet",
      use: {
        browserName: "chromium",
        ...devices["iPad (gen 7) landscape"],
      },
    },
    {
      name: "mobile",
      use: {
        browserName: "chromium",
        ...devices["iPhone 13"],
      },
    },
  ],
  webServer: {
    command: webServerCommand,
    url: baseURL,
    reuseExistingServer: !process.env.CI && !process.env.PLAYWRIGHT_PORT,
    timeout: 120000,
  },
});
