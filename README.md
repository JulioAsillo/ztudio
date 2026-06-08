# ztudio — Sitio web (Astro + Tailwind CSS)

Sitio estático de vitrina para estudio de marketing. Construido con **Astro 5** y **Tailwind CSS** (compilado, no CDN). Genera HTML estático puro, óptimo para SEO y rendimiento.

## Requisitos

- **Node.js ≥ 18.20** (recomendado: LTS más reciente). Verifica con `node -v`.
- Editor: **VSCode** + extensiones:
  - `astro-build.astro-vscode` (oficial de Astro)
  - `bradlc.vscode-tailwindcss` (autocompletado Tailwind)

## Puesta en marcha

```bash
npm install      # instala dependencias (node_modules/)
npm run dev      # servidor de desarrollo en http://localhost:4321
```

## Comandos

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `npm install`     | Instala las dependencias                            |
| `npm run dev`     | Servidor local con hot-reload (`localhost:4321`)    |
| `npm run build`   | Genera el sitio estático en `dist/`                 |
| `npm run preview` | Previsualiza el build de producción localmente      |

## Estructura

```
src/
├── layouts/BaseLayout.astro   <- <head>, SEO, nav, footer, JS (un solo lugar)
├── components/                <- Nav, Footer, ServiceCard (reutilizables)
├── pages/
│   ├── index.astro            <- Landing
│   └── trabajo/
│       ├── index.astro        <- Listado de portafolio
│       └── [slug].astro       <- Página de cada proyecto (auto-generada)
├── content/proyectos/         <- Casos de estudio en Markdown (Content Collection)
└── styles/global.css          <- Tailwind + efectos (grain, mesh, glow, reveal)
public/                        <- Assets estáticos (videos, og-image, favicon)
tailwind.config.mjs            <- TODO el theming (colores MD3, fuentes, tamaños)
```

## Editar contenido

- **Servicios / stats**: arrays al inicio de `src/pages/index.astro`.
- **Navegación**: array `links` en `src/components/Nav.astro`.
- **Portafolio**: añade un archivo `.md` en `src/content/proyectos/`. La página se genera sola.

## Notas

- Las imágenes del Hero/portafolio del diseño original eran enlaces temporales.
  Reemplázalas por tus propios assets en `public/` o usa `<video>` para la vitrina.
- Para el grain overlay, coloca una textura en `public/textures/grain.png`
  (o elimina la regla `.grain-overlay` en `global.css` si no la usas).

## Despliegue recomendado: Azure Static Web Apps

1. Sube el repo a GitHub.
2. En Azure Portal: crear recurso **Static Web App** → conectar el repo.
3. Build presets: `Custom` → App location: `/`, Output location: `dist`.
4. Azure genera el workflow de GitHub Actions: cada push despliega automáticamente.
