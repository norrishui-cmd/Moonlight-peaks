// src/data/farm-crop-details-fr.ts
export type CropDetailFr = { name: string; category: string; dek: string; body: string[]; faq: { q: string; a: string }[] };
export const cropDetailsFr: Record<string, CropDetailFr> = {
  'blood-grapes': {
    name: 'Blood Grapes', category: 'Culture de champ',
    dek: 'Une culture confirmée de 5 jours, non magique, de printemps/été, avec des données exactes de rendement et de prix.',
    body: [
      "Confirmé via le wiki officiel : Blood Grapes prend 5 jours à récolter puis repousse tous les 4 jours ensuite, donnant 3 grappes par récolte. Chaque grappe se vend 5 pièces d'or, et les graines coûtent 20 pièces d'or.",
      "Blood Grapes pousse au printemps et en été, et n'est pas une culture magique, donc un simple arrosoir fonctionne bien dessus.",
      "Blood Grapes est la première culture avec laquelle les joueurs commencent, et est couramment transformée en Vin Rouge ou en Jus de Blood Grape dans un tonneau (4 grappes pour 1 vin rouge, ou 3 pour 1 jus).",
    ],
    faq: [
      { q: 'Combien de temps mettent les Blood Grapes à pousser ?', a: 'Confirmé : 5 jours pour la première récolte, puis tous les 4 jours ensuite.' },
      { q: 'Que peut-on fabriquer avec les Blood Grapes ?', a: 'Confirmé : du Vin Rouge (4 grappes) ou du Jus de Blood Grape (3 grappes), tous deux faits dans un tonneau.' },
    ],
  },
  'rice': {
    name: 'Riz', category: 'Culture de champ',
    dek: 'Une culture confirmée de 5 jours, non magique, qui pousse sur trois saisons avec des données de vente réelles.',
    body: [
      "Confirmé via le wiki officiel : le riz prend 5 jours à récolter, donnant 1 par récolte. Il se vend 60 pièces d'or, les graines coûtant 30 pièces d'or.",
      "Le riz pousse au printemps, en été et en automne, ce qui lui donne l'une des fenêtres de culture les plus longues parmi les cultures de champ confirmées.",
    ],
    faq: [
      { q: 'Combien de temps met le riz à pousser dans Moonlight Peaks ?', a: "Confirmé : 5 jours, donnant 1 par récolte, se vendant 60 pièces d'or." },
    ],
  },
  'drikker': {
    name: 'Drikker', category: 'Culture de champ (magique)',
    dek: 'Une culture magique confirmée qui a besoin que sa coupe soit remplie d\'eau — pas un arrosage standard — pour pousser.',
    body: [
      "Confirmé via le wiki officiel : Drikker est une culture magique avec une exigence de croissance vraiment particulière — plutôt que d'arroser la case où elle est plantée, vous remplissez directement sa coupe d'eau pour la faire pousser.",
      "Comme toutes les cultures magiques, Drikker nécessite probablement le sort Aquaflux pour interagir de cette façon plutôt qu'un arrosoir classique, bien que le wiki officiel ne précise pas l'outil exact au-delà de « remplir sa coupe ».",
    ],
    faq: [
      { q: 'Comment faire pousser Drikker dans Moonlight Peaks ?', a: "Confirmé : remplissez sa coupe d'eau, plutôt que d'arroser le sol autour comme une culture normale." },
    ],
  },
  'gobbler': {
    name: 'Gobbler', category: 'Culture de champ (magique)',
    dek: 'Une culture magique confirmée nécessitant qu\'on la nourrisse de poisson ou de bestioles, pas d\'eau, pour pousser.',
    body: [
      "Confirmé via le wiki officiel et recoupé avec la couverture de la semaine de lancement : Gobbler est une culture magique qui doit être nourrie de poisson ou de bestioles pour pousser, plutôt qu'arrosée comme une culture normale.",
      "Rapporté par la communauté : l'élément spécifique voulu (un poisson ou une bestiole) est aléatoire par plante, donc garder un stock des deux est l'approche prudente si vous en cultivez plusieurs à la fois.",
    ],
    faq: [
      { q: 'Comment faire pousser Gobbler dans Moonlight Peaks ?', a: "Confirmé : nourrissez-le de poisson ou de bestioles plutôt que de l'arroser. Rapporté par la communauté : ce qu'il veut varie selon la plante." },
    ],
  },
  'hold-me-close': {
    name: 'Hold Me Close', category: 'Culture de champ (magique)',
    dek: 'Une culture magique confirmée empêchant les Weeping Wicca voisines de pleurer, les transformant en Sweet Wicca.',
    body: [
      "Confirmé via le wiki officiel : Hold Me Close est une culture magique avec un effet inhabituel sur ses voisines — elle empêche les Weeping Wicca proches de pleurer, ce qui les transforme en Sweet Wicca.",
      "Cela fait de Hold Me Close autant une culture de compagnonnage qu'une culture à part entière : sa principale valeur pourrait résider dans son effet sur une parcelle voisine de Weeping Wicca plutôt que dans sa propre récolte.",
    ],
    faq: [
      { q: 'Que fait Hold Me Close dans Moonlight Peaks ?', a: 'Confirmé : elle empêche les Weeping Wicca proches de pleurer, les transformant en Sweet Wicca.' },
    ],
  },
  'mandrake': {
    name: 'Mandrake', category: 'Culture de champ (magique)',
    dek: 'Une culture magique confirmée produisant une variante en colère ou heureuse selon les mandragores voisines.',
    body: [
      "Confirmé via le wiki officiel : Mandrake produit soit une Mandragore en colère soit une Mandragore heureuse comme récolte, et laquelle vous obtenez dépend de si d'autres mandragores sont plantées à proximité.",
      "C'est une véritable décision d'agencement : regrouper les mandragores plutôt que les espacer changera quelle variante vous récoltez systématiquement.",
    ],
    faq: [
      { q: "Pourquoi ma Mandrake est-elle devenue en colère plutôt qu'heureuse ?", a: "Confirmé : le résultat en colère/heureux dépend de si d'autres mandragores sont plantées à proximité — essayez d'ajuster votre espacement." },
    ],
  },
  'weeping-wicca': {
    name: 'Weeping Wicca', category: 'Culture de champ (magique)',
    dek: 'Une culture magique confirmée qui pleure et arrose automatiquement une parcelle de 3x3 autour d\'elle.',
    body: [
      "Confirmé via le wiki officiel : Weeping Wicca pleure pour arroser magiquement une parcelle de 3x3 de champ autour d'elle, en faisant une véritable culture d'automatisation plutôt qu'une simple culture à récolter.",
      "Planter Weeping Wicca stratégiquement au milieu d'une parcelle pourrait réduire l'arrosage manuel nécessaire pour les cultures environnantes — notez toutefois son interaction avec Hold Me Close (qui arrête les pleurs, et avec eux vraisemblablement cet effet d'arrosage, la transformant en Sweet Wicca à la place).",
    ],
    faq: [
      { q: 'Que fait Weeping Wicca dans Moonlight Peaks ?', a: "Confirmé : elle pleure pour arroser magiquement une parcelle de 3x3 autour d'elle. Placer Hold Me Close à proximité arrête les pleurs et la transforme en Sweet Wicca." },
    ],
  },
  'instant-growth-mushrooms': {
    name: 'Champignons à croissance instantanée', category: 'Groupe de cultures de champ',
    dek: 'Confirmé : six cultures de type champignon partagent le même mécanisme de croissance instantanée et de propagation.',
    body: [
      "Confirmé via le wiki officiel : Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom et Amanita partagent tous exactement le même mécanisme — chacun pousse instantanément une fois arrosé, et se propage aux champs voisins si arrosé à nouveau une fois complètement poussé.",
      "Cela fait de la famille des champignons une véritable exception parmi les cultures de Moonlight Peaks : au lieu d'attendre des jours pour une récolte, vous pouvez effectivement multiplier une parcelle de champignons sur tout votre champ en une seule session d'arrosage une fois que les premiers sont matures.",
    ],
    faq: [
      { q: 'Quels champignons poussent instantanément dans Moonlight Peaks ?', a: 'Confirmé : Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom et Amanita poussent tous instantanément une fois arrosés et se propagent aux cases voisines si arrosés à nouveau une fois poussés.' },
    ],
  },
};
