import { defineNuxtConfig } from "nuxt/config";
import BaseTSConfig from "./tsconfig.nuxt.json";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: true,
    strict: true,
    tsConfig: BaseTSConfig,
    typeCheck: true,
  },
});
