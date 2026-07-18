// src/i18n/faq-es.ts
// Spanish translations for all FAQ entries — q/a text only. slug/cat/related fields are shared
// from the English faqs array in data/faq.ts. Only entries with a real, sourced answer are
// translated here; nothing is invented.
export type FaqTranslationEs = { q: string; a: string; more?: string[] };

export const faqEs: Record<string, FaqTranslationEs> = {
  // ── Platforms, price & demo ──
  'when-does-moonlight-peaks-release': {
    q: '¿Cuándo se lanza Moonlight Peaks?',
    a: 'Moonlight Peaks se lanzó el 7 de julio de 2026 y ya está disponible.',
    more: ['Salió el mismo día en Steam (PC y Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2 y Android a través de Google Play.'],
  },
  'how-much-does-moonlight-peaks-cost': {
    q: '¿Cuánto cuesta Moonlight Peaks?',
    a: 'Cuesta $34.99 en Steam (PC/Mac), Switch y Android, y $39.99 en Switch 2.',
    more: ['Hay un descuento de lanzamiento la primera semana, y se mencionó un pase de actualización de Switch a Switch 2.'],
  },
  'what-platforms-is-moonlight-peaks-on': {
    q: '¿En qué plataformas está disponible Moonlight Peaks?',
    a: 'Moonlight Peaks ya está disponible en Steam (Windows y Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2 y Android a través de Google Play.',
  },
  'is-moonlight-peaks-on-ps5-or-xbox': {
    q: '¿Moonlight Peaks está en PS5 o Xbox?',
    a: 'En resumen: no. No se ha anunciado una versión para PlayStation o Xbox. Las plataformas confirmadas son Steam, Steam Deck, Switch, Switch 2 y Android.',
    more: ['Si se anuncia una versión para PS5 o Xbox más adelante, actualizaremos esta página.'],
  },
  'is-there-a-moonlight-peaks-demo': {
    q: '¿Hay una demo de Moonlight Peaks?',
    a: 'Sí — una demo gratuita está disponible en Steam y en el eShop de Nintendo (también se puede jugar en Switch 2).',
    more: ['Incluye la creación de personaje y actividades relajantes como pesca, arreglos florales y bordado, además de interacciones tempranas con los residentes del pueblo.'],
  },
  'does-demo-progress-carry-over': {
    q: '¿El progreso de la demo se transfiere en Moonlight Peaks?',
    a: 'No — no se ha confirmado ninguna transferencia, así que el juego principal comienza desde cero sin importar cuánto hayas avanzado en la demo. Considera la demo como un adelanto para probar el tono, los controles y el flujo inicial del juego.',
  },

  // ── General ──
  'what-is-moonlight-peaks-about': {
    q: '¿De qué trata Moonlight Peaks?',
    a: 'Es un simulador de vida vampírica relajado. Juegas como el hijo del Conde Drácula, dejando la ciudad para restaurar una granja familiar abandonada en un pueblo sobrenatural lleno de hombres lobo, brujas, sirenas y más.',
    more: ['Cultivas de noche, aprendes magia y elaboras pociones, y haces amistad o romance con los habitantes de las siete familias del pueblo.'],
  },
  'who-makes-moonlight-peaks': {
    q: '¿Quién desarrolla Moonlight Peaks?',
    a: 'Lo desarrolla Little Chicken Game Company, con XSEED Games como editor en América y Marvelous Europe en Europa.',
  },
  'is-moonlight-peaks-multiplayer': {
    q: '¿Moonlight Peaks es multijugador?',
    a: 'No — Moonlight Peaks es completamente para un jugador. No se ha anunciado multijugador ni cooperativo; Steam lo lista como un solo jugador, y un desarrollador fue preguntado directamente sobre cooperativo en línea en las discusiones de Steam Community, sin que se confirmara nada.',
    more: ['Si se anuncia cooperativo más adelante, actualizaremos esta página.'],
  },
  'moonlight-peaks-reddit-discord-community': {
    q: '¿Hay un Reddit o Discord oficial de Moonlight Peaks?',
    a: 'Hasta ahora no hemos encontrado un subreddit oficial dedicado — no adivinamos ni enlazamos una comunidad no oficial como si fuera oficial. Los puntos de encuentro de la comunidad confirmados son el servidor oficial de Discord y los foros de discusión de Steam Community, ambos enlazados por los desarrolladores.',
    more: ['Si se confirma un subreddit oficial, lo añadiremos aquí en vez de remitir a uno no verificado.'],
  },
  'how-to-change-portrait-style': {
    q: '¿Cómo se cambia el estilo de retrato del personaje en Moonlight Peaks?',
    a: 'Confirmado al lanzamiento: abre el menú principal (el botón "+" en Nintendo Switch) para alternar entre dos preajustes del retrato de tu personaje — un estilo de caricatura con sombreado realista, o un estilo más adorable inspirado en anime.',
  },
  'moonlight-peaks-age-rating': {
    q: '¿Cuál es la clasificación por edad de Moonlight Peaks?',
    a: 'Confirmado al lanzamiento: PEGI 12 en Reino Unido/Europa y ESRB Teen (T) en EE. UU., debido a referencias al alcohol (puedes elaborar y beber cerveza y vino) y lenguaje romántico ligeramente sugerente.',
  },
  'moonlight-peaks-crashing-freezing': {
    q: '¿Por qué Moonlight Peaks se cierra o se congela?',
    a: 'Varios reportes confirmados de jugadores describen breves congelamientos cada pocos segundos (incluso en PC de gama alta) y fallos al salir de la granja o al iniciar en Steam Deck. Aún no hay una solución oficial, pero actualizar los drivers de la GPU, activar el modo de "máximo rendimiento" y cambiar a Proton 9.0-4 en Steam Deck ha ayudado a algunos jugadores.',
  },
  'moonlight-peaks-controller-not-working': {
    q: 'Mi mando no funciona en Moonlight Peaks — ¿qué hago?',
    a: 'Este es un problema reportado y sin resolver — los mandos funcionan durante la creación de personaje, pero después dejan de responder, con las opciones de reasignación en gris. Intenta desconectar y reconectar tu mando, o cambia a teclado/ratón hasta que aparezca una solución oficial.',
  },
  'moonlight-peaks-crops-wither-season-change': {
    q: '¿Los cultivos se marchitan con el cambio de estación en Moonlight Peaks?',
    a: 'Sí — confirmado por evaluadores: cuando la primavera pasa a verano (y probablemente en otros cambios de estación también), los cultivos de primavera se marchitan, incluso los mágicos. Planifica tus cosechas alrededor de los límites de temporada.',
  },
  'moonlight-peaks-mana-stamina-balance': {
    q: '¿Es difícil manejar el maná/energía en Moonlight Peaks?',
    a: 'Varios evaluadores criticaron el manejo del maná, especialmente al principio del juego — empiezas con una reserva pequeña de maná que solo se recarga una estrella por noche de sueño, y la comida/bebida que lo restaura es escasa al principio. Varios críticos consideraron que esto, junto con la barra de energía y el límite del amanecer, podría necesitar mejor equilibrio.',
  },
  'moonlight-peaks-night-length-cycle': {
    q: '¿Cuánto dura una noche en Moonlight Peaks?',
    a: 'Confirmado: tu noche va de las 6pm a las 6am en el juego y dura por defecto unos 15 minutos reales (similar a un día en Stardew Valley). Recolectar los 100 Soul Blobs para Death te recompensa con el Reloj Antiguo, que extiende esto a 25 minutos.',
  },
  'moonlight-peaks-how-to-save': {
    q: '¿Cómo se guarda en Moonlight Peaks?',
    a: 'Confirmado: solo puedes guardar durmiendo en tu ataúd, lo cual te lleva a la siguiente noche a las 6pm. No hay guardado manual a mitad de la noche, así que planifica tus tareas para llegar a casa antes del amanecer.',
  },
  'moonlight-peaks-starting-mana-energy': {
    q: '¿Cuánto maná y energía se tiene al principio?',
    a: 'Confirmado: empiezas con solo 3 puntos de maná, que se regeneran alrededor de una estrella por noche de sueño en vez de completamente. Tanto tu energía (resistencia) como tu barra de maná se restauran con comida cocinada — así que tener una pequeña reserva de comida es más importante que depender solo de cultivos comerciales.',
  },
  'moonlight-peaks-mini-map': {
    q: '¿Moonlight Peaks tiene minimapa?',
    a: 'No — confirmado que no hay minimapa. Tu posición y los puntos de referencia importantes aparecen en un mapa completo en su lugar, que también muestra dónde están los residentes en ese momento.',
  },
  'moonlight-peaks-well-price': {
    q: '¿Cuánto cuesta el pozo en Moonlight Peaks?',
    a: 'Reportado que el pozo cuesta 1,500 de oro y ayuda con el riego — una compra temprana más económica que el granero de 4,000 de oro.',
  },
  'moonlight-peaks-best-universal-gifts': {
    q: '¿Cuáles son los mejores regalos universales en Moonlight Peaks?',
    a: 'Pruebas de regalos de la comunidad (vía TheGamer y reportes de jugadores) sugieren que el Tulipán Morado es ampliamente apreciado por muchos residentes, mientras que las Semillas de Cebolla son ampliamente rechazadas — evítalas. Más allá de eso, la mayoría de residentes tiene preferencias individuales aún por catalogar. Saga es el único caso totalmente confirmado: le encanta el vino blanco y las flores individuales, pero no le gustan los ramos.',
  },
  'moonlight-peaks-how-to-get-copper': {
    q: '¿Cómo se consigue cobre en Moonlight Peaks?',
    a: 'Confirmado: el cobre viene de la Cave of Echoes, en la esquina inferior izquierda de la zona de Misty Shores (al oeste de la finca de Orlock). Está bloqueada al principio por la disputa entre Orlock y Fiona — debes completar "El plan de vino de Orlock" y "A Bridge Too Far" para levantar la maldición del puente y abrir la zona. Adentro, rompe las rocas con vetas de cobre con tu Pico; los grupos grandes de mineral pueden dar 6 minerales en vez de 1 de los nodos normales. Haz una Barra de Cobre en el Horno con 4 Mineral de Cobre + 1 Carbón.',
  },
  'moonlight-peaks-how-to-go-on-dates': {
    q: '¿Cómo se sale en citas en Moonlight Peaks?',
    a: 'Confirmado: primero alcanza el nivel 4 de corazón con un residente, luego puedes invitarlo a una cita. Las citas funcionan como minijuegos (por ejemplo, armar un ramo con los colores pedidos), no como escenas pasivas. Para encontrar escenas de eventos de corazón, abre tu mapa y busca signos de exclamación (entrar a la zona) o un aura brillante en un edificio (entrar a él).',
  },
  'moonlight-peaks-tool-upgrade-materials': {
    q: '¿Qué se necesita para mejorar herramientas en Moonlight Peaks?',
    a: 'Confirmado: las herramientas se mejoran en el Howling Hammer (la tienda de Ridge, abierta de lunes a viernes de 6pm a medianoche). Habla con Ridge, elige Tienda, luego "Quiero comprar algo" y desplázate dos veces a la derecha para llegar a la pestaña de mejoras. Las mejoras cuestan oro más Barras de Cobre, Plata u Oro según el nivel — así que primero necesitas acceso a las minas. La Hoz solo se puede mejorar dos veces; otras herramientas llegan a nivel Oro. Reportado por la comunidad: prioriza el Pico primero hasta Oro, ya que determina cuánto mineral te da la Cave of Echoes para los materiales de todas las demás herramientas.',
  },
  'moonlight-peaks-cant-interact-indoors': {
    q: '¿Por qué no puedo hacer clic en objetos dentro de mi casa?',
    a: 'Este es un error reportado y sin resolver — algunos jugadores no pueden hacer clic en objetos interiores (como el ataúd para dormir o las mascotas), mientras que las interacciones exteriores funcionan bien. Aún no hay solución confirmada; intenta recargar la zona o dormir hasta la noche siguiente, y repórtalo a support@xseedgames.com si persiste.',
  },
  'moonlight-peaks-exe-deleted-antivirus': {
    q: 'Mi antivirus eliminó Moonlight Peaks.exe — ¿qué hago?',
    a: 'Reportado que algunos antivirus marcan y eliminan erróneamente "Moonlight Peaks.exe", lo cual puede causar errores de inicio. Añade el .exe a la lista de exclusiones de tu antivirus y verifica los archivos del juego (Steam → clic derecho en el juego → Propiedades → Archivos instalados → Verificar integridad) para restaurarlo.',
  },

  // ── World & gameplay ──
  'is-there-combat-in-moonlight-peaks': {
    q: '¿Hay combate en Moonlight Peaks?',
    a: 'No. Los avances confirman que no hay combate en ningún lugar — incluso las minas y catacumbas se mantienen pacíficas, así que sigue siendo una experiencia relajada de principio a fin.',
  },
  'do-you-farm-at-night': {
    q: '¿Se cultiva de noche en Moonlight Peaks?',
    a: 'Sí. Como vampiro, haces el cultivo y cuidado después del anochecer y vuelves a tu ataúd antes del amanecer — un giro sobre el ciclo agrícola diurno habitual.',
  },
  'how-does-magic-work-in-moonlight-peaks': {
    q: '¿Cómo funciona la magia en Moonlight Peaks?',
    a: 'La magia se basa en una varita: reparas una varita rota, dibujas patrones de hechizos para lanzarlos, y administras maná (que recargas comiendo).',
    more: ['Hay un pequeño minijuego de riego, y desbloqueas hechizos que ahorran energía y reducen el trabajo de granja. También elaboras pociones como el Elixir de Alter Ego, que cambia tu apariencia.'],
  },
  'can-you-shapeshift-in-moonlight-peaks': {
    q: '¿Se puede transformar en Moonlight Peaks?',
    a: 'Sí. Puedes transformarte — por ejemplo en murciélago — para recorrer el pueblo rápidamente y llegar a zonas ocultas.',
  },
  'what-is-nokturna': {
    q: '¿Qué es Nokturna en Moonlight Peaks?',
    a: 'Nokturna es el juego de cartas coleccionables del pueblo. Recolectas cartas y retas a los residentes a duelos.',
    more: ['Las reglas completas y la lista de cartas se confirman al lanzamiento — no inventamos cartas.'],
  },
  'what-pets-and-livestock-are-there': {
    q: '¿Qué mascotas y ganado hay en Moonlight Peaks?',
    a: 'Puedes tener un Hellkitten de tres ojos como mascota y criar ganado mágico como el Draculamb.',
  },

  // ── Romance & marriage ──
  'can-you-get-married-in-moonlight-peaks': {
    q: '¿Se puede casar en Moonlight Peaks?',
    a: 'Sí — confirmado al lanzamiento. Propón matrimonio al nivel 8 de corazón, y la boda ocurre dentro de una semana, con la asistencia de los vampiros y hombres lobo del pueblo. Tu pareja se muda a tu granja después y desbloquea otro evento de corazón. No hay hijos en el juego.',
  },
  'can-you-have-children-in-moonlight-peaks': {
    q: '¿Se pueden tener hijos en Moonlight Peaks?',
    a: 'No. Puedes salir con residentes y casarte, pero criar hijos no es una función.',
  },
  'best-general-gifts-in-moonlight-peaks': {
    q: '¿Cuáles son regalos generales seguros en Moonlight Peaks?',
    a: 'Confirmado por múltiples fuentes de la semana de lanzamiento: combinar el color de un regalo con el color favorito de un residente suele funcionar bien en general, y un ramo de flores arreglado por ti mismo en el color preferido (mediante el minijuego de arreglos florales) es una opción segura y siempre disponible, que también funciona como decoración si no es aceptado. Los regalos hechos a mano — incluyendo ramos y bordados — se reporta que funcionan bien más allá de las preferencias individuales.',
  },
  'how-many-romance-options-are-there': {
    q: '¿Cuántas opciones románticas hay en Moonlight Peaks?',
    a: 'La página de Steam describe alrededor de dos docenas (unos 24) residentes disponibles románticamente. Reportes anteriores mencionaban 15, así que el elenco creció durante el desarrollo.',
    more: ['Las citas no tienen restricción de género, y la lista completa con nombres se confirmó más cerca del lanzamiento.'],
  },
  'is-dating-gender-locked-in-moonlight-peaks': {
    q: '¿Las citas tienen restricción de género en Moonlight Peaks?',
    a: 'No. Los modelos de personaje están diseñados deliberadamente sin género, así que puedes tener una relación romántica con cualquier residente disponible sin importar cómo diseñes a tu propio vampiro.',
  },
  'can-you-romance-a-werewolf': {
    q: '¿Se puede salir con un hombre lobo en Moonlight Peaks?',
    a: 'Sí. Saga, una mujer lobo, es una opción romántica confirmada. Dado que vampiros y hombres lobo suelen pelear, salir con alguien de ese lado es parte del encanto.',
  },
  'can-you-date-multiple-characters': {
    q: '¿Se puede salir con varios personajes a la vez en Moonlight Peaks?',
    a: 'Esto no se confirmó antes del lanzamiento — las reglas de exclusividad y poliamor no se revelaron.',
    more: ['Actualizaremos esta respuesta en cuanto la versión real muestre cómo funciona salir con varios residentes.'],
  },

  // ── Characters ──
  'who-is-saga': {
    q: '¿Quién es Saga en Moonlight Peaks?',
    a: 'Saga es una residente hombre lobo presentada por los desarrolladores y una opción romántica confirmada. Se dice que su energía cambia con la luna llena.',
  },
  'who-is-luna': {
    q: '¿Quién es Luna en Moonlight Peaks?',
    a: 'Luna se reporta como una bruja orientada a la agricultura — probablemente una fuente temprana de hechizos y conocimiento de jardinería. Los detalles se confirmaron al lanzamiento.',
  },
  'who-is-orlock': {
    q: '¿Quién es Orlock en Moonlight Peaks?',
    a: 'Orlock se reporta como cabeza de una familia vampírica, retratado como una figura cómica en avances prácticos.',
  },
  'who-is-count-dracula': {
    q: '¿Quién es el Conde Drácula en Moonlight Peaks?',
    a: 'El Conde Drácula es tu padre y una figura narrativa central. No es una opción romántica; la historia te hace salir de su sombra para demostrar que una vida inmortal más gentil es posible.',
  },

  // ── Added angle: high-intent "is/does/how" questions ──
  'is-moonlight-peaks-worth-it': {
    q: '¿Vale la pena Moonlight Peaks?',
    a: 'Se está consolidando como uno de los sims relajados más distintivos de 2026 — un simulador de vida vampírica en 3D con cultivo nocturno, magia con varita y una gran selección de romances — pero la respuesta honesta es probar primero la demo gratuita.',
    more: ['La demo te permite probar gratis el creador de personaje y actividades relajantes — la mejor forma de evaluar si te gusta antes de comprar.'],
  },
  'is-moonlight-peaks-free': {
    q: '¿Moonlight Peaks es gratis?',
    a: 'No — el juego completo cuesta $34.99 ($39.99 en Switch 2). Sin embargo, hay una demo gratuita en Steam y en el eShop de Nintendo.',
  },
  'is-moonlight-peaks-open-world': {
    q: '¿Moonlight Peaks es mundo abierto?',
    a: 'No se comercializa como un juego de mundo abierto. Es un simulador de vida relajado donde te mueves por el pueblo, tu granja y zonas cercanas como el bosque, el lago y las minas.',
    more: ['El diseño exacto del mapa y qué tan libre es la exploración se confirmaron al lanzamiento.'],
  },
  'is-moonlight-peaks-cozy': {
    q: '¿Moonlight Peaks es un juego relajado?',
    a: 'Sí. Es un simulador de vida gótico y relajado sin ningún tipo de combate, centrado en agricultura, artesanía, magia y relaciones.',
  },
  'how-long-is-moonlight-peaks': {
    q: '¿Cuánto dura Moonlight Peaks?',
    a: 'Como la mayoría de simuladores de vida, es abierto en vez de tener una duración de historia fija, así que el tiempo de juego varía mucho según el jugador.',
  },
  'is-moonlight-peaks-on-game-pass': {
    q: '¿Moonlight Peaks está en Game Pass?',
    a: 'No se ha anunciado un lanzamiento en Game Pass, y dado que no hay una versión de Xbox confirmada, no se espera Game Pass. Las plataformas confirmadas son Steam, Steam Deck, Switch, Switch 2 y Android.',
  },
  'can-you-play-moonlight-peaks-offline': {
    q: '¿Se puede jugar Moonlight Peaks sin conexión?',
    a: 'Moonlight Peaks es un juego de un solo jugador sin requisito en línea anunciado, así que se espera que sea jugable sin conexión. Los detalles exactos se confirmaron al lanzamiento.',
  },
  'is-moonlight-peaks-coming-to-mobile': {
    q: '¿Moonlight Peaks llega a móviles?',
    a: 'Sí — a Android, a través de Google Play, el día del lanzamiento. No se ha anunciado una versión para iOS o iPhone.',
  },
  'does-moonlight-peaks-have-co-op': {
    q: '¿Moonlight Peaks tiene cooperativo local u online?',
    a: 'No se ha anunciado cooperativo. Un jugador preguntó directamente a los desarrolladores sobre cooperativo en línea en las discusiones de Steam Community, sin que se confirmara nada. Todo indica actualmente que Moonlight Peaks es para un solo jugador.',
  },
  'what-age-rating-is-moonlight-peaks': {
    q: '¿Qué clasificación por edad tiene Moonlight Peaks?',
    a: 'Confirmado: PEGI 12 en Europa y ESRB Teen (T) en EE. UU. — a pesar del tono relajado y sin combate, la clasificación se debe a referencias al alcohol (puedes elaborar y beber cerveza y vino) y lenguaje romántico ligeramente sugerente, no a violencia.',
  },
  'how-do-you-make-money-in-moonlight-peaks': {
    q: '¿Cómo se gana dinero en Moonlight Peaks?',
    a: 'El ciclo principal confirmado es cultivar y vender tu cosecha — la página de Steam enmarca desbloquear habilidades y mejoras en torno a "una cosecha más rica". Un resumen secundario de base de datos del juego añade que los cultivos más raros y "antinaturales" dan más ganancias, pero este detalle no está confirmado por los desarrolladores. Los precios exactos, compradores y mecánica de venta se confirmaron al lanzamiento.',
  },
  'can-you-sell-crops-in-moonlight-peaks': {
    q: '¿Se pueden vender cultivos en Moonlight Peaks?',
    a: 'Se da por hecho que vender tu cosecha por monedas es el ciclo central de un sim de granja como este, y la propia página de tienda de Moonlight Peaks vincula las ganancias de tu granja con desbloquear mejoras y habilidades. No hemos visto detalles confirmados por los desarrolladores sobre quién exactamente compra tus cultivos o cómo funciona mecánicamente la venta — eso llega con el lanzamiento.',
  },
  'is-there-a-shop-in-moonlight-peaks': {
    q: '¿Hay una tienda en Moonlight Peaks?',
    a: 'Sí, confirmado — existen varias tiendas con nombre en el pueblo, incluyendo Webb of Wonders (Sabrina, pociones y ropa), Howling Hammer (Ridge, mejoras de herramientas), Third Eye Threads (Aras, ropa) y Coffee & Coffins (un café de Mina y Evan). Vender tus propios productos funciona por separado a través de Chester en vez de un dueño de tienda.',
  },
  'how-to-get-dark-wood-in-moonlight-peaks': {
    q: '¿Cómo se consigue Dark Wood en Moonlight Peaks?',
    a: 'Confirmado: tala los troncos de árboles sobredimensionados en el terreno de la granja con un Hacha de Cobre (un nivel de hacha mejorado — el Hacha Oxidada inicial no es suficiente). Dark Wood se usa en varias recetas de decoración, incluyendo un sillón de piel (con tablas de madera dura y tela) y una estantería-ataúd (con tablas).',
  },
  'how-does-the-museum-work-in-moonlight-peaks': {
    q: '¿Cómo funciona el museo en Moonlight Peaks?',
    a: 'Confirmado: el museo abre solo durante el primer año, una vez que se completa una trama sobre la mudanza de Persephone, Jada y Winston al pueblo — no desde el principio. Donas yendo a una sala de colección temática e interactuando con un letrero de exclamación, en vez de hablar con un curador. Los objetos que aún te faltan para una colección se marcan en tu inventario con un icono de museo. Los requisitos de calidad varían según la colección; la agrícola específicamente pide cultivos de mayor calidad.',
  },
  'does-moonlight-peaks-have-accessibility-options': {
    q: '¿Moonlight Peaks tiene opciones de accesibilidad?',
    a: 'Algunas, pero no extensas: las opciones confirmadas incluyen interruptor de VSync, vibración del mando, etiquetas de interacción en pantalla y animación de texto, además de reasignación de botones, límite de fps y escala de renderizado. No confirmado: hasta ahora no se ha reportado un modo daltónico ni opciones de texto amigables para dislexia.',
  },
  'can-you-romance-death-in-moonlight-peaks': {
    q: '¿Se puede tener romance con Death en Moonlight Peaks?',
    a: 'No confirmado. Death es un nombre real en archivos filtrados antes del lanzamiento, con su propio hogar ("la Cabaña de Death"), y algunos rumores previos al lanzamiento lo mencionaron como posible opción romántica — pero eso es especulación, no confirmación de los desarrolladores. Actualizaremos esto en cuanto el juego completo lo aclare.',
  },
  'is-count-dracula-romanceable': {
    q: '¿El Conde Drácula es una opción romántica en Moonlight Peaks?',
    a: 'No. El Conde Drácula es el padre de tu personaje y una figura narrativa central, no una opción romántica — el juego deja claro que tu relación con él es familiar, no romántica.',
  },
  'is-logan-romanceable-in-moonlight-peaks': {
    q: '¿Logan es una opción romántica en Moonlight Peaks?',
    a: 'Reportado, pero aún no confirmado con total seguridad por los desarrolladores — Logan aparece como residente hombre lobo en la cobertura de prensa, y pistas independientes (un diario de desarrollo y archivos filtrados antes del lanzamiento) sugieren que su nombre y hogar son reales. Trátalo como una opción romántica probable pero no garantizada hasta el lanzamiento.',
  },
  'can-you-divorce-in-moonlight-peaks': {
    q: '¿Se puede divorciar o separar en Moonlight Peaks?',
    a: 'Sí, confirmado por PC Gamer: puedes divorciarte, y tu ex vuelve a estado de "amistad" al día siguiente con 4 corazones, sin la etiqueta persistente de "herido", y sin que se mencione el divorcio en el diálogo — incluso actuarán dispuestos a salir contigo de nuevo.',
    more: [
      'Detalle confirmado: proponer matrimonio le da a tu pareja una etiqueta temporal de "prometida" y 11 corazones de amistad en total; cualquier otro personaje con quien estuvieras saliendo o en pareja recibe una etiqueta temporal de "herido", baja a 4 corazones rotos, tiene diálogo triste, y no acepta regalos por aproximadamente un día.',
      'Tras el matrimonio, tu pareja se muda contigo pero mantiene su rutina normal (trabajo, exploración); vuelve a 8 corazones con 2 nuevos corazones por ganar (10 en total), obtenidos en parte siguiendo con las citas.',
      'Casarse bloquea todas tus otras relaciones en 4 corazones, así que volver a casarte con alguien más significa reconstruir esa relación desde 4 corazones hasta 8 primero.',
    ],
  },
  'is-there-a-wedding-ceremony-in-moonlight-peaks': {
    q: '¿Hay una ceremonia de boda en Moonlight Peaks?',
    a: 'Sí, confirmado al lanzamiento: es un evento real del pueblo, no solo una confirmación de menú. Los vampiros y hombres lobo de Moonlight Peaks asisten a celebrar, sin importar con quién te cases, y fijar la fecha de la boda desbloquea ropa de boda especial en Third Eye Threads.',
    more: ['Tu gato te recuerda cambiarte a tu atuendo de boda el mismo día sin importar lo que lleves puesto en ese momento, así que no es posible perderse la ceremonia sin preparación.'],
  },
  'do-families-disapprove-of-cross-family-romance': {
    q: '¿Las familias desaprueban el romance entre familias diferentes en Moonlight Peaks?',
    a: 'No confirmado como mecánica de juego, pero encaja con el tono: se reporta que vampiros y hombres lobo pelean constantemente, y la cobertura de prensa describe una vieja disputa entre las familias sobrenaturales del pueblo. Si esto se traduce en una mecánica real de desaprobación dentro del juego para romances entre familias es desconocido.',
  },
  'is-moonlight-peaks-scary': {
    q: '¿Moonlight Peaks da miedo o es un juego de terror?',
    a: 'No. A pesar de la estética gótica (vampiros, cementerios, un personaje literalmente llamado Death), todo lo mostrado hasta ahora — la demo, avances de prensa, tráilers oficiales — apunta a un tono relajado y ligero. La cobertura lo describió, en su drama social, como "adorable-chibi pero seriamente tóxico", no como aterrador. No hay combate ni contenido de terror confirmado.',
  },
  'is-moonlight-peaks-based-on-a-book-or-show': {
    q: '¿Moonlight Peaks está basado en un libro, película o serie?',
    a: 'No. Hasta donde hemos encontrado, Moonlight Peaks es un título original de Little Chicken Game Company — no adapta ningún libro, película o serie existente.',
  },
  'does-moonlight-peaks-have-a-tutorial': {
    q: '¿Moonlight Peaks tiene tutorial para nuevos jugadores?',
    a: 'No confirmado en detalle, pero la demo gratuita ya guía a los nuevos jugadores a través de la creación de personaje y algunas actividades centrales (pesca, arreglos florales, bordado) con interacciones tempranas del pueblo — lo cual sirve como una introducción suave incluso sin un modo tutorial formalmente anunciado.',
  },
  'does-moonlight-peaks-have-a-story': {
    q: '¿Moonlight Peaks tiene historia, o es abierto?',
    a: 'Tiene un gancho narrativo ligero — eres un vampiro que se muda a la granja abandonada de tu familia para demostrarle a tu padre escéptico que una vida inmortal más gentil es posible — construido sobre un ciclo abierto y relajado de simulador de vida con agricultura, magia y relaciones. Cuánto contenido de historia guionizado hay más allá de esta premisa aún no se describe en detalle.',
  },
  'does-moonlight-peaks-support-a-controller': {
    q: '¿Se puede jugar Moonlight Peaks con mando?',
    a: 'Sí, en Switch, Switch 2 y Steam Deck, donde el mando es la entrada por defecto. En PC, un avance práctico de prensa recomendó explícitamente usar un mando en vez de ratón y teclado, lo que sugiere que el juego mismo está diseñado pensando en el juego con mando incluso en Steam.',
  },
  'is-moonlight-peaks-difficult': {
    q: '¿Moonlight Peaks es difícil, o se puede fallar?',
    a: 'Nada sugiere una dificultad implacable — no hay combate confirmado, y el tono es relajado de principio a fin en vez de orientado al desafío. Si existen estados de fallo (como quedarse sin dinero) u opciones de dificultad aún no se ha descrito en detalle.',
  },
  'does-moonlight-peaks-have-voice-acting': {
    q: '¿Moonlight Peaks tiene actuación de voz?',
    a: 'No confirmado. Nada en la demo, tráilers o cobertura de prensa que hemos visto menciona diálogo con voz — trátalo como no confirmado en ambos sentidos hasta el lanzamiento completo.',
  },
  'is-moonlight-peaks-turn-based-or-real-time': {
    q: '¿Moonlight Peaks es por turnos o en tiempo real?',
    a: 'Tiempo real, como la mayoría de simuladores de vida relajados de este género — el reloj de día/noche sigue corriendo mientras cultivas, exploras y hablas con residentes, en vez de esperar a que termines un turno.',
  },
  'does-moonlight-peaks-have-achievements': {
    q: '¿Moonlight Peaks tiene logros o trofeos?',
    a: 'No confirmado para ninguna plataforma hasta ahora. Si existen logros de Steam o listas de trofeos específicas de plataforma, las documentaremos en cuanto se lance el juego completo.',
  },
  'is-moonlight-peaks-family-friendly': {
    q: '¿Moonlight Peaks es apto para niños?',
    a: 'Dado el tono relajado y la falta de combate, probablemente sí para la mayoría de edades, pero no podemos dar una respuesta definitiva — el juego aún no había sido calificado por la ESRB al momento de escribir esto (algunos medios reportaron una clasificación Teen en consolas/móviles que no pudimos verificar de forma independiente). Revisa la clasificación oficial en cuanto se confirme, especialmente dados los sistemas de romance y matrimonio orientados a adultos del juego.',
  },
  'how-to-get-married-in-moonlight-peaks': {
    q: '¿Cómo se casa en Moonlight Peaks?',
    a: 'Confirmado al lanzamiento: las citas se desbloquean al nivel 4 de corazón, y puedes proponer matrimonio al nivel 8. Las citas funcionan como minijuegos (por ejemplo, armar un ramo con los colores pedidos) — es posible fallar una, por ejemplo llegando tarde, lo cual cuesta puntos de amistad en vez de terminar la relación definitivamente. La boda ocurre dentro de una semana después de la propuesta y es atendida por los vampiros y hombres lobo del pueblo. El matrimonio en sí es monógamo, y tu pareja se muda a tu granja después.',
  },
  'can-you-date-multiple-people-moonlight-peaks': {
    q: '¿Se puede salir con varias personas a la vez en Moonlight Peaks?',
    a: 'Sí, confirmado al lanzamiento — puedes cortejar a varios residentes al mismo tiempo. Ellos lo notan y lo comentan, pero se describe como celos leves en vez de un sistema de rivalidad estricto. El matrimonio en sí es estrictamente monógamo una vez que propones.',
  },
  'moonlight-peaks-step-parent-children': {
    q: '¿Se pueden tener hijos o ser padrastro/madrastra en Moonlight Peaks?',
    a: 'No puedes tener hijos biológicos — confirmado por varias fuentes, sin planes anunciados de añadir esta mecánica. Detalle reportado: casarte con un personaje mayor que ya tiene hijos, como Orlock (padre de Mina y Evan), te convertiría en su padrastro/madrastra en su lugar.',
  },
  'how-to-turn-into-a-bat-hellkitten': {
    q: '¿Cómo se convierte uno en murciélago o Hellkitten en Moonlight Peaks?',
    a: 'Confirmado al lanzamiento: una vez que la transformación se desbloquea por progreso de la historia, mantén presionado el gatillo izquierdo para abrir una rueda de hechizos, y elige tu forma — murciélago para viajar rápido, o tu Hellkitten de tres ojos para movimiento más rápido y arado gratuito.',
  },
  'is-there-fast-travel-in-moonlight-peaks': {
    q: '¿Hay viaje rápido en Moonlight Peaks?',
    a: 'Sí, confirmado por varias fuentes: el aquelarre de brujas ofrece una opción de viaje rápido en el pueblo, y la forma de murciélago cubre terreno rápidamente una vez que la transformación se desbloquea. No hay sistema de minimapa o marcadores de misión, así que el mapa dentro del juego (con sus iconos de exclamación y brillo para escenas pendientes) es la principal ayuda de navegación.',
  },
  'how-to-find-quests-heart-events': {
    q: '¿Cómo se encuentran misiones y eventos de corazón en Moonlight Peaks?',
    a: 'Confirmado al lanzamiento: revisa el mapa en busca de marcadores — un signo de exclamación significa que entrar a esa zona activa una escena, y un aura brillante alrededor de un edificio significa que entrar activa una. El tablón de anuncios del pueblo (gestionado por Albertus, un búho) también lista los trabajos/misiones disponibles.',
  },
  'how-many-quests-are-in-moonlight-peaks': {
    q: '¿Cuántas misiones hay en Moonlight Peaks?',
    a: 'Confirmado mediante una transcripción del registro de misiones verificada cruzadamente: la historia principal incluye al menos 20+ misiones con nombre, desde llegar al pueblo hasta un arco argumental de boda, más varias misiones secundarias confirmadas y sistemas continuos como el tablón de trabajos. Podría existir más contenido de historia del documentado hasta ahora.',
    more: ['Encuentra la guía completa de misiones en /quests (actualmente solo en inglés).'],
  },
  'what-does-a-bridge-too-far-quest-unlock': {
    q: '¿Qué desbloquea la misión "A Bridge Too Far" en Moonlight Peaks?',
    a: 'Confirmado: completarla levanta la maldición del puente hacia Misty Shores y desbloquea esa zona (incluyendo la Cave of Echoes, tu primera fuente de Mineral de Cobre) además del cementerio, y activa el siguiente arco argumental en el Crest Garden.',
  },
  'what-quest-unlocks-hellkitten-form': {
    q: '¿Qué misión desbloquea la forma Hellkitten (gato) en Moonlight Peaks?',
    a: 'Confirmado mediante un registro de misiones verificado cruzadamente: la misión "The Dinner Party" otorga la Forma de Gato (transformación Hellkitten). Ocurre varios puntos de la historia después de "A Bridge Too Far", siguiendo la cadena de misiones del extractor de maná.',
  },
  'why-is-my-quest-not-starting-in-moonlight-peaks': {
    q: '¿Por qué no inicia una misión en Moonlight Peaks?',
    a: 'Reportado por la comunidad: muchas misiones se activan simplemente entrando a una zona nueva, esperando un número fijo de días de juego, o leyendo una carta/invitación, en vez de un aviso obvio en pantalla. Si una misión parece atascada, revisa si la misión previa en la cadena realmente se completó, si han pasado suficientes días, y si has entrado a la zona o edificio al que está ligado el siguiente paso.',
  },
  'how-does-the-job-board-work-in-moonlight-peaks': {
    q: '¿Cómo funciona el tablón de trabajos en Moonlight Peaks?',
    a: 'Confirmado: los Trabajos de Albertus es un tablón continuo y repetible en el ayuntamiento, gestionado por Albertus, un búho. Completar un trabajo publicado da monedas, a veces un objeto, y un impulso de relación con quien hizo el encargo — un sistema continuo en vez de una misión única.',
  },
  'what-are-the-main-story-quests-in-moonlight-peaks': {
    q: '¿Cuáles son las misiones de la historia principal en Moonlight Peaks, en orden?',
    a: 'Confirmado mediante un registro de misiones verificado cruzadamente: la cadena va aproximadamente desde registrarte en el ayuntamiento y conocer a Orlock, pasando por "A Bridge Too Far" (la maldición del puente de Fiona/Orlock), un misterio en el Crest Garden, desbloquear tu primera magia y el extractor de maná, "The Dinner Party" (desbloquea la Forma de Gato), hasta una historia de arco argumental de boda. Encuentra el desglose completo capítulo por capítulo con el orden exacto y las condiciones de desbloqueo en la página de resumen.',
  },
};
