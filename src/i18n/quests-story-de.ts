// src/i18n/quests-story-de.ts
// German translations for the main story quest chain (title/summary/reward/unlock text only).
// slug/chapter/status/leadsTo are shared from data/quests-story.ts.
export type StoryQuestTrDe = { title: string; unlock?: string; summary: string; reward?: string };

export const storyChaptersDe: { number: number; title: string; dek: string }[] = [
  { number: 1, title: 'Ankunft in Moonlight Peaks', dek: 'Registrierung als Bewohner, Treffen mit Orlock und Viktor, und deine erste Feldfrucht.' },
  { number: 2, title: 'A Bridge Too Far', dek: 'Fionas Fluch auf Orlocks Brücke, und das Ritual, das ihn hebt.' },
  { number: 3, title: 'Der Crest Garden & Mana', dek: 'Ein Mysterium am Crest Garden, und das Freischalten deiner ersten echten Magie.' },
  { number: 4, title: 'Stadtleben & Familiendrama', dek: 'Rathaus-Politik, Familienspannungen und das Einleben in Moonlight Peaks.' },
  { number: 5, title: 'Der Hochzeits-Handlungsbogen', dek: 'Eine Hochzeit in der Stadt \u2014 Einladungen, Proben und unerledigte Angelegenheiten.' },
];

