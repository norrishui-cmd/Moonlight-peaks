// src/i18n/quests-side-de.ts
// German translations for side quests (title/summary/reward text only).
// slug/npc/status/related are shared from data/quests-side.ts.
export type SideQuestTrDe = { title: string; summary: string; reward?: string };

export const sideQuestsDe: Record<string, SideQuestTrDe> = {
  'noels-fishing-contest': {
    title: 'Noels Angelwettbewerb',
    summary: 'Bestätigt: Innerhalb deiner ersten paar Spielnächte fordert dich Noel am Fluss zu einem Angelwettbewerb heraus \u2014 fang 3 verschiedene Fischarten, bevor er es tut. Es ist zeitlos, also ein leichter Sieg.',
    reward: 'Deine erste Angelrute, plus einen Münzbonus',
  },
  'fix-the-roof': {
    title: 'Das Dach reparieren',
    summary: 'Bestätigt: eine Quest von Ridge, die Hausupgrades freischaltet, die danach am Howling Hammer gekauft werden.',
    reward: 'Zugang zu Hausupgrades',
  },
  'the-magic-of-crops': {
    title: 'Die Magie der Feldfrüchte',
    summary: 'Bestätigt: eine briefausgelöste Quest von Luna, die den Aquaflux-Zauber freischaltet (magisches, automatisches Gießen), eine Voraussetzung in der Kette, die zu "The Quest for Mana" führt.',
    reward: 'Aquaflux-Zauber freigeschaltet',
  },
  'the-need-for-herbs': {
    title: 'Der Bedarf an Kräutern',
    summary: 'Gemeldet als Folgequest nach "The Magic of Crops", die zum Kräutergarten-Bauplan führt.',
    reward: 'Kräutergarten-Bauplan',
  },
  'the-familys-heirloom-artifact': {
    title: 'Dragans Artefakt (Nokturna-Sieg)',
    summary: 'Gemeldet: ein Sieg in einem Nokturna-Match gegen Dragan ist mit dem Erhalt eines Artefakts von ihm verbunden, im Zusammenhang mit dem Aufbau des Museums.',
  },
  'vampster-collection-quest': {
    title: 'Vampster-Sammlung',
    summary: 'Bestätigt: Alina, gefunden in der Höhle des Echos, erklärt, dass die 53 in der Stadt verstreuten Vampster verloren sind, und bittet dich, sie einzeln zu einer Höhle in Misty Shores nach Hause zu bringen.',
  },
  'soul-blobs-favor': {
    title: 'Deaths Bitte (Soul Blobs)',
    summary: 'Bestätigt: Nach deinem zweiten Treffen mit Death in der Stadt stellt er die 100 Soul Blobs vor und bittet dich, sie mit dem Netz einzusammeln.',
    reward: 'Antike Uhr beim Sammeln aller 100 (verlängert die Nacht von 15 auf 25 Minuten)',
  },
  'albertus-job-board': {
    title: "Albertus' Jobs (laufend)",
    summary: 'Bestätigt: ein laufendes, wiederholbares System statt einer einmaligen Quest \u2014 kurze Anfragen, die auf Albertus\u2019 Brett am Rathaus gepostet werden, jede belohnt mit Münzen, manchmal einem Gegenstand, und Beziehungspunkten mit der Person, die sie gepostet hat.',
  },
};
