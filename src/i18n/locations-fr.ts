// src/i18n/locations-fr.ts
// French translations for locations.ts entries (title/dek/body/sections/faq text only).
// slug/tag/status/image/related href are shared from data/locations.ts.
export type LocationTrFr = {
  title: string; dek: string; body?: string[];
  sections?: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const locationsFr: Record<string, LocationTrFr> = {
  town: {
    title: 'La ville', dek: 'La ville magique de montagne des sept familles surnaturelles, où vous commencez votre nouvelle vie de vampire.',
    body: [
      "Moonlight Peaks se déroule dans une petite ville magique de montagne, foyer de sept familles depuis des siècles. Vous arrivez comme un jeune vampire laissant la grande ville derrière vous.",
      "La ville mélange vie de village cosy et surnaturel — vos voisins sont des loups-garous, des sorcières, des sirènes et plus encore, et les rencontrer est une grande partie du jeu.",
    ],
    faq: [
      { q: 'Où se déroule Moonlight Peaks ?', a: 'Dans une petite ville magique de montagne, foyer de sept familles surnaturelles.' },
      { q: 'Qui sont les voisins dans Moonlight Peaks ?', a: 'Confirmé : loups-garous, sorcières, sirènes et autres habitants surnaturels répartis en sept familles — les rencontrer est un élément central du jeu.' },
    ],
  },
  'town-square': {
    title: 'La place de la ville', dek: 'Le cœur communautaire de la ville, où les habitants se rassemblent et où se déroulent les événements saisonniers.',
    body: [
      "Comme la plupart des villes de cozy sim, Moonlight Peaks se concentre sur des espaces communautaires où les habitants se croisent quotidiennement.",
      "Les célébrations saisonnières font partie de la vie en ville — un animateur théâtral a été montré animant les rassemblements. La disposition exacte et les événements qui s'y déroulent seront confirmés à la sortie.",
    ],
  },
  'your-farm': {
    title: 'Votre ferme', dek: 'La ferme familiale abandonnée où vous emménagez et que vous restaurez en une ferme au clair de lune.',
    body: [
      "Votre point de départ est une ferme familiale abandonnée, et la restaurer en une ferme fonctionnelle est le cœur du jeu.",
      "Vous cultivez des récoltes enchantées et des fleurs lumineuses, et élevez du bétail magique comme le Draculamb — tout cela entretenu la nuit, puisque vous retournez dans votre cercueil au lever du soleil.",
      "Confirmé : vous nommez votre propre ferme pendant la création du personnage (avec votre Hellkitten) — il n'y a pas de nom \"officiel\" fixe unique, puisque c'est un nom que vous choisissez vous-même. Des fichiers ayant fuité avant la sortie mentionnaient un nom de travail interne, \"the Plot\", mais c'est une étiquette côté développeur, pas le nom que vous voyez ou choisissez en jeu.",
    ],
    faq: [
      { q: 'Cultive-t-on la ferme de jour dans Moonlight Peaks ?', a: 'Non — vous la cultivez la nuit et retournez dans votre cercueil au lever du soleil.' },
      { q: 'Comment s\'appelle votre ferme dans Moonlight Peaks ?', a: "Il n'y a pas de nom fixe unique — confirmé : vous choisissez le nom de votre propre ferme pendant la création du personnage, tout comme vous nommez votre personnage et votre Hellkitten." },
    ],
  },
  'your-cottage': {
    title: 'Votre chaumière', dek: 'Votre maison gothique personnalisable, que vous décorez et aménagez à votre goût.',
    body: [
      "Vous vivez dans une chaumière gothique que vous pouvez faire vôtre. Décorer — placer et arranger meubles et déco — est l'une des activités centrales du confort.",
      "Les pièces exactes, ensembles de meubles et options de personnalisation disponibles seront confirmés à la sortie du jeu complet.",
    ],
  },
  forest: {
    title: 'La forêt', dek: 'Les bois autour de la ville, où vous cueillez après la tombée de la nuit.',
    body: [
      "Cueillir dans la forêt est l'une des activités confirmées du jeu, attendez-vous donc à des trouvailles saisonnières parmi les arbres en périphérie de la ville.",
      "Les objets exacts à cueillir et les éventuels points de repère forestiers seront confirmés à la sortie du jeu complet.",
    ],
  },
  lake: {
    title: 'Lac Silverveil', dek: 'Le lac confirmé de la ville, foyer de la pêche et de la famille des sirènes.',
    body: [
      "Nom confirmé : Lac Silverveil. Les zones aquatiques supportent la pêche, l'une des activités présentées dans la démo, et les sirènes de la ville (la famille Hosu) sont liées à l'eau.",
      "Les poissons nommés et les emplacements de pêche spécifiques ne sont pas encore sourcés — voir le guide de pêche pour ce qui est confirmé jusqu'à présent.",
    ],
  },
  pier: {
    title: 'La jetée', dek: 'Un endroit au-dessus de l\'eau pour pêcher et pour des moments calmes.',
    body: [
      "Les zones de pêche dans les cozy sims incluent généralement une jetée ou un ponton pour lancer sa ligne.",
      "Si Moonlight Peaks nomme une jetée spécifique sera confirmé à la sortie — traitez ceci pour l'instant comme faisant partie de la zone de pêche du lac.",
    ],
  },
  mines: {
    title: 'Cave of Echoes & Mines', dek: 'Comment débloquer la Cave of Echoes, où trouver du cuivre et du fer, et les blocages de progression les plus fréquents.',
    sections: [
      { title: 'Comment débloquer la Cave of Echoes', body: "Confirmé : la Cave of Echoes se trouve en bas à gauche de la zone Misty Shores, à l'ouest du manoir d'Orlock. Elle est verrouillée au départ et s'ouvre une fois que vous terminez la quête \"A Bridge Too Far\", qui rouvre le manoir Ambrosia et la zone Misty Shores environnante." },
      { title: "Pourquoi la Cave of Echoes est encore verrouillée", body: "Si vous ne pouvez pas encore l'atteindre, la quête — pas un objet clé manquant ou un achat en boutique — est presque toujours le vrai blocage. Rapporté par la communauté : la zone est verrouillée par une querelle narrative entre Orlock et Fiona à propos d'un pont soi-disant maudit." },
      { title: 'Comment "A Bridge Too Far" est lié à la progression', body: "Voir le guide complet de la quête \"A Bridge Too Far\" pour les prérequis et les étapes. En bref : terminez d'abord \"Orlock's Wine Scheme\", puis parlez aux sorcières de la ville et retournez au pont pour lever la querelle/malédiction et ouvrir cette zone." },
      { title: 'Où trouver le minerai de cuivre', body: "Rapporté par la communauté : une fois à l'intérieur, le minerai de cuivre ressemble à de la roche ordinaire tachetée de cuivre, miné avec une pioche. Les gros amas de minerai peuvent donner jusqu'à 6 minerais au lieu d'1 pour un gisement normal. Fabriquez un lingot de cuivre au fourneau avec 4 minerais de cuivre + 1 charbon de bois." },
      { title: 'Où trouver le minerai de fer', body: "Confirmé comme ressource d'un palier ultérieur dans le même système de mines, débloquée une fois que l'histoire dépasse le palier initial du cuivre. Le déclencheur exact de déblocage et l'emplacement dans la grotte ne sont pas encore vérifiés indépendamment ici." },
      { title: 'Quand les nouveaux types de minerai se débloquent', body: "Confirmé : l'accès aux minerais se fait par paliers plutôt que d'un coup — le minerai de cuivre est disponible en premier, le fer et l'or s'ouvrant plus tard à mesure que vous avancez dans l'histoire principale, pas immédiatement en entrant dans la grotte." },
      { title: 'Problèmes fréquents de progression dans les mines', body: "Si le cuivre vous manque, vérifiez d'abord \"A Bridge Too Far\" plutôt que de chercher plus intensément dans la grotte. Si votre pioche ne peut pas casser un gisement, elle a probablement besoin d'une amélioration de palier au Howling Hammer (la boutique de Ridge) avant de pouvoir miner ce type de minerai." },
      { title: 'Y a-t-il du combat dans les mines ?', body: "Non — confirmé qu'il n'y a de combat nulle part dans Moonlight Peaks, y compris dans les mines, donc l'exploration souterraine reste paisible." },
    ],
    faq: [
      { q: 'Y a-t-il du combat dans les mines ?', a: "Non — les aperçus confirment qu'il n'y a de combat nulle part dans Moonlight Peaks, y compris dans les mines." },
      { q: 'Pourquoi je ne trouve pas de minerai de cuivre dans les mines ?', a: "Confirmé : le minerai de cuivre se trouve dans la Cave of Echoes, qui ne s'ouvre qu'après avoir terminé la quête \"A Bridge Too Far\" — vérifiez votre progression de quête avant de supposer avoir manqué un gisement." },
    ],
  },
  graveyard: {
    title: 'Le cimetière', dek: 'Un coin calme et éclairé par la lune à Misty Shores où vous rencontrez Death — confirmé comme le cimetière Ambrosia.',
    body: [
      "Confirmé au lancement : ce cimetière se trouve dans la zone Misty Shores, initialement bloqué par un pont que Fiona a maudit après une dispute ivre avec Orlock. Terminer la quête \"A Bridge Too Far\" lève la malédiction et ouvre l'accès.",
      "Une fois à l'intérieur, vous rencontrez Death ici pour la première fois — sa demeure confirmée, \"la cabane de Death\", est à proximité.",
      "Des fichiers de jeu ayant fuité avant la sortie nomment ce lieu \"cimetière Ambrosia\", associé à un \"manoir Ambrosia\" correspondant — probablement la demeure ancestrale de la famille de vampires.",
    ],
    faq: [
      { q: 'Comment débloquer le cimetière dans Moonlight Peaks ?', a: "Confirmé : terminez la quête \"A Bridge Too Far\", qui lève une malédiction que Fiona a jetée sur le pont vers Misty Shores après une dispute avec Orlock." },
      { q: 'Où rencontre-t-on Death dans Moonlight Peaks ?', a: 'Confirmé : au cimetière Ambrosia, une fois que "A Bridge Too Far" débloque Misty Shores. La demeure confirmée de Death, "la cabane de Death", est à proximité.' },
    ],
  },
  shops: {
    title: 'Boutiques de la ville', dek: 'Les boutiques nommées de la ville — la plupart désormais confirmées avec leurs propriétaires.',
    body: [
      "Boutiques et propriétaires confirmés : le Howling Hammer est la boutique d'amélioration d'outils de Ridge (ouverte en semaine seulement) ; The Broken Lamp est le bar de Samael ; Coffee & Coffins est le café de Mina et Evan ; Third Eye Threads est la boutique de couture d'Aras ; et Webb of Wonders est la boutique de Sabrina, qui vend l'élixir d'alter ego et des sorts — un jeu de mots sur son propre nom de famille Webb.",
      "Des fichiers de jeu ayant fuité avant la sortie mentionnaient aussi un Midnight Market et une Bloom Boutique — pas encore confirmés dans le jeu en direct.",
    ],
    faq: [
      { q: 'Quelles boutiques y a-t-il dans Moonlight Peaks ?', a: "Confirmé : le Howling Hammer (amélioration d'outils, Ridge), The Broken Lamp (bar, Samael), Coffee & Coffins (café, Mina et Evan), Third Eye Threads (vêtements, Aras) et Webb of Wonders (potions et vêtements, Sabrina)." },
      { q: 'Y a-t-il un Midnight Market ou une Bloom Boutique dans Moonlight Peaks ?', a: "Pas encore confirmé — ces noms apparaissent dans des fichiers ayant fuité avant la sortie, mais n'ont pas encore été vérifiés dans le jeu en direct." },
    ],
  },
  landmarks: {
    title: 'Lieux emblématiques & notables', dek: 'Des lieux nommés au-delà des zones centrales — la plupart désormais confirmés avec un vrai contexte.',
    sections: [
      { title: 'Misty Shores, Moonlit Pines, Pink Grove & Luna Bay', body: "Confirmé : Misty Shores est la zone de la famille Ambrosia, foyer de la Cave of Echoes (minerai) et du cimetière où vous rencontrez Death, débloquée via la quête \"A Bridge Too Far\". Moonlit Pines est où le cercle de sorcières est basé. Pink Grove abrite le démon de l'amour Llemi, qui n'y apparaît généralement que pendant les festivals. Luna Bay est où vit la famille de sirènes Hosu, arrivant environ un an après le début de l'histoire." },
      { title: 'Howling Marshes', body: "Confirmé via plusieurs sources de la semaine de lancement : situé juste au nord de la ville principale et à l'est de Moonlit Pines. Deux entrées sont confirmées — l'une juste à l'est du stand de graines de Luna à Moonlit Pines, l'autre juste à l'est de la mairie. Vous y êtes envoyé dans le cadre de \"Tension in the Crest Garden\". Les récoltables confirmés ici incluent Sugarbone et plusieurs fleurs, qu'il vaut la peine de transformer à une station de cuisine ou un séchoir plutôt que de vendre bruts. La maison de la famille Logan est aussi ici, avec une crypte inaccessible lors de la première visite, et une zone nord également pas encore accessible — les deux probablement liées à des quêtes ultérieures." },
      { title: 'Moonlit Slopes, la Crypte, Moonlight Tower & Crest Garden', body: "Également confirmé via le wiki officiel du jeu : Moonlit Slopes, la Crypte, Moonlight Tower et le Crest Garden de la famille Khazan sont tous de vrais lieux. Des descriptions complètes de chacun restent à vérifier." },
    ],
  },
  'town-hall': {
    title: 'Mairie', dek: 'Où vous vous inscrivez comme nouveau résident, guidé par la maire Brook.',
    body: [
      "Confirmé au lancement : la mairie est où vous vous inscrivez tôt comme nouveau résident et rencontrez la maire Brook (tête de la famille loup-garou Logan), qui vous offre Chester, le coffre de rangement vivant, lors de cette visite.",
      "Le tableau d'affichage de la ville — Albertus' Jobs, géré par un hibou nommé Albertus — est aussi basé ici et liste les quêtes disponibles.",
    ],
    faq: [
      { q: 'Qui dirige la mairie dans Moonlight Peaks ?', a: "Confirmé : la maire Brook, tête de la famille loup-garou Logan, qui vous offre Chester (un coffre de rangement vivant) quand vous vous inscrivez comme nouveau résident." },
      { q: 'Où est le tableau des quêtes dans Moonlight Peaks ?', a: "Confirmé : Albertus' Jobs, un tableau d'affichage géré par un hibou nommé Albertus, est basé à la mairie et liste les quêtes disponibles." },
    ],
  },
  'ambrosia-mansion': {
    title: 'Manoir Ambrosia', dek: 'La demeure ancestrale de la famille de vampires Ambrosia.',
    body: [
      "Confirmé via le wiki officiel du jeu : le manoir Ambrosia est la demeure de la famille de vampires Ambrosia, associé au cimetière Ambrosia voisin où se trouve Death.",
    ],
    faq: [
      { q: 'Qui vit au manoir Ambrosia ?', a: 'Confirmé via le wiki officiel du jeu : la famille de vampires Ambrosia, dont ceci est la demeure ancestrale.' },
      { q: 'Le manoir Ambrosia est-il près du cimetière ?', a: 'Oui, confirmé : le manoir Ambrosia est associé au cimetière Ambrosia voisin où se trouve Death.' },
    ],
  },
  'silverveil-museum': {
    title: 'Le Musée', dek: "Un bâtiment de collection basé sur les dons, qui ouvre au milieu de la première année une fois que Persephone, Jada et Winston emménagent en ville.",
    body: [
      "Confirmé : le musée n'existe pas dès le premier jour — il ouvre une fois qu'un fil narratif impliquant l'emménagement de Persephone, Jada et Winston en ville (la maison abandonnée sur la jetée) se déroule. Rapporté par la communauté : pour beaucoup de joueurs, cela arrive vers le début de l'automne de la première année, selon votre propre rythme dans les premières quêtes.",
      "Confirmé : donner fonctionne différemment que de parler à un commerçant. Le musée a plusieurs salles de collection thématiques, accessibles via un portail dans la salle principale, et vous donnez en marchant jusqu'à la collection concernée et en interagissant avec un panneau point d'exclamation à côté — le même style d'icône utilisé ailleurs pour le contenu narratif en attente.",
      "Confirmé : les objets qu'il vous manque encore pour une collection affichent une petite icône de musée dans votre inventaire, pour éviter de vendre ou d'utiliser accidentellement quelque chose dont vous avez encore besoin. Les exigences de qualité varient selon la collection — la collection agricole demande spécifiquement des récoltes et cultures de qualité supérieure (pas n'importe lesquelles), donc cela vaut la peine de garder vos meilleures récoltes plutôt que de tout vendre.",
      "Pas encore confirmé indépendamment ici : le nombre exact de salles de collection, les listes complètes de dons par salle, et les récompenses concrètes que chaque collection débloque.",
    ],
    faq: [
      { q: 'Quand le musée ouvre-t-il dans Moonlight Peaks ?', a: "Confirmé : pas dès le premier jour — il ouvre une fois que Persephone, Jada et Winston emménagent en ville, un fil narratif qui arrive pour beaucoup de joueurs vers le début de l'automne de la première année." },
      { q: 'Comment donne-t-on au musée ?', a: "Confirmé : allez à la salle de collection concernée (accessible via un portail dans la salle principale) et interagissez avec un panneau point d'exclamation à côté, plutôt que de parler à un commerçant." },
    ],
  },
  'yoga-shack': {
    title: 'La cabane de yoga', dek: 'Un lieu d\'activité confirmé pour le yoga, l\'une des "distractions sombres" du jeu.',
    body: [
      "Confirmé exister via le wiki officiel du jeu, lié au yoga — l'un des loisirs aux côtés de la pêche, la cuisine et Nokturna.",
    ],
  },
  'khazan-temple': {
    title: 'Temple Khazan', dek: 'Un lieu lié à la famille de voyants Khazan.',
    body: [
      "Confirmé exister via le wiki officiel du jeu. Plus de détails sur ce qui s'y passe ne sont pas encore sourcés.",
    ],
  },
  'crystal-cave': {
    title: 'Crystal Cave & Twilight Catacombs', dek: "Une grotte riche en gemmes distincte de la Cave of Echoes, située à côté de la maison de Fiona.",
    body: [
      "Confirmé : la Crystal Cave est une zone souterraine distincte de la Cave of Echoes, située à gauche de la maison de Fiona. Un gros rocher bloque l'entrée jusqu'à ce que vous améliorez votre pioche au moins au niveau cuivre.",
      "Confirmé : à l'intérieur, des gisements de Rose Quartz apparaissent abondamment, avec d'autres gemmes. Le Rose Quartz est broyé en poudre avec le mortier enchanté (débloqué une fois que vous commencez à apprendre la magie) et utilisé dans plusieurs recettes d'artisanat et quêtes.",
      "Confirmé via le wiki officiel du jeu : en plus de la Cave of Echoes, les mines incluent aussi une autre zone appelée Twilight Catacombs — suggérant que les zones souterraines sont divisées en plusieurs zones distinctes plutôt qu'une seule grotte. Confirmé ailleurs : les Vampsters (petites créatures se cachant en ville et dans la plupart des maisons) sont aussi portés ici à travers un trou pour terminer leur chaîne de quête de collecte, une fois que les premières quêtes d'histoire débloquent l'accès aux catacombes.",
      "Pour atteindre la Crystal Cave elle-même, Misty Shores doit déjà être débloqué (via la quête \"A Bridge Too Far\"), puisque c'est là que se trouvent la Cave of Echoes et ses améliorations de pioche.",
    ],
    faq: [
      { q: 'Où est la Crystal Cave dans Moonlight Peaks ?', a: "Confirmé : c'est une zone souterraine distincte à gauche de la maison de Fiona, séparée de la Cave of Echoes. Un rocher bloque l'entrée jusqu'à ce que votre pioche atteigne le niveau cuivre." },
      { q: 'Que peut-on obtenir de la Crystal Cave ?', a: "Confirmé : des gisements de Rose Quartz apparaissent abondamment avec d'autres gemmes. Le Rose Quartz est broyé en poudre avec le mortier enchanté et utilisé dans plusieurs recettes d'artisanat et quêtes." },
    ],
  },
  'howling-marshes': {
    title: 'Howling Marshes', dek: "Juste au nord de la ville et à l'est de Moonlit Pines — deux entrées confirmées, Sugarbone et fleurs récoltables, et la maison de la famille Logan.",
    body: [
      "Confirmé via plusieurs sources de la semaine de lancement : Howling Marshes est situé juste au nord de la ville principale et à l'est de Moonlit Pines.",
      "Deux entrées sont confirmées : l'une juste à l'est du stand de graines de Luna à Moonlit Pines, l'autre juste à l'est de la mairie. Vous y êtes envoyé dans le cadre de la quête \"Tension in the Crest Garden\".",
      "Les récoltables confirmés ici incluent Sugarbone et plusieurs fleurs — qu'il vaut la peine de transformer à une station de cuisine ou un séchoir plutôt que de vendre bruts.",
      "La maison de la famille Logan est aussi ici, avec une crypte inaccessible lors de la première visite, et une zone nord également pas encore accessible — les deux probablement liées à des quêtes ultérieures.",
    ],
    related: [{ label: 'Tous les lieux emblématiques', href: '/locations/landmarks' }, { label: 'Famille Logan', href: '/families' }, { label: 'La ville', href: '/locations/town' }],
    faq: [
      { q: 'Où se trouve Howling Marshes dans Moonlight Peaks ?', a: "Confirmé : juste au nord de la ville principale et à l'est de Moonlit Pines. Il y a deux entrées — l'une juste à l'est du stand de graines de Luna à Moonlit Pines, l'autre juste à l'est de la mairie." },
      { q: 'Comment débloquer Howling Marshes ?', a: "Vous y êtes envoyé dans le cadre de la quête d'histoire \"Tension in the Crest Garden\" — ce n'est pas verrouillé par un déblocage séparé." },
      { q: 'Que peut-on récolter à Howling Marshes ?', a: "Les récoltables confirmés incluent Sugarbone et plusieurs fleurs. Ils valent la peine d'être transformés à une station de cuisine ou un séchoir plutôt que vendus bruts." },
    ],
  },
  'twilight-catacombs': {
    title: 'Twilight Catacombs', dek: "Un réseau de tunnels souterrains verrouillé reliant la Crypte, la Crystal Cave, le cimetière de Misty Shores, Luna Bay et Howling Marshes, débloqué en faisant des dons au musée.",
    body: [
      "Confirmé : les Twilight Catacombs sont un réseau de tunnels souterrains verrouillé avec des entrées/sorties dispersées sur la carte, plutôt qu'un seul donjon autonome. Des portes se trouvent dans la Crypte (où se trouve Viktor) et le cimetière de Misty Shores ; interagir avant le déblocage montre seulement qu'elles sont \"verrouillées de l'autre côté\", sans expliquer comment les ouvrir.",
      "Confirmé : le chemin de déblocage passe par le musée, pas par un objet clé autonome trouvé en explorant. Atteignez 25% de progression totale dans les dons au musée, et Jada vous donne la clé du sceau Dracula. Montrez cette clé à Viktor dans la Crypte pour déclencher la quête \"A Key to the Deep\" et ouvrir les catacombes.",
      "Confirmé : une fois à l'intérieur, le réseau de tunnels relie plusieurs zones souterraines et de surface du jeu via des plaques de pression bleues — l'une mène à une porte effondrée dans la Crystal Cave, une autre à l'entrée des catacombes au cimetière de Misty Shores, une autre au nord près de la rivière à une porte effondrée à Luna Bay, et une à l'est à l'entrée des catacombes à Howling Marshes.",
      "Rapporté par un walkthrough : après avoir trouvé ces connexions, dormir dans le cercueil et vérifier la boîte aux lettres le lendemain apporte une lettre de Samael. Lui rendre visite au Broken Lamp débloque une entrée supplémentaire.",
    ],
    related: [{ label: 'Crystal Cave', href: '/locations/crystal-cave' }, { label: 'Les mines', href: '/locations/mines' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Musée', href: '/locations/silverveil-museum' }, { label: 'Viktor', href: '/characters/viktor-dracula' }, { label: 'Samael', href: '/characters/samael' }],
    faq: [
      { q: 'Comment débloquer les Twilight Catacombs dans Moonlight Peaks ?', a: "Confirmé : atteignez 25% de progression dans les dons au musée pour recevoir la clé du sceau Dracula de Jada, puis montrez-la à Viktor dans la Crypte pour démarrer la quête \"A Key to the Deep\", qui ouvre les catacombes." },
      { q: 'Où sont les entrées des Twilight Catacombs dans Moonlight Peaks ?', a: "Les entrées confirmées sont dans la Crypte (là où se trouve Viktor) et le cimetière de Misty Shores. Rapporté par un walkthrough : des plaques de pression internes relient aussi à la Crystal Cave, Luna Bay et Howling Marshes une fois à l'intérieur." },
      { q: 'Que font les plaques de pression bleues dans les Twilight Catacombs ?', a: "Rapporté par un walkthrough : marcher sur chacune ouvre une connexion raccourcie vers une autre porte effondrée ailleurs sur la carte — Crystal Cave, le cimetière de Misty Shores, Luna Bay et Howling Marshes — faisant des catacombes un nœud qui raccourcit les trajets entre ces zones." },
    ],
  },
  'crest-garden': {
    title: 'Crest Garden', dek: 'Un jardin de la ville à côté de la mairie qui affiche les blasons des sept familles au fur et à mesure que vous les débloquez via l\'histoire principale.',
    body: [
      "Confirmé par le wiki officiel : le Crest Garden se trouve à côté de la mairie et affiche les blasons de chacune des sept familles de Moonlight Peaks au fur et à mesure qu'ils se débloquent par la progression de l'histoire — un traceur visuel de votre avancement dans les histoires familiales centrales du jeu.",
      "Rapporté par un walkthrough : le blason de la famille Logan disparaît spécifiquement en cours de route, vous envoyant sur un détour de quête de récupération — Dragan vous oriente vers le Broken Lamp pour des informations, ce qui mène à Howling Marshes, où il s'avère que Yabbis a mangé le blason et veut un lingot de cuivre en échange.",
      "Rapporté par un walkthrough : les deux derniers blasons à se remplir appartiennent aux deux familles de vampires, Ambrosia et Dracula. Orlock demande des matériaux d'artisanat (pierre raffinée, lingots d'or et verre) pour le blason Ambrosia, tandis que la quête du blason Dracula est décrite comme la conclusion émotionnelle de l'histoire principale, déclenchée par une lettre quelques jours après avoir débloqué la transformation en chauve-souris.",
    ],
    related: [{ label: 'Mairie', href: '/locations/town-hall' }, { label: 'Familles', href: '/families' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Dragan', href: '/characters/dragan' }, { label: 'Yabbis', href: '/characters/yabbis' }, { label: 'Orlock', href: '/characters/orlock' }],
    faq: [
      { q: 'Où est le Crest Garden dans Moonlight Peaks ?', a: 'Confirmé par le wiki officiel : il se trouve à côté de la mairie.' },
      { q: 'Que fait le Crest Garden dans Moonlight Peaks ?', a: "Confirmé : il affiche les blasons des sept familles de la ville, se débloquant un par un à mesure que vous avancez dans l'histoire principale de chaque famille." },
      { q: "Pourquoi un blason familial manque-t-il au Crest Garden ?", a: "Rapporté par un walkthrough : au moins un blason (celui de Logan) est écrit comme un petit détour de quête de récupération plutôt que de se débloquer automatiquement — dans ce cas, Yabbis l'avait mangé et voulait un lingot de cuivre en échange." },
      { q: 'Quels blasons se débloquent en dernier au Crest Garden ?', a: 'Rapporté par un walkthrough : les deux blasons des familles de vampires, Ambrosia et Dracula, se remplissent en dernier, la quête du blason Dracula étant décrite comme la conclusion émotionnelle de l\'histoire.' },
    ],
  },
  'moonlit-slopes': {
    title: 'Moonlit Slopes', dek: "La demeure de la Moon Goddess, confirmée verrouillée à nouveau après votre première invitation jusqu'au déblocage de la forme chauve-souris.",
    body: [
      "Confirmé : Moonlit Slopes est la demeure de la Moon Goddess, accessible après avoir terminé l'arc narratif \"A Missing Moon\", où les voyants de la famille Khazan tombent tous en transe en même temps et la lune disparaît du ciel. Une courte quête de suivi, \"The Moon in the Sky\", vous fait inviter formellement pour une visite.",
      "Confirmé : après cette première visite, Moonlit Slopes se reverrouille et reste inaccessible jusqu'à ce que vous débloquiez la forme chauve-souris via la quête \"Master of the Night\" — donc si vous ne pouvez pas y retourner directement après avoir rencontré la Moon Goddess, c'est normal, pas un bug.",
    ],
    related: [{ label: 'Métamorphose', href: '/shapeshifting' }, { label: 'Moon Goddess', href: '/characters/moon-goddess' }, { label: 'Quêtes', href: '/quests' }],
    faq: [
      { q: 'Où rencontre-t-on la Moon Goddess dans Moonlight Peaks ?', a: 'Confirmé : à Moonlit Slopes, après avoir terminé "A Missing Moon" et la courte quête de suivi "The Moon in the Sky", où elle vous invite formellement.' },
      { q: 'Pourquoi ne puis-je pas retourner à Moonlit Slopes après ma première visite ?', a: 'Confirmé : la zone se reverrouille après votre première visite et ne s\'ouvre à nouveau que lorsque vous débloquez la forme chauve-souris via la quête "Master of the Night" — c\'est normal, pas un bug.' },
    ],
  },
  'midnight-market': {
    title: 'Midnight Market', dek: "Un marché de week-end uniquement en ville, vendant des chapeaux pour animaux, des ingrédients de potions et d'autres articles indisponibles en semaine.",
    body: [
      "Confirmé par des rapports communautaires : le Midnight Market est un événement de week-end en ville, se déroulant le samedi et le dimanche, séparé des boutiques régulières de semaine du jeu.",
      "Rapporté : Snek vend de minuscules chapeaux pour vos animaux de ferme au Midnight Market, et Sabrina y vend aussi l'Orbe d'Alchimiste et d'autres articles liés aux potions — des articles non confirmés comme disponibles pendant les heures d'ouverture régulières de la semaine chez l'un ou l'autre personnage.",
    ],
    related: [{ label: 'Snek', href: '/characters/snek' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: 'Animaux de ferme', href: '/farm/animals' }, { label: 'Potions', href: '/items/potions' }],
    faq: [
      { q: 'Quand le Midnight Market est-il ouvert dans Moonlight Peaks ?', a: 'Rapporté par la communauté : seulement le samedi et le dimanche, séparé des heures d\'ouverture régulières de semaine du jeu.' },
      { q: "Que peut-on acheter au Midnight Market dans Moonlight Peaks ?", a: "Rapporté : de minuscules chapeaux pour animaux de ferme de Snek, ainsi que l'Orbe d'Alchimiste et d'autres articles liés aux potions de Sabrina — des articles non confirmés comme vendus en semaine." },
    ],
  },
  'bloom-boutique': {
    title: 'Bloom Boutique', dek: "Une boutique nommée confirmée exister en ville selon la navigation du wiki officiel, avec des détails encore non confirmés.",
    body: [
      "Confirmé exister par la propre navigation de pages du wiki officiel, listée aux côtés des autres boutiques nommées du jeu. Au-delà du nom, nous n'avons pas encore de détails vérifiés indépendamment sur ce que vend Bloom Boutique, qui la tient, ou ses horaires — nous ne devinons pas un thème juste parce que le nom suggère des fleurs.",
      "Vu le nom et les systèmes d'arrangement floral et de cadeaux déjà présents dans le jeu, un focus sur les fleurs ou la déco serait une supposition raisonnable, mais nous marquons ceci comme attendu plutôt que confirmé jusqu'à ce qu'une source le vérifie contre le vrai jeu.",
    ],
    related: [{ label: 'Boutiques', href: '/locations/shops' }, { label: 'Activités : Arrangement floral', href: '/activities/flower-arranging' }],
    faq: [
      { q: "Qu'est-ce que Bloom Boutique dans Moonlight Peaks ?", a: "Confirmé exister comme boutique nommée selon la propre navigation du wiki officiel. Ce qu'elle vend et qui la tient n'est pas encore confirmé indépendamment ici — nous ne devinons pas le contenu de la boutique juste à partir du nom." },
    ],
  },
};
