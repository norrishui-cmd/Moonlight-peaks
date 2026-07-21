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
  'howling-marshes': {
    title: 'Howling Marshes', dek: 'Direkt nördlich der Stadt und östlich von Moonlit Pines \u2014 zwei bestätigte Eingänge, erntbare Sugarbone und Blumen, sowie das Haus der Familie Logan.',
    body: [
      'Bestätigt durch mehrere Quellen der Launch-Woche: Howling Marshes liegt direkt nördlich der Hauptstadt und östlich von Moonlit Pines.',
      'Zwei Eingänge sind bestätigt: einer direkt östlich von Lunas Saatgutstand in Moonlit Pines, der andere direkt östlich des Rathauses. Du wirst hierher geschickt im Rahmen der Story-Quest "Spannungen im Wappengarten".',
      'Bestätigte Erntbares hier sind Sugarbone und mehrere Blumen \u2014 es lohnt sich, sie an einer Kochstation oder einem Trockengestell zu verarbeiten, statt sie roh zu verkaufen.',
      'Das Haus der Familie Logan befindet sich ebenfalls hier, zusammen mit einer Gruft, die beim ersten Besuch nicht zugänglich ist, und einem nördlichen Bereich, der ebenfalls noch nicht erreichbar ist \u2014 beides wahrscheinlich an spätere Quests gebunden.',
    ],
    related: [{ label: 'Alle Wahrzeichen', href: '/locations/landmarks' }, { label: 'Familie Logan', href: '/families' }, { label: 'Die Stadt', href: '/locations/town' }],
    faq: [
      { q: 'Wo liegen die Howling Marshes in Moonlight Peaks?', a: 'Bestätigt: direkt nördlich der Hauptstadt und östlich von Moonlit Pines. Es gibt zwei Eingänge \u2014 einen direkt östlich von Lunas Saatgutstand in Moonlit Pines, den anderen direkt östlich des Rathauses.' },
      { q: 'Wie schaltet man Howling Marshes frei?', a: 'Du wirst im Rahmen der Story-Quest "Spannungen im Wappengarten" hierher geschickt \u2014 es ist nicht durch ein separates Freischalten gesperrt.' },
      { q: 'Was kann man in Howling Marshes ernten?', a: 'Bestätigte Erntbares umfasst Sugarbone und mehrere Blumen. Sie lohnen sich, an einer Kochstation oder einem Trockengestell verarbeitet zu werden, statt roh verkauft zu werden.' },
    ],
  },
  'twilight-catacombs': {
    title: 'Zwielicht-Katakomben', dek: 'Ein verschlossenes unterirdisches Tunnelnetz, das die Gruft, die Kristallhöhle, den Friedhof von Misty Shores, Luna Bay und Howling Marshes verbindet, freigeschaltet durch Spenden ans Museum.',
    body: [
      'Bestätigt: Die Zwielicht-Katakomben sind ein verschlossenes, unterirdisches Tunnelnetz mit über die Karte verstreuten Ein- und Ausgängen, statt eines einzelnen in sich geschlossenen Dungeons. Türen findet man in der Gruft (wo Viktor sich aufhält) und auf dem Friedhof von Misty Shores; die Interaktion vor dem Freischalten zeigt nur, dass sie "von der anderen Seite verschlossen" sind, ohne zu erklären, wie man sie öffnet.',
      'Bestätigt: Der Freischalt-Weg führt über das Museum, nicht über ein eigenständiges Schlüsselobjekt, das man durch Erkunden findet. Erreiche 25% Gesamtfortschritt bei den Museumsspenden, und Jada gibt dir den Dracula-Siegelschlüssel. Zeige diesen Schlüssel Viktor in der Gruft, um die Quest "Ein Schlüssel zur Tiefe" auszulösen und die Katakomben zu öffnen.',
      'Bestätigt: Einmal drinnen verbindet das Tunnelnetz mehrere unterirdische und oberirdische Bereiche des Spiels über blaue Druckplatten \u2014 eine führt zu einer eingestürzten Tür in der Kristallhöhle, eine andere zum Katakomben-Eingang auf dem Friedhof von Misty Shores, eine weitere nördlich am Fluss zu einer eingestürzten Tür in Luna Bay, und eine östlich zum Katakomben-Eingang in Howling Marshes.',
      'Berichtet von einem Walkthrough: Nachdem man diese Verbindungen gefunden hat, bringt das Schlafen im Sarg und das Prüfen des Briefkastens am nächsten Tag einen Brief von Samael. Der Besuch bei ihm in der Zerbrochenen Laterne schaltet einen weiteren Eingang frei.',
    ],
    related: [{ label: 'Kristallhöhle', href: '/locations/crystal-cave' }, { label: 'Die Minen', href: '/locations/mines' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Museum', href: '/locations/silverveil-museum' }, { label: 'Viktor', href: '/characters/viktor-dracula' }, { label: 'Samael', href: '/characters/samael' }],
    faq: [
      { q: 'Wie schaltet man die Zwielicht-Katakomben in Moonlight Peaks frei?', a: 'Bestätigt: Erreiche 25% Fortschritt bei den Museumsspenden, um den Dracula-Siegelschlüssel von Jada zu erhalten, zeige ihn dann Viktor in der Gruft, um die Quest "Ein Schlüssel zur Tiefe" zu starten, die die Katakomben öffnet.' },
      { q: 'Wo sind die Eingänge zu den Zwielicht-Katakomben in Moonlight Peaks?', a: 'Bestätigte Eingänge sind in der Gruft (Viktors Ort) und dem Friedhof von Misty Shores. Berichtet von einem Walkthrough: interne Druckplatten verbinden auch zur Kristallhöhle, Luna Bay und Howling Marshes, sobald man drinnen ist.' },
      { q: 'Was machen die blauen Druckplatten in den Zwielicht-Katakomben?', a: 'Berichtet von einem Walkthrough: Das Betreten jeder einzelnen öffnet eine Abkürzungsverbindung zu einer anderen eingestürzten Tür an anderer Stelle der Karte \u2014 Kristallhöhle, der Friedhof von Misty Shores, Luna Bay und Howling Marshes \u2014 und macht die Katakomben zu einem Knotenpunkt, der Reisen zwischen diesen Bereichen verkürzt.' },
    ],
  },
  'crest-garden': {
    title: 'Wappengarten', dek: 'Ein Stadtgarten neben dem Rathaus, der die Wappen aller sieben Familien zeigt, sobald du sie durch die Hauptstory freischaltest.',
    body: [
      'Bestätigt durch das offizielle Wiki: Der Wappengarten liegt neben dem Rathaus und zeigt die Wappen jeder der sieben Familien von Moonlight Peaks, sobald sie durch den Story-Fortschritt freigeschaltet werden \u2014 ein visueller Tracker dafür, wie weit du die zentralen Familien-Storylines des Spiels vorangebracht hast.',
      'Berichtet von einem Walkthrough: Das Wappen der Familie Logan geht speziell im Verlauf verloren, was dich auf einen Beschaffungs-Quest-Umweg schickt \u2014 Dragan verweist dich zur Zerbrochenen Laterne für Informationen, was zu den Howling Marshes führt, wo sich herausstellt, dass Yabbis das Wappen gegessen hat und einen Kupferbarren im Austausch dafür will.',
      'Berichtet von einem Walkthrough: Die letzten beiden Wappen, die sich füllen, gehören den beiden Vampirfamilien, Ambrosia und Dracula. Orlock bittet um Crafting-Materialien (raffinierter Stein, Goldbarren und Glas) für das Ambrosia-Wappen, während die Dracula-Wappen-Quest als der emotionale Abschluss der Hauptstory beschrieben wird, ausgelöst durch einen Brief einige Tage nach dem Freischalten der Fledermaus-Verwandlung.',
    ],
    related: [{ label: 'Rathaus', href: '/locations/town-hall' }, { label: 'Familien', href: '/families' }, { label: 'Howling Marshes', href: '/locations/howling-marshes' }, { label: 'Dragan', href: '/characters/dragan' }, { label: 'Yabbis', href: '/characters/yabbis' }, { label: 'Orlock', href: '/characters/orlock' }],
    faq: [
      { q: 'Wo ist der Wappengarten in Moonlight Peaks?', a: 'Bestätigt durch das offizielle Wiki: Er liegt neben dem Rathaus.' },
      { q: 'Was macht der Wappengarten in Moonlight Peaks?', a: 'Bestätigt: Er zeigt die Wappen aller sieben Familien der Stadt, die eines nach dem anderen freigeschaltet werden, während du die Hauptstory jeder Familie vorantreibst.' },
      { q: 'Warum fehlt ein Familienwappen im Wappengarten?', a: 'Berichtet von einem Walkthrough: Mindestens ein Wappen (Logans) ist als kleiner Beschaffungs-Quest-Umweg geschrieben, statt automatisch freizuschalten \u2014 in diesem Fall hatte Yabbis es gegessen und wollte einen Kupferbarren zum Zurücktauschen.' },
      { q: 'Welche Wappen schalten sich zuletzt im Wappengarten frei?', a: 'Berichtet von einem Walkthrough: Die beiden Vampirfamilien-Wappen, Ambrosia und Dracula, füllen sich zuletzt, wobei die Dracula-Wappen-Quest als emotionaler Abschluss der Story beschrieben wird.' },
    ],
  },
  'moonlit-slopes': {
    title: 'Mondlichthänge', dek: 'Das Zuhause der Mondgöttin, bestätigt, dass es nach deiner ersten Einladung wieder verschlossen bleibt, bis die Fledermaus-Form freigeschaltet ist.',
    body: [
      'Bestätigt: Die Mondlichthänge sind das Zuhause der Mondgöttin, erreichbar nach Abschluss des Story-Bogens "Ein vermisster Mond", bei dem die Seher der Familie Khazan gleichzeitig in Trance fallen und der Mond vom Himmel verschwindet. Eine kurze Folgequest, "Der Mond am Himmel", lässt sie dich formell zu einem Besuch einladen.',
      'Bestätigt: Nach diesem ersten Besuch verschließen sich die Mondlichthänge wieder und bleiben unzugänglich, bis du die Fledermaus-Form durch die Quest "Meister der Nacht" freischaltest \u2014 wenn du also direkt nach dem Treffen mit der Mondgöttin nicht wieder hineinkommst, ist das zu erwarten und kein Fehler.',
    ],
    related: [{ label: 'Gestaltwandlung', href: '/shapeshifting' }, { label: 'Mondgöttin', href: '/characters/moon-goddess' }, { label: 'Quests', href: '/quests' }],
    faq: [
      { q: 'Wo trifft man die Mondgöttin in Moonlight Peaks?', a: 'Bestätigt: An den Mondlichthängen, nach Abschluss von "Ein vermisster Mond" und der kurzen Folgequest "Der Mond am Himmel", bei der sie dich formell einlädt.' },
      { q: 'Warum kann ich nicht zu den Mondlichthängen zurück, nachdem ich sie einmal besucht habe?', a: 'Bestätigt: Der Bereich verschließt sich nach deinem ersten Besuch wieder und öffnet sich erst wieder, wenn du die Fledermaus-Form über die Quest "Meister der Nacht" freischaltest \u2014 das ist zu erwarten, kein Fehler.' },
    ],
  },
  'midnight-market': {
    title: 'Mitternachtsmarkt', dek: 'Ein nur am Wochenende stattfindender Markt in der Stadt, der Tierhüte, Zutaten für Tränke und andere Artikel verkauft, die unter der Woche nicht erhältlich sind.',
    body: [
      'Bestätigt durch Community-Berichte: Der Mitternachtsmarkt ist ein Wochenend-Event in der Stadt, das samstags und sonntags stattfindet, getrennt von den regulären Wochentagsläden des Spiels.',
      'Berichtet: Snek verkauft winzige Hüte für deine Farmtiere auf dem Mitternachtsmarkt, und Sabrina verkauft dort auch die Alchemistenkugel und andere trankbezogene Artikel \u2014 Artikel, die nicht bestätigt sind, während der regulären Wochentagsöffnungszeiten bei einem der beiden Charaktere erhältlich zu sein.',
    ],
    related: [{ label: 'Snek', href: '/characters/snek' }, { label: 'Sabrina', href: '/characters/sabrina' }, { label: 'Farmtiere', href: '/farm/animals' }, { label: 'Tränke', href: '/items/potions' }],
    faq: [
      { q: 'Wann hat der Mitternachtsmarkt in Moonlight Peaks geöffnet?', a: 'Berichtet von der Community: Nur samstags und sonntags, getrennt von den regulären Wochentags-Öffnungszeiten des Spiels.' },
      { q: 'Was kann man auf dem Mitternachtsmarkt in Moonlight Peaks kaufen?', a: 'Berichtet: Winzige Hüte für Farmtiere von Snek, sowie die Alchemistenkugel und andere trankbezogene Artikel von Sabrina \u2014 Artikel, die nicht bestätigt sind, unter der Woche verkauft zu werden.' },
    ],
  },
  'bloom-boutique': {
    title: 'Bloom Boutique', dek: 'Ein benannter Laden, der laut offizieller Wiki-Navigation bestätigt in der Stadt existiert, mit noch unbestätigten Details.',
    body: [
      'Bestätigt zu existieren durch die eigene Seitennavigation des offiziellen Wikis, gelistet neben den anderen benannten Läden des Spiels. Über den Namen hinaus haben wir noch keine unabhängig verifizierten Details darüber, was Bloom Boutique verkauft, wer ihn betreibt, oder die Öffnungszeiten \u2014 wir raten nicht auf ein Thema, nur weil der Name Blumen suggeriert.',
      'Angesichts des Namens und der bereits vorhandenen Blumengesteck- und Geschenksysteme des Spiels wäre ein Blumen- oder Deko-Fokus eine vernünftige Vermutung, aber wir kennzeichnen dies als erwartet statt bestätigt, bis eine Quelle es gegen das echte Spiel verifiziert.',
    ],
    related: [{ label: 'Läden', href: '/locations/shops' }, { label: 'Aktivitäten: Blumengestecke', href: '/activities/flower-arranging' }],
    faq: [
      { q: 'Was ist Bloom Boutique in Moonlight Peaks?', a: 'Bestätigt zu existieren als benannter Laden laut eigener Navigation des offiziellen Wikis. Was er verkauft und wer ihn betreibt, ist hier noch nicht unabhängig bestätigt \u2014 wir raten nicht auf Ladeninhalte nur aufgrund des Namens.' },
    ],
  },
};
