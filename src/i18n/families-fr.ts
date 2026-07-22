// src/i18n/families-fr.ts
export type FamilyTrFr = {
  title: string; dek: string; body?: string[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const familiesFr: Record<string, FamilyTrFr> = {
  vampires: {
    title: 'Vampires', dek: 'Deux lignées de vampires — votre propre famille Dracula et la famille Ambrosia en ville.',
    body: [
      "Vous incarnez un jeune vampire, l'enfant de Vlad Dracula, donc la famille Dracula est celle dans laquelle vous êtes né. Confirmé au lancement : il existe aussi une seconde famille de vampires distincte en ville — les Ambrosia, menés par Orlock, dont la famille comprend ses enfants Mina et Evan ainsi que sa nièce/neveu Samael et Elvira.",
      "Votre mère, Laveau, était une sorcière qui dirigeait le cercle Webb avant d'épouser un membre de la famille Dracula — votre personnage a donc un héritage mixte vampire/sorcière.",
    ],
    faq: [{ q: 'Êtes-vous un vampire dans Moonlight Peaks ?', a: "Oui — vous incarnez un jeune vampire, l'enfant de Vlad Dracula. Il existe aussi une seconde famille de vampires en ville, les Ambrosia, menés par Orlock." }],
  },
  werewolves: {
    title: 'Loups-garous', dek: 'Sauvages à la pleine lune — la famille Logan, menée par la maire Brook.',
    body: [
      "Les loups-garous sont l'une des sept familles, et la famille loup-garou nommée est les Logan. Confirmé au lancement : la tête de famille est Brook, la maire de la ville — une couverture antérieure au lancement qui la surnommait \"le maire loup-garou Logan\" faisait en fait référence à elle, en utilisant le nom de famille plutôt que le sien.",
      "Le jeune frère de Brook, Ridge, est le charpentier de la ville ; ses enfants Saga (une option de romance confirmée dont l'énergie change avec la pleine lune) et Ludo sont tous deux romançables.",
    ],
  },
  witches: {
    title: 'Sorcières', dek: 'Gardiennes de la baguette et des potions dans la ville magique — la famille Webb.',
    body: [
      "Les sorcières sont l'une des sept familles, liées à la magie par baguette et au brassage de potions du jeu. La famille de sorcières nommée est les Webb, dirigée auparavant par Laveau (la mère du personnage joueur) avant qu'elle ne parte épouser un membre de la famille Dracula.",
      "Fiona dirige maintenant la famille Webb et le cercle de sorcières local en tant que fleuriste de la ville, avec de grandes attentes envers son frère Noel (le forgeron de la ville), sa cousine Sabrina (qui tient la boutique Webb of Wonders) et Luna (la sorcière des mers de la ville).",
    ],
  },
  mermaids: {
    title: 'Sirènes', dek: 'Du lac et des marées — la famille Hosu.',
    body: [
      "Les sirènes sont confirmées comme l'une des sept familles, liées aux zones aquatiques de la ville. La famille de sirènes nommée est les Hosu — trois frères et sœurs qui vivent ensemble à Luna Bay et arrivent environ un an après le début de l'histoire, ayant besoin d'aide pour se réintégrer en ville.",
      "Membres confirmés : Kim (solaire et infiniment curieuse, avec un arc de retrouvailles avec un amour perdu), Rei (une écologiste calme et timide) et Tae (un triton confiant et encourageant).",
    ],
  },
  seers: {
    title: 'Voyants', dek: 'Diseurs de bonne aventure de la famille Khazan.',
    body: [
      "Les Khazan sont une famille de trois frères et sœurs aux pouvoirs de divination de fiabilité variable — l'une des sept familles confirmées.",
      "Dragan lutte avec ses propres pouvoirs, mais a inventé dans l'univers le jeu de cartes Nokturna. Alina est la rebelle têtue et fougueuse de la famille, et Aras tient la boutique de vêtements \"Third Eye Threads\" tout en évitant ses propres pouvoirs.",
    ],
  },
  henderson: {
    title: 'Les Henderson', dek: 'La famille humaine de la ville — la septième, et la dernière arrivée.',
    body: [
      "Confirmée comme septième famille : les Henderson, le seul foyer humain ordinaire de la ville, qui emménage à Moonlight Peaks environ à la moitié de votre première année.",
      "Persephone, une tante à l'esprit libre, dirige la famille et s'occupe de sa nièce Jada (ravie de vivre parmi loups-garous et vampires) et de son neveu Winston (qui vit dans une peur constante). Les trois sont des options de romance.",
    ],
  },
};
