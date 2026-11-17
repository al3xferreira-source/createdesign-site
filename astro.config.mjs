import { defineConfig } from "astro/config";

// Static output — builds to ./dist
export default defineConfig({
  site: "https://createdesign.pt",
  output: "static",
  build: {
    format: "directory",
  },
});
