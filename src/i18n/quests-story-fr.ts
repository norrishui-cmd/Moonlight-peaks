// src/i18n/quests-story-fr.ts
// French translations for the main story quest chain (title/summary/reward/unlock text only).
// slug/chapter/status/leadsTo are shared from data/quests-story.ts.
export type StoryQuestTrFr = { title: string; unlock?: string; summary: string; reward?: string };

export const storyChaptersFr: { number: number; title: string; dek: string }[] = [
  { number: 1, title: 'Arriver à Moonlight Peaks', dek: "S'inscrire comme résident, rencontrer Orlock et Viktor, et votre première culture." },
  { number: 2, title: 'A Bridge Too Far', dek: "La malédiction de Fiona sur le pont d'Orlock, et le rituel qui la lève." },
  { number: 3, title: 'Le Crest Garden & le Mana', dek: 'Un mystère au Crest Garden, et le déblocage de votre première vraie magie.' },
  { number: 4, title: 'La vie en ville & drame familial', dek: 'Politique de la mairie, tensions familiales, et s\'installer à Moonlight Peaks.' },
  { number: 5, title: 'L\'arc du mariage', dek: 'Un mariage en ville — invitations, répétitions, et affaires inachevées.' },
];

export const storyQuestsFr: Record<string, StoryQuestTrFr> = {
  'register-at-town-hall': {
    title: "S'inscrire à la mairie",
    summary: "Confirmé via plusieurs sources : après avoir rencontré Orlock (voir plus bas), vous vous rendez en ville, où la maire Brook vous inscrit comme nouveau résident à la mairie et vous donne Chester, un coffre vivant qui vend automatiquement tout ce qu'on y dépose pendant la nuit.",
    reward: "Rencontrer Brook, recevoir Chester",
  },
  'meet-the-townsfolk': {
    title: 'Rencontrer les habitants / Un nouveau départ',
    unlock: "Terminer l'inscription à la mairie",
    summary: "Confirmé : des objectifs de mise en place précoces où vous rencontrez Orlock (un vampire avec la gueule de bois que vous trouvez endormi sur votre pelouse — tapotez-le plutôt que de lui verser de l'eau dessus pour la meilleure option de dialogue), puis Viktor, l'oncle d'Orlock, qui vit dans la crypte/le bâtiment en dôme à gauche de votre ferme et vous enseigne les bases de l'agriculture.",
    reward: "Ensemble d'outils de départ complet : pelle, arrosoir, hache, pioche et une baguette cassée",
  },
  'a-roof-over-your-head': {
    title: 'Un toit sur la tête / Le premier pas vers le confort',
    summary: "Confirmé comme partie de la mise en place de nouvelle partie : objectifs de base de logement et de confort, en parallèle de votre première plantation de Blood Grapes (la culture de départ d'Orlock, donnée après l'avoir réveillé). Réparer votre toit débloque aussi le plan du Raffineur.",
    reward: "Plan du Raffineur (à la réparation du toit)",
  },
  'darkness-over-moonlight-peaks': {
    title: 'Ténèbres sur Moonlight Peaks',
    summary: "Rapporté via la transcription du journal de quêtes de Neoseeker comme moment précoce de l'histoire principale. Les objectifs concrets ne sont pas encore confirmés indépendamment dans le détail ici.",
  },
  'a-bridge-too-far': {
    title: 'A Bridge Too Far',
    summary: "Confirmé via un walkthrough dédié (Output Lag), recoupé avec Into Indie Games et Bonus Action : Fiona, une sorcière de Moonlit Pines, a maudit le pont menant au quartier d'Orlock après qu'il a fait une blague grossière sur elle au bar. Parlez à Fiona pour l'apprendre, puis trouvez Orlock au Broken Lamp (il y boit le plus souvent) et proposez de payer son ardoise — 350 pièces d'or — pour qu'il s'excuse. Mina, à Coffee and Coffins, vous offre les 350 pièces d'or pour que vous n'ayez pas à dépenser votre propre argent. Payez l'ardoise à Samael (le barman), puis emmenez Orlock chez Fiona pour la cinématique d'excuses. Fiona révèle alors qu'elle ne peut pas lever seule la malédiction et a besoin de trois sorcières — Noel, Sabrina et Luna — trouvées dans toute la ville. Recrutez les trois et retournez au pont pour déclencher le rituel de levée de malédiction.",
    reward: "Pont rouvert — débloque le cimetière et Misty Shores, plus un succès",
  },
  'tension-in-the-crest-garden': {
    title: 'Tension au Crest Garden',
    unlock: 'Terminer "A Bridge Too Far", puis attendre le lendemain',
    summary: "Confirmé via le journal de quêtes de Neoseeker : c'est le moment de suite direct après la levée de la malédiction du pont, centré sur un mystère au Crest Garden.",
    reward: "Aucune récompense d'objet directe — débloque la quête suivante \"A Croak and a Crest\"",
  },
  'the-quest-for-mana': {
    title: 'The Quest for Mana',
    unlock: 'Terminer "The Magic of Crops", attendre 1 jour, entrer en ville pour déclencher "A Mayor\'s Burden", puis attendre 2 jours et lire la lettre de Sabrina',
    summary: "Confirmé via la transcription du journal de quêtes de Neoseeker : c'est la chaîne de quêtes qui mène à votre première véritable infrastructure de magie.",
  },
  'building-a-mana-extractor': {
    title: 'Building a Mana Extractor',
    unlock: 'Terminer "The Quest for Mana", puis attendre 2 jours',
    summary: 'Confirmé : la suite directe de The Quest for Mana.',
    reward: "Essence de mana et le plan de l'extracteur de mana",
  },
  'the-dinner-party': {
    title: 'The Dinner Party',
    summary: "Confirmé via le journal de quêtes de Neoseeker : une quête d'événement social en ville.",
    reward: 'Forme de chat (transformation Hellkitten débloquée)',
  },
  'mend-it-with-magic': {
    title: 'Mend it with Magic / A Touch of Magic',
    unlock: 'Terminer "Mend it with Magic", attendre 2 jours et lire la lettre de Fiona',
    summary: "Confirmé via la transcription du journal de quêtes de Neoseeker comme paire de quêtes de suite centrée sur la magie.",
  },
  'town-hall-drama': {
    title: 'Dinner with the Parents / Town Hall Drama',
    summary: 'Confirmé via le journal de quêtes de Neoseeker : des moments narratifs centrés sur la ville et la famille.',
  },
  'the-plastic-chairs': {
    title: 'The Plastic Chairs',
    summary: 'Confirmé via la transcription du journal de quêtes de Neoseeker.',
    reward: '4 thés au gingembre',
  },
  'a-family-reunion': {
    title: 'A Family Reunion',
    summary: 'Confirmé via le journal de quêtes de Neoseeker comme moment narratif centré sur la famille.',
  },
  'the-mermaids-wish': {
    title: 'The Mermaid\'s Wish',
    summary: 'Confirmé via le journal de quêtes de Neoseeker : terminer cette quête avec "A Touch of Magic" est un prérequis pour "The Rehearsal Dinner".',
    reward: 'Forme aquatique (transformation en sirène débloquée)',
  },
  'the-rehearsal-dinner': {
    title: 'The Rehearsal Dinner',
    unlock: 'Terminer "The Mermaid\'s Wish" et "A Touch of Magic", attendre 1 jour et lire l\'invitation au dîner',
    summary: 'Confirmé via la transcription du journal de quêtes de Neoseeker — le début des moments narratifs de l\'arc du mariage du jeu.',
  },
  'kims-invite': {
    title: "Kim's Invite",
    summary: "Confirmé via le journal de quêtes de Neoseeker comme partie de l'arc du mariage.",
  },
  'brides-attendant-duty': {
    title: "Bride's Attendant Duty",
    summary: "Confirmé via le journal de quêtes de Neoseeker comme partie de l'arc du mariage.",
  },
  'unfinished-business': {
    title: 'Unfinished Business',
    summary: "Confirmé via le journal de quêtes de Neoseeker comme dernier moment actuellement documenté de l'arc du mariage. Du contenu narratif ultérieur pourrait aller au-delà — nous mettrons à jour dès que confirmé.",
  },
  'orlocks-wine-scheme': {
    title: "Le plan à vin d'Orlock (Blood Wine)",
    summary: "Confirmé via Bonus Action, recoupé avec Into Indie Games : juste après votre arrivée, vous trouvez Orlock, un vampire avec la gueule de bois, endormi sur votre pelouse — tapotez-le plutôt que de lui verser de l'eau dessus pour la meilleure option de dialogue. Il vous donne des graines de Blood Grapes et vous demande de lui faire du vin rouge/de sang. Une fois que vous l'avez fait et que vous le poussez à s'excuser auprès de Fiona, il vous envoie régler son ardoise de 350 pièces d'or auprès de Samael.",
    reward: "Faire du vin de sang ; pousser Orlock à s'excuser, régler une dette de 350 pièces d'or à Samael ; mène vers \"A Bridge Too Far\"",
  },
  'a-croak-and-a-crest': {
    title: 'A Croak and a Crest',
    unlock: 'Terminer "Tension in the Crest Garden"',
    summary: "Confirmé via la transcription du journal de quêtes de Neoseeker comme suite directe du mystère du Crest Garden.",
    reward: 'Place le Blason Logan dans le Crest Garden et compte pour les succès liés aux blasons',
  },
  'a-missing-moon': {
    title: 'A Missing Moon',
    summary: "Confirmé via la transcription du journal de quêtes de Neoseeker comme moment narratif intermédiaire, suivant la chaîne de l'extracteur de mana et menant vers la crise familiale Ambrosia.",
  },
  'the-ambrosia-crisis': {
    title: 'The Ambrosia Crisis',
    unlock: 'Terminer "Master of the Night", attendre 2 jours et lire la lettre du manoir Ambrosia',
    summary: "Confirmé via la transcription du journal de quêtes de Neoseeker : un moment de crise familiale pour la famille de vampires Ambrosia, débloqué après avoir terminé \"Master of the Night\" et une courte attente pour une lettre.",
  },
};
