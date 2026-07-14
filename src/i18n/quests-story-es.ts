// src/i18n/quests-story-es.ts
// Spanish translations for the main story quest chain (title/summary/reward/unlock text only).
// slug/chapter/status/leadsTo are shared from data/quests-story.ts.
export type StoryQuestTrEs = { title: string; unlock?: string; summary: string; reward?: string; troubleshooting?: { q: string; a: string }[] };

export const storyChaptersEs: { number: number; title: string; dek: string }[] = [
  { number: 1, title: 'Llegando a Moonlight Peaks', dek: 'Registrarte como residente, conocer a Orlock y Viktor, y tu primer cultivo.' },
  { number: 2, title: 'A Bridge Too Far', dek: 'La maldición de Fiona sobre el puente de Orlock, y el ritual que la levanta.' },
  { number: 3, title: 'El Crest Garden y el Maná', dek: 'Un escudo familiar perdido, tu primera magia real, y la crisis de la familia Ambrosia.' },
  { number: 4, title: 'Vida del pueblo y drama familiar', dek: 'Política del Ayuntamiento, tensión familiar, y establecerte en Moonlight Peaks.' },
  { number: 5, title: 'El arco de la boda', dek: 'Una boda del pueblo — invitaciones, ensayos, y asuntos pendientes.' },
];