export const storyQuestsDe: Record<string, StoryQuestTrDe> = {
  'register-at-town-hall': {
    title: 'Am Rathaus registrieren',
    summary: 'Bestätigt über mehrere Quellen: Nach dem Treffen mit Orlock (siehe unten) gehst du in die Stadt, wo Bürgermeister Brook dich als neuen Bewohner am Rathaus registriert und dir Chester gibt, eine lebende Truhe, die alles, was hineingelegt wird, über Nacht automatisch verkauft.',
    reward: 'Chester (automatischer Verkaufsspeicher)',
  },
  'meet-the-townsfolk': {
    title: 'Die Stadtbewohner treffen / Ein neuer Anfang',
    unlock: 'Registrierung am Rathaus abschließen',
    summary: 'Bestätigt: frühe Einrichtungsziele, bei denen du Orlock triffst (einen verkaterten Vampir, den du schlafend auf deinem Rasen findest \u2014 stupse ihn an statt Wasser über ihn zu gießen, für die bessere Dialogoption), dann Viktor, Orlocks Onkel, der in der Gruft/dem Kuppelgebäude links von deinem Hof lebt und dir die Grundlagen der Landwirtschaft beibringt.',
    reward: 'Vollständiges Start-Werkzeugset: Schaufel, Gießkanne, Axt, Spitzhacke und ein kaputter Zauberstab',
  },
  'a-roof-over-your-head': {
    title: 'Ein Dach über dem Kopf / Der erste Schritt zum Komfort',
    summary: 'Bestätigt als Teil der Neu-Spiel-Einrichtungsroute: grundlegende Wohn- und Komfortziele, parallel zu deiner ersten Blood-Grapes-Pflanzung (Orlocks Startpflanze, gegeben nachdem du ihn geweckt hast). Das Reparieren deines Dachs schaltet außerdem das Refiner-Bauplan frei.',
    reward: 'Refiner-Bauplan (bei Dachreparatur)',
  },
  'darkness-over-moonlight-peaks': {
    title: 'Dunkelheit über Moonlight Peaks',
    summary: 'Gemeldet über Neoseekers Quest-Log-Transkription als früher Hauptgeschichte-Beat. Konkrete Ziele sind hier noch nicht unabhängig im Detail bestätigt.',
  },
  'a-bridge-too-far': {
    title: 'A Bridge Too Far',
    summary: 'Bestätigt über einen dedizierten Walkthrough (Output Lag), abgeglichen mit Into Indie Games und Bonus Action: Fiona, eine Hexe in Moonlit Pines, verfluchte die Brücke zu Orlocks Seite der Stadt, nachdem er einen groben Witz über sie in der Bar gemacht hatte. Sprich mit Fiona, um das zu erfahren, finde dann Orlock im The Broken Lamp (er trinkt dort meistens) und biete an, seine Zeche zu bezahlen \u2014 350 Gold \u2014 damit er sich entschuldigt. Mina, in Coffee and Coffins, gibt dir die 350 Gold als Geschenk, damit du nicht dein eigenes Geld ausgeben musst. Bezahle Samael (den Barkeeper) die Zeche, dann bring Orlock zu Fionas Haus für die Entschuldigungs-Zwischensequenz. Fiona offenbart dann, dass sie den Fluch nicht allein aufheben kann und drei Hexen braucht \u2014 Noel, Sabrina und Luna \u2014 die überall in der Stadt zu finden sind. Rekrutiere alle drei und kehre zur Brücke zurück, um das Fluch-Aufhebungs-Ritual auszulösen.',
    reward: 'Brücke freigegeben \u2014 schaltet den Friedhof und Misty Shores frei, plus eine Errungenschaft',
  },
  'tension-in-the-crest-garden': {
    title: 'Spannung im Crest Garden',
    unlock: 'Schließe "A Bridge Too Far" ab, warte dann bis zum nächsten Tag',
    summary: 'Bestätigt über Neoseekers Quest-Log: dies ist der direkte Folge-Beat, nachdem der Brückenfluch aufgehoben wurde, zentriert um ein Mysterium am Crest Garden.',
    reward: 'Keine direkte Gegenstandsbelohnung \u2014 schaltet die Folgequest "A Croak and a Crest" frei',
  },
  'the-quest-for-mana': {
    title: 'The Quest for Mana',
    unlock: 'Schließe "The Magic of Crops" ab, warte 1 Tag, betrete die Stadt, um "A Mayor\u2019s Burden" auszulösen, warte dann 2 Tage und lies Sabrinas Brief',
    summary: 'Bestätigt über Neoseekers Quest-Log-Transkription: dies ist die Quest-Kette, die zu deiner ersten echten Magie-Infrastruktur führt.',
  },
  'building-a-mana-extractor': {
    title: 'Building a Mana Extractor',
    unlock: 'Schließe "The Quest for Mana" ab, warte dann 2 Tage',
    summary: 'Bestätigt: die direkte Folgequest zu The Quest for Mana.',
    reward: 'Mana-Essenz und der Mana-Extraktor-Bauplan',
  },
  'the-dinner-party': {
    title: 'The Dinner Party',
    summary: 'Bestätigt über Neoseekers Quest-Log: eine gesellschaftliche Stadt-Event-Quest.',
    reward: 'Cat Form (Hellkitten-Gestaltwandlung freigeschaltet)',
  },
  'mend-it-with-magic': {
    title: 'Mend it with Magic / A Touch of Magic',
    unlock: 'Schließe "Mend it with Magic" ab, warte 2 Tage und lies Fionas Brief',
    summary: 'Bestätigt über Neoseekers Quest-Log-Transkription als magiefokussiertes Folgequest-Paar.',
  },
  'town-hall-drama': {
    title: 'Dinner with the Parents / Town Hall Drama',
    summary: 'Bestätigt über Neoseekers Quest-Log: Stadt- und familienfokussierte Story-Beats.',
  },
  'the-plastic-chairs': {
    title: 'The Plastic Chairs',
    summary: 'Bestätigt über Neoseekers Quest-Log-Transkription.',
    reward: '4 Ingwertee',
  },
  'a-family-reunion': {
    title: 'A Family Reunion',
    summary: 'Bestätigt über Neoseekers Quest-Log als familienfokussierter Story-Beat.',
  },
  'the-mermaids-wish': {
    title: 'The Mermaid\u2019s Wish',
    summary: 'Bestätigt über Neoseekers Quest-Log: der Abschluss dieser Quest zusammen mit "A Touch of Magic" ist Voraussetzung für "The Rehearsal Dinner".',
    reward: 'Aqua-Form (Meerjungfrauen-Gestaltwandlung freigeschaltet)',
  },
  'the-rehearsal-dinner': {
    title: 'The Rehearsal Dinner',
    unlock: 'Schließe "The Mermaid\u2019s Wish" und "A Touch of Magic" ab, warte 1 Tag und lies die Dinner-Einladung',
    summary: 'Bestätigt über Neoseekers Quest-Log-Transkription \u2014 der Beginn der Hochzeits-Story-Beats des Spiels.',
  },
  'kims-invite': {
    title: 'Kim\u2019s Invite',
    summary: 'Bestätigt über Neoseekers Quest-Log als Teil des Hochzeits-Handlungsbogens.',
  },
  'brides-attendant-duty': {
    title: 'Bride\u2019s Attendant Duty',
    summary: 'Bestätigt über Neoseekers Quest-Log als Teil des Hochzeits-Handlungsbogens.',
  },
  'unfinished-business': {
    title: 'Unfinished Business',
    summary: 'Bestätigt über Neoseekers Quest-Log als derzeit letzter dokumentierter Beat des Hochzeits-Handlungsbogens. Spätere Story-Inhalte könnten darüber hinausgehen \u2014 wir aktualisieren dies, sobald bestätigt.',
  },
  'orlocks-wine-scheme': {
    title: 'Orlocks Weinplan (Blood Wine)',
    summary: 'Bestätigt über Bonus Action, abgeglichen mit Into Indie Games: Gleich nach der Ankunft findest du Orlock, einen verkaterten Vampir, schlafend auf deinem Rasen \u2014 stupse ihn an statt Wasser über ihn zu gießen, für die bessere Dialogoption. Er gibt dir Blood-Grapes-Samen und bittet dich, ihm Rot-/Blutwein zu machen. Sobald du ihn gemacht hast und ihn zur Entschuldigung bei Fiona drängst, schickt er dich los, um seine 350-Gold-Zeche bei Samael zu begleichen.',
    reward: 'Blutwein herstellen; Orlock zur Entschuldigung bewegen, 350-Gold-Schuld bei Samael begleichen; führt zu "A Bridge Too Far"',
  },
  'a-croak-and-a-crest': {
    title: 'A Croak and a Crest',
    unlock: 'Schließe "Tension in the Crest Garden" ab',
    summary: 'Bestätigt über Neoseekers Quest-Log-Transkription als direkte Folgequest des Crest-Garden-Mysteriums.',
    reward: 'Platziert das Logan-Wappen im Crest Garden und zählt zu Wappen-Errungenschaften',
  },
  'a-missing-moon': {
    title: 'A Missing Moon',
    summary: 'Bestätigt über Neoseekers Quest-Log-Transkription als mittlerer Story-Beat, der auf die Mana-Extraktor-Kette folgt und zur Ambrosia-Familienkrise führt.',
  },
  'the-ambrosia-crisis': {
    title: 'The Ambrosia Crisis',
    unlock: 'Schließe "Master of the Night" ab, warte 2 Tage und lies den Ambrosia-Anwesen-Brief',
    summary: 'Bestätigt über Neoseekers Quest-Log-Transkription: ein Familienkrisen-Story-Beat für die Vampirfamilie Ambrosia, freigeschaltet nach Abschluss von "Master of the Night" und einer kurzen Wartezeit auf einen Brief.',
  },
};
