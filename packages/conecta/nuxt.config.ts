import { defineNuxtConfig } from "nuxt/config";
import BaseTSConfig from "./tsconfig.nuxt.json";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '@/assets/css/main.css',
  ],

  typescript: {
    shim: true,
    strict: true,
    tsConfig: BaseTSConfig,
    typeCheck: true,
  },
});