export const storyQuestsEs: Record<string, StoryQuestTrEs> = {
  'register-at-town-hall': {
    title: 'Regístrate en el Ayuntamiento',
    summary: 'Confirmado por múltiples fuentes: después de salir de casa y conocer a Orlock, vas al pueblo, donde la alcaldesa Brook te registra como nueva residente en el Ayuntamiento y te da a Chester, un cofre viviente que vende automáticamente cualquier cosa dejada dentro durante la noche.',
    reward: 'Conocer a Brook, recibir a Chester',
  },
  'meet-the-townsfolk': {
    title: 'Conoce a los habitantes del pueblo',
    unlock: 'Completa "Regístrate en el Ayuntamiento"',
    summary: 'Confirmado: objetivos iniciales de configuración en los que conoces a residentes clave del pueblo y te orientas, abriendo rutas tempranas entre tu granja y el área principal del pueblo.',
    reward: 'Abre rutas tempranas del pueblo',
  },
  'orlocks-wine-scheme': {
    title: 'El plan de vino de Orlock (Blood Wine)',
    summary: 'Confirmado vía Bonus Action, verificado con Into Indie Games: justo después de llegar, encuentras a Orlock, un vampiro con resaca, durmiendo en tu jardín — dale un toquecito en lugar de echarle agua para la mejor opción de diálogo. Te da semillas de Blood Grape y te pide que le hagas vino tinto/de sangre. Una vez que lo hayas hecho y le confrontes sobre disculparse con Fiona, te envía a pagar su cuenta de 350 monedas de oro a Samael en The Broken Lamp.',
    reward: 'Hacer vino de sangre; disculpar a Orlock, pagar una deuda de 350 monedas a Samael; lleva hacia A Bridge Too Far',
    troubleshooting: [
      { q: 'No encuentro 350 monedas para pagar a Samael — ¿qué hago?', a: 'Reportado por la comunidad (Output Lag): si aún no has conocido a Mina, o quieres evitar su cadena de diálogo, puedes conseguir las 350 monedas recolectando conchas y otros objetos, pescando, y vendiendo muebles no deseados de tu casa inicial. Alternativamente, hablar con Mina en Coffee and Coffins después de que Orlock pida la cuenta hace que ella te regale las monedas directamente.' },
      { q: '¿Dónde encuentro realmente a Orlock?', a: 'Confirmado: justo afuera de tu casa en la granja, durmiendo en el jardín, la primera vez. Después de eso, generalmente está en el bar The Broken Lamp en el pueblo, bebiendo.' },
    ],
  },
  'a-bridge-too-far': {
    title: 'A Bridge Too Far',
    unlock: 'Completa "El plan de vino de Orlock"',
    summary: 'Confirmado vía una guía dedicada (Output Lag) verificada con Into Indie Games y Bonus Action: Fiona, una bruja en Moonlit Pines, está furiosa con Orlock por una broma cruel que hizo sobre ella en el bar, y efectivamente ha maldecido el puente hacia su lado del pueblo por eso. Habla con Fiona para enterarte, luego lleva a Orlock a su casa para una escena de disculpa. Fiona entonces revela que no puede levantar la "maldición" sola y necesita a tres brujas — Noel, Sabrina y Luna — encontradas por el pueblo. Recluta a las tres y regresa al puente para activar el ritual que levanta la maldición.',
    reward: 'Reabre Ambrosia Estate; desbloquea Misty Shores y Cave of Echoes (cobre)',
    troubleshooting: [
      { q: 'Hablé con las brujas pero no se reunieron conmigo en el puente — ¿qué está mal?', a: 'Reportado por la comunidad (Output Lag): asegúrate de haber hablado realmente con las tres — Noel, Sabrina y Luna. Revisa tu registro de misiones por si alguna sigue marcada como pendiente, luego regresa al pueblo y habla con la que te falte.' },
      { q: 'El ritual se reprodujo pero el puente sigue bloqueado — ¿ahora qué?', a: 'Reportado por la comunidad: esto es poco común, pero si la escena terminó y el puente sigue intransitable, intenta salir del área y volver a entrar. Debería ser transitable después.' },
      { q: '¿Estoy bloqueado del progreso por una elección de diálogo?', a: 'Confirmado: no. A Bridge Too Far no tiene elecciones de diálogo que bloqueen el progreso — cada camino de conversación avanza la misión.' },
      { q: 'Si Misty Shores, la pesca o la minería se sienten bloqueados, ¿es un error?', a: 'No — confirmado: Misty Shores permanece completamente bloqueado hasta que esta misión se resuelva. Si estás bloqueado en pesca, minería o cualquier otra cosa en esa área, esta misión (no un objeto de tienda faltante) es casi siempre el verdadero cuello de botella.' },
    ],
  },
  'tension-in-the-crest-garden': {
    title: 'Tensión en el Crest Garden',
    unlock: 'Completa "A Bridge Too Far", luego espera hasta el día siguiente',
    summary: 'Confirmado vía el registro de misiones de Neoseeker, verificado con Output Lag: el día después de que se abre el puente, caminar hacia el pueblo activa una escena en el Crest Garden (un área nueva junto al Ayuntamiento) donde Brook acusa a Orlock de robar su escudo familiar perdido, lanzando una trama de misterio.',
    reward: 'Requiere A Bridge Too Far + 1 día; lleva a A Croak and a Crest',
  },
  'a-croak-and-a-crest': {
    title: 'A Croak and a Crest',
    unlock: 'Completa "Tensión en el Crest Garden"',
    summary: 'Confirmado vía la transcripción del registro de misiones de Neoseeker como la continuación directa del misterio del Crest Garden.',
    reward: 'Coloca el escudo Logan en el Crest Garden y cuenta para los logros de escudos',
  },
  'the-quest-for-mana': {
    title: 'La búsqueda del maná',
    unlock: 'Completa "La magia de los cultivos", espera 1 día, entra al pueblo para activar "La carga de una alcaldesa", luego espera 2 días y lee la carta de Sabrina',
    summary: 'Confirmado vía la transcripción del registro de misiones de Neoseeker: esta es la cadena de misiones que lleva a tu primera infraestructura real de creación de magia. Verificado con la guía de desbloqueo de whisperofthehouse.com, que enmarca toda la ruta de magia/varita como pasando por Sabrina, Fiona, el Extractor de Maná, y el hechizo Aquaflux de Luna.',
    troubleshooting: [
      { q: 'Mi varita sigue rota y no tengo hechizos — ¿qué la desbloquea?', a: 'Reportado por la comunidad (whisperofthehouse.com): la varita rota y los hechizos están bloqueados por el progreso de la historia, no una compra de tienda — vienen a través de esta cadena de misiones, que involucra a Sabrina, Fiona, el Extractor de Maná, Luna, y el hechizo Aquaflux. Si aún no has llegado a este punto en la historia, ninguna tienda te venderá una solución.' },
    ],
  },
  'building-a-mana-extractor': {
    title: 'Construyendo un Extractor de Maná',
    unlock: 'Completa "La búsqueda del maná", luego espera 2 días',
    summary: 'Confirmado: la continuación directa de La búsqueda del maná.',
    reward: 'Esencia de Maná y el plano del Extractor de Maná',
  },
  'a-missing-moon': {
    title: 'Una luna ausente',
    summary: 'Confirmado vía la transcripción del registro de misiones de Neoseeker como un punto intermedio de la historia, siguiendo la cadena del Extractor de Maná y llevando hacia la crisis de la familia Ambrosia.',
  },
  'the-ambrosia-crisis': {
    title: 'La crisis de Ambrosia',
    unlock: 'Completa "Maestro de la Noche", espera 2 días, y lee la carta de la Mansión Ambrosia',
    summary: 'Confirmado vía la transcripción del registro de misiones de Neoseeker: un punto de crisis familiar para la familia vampira Ambrosia, bloqueado tras completar "Maestro de la Noche" y una breve espera por una carta de invitación.',
  },
  'the-dinner-party': {
    title: 'La cena',
    summary: 'Confirmado vía el registro de misiones de Neoseeker: una misión de evento social del pueblo.',
    reward: 'Forma de gato (transformación Hellkitten desbloqueada)',
    troubleshooting: [
      { q: '¿Cuándo exactamente obtengo la forma Hellkitten/gato?', a: 'Confirmado vía un registro de misiones verificado: completar "La cena" es lo que otorga la forma de gato. Está unos pocos puntos de la historia después de "A Bridge Too Far", siguiendo la cadena del Extractor de Maná — si aún no has llegado ahí, la transformación simplemente no está disponible todavía, sin importar lo que hayas comprado o construido.' },
    ],
  },
  'mend-it-with-magic': {
    title: 'Arréglalo con magia / Un toque de magia',
    unlock: 'Completa "Arréglalo con magia", espera 2 días, y lee la carta de Fiona',
    summary: 'Confirmado vía la transcripción del registro de misiones de Neoseeker como un par de misiones de continuación centradas en la magia.',
  },
  'town-hall-drama': {
    title: 'Cena con los padres / Drama del Ayuntamiento',
    summary: 'Confirmado vía el registro de misiones de Neoseeker: puntos de la historia centrados en el pueblo y la familia.',
  },
  'the-plastic-chairs': {
    title: 'Las sillas de plástico',
    summary: 'Confirmado vía la transcripción del registro de misiones de Neoseeker.',
    reward: '4 tés de jengibre',
  },
  'a-family-reunion': {
    title: 'Una reunión familiar',
    summary: 'Confirmado vía el registro de misiones de Neoseeker como un punto de la historia centrado en la familia.',
  },
  'the-mermaids-wish': {
    title: 'El deseo de la sirena',
    summary: 'Confirmado vía el registro de misiones de Neoseeker: completar esta misión junto con "Un toque de magia" es un requisito previo para "La cena de ensayo".',
    reward: 'Forma acuática (transformación de sirena desbloqueada)',
  },
  'the-rehearsal-dinner': {
    title: 'La cena de ensayo',
    unlock: 'Completa "El deseo de la sirena" y "Un toque de magia", espera 1 día, y lee la invitación a la cena',
    summary: 'Confirmado vía la transcripción del registro de misiones de Neoseeker — el inicio de los puntos de la historia del arco de la boda del juego.',
  },
  'kims-invite': {
    title: 'La invitación de Kim',
    summary: 'Confirmado vía el registro de misiones de Neoseeker como parte del arco de la boda.',
  },
  'brides-attendant-duty': {
    title: 'Deber de dama de honor',
    summary: 'Confirmado vía el registro de misiones de Neoseeker como parte del arco de la boda.',
  },
  'unfinished-business': {
    title: 'Asuntos pendientes',
    summary: 'Confirmado vía el registro de misiones de Neoseeker como el punto final actualmente documentado del arco de la boda. Contenido posterior de la historia podría extenderse más allá de esto — actualizaremos según se confirme.',
  },
};
