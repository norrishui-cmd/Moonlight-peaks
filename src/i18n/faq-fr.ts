// src/i18n/faq-fr.ts
// French translations for all FAQ entries — q/a text only. slug/cat/related fields are shared
// from the English faqs array in data/faq.ts. Only entries with a real, sourced answer are
// translated here; nothing is invented.
export type FaqTranslationFr = { q: string; a: string; more?: string[] };

export const faqFr: Record<string, FaqTranslationFr> = {
  // ── Plateformes, prix & démo ──
  'when-does-moonlight-peaks-release': {
    q: 'Quand sort Moonlight Peaks ?',
    a: 'Moonlight Peaks est sorti le 7 juillet 2026 et est maintenant disponible.',
    more: ["Il est sorti le même jour sur Steam (PC et Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2 et Android via Google Play."],
  },
  'how-much-does-moonlight-peaks-cost': {
    q: 'Combien coûte Moonlight Peaks ?',
    a: "Il coûte 34,99 $ sur Steam (PC/Mac), Switch et Android, et 39,99 $ sur Switch 2.",
    more: ["Il y a une réduction de lancement la première semaine, et une mise à niveau Switch vers Switch 2 a été mentionnée."],
  },
  'what-platforms-is-moonlight-peaks-on': {
    q: 'Sur quelles plateformes Moonlight Peaks est-il disponible ?',
    a: 'Moonlight Peaks est maintenant disponible sur Steam (Windows et Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2 et Android via Google Play.',
  },
  'is-moonlight-peaks-on-ps5-or-xbox': {
    q: 'Moonlight Peaks est-il disponible sur PS5 ou Xbox ?',
    a: "En bref : non. Aucune version PlayStation ou Xbox n'a été annoncée. Les plateformes confirmées sont Steam, Steam Deck, Switch, Switch 2 et Android.",
    more: ["Si une version PS5 ou Xbox est annoncée plus tard, nous mettrons à jour cette page."],
  },
  'is-there-a-moonlight-peaks-demo': {
    q: 'Y a-t-il une démo de Moonlight Peaks ?',
    a: "Oui — une démo gratuite est disponible sur Steam et dans l'eShop Nintendo (aussi jouable sur Switch 2).",
    more: ["Elle inclut la création de personnage et des activités cosy comme la pêche, l'arrangement floral et la broderie, plus des interactions précoces avec les habitants de la ville."],
  },
  'does-demo-progress-carry-over': {
    q: 'La progression de la démo est-elle transférée dans Moonlight Peaks ?',
    a: "Non — aucun transfert n'a été confirmé, le jeu complet recommence donc à zéro, peu importe votre avancée dans la démo. Considérez la démo comme un aperçu pour tester le ton, les contrôles et le déroulement précoce du jeu.",
  },

  // ── Général ──
  'what-is-moonlight-peaks-about': {
    q: 'De quoi parle Moonlight Peaks ?',
    a: "C'est un simulateur de vie de vampire cosy. Vous incarnez l'enfant du Comte Dracula, quittant la grande ville pour restaurer une ferme familiale abandonnée dans une ville surnaturelle pleine de loups-garous, de sorcières, de sirènes et plus encore.",
    more: ["Vous cultivez la ferme la nuit, apprenez la magie et brassez des potions, et vous liez d'amitié ou romancez les habitants des sept familles de la ville."],
  },
  'who-makes-moonlight-peaks': {
    q: 'Qui développe Moonlight Peaks ?',
    a: "Il est développé par Little Chicken Game Company, avec XSEED Games comme éditeur en Amérique et Marvelous Europe en Europe.",
  },
  'is-moonlight-peaks-multiplayer': {
    q: 'Moonlight Peaks est-il un jeu multijoueur ?',
    a: "Non — Moonlight Peaks est purement solo. Aucun multijoueur ou coopératif n'a été annoncé ; Steam le liste comme solo, et un développeur a été directement interrogé sur la coopération en ligne dans les discussions de la communauté Steam sans qu'aucune confirmation ne suive.",
    more: ["Si la coopération est annoncée plus tard, nous mettrons à jour cette page."],
  },
  'moonlight-peaks-reddit-discord-community': {
    q: 'Y a-t-il un Reddit ou Discord officiel pour Moonlight Peaks ?',
    a: "Nous n'avons pas encore trouvé de subreddit officiel dédié — nous ne devinons pas et ne présentons pas une communauté non officielle comme officielle. Les points de ralliement communautaires confirmés sont le serveur Discord officiel et les forums de discussion de la communauté Steam, tous deux liés par les développeurs.",
    more: ["Si un subreddit officiel est confirmé, nous l'ajouterons ici plutôt que de renvoyer vers un non vérifié."],
  },
  'how-to-change-portrait-style': {
    q: 'Comment change-t-on le style de portrait du personnage dans Moonlight Peaks ?',
    a: "Confirmé au lancement : ouvrez le menu principal (le bouton \"+\" sur Nintendo Switch) pour basculer entre deux préréglages pour le portrait de votre personnage — un style cartoon avec ombrage réaliste, ou un style plus mignon inspiré de l'anime.",
  },
  'moonlight-peaks-age-rating': {
    q: "Quelle est la classification d'âge de Moonlight Peaks ?",
    a: "Confirmé au lancement : PEGI 12 au Royaume-Uni/Europe et ESRB Teen (T) aux États-Unis, en raison de références à l'alcool (vous pouvez fabriquer et boire de la bière et du vin) et d'un langage romantique légèrement suggestif.",
  },
  'moonlight-peaks-crashing-freezing': {
    q: 'Pourquoi Moonlight Peaks plante-t-il ou se fige-t-il ?',
    a: "Plusieurs rapports confirmés de joueurs décrivent de brefs gels toutes les quelques secondes (même sur des PC haut de gamme) et des crashs en quittant la ferme ou au démarrage sur Steam Deck. Il n'y a pas encore de solution officielle, mais mettre à jour les pilotes GPU, régler le mode \"performances maximales\" et passer à Proton 9.0-4 sur Steam Deck ont aidé certains joueurs.",
  },
  'moonlight-peaks-controller-not-working': {
    q: 'Ma manette ne fonctionne pas dans Moonlight Peaks — que faire ?',
    a: "C'est un problème rapporté et non résolu — les manettes fonctionnent pendant la création du personnage, mais peuvent ensuite ne plus répondre, les options de réassignation étant grisées. Essayez de déconnecter et reconnecter votre manette, ou passez au clavier/souris jusqu'à ce qu'une solution officielle apparaisse.",
  },
  'moonlight-peaks-crops-wither-season-change': {
    q: 'Les récoltes meurent-elles lors dun changement de saison dans Moonlight Peaks ?',
    a: "Oui — confirmé par des testeurs : quand le printemps passe à l'été (et probablement pour d'autres changements de saison), les récoltes de printemps flétrissent, même les magiques. Planifiez vos récoltes autour des limites de saison.",
  },
  'moonlight-peaks-mana-stamina-balance': {
    q: 'La gestion du mana/endurance est-elle difficile dans Moonlight Peaks ?',
    a: "Plusieurs testeurs ont critiqué la gestion du mana, surtout en début de jeu — vous commencez avec une petite réserve de mana qui ne se remplit que d'une étoile par nuit de sommeil, et la nourriture/boissons qui la restaurent sont rares au début. Plusieurs critiques ont trouvé que cela, combiné à la barre d'endurance et à la limite du lever du soleil, pourrait bénéficier d'un meilleur équilibre.",
  },
  'moonlight-peaks-night-length-cycle': {
    q: 'Combien de temps dure une nuit dans Moonlight Peaks ?',
    a: "Confirmé : votre nuit va de 18h à 6h en jeu et dure environ 15 minutes réelles par défaut (similaire à une journée dans Stardew Valley). Collecter les 100 Soul Blobs pour Death vous récompense avec l'Horloge Antique, qui l'étend à 25 minutes.",
  },
  'moonlight-peaks-how-to-save': {
    q: 'Comment sauvegarder dans Moonlight Peaks ?',
    a: "Confirmé : vous ne pouvez sauvegarder qu'en dormant dans votre cercueil, ce qui vous avance à la nuit suivante à 18h. Il n'y a pas de sauvegarde manuelle en pleine nuit, planifiez donc vos activités pour être rentré avant le lever du soleil.",
  },
  'moonlight-peaks-starting-mana-energy': {
    q: 'Combien de mana et d\'énergie a-t-on au départ ?',
    a: "Confirmé : vous commencez avec seulement 3 points de mana, qui régénèrent environ une étoile par nuit de sommeil plutôt que de se remplir complètement. Votre énergie (endurance) et votre mana sont tous deux restaurés en mangeant de la nourriture cuisinée — garder un petit stock de nourriture importe donc plus que compter uniquement sur les cultures de rente.",
  },
  'moonlight-peaks-mini-map': {
    q: 'Moonlight Peaks a-t-il une mini-carte ?',
    a: "Non — confirmé qu'il n'y a pas de mini-carte. Votre position et les repères importants apparaissent plutôt sur une carte complète, qui montre aussi où se trouvent actuellement les habitants.",
  },
  'moonlight-peaks-well-price': {
    q: 'Combien coûte le puits dans Moonlight Peaks ?',
    a: "Rapporté : le puits coûte 1 500 pièces d'or et aide à l'arrosage — un achat précoce moins cher que la grange à 4 000 pièces d'or.",
  },
  'moonlight-peaks-best-universal-gifts': {
    q: 'Quels sont les meilleurs cadeaux universels dans Moonlight Peaks ?',
    a: "Des tests communautaires de cadeaux (via TheGamer et des rapports de joueurs) suggèrent que la Tulipe Violette est largement appréciée par de nombreux habitants, tandis que les Graines d'Oignon sont largement mal aimées — à éviter. Au-delà de ça, la plupart des habitants ont des préférences individuelles encore en cours de catalogage. Saga est le seul cas entièrement confirmé : elle adore le Vin Blanc et les fleurs individuelles, mais n'aime pas les bouquets.",
  },
  'moonlight-peaks-how-to-get-copper': {
    q: 'Comment obtenir du cuivre dans Moonlight Peaks ?',
    a: "Confirmé : le cuivre provient de la Cave of Echoes, en bas à gauche de la zone Misty Shores (à l'ouest du manoir d'Orlock). Elle est initialement bloquée par la querelle entre Orlock et Fiona — vous devez terminer \"Orlock's Wine Scheme\" et \"A Bridge Too Far\" pour lever la malédiction du pont et ouvrir la zone. À l'intérieur, minez les roches striées de cuivre avec votre pioche ; les gros amas peuvent donner 6 minerais au lieu d'1 pour un gisement normal. Fabriquez un lingot de cuivre au fourneau avec 4 minerais de cuivre + 1 charbon de bois.",
  },
  'moonlight-peaks-how-to-go-on-dates': {
    q: 'Comment aller à des rendez-vous dans Moonlight Peaks ?',
    a: "Confirmé : atteignez d'abord le niveau de cœur 4 avec un habitant, puis vous pouvez l'inviter à un rendez-vous. Les rendez-vous se déroulent comme des mini-jeux (par exemple assembler un bouquet dans les couleurs voulues), pas des cinématiques passives. Pour trouver les cinématiques d'événements de cœur, ouvrez votre carte et cherchez des points d'exclamation (entrer dans une zone) ou une aura scintillante sur un bâtiment (y entrer).",
  },
  'moonlight-peaks-tool-upgrade-materials': {
    q: 'De quoi a-t-on besoin pour améliorer les outils dans Moonlight Peaks ?',
    a: "Confirmé : les outils s'améliorent au Howling Hammer (la boutique de Ridge, ouverte lun-ven 18h à minuit). Parlez à Ridge, choisissez Boutique, puis \"Je veux acheter quelque chose\" et faites défiler deux fois vers la droite pour atteindre l'onglet d'amélioration. Les améliorations coûtent de l'or plus des lingots de cuivre, d'argent ou d'or selon le palier — vous avez donc d'abord besoin d'accès aux mines. La faux ne peut être améliorée que deux fois ; les autres outils atteignent un palier or. Rapporté par la communauté : priorisez d'abord la pioche jusqu'à l'or, car elle détermine combien de minerai la Cave of Echoes vous donne pour les matériaux de tous les autres outils.",
  },
  'moonlight-peaks-cant-interact-indoors': {
    q: 'Pourquoi ne puis-je pas cliquer sur des objets dans ma maison ?',
    a: "C'est un bug rapporté et non résolu — certains joueurs ne peuvent pas cliquer sur des objets à l'intérieur (comme le cercueil pour dormir ou les animaux de compagnie), alors que les interactions en extérieur fonctionnent bien. Pas encore de solution confirmée ; essayez de recharger la zone ou de dormir jusqu'à la nuit suivante, et signalez-le à support@xseedgames.com si le problème persiste.",
  },
  'moonlight-peaks-exe-deleted-antivirus': {
    q: 'Mon antivirus a supprimé Moonlight Peaks.exe — que faire ?',
    a: "Rapporté : certains antivirus signalent et suppriment à tort \"Moonlight Peaks.exe\", ce qui peut causer des erreurs de démarrage. Ajoutez le .exe à la liste d'exceptions de votre antivirus et vérifiez l'intégrité des fichiers du jeu (Steam → clic droit sur le jeu → Propriétés → Fichiers installés → Vérifier l'intégrité) pour le restaurer.",
  },

  // ── Monde & gameplay ──
  'is-there-combat-in-moonlight-peaks': {
    q: 'Y a-t-il du combat dans Moonlight Peaks ?',
    a: "Non. Les aperçus confirment qu'il n'y a de combat nulle part — même les mines et les catacombes restent paisibles, gardant une expérience cosy de bout en bout.",
  },
  'do-you-farm-at-night': {
    q: 'Cultive-t-on la nuit dans Moonlight Peaks ?',
    a: "Oui. En tant que vampire, vous cultivez et entretenez après la tombée de la nuit et retournez dans votre cercueil avant le lever du soleil — une torsion sur la boucle agricole habituelle en journée.",
  },
  'how-does-magic-work-in-moonlight-peaks': {
    q: 'Comment fonctionne la magie dans Moonlight Peaks ?',
    a: "La magie est basée sur une baguette : vous réparez une baguette cassée, dessinez des motifs de sorts pour les lancer, et gérez le mana (que vous rechargez en mangeant).",
    more: ["Il y a un petit mini-jeu d'arrosage, et vous débloquez des sorts économes en énergie qui réduisent le travail de la ferme. Vous brassez aussi des potions comme l'élixir d'alter ego, qui change votre apparence."],
  },
  'can-you-shapeshift-in-moonlight-peaks': {
    q: 'Peut-on se métamorphoser dans Moonlight Peaks ?',
    a: "Oui. Vous pouvez vous métamorphoser — par exemple en chauve-souris — pour traverser rapidement la ville et atteindre des zones cachées.",
  },
  'what-is-nokturna': {
    q: "Qu'est-ce que Nokturna dans Moonlight Peaks ?",
    a: "Nokturna est le jeu de cartes à collectionner de la ville. Vous collectez des cartes et défiez les habitants en duel.",
    more: ["Les règles complètes et la liste des cartes sont confirmées à la sortie — nous n'inventons pas de cartes."],
  },
  'what-pets-and-livestock-are-there': {
    q: 'Quels animaux de compagnie et bétail y a-t-il dans Moonlight Peaks ?',
    a: "Vous pouvez avoir un Hellkitten à trois yeux comme animal de compagnie et élever du bétail magique comme le Draculamb.",
  },

  // ── Romance & mariage ──
  'can-you-get-married-in-moonlight-peaks': {
    q: 'Peut-on se marier dans Moonlight Peaks ?',
    a: "Oui — confirmé au lancement. Faites votre demande au niveau de cœur 8, et le mariage a lieu dans la semaine, avec la visite des vampires et loups-garous de la ville. Votre partenaire emménage ensuite dans votre ferme et débloque un événement de cœur supplémentaire. Il n'y a pas d'enfants dans le jeu.",
  },
  'can-you-have-children-in-moonlight-peaks': {
    q: 'Peut-on avoir des enfants dans Moonlight Peaks ?',
    a: "Non. Vous pouvez fréquenter et épouser des habitants, mais élever des enfants n'est pas une fonctionnalité.",
  },
  'best-general-gifts-in-moonlight-peaks': {
    q: 'Quels sont les cadeaux généraux sûrs dans Moonlight Peaks ?',
    a: "Confirmé via plusieurs sources de la semaine de lancement : assortir la couleur d'un cadeau à la couleur préférée d'un habitant est généralement bien reçu, et un bouquet que vous arrangez vous-même dans la couleur préférée (via le mini-jeu d'arrangement floral) est une option sûre et toujours disponible qui fonctionne aussi comme déco si elle n'est pas acceptée. Les cadeaux faits main — dont les bouquets et la broderie — sont rapportés comme bien reçus au-delà des préférences individuelles.",
  },
  'how-many-romance-options-are-there': {
    q: 'Combien y a-t-il d\'options de romance dans Moonlight Peaks ?',
    a: "La page Steam décrit environ deux douzaines (environ 24) d'habitants romançables. Des rapports antérieurs en citaient 15, la distribution a donc grandi pendant le développement.",
    more: ["Les rencontres amoureuses ne sont pas verrouillées par genre, et la liste complète nommée a été confirmée plus près de la sortie."],
  },
  'is-dating-gender-locked-in-moonlight-peaks': {
    q: 'Les rencontres amoureuses sont-elles verrouillées par genre dans Moonlight Peaks ?',
    a: "Non. Les modèles de personnage sont volontairement non genrés, vous pouvez donc romancer n'importe quel habitant disponible peu importe comment vous créez votre propre vampire.",
  },
  'can-you-romance-a-werewolf': {
    q: 'Peut-on fréquenter un loup-garou dans Moonlight Peaks ?',
    a: "Oui. Saga, une louve-garou, est une option de romance confirmée. Puisque vampires et loups-garous se disputent notoirement, fréquenter quelqu'un à travers ce fossé fait partie du charme.",
  },
  'can-you-date-multiple-characters': {
    q: 'Peut-on fréquenter plusieurs personnages à la fois dans Moonlight Peaks ?',
    a: "Ceci n'était pas confirmé avant la sortie — les règles d'exclusivité et de polyamour n'avaient pas été révélées.",
    more: ["Nous mettrons à jour cette réponse dès que le jeu en direct montrera comment fonctionne le fait de fréquenter plusieurs habitants."],
  },

  // ── Personnages ──
  'who-is-saga': {
    q: 'Qui est Saga dans Moonlight Peaks ?',
    a: "Saga est une habitante loup-garou présentée par les développeurs et une option de romance confirmée. Son énergie changerait avec la pleine lune.",
  },
  'who-is-luna': {
    q: 'Qui est Luna dans Moonlight Peaks ?',
    a: "Luna est rapportée comme une sorcière orientée agriculture — probablement une source précoce de sorts et de connaissances de jardinage. Les détails ont été confirmés à la sortie.",
  },
  'who-is-orlock': {
    q: 'Qui est Orlock dans Moonlight Peaks ?',
    a: "Orlock est rapporté comme tête d'une famille de vampires, dépeint comme une figure comique dans les aperçus pratiques.",
  },
  'who-is-count-dracula': {
    q: 'Qui est le Comte Dracula dans Moonlight Peaks ?',
    a: "Le Comte Dracula est votre père et une figure narrative centrale. Ce n'est pas une option de romance ; l'histoire vous fait sortir de son ombre pour prouver qu'une vie non-morte plus douce est possible.",
  },

  // ── Angle ajouté : questions à haute intention "est-ce que/comment" ──
  'is-moonlight-peaks-worth-it': {
    q: 'Moonlight Peaks vaut-il le coup ?',
    a: "Il s'affirme comme l'un des cozy sims les plus distinctifs de 2026 — un simulateur de vie de vampire en 3D avec agriculture nocturne, magie par baguette et un grand choix de romances — mais la réponse honnête est d'essayer d'abord la démo gratuite.",
    more: ["La démo vous permet de tester gratuitement l'éditeur de personnage et les activités cosy — le meilleur moyen de juger si cela vous plaît avant d'acheter."],
  },
  'is-moonlight-peaks-free': {
    q: 'Moonlight Peaks est-il gratuit ?',
    a: "Non — le jeu complet coûte 34,99 $ (39,99 $ sur Switch 2). Il y a cependant une démo gratuite sur Steam et dans l'eShop Nintendo.",
  },
  'is-moonlight-peaks-open-world': {
    q: 'Moonlight Peaks est-il en monde ouvert ?',
    a: "Il n'est pas commercialisé comme un jeu en monde ouvert. C'est un simulateur de vie cosy où vous parcourez la ville, votre ferme et les zones environnantes comme la forêt, le lac et les mines.",
    more: ["La disposition exacte de la carte et à quel point on peut explorer librement ont été confirmées à la sortie."],
  },
  'is-moonlight-peaks-cozy': {
    q: 'Moonlight Peaks est-il un jeu cosy ?',
    a: "Oui. C'est un simulateur de vie gothique cosy sans aucun combat, axé sur l'agriculture, l'artisanat, la magie et les relations.",
  },
  'how-long-is-moonlight-peaks': {
    q: 'Combien de temps dure Moonlight Peaks ?',
    a: "Comme la plupart des simulateurs de vie, il est ouvert plutôt que d'avoir une durée d'histoire fixe, donc le temps de jeu varie énormément selon le joueur.",
  },
  'is-moonlight-peaks-on-game-pass': {
    q: 'Moonlight Peaks est-il sur Game Pass ?',
    a: "Aucune sortie sur Game Pass n'a été annoncée, et puisqu'aucune version Xbox n'est confirmée, Game Pass n'est pas attendu. Les plateformes confirmées sont Steam, Steam Deck, Switch, Switch 2 et Android.",
  },
  'can-you-play-moonlight-peaks-offline': {
    q: 'Peut-on jouer à Moonlight Peaks hors ligne ?',
    a: "Moonlight Peaks est un jeu solo sans exigence en ligne annoncée, il est donc attendu comme jouable hors ligne. Les détails exacts ont été confirmés à la sortie.",
  },
  'is-moonlight-peaks-coming-to-mobile': {
    q: 'Moonlight Peaks arrive-t-il sur mobile ?',
    a: "Oui — sur Android, via Google Play, le jour de la sortie. Aucune version iOS ou iPhone n'a été annoncée.",
  },
  'does-moonlight-peaks-have-co-op': {
    q: 'Moonlight Peaks a-t-il une coopération locale ou en ligne ?',
    a: "Aucune coopération n'a été annoncée. Un joueur a directement demandé aux développeurs sur les discussions de la communauté Steam à propos de la coopération en ligne, sans qu'aucune confirmation ne suive. Tout indique actuellement que Moonlight Peaks est solo.",
  },
  'what-age-rating-is-moonlight-peaks': {
    q: "Quelle classification d'âge a Moonlight Peaks ?",
    a: "Confirmé : PEGI 12 en Europe et ESRB Teen (T) aux États-Unis — malgré le ton cosy et sans combat, la classification est déterminée par des références à l'alcool (vous pouvez fabriquer et boire de la bière et du vin) et un langage romantique légèrement suggestif, pas par la violence.",
  },
  'how-do-you-make-money-in-moonlight-peaks': {
    q: "Comment gagne-t-on de l'argent dans Moonlight Peaks ?",
    a: "La boucle principale confirmée est de cultiver et vendre vos récoltes — la page Steam présente le déblocage de compétences et d'améliorations autour d'\"une récolte plus riche\". Un résumé secondaire de base de données de jeu ajoute que les cultures plus étranges et \"non naturelles\" rapportent plus, mais ce détail n'est pas confirmé par les développeurs. Les prix exacts, acheteurs et mécanique de vente ont été confirmés à la sortie.",
  },
  'can-you-sell-crops-in-moonlight-peaks': {
    q: 'Peut-on vendre des récoltes dans Moonlight Peaks ?',
    a: "Vendre vos récoltes contre des pièces est implicite comme boucle centrale d'un tel farming sim, et la propre page boutique de Moonlight Peaks relie les revenus de votre ferme au déblocage d'améliorations et de compétences. Nous n'avons pas vu de détails confirmés par les développeurs sur qui achète exactement vos récoltes ou comment la vente fonctionne mécaniquement — cela viendra à la sortie.",
  },
  'is-there-a-shop-in-moonlight-peaks': {
    q: 'Y a-t-il une boutique dans Moonlight Peaks ?',
    a: "Oui, confirmé — plusieurs boutiques nommées existent en ville, dont Webb of Wonders (Sabrina, potions et vêtements), Howling Hammer (Ridge, améliorations d'outils), Third Eye Threads (Aras, vêtements) et Coffee & Coffins (un café tenu par Mina et Evan). Vendre vos propres biens se fait séparément via Chester plutôt qu'avec un commerçant.",
  },
  'how-to-get-dark-wood-in-moonlight-peaks': {
    q: 'Comment obtenir du Bois Sombre dans Moonlight Peaks ?',
    a: "Confirmé : abattez les troncs d'arbres surdimensionnés sur le terrain de la ferme avec une Hache de Cuivre (un palier de hache amélioré — la hache de départ rouillée ne suffit pas). Le Bois Sombre est utilisé dans plusieurs recettes de décoration, dont un fauteuil en fourrure (avec des planches de bois dur et du tissu) et une bibliothèque-cercueil (avec des planches).",
  },
  'how-does-the-museum-work-in-moonlight-peaks': {
    q: 'Comment fonctionne le musée dans Moonlight Peaks ?',
    a: "Confirmé : le musée n'ouvre qu'au cours de la première année, une fois qu'un fil narratif impliquant l'emménagement de Persephone, Jada et Winston en ville est terminé — pas dès le début. Vous donnez en allant à une salle de collection thématique et en interagissant avec un panneau point d'exclamation, plutôt que de parler à un conservateur. Les objets qu'il vous manque encore pour une collection sont marqués d'une icône de musée dans votre inventaire. Les exigences de qualité varient selon la collection ; la collection agricole demande spécifiquement des récoltes de meilleure qualité.",
  },
  'does-moonlight-peaks-have-accessibility-options': {
    q: "Moonlight Peaks a-t-il des options d'accessibilité ?",
    a: "Quelques-unes, mais pas de façon extensive : les options confirmées incluent l'activation/désactivation de VSync, la vibration de la manette, les étiquettes d'interaction à l'écran et l'animation du texte, plus des touches réassignables, une limite de framerate et une mise à l'échelle du rendu. Non confirmé : aucun mode daltonien ou options de texte adaptées à la dyslexie n'ont été rapportés jusqu'à présent.",
  },
  'can-you-romance-death-in-moonlight-peaks': {
    q: 'Peut-on avoir une romance avec Death dans Moonlight Peaks ?',
    a: "Non confirmé. Death est un vrai nom dans des fichiers de jeu ayant fuité avant la sortie, avec sa propre demeure (\"la cabane de Death\"), et certaines rumeurs pré-sortie l'ont cité comme option de romance possible — mais c'est de la spéculation, pas une confirmation des développeurs. Nous mettrons à jour ceci dès que le jeu complet clarifiera la situation.",
  },
  'is-count-dracula-romanceable': {
    q: 'Le Comte Dracula est-il une option de romance dans Moonlight Peaks ?',
    a: "Non. Le Comte Dracula est le père de votre personnage et une figure narrative centrale, pas une option de romance — le jeu rend clair que votre relation avec lui est familiale, pas romantique.",
  },
  'is-logan-romanceable-in-moonlight-peaks': {
    q: 'Logan est-il une option de romance dans Moonlight Peaks ?',
    a: "Rapporté, mais pas encore confirmé par les développeurs avec une certitude totale — Logan apparaît comme habitant loup-garou dans la couverture presse, et des indices indépendants (un journal de développement et des fichiers ayant fuité avant la sortie) suggèrent tous deux que son nom et sa demeure sont réels. Traitez-le comme une option de romance probable, mais non garantie, jusqu'à la sortie.",
  },
  'can-you-divorce-in-moonlight-peaks': {
    q: 'Peut-on divorcer ou se séparer dans Moonlight Peaks ?',
    a: "Non confirmé. Les développeurs ont confirmé que vous pouvez épouser un partenaire de romance, mais si vous pouvez ensuite divorcer, vous séparer, ou épouser quelqu'un d'autre n'a été abordé nulle part que nous ayons trouvé.",
  },
  'is-there-a-wedding-ceremony-in-moonlight-peaks': {
    q: 'Y a-t-il une cérémonie de mariage dans Moonlight Peaks ?',
    a: "Non confirmé. Le mariage lui-même est confirmé, mais s'il s'accompagne d'une vraie cérémonie, d'invités, ou d'un événement dédié — plutôt qu'une simple confirmation de menu — n'a pas encore été montré ou décrit nulle part.",
  },
  'do-families-disapprove-of-cross-family-romance': {
    q: 'Les familles désapprouvent-elles les romances inter-familiales dans Moonlight Peaks ?',
    a: "Non confirmé comme mécanique de jeu, mais cela correspond au ton : vampires et loups-garous se disputent constamment selon les rapports, et la couverture presse décrit une vieille querelle entre les familles surnaturelles de la ville. Si cela se traduit en une vraie mécanique de désapprobation en jeu pour les romances inter-familiales est inconnu.",
  },
  'is-moonlight-peaks-scary': {
    q: "Moonlight Peaks est-il effrayant ou un jeu d'horreur ?",
    a: "Non. Malgré l'esthétique gothique (vampires, cimetières, un personnage littéralement nommé Death), tout ce qui a été montré jusqu'à présent — la démo, les aperçus presse, les bandes-annonces officielles — pointe vers un ton cosy et léger. La couverture l'a décrit dans son drame social comme \"mignon-chibi mais sérieusement toxique\", pas effrayant. Il n'y a pas de combat ou de contenu d'horreur confirmé.",
  },
  'is-moonlight-peaks-based-on-a-book-or-show': {
    q: 'Moonlight Peaks est-il basé sur un livre, un film ou une série ?',
    a: "Non. Pour autant que nous ayons trouvé, Moonlight Peaks est un titre original de Little Chicken Game Company — il n'adapte aucun livre, film ou série existant.",
  },
  'does-moonlight-peaks-have-a-tutorial': {
    q: 'Moonlight Peaks a-t-il un tutoriel pour les nouveaux joueurs ?',
    a: "Pas confirmé en détail, mais la démo gratuite guide déjà les nouveaux joueurs à travers la création de personnage et certaines activités centrales (pêche, arrangement floral, broderie) avec des interactions précoces en ville — ce qui sert d'introduction en douceur même sans mode tutoriel formellement annoncé.",
  },
  'does-moonlight-peaks-have-a-story': {
    q: 'Moonlight Peaks a-t-il une histoire, ou est-il ouvert ?',
    a: "Il a un léger point de départ narratif — vous êtes un vampire qui emménage dans la ferme familiale abandonnée pour prouver à votre père sceptique qu'une vie non-morte plus douce est possible — posé sur une boucle ouverte de simulateur de vie cosy d'agriculture, magie et relations. Combien de contenu narratif scénarisé existe au-delà de cette prémisse n'est pas encore décrit en détail.",
  },
  'does-moonlight-peaks-support-a-controller': {
    q: 'Peut-on jouer à Moonlight Peaks avec une manette ?',
    a: "Oui, sur Switch, Switch 2 et Steam Deck, où une manette est l'entrée par défaut. Sur PC, un aperçu presse pratique a explicitement recommandé d'utiliser une manette plutôt que souris et clavier, suggérant que le jeu lui-même est conçu avec le jeu à la manette en tête, même sur Steam.",
  },
  'is-moonlight-peaks-difficult': {
    q: 'Moonlight Peaks est-il difficile, ou peut-on échouer ?',
    a: "Rien ne suggère une difficulté impitoyable — il n'y a pas de combat confirmé, et le ton est constamment cosy plutôt qu'orienté défi. S'il y a des conditions d'échec (comme manquer d'argent) ou des options de difficulté n'a pas encore été décrit en détail.",
  },
  'does-moonlight-peaks-have-voice-acting': {
    q: 'Moonlight Peaks a-t-il du doublage ?',
    a: "Non confirmé. Rien dans la démo, les bandes-annonces, ou la couverture presse que nous avons vue ne mentionne de dialogue doublé — traitez ceci comme non confirmé dans un sens ou l'autre jusqu'à la sortie complète.",
  },
  'is-moonlight-peaks-turn-based-or-real-time': {
    q: 'Moonlight Peaks est-il au tour par tour ou en temps réel ?',
    a: "En temps réel, comme la plupart des simulateurs de vie cosy de ce genre — l'horloge jour/nuit continue de tourner pendant que vous cultivez, explorez et parlez aux habitants, plutôt que d'attendre que vous terminiez un tour.",
  },
  'does-moonlight-peaks-have-achievements': {
    q: 'Moonlight Peaks a-t-il des succès ou trophées ?',
    a: "Pas confirmé pour aucune plateforme jusqu'à présent. Si des succès Steam ou des listes de trophées spécifiques à la plateforme existent, nous les documenterons dès que le jeu complet sera sorti.",
  },
  'is-moonlight-peaks-family-friendly': {
    q: 'Moonlight Peaks convient-il aux enfants ?',
    a: "Vu le ton cosy et l'absence de combat, probablement oui pour la plupart des âges, mais nous ne pouvons pas donner de réponse ferme — le jeu n'avait pas encore été classifié par l'ESRB au moment de la rédaction (certains médias ont rapporté une classification Teen sur consoles/mobile que nous n'avons pas pu vérifier indépendamment). Vérifiez la classification officielle une fois confirmée, surtout vu les systèmes de romance et de mariage orientés adultes du jeu.",
  },
  'how-to-get-married-in-moonlight-peaks': {
    q: 'Comment se marier dans Moonlight Peaks ?',
    a: "Confirmé au lancement : les rendez-vous se débloquent au niveau de cœur 4, et vous pouvez faire votre demande au niveau de cœur 8. Les rendez-vous se déroulent comme des mini-jeux (par exemple assembler un bouquet dans les couleurs voulues) — il est possible d'en rater un, par exemple en arrivant en retard, ce qui coûte des points d'amitié plutôt qu'une rupture définitive. Le mariage a lieu dans la semaine suivant la demande et est visité par les vampires et loups-garous de la ville. Le mariage lui-même est monogame, et votre partenaire emménage ensuite dans votre ferme.",
  },
  'can-you-date-multiple-people-moonlight-peaks': {
    q: 'Peut-on fréquenter plusieurs personnes à la fois dans Moonlight Peaks ?',
    a: "Oui, confirmé au lancement — vous pouvez courtiser plusieurs habitants simultanément. Ils le remarquent et le commentent, mais c'est décrit comme une légère jalousie plutôt qu'un système de rivalité dur. Le mariage lui-même est strictement monogame une fois que vous faites une demande.",
  },
  'moonlight-peaks-step-parent-children': {
    q: "Peut-on avoir des enfants ou devenir beau-parent dans Moonlight Peaks ?",
    a: "Vous ne pouvez pas avoir d'enfants biologiques — confirmé par plusieurs sources, sans plans annoncés d'ajouter cette mécanique. Détail rapporté : épouser un personnage plus âgé qui a déjà des enfants, comme Orlock (père de Mina et Evan), ferait de vous leur beau-parent à la place.",
  },
  'how-to-turn-into-a-bat-hellkitten': {
    q: 'Comment se transformer en chauve-souris ou Hellkitten dans Moonlight Peaks ?',
    a: "Confirmé au lancement : une fois la métamorphose débloquée par la progression de l'histoire, maintenez la gâchette gauche pour ouvrir une roue de sorts, et choisissez votre forme — chauve-souris pour un voyage rapide ou votre Hellkitten à trois yeux pour un déplacement plus rapide et un labourage gratuit.",
  },
  'is-there-fast-travel-in-moonlight-peaks': {
    q: 'Y a-t-il un voyage rapide dans Moonlight Peaks ?',
    a: "Oui, confirmé via plusieurs sources : le cercle de sorcières offre une option de voyage rapide en ville, et la forme chauve-souris couvre rapidement du terrain une fois la métamorphose débloquée. Il n'y a pas de système de mini-carte ou de marqueurs de quête, la carte en jeu (avec ses symboles de point d'exclamation et de scintillement pour les cinématiques en attente) est donc la principale aide à la navigation.",
  },
  'how-to-find-quests-heart-events': {
    q: 'Comment trouver les quêtes et événements de cœur dans Moonlight Peaks ?',
    a: "Confirmé au lancement : vérifiez la carte pour des marqueurs — un point d'exclamation signifie qu'entrer dans cette zone déclenche une cinématique, et une aura scintillante autour d'un bâtiment signifie qu'y entrer en déclenchera une. Le tableau d'affichage en ville (géré par Albertus, un hibou) liste aussi les emplois/quêtes disponibles.",
  },
  'how-many-quests-are-in-moonlight-peaks': {
    q: 'Combien de quêtes y a-t-il dans Moonlight Peaks ?',
    a: "Confirmé via une transcription de journal de quêtes recoupée : l'histoire principale comprend au moins 20+ quêtes nommées, de l'arrivée en ville jusqu'à un arc narratif de mariage, plus plusieurs quêtes secondaires confirmées et des systèmes continus comme le tableau d'affichage. Il pourrait y avoir plus de contenu narratif que ce qui est documenté jusqu'à présent.",
    more: ["Retrouvez le guide complet des quêtes sur /quests (actuellement en anglais seulement)."],
  },
  'what-does-a-bridge-too-far-quest-unlock': {
    q: 'Que débloque la quête "A Bridge Too Far" dans Moonlight Peaks ?',
    a: "Confirmé : la terminer lève la malédiction sur le pont vers Misty Shores et débloque cette zone (y compris la Cave of Echoes, votre première source de minerai de cuivre) ainsi que le cimetière, et déclenche l'arc narratif suivant au Crest Garden.",
  },
  'what-quest-unlocks-hellkitten-form': {
    q: 'Quelle quête débloque la forme Hellkitten (chat) dans Moonlight Peaks ?',
    a: "Confirmé via un journal de quêtes recoupé : la quête \"The Dinner Party\" récompense la forme chat (métamorphose Hellkitten). Elle se situe quelques moments d'histoire après \"A Bridge Too Far\", à la suite de la chaîne de quêtes de l'extracteur de mana.",
  },
  'why-is-my-quest-not-starting-in-moonlight-peaks': {
    q: 'Pourquoi une quête ne démarre-t-elle pas dans Moonlight Peaks ?',
    a: "Rapporté par la communauté : de nombreuses quêtes se déclenchent simplement en entrant dans une nouvelle zone, en attendant un nombre défini de jours de jeu, ou en lisant une lettre/invitation, plutôt que par une invite à l'écran évidente. Si une quête semble bloquée, vérifiez si la quête précédente de la chaîne est vraiment terminée, si assez de jours se sont écoulés, et si vous êtes entré dans la zone ou le bâtiment auquel l'étape suivante est liée.",
  },
  'how-does-the-job-board-work-in-moonlight-peaks': {
    q: "Comment fonctionne le tableau d'affichage dans Moonlight Peaks ?",
    a: "Confirmé : Albertus' Jobs est un tableau continu et répétable à la mairie, géré par Albertus, un hibou. Terminer un emploi affiché rapporte de l'or, parfois un objet, et une hausse de relation avec la personne qui a fait la demande — un système continu plutôt qu'une quête unique.",
  },
  'what-are-the-main-story-quests-in-moonlight-peaks': {
    q: "Quelles sont les quêtes d'histoire principale dans Moonlight Peaks, dans l'ordre ?",
    a: "Confirmé via un journal de quêtes recoupé : la chaîne va approximativement de l'inscription à la mairie et la rencontre avec Orlock, à travers \"A Bridge Too Far\" (la malédiction du pont Fiona/Orlock), un mystère au Crest Garden, le déblocage de votre première magie et de l'extracteur de mana, \"The Dinner Party\" (débloque la forme chat), jusqu'à une histoire d'arc narratif de mariage. Retrouvez la répartition complète chapitre par chapitre avec l'ordre exact et les conditions de déblocage sur la page de présentation.",
  },
};
