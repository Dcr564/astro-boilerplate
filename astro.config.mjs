// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  trailingSlash: "always",

  vite: {
    server: {
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    }
  }
});