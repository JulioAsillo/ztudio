// ============================================================
//  TESTIMONIOS (slider 5)
//  Coloca los avatares en: public/images/testimonios/
//  (opcional; si no hay avatar, se muestra el icono generico)
// ============================================================

export interface Testimonio {
  nombre: string;
  cargo: string;
  mensaje: string;
  avatar?: string; // ruta en /public (opcional)
}

export const testimonios: Testimonio[] = [
  {
    nombre: 'Gonzalo De Romaña G.',
    cargo: 'Presidente, Grupo Acme',
    mensaje: `Ztudio Agencia ha sido el motor de nuestro marketing y redes sociales, gestionando con éxito la presencia digital de las empresas de nuestro grupo. Desde la creación de contenido hasta campañas corporativas, su trabajo siempre ha superado las expectativas, con la misma rigurosidad y excelencia en proyectos de alto impacto social. Lo que la define es su ética de trabajo, puntualidad y dedicación al 100%. La recomiendo ampliamente.`,
  },
  {
    nombre: 'Ibbet Tabraj R.',
    cargo: 'Coordinadora de Gestión y Mejora',
    mensaje: `El equipo se encargó del diseño, producción y difusión de contenidos para comunicar los logros de nuestra certificación ISO 9001:2015 e ISO 37001:2025, con videos dinámicos y afiches de alta calidad. Demostraron profesionalismo, creatividad y cumplimiento estricto de plazos, clave para el éxito de la campaña. Recomiendo sus servicios con total seguridad.`,
  },
  {
    nombre: 'Carmen Manrique V.',
    cargo: 'Gerente de Operaciones, Medi-K S.A.C.',
    mensaje: `A través de la empresa en donde laboro, Ztudio nos brindó servicio de diseño gráfico, fotografía, video y publicidad digital, y la experiencia con ellos fue excelente en calidad, puntualidad y asesoría personalizada. Quedamos satisfechos, lo volveremos a contratar.`,
  },
  {
    nombre: 'Alejandro Arévalo',
    cargo: 'CEO & Founder, Novaly',
    mensaje: `Trabajar con Ztudio Agencia ha sido una experiencia muy positiva desde el inicio. Destaco especialmente su capacidad para entender nuestro negocio, aterrizar nuestras ideas y convertirlas en una estrategia de contenido alineada con los objetivos de Novaly. El equipo demuestra creatividad, compromiso y una gran disposición para escuchar, proponer y ajustar cada detalle. Más que limitarse a diseñar publicaciones, buscan comprender la marca y construir una comunicación con propósito. Recomiendo a Ztudio por su profesionalismo, cercanía y dedicación en cada etapa del trabajo.`,
  },
];
