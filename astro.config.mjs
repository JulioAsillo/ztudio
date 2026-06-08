import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Cambia esto por tu dominio final (importante para SEO: genera URLs canónicas y sitemap correctos)
  site: 'https://www.ztudio.com',
  integrations: [
    tailwind({
      // Inyectamos nuestro propio base.css para controlar las directivas @tailwind
      applyBaseStyles: false,
    }),
  ],
});
