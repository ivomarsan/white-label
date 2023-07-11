import { defineNuxtConfig } from 'nuxt/config';
import svgLoader from 'vite-svg-loader';
import BaseTSConfig from './tsconfig.nuxt.json';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Conecta',
    },
    baseURL: '/white-label/conecta',
    buildAssetsDir: '/white-label/_nuxt/',
  },

  ssr: false,

  postcss: {
    plugins: {
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['@/assets/css/main.css'],

  typescript: {
    shim: true,
    strict: true,
    tsConfig: BaseTSConfig,
    typeCheck: true,
  },

  vite: {
    plugins: [svgLoader()],
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
});
