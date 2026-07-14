// src/i18n/quests-side-es.ts
// Spanish translations for side quests (title/summary/reward/troubleshooting text only).
// slug/npc/status/related are shared from data/quests-side.ts.
export type SideQuestTrEs = { title: string; summary: string; reward?: string; troubleshooting?: { q: string; a: string }[] };

export const sideQuestsEs: Record<string, SideQuestTrEs> = {
  'noels-fishing-contest': {
    title: 'El concurso de pesca de Noel (Primera caña de pescar)',
    summary: 'Confirmado: dentro de tus primeras noches de juego, Noel te reta a un concurso de pesca junto al río — atrapa 3 tipos de peces diferentes antes que él. No tiene límite de tiempo, así que es una victoria fácil. Reportado por la comunidad: algunas guías enmarcan el concurso alrededor de una apuesta de 250 monedas de oro, así que podría valer la pena tener algo de dinero a mano antes de empezar, aunque no se describe como un requisito estricto.',
    reward: 'Tu primera caña de pescar, más una bonificación de monedas',
    troubleshooting: [
      { q: 'Aún no tengo caña de pescar — ¿dónde consigo una?', a: 'Confirmado (verificado con la guía de desbloqueo de whisperofthehouse.com): la caña de pescar no se vende en ninguna tienda — es una recompensa de misión del concurso de pesca de Noel. Si aún no has conocido a Noel junto al río, ese es el verdadero bloqueo, no una compra faltante.' },
      { q: 'No encuentro a Noel para empezar el concurso — ¿qué hago?', a: 'Reportado por la comunidad: Noel se encuentra típicamente junto al río al principio del juego. Si han pasado varias noches sin señal de él, verifica que hayas completado las misiones de configuración más tempranas primero (Regístrate en el Ayuntamiento, Conoce a los habitantes), ya que algunos NPC tempranos solo aparecen una vez que esas están hechas.' },
    ],
  },
  'fix-the-roof': {
    title: 'Arregla el techo (Mejoras de la casa bloqueadas)',
    summary: 'Confirmado: una misión de Ridge que desbloquea mejoras de la casa, compradas después en el Howling Hammer. También desbloquea el plano del Refinador.',
    reward: 'Acceso a mejoras de la casa, plano del Refinador',
    troubleshooting: [
      { q: 'El Howling Hammer no me vende mejoras de la casa — ¿por qué?', a: 'Confirmado: las mejoras de la casa están bloqueadas tras completar "Arregla el techo" con Ridge primero. Si las opciones de mejora no aparecen en el Howling Hammer, esta misión es el paso faltante, no un error de la tienda.' },
      { q: 'No tengo un Refinador y no puedo hacer Forraje o Tablones — ¿qué lo bloquea?', a: 'Confirmado: el plano del Refinador es una recompensa vinculada a esta misma cadena de misiones de reparación del techo, no algo comprado por separado. Completa "Arregla el techo" primero.' },
    ],
  },
  'the-magic-of-crops': {
    title: 'La magia de los cultivos (Aquaflux / Varita rota)',
    summary: 'Confirmado: una misión activada por carta de Luna que desbloquea el hechizo Aquaflux (riego mágico automático) — un requisito previo en la cadena que lleva a "La búsqueda del maná" y, eventualmente, a la reparación de la varita y el lanzamiento de hechizos en general.',
    reward: 'Hechizo Aquaflux desbloqueado',
    troubleshooting: [
      { q: 'Mi varita sigue rota — ¿cómo la arreglo?', a: 'Reportado por la comunidad (whisperofthehouse.com): la reparación de la varita no es una compra de tienda — viene a través de esta cadena de historia (Luna → Sabrina → Fiona → Extractor de Maná → Aquaflux). Si aún no has activado "La magia de los cultivos" de Luna, ese es el punto de partida real.' },
      { q: 'No tengo Aquaflux y estoy atascado regando a mano — ¿cuál es el disparador?', a: 'Confirmado: esta misión se activa por carta de Luna. Si no ha empezado, asegúrate de haber progresado los puntos de historia anteriores (hasta "A Bridge Too Far") primero.' },
    ],
  },
  'the-net-and-death': {
    title: 'Desbloqueando la red de insectos (Death y Soul Blobs)',
    summary: 'Confirmado (verificado con whisperofthehouse.com): la red de insectos viene a través de Death, bloqueada tras el progreso en el plan de vino de Orlock, A Bridge Too Far, y el acceso a Misty Shores — no un objeto de tienda. Después de tu segundo encuentro con Death en el pueblo, él te presenta los 100 Soul Blobs y te pide que los reúnas con la red.',
    reward: 'La red (para atrapar insectos/Soul Blobs); Reloj Antiguo al recolectar los 100 Soul Blobs (extiende la noche de 15 a 25 minutos)',
    troubleshooting: [
      { q: 'No puedo atrapar insectos o Soul Blobs — ¿dónde está la red?', a: 'Confirmado: la red no se vende en ningún lugar — se desbloquea a través de Death, bloqueada tras el progreso previo de la historia (plan de vino de Orlock, A Bridge Too Far, y acceso a Misty Shores). Si aún no has conocido a Death dos veces, ese es el bloqueo.' },
      { q: '¿Dónde encuentro a Death en Moonlight Peaks?', a: 'Confirmado: en el pueblo, vinculado al área del Cementerio Ambrosia que se abre después de que "A Bridge Too Far" desbloquea Misty Shores.' },
    ],
  },
  'vampster-collection-quest': {
    title: 'Recolección de Vampsters',
    summary: 'Confirmado: Alina, encontrada dentro de la Cueva de los Ecos, explica que los 100 Vampsters dispersos por el pueblo están perdidos y te pide que los lleves a casa uno a la vez a una cueva en Misty Shores. Uno, Larry, está confirmado que vive en la casa de Alina y elige quedarse en lugar de ser recolectado.',
    troubleshooting: [
      { q: 'Sigo perdiendo de vista a un Vampster que estaba cargando — ¿por qué?', a: 'Reportado por la comunidad: hablar con cualquier residente, o activar cualquier escena, hace que sueltes el Vampster que estés cargando actualmente. Se queda donde lo soltaste, así que despeja las áreas con mucho diálogo antes de salir con uno.' },
      { q: 'No puedo empezar esta misión — ¿dónde está Alina?', a: 'Confirmado: dentro de la Cueva de los Ecos, que solo se abre después de que "A Bridge Too Far" desbloquea Misty Shores.' },
    ],
  },
  'albertus-job-board': {
    title: 'Los trabajos de Albertus no aparecen',
    summary: 'Confirmado: un sistema secundario continuo y repetible en lugar de una misión única — solicitudes cortas publicadas en el tablón de Albertus en el Ayuntamiento, cada una recompensando monedas, a veces un objeto, y puntos de relación con quien la publicó.',
    troubleshooting: [
      { q: 'El tablón de trabajos en el Ayuntamiento se ve vacío — ¿es un error?', a: 'Reportado por la comunidad: el tablón está bloqueado tras llegar al Ayuntamiento vía "Regístrate en el Ayuntamiento" primero. Si has completado eso y sigues sin ver nada, los trabajos pueden simplemente actualizarse según un horario — revisa después de dormir.' },
    ],
  },
  'npc-stuck-cant-interact': {
    title: 'Un NPC está atascado / congelado y no habla',
    summary: 'Confirmado vía el seguimiento oficial de Problemas Conocidos del juego y reportes de la Comunidad de Steam: algunos jugadores encuentran a un NPC específico (notablemente Orlock) atascado en su lugar y sin responder a la interacción. Este es un error conocido y no resuelto, no un problema de bloqueo de misión.',
    troubleshooting: [
      { q: 'Un NPC no responde cuando intento hablar con él — ¿es un error o me falta algo?', a: 'Confirmado vía el seguimiento oficial de Problemas Conocidos: esto ha sido reportado, notablemente con Orlock atascándose en su lugar. Recargar el área y dormir hasta el día siguiente no lo han solucionado para los jugadores afectados hasta ahora, y no hay una solución confirmada todavía. Este es un error genuino, no un requisito de misión que te falte.' },
      { q: '¿Hay una solución alternativa mientras espero una corrección?', a: 'Reportado por la comunidad en el hilo oficial de errores de Steam: un jugador descubrió que interactuar repetidamente desde el lado sureste del NPC eventualmente activó el diálogo, después de que recargar el área y dormir hasta el día siguiente fallaran ambos. No es una solución garantizada, pero es la única solución alternativa confirmada que se reporta que funciona hasta ahora.' },
      { q: '¿Qué debo hacer si esto me pasa?', a: 'Confirmado: repórtalo a support@xseedgames.com con tu plataforma y una descripción de lo que pasó, ya que no hay una solución garantizada del lado del jugador todavía.' },
    ],
  },
  'form-wheel-softlock': {
    title: 'Atascado en la rueda de formas / No puedo moverme',
    summary: 'Confirmado vía un hilo oficial de seguimiento de errores de desarrolladores en Steam: algunos jugadores de teclado/ratón se han quedado atascados con la rueda de transformación abierta (notablemente al salir de la Mansión Ambrosia), sin forma de cerrarla o recuperar el control.',
    troubleshooting: [
      { q: 'Estoy atascado con la rueda de formas abierta y no puedo moverme — ¿ayuda?', a: 'Confirmado vía un hilo oficial de desarrolladores de XSEED Games: esto ha afectado a jugadores de teclado/ratón, a menudo al salir de la Mansión Ambrosia. Una causa reportada fue no tener ninguna tecla asignada a la acción de la rueda de formas — revisa tus configuraciones de teclas en Ajustes por una asignación de "abrir rueda de formas" y asigna una si está vacía.' },
      { q: 'Estoy atrapado en este estado y no puedo llegar al menú de ajustes — ¿ahora qué?', a: 'Confirmado vía el mismo hilo de desarrolladores: los jugadores afectados han tenido que forzar el cierre del juego (Alt+F4 en PC) como último recurso. Como el juego solo guarda cuando duermes, podrías perder progreso desde tu último guardado — reporta el problema a XSEED Games vía el hilo oficial de errores o support@xseedgames.com.' },
    ],
  },
  'elviras-treasure-hunt': {
    title: 'La búsqueda del tesoro de Elvira (Raiders of the Lost Art)',
    summary: 'Confirmado: Elvira te envía a una búsqueda del tesoro de 5 pistas por todo el pueblo — ruta reportada: el bar de Samael → el cementerio → una campana en las minas → la Cueva de los Ecos → el Templo Khazan. Completarla se vincula al logro "Raiders of the Lost Art".',
    reward: 'Logro "Raiders of the Lost Art"',
    troubleshooting: [
      { q: 'Estoy atascado en una de las pistas de la búsqueda del tesoro de Elvira — ¿cuál es la ruta?', a: 'Reportado por la comunidad: el orden confirmado de ubicaciones es el bar de Samael (The Broken Lamp), luego el cementerio, luego una campana en las minas, luego la Cueva de los Ecos, y finalmente el Templo Khazan. Si estás atascado en una pista, verifica que hayas explorado completamente la ubicación anterior primero.' },
      { q: '¿Dónde empiezo esta misión?', a: 'Confirmado: la da Elvira. Si aún no la has conocido o no tiene misión que ofrecer, su cadena de pistas puede estar bloqueada tras el progreso previo de la historia, ya que el tramo del Templo Khazan requiere áreas que se abren más tarde.' },
    ],
  },
  'ui-softlock-after-shop': {
    title: 'La interfaz se congela / bloqueo suave después de salir de una tienda',
    summary: 'Confirmado vía reportes oficiales de la Comunidad de Steam: algunos jugadores han tenido todos los elementos de la interfaz deshabilitados después de salir de una tienda o una escena de misión, sin poder abrir ningún menú o entrar a otras ubicaciones — típicamente reportado después de aproximadamente 2 horas de juego continuo, a veces precedido por tartamudeo.',
    troubleshooting: [
      { q: 'Salí de una tienda o escena y ahora nada responde — ¿es un error conocido?', a: 'Confirmado vía múltiples reportes oficiales de la Comunidad de Steam: sí, este es un bloqueo suave conocido, reportado más a menudo después de unas 2 horas de juego continuo, a veces con tartamudeo justo antes de que suceda. No es algo que estés haciendo mal.' },
      { q: '¿Hay una solución o alternativa?', a: 'Todavía no hay una solución confirmada del lado del jugador. Los jugadores afectados han tenido que forzar el cierre del juego. Como Moonlight Peaks solo guarda cuando duermes, podrías perder progreso desde tu último guardado.' },
      { q: '¿Puedo prevenir que esto suceda?', a: 'No confirmado, pero como precaución: duerme para guardar más a menudo que en otros simuladores de granja, ya que no hay guardado manual, y considera tomar un pequeño descanso cada un par de horas si notas que empieza el tartamudeo.' },
    ],
  },
  'lost-save-data': {
    title: 'Datos de guardado perdidos / El progreso desapareció',
    summary: 'Confirmado vía reportes oficiales de la Comunidad de Steam: los jugadores han perdido múltiples noches de progreso después de un fallo o apagado inesperado (por ejemplo, un corte de energía), ya que Moonlight Peaks solo guarda cuando duermes, sin opción de guardado manual.',
    troubleshooting: [
      { q: 'Mi guardado desapareció después de un fallo o corte de energía — ¿puedo recuperarlo?', a: 'Confirmado vía reportes oficiales de la Comunidad de Steam: esto le ha pasado a otros jugadores también, y no hay un método de recuperación confirmado — el juego solo escribe un guardado cuando duermes en tu ataúd.' },
      { q: '¿Dónde están mis archivos de guardado, por si quiero respaldarlos yo mismo?', a: 'Confirmado vía una publicación oficial de un desarrollador de XSEED Games — Windows: %USERPROFILE%/AppData/LocalLow/Little Chicken Game Company/Moonlight Peaks/. Mac: ~/Library/Application Support/Little Chicken Game Company/Moonlight Peaks/.' },
      { q: '¿Cómo reporto esto a los desarrolladores?', a: 'Confirmado: envía un correo a support@xseedgames.com. Si la pérdida siguió a un fallo, también revisa %LOCALAPPDATA%\\CrashDumps por un volcado de fallo de "Moonlight Peaks.exe" y menciónalo.' },
      { q: '¿Hay una opción de guardado manual?', a: 'Actualmente no — confirmado ausente en el lanzamiento. Dormir en tu ataúd es la única forma de guardar, y es una característica frecuentemente solicitada en el hilo oficial de errores de la Comunidad de Steam del juego.' },
    ],
  },
  'fallen-tree-arborascend': {
    title: 'No encuentro el árbol caído (The Mysterious Bay)',
    summary: 'Confirmado vía PC Gamer: durante la misión "The Mysterious Bay", necesitas despejar un árbol caído para que tus recién descubiertos vecinos sirenas puedan reunirse con el pueblo. El árbol no está en Howling Marshes, donde la mayoría de los jugadores asume — está bloqueando una cascada en un área diferente. La solución es un hechizo, no una herramienta: compra el hechizo Arborascend de Sabrina en Webb of Wonders, luego lánzalo (cuesta 3 de Maná) en el árbol caído para activar una escena que lo elimina.',
    reward: 'Despeja el camino para que la familia de sirenas Hosu se reúna con el pueblo; lleva al arco romántico de Samael',
    troubleshooting: [
      { q: '¿Dónde exactamente está el árbol caído bloqueando la cascada?', a: 'Confirmado vía PC Gamer: no está en Howling Marshes, a pesar de que esa sea la suposición obvia. Bloquea una cascada en un área diferente vinculada a la ruta de regreso al pueblo de la familia de sirenas Hosu.' },
      { q: 'No tengo una herramienta que pueda despejar el árbol — ¿qué necesito?', a: 'Confirmado: no es una herramienta en absoluto — necesitas el hechizo Arborascend, comprado a Sabrina en Webb of Wonders. Lanzarlo cuesta 3 de Maná, así que asegúrate de tener suficiente guardado antes de salir.' },
      { q: 'Compré Arborascend pero no pasa nada en el árbol — ¿por qué?', a: 'Reportado por la comunidad: lanzar Arborascend directamente al árbol caído activa una escena que lo despeja. Si no pasa nada, verifica que realmente tengas suficiente Maná para el lanzamiento (3 de Maná).' },
    ],
  },
};
