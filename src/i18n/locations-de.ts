// src/i18n/locations-de.ts
// German translations for locations.ts entries (title/dek/body/sections/faq text only).
// slug/tag/status/image/related href are shared from data/locations.ts.
export type LocationTrDe = {
  title: string; dek: string; body?: string[];
  sections?: { title: string; body: string }[];
  faq?: { q: string; a: string }[];
  related?: { label: string; href: string }[];
};

export const locationsDe: Record<string, LocationTrDe> = {
  town: {
    title: 'Die Stadt', dek: 'Die magische Bergstadt der sieben übernatürlichen Familien, in der du dein neues Leben als Vampir beginnst.',
    body: [
      'Moonlight Peaks spielt in einer kleinen, magischen Bergstadt, die seit Jahrhunderten sieben Familien beheimatet. Du kommst als junger Vampir an, der die Großstadt hinter sich lässt.',
      'Die Stadt vermischt gemütliches Dorfleben mit dem Übernatürlichen — deine Nachbarn sind Werwölfe, Hexen, Meerjungfrauen und mehr, und sie kennenzulernen ist ein großer Teil des Spiels.',
    ],
    faq: [
      { q: 'Wo spielt Moonlight Peaks?', a: 'In einer kleinen magischen Bergstadt, die Heimat von sieben übernatürlichen Familien ist.' },
      { q: 'Wer sind die Nachbarn in Moonlight Peaks?', a: 'Bestätigt: Werwölfe, Hexen, Meerjungfrauen und andere übernatürliche Bewohner über sieben Familien hinweg — sie kennenzulernen ist ein Kernbestandteil des Spiels.' },
    ],
  },
  'town-square': {
    title: 'Stadtplatz', dek: 'Das gemeinschaftliche Herz der Stadt, wo sich Bewohner versammeln und saisonale Events stattfinden.',
    body: [
      'Wie die meisten Cozy-Sim-Städte konzentriert sich Moonlight Peaks auf Gemeinschaftsräume, in denen sich Bewohner täglich begegnen.',
      'Saisonale Feiern sind Teil des Stadtlebens — ein theatralischer Event-Gastgeber wurde gezeigt, wie er Versammlungen belebt. Das genaue Layout und welche Events hier stattfinden, sind zum Release bestätigt.',
    ],
  },
  'your-farm': {
    title: 'Dein Hof', dek: 'Der verlassene Familienhof, in den du ziehst und den du zu einem mondbeschienenen Hof wiederherstellst.',
    body: [
      'Dein Ausgangspunkt ist ein verlassener Familienhof, und ihn zu einem funktionierenden Hof wiederherzustellen ist das Rückgrat des Spiels.',
      'Du baust verzauberte Feldfrüchte und leuchtende Blumen an und züchtest magisches Vieh wie den Draculamb — alles nachts gepflegt, da du bei Sonnenaufgang in deinen Sarg zurückkehrst.',
      'Bestätigt: Du benennst deinen eigenen Hof während der Charaktererstellung (zusammen mit deinem Hellkitten-Haustier) — es gibt keinen einzelnen festen "offiziellen" Hofnamen, da es ein eigener Name ist, den du selbst wählst. Vorab durchgesickerte Dateien erwähnten einen internen Arbeitsnamen, "the Plot", aber das ist ein entwicklerseitiges Label, nicht der Name, den du im Spiel siehst oder wählst.',
    ],
    faq: [
      { q: 'Bewirtschaftet man in Moonlight Peaks tagsüber den Hof?', a: 'Nein — du bewirtschaftest ihn nachts und kehrst bei Sonnenaufgang in deinen Sarg zurück.' },
      { q: 'Wie heißt dein Hof in Moonlight Peaks?', a: 'Es gibt keinen einzelnen festen Namen — bestätigt: Du wählst deinen eigenen Hofnamen während der Charaktererstellung, genau wie du deinen Charakter und dein Hellkitten-Haustier benennst.' },
    ],
  },
  'your-cottage': {
    title: 'Dein Häuschen', dek: 'Dein anpassbares gotisches Zuhause, das du nach deinem Geschmack dekorierst und einrichtest.',
    body: [
      'Du wohnst in einem gotischen Häuschen, das du zu deinem eigenen machen kannst. Dekorieren — Möbel und Deko platzieren und arrangieren — ist eine der Kernaktivitäten für Gemütlichkeit.',
      'Welche Räume, Möbelsets und Anpassungsoptionen genau verfügbar sind, wird beim Release des vollständigen Spiels bestätigt.',
    ],
  },
  forest: {
    title: 'Der Wald', dek: 'Die Wälder rund um die Stadt, wo du nach Einbruch der Dunkelheit sammelst.',
    body: [
      'Sammeln im Wald ist eine der bestätigten Aktivitäten des Spiels, erwarte also saisonale Funde zwischen den Bäumen am Stadtrand.',
      'Die genauen Sammelobjekte und etwaige Wald-Landmarken werden bestätigt, sobald das vollständige Spiel erscheint.',
    ],
  },
  lake: {
    title: 'Silverveil-See', dek: 'Der bestätigte See der Stadt, Heimat des Angelns und der Meerjungfrauenfamilie.',
    body: [
      'Bestätigter Name: Silverveil-See. Wasserbereiche unterstützen Angeln, eine der in der Demo vorgestellten Aktivitäten, und die Meerjungfrauen der Stadt (die Hosu-Familie) sind mit dem Wasser verbunden.',
      'Benannte Fische und spezifische Angelplätze sind noch nicht bequellt — siehe den Angel-Guide für das bisher Bestätigte.',
    ],
  },
  pier: {
    title: 'Der Pier', dek: 'Ein Ort über dem Wasser zum Angeln und für ruhige Momente.',
    body: [
      'Angelgewässer in Cozy-Sims umfassen normalerweise einen Pier oder Steg zum Auswerfen.',
      'Ob Moonlight Peaks einen bestimmten Pier benennt, wird zum Release bestätigt — behandle dies vorerst als Teil des Angelgebiets am See.',
    ],
  },
  mines: {
    title: 'Höhle des Echos & Minen', dek: 'Wie man die Höhle des Echos freischaltet, wo man Kupfer und Eisen findet, und die häufigsten Fortschrittsblocker.',
    sections: [
      { title: 'Wie man die Höhle des Echos freischaltet', body: 'Bestätigt: Die Höhle des Echos liegt unten links im Bereich Misty Shores, westlich von Orlocks Anwesen. Sie ist zunächst gesperrt und öffnet sich, sobald du die Quest "A Bridge Too Far" abschließt, die das Ambrosia-Anwesen und den umliegenden Misty-Shores-Bereich wieder öffnet.' },
      { title: 'Warum die Höhle des Echos noch gesperrt ist', body: 'Wenn du sie noch nicht erreichen kannst, ist die Quest — nicht ein fehlender Schlüsselgegenstand oder Ladenkauf — fast immer der eigentliche Blocker. Community-berichtet: Der Bereich ist durch eine Story-Fehde zwischen Orlock und Fiona über eine angeblich verfluchte Brücke gesperrt.' },
      { title: 'Wie "A Bridge Too Far" mit dem Fortschritt zusammenhängt', body: 'Siehe den vollständigen "A Bridge Too Far"-Quest-Guide für Voraussetzungen und Schritte. Kurz gesagt: Schließe zuerst "Orlocks Weinplan" ab, sprich dann mit den Zauberern der Stadt und kehre zur Brücke zurück, um die Fehde/den Fluch aufzuheben und diesen Bereich zu öffnen.' },
      { title: 'Wo man Kupfererz findet', body: 'Community-berichtet: Einmal drinnen sieht Kupfererz aus wie gewöhnlicher Fels mit Kupferflecken, abgebaut mit einer Spitzhacke. Große Erzcluster können bis zu 6 Erz liefern statt 1 aus einem regulären Vorkommen. Stelle am Ofen mit 4 Kupfererz + 1 Holzkohle einen Kupferbarren her.' },
      { title: 'Wo man Eisenerz findet', body: 'Bestätigt als Ressource einer späteren Stufe im selben Minensystem, freigeschaltet, sobald die Story über die anfängliche Kupferstufe hinausgeht. Genauer Freischalt-Auslöser und Ort in der Höhle sind hier noch nicht unabhängig verifiziert.' },
      { title: 'Wann neue Erzarten freigeschaltet werden', body: 'Bestätigt: Der Erzzugang erfolgt gestaffelt statt auf einmal — Kupfererz ist zuerst verfügbar, Eisenerz und Golderz öffnen sich später, während du die Hauptgeschichte voranbringst, nicht sofort beim Betreten der Höhle.' },
      { title: 'Häufige Probleme beim Minenfortschritt', body: 'Wenn dir Kupfer fehlt, prüfe zuerst "A Bridge Too Far", statt intensiver in der Höhle zu suchen. Wenn deine Spitzhacke ein Vorkommen nicht abbauen kann, braucht sie wahrscheinlich ein Stufen-Upgrade am Howling Hammer (Ridges Laden), bevor sie diese Erzart abbauen kann.' },
      { title: 'Gibt es Kampf in den Minen?', body: 'Nein — bestätigt gibt es nirgendwo in Moonlight Peaks Kampf, einschließlich der Minen, sodass das Erkunden unter Tage friedlich bleibt.' },
    ],
    faq: [
      { q: 'Gibt es Kampf in den Minen?', a: 'Nein — Vorschauen bestätigen, dass es nirgendwo in Moonlight Peaks Kampf gibt, einschließlich der Minen.' },
      { q: 'Warum finde ich kein Kupfererz in den Minen?', a: 'Bestätigt: Kupfererz befindet sich in der Höhle des Echos, die sich erst nach Abschluss der Quest "A Bridge Too Far" öffnet — prüfe deinen Questfortschritt, bevor du annimmst, du hättest eine Abbaustelle übersehen.' },
    ],
  },
  graveyard: {
    title: 'Der Friedhof', dek: 'Eine ruhige, mondbeschienene Ecke in Misty Shores, wo du Death triffst — bestätigt als Ambrosia-Friedhof.',
    body: [
      'Bestätigt zum Release: Dieser Friedhof liegt im Bereich Misty Shores, zunächst durch eine Brücke blockiert, die Fiona nach einem betrunkenen Streit mit Orlock verflucht hat. Der Abschluss der Quest "A Bridge Too Far" hebt den Fluch auf und öffnet den Zugang.',
      'Einmal drinnen, triffst du hier zum ersten Mal Death — sein bestätigtes Zuhause, "Deaths Hütte," ist in der Nähe.',
      'Vorab durchgesickerte Spieldateien nennen diesen Ort "Ambrosia-Friedhof," gepaart mit einem passenden "Ambrosia-Anwesen" — wahrscheinlich das Stammhaus der Vampirfamilie.',
    ],
    faq: [
      { q: 'Wie schaltet man den Friedhof in Moonlight Peaks frei?', a: 'Bestätigt: Schließe die Quest "A Bridge Too Far" ab, die einen Fluch aufhebt, den Fiona nach einem Streit mit Orlock auf die Brücke nach Misty Shores gelegt hat.' },
      { q: 'Wo trifft man Death in Moonlight Peaks?', a: 'Bestätigt: Im Ambrosia-Friedhof, sobald "A Bridge Too Far" Misty Shores freischaltet. Deaths bestätigtes Zuhause, "Deaths Hütte," ist in der Nähe.' },
    ],
  },
  shops: {
    title: 'Stadtläden', dek: 'Die benannten Läden in der Stadt — jetzt für die meisten mit Besitzern bestätigt.',
    body: [
      'Bestätigte Läden und Besitzer: der Howling Hammer ist Ridges Werkzeug-Upgrade-Laden (nur werktags geöffnet); The Broken Lamp ist Samaels Bar; Coffee & Coffins ist Mina und Evans Café; Third Eye Threads ist Aras\u2019 Schneiderei; und Webb of Wonders ist Sabrinas Laden, der den Alter-Ego-Elixier und Zaubersprüche verkauft — ein Wortspiel mit ihrem eigenen Familiennamen Webb.',
      'Vorab durchgesickerte Spieldateien nannten zusätzlich einen Midnight Market und eine Bloom Boutique — noch nicht gegen das Live-Spiel bestätigt.',
    ],
    faq: [
      { q: 'Welche Läden gibt es in Moonlight Peaks?', a: 'Bestätigt: der Howling Hammer (Werkzeug-Upgrades, Ridge), The Broken Lamp (Bar, Samael), Coffee & Coffins (Café, Mina und Evan), Third Eye Threads (Kleidung, Aras) und Webb of Wonders (Tränke und Kleidung, Sabrina).' },
      { q: 'Gibt es einen Midnight Market oder eine Bloom Boutique in Moonlight Peaks?', a: 'Noch nicht bestätigt — diese Namen erscheinen in vorab durchgesickerten Dateien, wurden aber noch nicht gegen das Live-Spiel verifiziert.' },
    ],
  },
  landmarks: {
    title: 'Landmarken & bemerkenswerte Orte', dek: 'Benannte Orte jenseits der Kernbereiche — die meisten jetzt mit echtem Kontext bestätigt.',
    sections: [
      { title: 'Misty Shores, Moonlit Pines, Pink Grove & Luna Bay', body: 'Bestätigt: Misty Shores ist der Bereich der Ambrosia-Familie, Heimat der Höhle des Echos (Erz) und des Friedhofs, wo du Death triffst, freigeschaltet über die Quest "A Bridge Too Far". Moonlit Pines ist, wo der Hexenzirkel seinen Sitz hat. Pink Grove ist Heimat des Liebesdämons Llemi, die meist nur während Festen dort erscheint. Luna Bay ist, wo die Meerjungfrauenfamilie Hosu lebt, die etwa ein Jahr nach Beginn der Geschichte ankommt.' },
      { title: 'Howling Marshes', body: 'Bestätigt über mehrere Launch-Week-Quellen: liegt direkt nördlich der Hauptstadt und östlich von Moonlit Pines. Zwei Eingänge sind bestätigt — einer direkt östlich von Lunas Samenstand in Moonlit Pines, der andere direkt östlich des Rathauses. Du wirst als Teil von "Tension in the Crest Garden" hierher geschickt. Bestätigte Erntbares hier umfasst Sugarbone und mehrere Blumen, die es wert sind, an einer Kochstation oder einem Trockengestell verarbeitet statt roh verkauft zu werden. Das Haus der Familie Logan ist ebenfalls hier, zusammen mit einer Gruft, die beim ersten Besuch unzugänglich ist, und einem nördlichen Bereich, der ebenfalls noch nicht erreichbar ist — beide wahrscheinlich an spätere Quests gebunden.' },
      { title: 'Moonlit Slopes, die Gruft, Moonlight Tower & Crest Garden', body: 'Auch über das offizielle Wiki des Spiels bestätigt: Moonlit Slopes, die Gruft, Moonlight Tower und der Crest Garden der Familie Khazan sind alle echte Orte. Vollständige Beschreibungen jedes einzelnen werden noch verifiziert.' },
    ],
  },
  'town-hall': {
    title: 'Rathaus', dek: 'Wo du dich als neuer Bewohner registrierst, geleitet von Bürgermeisterin Brook.',
    body: [
      'Bestätigt zum Release: Das Rathaus ist, wo du dich früh als neuer Bewohner registrierst und Bürgermeisterin Brook triffst (Oberhaupt der Werwolf-Familie Logan), die dir bei diesem Besuch Chester schenkt, die lebende Aufbewahrungstruhe.',
      'Das Schwarze Brett der Stadt — Albertus\u2019 Jobs, verwaltet von einer Eule namens Albertus — hat hier ebenfalls seinen Sitz und listet verfügbare Quests auf.',
    ],
    faq: [
      { q: 'Wer leitet das Rathaus in Moonlight Peaks?', a: 'Bestätigt: Bürgermeisterin Brook, Oberhaupt der Werwolf-Familie Logan, die dir Chester (eine lebende Aufbewahrungstruhe) schenkt, wenn du dich als neuer Bewohner registrierst.' },
      { q: 'Wo ist das Quest-Brett in Moonlight Peaks?', a: 'Bestätigt: Albertus\u2019 Jobs, ein Schwarzes Brett, verwaltet von einer Eule namens Albertus, hat seinen Sitz am Rathaus und listet verfügbare Quests auf.' },
    ],
  },
  'ambrosia-mansion': {
    title: 'Ambrosia-Anwesen', dek: 'Das Stammhaus der Vampirfamilie Ambrosia.',
    body: [
      'Bestätigt über das offizielle Wiki des Spiels: Das Ambrosia-Anwesen ist das Zuhause der Vampirfamilie Ambrosia, gepaart mit dem nahegelegenen Ambrosia-Friedhof, wo Death zu finden ist.',
    ],
    faq: [
      { q: 'Wer lebt im Ambrosia-Anwesen?', a: 'Bestätigt über das offizielle Wiki des Spiels: die Vampirfamilie Ambrosia, deren Stammhaus dies ist.' },
      { q: 'Ist das Ambrosia-Anwesen in der Nähe des Friedhofs?', a: 'Ja, bestätigt: Das Ambrosia-Anwesen ist mit dem nahegelegenen Ambrosia-Friedhof gepaart, wo Death zu finden ist.' },
    ],
  },
  'silverveil-museum': {
    title: 'Das Museum', dek: 'Ein spendenbasiertes Sammlungsgebäude, das sich mitten im ersten Jahr öffnet, sobald Persephone, Jada und Winston in die Stadt ziehen.',
    body: [
      'Bestätigt: Das Museum existiert nicht von Tag eins an — es öffnet sich, sobald sich ein Story-Strang um den Umzug von Persephone, Jada und Winston in die Stadt (das verlassene Haus am Pier) abspielt. Community-berichtet: Für viele Spieler liegt das etwa um den Beginn des Herbstes im ersten Jahr, abhängig von deinem eigenen Tempo bei frühen Quests.',
      'Bestätigt: Spenden funktioniert anders als das Reden mit einem Ladenbesitzer. Das Museum hat mehrere thematische Sammlungsräume, erreichbar über ein Portal im Hauptraum, und du spendest, indem du zur relevanten Sammlung gehst und mit einem Ausrufezeichen-Schild daneben interagierst — derselbe Symbolstil, der anderswo für ausstehende Story-Inhalte verwendet wird.',
      'Bestätigt: Gegenstände, die dir für eine Sammlung noch fehlen, zeigen ein kleines Museumssymbol in deinem Inventar, damit du nicht versehentlich etwas verkaufst oder benutzt, das du noch brauchst. Die Qualitätsanforderungen variieren je nach Sammlung — die landwirtschaftliche Sammlung verlangt speziell höherwertige (nicht beliebige) Feldfrüchte und Anbaugüter, es lohnt sich also, deine besten Ernten zu behalten, statt alles zu verkaufen.',
      'Hier noch nicht unabhängig bestätigt: die genaue Anzahl der Sammlungsräume, vollständige Spendenlisten pro Raum, und welche konkreten Belohnungen jede Sammlung freischaltet.',
    ],
    faq: [
      { q: 'Wann öffnet das Museum in Moonlight Peaks?', a: 'Bestätigt: nicht von Tag eins an — es öffnet sich, sobald Persephone, Jada und Winston in die Stadt ziehen, ein Story-Strang, der für viele Spieler etwa um den Beginn des Herbstes im ersten Jahr liegt.' },
      { q: 'Wie spendet man ans Museum?', a: 'Bestätigt: Gehe zum relevanten Sammlungsraum (erreichbar über ein Portal im Hauptraum) und interagiere mit einem Ausrufezeichen-Schild daneben, statt mit einem Ladenbesitzer zu reden.' },
    ],
  },
  'yoga-shack': {
    title: 'Yoga-Hütte', dek: 'Ein bestätigter Aktivitätsort für Yoga, einer der "dunklen Zerstreuungen" des Spiels.',
    body: [
      'Bestätigt über das offizielle Wiki des Spiels zu existieren, verbunden mit Yoga — einer der Hobby-Aktivitäten neben Angeln, Kochen und Nokturna.',
    ],
  },
  'khazan-temple': {
    title: 'Khazan-Tempel', dek: 'Ein Ort, verbunden mit der Seherfamilie Khazan.',
    body: [
      'Bestätigt über das offizielle Wiki des Spiels zu existieren. Weitere Details darüber, was hier passiert, sind noch nicht bequellt.',
    ],
  },
  'crystal-cave': {
    title: 'Kristallhöhle & Zwielicht-Katakomben', dek: 'Eine edelsteinhaltige Höhle, getrennt von der Höhle des Echos, neben Fionas Haus gelegen.',
    body: [
      'Bestätigt: Die Kristallhöhle ist ein eigenständiger unterirdischer Bereich, getrennt von der Höhle des Echos, links von Fionas Haus gelegen. Ein großer Felsbrocken blockiert den Eingang, bis du deine Spitzhacke auf mindestens Kupferstufe aufrüstest.',
      'Bestätigt: Im Inneren erscheinen Rosenquarz-Vorkommen großzügig, zusammen mit anderen Edelsteinen. Rosenquarz wird mit dem verzauberten Mörser (freigeschaltet, sobald du anfängst, Magie zu lernen) zu Pulver gemahlen und in mehreren Crafting-Rezepten und Quests verwendet.',
      'Bestätigt über das offizielle Wiki des Spiels: Neben der Höhle des Echos umfassen die Minen auch eine weitere Zone namens Zwielicht-Katakomben — was darauf hindeutet, dass die unterirdischen Bereiche in mehrere eigenständige Zonen statt einer Höhle unterteilt sind. Anderswo bestätigt: Hier werden auch Vampster (kleine Kreaturen, die sich in der Stadt und in den meisten Häusern verstecken) durch ein Loch getragen, um ihre Sammel-Questreihe abzuschließen, sobald frühe Story-Quests den Zugang zu den Katakomben freischalten.' ,
      'Um die Kristallhöhle selbst zu erreichen, muss Misty Shores bereits freigeschaltet sein (über die Quest "A Bridge Too Far"), da dort die Höhle des Echos und ihre Spitzhacken-Upgrades zu finden sind.',
    ],
    faq: [
      { q: 'Wo ist die Kristallhöhle in Moonlight Peaks?', a: 'Bestätigt: Es ist ein eigenständiger unterirdischer Bereich links von Fionas Haus, getrennt von der Höhle des Echos. Ein Felsbrocken blockiert den Eingang, bis deine Spitzhacke Kupferstufe erreicht.' },
      { q: 'Was bekommt man aus der Kristallhöhle?', a: 'Bestätigt: Rosenquarz-Vorkommen erscheinen großzügig zusammen mit anderen Edelsteinen. Rosenquarz wird mit dem verzauberten Mörser zu Pulver gemahlen und in mehreren Crafting-Rezepten und Quests verwendet.' },
    ],
  },
};
