// src/i18n/activities-es.ts
// Spanish translations for activities.ts entries (title/dek/body text only).
export type ActivityTrEs = { title: string; dek: string; body?: string[] };

export const activitiesEs: Record<string, ActivityTrEs> = {
  fishing: {
    title: 'Pesca', dek: 'Lanza una caña en las aguas del pueblo — una de las actividades en la demo gratuita.',
    body: [
      'La pesca es una actividad confirmada y se puede jugar en la demo gratuita. Pescas en las aguas del pueblo, donde también vive la familia de sirenas.',
      'La lista completa de peces y cualquier captura especial se confirma al lanzamiento.',
    ],
  },
  foraging: {
    title: 'Recolección', dek: 'Recolecta hallazgos en el bosque después del anochecer.',
    body: [
      'La recolección es una de las actividades confirmadas — recolectas hallazgos en los bosques alrededor del pueblo.',
      'Los objetos exactos de recolección y las temporadas se confirman al lanzamiento.',
    ],
  },
  'flower-arranging': {
    title: 'Arreglos florales', dek: 'Una artesanía creativa y relajante incluida en la demo.',
    body: [
      'Los arreglos florales son una de las artesanías relajantes confirmadas para el juego y mostradas en la demo gratuita.',
      'Cómo se usan y exhiben los arreglos se confirma al lanzamiento.',
    ],
  },
  embroidery: {
    title: 'Bordado', dek: 'Borda patrones — una de las artesanías relajantes de la demo.',
    body: [
      'El bordado es una artesanía confirmada y aparece en la demo gratuita junto a las otras actividades relajantes.',
      'Los patrones y recompensas se confirman al lanzamiento.',
    ],
  },
  'potion-brewing': {
    title: 'Elaboración de pociones', dek: 'Elabora pociones — incluyendo el Elixir de Alter Ego, que cambia tu apariencia.',
    body: [
      'La elaboración de pociones es una actividad confirmada. Un ejemplo con nombre es el Elixir de Alter Ego, una poción que cambia tu apariencia.',
      'La receta completa y la lista de ingredientes se confirman al lanzamiento — no inventamos recetas.',
    ],
  },
  decorating: {
    title: 'Decoración', dek: 'Coloca y organiza muebles y decoraciones para personalizar tu cabaña gótica.',
    body: [
      'Decorar tu hogar es una actividad central de comodidad — colocas y organizas muebles y decoraciones para hacer la cabaña tuya.',
      'El catálogo completo de muebles y decoraciones se confirma al lanzamiento.',
    ],
  },
  'character-creator': {
    title: 'Creador de personaje', dek: 'Crea tu propio vampiro — el creador de personaje se puede jugar en la demo.',
    body: [
      'Creas tu propio vampiro en el creador de personaje, parte de la demo gratuita. Los modelos de personaje están diseñados deliberadamente sin género, y las citas no tienen restricción de género.',
      'También nombras tu granja y tu mascota Hellkitten. La lista completa de opciones de personalización se confirma al lanzamiento.',
    ],
  },
  shapeshifting: {
    title: 'Transformación', dek: 'Conviértete en murciélago para recorrer el pueblo después del anochecer y llegar a lugares ocultos.',
    body: [
      'Como vampiro, puedes transformarte — por ejemplo en murciélago — para moverte rápido por el pueblo y llegar a lugares que no podrías a pie.',
      'Más formas se confirman al lanzamiento.',
    ],
  },
  'seasonal-events': {
    title: 'Eventos de temporada', dek: 'Celebraciones del pueblo repartidas a lo largo del año.',
    body: [
      'Las celebraciones de temporada son parte de la vida del pueblo, y se ha mostrado a un presentador teatral de eventos (Pumpkin Head) animando las reuniones.',
      'El calendario completo de eventos y las fechas se confirman al lanzamiento.',
    ],
  },
  pottery: {
    title: 'Cerámica', dek: 'Una artesanía relajante mencionada junto a los arreglos florales y el bordado.',
    body: [
      'Reportado por la comunidad: la cerámica se menciona como uno de los "pasatiempos oscuros" de Moonlight Peaks, junto a arreglos florales, bordado y cocina. La mecánica exacta, los materiales y dónde se desbloquea aún no están confirmados de forma independiente aquí.',
    ],
  },
  'marshmallow-roasting': {
    title: 'Tostar malvaviscos', dek: 'Una actividad relajante de fogata, también confirmada como minijuego de citas.',
    body: [
      'Reportado por la comunidad: tostar malvaviscos al punto preferido de una cita está confirmado como uno de los minijuegos usados durante las citas dentro del juego. También se menciona por separado como un pasatiempo independiente entre los "pasatiempos oscuros" de Moonlight Peaks.',
    ],
  },
  stargazing: {
    title: 'Observación de estrellas', dek: 'Un pasatiempo nocturno tranquilo, mencionado entre las actividades relajantes del juego.',
    body: [
      'Reportado por la comunidad: la observación de estrellas se menciona como uno de los pasatiempos de los "pasatiempos oscuros" de Moonlight Peaks. La mecánica exacta — si es una escena pasiva, un minijuego, o está ligada a un lugar específico — aún no está confirmada de forma independiente aquí.',
    ],
  },
  yoga: {
    title: 'Yoga', dek: 'Una actividad confirmada, vinculada a su propio logro, "Moonlit Stretching".',
    body: [
      'Confirmado: el yoga es una actividad real en Moonlight Peaks, vinculada al logro "Moonlit Stretching" (otorgado por asistir a tu primera sesión de yoga). También está en la lista de pasatiempos de los "pasatiempos oscuros" del juego, junto a cocina, pesca y el juego de cartas Nokturna.',
      'Reportado por la comunidad: un lugar llamado "cabaña de yoga" está vinculado a esta actividad. La mecánica exacta de la sesión, el horario y un posible NPC instructor aún no están confirmados de forma independiente aquí.',
    ],
  },
};
