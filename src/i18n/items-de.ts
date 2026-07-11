// src/i18n/items-de.ts
// German translations for all current item categories — banner title/dek (shown on /de/items) and
// full detail-page content (shown on /de/items/{slug}). Item/example names inside `examples` are
// kept in English (proper nouns / no verified official German localization exists for this game),
// matching the same principle used across the rest of the /de/ section.
export type ItemTranslationDe = {
  name: string;
  dek: string;
  summary: string;
  examples: string[];
};

export const itemsDe: Record<string, ItemTranslationDe> = {
  tools: {
    name: 'Werkzeuge',
    dek: 'Farm- und Alltagswerkzeuge zum Pflanzen, Gießen, Sammeln, Abbauen und für die Pflege deines Hofs.',
    summary: 'Bestätigtes Startset, erreichbar über das Werkzeugrad (auf der Switch: rechte Schultertaste gedrückt halten): Schaufel (es gibt keine separate Hacke — die Schaufel übernimmt diese Aufgabe), Gießkanne, Axt, Spitzhacke, Sense und ein zerbrochener Zauberstab. Angelrute und Netz (Insektennetz) werden separat über Charakter-Quests freigeschaltet statt gekauft, und Werkzeug-Upgrades laufen über einen einzigen Schmied, Ridge, in seinem Laden (meist "Howling Hammer" genannt).',
    examples: ['Schaufel (hackt auch — keine separate Hacke)', 'Gießkanne (3-stufiges Upgrade: 1.000 / 2.000 / 3.500 Gold, jede Stufe senkt den Wasserverbrauch pro Feld)', 'Axt (Upgrades verringern Hiebe zum Baumfällen, schalten stärkeres Holz frei)', 'Spitzhacke (Upgrades verringern Hiebe zum Gesteinsabbau, schalten größere Steine/Mineralien wie Kupfer, Eisen, Gold frei — bestätigt höchste Upgrade-Priorität)', 'Sense (Upgrades senken Energiekosten beim Gras schneiden)', 'Angelrute (einzelnes Premium-Upgrade: 3.500 Gold + 3 Goldbarren, verbessert Effizienz und Fanggröße; freigeschaltet über eine Wette mit Noel, nicht gekauft)', 'Das Netz / Insektennetz (fängt Insekten und Soul Blobs; freigeschaltet über Death nach der Quest "A Bridge Too Far")', 'Der Besen (ein Bewegungsgeschwindigkeits-Werkzeug)', 'Zauberstab (startet kaputt; wird über eine Quest-Kette mit Luna und Sabrina/Noel repariert, nicht im normalen Upgrade-Laden)'],
  },
  fertilizer: {
    name: 'Dünger',
    dek: 'Bestätigte Quelle: Deine Nutztiere produzieren Dünger als Nebenprodukt, zusammen mit Milch und Wolle, und er steigert die Erntequalität.',
    summary: 'Bestätigt durch Community-Tests: Dünger kommt von deinen Nutztieren als Nebenprodukt neben Milch und Wolle, und seine Verwendung steigert messbar die Erntequalität — es lohnt sich, Tiere gefüttert und zufrieden zu halten, selbst bevor man das Milch-/Woll-Einkommen mitrechnet. Futter und Premium-Futter (im Trog gelagert) sind der bestätigte Weg, Tiere über Nacht zu füttern, damit ihre Produkte beim Aufwachen bereitstehen.',
    examples: ['Von Tieren produzierter Dünger', 'Futter / Premium-Futter (Tierfutter)', 'Erntequalitäts-Booster'],
  },
  clothing: {
    name: 'Kleidung',
    dek: 'Bestätigt: Kleidungssets, Oberteile, Hosen/Röcke, Schuhe und Accessoires, jederzeit änderbar über einen Spiegel im Haus — getrennt vom Alter-Ego-Elixier, das Kleidung nicht beeinflusst.',
    summary: 'Bestätigt zum Release: Kleidung ist unterteilt in Outfit-Sets, Oberteile, Hosen/Röcke und Schuhe, plus eine separate Accessoire-Kategorie (Arme, Gesicht). Alles, was du bei der Charaktererstellung trägst, wird dauerhaft in deinem Kleiderschrank freigeschaltet, sodass du deinen Anfangs-Look nie neu kaufen musst. Neue Kleidung wird bei Aras in Third Eye Threads (dem Schneider der Khazan-Familie) gekauft. Kleidungswechsel funktionieren jederzeit über einen Spiegel im Haus — ein separater, kostenloser Mechanismus, getrennt vom Alter-Ego-Elixier (ein einmaliger 1.300-Gold-Trank von Sabrina bei Webb of Wonders, der Frisur, Haarfarbe, Hautton, Augenfarbe, Augenbrauen und Make-up ändert, aber ausdrücklich nicht Kleidung oder Accessoires betrifft).',
    examples: ['Outfit-Sets (z. B. Kleider, Latzhosen)', 'Oberteile', 'Hosen/Röcke', 'Schuhe', 'Accessoires — Arme', 'Accessoires — Gesicht', 'Start-Outfit aus der Charaktererstellung (dauerhaft im Kleiderschrank freigeschaltet)'],
  },
  fish: {
    name: 'Fische',
    dek: 'Eine bestätigte Fischsammlung von rund 22 Arten über mehrere Zonen, Qualitätsstufen und ein einprägsamer Weg zur ersten Angelrute.',
    summary: 'Bestätigt durch zwei unabhängige Quellen: Du triffst Noel innerhalb der ersten paar Spieltage am Fluss, und er fordert dich heraus, 3 verschiedene Fischarten vor ihm zu fangen — gewinne (es ist zeitlos, also leicht) und er gibt dir deine erste Angelrute plus eine Geldbelohnung. Die Sammlung umfasst rund 22 Arten, jede mit eigenem Grundverkaufswert und Energiewert, beide steigen bei 1-Stern- und 2-Stern-Qualität. Welche Fische erscheinen, hängt von Ort, Jahreszeit, Wetter und Tageszeit ab — ein Fisch, den du in einer Nacht nicht findest, wartet möglicherweise nur auf die richtigen Bedingungen.',
    examples: ['Seefische', 'Flussfische', 'Seltene/qualitätsgestufte Fische (Normal / 1-Stern / 2-Stern)', 'Kochzutaten'],
  },
  cooking: {
    name: 'Kochen',
    dek: 'Eine Kochstation von Anfang an, 16 bekannte Startrezepte und ein Timing-Minispiel, das bei höherer Qualität strenger wird.',
    summary: 'Bestätigt durch Bonus Action: Du hast von Beginn an eine Kochstation in deinem Starterhaus, zusammen mit 16 bereits bekannten Grundrezepten, sodass du sofort mit Zutaten kochen kannst. Zum Kochen interagierst du mit der Station, wählst ein Rezept mit vorhandenen Zutaten (farbig angezeigt), wählst eine Qualitätsstufe und absolvierst ein Timing-Minispiel — im richtigen Moment drücken, wobei höhere Qualitätsstufen präzisere Treffer verlangen. Weitere Rezepte findet man durch Erkunden und den Kauf von Rezeptbüchern, und laut einem Switch-2-Test tauchen manche Koch- und Deko-Rezepte einfach beim Graben an leuchtenden Wirbelstellen auf. Gute frühe Energie-Wiederherstellung: Violet Sashimi und Gazpacho-Eintopf/Suppe.',
    examples: ['Gekochte Gerichte', '16 Startrezepte (von Anfang an bekannt)', 'Fischgerichte', 'Ernte-basierte Gerichte'],
  },
  crafting: {
    name: 'Handwerk',
    dek: 'Materialien, Rezepte, Werkbank-Gegenstände und Hof-Upgrades — inklusive bestätigtem Dunkelholz, das in mehreren Deko-Rezepten verwendet wird.',
    summary: 'Handwerk ist eine zentrale Wiki-Kategorie, da Spieler nach Rezepten, Zutaten und Freischaltungen suchen. Bestätigt: Dunkelholz (Dark Wood) ist ein echtes Handwerksmaterial, gewonnen durch das Fällen übergroßer Baumstämme auf dem Hofgelände mit einer Kupferaxt (eine aufgerüstete Axtstufe, nicht die Anfangsaxt). Es wird in mehreren Deko-Rezepten verwendet, darunter ein Fellsessel (mit Hartholzbrettern und Stoff) und ein Sarg-Bücherregal (mit Brettern). Über Dunkelholz hinaus werden genaue Handwerksstationen, weitere Materialien und vollständige Rezeptlisten noch bestätigt statt geraten.',
    examples: ['Dunkelholz (aus Hofgelände-Stämmen, Kupferaxt)', 'Handwerksmaterialien', 'Werkbank-Rezepte', 'Nützliche Gegenstände', 'Upgrade-Komponenten'],
  },
  artifacts: {
    name: 'Artefakte',
    dek: 'Sammelbare Kuriositäten, wahrscheinlich verbunden mit Erkundung, Ruinen, Minen, museumsartigem Tracking oder Quests.',
    summary: 'Artefakt-Seiten sollen Komplettierungs-Spielern helfen zu verfolgen, was sie gefunden haben, wo jeder Gegenstand erscheint und ob er für Spenden, Quests, Geschenke oder Lore verwendet wird. Das genaue System ist hier noch nicht unabhängig bestätigt.',
    examples: ['Sammelbare Artefakte', 'Erkundungsfunde', 'Seltene Kuriositäten', 'Lore-Objekte'],
  },
  livestock: {
    name: 'Nutztiere',
    dek: 'Bestätigte Nutztiere, der Kaufablauf für die Scheune und Futterstufen.',
    summary: 'Bestätigt zum Release: Du brauchst eine Scheune, bevor du Tiere besitzen kannst — kaufe eine bei Ridge für 4.000 Gold plus Materialien. Nach dem Bau kaufst du Nutztiere bei Luna (nur die Tiere, die gerade vor ihrem Haus warten). Die Fütterung läuft über Futter (hergestellt an einem Veredler) und eine spätere, bessere Premium-Futter-Stufe.',
    examples: ['Cheeken (ein häufiges erstes Tier; mag Streicheln und Hüte)', 'Piggoat', 'Draculamb', 'Cowcula'],
  },
  potions: {
    name: 'Tränke',
    dek: 'Ein bestätigtes Kessel-System: Fiona lehrt dein erstes Rezept, Sabrina verkauft weitere, und das Brauen braucht nur Rezept, Zutaten und Zeit.',
    summary: 'Bestätigt durch Bonus Action: Du schaltest früh in der Geschichte einen Kessel frei, und Fiona bringt dir dein erstes Trankrezept bei. Danach führt Sabrina bei Webb of Wonders weitere Trankrezepte zum Kauf. Das Brauen selbst ist unkompliziert — wähle ein Rezept mit vorhandenen Zutaten, interagiere mit dem Kessel und warte, ähnlich wie Saft oder Wein Zeit zum Fertigwerden braucht, dann sammle das Ergebnis ein. Der Alter-Ego-Elixier (ändert Frisur, Haarfarbe, Hautton, Augenfarbe, Augenbrauen und Make-up) ist das klarste bestätigte Beispiel dafür, was ein Trank bewirken kann.',
    examples: ['Alter-Ego-Elixier', 'Fionas Startrezept', 'Bei Sabrina gekaufte Rezepte (Webb of Wonders)', 'Nützliche Tränke'],
  },
  mineables: {
    name: 'Abbaubare Rohstoffe',
    dek: 'Erze, Edelsteine und veredelbare Rohstoffe, unter Tage gesammelt ohne Kampf, plus ein magischer Spitzhacken-Zauber.',
    summary: 'Bestätigt: Bergbau in Moonlight Peaks hat keinen Kampf — du sammelst Erz und Kristalle aus Höhlen und Katakomben, um Ofen, Werkzeuge und Upgrades zu versorgen. Kupfererz findet sich speziell in der Höhle des Echos, freigeschaltet über "A Bridge Too Far". Rohmaterialien müssen an einer Veredelungsstation verarbeitet werden (Erz zu Barren, Stein zu veredeltem Stein), was Zeit braucht — Tipp: Veredler vor Nachtende befüllen, damit die Materialien beim Aufwachen bereitstehen. Bergbau liefert auch Baupläne für Möbel und Geräte, und das Graben an leuchtenden Kreisen auf der Karte gibt zufällige Belohnungen.',
    examples: ['Kupfererz (Höhle des Echos)', 'Barren (aus Erz veredelt)', 'Edelsteine und Kristalle', 'Bergbau-Baupläne'],
  },
  decorations: {
    name: 'Dekoration',
    dek: 'Möbel und Deko, bestätigt mit mehrteiligen Sets, mehreren Farbvarianten und einem magiebetriebenen Platzierungssystem.',
    summary: 'Bestätigt durch einen Test und einen First-Week-Guide: Ridge verkauft Möbel in thematischen Sets (z. B. ein Küchen- oder Schlafzimmer-Set) mit mehreren Farbvarianten, sodass ein Zimmer nicht Stück für Stück eingerichtet werden muss. Möbel sind zudem nach Stil gruppiert (z. B. Landhausküche versus modernerer Look). Eine bestätigte Zauberfähigkeit lässt dich Möbel und sogar kleine Objekte direkt schweben lassen und bewegen, statt sie ins Inventar aufzunehmen und andernorts zu platzieren — das vereinfacht Dekorieren und Hof-Umgestaltung. Jedes gefangene Tier oder jeder Fisch kann ebenfalls als Deko ausgestellt werden. Manche Deko-Teile stammen speziell aus Bergbau-Bauplänen, und Deko- (und Koch-)Rezepte finden sich auch beim Graben an leuchtenden Wirbelstellen.',
    examples: ['Möbelsets (Küche, Schlafzimmer usw.)', 'Mehrere Farbvarianten pro Teil', 'Ausgestellte Tiere/Fische', 'Deko aus Bauplänen'],
  },
};
