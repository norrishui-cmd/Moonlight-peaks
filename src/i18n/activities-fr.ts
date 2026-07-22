// src/i18n/activities-fr.ts
// French translations for activities.ts entries (title/dek/body text only).
export type ActivityTrFr = { title: string; dek: string; body?: string[] };

export const activitiesFr: Record<string, ActivityTrFr> = {
  fishing: {
    title: 'Pêche', dek: "Lancez une ligne dans les eaux de la ville — l'une des activités de la démo gratuite.",
    body: [
      "La pêche est une activité confirmée et jouable dans la démo gratuite. Vous pêchez dans les eaux de la ville, où vit aussi la famille des sirènes.",
      "La liste complète des poissons et toute prise spéciale seront confirmées à la sortie.",
    ],
  },
  foraging: {
    title: 'Cueillette', dek: "Ramassez des trouvailles dans la forêt après la tombée de la nuit.",
    body: [
      "La cueillette est l'une des activités confirmées — vous ramassez des trouvailles dans les forêts autour de la ville.",
      "Les objets exacts à cueillir et les saisons seront confirmés à la sortie.",
    ],
  },
  'flower-arranging': {
    title: 'Arrangement floral', dek: 'Un artisanat créatif relaxant inclus dans la démo.',
    body: [
      "L'arrangement floral est l'un des artisanats cosy confirmés pour le jeu et montré dans la démo gratuite.",
      "Comment les arrangements sont utilisés et exposés sera confirmé à la sortie.",
    ],
  },
  embroidery: {
    title: 'Broderie', dek: 'Brodez des motifs — l\'un des artisanats relaxants de la démo.',
    body: [
      "La broderie est un artisanat confirmé et apparaît dans la démo gratuite aux côtés des autres activités cosy.",
      "Les motifs et récompenses seront confirmés à la sortie.",
    ],
  },
  'potion-brewing': {
    title: 'Brassage de potions', dek: "Brassez des potions — dont l'élixir d'alter ego qui change votre apparence.",
    body: [
      "Le brassage de potions est une activité confirmée. Un exemple nommé est l'élixir d'alter ego, une potion qui change votre apparence.",
      "La recette complète et la liste des ingrédients seront confirmées à la sortie — nous n'inventons pas de recettes.",
    ],
  },
  decorating: {
    title: 'Décoration', dek: 'Placez et arrangez meubles et déco pour personnaliser votre chaumière gothique.',
    body: [
      "Décorer votre maison est une activité centrale du confort — vous placez et arrangez meubles et déco pour faire de la chaumière la vôtre.",
      "Le catalogue complet de meubles et de déco sera confirmé à la sortie.",
    ],
  },
  'character-creator': {
    title: 'Éditeur de personnage', dek: "Créez votre propre vampire — l'éditeur de personnage est jouable dans la démo.",
    body: [
      "Vous créez votre propre vampire dans l'éditeur de personnage, inclus dans la démo gratuite. Les modèles de personnage sont volontairement non genrés, et les rencontres amoureuses ne sont pas verrouillées par genre.",
      "Vous nommez aussi votre ferme et votre Hellkitten. La liste complète des options de personnalisation sera confirmée à la sortie.",
    ],
  },
  shapeshifting: {
    title: 'Métamorphose', dek: 'Transformez-vous en chauve-souris pour parcourir la ville après la tombée de la nuit et atteindre des lieux cachés.',
    body: [
      "En tant que vampire, vous pouvez vous métamorphoser — par exemple en chauve-souris — pour vous déplacer rapidement en ville et atteindre des endroits inaccessibles à pied.",
      "D'autres formes seront confirmées à la sortie.",
    ],
  },
  'seasonal-events': {
    title: 'Événements saisonniers', dek: "Des célébrations en ville réparties sur l'année.",
    body: [
      "Les célébrations saisonnières font partie de la vie en ville, et un animateur théâtral (Pumpkin Head) a été montré animant les rassemblements.",
      "Le calendrier complet des événements et les dates seront confirmés à la sortie.",
    ],
  },
  pottery: {
    title: 'Poterie', dek: "Un artisanat cosy, cité aux côtés de l'arrangement floral et de la broderie.",
    body: [
      "Rapporté par la communauté : la poterie est citée comme l'une des \"distractions sombres\" de Moonlight Peaks, aux côtés de l'arrangement floral, de la broderie et de la cuisine. La mécanique exacte, les matériaux et où elle se débloque ne sont pas encore confirmés indépendamment ici.",
    ],
  },
  'marshmallow-roasting': {
    title: 'Grillage de marshmallows', dek: 'Une activité cosy au coin du feu, aussi confirmée comme mini-jeu de rendez-vous.',
    body: [
      "Rapporté par la communauté : griller des marshmallows au degré de cuisson préféré d'un rendez-vous est confirmé comme l'un des mini-jeux utilisés pendant les rendez-vous en jeu. C'est aussi cité séparément comme loisir autonome parmi les \"distractions sombres\" de Moonlight Peaks.",
    ],
  },
  stargazing: {
    title: "Observation des étoiles", dek: "Un loisir nocturne paisible, cité parmi les distractions cosy du jeu.",
    body: [
      "Rapporté par la communauté : l'observation des étoiles est citée comme l'un des loisirs \"distractions sombres\" de Moonlight Peaks. La mécanique exacte — scène passive, mini-jeu, ou liée à un lieu précis — n'est pas encore confirmée indépendamment ici.",
    ],
  },
  yoga: {
    title: 'Yoga', dek: 'Une activité confirmée, liée à son propre succès, "Moonlit Stretching."',
    body: [
      "Confirmé : le yoga est une véritable activité dans Moonlight Peaks, liée au succès \"Moonlit Stretching\" (accordé pour avoir participé à votre première séance de yoga). Il figure aussi dans la liste des loisirs \"distractions sombres\" du jeu, aux côtés de la cuisine, la pêche et le jeu de cartes Nokturna.",
      "Rapporté par la communauté : un lieu nommé \"la cabane de yoga\" est lié à cette activité. La mécanique exacte des séances, les horaires et un éventuel PNJ instructeur ne sont pas encore confirmés indépendamment ici.",
    ],
  },
};
