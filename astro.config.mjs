import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import bookshop from '@bookshop/astro-bookshop';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://top-quail.cloudvent.net/",
  integrations: [tailwind(), bookshop(), react()],
  server: {
    host: '127.0.0.1',
  }  
});