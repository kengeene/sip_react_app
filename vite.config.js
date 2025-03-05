import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from "@vitejs/plugin-legacy";
import babel from "vite-plugin-babel";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": path.resolve(__dirname, "./src"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          "@babel/plugin-transform-runtime",
          "@babel/plugin-syntax-jsx",
        ],
      },
    }),
  ],
});
