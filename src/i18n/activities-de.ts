// src/i18n/activities-de.ts
// German translations for activities.ts entries (title/dek/body text only).
export type ActivityTrDe = { title: string; dek: string; body?: string[] };

export const activitiesDe: Record<string, ActivityTrDe> = {
  fishing: {
    title: 'Angeln', dek: 'Wirf eine Angel in die Gewässer der Stadt — eine der Aktivitäten in der kostenlosen Demo.',
    body: [
      'Angeln ist eine bestätigte Aktivität und in der kostenlosen Demo spielbar. Du angelst in den Gewässern der Stadt, wo auch die Meerjungfrauenfamilie lebt.',
      'Die vollständige Fischliste und etwaige besondere Fänge werden zum Release bestätigt.',
    ],
  },
  foraging: {
    title: 'Sammeln', dek: 'Sammle Fundstücke im Wald nach Einbruch der Dunkelheit.',
    body: [
      'Sammeln ist eine der bestätigten Aktivitäten — du sammelst Fundstücke in den Wäldern rund um die Stadt.',
      'Genaue Sammelobjekte und Jahreszeiten werden zum Release bestätigt.',
    ],
  },
  'flower-arranging': {
    title: 'Blumenarrangement', dek: 'Ein entspannendes kreatives Handwerk, das in der Demo enthalten ist.',
    body: [
      'Blumenarrangement ist eines der gemütlichen Handwerke, die für das Spiel bestätigt sind und in der kostenlosen Demo gezeigt werden.',
      'Wie Arrangements genutzt und ausgestellt werden, wird zum Release bestätigt.',
    ],
  },
  embroidery: {
    title: 'Stickerei', dek: 'Sticke Muster — eines der entspannenden Handwerke der Demo.',
    body: [
      'Stickerei ist ein bestätigtes Handwerk und erscheint in der kostenlosen Demo neben den anderen gemütlichen Aktivitäten.',
      'Muster und Belohnungen werden zum Release bestätigt.',
    ],
  },
  'potion-brewing': {
    title: 'Trankbrauen', dek: 'Braue Tränke — darunter der Alter-Ego-Elixier, der dein Aussehen verändert.',
    body: [
      'Trankbrauen ist eine bestätigte Aktivität. Ein benanntes Beispiel ist der Alter-Ego-Elixier, ein Trank, der dein Aussehen verändert.',
      'Das vollständige Rezept und die Zutatenliste werden zum Release bestätigt — wir erfinden keine Rezepte.',
    ],
  },
  decorating: {
    title: 'Dekorieren', dek: 'Platziere und arrangiere Möbel und Deko, um dein gotisches Häuschen anzupassen.',
    body: [
      'Dein Zuhause zu dekorieren ist eine Kernaktivität für Gemütlichkeit — du platzierst und arrangierst Möbel und Deko, um das Häuschen zu deinem eigenen zu machen.',
      'Der vollständige Katalog an Möbeln und Deko wird zum Release bestätigt.',
    ],
  },
  'character-creator': {
    title: 'Charaktereditor', dek: 'Erschaffe deinen eigenen Vampir — der Charaktereditor ist in der Demo spielbar.',
    body: [
      'Du erschaffst deinen eigenen Vampir im Charaktereditor, der Teil der kostenlosen Demo ist. Charaktermodelle sind bewusst geschlechtsneutral gestaltet, und Dating ist nicht geschlechtsgebunden.',
      'Du benennst außerdem deinen Hof und dein Hellkitten-Haustier. Die vollständige Liste der Anpassungsoptionen wird zum Release bestätigt.',
    ],
  },
  shapeshifting: {
    title: 'Gestaltwandlung', dek: 'Verwandle dich in eine Fledermaus, um die Stadt nach Einbruch der Dunkelheit zu durchstreifen und versteckte Orte zu erreichen.',
    body: [
      'Als Vampir kannst du dich verwandeln — zum Beispiel in eine Fledermaus —, um dich schnell in der Stadt zu bewegen und Orte zu erreichen, die du zu Fuß nicht könntest.',
      'Weitere Formen werden zum Release bestätigt.',
    ],
  },
  'seasonal-events': {
    title: 'Saisonale Events', dek: 'Stadtfeiern, die über das Jahr verteilt stattfinden.',
    body: [
      'Saisonale Feiern sind Teil des Stadtlebens, und ein theatralischer Event-Gastgeber (Pumpkin Head) wurde gezeigt, wie er Versammlungen belebt.',
      'Der vollständige Event-Kalender und die Daten werden zum Release bestätigt.',
    ],
  },
  pottery: {
    title: 'Töpfern', dek: 'Ein gemütliches Handwerk, genannt neben Blumenarrangement und Stickerei.',
    body: [
      'Community-berichtet: Töpfern wird als eines von Moonlight Peaks\u2019 "dunklen Zerstreuungen" genannt, neben Blumenarrangement, Stickerei und Kochen. Genaue Mechanik, Materialien und wo es freigeschaltet wird, sind hier noch nicht unabhängig bestätigt.',
    ],
  },
  'marshmallow-roasting': {
    title: 'Marshmallows rösten', dek: 'Eine gemütliche Lagerfeuer-Aktivität, auch als Date-Minispiel bestätigt.',
    body: [
      'Community-berichtet: Marshmallows auf den bevorzugten Röstgrad eines Dates zu rösten ist als eines der Minispiele bestätigt, die während In-Game-Dates verwendet werden. Es wird auch separat als eigenständiges Hobby unter Moonlight Peaks\u2019 "dunklen Zerstreuungen" genannt.',
    ],
  },
  stargazing: {
    title: 'Sternenbeobachtung', dek: 'Ein ruhiges nächtliches Hobby, genannt unter den gemütlichen Zerstreuungen des Spiels.',
    body: [
      'Community-berichtet: Sternenbeobachtung wird als eines von Moonlight Peaks\u2019 "dunklen Zerstreuungen"-Hobbys genannt. Die genaue Mechanik — ob es eine passive Szene, ein Minispiel oder an einen bestimmten Ort gebunden ist — ist hier noch nicht unabhängig bestätigt.',
    ],
  },
  yoga: {
    title: 'Yoga', dek: 'Eine bestätigte Aktivität, verbunden mit ihrer eigenen Errungenschaft, "Moonlit Stretching."',
    body: [
      'Bestätigt: Yoga ist eine echte Aktivität in Moonlight Peaks, verbunden mit der Errungenschaft "Moonlit Stretching" (verliehen für die Teilnahme an deiner ersten Yoga-Session). Es steht auch auf der Liste der "dunklen Zerstreuungen"-Hobbys des Spiels, neben Kochen, Angeln und dem Nokturna-Kartenspiel.',
      'Community-berichtet: Ein Ort namens "Yoga-Hütte" ist mit dieser Aktivität verbunden. Genaue Session-Mechanik, Zeitplan und ein etwaiger Instruktor-NPC sind hier noch nicht unabhängig bestätigt.',
    ],
  },
};
