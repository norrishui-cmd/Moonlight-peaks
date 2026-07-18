// src/i18n/items-es.ts
// Spanish translations for all current item categories — banner title/dek (shown on /es/items) and
// full detail-page content (shown on /es/items/{slug}). Item/example names inside `examples` are
// kept in English (proper nouns / no verified official Spanish localization exists for this game),
// matching the same principle used across the rest of the /es/ section.
export type ItemTranslationEs = {
  name: string;
  dek: string;
  summary: string;
  examples: string[];
};

export const itemsEs: Record<string, ItemTranslationEs> = {
  foraging: {
    name: 'Recolección',
    dek: 'Confirmado mediante el wiki oficial: productos recolectables por el pueblo (Moonlit Pines, Howling Marshes, Cave of Echoes, Crystal Cave), además de conchas en las playas.',
    summary: 'Confirmado mediante el wiki oficial de Moonlight Peaks: la recolección incluye tanto productos (Eggplant, Wild Potato, Sugarbones, Common Mushroom, Glowglammer) encontrados en zonas específicas con nombre, como conchas (White Conch, Pink Conch en pequeña/grande, Blue Clam, Maxima Clam) recolectadas en playas. Las versiones con calidad de estrella se venden más caro — por ejemplo, un Eggplant normal se vende por 90, uno de 1 estrella por 110. No todos los objetos tienen ya un precio de calidad con estrella confirmado; estos se marcan como no confirmados en vez de adivinarse.',
    examples: ['Eggplant (Moonlit Pines)', 'Wild Potato (Moonlit Pines)', 'Sugarbones (Howling Marshes)', 'Common Mushroom (Cave of Echoes / granja en verano)', 'Glowglammer (Crystal Cave)', 'White Conch, Pink Conch, Blue Clam, Maxima Clam (playas)'],
  },
  tools: {
    name: 'Herramientas',
    dek: 'Herramientas de granja y de uso diario para plantar, regar, recolectar, minar y cuidar tu granja.',
    summary: 'Conjunto inicial confirmado, accesible mediante la rueda de herramientas (en Switch: mantener presionado el gatillo derecho): Pala (no hay azada separada — la pala cumple esa función), Regadera, Hacha, Pico, Hoz y una varita rota. La caña de pescar y la red (red de insectos) se desbloquean por separado mediante misiones de personaje en vez de comprarse, y las mejoras de herramientas pasan por un único herrero, Ridge, en su tienda (normalmente llamada "Howling Hammer").',
    examples: ['Pala (también corta hierba — no hay azada separada)', 'Regadera (mejora de 3 niveles: 1,000 / 2,000 / 3,500 de oro, cada nivel reduce el consumo de agua por parcela)', 'Hacha (las mejoras reducen los golpes para talar árboles, desbloqueando madera más resistente)', 'Pico (las mejoras reducen los golpes para romper roca, desbloqueando piedras/minerales más grandes como cobre, hierro, oro — confirmado como prioridad de mejora más alta)', 'Hoz (las mejoras reducen el costo de energía al cortar hierba)', 'Caña de pescar (única mejora premium: 3,500 de oro + 3 Barras de Oro, mejora eficiencia y tamaño de captura; se desbloquea mediante una apuesta con Noel, no se compra)', 'La red / red de insectos (atrapa insectos y Soul Blobs; se desbloquea mediante Death tras la misión "A Bridge Too Far")', 'La escoba (una herramienta de velocidad de movimiento)', 'Varita (empieza rota; se repara mediante una cadena de misiones con Luna y Sabrina/Noel, no en la tienda normal de mejoras)'],
  },
  fertilizer: {
    name: 'Fertilizante',
    dek: 'Fuente confirmada: tu ganado produce fertilizante como subproducto, junto con leche y lana, y mejora la calidad de la cosecha.',
    summary: 'Confirmado mediante pruebas de la comunidad: el fertilizante proviene de tu ganado como subproducto junto a la leche y la lana, y su uso mejora medible mente la calidad de la cosecha — vale la pena mantener a los animales alimentados y contentos, incluso antes de contar los ingresos de leche/lana. El forraje y el forraje premium (guardados en el comedero) son la forma confirmada de alimentar a los animales durante la noche para que sus productos estén listos al despertar.',
    examples: ['Fertilizante producido por animales', 'Forraje / forraje premium (comida de animales)', 'Potenciadores de calidad de cosecha'],
  },
  clothing: {
    name: 'Ropa',
    dek: 'Confirmado: conjuntos de ropa, partes superiores, pantalones/faldas, zapatos y accesorios, cambiables en cualquier momento con un espejo en casa — separado del Elixir de Alter Ego, que no afecta la ropa.',
    summary: 'Confirmado al lanzamiento: la ropa se divide en conjuntos de atuendos, partes superiores, pantalones/faldas y zapatos, más una categoría separada de accesorios (brazos, rostro). Todo lo que llevas puesto durante la creación de personaje se desbloquea permanentemente en tu armario, así que nunca tienes que volver a comprar tu look inicial. La ropa nueva se compra con Aras en Third Eye Threads (el sastre de la familia Khazan). Los cambios de ropa funcionan en cualquier momento con un espejo en casa — un mecanismo separado y gratuito, distinto del Elixir de Alter Ego (una poción de un solo uso por 1,300 de oro comprada a Sabrina en Webb of Wonders, que cambia peinado, color de cabello, tono de piel, color de ojos, cejas y maquillaje, pero explícitamente no afecta la ropa ni los accesorios).',
    examples: ['Conjuntos de atuendos (por ejemplo, vestidos, overoles)', 'Partes superiores', 'Pantalones/faldas', 'Zapatos', 'Accesorios — brazos', 'Accesorios — rostro', 'Atuendo inicial de la creación de personaje (desbloqueado permanentemente en el armario)'],
  },
  fish: {
    name: 'Peces',
    dek: 'Una colección confirmada de alrededor de 22 especies de peces en varias zonas, niveles de calidad, y una forma memorable de conseguir la primera caña de pescar.',
    summary: 'Confirmado por dos fuentes independientes: conoces a Noel en los primeros días de juego junto al río, y te reta a atrapar 3 especies diferentes de peces antes que él — gana (no tiene límite de tiempo, así que es fácil) y te da tu primera caña de pescar más una recompensa en monedas. La colección incluye alrededor de 22 especies, cada una con su propio valor base de venta y valor de energía, ambos aumentando con calidad de 1 y 2 estrellas. Qué peces aparecen depende de la ubicación, temporada, clima y hora del día — un pez que no encuentras una noche podría estar esperando solo las condiciones correctas.',
    examples: ['Peces de mar', 'Peces de río', 'Peces raros/con nivel de calidad (Normal / 1 estrella / 2 estrellas)', 'Ingredientes de cocina'],
  },
  cooking: {
    name: 'Cocina',
    dek: 'Una estación de cocina desde el principio, más de 40 recetas confirmadas en las categorías de Comida, Sopa y Guiso, y Sushi, directamente del wiki oficial.',
    summary: 'Confirmado mediante el wiki oficial de Moonlight Peaks: más de 40 recetas están documentadas en tres categorías — Comida (hamburguesas, burritos, pan, pizza, queso), Sopa y Guiso, y Sushi. Cada receta lista su método de cocción (la mayoría usa la estación de cocina, algunas necesitan además la prensa de queso, el mortero encantado, la rejilla de secado de hierbas o un molino), sus ingredientes, y su precio de venta en niveles de calidad normal/1 estrella/2 estrellas, donde está confirmado. No todas las recetas tienen su método, ingredientes o precio ya completados en el wiki oficial mismo — estos campos se marcan aquí como no confirmados en vez de adivinarse. Consulta la base de datos completa de recetas abajo.',
    examples: ['Pan, hamburguesas, burritos, pizza y platos de queso', 'Más de 19 recetas de sopa y guiso', 'Más de 11 recetas de sushi/maki', 'Recetas que requieren prensa de queso, mortero encantado, rejilla de secado de hierbas o molino'],
  },
  crafting: {
    name: 'Creación',
    dek: 'Materiales, recetas, objetos de mesa de trabajo y mejoras de granja — incluyendo Dark Wood confirmado, usado en varias recetas de decoración.',
    summary: 'La creación es una categoría central del wiki, ya que los jugadores buscan recetas, ingredientes y desbloqueos. Confirmado: Dark Wood es un material de creación real, obtenido talando troncos de árboles sobredimensionados en el terreno de la granja con un Hacha de Cobre (un nivel de hacha mejorado, no el hacha inicial). Se usa en varias recetas de decoración, incluyendo un sillón de piel (con tablas de madera dura y tela) y una estantería-ataúd (con tablas). Más allá de Dark Wood, las estaciones de creación exactas, otros materiales y listas completas de recetas aún se están confirmando en vez de adivinarse.',
    examples: ['Dark Wood (de troncos del terreno de la granja, Hacha de Cobre)', 'Materiales de creación', 'Recetas de mesa de trabajo', 'Objetos útiles', 'Componentes de mejora'],
  },
  artifacts: {
    name: 'Artefactos',
    dek: 'Curiosidades coleccionables, probablemente vinculadas a exploración, ruinas, minas, seguimiento tipo museo o misiones.',
    summary: 'Las páginas de artefactos están pensadas para ayudar a los jugadores completistas a rastrear lo que han encontrado, dónde aparece cada objeto y si se usa para donaciones, misiones, regalos o trasfondo. El sistema exacto aún no está confirmado de forma independiente aquí.',
    examples: ['Artefactos coleccionables', 'Hallazgos de exploración', 'Curiosidades raras', 'Objetos de trasfondo'],
  },
  livestock: {
    name: 'Ganado',
    dek: 'Animales de granja confirmados, el proceso de compra del granero y los niveles de forraje.',
    summary: 'Confirmado al lanzamiento: necesitas un granero antes de poder tener animales — cómpralo con Ridge por 4,000 de oro más materiales. Después de construirlo, compras el ganado con Luna (solo los animales que estén esperando frente a su casa en ese momento). La alimentación funciona con forraje (elaborado en un Refinador) y un nivel posterior y mejor de forraje premium.',
    examples: ['Cheeken (un primer animal común; le gusta que lo acaricien y los sombreros)', 'Piggoat', 'Draculamb', 'Cowcula'],
  },
  potions: {
    name: 'Pociones',
    dek: 'Un sistema de caldero confirmado: Fiona enseña tu primera receta, Sabrina vende más, y la elaboración solo necesita receta, ingredientes y tiempo.',
    summary: 'Confirmado por Bonus Action: desbloqueas un caldero temprano en la historia, y Fiona te enseña tu primera receta de poción. Después, Sabrina vende más recetas de poción en Webb of Wonders. La elaboración misma es sencilla — elige una receta con los ingredientes disponibles, interactúa con el caldero y espera, de forma similar a cómo el jugo o el vino necesitan tiempo para terminar, luego recoge el resultado. El Elixir de Alter Ego (cambia peinado, color de cabello, tono de piel, color de ojos, cejas y maquillaje) es el ejemplo confirmado más claro de lo que puede hacer una poción.',
    examples: ['Elixir de Alter Ego', 'Receta inicial de Fiona', 'Recetas compradas con Sabrina (Webb of Wonders)', 'Pociones útiles'],
  },
  mineables: {
    name: 'Minerales',
    dek: 'Minerales, gemas y materias primas refinables, recolectadas bajo tierra sin combate, más un hechizo mágico de pico.',
    summary: 'Confirmado: la minería en Moonlight Peaks no tiene combate — recolectas mineral y cristales de cuevas y catacumbas para abastecer el horno, herramientas y mejoras. El Mineral de Cobre se encuentra específicamente en la Cave of Echoes, desbloqueada mediante "A Bridge Too Far". Los materiales en bruto deben procesarse en una estación de refinado (mineral a barras, piedra a piedra refinada), lo cual toma tiempo — consejo: llena el refinador antes de que termine la noche para que los materiales estén listos al despertar. La minería también otorga planos de muebles y aparatos, y cavar en los círculos brillantes del mapa da recompensas aleatorias.',
    examples: ['Mineral de Cobre (Cave of Echoes)', 'Barras (refinadas de mineral)', 'Gemas y cristales', 'Planos de minería'],
  },
  decorations: {
    name: 'Decoración',
    dek: 'Muebles y decoración, confirmados con conjuntos de varias piezas, múltiples variantes de color y un sistema de colocación mágico.',
    summary: 'Confirmado por una prueba y una guía de la primera semana: Ridge vende muebles en conjuntos temáticos (por ejemplo, un conjunto de cocina o de dormitorio) con múltiples variantes de color, así que no hay que amueblar una habitación pieza por pieza. Los muebles también están agrupados por estilo (por ejemplo, cocina rústica frente a un look más moderno). Una habilidad mágica confirmada te permite hacer levitar y mover directamente muebles e incluso objetos pequeños, en vez de guardarlos en el inventario y colocarlos en otro lugar — esto simplifica decorar y reorganizar la granja. Cada criatura o pez atrapado también se puede exhibir como decoración. Algunas piezas de decoración provienen específicamente de planos de minería, y las recetas de decoración (y cocina) también se encuentran cavando en puntos brillantes con remolinos.',
    examples: ['Conjuntos de muebles (cocina, dormitorio, etc.)', 'Múltiples variantes de color por pieza', 'Animales/peces exhibidos', 'Decoración de planos'],
  },
};
