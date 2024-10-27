import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "astro/config"

import mkcert from "vite-plugin-mkcert"
import vue from "@astrojs/vue"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind()],
  vite: {
    plugins: [mkcert()],
    server: {
      https: true,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
})
