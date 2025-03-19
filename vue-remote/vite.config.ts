import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { federation } from "@module-federation/vite";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "microfrontendVue",
      filename: "remoteEntry.js",
      exposes: {
        "./VueApp": "./src/bootstrap.ts",
      },
    }),
  ],
  server: {
    port: 5002,
  },
});
