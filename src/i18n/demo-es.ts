// src/i18n/demo-es.ts
// Spanish translation overlay for demo/[slug] detail pages, merged onto the English base data
// (data/demo.ts) in src/pages/es/demo/[slug].astro.
export const demoEs: Record<string, { title: string; dek: string; body: string[]; faq?: { q: string; a: string }[] }> = {
  'whats-in-the-demo': {
    title: 'Qué incluye la demo de Moonlight Peaks',
    dek: 'Lo que realmente puedes hacer en la demo gratuita.',
    body: [
      'La demo gratuita te permite crear tu vampiro y probar una parte de la vida relajada — incluyendo pesca, arreglos florales y bordado, además de interacciones tempranas con los residentes del pueblo.',
      'Es un adelanto de la experiencia completa, no todo el juego; la versión completa está disponible desde el 7 de julio de 2026.',
    ],
    faq: [{ q: '¿Es gratuita la demo de Moonlight Peaks?', a: 'Sí — está disponible gratis en Steam y en el eShop de Nintendo (también en Switch 2).' }],
  },
  'how-to-download-the-demo': {
    title: 'Cómo descargar la demo de Moonlight Peaks',
    dek: 'Dónde conseguir la demo gratuita en Steam y Switch.',
    body: [
      'En Steam, abre la página de la tienda de Moonlight Peaks y usa el botón de descarga de la demo; en Nintendo, busca la demo en el eShop, donde se puede jugar tanto en Switch como en Switch 2.',
      'La demo es gratuita en ambas plataformas.',
    ],
    faq: [{ q: '¿Hay una demo de Moonlight Peaks en Switch?', a: 'Sí — la demo gratuita está disponible en el eShop de Nintendo y se puede jugar tanto en Switch como en Switch 2.' }],
  },
  'demo-vs-full-game': {
    title: 'Demo de Moonlight Peaks vs. versión completa',
    dek: 'Qué se transfiere y qué añade la versión completa.',
    body: [
      'El progreso de la demo no se transfiere a la versión completa — el lanzamiento completo comienza desde cero.',
      'La versión completa va mucho más allá del adelanto de la demo, con el pueblo completo, las siete familias, agricultura, magia, romance y matrimonio. Todos los detalles están confirmados desde el lanzamiento del 7 de julio de 2026.',
    ],
    faq: [{ q: '¿Se transfiere el progreso de la demo de Moonlight Peaks?', a: 'No — la versión completa comienza desde cero.' }],
  },
};
