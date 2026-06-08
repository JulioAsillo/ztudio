// ============================================================
//  SERVICIOS (slider 2 - carrusel)
//  Para editar/añadir un servicio, modifica este array.
//  'icon' usa nombres de Material Symbols Outlined.
// ============================================================

export interface Servicio {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export const servicios: Servicio[] = [
  {
    icon: 'edit_note',
    title: 'Estrategia de Contenido',
    description:
      'Planificamos contenido estratégico que conecta con tu audiencia y fortalece tu marca.',
    items: ['Content Strategy', 'Planificación de Feed', 'Pilares de Contenido'],
  },
  {
    icon: 'design_services',
    title: 'Web / UX',
    description:
      'Diseñamos experiencias web funcionales, intuitivas y visualmente atractivas.',
    items: ['Product Design', 'Interaction Design', 'Prototyping & Wireframing'],
  },
  {
    icon: 'auto_awesome',
    title: 'Branding',
    description:
      'Creamos identidades visuales que hacen que tu marca sea reconocible y memorable.',
    items: ['Logo Design', 'Visual Systems', 'Brand Voice & Manuales'],
  },
  {
    icon: 'movie',
    title: 'Grabación y Ediciones',
    description:
      'Producimos videos dinámicos y profesionales para comunicar tu mensaje con impacto.',
    items: ['Dirección Audiovisual', 'Edición de Reels & TikToks', 'Postproducción de Video'],
  },
  {
    icon: 'groups',
    title: 'Social Media Management',
    description:
      'Gestionamos tus redes sociales para aumentar interacción, presencia y conexión con tu audiencia.',
    items: ['Community Manager', 'Engagement & Moderación', 'Analytics & Reportes'],
  },
  {
    icon: 'photo_camera',
    title: 'Fotografía',
    description:
      'Capturamos y retocamos imágenes profesionales que transmiten la esencia de tu marca.',
    items: ['Sesiones de Producto / Marca', 'Retoque Digital (Photoshop)', 'Dirección de Arte Fotográfica'],
  },
  {
    icon: 'ads_click',
    title: 'Meta Ads',
    description:
      'Publicidad estratégica en las plataformas de Meta para impulsar el crecimiento de tu marca.',
    items: ['Paid Media', 'Segmentación Avanzada', 'Optimización de ROAS & CPA'],
  },
];
