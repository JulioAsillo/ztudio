// ============================================================
//  TESTIMONIOS (slider 5)
//  Coloca los avatares en: public/images/testimonios/
//  (opcional; si no hay avatar, se muestra la inicial del nombre)
// ============================================================

export interface Testimonio {
  nombre: string;
  cargo: string;
  mensaje: string;
  avatar?: string; // ruta en /public (opcional)
}

export const testimonios: Testimonio[] = [
  {
    nombre: 'Nombre Cliente 1',
    cargo: 'CEO, Empresa',
    mensaje:
      'Texto del testimonio. Reemplazar con el comentario real del cliente sobre el trabajo realizado.',
    avatar: '/images/testimonios/cliente-01.jpg',
  },
  {
    nombre: 'Nombre Cliente 2',
    cargo: 'Fundador, Marca',
    mensaje:
      'Texto del testimonio. Reemplazar con el comentario real del cliente.',
    avatar: '/images/testimonios/cliente-02.jpg',
  },
  {
    nombre: 'Nombre Cliente 3',
    cargo: 'Marketing Manager',
    mensaje:
      'Texto del testimonio. Reemplazar con el comentario real del cliente.',
    avatar: '/images/testimonios/cliente-03.jpg',
  },
];
