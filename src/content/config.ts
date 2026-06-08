import { defineCollection, z } from 'astro:content';

const proyectos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    categoria: z.string(),
    descripcion: z.string(),
    // 'imagen' o 'video' segun el tipo de media del proyecto
    tipo: z.enum(['imagen', 'video']).default('imagen'),
    // Para 'imagen': ruta local en /public (ej '/images/portafolio/proyecto-01.jpg')
    // Para 'video': ENLACE externo (ej 'https://...mp4' o embed)
    media: z.string(),
    // Link de Behance del proyecto -> AQUI VA EL ENLACE DE BEHANCE
    behance: z.string().url().optional(),
    // true = aparece en el slider del home
    destacado: z.boolean().default(false),
    fecha: z.date(),
  }),
});

export const collections = { proyectos };
