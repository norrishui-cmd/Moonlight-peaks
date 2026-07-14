// src/data/farm-crop-details-es.ts
// Spanish translations for crop detail content (name/category/dek/body/faq text only).
export type CropDetailEs = { name: string; category: string; dek: string; body: string[]; faq: { q: string; a: string }[] };
export const cropDetailsEs: Record<string, CropDetailEs> = {
  'blood-grapes': {
    name: 'Blood Grapes', category: 'Cultivo de campo',
    dek: 'Un cultivo confirmado de 5 días, no mágico, de primavera/verano con datos exactos de rendimiento y precio.',
    body: [
      'Confirmado vía la wiki oficial: Blood Grapes tarda 5 días en cosecharse y rebrota cada 4 días después, produciendo 3 uvas por cosecha. Cada uva se vende por 5 de oro, y las semillas cuestan 20 de oro.',
      'Blood Grapes crece en primavera y verano, y no es un cultivo mágico, así que una regadera normal funciona bien con él.',
      'Blood Grapes es el primer cultivo con el que empiezan los jugadores, y comúnmente se procesa en Vino Tinto o Jugo de Blood Grape en un Barril (4 Blood Grapes por 1 Vino Tinto, o 3 por 1 jugo).',
    ],
    faq: [
      { q: '¿Cuánto tarda en crecer Blood Grapes?', a: 'Confirmado: 5 días para la primera cosecha, luego cada 4 días después.' },
      { q: '¿Qué se puede hacer con Blood Grapes?', a: 'Confirmado: Vino Tinto (4 uvas) o Jugo de Blood Grape (3 uvas), ambos hechos en un Barril.' },
    ],
  },
  'rice': {
    name: 'Arroz', category: 'Cultivo de campo',
    dek: 'Un cultivo confirmado de 5 días, no mágico, que crece en tres estaciones con datos reales de venta.',
    body: [
      'Confirmado vía la wiki oficial: el Arroz tarda 5 días en cosecharse, produciendo 1 por cosecha. Se vende por 60 de oro, con semillas que cuestan 30 de oro.',
      'El Arroz crece en primavera, verano y otoño, dándole una de las ventanas de cultivo más largas entre los cultivos de campo confirmados.',
    ],
    faq: [
      { q: '¿Cuánto tarda en crecer el Arroz en Moonlight Peaks?', a: 'Confirmado: 5 días, produciendo 1 por cosecha, vendiéndose por 60 de oro.' },
    ],
  },
  'drikker': {
    name: 'Drikker', category: 'Cultivo de campo (mágico)',
    dek: 'Un cultivo mágico confirmado que necesita su taza llena de agua — no riego estándar — para crecer.',
    body: [
      'Confirmado vía la wiki oficial: Drikker es un cultivo mágico con un requisito de crecimiento genuinamente distinto — en lugar de regar la parcela donde está plantado, llenas su taza con agua directamente para que crezca.',
      'Como todos los cultivos mágicos, Drikker probablemente requiere el hechizo Aquaflux para interactuar de esta manera en lugar de una regadera normal.',
    ],
    faq: [
      { q: '¿Cómo se cultiva Drikker en Moonlight Peaks?', a: 'Confirmado: llena su taza con agua, en lugar de regar el suelo a su alrededor como un cultivo normal.' },
    ],
  },
  'gobbler': {
    name: 'Gobbler', category: 'Cultivo de campo (mágico)',
    dek: 'Un cultivo mágico confirmado que requiere alimentarlo con peces o criaturas, no agua, para crecer.',
    body: [
      'Confirmado vía la wiki oficial y verificado con la cobertura de la semana de lanzamiento: Gobbler es un cultivo mágico que necesita ser alimentado con peces o criaturas para crecer, en lugar de ser regado como un cultivo normal.',
      'Reportado por la comunidad: qué objeto específico quiere (un pez o una criatura) es aleatorio por planta, así que mantener una reserva de ambos es el enfoque seguro si estás cultivando varios a la vez.',
    ],
    faq: [
      { q: '¿Cómo se cultiva Gobbler en Moonlight Peaks?', a: 'Confirmado: aliméntalo con peces o criaturas en lugar de regarlo. Reportado por la comunidad: cuál quiere varía por planta.' },
    ],
  },
  'hold-me-close': {
    name: 'Hold Me Close', category: 'Cultivo de campo (mágico)',
    dek: 'Un cultivo mágico confirmado que detiene a los Weeping Wicca cercanos de llorar, convirtiéndolos en Sweet Wicca.',
    body: [
      'Confirmado vía la wiki oficial: Hold Me Close es un cultivo mágico con un efecto inusual sobre sus vecinos — evita que los Weeping Wicca cercanos lloren, lo que convierte a esos Weeping Wicca en Sweet Wicca en su lugar.',
      'Esto hace que Hold Me Close sea un cultivo de plantación complementaria tanto como un cultivo por derecho propio: su valor principal puede estar en lo que hace a un parche de Weeping Wicca vecino en lugar de su propia cosecha.',
    ],
    faq: [
      { q: '¿Qué hace Hold Me Close en Moonlight Peaks?', a: 'Confirmado: detiene a los Weeping Wicca cercanos de llorar, convirtiéndolos en Sweet Wicca en su lugar.' },
    ],
  },
  'mandrake': {
    name: 'Mandrake', category: 'Cultivo de campo (mágico)',
    dek: 'Un cultivo mágico confirmado que produce una variante Enojada o Feliz dependiendo de las mandrágoras cercanas.',
    body: [
      'Confirmado vía la wiki oficial: Mandrake produce ya sea una Mandrake Enojada o una Mandrake Feliz como su cosecha, y cuál obtienes depende de si hay otras mandrágoras plantadas cerca.',
      'Esta es una decisión genuina de diseño de plantación: agrupar mandrágoras juntas versus espaciarlas cambiará qué variante cosechas consistentemente.',
    ],
    faq: [
      { q: '¿Por qué mi Mandrake resultó Enojada en lugar de Feliz?', a: 'Confirmado: el resultado Enojada/Feliz depende de si hay otras mandrágoras plantadas cerca — intenta ajustar tu espaciado.' },
    ],
  },
  'weeping-wicca': {
    name: 'Weeping Wicca', category: 'Cultivo de campo (mágico)',
    dek: 'Un cultivo mágico confirmado que llora y riega automáticamente un área de 3x3 de campo a su alrededor.',
    body: [
      'Confirmado vía la wiki oficial: Weeping Wicca llora para regar mágicamente un área de 3x3 de campo a su alrededor, haciéndolo un cultivo de automatización genuino en lugar de solo algo para cosechar.',
      'Plantar Weeping Wicca estratégicamente en medio de una parcela podría reducir cuánto riego manual necesitan los cultivos circundantes — aunque nota su interacción con Hold Me Close (que detiene el llanto, y con él presumiblemente este efecto de riego, convirtiéndolo en un Sweet Wicca en su lugar).',
    ],
    faq: [
      { q: '¿Qué hace Weeping Wicca en Moonlight Peaks?', a: 'Confirmado: llora para regar mágicamente un área de 3x3 de campo a su alrededor. Colocar Hold Me Close cerca detiene el llanto y lo convierte en un Sweet Wicca en su lugar.' },
    ],
  },
  'instant-growth-mushrooms': {
    name: 'Hongos de crecimiento instantáneo', category: 'Grupo de cultivos de campo',
    dek: 'Confirmado: seis cultivos tipo hongo comparten el mismo mecanismo de crecimiento y propagación instantáneos.',
    body: [
      'Confirmado vía la wiki oficial: Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom, y Amanita comparten exactamente el mismo mecanismo — cada uno crece instantáneamente al ser regado, y se propaga a los campos vecinos si se riega de nuevo una vez completamente crecido.',
      'Esto hace que la familia de hongos sea una anomalía genuina entre los cultivos de Moonlight Peaks: en lugar de esperar días por una cosecha, puedes efectivamente multiplicar un parche de hongos por todo tu campo en una sola sesión de riego una vez que los primeros están maduros.',
    ],
    faq: [
      { q: '¿Qué hongos crecen instantáneamente en Moonlight Peaks?', a: 'Confirmado: Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom, y Amanita todos crecen instantáneamente al ser regados y se propagan a las parcelas vecinas si se riegan de nuevo una vez crecidos.' },
    ],
  },
};
