import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// const { createProxyMiddleware } = require("http-proxy-middleware");
import { createProxyMiddleware } from "http-proxy-middleware";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.mapbox.com',
        changeOrigin: true,
        secure: false,
        headers: {
          Referer: 'http://127.0.0.1:8000',
          'Access-Control-Allow-Origin': '*', // Add this line
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', // Add this line
        },
        pathRewrite: {
          '^/api': '', // Remove the "/api" prefix
        },
      },
    },
  },
});

console.log('Proxy configuration loaded!');
