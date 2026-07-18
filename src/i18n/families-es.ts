// src/i18n/families-es.ts
export type FamilyTrEs = {
  title: string; dek: string; body?: string[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const familiesEs: Record<string, FamilyTrEs> = {
  vampires: {
    title: 'Vampiros', dek: 'Dos linajes vampíricos — tu propia familia Drácula y la familia Ambrosia en el pueblo.',
    body: [
      'Juegas como un joven vampiro, hijo de Vlad Drácula, por lo que la familia Drácula es en la que naciste. Confirmado al lanzamiento: también hay una segunda familia vampírica separada en el pueblo — los Ambrosia, liderados por Orlock, cuya familia incluye a sus hijos Mina y Evan, y a su sobrino/sobrina Samael y Elvira.',
      'Tu madre, Laveau, era una bruja que lideraba el aquelarre Webb antes de casarse con la familia Drácula — por eso tu personaje tiene una herencia mixta de vampiro y bruja.',
    ],
    faq: [{ q: '¿Eres un vampiro en Moonlight Peaks?', a: 'Sí — juegas como un joven vampiro, hijo de Vlad Drácula. También hay una segunda familia vampírica en el pueblo, los Ambrosia, liderados por Orlock.' }],
  },
  werewolves: {
    title: 'Hombres lobo', dek: 'Salvajes bajo la luna llena — la familia Logan, liderada por la alcaldesa Brook.',
    body: [
      'Los hombres lobo son una de las siete familias, y la familia de hombres lobo con nombre son los Logan. Confirmado al lanzamiento: la cabeza de familia es Brook, la alcaldesa del pueblo — la cobertura previa al lanzamiento que lo llamaba "el alcalde hombre lobo Logan" se refería a ella, usando el apellido de familia en vez del suyo propio.',
      'El hermano menor de Brook, Ridge, es el carpintero del pueblo; sus hijos Saga (una opción romántica confirmada, cuya energía cambia con la luna llena) y Ludo son ambos romanceables.',
    ],
  },
  witches: {
    title: 'Brujas', dek: 'Guardianas de la varita y la poción en el pueblo mágico — la familia Webb.',
    body: [
      'Las brujas son una de las siete familias, vinculadas a la magia con varita y la elaboración de pociones del juego. La familia de brujas con nombre son los Webb, antes liderada por Laveau (la madre del personaje del jugador) antes de irse para casarse con la familia Drácula.',
      'Fiona ahora lidera la familia Webb y el aquelarre local como la florista del pueblo, con altas expectativas hacia su hermano Noel (el herrero del pueblo), su prima Sabrina (que dirige la tienda Webb of Wonders) y Luna (la bruja del mar del pueblo).',
    ],
  },
  mermaids: {
    title: 'Sirenas', dek: 'Del lago y las mareas — la familia Hosu.',
    body: [
      'Las sirenas están confirmadas como una de las siete familias, vinculadas a las zonas de agua del pueblo. La familia de sirenas con nombre son los Hosu — tres hermanos que viven juntos en Luna Bay y llegan aproximadamente un año después de que comienza la historia, necesitando ayuda para reintegrarse al pueblo.',
      'Miembros confirmados: Kim (alegre y sin fin de curiosidad, con un arco de reencuentro con un amor perdido), Rei (una ambientalista tranquila y tímida), y Tae (un tritón seguro de sí mismo y alentador).',
    ],
  },
  seers: {
    title: 'Videntes', dek: 'Adivinos de la familia Khazan.',
    body: [
      'Los Khazan son una familia de tres hermanos con poderes de adivinación de fiabilidad variable — una de las siete familias confirmadas.',
      'Dragan lucha con sus propios poderes, pero dentro del universo del juego inventó el juego de cartas Nokturna. Alina es la rebelde terca y fogosa de la familia, y Aras dirige la sastrería "Third Eye Threads" mientras evita sus propios poderes.',
    ],
  },
  henderson: {
    title: 'Los Henderson', dek: 'La familia humana del pueblo — la séptima, y la última en llegar.',
    body: [
      'Confirmada como la séptima familia: los Henderson, el único hogar humano ordinario del pueblo, que se muda a Moonlight Peaks aproximadamente a mitad de tu primer año.',
      'Persephone, una tía de espíritu libre, lidera la familia y cuida de su sobrina Jada (emocionada de vivir entre hombres lobo y vampiros) y su sobrino Winston (que vive en constante ansiedad). Los tres son opciones románticas.',
    ],
  },
};
