// src/i18n/platforms-fr.ts
export type PlatformTrFr = { title: string; dek: string; body?: string[]; faq?: { q: string; a: string }[] };

export const platformsFr: Record<string, PlatformTrFr> = {
  'steam-deck': {
    title: 'Moonlight Peaks sur Steam Deck', dek: 'Moonlight Peaks est disponible sur Steam pour PC et Mac, donc aussi jouable sur Steam Deck.',
    body: [
      'Moonlight Peaks est disponible sur Steam pour Windows et Mac, et fonctionne donc sur Steam Deck comme les autres titres Steam.',
      "Un problème confirmé de la semaine de lancement : certains joueurs subissent un crash au démarrage sur Steam Deck. La solution rapportée consiste à passer l'outil de compatibilité sur Proton 9.0-4, dans Propriétés → Compatibilité du jeu. Une évaluation officielle Valve \"vérifié Steam Deck\" n'est pas encore confirmée ici.",
    ],
    faq: [{ q: 'Moonlight Peaks est-il vérifié Steam Deck ?', a: "Une évaluation officielle Valve \"vérifié Steam Deck\" n'est pas encore confirmée ici. Le jeu est jouable via Steam sur le Deck ; en cas de crash au démarrage, passer à Proton 9.0-4 est la solution rapportée." }],
  },
  'switch': {
    title: 'Moonlight Peaks sur Nintendo Switch', dek: "Moonlight Peaks est disponible sur la Nintendo Switch originale — prix, démo gratuite et la mise à niveau vers Switch 2.",
    body: [
      "Moonlight Peaks est sorti le 7 juillet 2026 sur la Nintendo Switch originale, avec une démo gratuite disponible sur l'eShop.",
      "Il existe aussi une édition Nintendo Switch 2 séparée et améliorée ; les joueurs ayant acheté sur la Switch originale ont été informés qu'un pass de mise à niveau Switch vers Switch 2 sera disponible.",
      "Confirmé au lancement : support complet de la manette dès le départ — les critiques décrivent le jeu comme conçu autour de la manette, ce qui convient bien au jeu portable sur Switch.",
    ],
    faq: [{ q: 'Moonlight Peaks est-il sur la Nintendo Switch originale ?', a: "Oui — sorti le 7 juillet 2026 sur la Switch originale, avec une démo gratuite sur l'eShop. Une édition Switch 2 séparée et améliorée est également disponible." }],
  },
  'switch-2': {
    title: 'Moonlight Peaks sur Nintendo Switch 2', dek: "Une édition native Nintendo Switch 2 est confirmée à 39,99 $ — voici ce que les critiques ont trouvé en mode portable.",
    body: [
      "Moonlight Peaks a sa propre édition Nintendo Switch 2 en plus de la version Switch originale, à 39,99 $ (contre 34,99 $ sur Steam, Switch et Android), et la démo gratuite est jouable sur Switch 2.",
      "Un pass de mise à niveau Switch vers Switch 2 a été mentionné pour les joueurs achetant sur la Switch originale.",
      "Confirmé par les critiques de la semaine de lancement : l'édition Switch 2 fonctionnait exceptionnellement bien en mode portable, avec une disposition de manette solide et bien organisée — l'une des expériences portables les plus fortes parmi les plateformes confirmées.",
    ],
    faq: [{ q: 'Y a-t-il une version Switch 2 de Moonlight Peaks ?', a: "Oui — une édition native Nintendo Switch 2 est confirmée à 39,99 $, et la démo gratuite est jouable sur Switch 2. Les critiques ont trouvé qu'elle fonctionnait exceptionnellement bien en mode portable." }],
  },
  'android': {
    title: 'Moonlight Peaks sur Android (Google Play)', dek: "Moonlight Peaks est disponible sur Android via Google Play — un achat unique, sans gacha ni achats intégrés.",
    body: [
      "Moonlight Peaks est sorti le 7 juillet 2026 sur Android via Google Play (Google Play Games), ce qui en fait l'un des rares cozy life sims de cette envergure à sortir sur mobile dès le premier jour, au même prix que Steam et Switch, à 34,99 $.",
      "Confirmé : il s'agit d'un achat unique sans mécaniques gacha, minuteries d'énergie ou achats intégrés — le jeu complet est débloqué pour ce prix unique, exactement comme sur PC ou console.",
      "Aucune version iOS n'a été annoncée ; Android via Google Play est la seule plateforme mobile confirmée.",
      "Pas encore confirmé indépendamment ici : les exigences matérielles minimales exactes et les détails complets du schéma de contrôle tactile.",
    ],
    faq: [
      { q: 'Moonlight Peaks est-il sur iOS ou iPhone ?', a: "Aucune version iOS n'a été annoncée. Sur mobile, Moonlight Peaks est disponible via Android sur Google Play." },
      { q: 'La version mobile de Moonlight Peaks a-t-elle du gacha ou des achats intégrés ?', a: "Non, confirmé : c'est un achat unique avec le jeu entièrement débloqué, sans gacha, minuterie d'énergie ou achats intégrés." },
    ],
  },
};
