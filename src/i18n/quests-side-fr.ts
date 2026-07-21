// src/i18n/quests-side-fr.ts
// French translations for side quests (title/summary/reward/troubleshooting text only).
// slug/npc/status/related are shared from data/quests-side.ts.
export type SideQuestTrFr = { title: string; summary: string; reward?: string; troubleshooting?: { q: string; a: string }[] };

export const sideQuestsFr: Record<string, SideQuestTrFr> = {
  'noels-fishing-contest': {
    title: 'Le concours de pêche de Noel (Première canne à pêche)',
    summary: "Confirmé : dans vos premières soirées de jeu, Noel vous met au défi dans un concours de pêche près de la rivière — attrapez 3 espèces de poissons différentes avant lui. C'est sans limite de temps, donc facile à gagner.",
    reward: "Votre première canne à pêche, plus un bonus en or",
    troubleshooting: [
      { q: "Je n'ai pas encore de canne à pêche — où en trouver une ?", a: "Confirmé (recoupé avec le guide de déblocage de whisperofthehouse.com) : la canne à pêche n'est vendue dans aucun magasin — c'est une récompense de quête du concours de pêche de Noel. Si vous n'avez pas encore rencontré Noel près de la rivière, c'est le vrai blocage, pas un achat manqué." },
      { q: 'Je ne trouve pas Noel pour démarrer le concours — que faire ?', a: "Rapporté par la communauté : Noel se trouve généralement près de la rivière en début de partie. Si plusieurs soirées de jeu sont passées sans signe de lui, vérifiez d'abord que vous avez terminé les premières quêtes de mise en place (S'inscrire à la mairie, Rencontrer les habitants), car certains PNJ précoces n'apparaissent qu'après cela." },
    ],
  },
  'fix-the-roof': {
    title: 'Réparer le toit (Agrandissements de maison verrouillés)',
    summary: "Confirmé : une quête de Ridge qui débloque les agrandissements de maison, achetés ensuite au Howling Hammer. Elle débloque aussi le plan du Raffineur.",
    reward: "Accès aux agrandissements de maison, plan du Raffineur",
    troubleshooting: [
      { q: 'Le Howling Hammer ne me vend pas d\'agrandissements de maison — pourquoi ?', a: 'Confirmé : les agrandissements de maison sont conditionnés à la fin de "Réparer le toit" avec Ridge en premier. Si les options d\'agrandissement n\'apparaissent pas au Howling Hammer, cette quête est l\'étape manquante, pas un bug de boutique.' },
      { q: "Je n'ai pas de Raffineur et je ne peux pas fabriquer de nourriture ou de planches — qu'est-ce qui bloque ça ?", a: "Confirmé : le plan du Raffineur est une récompense liée à cette même chaîne de quêtes de réparation du toit, pas quelque chose acheté séparément. Terminez d'abord \"Réparer le toit\"." },
    ],
  },
  'the-magic-of-crops': {
    title: 'La magie des cultures (Aquaflux / Baguette cassée)',
    summary: "Confirmé : une quête déclenchée par lettre de Luna qui débloque le sort Aquaflux (arrosage magique automatique) — un prérequis dans la chaîne menant à \"The Quest for Mana\" et, finalement, à la réparation de la baguette et au lancement de sorts en général.",
    reward: "Sort Aquaflux débloqué",
    troubleshooting: [
      { q: 'Ma baguette est toujours cassée — comment la réparer ?', a: "Rapporté par la communauté (whisperofthehouse.com) : la réparation de la baguette n'est pas un achat en boutique — elle vient via cette chaîne narrative (Luna → Sabrina → Fiona → Extracteur de mana → Aquaflux). Si vous n'avez pas encore déclenché \"La magie des cultures\" de Luna, c'est le vrai point de départ." },
      { q: "Je n'ai pas Aquaflux et je suis bloqué à arroser à la main — quel est le déclencheur ?", a: "Confirmé : cette quête est déclenchée par lettre de Luna. Si elle n'a pas commencé, assurez-vous d'avoir progressé dans les moments narratifs précédents (jusqu'à \"A Bridge Too Far\"), car les lettres suivantes sont généralement conditionnées aux quêtes précédentes." },
    ],
  },
  'the-net-and-death': {
    title: 'Débloquer le filet à insectes (Death & Soul Blobs)',
    summary: "Confirmé (recoupé avec whisperofthehouse.com) : le filet vient via Death, conditionné à la progression de la quête à vin d'Orlock, A Bridge Too Far et l'accès à Misty Shores — pas un objet de boutique. Après votre deuxième rencontre avec Death en ville, il présente les 100 Soul Blobs et vous demande de les rassembler avec le filet.",
    reward: "Le filet (capture d'insectes/Soul Blobs) ; Horloge Antique en collectant les 100 Soul Blobs (allonge la nuit de 15 à 25 minutes)",
    troubleshooting: [
      { q: "Je ne peux pas attraper d'insectes ou de Soul Blobs — où est le filet ?", a: "Confirmé : le filet n'est vendu nulle part — il se débloque via Death, conditionné à une progression narrative antérieure (la quête à vin d'Orlock, A Bridge Too Far, et l'accès à Misty Shores). Si vous n'avez pas encore rencontré Death deux fois, c'est le blocage." },
      { q: 'Où trouve-t-on Death dans Moonlight Peaks ?', a: "Confirmé : en ville, lié à la zone du cimetière Ambrosia qui s'ouvre après que \"A Bridge Too Far\" débloque Misty Shores." },
      { q: "Pourquoi je rate sans cesse les insectes et les Soul Blobs avec le filet ?", a: "Confirmé : chaque coup de filet consomme de l'endurance, qu'il touche ou non, donc les coups ratés vous coûtent de l'énergie. Rapporté par la communauté : les insectes et Soul Blobs ont tendance à fuir si vous courez vers eux, donc marcher lentement avant de frapper permet plus de captures et gaspille moins d'endurance qu'en sprintant." },
    ],
  },
  'vampster-collection-quest': {
    title: 'La collecte des Vampsters',
    summary: "Confirmé : Alina, trouvée dans la Cave of Echoes, explique que les 100 Vampsters éparpillés en ville sont perdus et vous demande de les ramener chez eux un par un, dans une grotte de Misty Shores. L'un d'eux, Larry, vit confirmé dans la propre maison d'Alina et choisit de rester plutôt que d'être collecté.",
    troubleshooting: [
      { q: "Je perds sans cesse la trace d'un Vampster que je portais — pourquoi ?", a: "Rapporté par la communauté : parler à un habitant, ou déclencher une cinématique, vous fait lâcher le Vampster porté. Il reste là où vous l'avez laissé tomber, alors évitez les zones riches en dialogues avant de partir avec un." },
      { q: 'Je ne peux pas démarrer cette quête — où est Alina ?', a: 'Confirmé : dans la Cave of Echoes, qui ne s\'ouvre qu\'après que "A Bridge Too Far" débloque Misty Shores. Si vous n\'avez pas encore atteint la Cave of Echoes, c\'est le prérequis.' },
    ],
  },
  'albertus-job-board': {
    title: "Les petits boulots d'Albertus n'apparaissent pas",
    summary: "Confirmé : un système secondaire continu et répétable plutôt qu'une quête unique — de courtes demandes affichées sur le tableau d'Albertus à la mairie, chacune récompensant de l'or, parfois un objet, et des points de relation avec celui qui l'a postée.",
    troubleshooting: [
      { q: 'Le tableau des petits boulots à la mairie semble vide — est-ce un bug ?', a: "Rapporté par la communauté : le tableau est conditionné à l'accès à la mairie via \"S'inscrire à la mairie\" en premier. Si vous avez terminé cela et ne voyez toujours rien, les petits boulots se renouvellent peut-être selon un calendrier plutôt que d'avoir toujours quelque chose affiché — revérifiez après avoir dormi." },
    ],
  },
  'npc-stuck-cant-interact': {
    title: 'Un PNJ est bloqué / figé et ne répond pas',
    summary: "Confirmé via le suivi officiel des problèmes connus du jeu et les rapports de bugs de la communauté Steam : certains joueurs trouvent un PNJ particulier (notamment Orlock) figé sur place et sans réaction à l'interaction. C'est un bug connu et non résolu, pas un problème de conditionnement de quête.",
    troubleshooting: [
      { q: "Un PNJ ne répond pas quand j'essaie de lui parler — est-ce un bug ou est-ce que je rate quelque chose ?", a: "Confirmé via le suivi officiel des problèmes connus : cela a été rapporté, notamment avec Orlock qui reste bloqué. Recharger la zone et dormir jusqu'au lendemain n'ont pas résolu le problème pour les joueurs concernés jusqu'à présent, et il n'y a pas encore de correctif confirmé. C'est un vrai bug, pas une exigence de quête que vous auriez ratée." },
      { q: "Y a-t-il une solution de contournement en attendant un correctif ?", a: "Rapporté par la communauté sur le fil de bug officiel de Steam : un joueur a trouvé qu'interagir plusieurs fois depuis le côté sud-est du PNJ finissait par déclencher l'invite, après que recharger la zone et dormir jusqu'au lendemain aient tous deux échoué. Ce n'est pas une solution garantie, mais c'est la seule solution de contournement confirmée qui ait fonctionné jusqu'à présent." },
      { q: 'Que dois-je faire si cela m\'arrive ?', a: "Confirmé : signalez-le à support@xseedgames.com avec votre plateforme et une description de ce qui s'est passé, car il n'y a pas encore de correctif garanti côté joueur." },
    ],
  },
  'form-wheel-softlock': {
    title: 'Bloqué sur la roue des formes / impossible de bouger',
    summary: "Confirmé via un fil officiel de suivi de bugs des développeurs sur Steam : certains joueurs clavier/souris se sont retrouvés bloqués avec la roue des formes de transformation ouverte (notamment en sortant du Manoir Ambrosia), sans moyen de la fermer ou de reprendre le contrôle.",
    troubleshooting: [
      { q: 'Je suis bloqué avec la roue des formes ouverte et je ne peux pas bouger — aide ?', a: "Confirmé via un fil officiel des développeurs XSEED Games : cela a affecté les joueurs clavier/souris, souvent en sortant du Manoir Ambrosia. Une cause rapportée était l'absence de touche assignée à l'action de la roue des formes — vérifiez vos raccourcis dans les Paramètres pour une assignation \"ouvrir la roue des formes\" (par défaut R sur certaines configurations selon les rapports) et assignez-en une si elle est vide." },
      { q: "Je suis coincé dans cet état et je ne peux pas atteindre le menu des paramètres — que faire ?", a: "Confirmé via le même fil des développeurs : les joueurs concernés ont dû forcer la fermeture du jeu (Alt+F4 sur PC) en dernier recours. Comme le jeu ne sauvegarde qu'en dormant, vous pourriez perdre de la progression depuis votre dernière sauvegarde — signalez le problème à XSEED Games via le fil de bug officiel ou support@xseedgames.com pour qu'ils puissent prioriser un correctif." },
    ],
  },
  'elviras-treasure-hunt': {
    title: "La chasse au trésor d'Elvira (Raiders of the Lost Art)",
    summary: "Confirmé via plusieurs guides indépendants de la semaine de lancement : Elvira vous envoie sur une chasse au trésor de 5 indices à travers la ville, débloquée après avoir atteint son événement à quatre cœurs et lu une lettre de suivi dans votre boîte aux lettres. Le trajet confirmé : le bar de Samael (The Broken Lamp) → le cimetière Ambrosia → une cloche à l'entrée de la mine Cave of Echoes → à l'intérieur de la Cave of Echoes → le Temple Khazan. Le terminer est lié au succès \"Raiders of the Lost Art\" et récompense un Tableau de Chasse au Trésor à accrocher dans votre maison.",
    reward: 'Succès "Raiders of the Lost Art", plus un Tableau de Chasse au Trésor pour votre maison',
    troubleshooting: [
      { q: "Je suis bloqué sur un des indices de la chasse au trésor d'Elvira — quel est le trajet ?", a: "Confirmé via plusieurs guides indépendants : l'ordre est le bar de Samael (The Broken Lamp), puis le cimetière Ambrosia, puis une cloche à l'entrée de la mine Cave of Echoes, puis à l'intérieur de la Cave of Echoes elle-même, et enfin le Temple Khazan. Si vous êtes bloqué sur un indice, revérifiez que vous avez entièrement exploré le lieu précédent — les indices sont liés à des endroits précis dans chaque zone, pas juste au fait d'entrer dans les environs." },
      { q: 'Où démarre-t-on cette quête ?', a: "Confirmé : elle se déclenche en atteignant l'événement à quatre cœurs d'Elvira, après quoi une lettre apparaît dans votre boîte aux lettres le jour de jeu suivant. Si sa chaîne d'indices ne semble pas progresser, l'étape du Temple Khazan nécessite spécifiquement des zones qui ne s'ouvrent que plus tard dans l'histoire, donc un accès incomplet à la carte peut aussi bloquer le dernier indice." },
    ],
  },
  'ui-softlock-after-shop': {
    title: "Interface figée / bloquée après avoir quitté une boutique",
    summary: "Confirmé via des rapports de bugs officiels de la communauté Steam : certains joueurs ont vu tous les éléments d'interface se désactiver après être sortis d'une boutique ou d'une cinématique de quête, incapables d'ouvrir un menu ou d'entrer dans d'autres lieux — généralement rapporté après environ 2 heures de jeu continu, parfois précédé de saccades.",
    troubleshooting: [
      { q: "J'ai quitté une boutique ou une cinématique et plus rien ne répond — est-ce un bug connu ?", a: "Confirmé via plusieurs rapports officiels de la communauté Steam : oui, c'est un blocage connu, le plus souvent rapporté après environ 2 heures de jeu continu, parfois avec des saccades juste avant. Ce n'est pas quelque chose que vous faites mal." },
      { q: "Y a-t-il un correctif ou une solution de contournement ?", a: "Aucun correctif confirmé côté joueur pour l'instant. Les joueurs concernés ont dû forcer la fermeture du jeu. Comme Moonlight Peaks ne sauvegarde qu'en dormant, vous pourriez perdre de la progression depuis votre dernière sauvegarde — signalez le problème à support@xseedgames.com avec les détails de votre plateforme pour que les développeurs puissent prioriser un correctif." },
      { q: 'Puis-je empêcher que cela arrive ?', a: "Non confirmé, mais par précaution : dormez pour sauvegarder plus souvent que dans d'autres simulations agricoles, puisqu'il n'y a pas de sauvegarde manuelle, et envisagez une courte pause toutes les quelques heures si vous remarquez des saccades commencer." },
    ],
  },
  'lost-save-data': {
    title: 'Sauvegarde perdue / progression disparue',
    summary: "Confirmé via des rapports officiels de la communauté Steam : des joueurs ont perdu plusieurs nuits de progression après un crash ou un arrêt inattendu (par ex. une coupure de courant), puisque Moonlight Peaks ne sauvegarde qu'en dormant, sans option de sauvegarde manuelle.",
    troubleshooting: [
      { q: "Ma sauvegarde a disparu après un crash ou une coupure de courant — puis-je la récupérer ?", a: "Confirmé via des rapports officiels de la communauté Steam : cela est aussi arrivé à d'autres joueurs, et il n'y a pas de méthode de récupération confirmée — le jeu n'écrit une sauvegarde que lorsque vous dormez dans votre cercueil, donc tout ce qui s'est passé depuis votre dernier sommeil est perdu si le jeu se ferme de manière inattendue." },
      { q: 'Où sont mes fichiers de sauvegarde, si je veux les sauvegarder moi-même ?', a: "Confirmé via un message officiel d'un développeur XSEED Games — Windows : %USERPROFILE%/AppData/LocalLow/Little Chicken Game Company/Moonlight Peaks/. Mac : ~/Library/Application Support/Little Chicken Game Company/Moonlight Peaks/. Copier manuellement ce dossier après une bonne session de jeu est une précaution raisonnable en attendant l'ajout éventuel de sauvegardes manuelles/rapides." },
      { q: 'Comment signaler cela aux développeurs ?', a: 'Confirmé : envoyez un e-mail à support@xseedgames.com. Si la perte a suivi un crash, vérifiez aussi %LOCALAPPDATA%\\CrashDumps pour un rapport de crash "Moonlight Peaks.exe" et mentionnez-le — les développeurs ont demandé ces détails dans leur fil officiel de suivi de bugs.' },
      { q: 'Y a-t-il une option de sauvegarde manuelle ?', a: "Pas actuellement — confirmé absente au lancement. Dormir dans votre cercueil est le seul moyen de sauvegarder, et c'est une fonctionnalité fréquemment demandée dans le fil de bug officiel de la communauté Steam du jeu." },
    ],
  },
  'fallen-tree-arborascend': {
    title: "Impossible de trouver l'arbre tombé (La baie mystérieuse)",
    summary: "Confirmé via PC Gamer : pendant la quête \"La baie mystérieuse\", vous devez dégager un arbre tombé pour que vos nouveaux voisins sirènes puissent rejoindre la ville. L'arbre n'est pas dans les Howling Marshes, comme le supposent la plupart des joueurs — il bloque une chute d'eau dans une zone différente. La solution est un sort, pas un outil : achetez le sort Arborascend chez Sabrina à Webb of Wonders, puis lancez-le (coûte 3 Mana) sur l'arbre tombé pour déclencher une cinématique qui le retire.",
    reward: "Dégage le chemin pour que la famille de sirènes Hosu rejoigne la ville ; mène vers l'arc de romance de Samael",
    troubleshooting: [
      { q: "Où se trouve exactement l'arbre tombé qui bloque la chute d'eau ?", a: "Confirmé via PC Gamer : il n'est pas dans les Howling Marshes, malgré que ce soit la supposition évidente. Il bloque une chute d'eau dans une zone différente liée au chemin de retour de la famille de sirènes Hosu vers la ville — si vous avez vérifié les Howling Marshes et n'avez rien trouvé, cela confirme que vous cherchez au mauvais endroit, pas qu'il vous manque un endroit caché là-bas." },
      { q: "Je n'ai pas d'outil capable de dégager l'arbre — de quoi ai-je besoin ?", a: "Confirmé : ce n'est pas du tout un outil — vous avez besoin du sort Arborascend, acheté chez Sabrina à Webb of Wonders. Le lancer coûte 3 Mana, alors assurez-vous d'en avoir assez en réserve (manger de la nourriture qui restaure le Mana aide) avant de partir, puisque vous ne pouvez pas couper ou pousser l'arbre manuellement." },
      { q: "J'ai acheté Arborascend mais rien ne se passe près de l'arbre — pourquoi ?", a: "Rapporté par la communauté : lancer Arborascend directement sur l'arbre tombé déclenche une cinématique qui le retire. Si rien ne se passe, revérifiez que vous avez bien assez de Mana pour le lancer (3 Mana) plutôt que de supposer que le sort a échoué." },
    ],
  },
};
