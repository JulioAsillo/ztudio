// ============================================================
//  CONFIGURACION GLOBAL DEL SITIO
//  Edita aqui los enlaces y rutas principales.
// ============================================================

export const site = {
  // --- WhatsApp (boton de testimonios) ---
  // Numero en formato internacional SIN +, espacios ni guiones.
  // Ej Peru: 51 + numero  ->  '51999888777'
  whatsapp: '51997847876',
  whatsappMensaje: 'Hola, vengo de la web y quiero mas informacion.',

  // --- Video del Hero (slider 1) ---
  // Coloca el archivo .mp4 en: public/videos/hero-logo.mp4
  heroVideo: '/videos/hero-logo.mp4',
  heroVideoMobile: '/videos/hero-logo-mobile.mp4',
  // Imagen que se muestra mientras carga el video (public/images/hero-poster.jpg)
  heroPoster: '/images/hero-poster.jpg',

  // --- Logo (header) ---
  // Coloca el archivo en: public/images/logo.svg  (o .png)
  logo: '/images/logossinfondo.png',
};

// URL final del boton de WhatsApp (no editar)
export const whatsappURL = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.whatsappMensaje
)}`;