// src/data/farm-crop-details-de.ts
export type CropDetailDe = { name: string; category: string; dek: string; body: string[]; faq: { q: string; a: string }[] };
export const cropDetailsDe: Record<string, CropDetailDe> = {
  'blood-grapes': {
    name: 'Blood Grapes', category: 'Feldfrucht',
    dek: 'Eine bestätigte 5-Tage-Feldfrucht ohne Magie für Frühling/Sommer, mit genauen Ertrags- und Preisdaten.',
    body: [
      'Bestätigt über das offizielle Wiki: Blood Grapes brauchen 5 Tage bis zur Ernte und wachsen danach alle 4 Tage nach, mit 3 Trauben pro Ernte. Jede Traube verkauft sich für 5 Gold, Samen kosten 20 Gold.',
      'Blood Grapes wachsen im Frühling und Sommer und sind keine magische Feldfrucht — eine normale Gießkanne reicht aus.',
      'Blood Grapes sind die erste Feldfrucht, die Spieler besitzen, und werden häufig an einem Fass zu Rotwein oder Blood Grape Juice verarbeitet (4 Trauben für 1 Rotwein, oder 3 für 1 Saft).',
    ],
    faq: [
      { q: 'Wie lange brauchen Blood Grapes zum Wachsen?', a: 'Bestätigt: 5 Tage für die erste Ernte, danach alle 4 Tage.' },
      { q: 'Was kann man aus Blood Grapes herstellen?', a: 'Bestätigt: Rotwein (4 Trauben) oder Blood Grape Juice (3 Trauben), beides an einem Fass hergestellt.' },
    ],
  },
  'rice': {
    name: 'Reis', category: 'Feldfrucht',
    dek: 'Eine bestätigte 5-Tage-Feldfrucht ohne Magie, die über drei Jahreszeiten wächst, mit echten Verkaufsdaten.',
    body: [
      'Bestätigt über das offizielle Wiki: Reis braucht 5 Tage bis zur Ernte, mit 1 Ertrag pro Ernte. Er verkauft sich für 60 Gold, Samen kosten 30 Gold.',
      'Reis wächst im Frühling, Sommer und Herbst — eines der längeren Anbaufenster unter den bestätigten Feldfrüchten.',
    ],
    faq: [
      { q: 'Wie lange braucht Reis zum Wachsen in Moonlight Peaks?', a: 'Bestätigt: 5 Tage, mit 1 Ertrag pro Ernte, Verkaufspreis 60 Gold.' },
    ],
  },
  'drikker': {
    name: 'Drikker', category: 'Feldfrucht (magisch)',
    dek: 'Eine magische Feldfrucht, die bestätigt einen mit Wasser gefüllten Becher statt normaler Bewässerung braucht.',
    body: [
      'Bestätigt über das offizielle Wiki: Drikker ist eine magische Feldfrucht mit einer echt eigenen Wachstumsanforderung — statt das Feld zu gießen, füllst du direkt ihren Becher mit Wasser.',
      'Wie bei allen magischen Feldfrüchten dürfte dafür der Aquaflux-Zauber nötig sein statt einer normalen Gießkanne, auch wenn das offizielle Wiki das nicht explizit über "Becher füllen" hinaus präzisiert.',
    ],
    faq: [
      { q: 'Wie lässt man Drikker in Moonlight Peaks wachsen?', a: 'Bestätigt: Fülle seinen Becher mit Wasser, statt den Boden um ihn herum wie bei einer normalen Feldfrucht zu gießen.' },
    ],
  },
  'gobbler': {
    name: 'Gobbler', category: 'Feldfrucht (magisch)',
    dek: 'Eine magische Feldfrucht, die bestätigt mit Fisch oder Kleintieren statt Wasser gefüttert werden muss.',
    body: [
      'Bestätigt über das offizielle Wiki und abgeglichen mit Launch-Week-Berichten: Gobbler ist eine magische Feldfrucht, die mit Fisch oder Kleintieren gefüttert werden muss, um zu wachsen, statt gegossen zu werden.',
      'Community-berichtet: Welchen Gegenstand sie will (Fisch oder Kleintier), ist pro Pflanze zufällig — bei mehreren Pflanzen lohnt sich ein Vorrat von beidem.',
    ],
    faq: [
      { q: 'Wie lässt man Gobbler in Moonlight Peaks wachsen?', a: 'Bestätigt: Füttere sie mit Fisch oder Kleintieren statt sie zu gießen. Community-berichtet: welches sie will, variiert pro Pflanze.' },
    ],
  },
  'hold-me-close': {
    name: 'Hold Me Close', category: 'Feldfrucht (magisch)',
    dek: 'Eine magische Feldfrucht, die bestätigt nahe Weeping Wiccas vom Weinen abhält und sie in Sweet Wiccas verwandelt.',
    body: [
      'Bestätigt über das offizielle Wiki: Hold Me Close ist eine magische Feldfrucht mit einem ungewöhnlichen Effekt auf ihre Nachbarn — sie hindert nahe Weeping Wiccas am Weinen, was diese in Sweet Wiccas verwandelt.',
      'Das macht Hold Me Close ebenso sehr eine Begleitpflanze wie eine eigenständige Feldfrucht: ihr Hauptwert könnte in der Wirkung auf ein benachbartes Weeping-Wicca-Feld liegen statt in der eigenen Ernte.',
    ],
    faq: [
      { q: 'Was macht Hold Me Close in Moonlight Peaks?', a: 'Bestätigt: Sie hindert nahe Weeping Wiccas am Weinen und verwandelt sie stattdessen in Sweet Wiccas.' },
    ],
  },
  'mandrake': {
    name: 'Mandrake', category: 'Feldfrucht (magisch)',
    dek: 'Eine magische Feldfrucht, die bestätigt eine wütende oder glückliche Variante hervorbringt, je nach benachbarten Mandrakes.',
    body: [
      'Bestätigt über das offizielle Wiki: Mandrake bringt entweder eine Angry Mandrake oder eine Happy Mandrake als Ernte hervor, abhängig davon, ob weitere Mandrakes in der Nähe gepflanzt sind.',
      'Das ist eine echte Layout-Entscheidung: Mandrakes eng zusammen zu pflanzen versus verteilt zu setzen ändert, welche Variante man konsequent erntet.',
    ],
    faq: [
      { q: 'Warum wurde meine Mandrake wütend statt glücklich?', a: 'Bestätigt: Das Ergebnis hängt davon ab, ob weitere Mandrakes in der Nähe gepflanzt sind — versuch, den Abstand anzupassen.' },
    ],
  },
  'weeping-wicca': {
    name: 'Weeping Wicca', category: 'Feldfrucht (magisch)',
    dek: 'Eine magische Feldfrucht, die bestätigt weint und dabei automatisch ein 3×3-Feld um sich herum bewässert.',
    body: [
      'Bestätigt über das offizielle Wiki: Weeping Wicca weint, um magisch ein 3×3-Feld Ackerland um sich herum zu bewässern — eine echte Automatisierungs-Feldfrucht statt nur etwas zum Ernten.',
      'Strategisch mitten in ein Beet gepflanzt, könnte Weeping Wicca den manuellen Gießaufwand für umliegende Feldfrüchte senken — beachte aber die Wechselwirkung mit Hold Me Close, die das Weinen (und damit vermutlich diese Bewässerung) stoppt und sie in eine Sweet Wicca verwandelt.',
    ],
    faq: [
      { q: 'Was macht Weeping Wicca in Moonlight Peaks?', a: 'Bestätigt: Sie weint und bewässert dabei magisch ein 3×3-Feld um sich herum. Hold Me Close in der Nähe stoppt das Weinen und verwandelt sie in eine Sweet Wicca.' },
    ],
  },
  'instant-growth-mushrooms': {
    name: 'Sofort wachsende Pilze', category: 'Feldfrucht-Gruppe',
    dek: 'Bestätigt: Sechs Pilzarten teilen sich denselben Sofort-Wachstum-und-Ausbreitung-Mechanismus.',
    body: [
      'Bestätigt über das offizielle Wiki: Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom und Amanita teilen sich alle denselben Mechanismus — jeder wächst sofort beim Gießen und breitet sich auf benachbartes Ackerland aus, wenn er erneut gegossen wird, sobald er ausgewachsen ist.',
      'Das macht die Pilzfamilie zu einer echten Ausnahme unter den Moonlight-Peaks-Feldfrüchten: statt Tage auf eine Ernte zu warten, kannst du ein Pilzfeld in einer einzigen Gieß-Session über dein Ackerland vervielfachen, sobald die ersten ausgewachsen sind.',
    ],
    faq: [
      { q: 'Welche Pilze wachsen in Moonlight Peaks sofort?', a: 'Bestätigt: Common Mushroom, Frosteria, Glowglammer, Yellow Glowglammer, Volacio Mushroom und Amanita wachsen alle sofort beim Gießen und breiten sich auf Nachbarfelder aus, wenn erneut gegossen wird, sobald sie ausgewachsen sind.' },
    ],
  },
};
