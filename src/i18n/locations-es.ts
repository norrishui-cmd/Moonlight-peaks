// src/i18n/locations-es.ts
// Spanish translations for locations.ts entries (title/dek/body/sections/faq text only).
// slug/tag/status/image/related href are shared from data/locations.ts.
export type LocationTrEs = {
  title: string; dek: string; body?: string[];
  sections?: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const locationsEs: Record<string, LocationTrEs> = {
  town: {
    title: 'El pueblo', dek: 'El mágico pueblo de montaña de las siete familias sobrenaturales, donde empiezas tu nueva vida como vampiro.',
    body: [
      'Moonlight Peaks se desarrolla en un pequeño pueblo mágico de montaña que ha sido hogar de siete familias durante siglos. Llegas como un joven vampiro que deja atrás la gran ciudad.',
      'El pueblo mezcla la vida rural acogedora con lo sobrenatural — tus vecinos son hombres lobo, brujas, sirenas y más, y conocerlos es una parte importante del juego.',
    ],
    faq: [
      { q: '¿Dónde se desarrolla Moonlight Peaks?', a: 'En un pequeño pueblo mágico de montaña, hogar de siete familias sobrenaturales.' },
      { q: '¿Quiénes son los vecinos en Moonlight Peaks?', a: 'Confirmado: hombres lobo, brujas, sirenas y otros residentes sobrenaturales repartidos en siete familias — conocerlos es un elemento central del juego.' },
    ],
  },
  'town-square': {
    title: 'Plaza del pueblo', dek: 'El corazón comunitario del pueblo, donde se reúnen los residentes y ocurren eventos de temporada.',
    body: [
      'Como la mayoría de los pueblos de sims relajados, Moonlight Peaks se centra en espacios comunitarios donde los residentes se encuentran a diario.',
      'Las celebraciones de temporada son parte de la vida del pueblo — se ha mostrado un presentador teatral de eventos animando las reuniones. El diseño exacto y qué eventos ocurren aquí se confirman al lanzamiento.',
    ],
  },
  'your-farm': {
    title: 'Tu granja', dek: 'La granja familiar abandonada a la que te mudas y restauras hasta convertirla en una granja iluminada por la luna.',
    body: [
      'Tu punto de partida es una granja familiar abandonada, y restaurarla hasta convertirla en una granja funcional es la columna vertebral del juego.',
      'Cultivas plantas encantadas y flores brillantes, y crías ganado mágico como el Draculamb — todo cuidado de noche, ya que vuelves a tu ataúd al amanecer.',
      'Confirmado: nombras tu propia granja durante la creación de personaje (junto con tu mascota Hellkitten) — no hay un único nombre "oficial" fijo de la granja, ya que es un nombre propio que eliges tú mismo. Archivos filtrados antes del lanzamiento mencionaban un nombre de trabajo interno, "the Plot", pero eso es una etiqueta del desarrollador, no el nombre que ves o eliges en el juego.',
    ],
    faq: [
      { q: '¿Se cultiva de día en Moonlight Peaks?', a: 'No — cultivas de noche y vuelves a tu ataúd al amanecer.' },
      { q: '¿Cómo se llama tu granja en Moonlight Peaks?', a: 'No hay un único nombre fijo — confirmado: eliges el nombre de tu propia granja durante la creación de personaje, igual que nombras a tu personaje y a tu mascota Hellkitten.' },
    ],
  },
  'your-cottage': {
    title: 'Tu cabaña', dek: 'Tu hogar gótico personalizable, que decoras y amueblas a tu gusto.',
    body: [
      'Vives en una cabaña gótica que puedes hacer tuya. Decorar — colocar y organizar muebles y decoraciones — es una de las actividades centrales de comodidad.',
      'Qué habitaciones exactas, conjuntos de muebles y opciones de personalización están disponibles se confirma con el lanzamiento del juego completo.',
    ],
  },
  forest: {
    title: 'El bosque', dek: 'Los bosques alrededor del pueblo, donde recolectas después del anochecer.',
    body: [
      'Recolectar en el bosque es una de las actividades confirmadas del juego, así que espera hallazgos de temporada entre los árboles en las afueras del pueblo.',
      'Los objetos exactos de recolección y cualquier punto de referencia del bosque se confirman con el lanzamiento del juego completo.',
    ],
  },
  lake: {
    title: 'Lago Silverveil', dek: 'El lago confirmado del pueblo, hogar de la pesca y de la familia de sirenas.',
    body: [
      'Nombre confirmado: Lago Silverveil. Las zonas de agua permiten pesca, una de las actividades presentadas en la demo, y las sirenas del pueblo (la familia Hosu) están vinculadas al agua.',
      'Peces con nombre y puntos de pesca específicos aún no tienen fuente — consulta la guía de pesca para lo confirmado hasta ahora.',
    ],
  },
  pier: {
    title: 'El muelle', dek: 'Un lugar sobre el agua para pescar y momentos tranquilos.',
    body: [
      'Las zonas de pesca en los sims relajados suelen incluir un muelle o embarcadero para lanzar la caña.',
      'Si Moonlight Peaks nombra un muelle específico se confirma al lanzamiento — por ahora, trátalo como parte de la zona de pesca del lago.',
    ],
  },
  mines: {
    title: 'Cave of Echoes y minas', dek: 'Cómo desbloquear la Cave of Echoes, dónde encontrar cobre y hierro, y los bloqueos de progreso más comunes.',
    sections: [
      { title: 'Cómo desbloquear la Cave of Echoes', body: 'Confirmado: la Cave of Echoes está en la esquina inferior izquierda de la zona de Misty Shores, al oeste de la finca de Orlock. Está bloqueada al principio y se abre al completar la misión "A Bridge Too Far", que reabre la Finca Ambrosia y la zona circundante de Misty Shores.' },
      { title: 'Por qué la Cave of Echoes sigue bloqueada', body: 'Si aún no puedes llegar, la misión — no un objeto clave faltante o compra de tienda — es casi siempre el verdadero bloqueo. Reportado por la comunidad: la zona está bloqueada por una disputa de la historia entre Orlock y Fiona sobre un puente supuestamente maldito.' },
      { title: 'Cómo se relaciona "A Bridge Too Far" con el progreso', body: 'Consulta la guía completa de la misión "A Bridge Too Far" para requisitos y pasos. En resumen: primero completa "El plan de vino de Orlock", luego habla con los hechiceros del pueblo y regresa al puente para levantar la disputa/maldición y abrir esta zona.' },
      { title: 'Dónde encontrar Mineral de Cobre', body: 'Reportado por la comunidad: una vez dentro, el Mineral de Cobre parece roca normal con motas de cobre, extraído con un Pico. Los grupos grandes de mineral pueden dar hasta 6 minerales en vez de 1 de un nodo normal. Haz una Barra de Cobre en el Horno con 4 Mineral de Cobre + 1 Carbón.' },
      { title: 'Dónde encontrar Mineral de Hierro', body: 'Confirmado como recurso de nivel posterior en el mismo sistema de minas, desbloqueado una vez que la historia avanza más allá del nivel inicial de cobre. El disparador exacto de desbloqueo y la ubicación en la cueva aún no están verificados de forma independiente aquí.' },
      { title: 'Cuándo se desbloquean nuevos tipos de mineral', body: 'Confirmado: el acceso al mineral es escalonado en vez de todo a la vez — el Mineral de Cobre está disponible primero, y el Mineral de Hierro y Oro se abren después conforme avanzas en la historia principal, no inmediatamente al entrar a la cueva.' },
      { title: 'Problemas comunes de progreso en las minas', body: 'Si te falta cobre, revisa primero "A Bridge Too Far" en vez de buscar más intensamente en la cueva. Si tu Pico no puede romper un nodo, probablemente necesite una mejora de nivel en el Howling Hammer (la tienda de Ridge) antes de poder extraer ese tipo de mineral.' },
      { title: '¿Hay combate en las minas?', body: 'No — confirmado que no hay combate en ningún lugar de Moonlight Peaks, incluyendo las minas, así que explorar bajo tierra se mantiene pacífico.' },
    ],
    faq: [
      { q: '¿Hay combate en las minas?', a: 'No — los avances confirman que no hay combate en ningún lugar de Moonlight Peaks, incluyendo las minas.' },
      { q: '¿Por qué no encuentro Mineral de Cobre en las minas?', a: 'Confirmado: el Mineral de Cobre está en la Cave of Echoes, que solo se abre al completar la misión "A Bridge Too Far" — revisa tu progreso de misiones antes de asumir que te perdiste un punto de extracción.' },
    ],
  },
  graveyard: {
    title: 'El cementerio', dek: 'Un rincón tranquilo iluminado por la luna en Misty Shores, donde conoces a Death — confirmado como el cementerio Ambrosia.',
    body: [
      'Confirmado al lanzamiento: este cementerio está en la zona de Misty Shores, bloqueado al principio por un puente que Fiona maldijo tras una discusión ebria con Orlock. Completar la misión "A Bridge Too Far" levanta la maldición y abre el acceso.',
      'Una vez dentro, aquí conoces a Death por primera vez — su hogar confirmado, "la Cabaña de Death", está cerca.',
      'Archivos filtrados antes del lanzamiento nombran este lugar "cementerio Ambrosia", junto con una "finca Ambrosia" a juego — probablemente la casa ancestral de la familia vampírica.',
    ],
    faq: [
      { q: '¿Cómo se desbloquea el cementerio en Moonlight Peaks?', a: 'Confirmado: completa la misión "A Bridge Too Far", que levanta una maldición que Fiona puso en el puente hacia Misty Shores tras una discusión con Orlock.' },
      { q: '¿Dónde se conoce a Death en Moonlight Peaks?', a: 'Confirmado: en el cementerio Ambrosia, una vez que "A Bridge Too Far" desbloquea Misty Shores. El hogar confirmado de Death, "la Cabaña de Death", está cerca.' },
    ],
  },
  shops: {
    title: 'Tiendas del pueblo', dek: 'Las tiendas con nombre del pueblo — ahora confirmadas con dueños para la mayoría.',
    body: [
      'Tiendas y dueños confirmados: el Howling Hammer es la tienda de mejora de herramientas de Ridge (abierta solo entre semana); The Broken Lamp es el bar de Samael; Coffee & Coffins es el café de Mina y Evan; Third Eye Threads es la sastrería de Aras; y Webb of Wonders es la tienda de Sabrina, que vende el Elixir de Alter Ego y hechizos — un juego de palabras con su propio apellido de familia, Webb.',
      'Archivos filtrados antes del lanzamiento también nombraban un Midnight Market y una Bloom Boutique — aún no confirmados contra el juego real.',
    ],
    faq: [
      { q: '¿Qué tiendas hay en Moonlight Peaks?', a: 'Confirmado: el Howling Hammer (mejoras de herramientas, Ridge), The Broken Lamp (bar, Samael), Coffee & Coffins (café, Mina y Evan), Third Eye Threads (ropa, Aras) y Webb of Wonders (pociones y ropa, Sabrina).' },
      { q: '¿Hay un Midnight Market o una Bloom Boutique en Moonlight Peaks?', a: 'Aún no confirmado — estos nombres aparecen en archivos filtrados antes del lanzamiento, pero aún no se han verificado contra el juego real.' },
    ],
  },
  landmarks: {
    title: 'Puntos de referencia y lugares notables', dek: 'Lugares con nombre más allá de las zonas centrales — la mayoría ahora confirmados con contexto real.',
    sections: [
      { title: 'Misty Shores, Moonlit Pines, Pink Grove y Luna Bay', body: 'Confirmado: Misty Shores es la zona de la familia Ambrosia, hogar de la Cave of Echoes (mineral) y el cementerio donde conoces a Death, desbloqueado mediante la misión "A Bridge Too Far". Moonlit Pines es donde tiene su sede el aquelarre de brujas. Pink Grove es el hogar del demonio del amor Llemi, que solo aparece allí principalmente durante los festivales. Luna Bay es donde vive la familia de sirenas Hosu, que llega aproximadamente un año después de comenzar la historia.' },
      { title: 'Howling Marshes', body: 'Confirmado por múltiples fuentes de la semana de lanzamiento: está justo al norte del pueblo principal y al este de Moonlit Pines. Se confirman dos entradas — una justo al este del puesto de semillas de Luna en Moonlit Pines, la otra justo al este del ayuntamiento. Te dirigen aquí como parte de "Tensión en el Crest Garden". Los objetos cosechables confirmados aquí incluyen Sugarbone y varias flores, que vale la pena procesar en una Estación de Cocina o Rejilla de Secado en vez de venderlos crudos. La casa de la familia Logan también está aquí, junto con una cripta inaccesible en tu primera visita, y una zona norte que tampoco es accesible aún — ambas probablemente ligadas a misiones posteriores.' },
      { title: 'Moonlit Slopes, la cripta, Moonlight Tower y Crest Garden', body: 'También confirmado mediante el wiki oficial del juego: Moonlit Slopes, la cripta, Moonlight Tower y el Crest Garden de la familia Khazan son todos lugares reales. Las descripciones completas de cada uno aún se están verificando.' },
    ],
  },
  'town-hall': {
    title: 'Ayuntamiento', dek: 'Donde te registras como nuevo residente, atendido por la alcaldesa Brook.',
    body: [
      'Confirmado al lanzamiento: el ayuntamiento es donde te registras al principio como nuevo residente y conoces a la alcaldesa Brook (cabeza de la familia de hombres lobo Logan), quien te regala a Chester, el baúl viviente, en esta visita.',
      'El tablón de anuncios del pueblo — los Trabajos de Albertus, gestionado por un búho llamado Albertus — también tiene su sede aquí y lista las misiones disponibles.',
    ],
    faq: [
      { q: '¿Quién dirige el ayuntamiento en Moonlight Peaks?', a: 'Confirmado: la alcaldesa Brook, cabeza de la familia de hombres lobo Logan, quien te regala a Chester (un baúl viviente) al registrarte como nuevo residente.' },
      { q: '¿Dónde está el tablón de misiones en Moonlight Peaks?', a: 'Confirmado: los Trabajos de Albertus, un tablón de anuncios gestionado por un búho llamado Albertus, tiene su sede en el ayuntamiento y lista las misiones disponibles.' },
    ],
  },
  'ambrosia-mansion': {
    title: 'Finca Ambrosia', dek: 'La casa ancestral de la familia vampírica Ambrosia.',
    body: [
      'Confirmado mediante el wiki oficial del juego: la Finca Ambrosia es el hogar de la familia vampírica Ambrosia, junto con el cercano cementerio Ambrosia, donde se encuentra a Death.',
    ],
    faq: [
      { q: '¿Quién vive en la Finca Ambrosia?', a: 'Confirmado mediante el wiki oficial del juego: la familia vampírica Ambrosia, cuya casa ancestral es esta.' },
      { q: '¿La Finca Ambrosia está cerca del cementerio?', a: 'Sí, confirmado: la Finca Ambrosia está junto al cercano cementerio Ambrosia, donde se encuentra a Death.' },
    ],
  },
  'silverveil-museum': {
    title: 'El museo', dek: 'Un edificio de colecciones basado en donaciones que abre a mitad del primer año, una vez que Persephone, Jada y Winston se mudan al pueblo.',
    body: [
      'Confirmado: el museo no existe desde el primer día — abre una vez que se desarrolla una trama sobre la mudanza de Persephone, Jada y Winston al pueblo (la casa abandonada junto al muelle). Reportado por la comunidad: para muchos jugadores esto ocurre alrededor del inicio del otoño en el primer año, dependiendo de tu propio ritmo con las misiones tempranas.',
      'Confirmado: donar funciona diferente a hablar con un dueño de tienda. El museo tiene varias salas de colección temáticas, accesibles mediante un portal en la sala principal, y donas yendo a la colección relevante e interactuando con un letrero de exclamación junto a ella — el mismo estilo de icono usado en otros lugares para contenido de historia pendiente.',
      'Confirmado: los objetos que aún te faltan para una colección muestran un pequeño icono de museo en tu inventario, para que no vendas o uses accidentalmente algo que aún necesitas. Los requisitos de calidad varían según la colección — la colección agrícola específicamente pide cultivos y productos de mayor calidad (no cualquiera), así que vale la pena guardar tus mejores cosechas en vez de venderlo todo.',
      'Aún no confirmado de forma independiente aquí: el número exacto de salas de colección, listas completas de donación por sala, y qué recompensas concretas desbloquea cada colección.',
    ],
    faq: [
      { q: '¿Cuándo abre el museo en Moonlight Peaks?', a: 'Confirmado: no desde el primer día — abre una vez que Persephone, Jada y Winston se mudan al pueblo, una trama que para muchos jugadores ocurre alrededor del inicio del otoño en el primer año.' },
      { q: '¿Cómo se dona al museo?', a: 'Confirmado: ve a la sala de colección relevante (accesible mediante un portal en la sala principal) e interactúa con un letrero de exclamación junto a ella, en vez de hablar con un dueño de tienda.' },
    ],
  },
  'yoga-shack': {
    title: 'Cabaña de yoga', dek: 'Un lugar de actividad confirmado para yoga, uno de los "pasatiempos oscuros" del juego.',
    body: [
      'Confirmado mediante el wiki oficial del juego que existe, vinculado al yoga — una de las actividades de pasatiempo junto con pesca, cocina y Nokturna.',
    ],
  },
  'khazan-temple': {
    title: 'Templo Khazan', dek: 'Un lugar vinculado a la familia de videntes Khazan.',
    body: [
      'Confirmado mediante el wiki oficial del juego que existe. Más detalles sobre qué ocurre aquí aún no tienen fuente.',
    ],
  },
  'crystal-cave': {
    title: 'Crystal Cave y las Twilight Catacombs', dek: 'Una cueva con gemas, separada de la Cave of Echoes, ubicada junto a la casa de Fiona.',
    body: [
      'Confirmado: la Crystal Cave es una zona subterránea independiente, separada de la Cave of Echoes, ubicada a la izquierda de la casa de Fiona. Una gran roca bloquea la entrada hasta que mejoras tu Pico al menos al nivel de cobre.',
      'Confirmado: dentro aparecen abundantes nodos de Cuarzo Rosa, junto con otras gemas. El Cuarzo Rosa se muele en polvo con el Mortero Encantado (desbloqueado una vez que empiezas a aprender magia) y se usa en varias recetas de creación y misiones.',
      'Confirmado mediante el wiki oficial del juego: además de la Cave of Echoes, las minas también incluyen otra zona llamada Twilight Catacombs — lo que sugiere que las zonas subterráneas se dividen en varias zonas independientes en vez de una sola cueva. Confirmado en otro lugar: aquí también se llevan los Vampster (pequeñas criaturas que se esconden por el pueblo y la mayoría de casas) a través de un agujero para completar su cadena de misiones de recolección, una vez que las misiones tempranas de la historia desbloquean el acceso a las catacumbas.',
      'Para llegar a la Crystal Cave misma, Misty Shores ya debe estar desbloqueada (mediante la misión "A Bridge Too Far"), ya que ahí se encuentran la Cave of Echoes y sus mejoras de Pico.',
    ],
    faq: [
      { q: '¿Dónde está la Crystal Cave en Moonlight Peaks?', a: 'Confirmado: es una zona subterránea independiente a la izquierda de la casa de Fiona, separada de la Cave of Echoes. Una roca bloquea la entrada hasta que tu Pico alcanza el nivel de cobre.' },
      { q: '¿Qué se obtiene de la Crystal Cave?', a: 'Confirmado: aparecen abundantes nodos de Cuarzo Rosa junto con otras gemas. El Cuarzo Rosa se muele en polvo con el Mortero Encantado y se usa en varias recetas de creación y misiones.' },
    ],
  },
  'howling-marshes': {
    title: 'Howling Marshes', dek: 'Justo al norte del pueblo y al este de Moonlit Pines — dos entradas confirmadas, Sugarbone y flores cosechables, y la casa de la familia Logan.',
    body: [
      'Confirmado por múltiples fuentes de la semana de lanzamiento: Howling Marshes está justo al norte del pueblo principal y al este de Moonlit Pines.',
      'Se confirman dos entradas: una justo al este del puesto de semillas de Luna en Moonlit Pines, la otra justo al este del ayuntamiento. Te dirigen aquí como parte de la misión de historia "Tensión en el Crest Garden".',
      'Los objetos cosechables confirmados aquí incluyen Sugarbone y varias flores — vale la pena procesarlos en una Estación de Cocina o Rejilla de Secado en vez de venderlos crudos.',
      'La casa de la familia Logan también está aquí, junto con una cripta inaccesible en tu primera visita, y una zona norte que tampoco es accesible aún — ambas probablemente ligadas a misiones posteriores.',
    ],
    related: [{ label: 'Todos los puntos de referencia', href: '/locations/landmarks' }, { label: 'Familia Logan', href: '/families' }, { label: 'El pueblo', href: '/locations/town' }],
    faq: [
      { q: '¿Dónde están las Howling Marshes en Moonlight Peaks?', a: 'Confirmado: justo al norte del pueblo principal y al este de Moonlit Pines. Hay dos entradas — una justo al este del puesto de semillas de Luna en Moonlit Pines, la otra justo al este del ayuntamiento.' },
      { q: '¿Cómo se desbloquean las Howling Marshes?', a: 'Te dirigen aquí como parte de la misión de historia "Tensión en el Crest Garden" — no está bloqueada detrás de un desbloqueo separado.' },
      { q: '¿Qué se puede cosechar en las Howling Marshes?', a: 'Los objetos cosechables confirmados incluyen Sugarbone y varias flores. Vale la pena procesarlos en una Estación de Cocina o Rejilla de Secado para obtener el mejor valor en vez de venderlos crudos.' },
    ],
  },
  'twilight-catacombs': {
    title: 'Twilight Catacombs', dek: 'Una red de túneles subterráneos bloqueada que conecta la Cripta, la Crystal Cave, el cementerio de Misty Shores, Luna Bay y las Howling Marshes, desbloqueada donando al Museo.',
    body: [
      'Confirmado: las Twilight Catacombs son una red de túneles subterráneos bloqueada con entradas y salidas repartidas por el mapa, en vez de una mazmorra única y autocontenida. Hay puertas en la Cripta (donde está Viktor) y en el cementerio de Misty Shores, y al interactuar con ellas antes de desbloquearlas solo dicen que están "cerradas desde el otro lado" sin explicar cómo abrirlas.',
      'Confirmado: el camino de desbloqueo pasa por el Museo, no es un objeto llave independiente que encuentras explorando. Alcanza el 25% de finalización general de donaciones del Museo, y Jada te da la Dracula Insignia Key. Muestra esa llave a Viktor en la Cripta para activar la misión "A Key to the Deep" y abrir las catacumbas.',
      'Confirmado: una vez dentro, la red de túneles conecta varias zonas subterráneas y exteriores del juego mediante placas de presión azules — una conecta con una puerta derrumbada en la Crystal Cave, otra con la entrada de las catacumbas en el cementerio de Misty Shores, otra al norte a lo largo del río con una puerta derrumbada en Luna Bay, y otra al este con la entrada de las catacumbas en las Howling Marshes.',
      'Reportado por un walkthrough: tras encontrar estas conexiones, dormir en tu ataúd y revisar tu buzón al día siguiente trae una carta de Samael. Visitarlo en The Broken Lamp te desbloquea una entrada adicional.',
    ],
    related: [{ label: 'Crystal Cave', href: '/locations/crystal-cave' }, { label: 'Las minas', href: '/locations/mines' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Museo', href: '/locations/silverveil-museum' }, { label: 'Viktor', href: '/characters/viktor-dracula' }, { label: 'Samael', href: '/characters/samael' }],
    faq: [
      { q: '¿Cómo se desbloquean las Twilight Catacombs en Moonlight Peaks?', a: 'Confirmado: alcanza el 25% de finalización de donaciones del Museo para recibir la Dracula Insignia Key de Jada, luego muéstrasela a Viktor en la Cripta para iniciar la misión "A Key to the Deep", que abre las catacumbas.' },
      { q: '¿Dónde están las entradas de las Twilight Catacombs en Moonlight Peaks?', a: 'Las entradas confirmadas están en la Cripta (ubicación de Viktor) y el cementerio de Misty Shores. Reportado por un walkthrough: las placas de presión internas también conectan con la Crystal Cave, Luna Bay y las Howling Marshes una vez dentro.' },
      { q: '¿Qué hacen las placas de presión azules en las Twilight Catacombs?', a: 'Reportado por un walkthrough: pisar cada una abre una conexión de atajo a una puerta derrumbada diferente en otra parte del mapa — Crystal Cave, el cementerio de Misty Shores, Luna Bay y las Howling Marshes — convirtiendo las catacumbas en un centro que acorta los viajes entre esas zonas.' },
    ],
  },
  'crest-garden': {
    title: 'Crest Garden', dek: 'Un jardín del pueblo junto al ayuntamiento que muestra los escudos de las siete familias conforme los desbloqueas a través de la historia principal.',
    body: [
      'Confirmado por el wiki oficial: el Crest Garden está ubicado junto al ayuntamiento y muestra los escudos de cada una de las siete familias de Moonlight Peaks conforme se desbloquean con el progreso de la historia — un rastreador visual de cuánto has avanzado en las tramas familiares centrales del juego.',
      'Reportado por un walkthrough: el escudo de la familia Logan específicamente desaparece a mitad de camino, enviándote a un desvío de misión de recuperación — Dragan te señala The Broken Lamp para obtener información, lo cual lleva a las Howling Marshes, donde resulta que Yabbis se comió el escudo y quiere una Barra de Cobre a cambio.',
      'Reportado por un walkthrough: los últimos dos escudos en completarse pertenecen a las dos familias vampiro, Ambrosia y Dracula. Orlock pide materiales de creación (piedra refinada, barras de oro y vidrio) para el escudo Ambrosia, mientras que la misión del escudo Dracula se describe como la conclusión emocional de la historia principal, activada por una carta unos días después de desbloquear la transformación en murciélago.',
    ],
    related: [{ label: 'Ayuntamiento', href: '/locations/town-hall' }, { label: 'Familias', href: '/families' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Dragan', href: '/characters/dragan' }, { label: 'Yabbis', href: '/characters/yabbis' }, { label: 'Orlock', href: '/characters/orlock' }],
    faq: [
      { q: '¿Dónde está el Crest Garden en Moonlight Peaks?', a: 'Confirmado por el wiki oficial: está ubicado junto al ayuntamiento.' },
      { q: '¿Qué hace el Crest Garden en Moonlight Peaks?', a: 'Confirmado: muestra los escudos de las siete familias del pueblo, desbloqueándose uno por uno conforme avanzas la historia principal de cada familia.' },
      { q: '¿Por qué falta un escudo familiar en el Crest Garden?', a: 'Reportado por un walkthrough: al menos un escudo (el de Logan) está escrito como un pequeño desvío de misión de recuperación en vez de desbloquearse automáticamente — en ese caso, Yabbis se lo había comido y quería una Barra de Cobre para devolverlo.' },
      { q: '¿Qué escudos se desbloquean al final en el Crest Garden?', a: 'Reportado por un walkthrough: los dos escudos de familias vampiro, Ambrosia y Dracula, son los últimos en completarse, y la misión del escudo Dracula se describe como la conclusión emocional de la historia.' },
    ],
  },
  'moonlit-slopes': {
    title: 'Moonlit Slopes', dek: 'El hogar de la Diosa de la Luna, confirmado que se bloquea de nuevo tras tu primera invitación hasta desbloquear la forma de murciélago.',
    body: [
      'Confirmado: Moonlit Slopes es el hogar de la Diosa de la Luna, alcanzado tras resolver el arco de historia "A Missing Moon", donde los videntes de la familia Khazan caen en trance simultáneo y la luna desaparece del cielo. Una breve misión de seguimiento, "The Moon in the Sky", hace que te invite formalmente a visitarla.',
      'Confirmado: tras esa primera visita, Moonlit Slopes se bloquea de nuevo y permanece inaccesible hasta que desbloqueas la forma de murciélago mediante la misión "Master of the Night" — así que si no puedes volver a entrar justo después de conocer a la Diosa de la Luna, eso es esperado y no un error.',
    ],
    related: [{ label: 'Transformación', href: '/shapeshifting' }, { label: 'Diosa de la Luna', href: '/characters/moon-goddess' }, { label: 'Misiones', href: '/quests' }],
    faq: [
      { q: '¿Dónde se conoce a la Diosa de la Luna en Moonlight Peaks?', a: 'Confirmado: en Moonlit Slopes, tras completar "A Missing Moon" y la breve misión de seguimiento "The Moon in the Sky", donde te invita formalmente.' },
      { q: '¿Por qué no puedo volver a Moonlit Slopes tras visitarlo una vez?', a: 'Confirmado: la zona se bloquea de nuevo tras tu primera visita y solo se reabre una vez que desbloqueas la forma de murciélago mediante la misión "Master of the Night" — esto es esperado, no un error.' },
    ],
  },
  'midnight-market': {
    title: 'Midnight Market', dek: 'Un mercado exclusivo de fin de semana en el pueblo que vende sombreros para animales, ingredientes de pociones y otros objetos no disponibles entre semana.',
    body: [
      'Confirmado por reportes de la comunidad: el Midnight Market es un evento exclusivo de fin de semana en el pueblo, que ocurre sábados y domingos, distinto de las tiendas regulares de días laborables del juego.',
      'Reportado: Snek vende sombreros diminutos para tus animales de granja en el Midnight Market, y Sabrina también vende ahí el Alchemist\'s Globe y otros artículos relacionados con pociones — objetos no confirmados como disponibles con ninguno de los dos personajes durante el horario regular de días laborables.',
    ],
    related: [{ label: 'Snek', href: '/characters/snek' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: 'Animales de granja', href: '/farm/animals' }, { label: 'Pociones', href: '/items/potions' }],
    faq: [
      { q: '¿Cuándo está abierto el Midnight Market en Moonlight Peaks?', a: 'Reportado por la comunidad: solo sábados y domingos, distinto del horario regular de tiendas de días laborables del juego.' },
      { q: '¿Qué se puede comprar en el Midnight Market en Moonlight Peaks?', a: 'Reportado: sombreros diminutos para animales de granja de Snek, y el Alchemist\'s Globe y otros artículos relacionados con pociones de Sabrina — objetos no confirmados como vendidos en días laborables regulares.' },
    ],
  },
  'bloom-boutique': {
    title: 'Bloom Boutique', dek: 'Una tienda con nombre confirmada como existente en el pueblo mediante la propia navegación del wiki oficial, con detalles aún sin confirmar.',
    body: [
      'Confirmado que existe mediante la propia navegación del sitio del wiki oficial, listada junto a las otras tiendas con nombre del juego. Más allá del nombre, aún no tenemos detalles verificados de forma independiente sobre qué vende Bloom Boutique, quién la dirige, o su horario — no adivinamos un tema solo porque el nombre sugiera flores.',
      'Dado el nombre y los sistemas existentes de arreglos florales y regalos del juego, un enfoque floral o de decoración sería una suposición razonable, pero etiquetamos esto como esperado en vez de confirmado hasta que una fuente lo verifique contra el juego real.',
    ],
    related: [{ label: 'Tiendas', href: '/locations/shops' }, { label: 'Actividades: arreglos florales', href: '/activities/flower-arranging' }],
    faq: [
      { q: '¿Qué es Bloom Boutique en Moonlight Peaks?', a: 'Confirmado que existe como tienda con nombre mediante la propia navegación del wiki oficial. Qué vende y quién la dirige aún no está confirmado de forma independiente aquí — no adivinamos el contenido de la tienda solo por el nombre.' },
    ],
  },
};
