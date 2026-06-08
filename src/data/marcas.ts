// ============================================================
//  MARCAS (slider 4 - marquee en loop)
//  Coloca cada logo en: public/images/marcas/
//  Formato recomendado: SVG o PNG con fondo TRANSPARENTE.
// ============================================================

export interface Marca {
  nombre: string;
  logo: string; // ruta en /public
}

export const marcas: Marca[] = [
  { nombre: 'Medika', logo: '/images/marcas/Medika.svg' },
  { nombre: 'PYC', logo: '/images/marcas/PYC.svg' },
  { nombre: 'Tehno', logo: '/images/marcas/Tehno.svg' },
];
