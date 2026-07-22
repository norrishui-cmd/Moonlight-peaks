// src/i18n/items-fr.ts
// French translations for all current item categories — banner title/dek (shown on /fr/items) and
// full detail-page content (shown on /fr/items/{slug}). Item/example names inside `examples` are
// kept in English (proper nouns / no verified official French localization exists for this game),
// matching the same principle used across the rest of the /fr/ section.
export type ItemTranslationFr = {
  name: string;
  dek: string;
  summary: string;
  examples: string[];
};

export const itemsFr: Record<string, ItemTranslationFr> = {
  foraging: {
    name: 'Cueillette',
    dek: "Confirmé via le wiki officiel : des produits à cueillir dans toute la ville (Moonlit Pines, Howling Marshes, Cave of Echoes, Crystal Cave) ainsi que des coquillages sur les plages.",
    summary: "Confirmé via le wiki officiel de Moonlight Peaks : la cueillette comprend à la fois des produits (Eggplant, Wild Potato, Sugarbones, Common Mushroom, Glowglammer) trouvés dans des zones nommées précises, et des coquillages (White Conch, Pink Conch en petit/grand, Blue Clam, Maxima Clam) ramassés sur les plages. Les versions de qualité étoilée se vendent plus cher — par exemple une Eggplant normale se vend 90, une Eggplant 1 étoile 110. Tous les objets n'ont pas encore un prix de qualité étoilée confirmé ; ceux-ci restent marqués comme non confirmés plutôt que devinés.",
    examples: ['Eggplant (Moonlit Pines)', 'Wild Potato (Moonlit Pines)', 'Sugarbones (Howling Marshes)', 'Common Mushroom (Cave of Echoes / ferme en été)', 'Glowglammer (Crystal Cave)', 'White Conch, Pink Conch, Blue Clam, Maxima Clam (plages)'],
  },
  tools: {
    name: 'Outils',
    dek: 'Outils de ferme et du quotidien pour planter, arroser, cueillir, miner et entretenir votre ferme.',
    summary: "Ensemble de départ confirmé, accessible via la roue des outils (sur Switch : maintenir la gâchette droite) : pelle (il n'y a pas de houe séparée — la pelle remplit ce rôle), arrosoir, hache, pioche, faux et une baguette cassée. La canne à pêche et le filet (filet à insectes) se débloquent séparément via des quêtes de personnage plutôt que d'être achetés, et les améliorations d'outils passent par un seul forgeron, Ridge, dans sa boutique (généralement appelée \"Howling Hammer\").",
    examples: ["Pelle (bêche aussi — pas de houe séparée)", "Arrosoir (amélioration à 3 paliers : 1 000 / 2 000 / 3 500 pièces d'or, chaque palier réduit l'eau utilisée par case)", "Hache (les améliorations réduisent les coups pour abattre un arbre, débloquent du bois plus résistant)", "Pioche (les améliorations réduisent les coups pour miner la roche, débloquent des roches/minerais plus gros comme le cuivre, le fer, l'or — confirmée comme priorité d'amélioration la plus élevée)", "Faux (les améliorations réduisent le coût en énergie pour faucher l'herbe)", "Canne à pêche (une seule amélioration premium : 3 500 pièces d'or + 3 lingots d'or, améliore l'efficacité et la taille des prises ; débloquée via un pari avec Noel, pas achetée)", "Le filet / filet à insectes (attrape les insectes et les Soul Blobs ; débloqué via Death après la quête \"A Bridge Too Far\")", "Le balai (un outil de vitesse de déplacement)", "Baguette (commence cassée ; réparée via une chaîne de quêtes avec Luna et Sabrina/Noel, pas dans la boutique d'amélioration normale)"],
  },
  fertilizer: {
    name: 'Engrais',
    dek: "Source confirmée : votre bétail produit de l'engrais comme sous-produit, avec le lait et la laine, et il améliore la qualité des récoltes.",
    summary: "Confirmé par des tests communautaires : l'engrais provient de votre bétail comme sous-produit aux côtés du lait et de la laine, et son utilisation améliore mesurablement la qualité des récoltes — cela vaut la peine de garder les animaux nourris et heureux, même avant de compter le revenu du lait/laine. La nourriture et la nourriture premium (stockées dans la mangeoire) sont le moyen confirmé de nourrir les animaux pendant la nuit afin que leurs produits soient prêts au réveil.",
    examples: ["Engrais produit par les animaux", "Nourriture / nourriture premium (aliment pour animaux)", "Amplificateurs de qualité de récolte"],
  },
  clothing: {
    name: 'Vêtements',
    dek: "Confirmé : ensembles de vêtements, hauts, bas/jupes, chaussures et accessoires, modifiables à tout moment via un miroir dans la maison — séparé de l'élixir d'alter ego, qui n'affecte pas les vêtements.",
    summary: "Confirmé au lancement : les vêtements sont divisés en ensembles de tenues, hauts, bas/jupes et chaussures, plus une catégorie d'accessoires séparée (bras, visage). Tout ce que vous portez à la création du personnage est débloqué en permanence dans votre garde-robe, donc vous n'avez jamais besoin de racheter votre look de départ. De nouveaux vêtements s'achètent chez Aras à Third Eye Threads (la couturière de la famille Khazan). Les changements de vêtements fonctionnent à tout moment via un miroir dans la maison — un mécanisme séparé et gratuit, distinct de l'élixir d'alter ego (une potion à usage unique de 1 300 pièces d'or chez Sabrina à Webb of Wonders, qui change la coiffure, la couleur des cheveux, le teint, la couleur des yeux, les sourcils et le maquillage, mais n'affecte explicitement pas les vêtements ou accessoires).",
    examples: ['Ensembles de tenues (ex. robes, salopettes)', 'Hauts', 'Bas/jupes', 'Chaussures', 'Accessoires — bras', 'Accessoires — visage', 'Tenue de départ de la création du personnage (débloquée en permanence dans la garde-robe)'],
  },
  fish: {
    name: 'Poissons',
    dek: "Une collection de pêche confirmée d'environ 22 espèces sur plusieurs zones, des niveaux de qualité, et un chemin mémorable vers la première canne à pêche.",
    summary: "Confirmé par deux sources indépendantes : vous rencontrez Noel dans vos premiers jours de jeu près de la rivière, et il vous défie d'attraper 3 espèces de poissons différentes avant lui — gagnez (c'est sans limite de temps, donc facile) et il vous donne votre première canne à pêche plus une récompense en or. La collection compte environ 22 espèces, chacune avec sa propre valeur de vente et valeur énergétique de base, toutes deux augmentant en qualité 1 et 2 étoiles. Les poissons disponibles dépendent du lieu, de la saison, de la météo et de l'heure — un poisson introuvable une nuit attend peut-être simplement les bonnes conditions.",
    examples: ['Poissons de mer', 'Poissons de rivière', 'Poissons rares/à qualité graduée (Normal / 1 étoile / 2 étoiles)', 'Ingrédients de cuisine'],
  },
  cooking: {
    name: 'Cuisine',
    dek: "Une station de cuisine dès le départ, plus de 40 recettes confirmées dans les catégories Nourriture, Soupe & ragoût, et Sushi, directement du wiki officiel.",
    summary: "Confirmé via le wiki officiel de Moonlight Peaks : plus de 40 recettes sont documentées en trois catégories — Nourriture (burgers, burritos, pain, pizza, fromage), Soupe & ragoût, et Sushi. Chaque recette liste sa méthode de cuisson (la plupart passent par la station de cuisine, certaines nécessitent en plus la presse à fromage, le mortier enchanté, le séchoir à herbes ou un moulin), ses ingrédients, et son prix de vente selon les niveaux de qualité normal/1 étoile/2 étoiles, quand confirmé. Toutes les recettes n'ont pas encore leur méthode, leurs ingrédients ou leur prix renseignés dans le wiki officiel lui-même — ces champs restent marqués non confirmés plutôt que devinés. Voir la base de données complète des recettes ci-dessous.",
    examples: ['Pain, burgers, burritos, pizza et plats au fromage', 'Plus de 19 recettes de soupe et ragoût', 'Plus de 11 recettes de sushi/maki', 'Recettes nécessitant la presse à fromage, le mortier enchanté, le séchoir à herbes ou un moulin'],
  },
  crafting: {
    name: 'Artisanat',
    dek: "Matériaux, recettes, objets d'établi et améliorations de ferme — dont le bois sombre confirmé, utilisé dans plusieurs recettes de décoration.",
    summary: "L'artisanat est une catégorie wiki centrale, les joueurs recherchant recettes, ingrédients et déblocages. Confirmé : le Bois Sombre (Dark Wood) est un vrai matériau d'artisanat, obtenu en abattant des troncs d'arbres surdimensionnés sur le terrain de la ferme avec une Hache de Cuivre (un palier de hache amélioré, pas la hache de départ). Il est utilisé dans plusieurs recettes de décoration, dont un fauteuil en fourrure (avec des planches de bois dur et du tissu) et une bibliothèque-cercueil (avec des planches). Au-delà du bois sombre, les stations d'artisanat exactes, d'autres matériaux et les listes complètes de recettes restent à confirmer plutôt que devinés.",
    examples: ['Bois Sombre (des troncs du terrain de ferme, Hache de Cuivre)', "Matériaux d'artisanat", "Recettes d'établi", 'Objets utiles', "Composants d'amélioration"],
  },
  artifacts: {
    name: 'Artefacts',
    dek: "Curiosités à collectionner, probablement liées à l'exploration, aux ruines, aux mines, à un suivi de type musée, ou aux quêtes.",
    summary: "Les pages d'artefacts visent à aider les complétionnistes à suivre ce qu'ils ont trouvé, où chaque objet apparaît, et s'il est utilisé pour des dons, des quêtes, des cadeaux ou du lore. Le système exact n'est pas encore confirmé indépendamment ici.",
    examples: ['Artefacts à collectionner', "Trouvailles d'exploration", 'Curiosités rares', 'Objets de lore'],
  },
  livestock: {
    name: 'Bétail',
    dek: "Animaux de ferme confirmés, le processus d'achat de la grange et les niveaux de nourriture.",
    summary: "Confirmé au lancement : vous avez besoin d'une grange avant de pouvoir posséder des animaux — achetez-en une chez Ridge pour 4 000 pièces d'or plus des matériaux. Une fois construite, vous achetez du bétail chez Luna (uniquement les animaux actuellement en attente devant sa maison). L'alimentation passe par la nourriture (fabriquée à un raffineur) et un palier de nourriture premium supérieur ultérieur.",
    examples: ['Cheeken (premier animal courant ; aime les caresses et les chapeaux)', 'Piggoat', 'Draculamb', 'Cowcula'],
  },
  potions: {
    name: 'Potions',
    dek: 'Un système de chaudron confirmé : Fiona enseigne votre première recette, Sabrina en vend davantage, et le brassage ne nécessite que recette, ingrédients et temps.',
    summary: "Confirmé par Bonus Action : vous débloquez un chaudron tôt dans l'histoire, et Fiona vous enseigne votre première recette de potion. Ensuite, Sabrina propose d'autres recettes de potions à l'achat à Webb of Wonders. Le brassage lui-même est simple — choisissez une recette avec les ingrédients en main, interagissez avec le chaudron et attendez, un peu comme le jus ou le vin prennent du temps à finir, puis récoltez le résultat. L'élixir d'alter ego (change la coiffure, la couleur des cheveux, le teint, la couleur des yeux, les sourcils et le maquillage) est l'exemple confirmé le plus clair de ce qu'une potion peut faire.",
    examples: ["Élixir d'alter ego", 'Première recette de Fiona', 'Recettes achetées chez Sabrina (Webb of Wonders)', 'Potions utiles'],
  },
  mineables: {
    name: 'Minerais',
    dek: 'Minerais, gemmes et matières premières raffinables, récoltés sous terre sans combat, plus un sort de pioche magique.',
    summary: "Confirmé : le minage dans Moonlight Peaks ne comporte aucun combat — vous collectez minerai et cristaux dans des grottes et catacombes pour alimenter fourneaux, outils et améliorations. Le minerai de cuivre se trouve spécifiquement dans la Cave of Echoes, débloquée via \"A Bridge Too Far\". Les matières premières doivent être traitées à une station de raffinage (minerai en lingots, pierre en pierre raffinée), ce qui prend du temps — astuce : remplissez le raffineur avant la fin de la nuit pour que les matériaux soient prêts au réveil. Le minage donne aussi des plans pour meubles et appareils, et creuser sur les cercles brillants de la carte donne des récompenses aléatoires.",
    examples: ['Minerai de cuivre (Cave of Echoes)', 'Lingots (raffinés à partir de minerai)', 'Gemmes et cristaux', 'Plans de minage'],
  },
  decorations: {
    name: 'Décorations',
    dek: 'Meubles et déco, confirmés avec des ensembles à plusieurs pièces, plusieurs variantes de couleur, et un système de placement alimenté par la magie.',
    summary: "Confirmé par un test et un guide de première semaine : Ridge vend des meubles en ensembles thématiques (par ex. un ensemble cuisine ou chambre) avec plusieurs variantes de couleur, donc une pièce n'a pas besoin d'être meublée pièce par pièce. Les meubles sont aussi regroupés par style (par ex. cuisine rustique contre look plus moderne). Une capacité magique confirmée vous permet de faire léviter et déplacer directement meubles et même petits objets, plutôt que de les ramasser dans l'inventaire pour les replacer ailleurs — ce qui simplifie la décoration et le réaménagement de la ferme. Chaque créature ou poisson attrapé peut aussi être exposé comme déco. Certaines pièces de déco proviennent spécifiquement de plans de minage, et des recettes de déco (et de cuisine) se trouvent aussi en creusant sur des tourbillons brillants.",
    examples: ['Ensembles de meubles (cuisine, chambre, etc.)', 'Plusieurs variantes de couleur par pièce', 'Créatures/poissons exposés', 'Déco issue de plans'],
  },
};
