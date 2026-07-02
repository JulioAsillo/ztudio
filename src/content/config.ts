import { defineCollection, z } from 'astro:content';

const portafolio = defineCollection({
  type: 'content',
  schema: z.object({
    marca: z.string(),
    // Orden en el que aparecen las marcas en el sidebar (menor = primero)
    orden: z.number().default(99),
    // Texto descriptivo de la marca (el bloque en verde del diseno)
    descripcion: z.string(),
    // Galeria de Behance de ESTA marca -> aqui va el enlace
    behance: z.string().url().optional(),
    campanias: z
        .array(
            z.object({
              titulo: z.string(),
              descripcion: z.string(),
              tipo: z.enum(['imagen', 'video']).default('imagen'),
              // 'imagen': ruta local en /public | 'video': enlace .mp4 externo
              media: z.string(),
              // true = tambien aparece en el slider del home
              destacado: z.boolean().default(false),
            })
        )
        .min(1),
  }),
});

export const collections = { portafolio };