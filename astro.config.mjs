import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Dominio final de produccion. Se usa para las URLs canonicas, el og:url
  // y el og:image (ver BaseLayout.astro). Sin esto, Google y las redes
  // sociales apuntan al dominio equivocado.
  //
  // Usamos el dominio raiz (sin www) como version canonica. En Cloudflare
  // Pages hay que conectar AMBOS: ztudioagencia.com y www.ztudioagencia.com,
  // y dejar que www redirija al raiz.
  site: 'https://ztudioagencia.com',
  integrations: [
    tailwind({
      // Inyectamos nuestro propio base.css para controlar las directivas @tailwind
      applyBaseStyles: false,
    }),
  ],
});
