import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import unocss from "unocss/astro";

export default defineConfig({
  site: "https://mrcai.dev",
  integrations: [unocss({ injectReset: true }), sitemap()],
  redirects: {
    "/blog": "/blog/1",
  },
});
