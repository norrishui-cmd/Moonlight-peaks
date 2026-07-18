// src/i18n/platforms-es.ts
export type PlatformTrEs = { title: string; dek: string; body?: string[]; faq?: { q: string; a: string }[] };

export const platformsEs: Record<string, PlatformTrEs> = {
  'steam-deck': {
    title: 'Moonlight Peaks en Steam Deck', dek: 'Moonlight Peaks ya está disponible en Steam para PC y Mac, así que también se puede jugar en Steam Deck.',
    body: [
      'Moonlight Peaks está disponible en Steam para Windows y Mac, por lo que funciona en Steam Deck como otros títulos de Steam.',
      'Un problema confirmado de la semana de lanzamiento: algunos jugadores experimentan un fallo al iniciar en Steam Deck. La solución reportada es cambiar la herramienta de compatibilidad en Propiedades → Configuración de compatibilidad del juego a Proton 9.0-4. Una calificación oficial de Valve como "verificado para Steam Deck" aún no está confirmada aquí.',
    ],
    faq: [{ q: '¿Moonlight Peaks está verificado para Steam Deck?', a: 'Una calificación oficial de Valve como "verificado para Steam Deck" aún no está confirmada aquí. El juego se puede jugar en Steam en el Deck; si falla al iniciar, la solución reportada es cambiar a Proton 9.0-4.' }],
  },
  'switch': {
    title: 'Moonlight Peaks en Nintendo Switch', dek: 'Moonlight Peaks ya está disponible en la Nintendo Switch original — precio, demo gratuita y la actualización a Switch 2.',
    body: [
      'Moonlight Peaks se lanzó el 7 de julio de 2026 en la Nintendo Switch original, y la demo gratuita está disponible en el eShop.',
      'También existe una edición separada y mejorada para Nintendo Switch 2; a los jugadores que compraron en la Switch original se les informó que habrá disponible un pase de actualización de Switch a Switch 2.',
      'Confirmado al lanzamiento: soporte completo de mando desde el principio — los evaluadores describen el juego como orientado al mando por diseño, lo cual encaja bien con el juego portátil en Switch.',
    ],
    faq: [{ q: '¿Moonlight Peaks está en la Nintendo Switch original?', a: 'Sí — se lanzó el 7 de julio de 2026 en la Switch original, y la demo gratuita está en el eShop. También hay disponible una edición separada y mejorada para Switch 2.' }],
  },
  'switch-2': {
    title: 'Moonlight Peaks en Nintendo Switch 2', dek: 'Una edición nativa para Nintendo Switch 2 está confirmada por $39.99 — esto es lo que encontraron los evaluadores en modo portátil.',
    body: [
      'Moonlight Peaks tiene su propia edición para Nintendo Switch 2 además de la versión de Switch original, con un precio de $39.99 (frente a $34.99 en Steam, Switch y Android), y la demo gratuita se puede jugar en Switch 2.',
      'Se mencionó un pase de actualización de Switch a Switch 2 para jugadores que compren en la Switch original.',
      'Confirmado por reseñas de la semana de lanzamiento: la edición de Switch 2 funcionó excepcionalmente bien en modo portátil, con una distribución de controles sólida y bien organizada — una de las experiencias portátiles más fuertes entre las plataformas confirmadas.',
    ],
    faq: [{ q: '¿Hay una versión de Switch 2 de Moonlight Peaks?', a: 'Sí — una edición nativa para Nintendo Switch 2 está confirmada por $39.99, y la demo gratuita se puede jugar en Switch 2. Los evaluadores encontraron que funcionó excepcionalmente bien en modo portátil.' }],
  },
  'android': {
    title: 'Moonlight Peaks en Android (Google Play)', dek: 'Moonlight Peaks ya está disponible en Android a través de Google Play — una compra única, sin gacha ni compras dentro de la app.',
    body: [
      'Moonlight Peaks se lanzó el 7 de julio de 2026 en Android a través de Google Play (Google Play Games), convirtiéndose en uno de los pocos sims de vida relajados de este alcance en lanzarse el primer día en móviles, al mismo precio que Steam y Switch: $34.99.',
      'Confirmado: es una compra única sin mecánicas de gacha, temporizadores de energía o compras dentro de la app — el juego completo se desbloquea con ese único precio, igual que en PC o consola.',
      'No se ha anunciado una versión para iOS; Android a través de Google Play es la única plataforma móvil confirmada.',
      'Aún no confirmado de forma independiente aquí: los requisitos mínimos exactos del dispositivo y los detalles completos del esquema de controles táctiles.',
    ],
    faq: [
      { q: '¿Moonlight Peaks está en iOS o iPhone?', a: 'No se ha anunciado una versión para iOS. En móviles, Moonlight Peaks está disponible en Android a través de Google Play.' },
      { q: '¿La versión móvil de Moonlight Peaks tiene gacha o compras dentro de la app?', a: 'No, confirmado: es una compra única con el juego completamente desbloqueado, sin gacha, temporizadores de energía o compras dentro de la app.' },
    ],
  },
};
