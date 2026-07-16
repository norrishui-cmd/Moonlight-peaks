// Translated content for the 6 highest-search-interest character profiles, chosen for this
// phase: the protagonist's father (huge search volume) plus the most-documented romance
// options. Base fields that don't need translating (img, colors, status, romanceable, type)
// still come from src/data/characters.ts — only text content lives here.

export type CharTranslation = {
  name: string;
  familyLabel: string;
  typeLabel: string;
  desc: string;
  knownInfo: string[];
  romanceYes: string;
  romanceNo: string;
  romanceTbc: string;
};

export const charTranslations: Record<'es' | 'ja' | 'zh' | 'zh-hant' | 'de' | 'fr' | 'ko', Record<string, CharTranslation>> = {
  de: {
    saga: {
      name: 'Saga', familyLabel: 'Werwolf', typeLabel: 'Werwolf',
      desc: 'Eine bestätigte Romanze-Option — Werwölfin, Tochter von Bürgermeister Brook, Schwester von Ludo und Nichte von Ridge. Ihre Energie verändert sich mit dem Vollmond.',
      knownInfo: [
        'Bestätigt: Tochter von Brook (Bürgermeister), Schwester von Ludo und Nichte von Ridge.',
        'Bestätigte Geschenke: liebt Weißwein; mag Rotwein, Bier und einzelne Blumen (keine Blumensträuße); mag keine Blumensträuße.',
        'Geburtstag bestätigt: Sommer 27. Wohnt auf einem Hausboot in der Nähe des Rathauses.',
      ],
      romanceYes: 'Saga ist eine bestätigte Romanze-Option. Dates werden ab Herzstufe 4 freigeschaltet, ein Heiratsantrag ab Herzstufe 8.',
      romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: 'Hexe', typeLabel: 'Hexe',
      desc: 'Als landwirtschaftlich orientierte Hexe berichtet — eine mögliche Quelle für frühe Zaubersprüche und Gartenwissen.',
      knownInfo: [
        'In Hands-on-Berichten als landwirtschaftlich orientierte Hexe vorgestellt.',
        'Wahrscheinlich eine Quelle für frühe Zaubersprüche und Gartenwissen.',
        'Details werden zum Release in der Live-Version bestätigt.',
      ],
      romanceYes: 'Luna wird als Romanze-Option gemeldet. Bevorzugte Geschenke und Herz-Events werden nach Bestätigung in der Live-Version ergänzt.',
      romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: 'Vampir', typeLabel: 'Vampir',
      desc: 'Als Oberhaupt einer Vampirfamilie gemeldet — eine altweltliche Präsenz in der Stadt.',
      knownInfo: [
        'Als Oberhaupt einer Vampirfamilie gemeldet.',
        'In Hands-on-Berichten als komische Figur dargestellt.',
        'Eine altweltliche Präsenz unter den Vampiren der Stadt.',
      ],
      romanceYes: 'Orlock wird als Romanze-Option gemeldet. Bevorzugte Geschenke und Herz-Events werden nach Bestätigung in der Live-Version ergänzt.',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: 'Werwolf', typeLabel: 'Werwolf',
      desc: 'Bürgermeister von Moonlight Peaks und Oberhaupt der Werwolf-Familie Logan. Keine Romanze-Option.',
      knownInfo: [
        'Bestätigt als Bürgermeister — zuständig für die Anmeldung im Rathaus und die Übergabe von Chester.',
        'Oberhaupt der Familie Logan. Vater von Saga und Ludo, Bruder von Ridge.',
        'Betreibt den Howling Hammer (Werkzeug-Upgrade-Laden), geöffnet Montag bis Freitag von 18 Uhr bis Mitternacht.',
      ],
      romanceYes: '', romanceNo: 'Brook ist keine bestätigte Romanze-Option.', romanceTbc: '',
    },
    'the-warlock': {
      name: 'Der Hexenmeister', familyLabel: 'Hexe', typeLabel: 'Hexe',
      desc: 'Ein selbstverliebter Hexenmeister aus dem Hands-on-Vorschau-Material, der durch die Stadt streift. Der richtige Name ist noch nicht bestätigt.',
      knownInfo: [
        'Ein selbstverliebter Hexenmeister aus dem Hands-on-Vorschau-Material.',
        'In dieser Vorschau unterbricht er ständig und macht der Spielfigur Komplimente.',
        'Der richtige Name im Spiel ist noch nicht bestätigt.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Ob dieser Hexenmeister eine Romanze-Option ist, ist noch nicht bestätigt — wird zum Release aktualisiert.',
    },
    mina: {
      name: 'Mina', familyLabel: 'Vampirfamilie (Ambrosia)', typeLabel: 'Vampir',
      desc: 'Eine fröhliche Vampirin, Tochter von Orlock. Betreibt zusammen mit ihrem Bruder Evan das Café "Coffee & Coffins" in der Stadt.',
      knownInfo: [
        'Bestätigt: Tochter von Orlock und Schwester von Evan. Gemeinsam betreiben sie "Coffee & Coffins".',
        'Berichten zufolge wollte Orlock das Café nach dem Weggang der Mutter schließen, doch Mina überzeugte ihn weiterzumachen.',
        'Backt gerne und tritt stets fröhlich auf.',
      ],
      romanceYes: 'Mina ist eine bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    sabrina: {
      name: 'Sabrina', familyLabel: 'Hexenfamilie (Webb)', typeLabel: 'Hexe',
      desc: 'Eine gotisch angehauchte Hexe der Familie Webb. Betreibt "Webb of Wonders" und verkauft den Alter-Ego-Elixier. Freigeistig und ärgert gerne ihre Cousine Fiona.',
      knownInfo: [
        'Bestätigt: betreibt "Webb of Wonders". Mitglied der Familie Webb, berichtet als Fionas Cousine.',
        'Verkauft den Alter-Ego-Elixier, mit dem sich das Aussehen der Spielfigur verändern lässt.',
      ],
      romanceYes: 'Sabrina ist eine bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    noel: {
      name: 'Noel', familyLabel: 'Hexenfamilie (Webb)', typeLabel: 'Sonstiges',
      desc: 'Der Schmied der Stadt und der Dandy der Familie Webb. Bruder von Fiona, nennt sich selbst "das Gesicht von Moonlight Peaks". Wirkt selbstbewusst, kämpft aber innerlich mit seinem Selbstbild.',
      knownInfo: [
        'Bestätigt: schenkt der Spielfigur nach einem Angel-Wettkampf um 250 Gold die erste Angelrute.',
        'Bestätigt: Bruder von Fiona aus der Familie Webb. Der Schmied der Stadt.',
        'Bestätigte Tiefe: hinter der selbstbewussten Fassade kämpft er mit echten Selbstbild-Problemen.',
      ],
      romanceYes: 'Noel ist eine bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    fiona: {
      name: 'Fiona', familyLabel: 'Hexenfamilie (Webb)', typeLabel: 'Hexe',
      desc: 'Oberhaupt der Familie Webb und Anführerin des örtlichen Hexenzirkels (Nachfolgerin ihrer Mutter Laveau, die auszog, um Vlad Dracula zu heiraten). Auch die Blumenhändlerin der Stadt. Kühl, streng und mit hohen Erwartungen an ihren Bruder Noel und ihre Cousinen.',
      knownInfo: [
        'Bestätigt: Oberhaupt der Familie Webb und des Hexenzirkels, Nachfolgerin von Laveau (der Mutter der Spielfigur).',
        'Gibt der Spielfigur früh im Farmleben eine Postboten-Quest.',
        'Bestätigte Quest-Details: Nach einem betrunkenen Streit soll sie die Brücke zu Orlocks Haus verflucht haben, die erst mit der Quest "A Bridge Too Far" wieder freigegeben wird und bis dahin die Region Misty Shores absperrt.',
      ],
      romanceYes: 'Fiona ist eine bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    evan: {
      name: 'Evan', familyLabel: 'Vampir (Ambrosia)', typeLabel: 'Vampir',
      desc: 'Ein ruhiger, distanzierter Vampir, der zusammen mit seiner Schwester Mina "Coffee & Coffins" führt; sein Vater Orlock drängt ihn, den Familiennamen zu übernehmen.',
      knownInfo: [
        'Bestätigt als Orlocks Sohn und Minas Bruder, Mitbetreiber des Stadtcafés.',
        'Zählt lieber Sterne, statt den Familiennamen zu übernehmen, den sein Vater ihm aufzwingen will.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    ridge: {
      name: 'Ridge', familyLabel: 'Werwolf (Logan)', typeLabel: 'Werwolf',
      desc: 'Der Zimmermann der Stadt — robust, verlässlich, pazifistisch, nutzt seine Werwolf-Stunden, um hochwertiges Holz zu suchen. Bürgermeisterin Brooks jüngerer Bruder.',
      knownInfo: [
        'Bestätigt als werwölfischer Zimmermann und Pazifist.',
        'Verkauft dir deinen ersten Barn (4.000 Gold + Materialien, 10x6 Fläche, 1 Nacht Bauzeit, Platz für 4 Tiere), erforderlich vor dem Kauf von Vieh bei Luna.',
        'Betreibt den Howling Hammer Werkzeug-Upgrade-Laden, geöffnet Montag–Freitag, 18–24 Uhr.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    jada: {
      name: 'Jada', familyLabel: 'Mensch (Henderson)', typeLabel: 'Mensch',
      desc: 'Eine energiegeladene Übernatürlich-Enthusiastin und Relikt-Sammlerin, die begeistert über Geschichte spricht — Persephones Nichte, Winstons Schwester.',
      knownInfo: [
        'Bestätigt als Teil der menschlichen Familie Henderson, zusammen mit Persephone und Winston angekommen.',
        'Berichtet als Relikt-Sammlerin und Geschichtsenthusiastin, im Gegensatz zu ihrem skeptischen Bruder Winston.',
        'Ihr atemloser, wirbelnder Gesprächsstil hat sie in der Stadt etwas berüchtigt gemacht.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    dragan: {
      name: 'Dragan', familyLabel: 'Seher (Khazan)', typeLabel: 'Seher',
      desc: 'Der älteste der Khazan-Seher-Geschwister — seine eigenen Vorhersagen liegen meist falsch, aber er ist besser bekannt als Erfinder des beliebten Kartenspiels Nokturna.',
      knownInfo: [
        'Bestätigt als ältestes Geschwister der Seherfamilie Khazan, vor Aras und Alina.',
        'Berichtet als Erfinder von Nokturna innerhalb der Spielwelt.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    alina: {
      name: 'Alina', familyLabel: 'Seherin (Khazan)', typeLabel: 'Seherin',
      desc: 'Die Rebellin der Familie Khazan — stur, feurig, kann Lügen nicht ausstehen, mit unkonventionellen Sehergaben und einer Vorliebe für den Schatten.',
      knownInfo: [
        'Berichtet als Teil der Seherfamilie Khazan — Draguns jüngeres Geschwister, zusammen mit Aras.',
        'Wohnt in einem eigenen Haus, was auf eine feste Bewohnerin statt einer Nebenfigur hindeutet.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    death: {
      name: 'Death', familyLabel: 'Ohne Familie', typeLabel: 'Sensenmann',
      desc: 'Der leibhaftige Sensenmann, im Urlaub in der Stadt, um sich zu entspannen — trockener Humor, pflegt den örtlichen Friedhof, sammelt sowohl Blumen als auch Seelen.',
      knownInfo: [
        'Bestätigt als Romanze-Option — kein Vorab-Gerücht mehr, wie es einst war.',
        'Wohnt in "Death\u2019s Shack" im Friedhofsbereich von Misty Shores.',
        'Bestätigte Freischaltkette: Spieler treffen ihn zweimal nach Freischaltung von Misty Shores (über die Quest "A Bridge Too Far"), bevor er das Insektennetz gibt.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    samael: {
      name: 'Samael', familyLabel: 'Vampir (Ambrosia)', typeLabel: 'Vampir',
      desc: 'Ein geheimnisvoller, grüblerischer Vampir der Familie Ambrosia, der seit Jahrhunderten die Stadtbar "The Broken Lamp" führt. Elviras Bruder, Orlocks Neffe.',
      knownInfo: [
        'Führt "The Broken Lamp", die Stadtbar, und ist Mitglied der Familie Ambrosia.',
        'Seine Romanze ist an den Story-Fortschritt gebunden und schaltet sich frei, sobald du Luna Bay erreichst und die Meerjungfrauenfamilie Hosu triffst.',
        'Bestätigt: Die Vorläufer-Quests "A Curious Passage" und "The Mysterious Bay" beinhalten das Heben eines umgestürzten Baumes, die Reparatur einer Brücke mit Ludo, und die Vorbereitung auf eine Hochzeit — mit einer Meerjungfrau namens Kim, die jedoch am Altar kalte Füße bekommt.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    elvira: {
      name: 'Elvira', familyLabel: 'Vampirin (Ambrosia)', typeLabel: 'Vampirin',
      desc: 'Samaels Schwester — eine künstlerische, ruhelose Vampirin, die ständig neue Nebenprojekte beginnt, sehr zum Ärger ihres Onkels Orlock.',
      knownInfo: [
        'Bestätigt als Samaels Schwester und Orlocks Nichte.',
        'Verbirgt eine zerbrechliche, künstlerische Seite, die angeblich nur Samael vollständig kennt.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    kim: {
      name: 'Kim', familyLabel: 'Meerjungfrau (Hosu)', typeLabel: 'Meerjungfrau',
      desc: 'Eine grenzenlos energiegeladene, fröhliche Meerjungfrau der Familie Hosu, die etwa ein Jahr nach Spielbeginn in der Stadt ankommt.',
      knownInfo: [
        'Bestätigt als Mitglied der Meerjungfrauenfamilie Hosu, Geschwister von Rei und Tae.',
        'Die Familie Hosu kommt etwa in der Mitte des ersten Jahres an und braucht Hilfe, um sich wieder in die Stadt einzugliedern, lebt zusammen in Luna Bay.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    ludo: {
      name: 'Ludo', familyLabel: 'Werwolf (Logan)', typeLabel: 'Werwolf',
      desc: 'Bürgermeisterin Brooks unbeschwertes Kind (Sagas Geschwister, Ridges Neffe/Nichte), der/die lieber schläft, als sich um irgendetwas zu kümmern.',
      knownInfo: [
        'Bestätigt als Kind von Bürgermeisterin Brook, Geschwister von Saga, Neffe/Nichte von Ridge.',
        'Betreibt einen Laden, der Werkzeug-Zauberstäbe verkauft (Spitzhacke, Aquaflux-Gießkanne, Baumversetzung), um Ausdauer bei Wiederholungsaufgaben zu sparen.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    tae: {
      name: 'Tae', familyLabel: 'Meermann (Hosu)', typeLabel: 'Meermann',
      desc: 'Ein umwerfender, bodenständiger Meermann der Familie Hosu, der stolz auf sein Aussehen ist und anderen gerne hilft, ihr Selbstvertrauen zu finden.',
      knownInfo: [
        'Bestätigt als Mitglied der Meerjungfrauenfamilie Hosu, Geschwister von Kim und Rei.',
        'Beschrieben als loyal und ermutigend.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    winston: {
      name: 'Winston', familyLabel: 'Mensch (Henderson)', typeLabel: 'Mensch',
      desc: 'Der Skeptiker der Stadt — widerwillig in einer übernatürlichen Stadt lebend und leicht zu erschrecken, aber sehr unterhaltsam, sobald er seine Deckung fallen lässt.',
      knownInfo: [
        'Bestätigt als Teil der menschlichen Familie Henderson, zusammen mit Persephone und Jada angekommen.',
        'Es war die Entscheidung seiner Familie, nach Moonlight Peaks zu ziehen, nicht seine eigene — er glaubt nicht an die übernatürliche Seite der Stadt.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    rei: {
      name: 'Rei', familyLabel: 'Meerjungfrau (Hosu)', typeLabel: 'Meerjungfrau',
      desc: 'Eine ruhige, schüchterne Meerjungfrau der Familie Hosu, besessen von der Umwelt, verbringt ihre Tage mit der Reinigung der Küste.',
      knownInfo: [
        'Bestätigt als Mitglied der Meerjungfrauenfamilie Hosu, Geschwister von Kim und Tae.',
        'Konzentriert sich auf Küstenreinigung und lehrt Einheimische, die Natur zu respektieren.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    aras: {
      name: 'Aras', familyLabel: 'Seher (Khazan)', typeLabel: 'Seher',
      desc: 'Der örtliche Schneider der Seherfamilie Khazan, betreibt "Third Eye Threads." Vermeidet es, seine eigenen Sehergaben zu nutzen, um seine Zukunft geheim zu halten.',
      knownInfo: [
        'Berichtet als Mitglied der Seherfamilie Khazan, betreibt den Schneiderladen "Third Eye Threads" — Draguns jüngeres Geschwister, zusammen mit Alina.',
        'Liebt Mode und gemütliche Gespräche.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    persephone: {
      name: 'Persephone', familyLabel: 'Mensch (Henderson)', typeLabel: 'Mensch',
      desc: 'Freigeistiges Oberhaupt der Familie Henderson — eine menschliche Tante, die sich um ihre Nichte Jada und ihren Neffen Winston kümmert, neu in der Stadt angekommen, mit einer Vorliebe für Astrologie und Kristalle.',
      knownInfo: [
        'Bestätigt als Oberhaupt der menschlichen Familie Henderson (Tante von Jada und Winston).',
        'Interessiert an Astrologie, Chakren, Auren und mystischen Themen — neu in der Stadt auf der Suche nach einem Neuanfang.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    llemi: {
      name: 'Llemi', familyLabel: 'Liebesdämon', typeLabel: 'Dämon',
      desc: 'Ein skurriler Liebesdämon, der sich von lokalem Drama und Chaos ernährt, lebt im Pink Grove und besucht die Stadt hauptsächlich während Festen.',
      knownInfo: [
        'Berichtet als Dämon-Bewohnerin des Pink Grove.',
        'Wird angeblich nur während Festen in der Stadt gesehen; ihr Herz zu gewinnen soll echten Aufwand erfordern.',
      ],
      romanceYes: 'Ja, bestätigte Romanze-Option.', romanceNo: '', romanceTbc: '',
    },
    logan: {
      name: 'Logan', familyLabel: 'Werwolf', typeLabel: 'Werwolf',
      desc: 'KORREKTUR: Mehrere Quellen nach dem Release bestätigen, dass "Logan" der Nachname der Werwolf-Familie ist, nicht der Vorname eines einzelnen Bewohners — frühere Berichte über einen "Werwolf-Bürgermeister Logan" bezogen sich tatsächlich auf Brook.',
      knownInfo: [
        'Korrektur: Logan ist der Familienname, dessen Oberhaupt Bürgermeisterin Brook ist, mit Ridge als jüngerem Bruder und Saga sowie Ludo als Kindern.',
        'Diese Seite bleibt als Weiterleitung bestehen, da andere Seiten noch hierher verlinken — siehe Brook, Ridge, Saga und Ludo für die echten Logan-Familienmitglieder.',
      ],
      romanceYes: '', romanceNo: 'Logan ist keine eigene Romanze-Option (siehe Korrektur oben).', romanceTbc: '',
    },
    'pumpkin-head': {
      name: 'Pumpkin Head', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Berichteter theatralischer Event-Gastgeber, der die Versammlungen der Stadt belebt.',
      knownInfo: [
        'Berichtet als theatralischer Event-Gastgeber, der bei Stadtversammlungen auftritt.',
        'Rolle und Details werden beim Release bestätigt.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Noch nicht bestätigt.',
    },
    jarvis: {
      name: 'Jarvis', familyLabel: 'Ohne Familie', typeLabel: 'Geist',
      desc: 'Einer der Geister der Stadt, zusammen mit dem Mitgeist Balthasar berichtet. Gehört zu keiner der sieben Familien, ähnlich wie Death.',
      knownInfo: [
        'Bestätigt als Geist-Bewohner, gehört zu keiner Familie (wie Death).',
        'Datamining-Dateien verweisen auch auf ein "Jarvis\u2019 Haus."',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Ob Jarvis eine Romanze-Option ist, ist noch nicht bestätigt.',
    },
    albertus: {
      name: 'Albertus', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Eine Eule, die das Schwarze Brett der Stadt betreibt — bestätigt als Quelle von "Albertus\u2019 Jobs", dem Brett, an dem Spieler verfügbare Quests/Aufgaben einsehen.',
      knownInfo: [
        'Bestätigt: Albertus ist eine Eule, und "Albertus\u2019 Jobs" ist das Schwarze Brett der Stadt für verfügbare Quests.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Ob Albertus eine Romanze-Option ist, ist noch nicht bestätigt.',
    },
    'viktor-dracula': {
      name: 'Viktor', familyLabel: 'Vampir (Ambrosia)', typeLabel: 'Sonstige',
      desc: 'Orlocks alter Onkel, der sich vor langer Zeit in eine Fledermaus verwandelte und nun in einer Gruft auf deinem Grundstück lebt. Keine Romanze-Option.',
      knownInfo: [
        'Bestätigt als Orlocks Onkel und Fledermaus-Begleitcharakter, gefunden in einer Gruft auf dem Grundstück der Spielfigur.',
        'Zu unterscheiden von sowohl Graf Dracula als auch Vlad.',
      ],
      romanceYes: '', romanceNo: 'Viktor ist keine Romanze-Option.', romanceTbc: '',
    },
    judge: {
      name: 'Judge', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Name über die offizielle Wiki-Navigation bestätigt; Rolle noch nicht dokumentiert.',
      knownInfo: ['Im offiziellen Wiki gelistet; noch keine weiteren Details bestätigt.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Noch nicht bestätigt.',
    },
    'skull-girl': {
      name: 'Skull Girl', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Name über die offizielle Wiki-Navigation bestätigt; Rolle noch nicht dokumentiert.',
      knownInfo: ['Im offiziellen Wiki gelistet; noch keine weiteren Details bestätigt.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Noch nicht bestätigt.',
    },
    balthasar: {
      name: 'Balthasar', familyLabel: 'Ohne Familie', typeLabel: 'Geist',
      desc: 'Ein Geist-Bewohner der Stadt, zusammen mit dem Mitgeist Jarvis genannt — keine Romanze-Option, und gehört zu keiner der sieben Familien (wie Death).',
      knownInfo: ['Bestätigt als einer der Geist-Charaktere der Stadt, gehört zu keiner Familie.'],
      romanceYes: '', romanceNo: 'Balthasar ist keine Romanze-Option.', romanceTbc: '',
    },
    chester: {
      name: 'Chester', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Eine lebende Aufbewahrungstruhe, geschenkt von Bürgermeisterin Brook während deiner Registrierung im Rathaus — lege Waren über Nacht hinein und wache mit dem Verkaufsgeld auf.',
      knownInfo: [
        'Bestätigt: erhalten von Brook bei deinem ersten Besuch im Rathaus.',
        'Funktioniert als dein Verkaufslager über Nacht.',
      ],
      romanceYes: '', romanceNo: 'Chester ist ein Gegenstand/Begleiter, keine Romanze-Option.', romanceTbc: '',
    },
    laveau: {
      name: 'Laveau', familyLabel: 'Hexe (Webb)', typeLabel: 'Hexe',
      desc: 'Die Mutter deiner Spielfigur — eine Hexe, die den Webb-Zirkel anführte, bevor sie ihn verließ, um ein Leben mit Vlad Dracula zu beginnen. Zentrale Erzählfigur, keine Romanze-Option.',
      knownInfo: [
        'Bestätigt als Mutter der Spielfigur und ehemalige Anführerin des Webb-Zirkels, Nachfolgerin ist Fiona.',
        'Ihre Ehe mit Vlad Dracula ist der Grund, warum deine Spielfigur ein gemischtes Vampir-/Hexen-Erbe hat.',
      ],
      romanceYes: '', romanceNo: 'Laveau ist keine Romanze-Option.', romanceTbc: '',
    },
    yabbis: {
      name: 'Yabbis', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Eine Haiku-sprechende Kröte, die Ludo Gesellschaft leistet — keine Romanze-Option.',
      knownInfo: ['Berichtet als Ludos Kröten-Begleiter, bekannt dafür, nur in Haikus zu sprechen.'],
      romanceYes: '', romanceNo: 'Yabbis ist keine Romanze-Option.', romanceTbc: '',
    },
    grim: {
      name: 'Grim', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Wahrscheinlich der Standard-/Vorname deines dreiäugigen Hellkitten-Begleithaustiers, das dich von Beginn des Spiels an begleitet (du kannst es benennen) — zu unterscheiden von der späteren eigenen Verwandlung in eine Hellkitten-Form.',
      knownInfo: [
        'Bestätigt: ein Hellkitten-Begleiter folgt der Spielfigur von Anfang an und kann benannt werden.',
        'Im offiziellen Wiki mit dem Hellkitten-Chibi-Symbol unter "Grim" gelistet — wahrscheinlich der Standardname dieses Haustiers, noch nicht vollständig bestätigt.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Grim ist wahrscheinlich ein Haustier, keine Romanze-Option — noch nicht vollständig bestätigt.',
    },
    'mr-deyes': {
      name: 'Mr. Deyes', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Name über die offizielle Wiki-Navigation bestätigt; Rolle noch nicht dokumentiert.',
      knownInfo: ['Im offiziellen Wiki gelistet; noch keine weiteren Details bestätigt.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Noch nicht bestätigt.',
    },
    hoodini: {
      name: 'Hoodini', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Name über die offizielle Wiki-Navigation bestätigt, gezeigt mit einem weißen Eulen-Symbol ähnlich dem von Albertus — möglicherweise ein verwandter Charakter oder eine Variante. Nicht bestätigt.',
      knownInfo: ['Im offiziellen Wiki mit einem Symbol im Stil einer weißen Eule gelistet; Verbindung zu Albertus noch nicht bestätigt.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Noch nicht bestätigt.',
    },
    larry: {
      name: 'Larry', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Bestätigt über die offizielle Wiki: Larry ist ein Vampster, der in Alinas Haus lebt und nicht zur Höhle des Echos zurückgebracht werden möchte — er bleibt bei ihr, statt sich den anderen sammelbaren Vampstern anzuschließen. Keine Romanze-Option.',
      knownInfo: ['Bestätigt: gefunden in Alinas Haus, bleibt dort, statt wie die anderen Vampster zurückgebracht zu werden.'],
      romanceYes: '', romanceNo: 'Larry ist keine Romanze-Option.', romanceTbc: '',
    },
    rachel: {
      name: 'Rachel', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Name über die offizielle Wiki-Navigation bestätigt, gezeigt mit dem Vampster-Symbol — wahrscheinlich ein individuell benannter Vampster statt einer Stadtbewohnerin. Keine Romanze-Option.',
      knownInfo: ['Im offiziellen Wiki mit dem Vampster-Symbol gelistet.'],
      romanceYes: '', romanceNo: 'Rachel ist keine Romanze-Option.', romanceTbc: '',
    },
    snek: {
      name: 'Snek', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Ein benannter Schlangencharakter, dessen Existenz über die offizielle Wiki-Navigation bestätigt ist. Keine Romanze-Option.',
      knownInfo: ['Im offiziellen Wiki mit einem Schlangen-Chibi-Symbol gelistet.'],
      romanceYes: '', romanceNo: 'Snek ist keine Romanze-Option.', romanceTbc: '',
    },
    jacques: {
      name: 'Jacques', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Ein benannter Schlangencharakter, dessen Existenz über die offizielle Wiki-Navigation bestätigt ist, zusammen mit Snek. Keine Romanze-Option.',
      knownInfo: ['Im offiziellen Wiki mit einem Schlangen-Chibi-Symbol gelistet.'],
      romanceYes: '', romanceNo: 'Jacques ist keine Romanze-Option.', romanceTbc: '',
    },
    'moon-goddess': {
      name: 'Mondgöttin', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Eine gottheitsartige Figur, deren Existenz über die offizielle Wiki-Navigation bestätigt ist; Rolle noch nicht dokumentiert.',
      knownInfo: [
        'Im offiziellen Wiki gelistet; wahrscheinlich mit der Nacht-/Mond-Mythologie des Spiels verbunden.',
        'Community-berichtet (japanischsprachige Berichterstattung): zusammen mit Brook als reiner Freundschafts-NPC eingestuft, keine Romanze-Option.',
      ],
      romanceYes: '', romanceNo: 'Community-berichtet als reiner Freundschafts-NPC.', romanceTbc: '',
    },
    'sun-god': {
      name: 'Sonnengott', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Eine gottheitsartige Figur, deren Existenz über die offizielle Wiki-Navigation bestätigt ist; Rolle noch nicht dokumentiert.',
      knownInfo: [
        'Im offiziellen Wiki gelistet; wahrscheinlich das Gegenstück der Mondgöttin in der Mythologie des Spiels.',
        'Community-berichtet (japanischsprachige Berichterstattung): zusammen mit Brook als reiner Freundschafts-NPC eingestuft, keine Romanze-Option.',
      ],
      romanceYes: '', romanceNo: 'Community-berichtet als reiner Freundschafts-NPC.', romanceTbc: '',
    },
    yasmin: {
      name: 'Yasmin', familyLabel: 'Unbekannt', typeLabel: 'Sonstige',
      desc: 'Name über die offizielle Wiki-Navigation bestätigt; Rolle noch nicht dokumentiert.',
      knownInfo: ['Im offiziellen Wiki gelistet; noch keine weiteren Details bestätigt.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Noch nicht bestätigt.',
    },
    'count-dracula': {
      name: 'Graf Dracula', familyLabel: 'Vampir', typeLabel: 'Vampir',
      desc: 'Dein Vater und die Legende der Stadt. Aus seinem Schatten herauszutreten ist der Ausgangspunkt der Geschichte — keine Romanze-Option, sondern eine zentrale Erzählfigur.',
      knownInfo: [
        'Dein Vater — der Umzug nach Moonlight Peaks wird als Schritt aus seinem langen Schatten dargestellt.',
        'Keine Romanze-Option, sondern eine zentrale Erzählfigur.',
        'Die Spielfigur beweist im Laufe der Geschichte, dass ein sanfteres, ruhigeres unsterbliches Leben möglich ist — etwas, das er bezweifelt.',
      ],
      romanceYes: '', romanceNo: 'Graf Dracula ist keine Romanze-Option.', romanceTbc: '',
    },
  },
  es: {
    'count-dracula': {
      name: 'Conde Drácula', familyLabel: 'Vampiro', typeLabel: 'Vampiro',
      desc: 'Tu padre y la leyenda del pueblo, cuya sombra buscas dejar atrás. Central para la historia — no es una opción de romance.',
      knownInfo: [
        'Es tu padre; la historia enmarca tu mudanza a Moonlight Peaks como un paso para salir de su larga sombra.',
        'Una figura central de la historia, no una opción de romance.',
        'La premisa te lleva a demostrar que una vida no-muerta más amable y gentil es posible — algo de lo que él es escéptico.',
      ],
      romanceYes: '', romanceNo: 'Conde Drácula no es una opción de romance.', romanceTbc: '',
    },
    saga: {
      name: 'Saga', familyLabel: 'Hombre lobo', typeLabel: 'Hombre lobo',
      desc: 'Una residente revelada por los desarrolladores; su energía cambia con la luna llena.',
      knownInfo: [
        'Una residente hombre lobo revelada por los desarrolladores.',
        'Su energía se describe como cambiante con la luna llena.',
        'Una reseña del Steam Next Fest la destacó entre el elenco.',
      ],
      romanceYes: 'Saga está confirmada como opción de romance. Las preferencias de regalo y los eventos de corazón se añadirán en cuanto se confirmen en el juego en vivo.',
      romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: 'Bruja', typeLabel: 'Bruja',
      desc: 'Reportada como una bruja agricultora — probablemente una fuente temprana de hechizos y conocimientos de jardinería.',
      knownInfo: [
        'Reportada como bruja agricultora en avances de prensa.',
        'Probablemente una fuente temprana de hechizos y conocimientos de jardinería.',
        'Detalles por confirmar contra el juego en vivo en el lanzamiento.',
      ],
      romanceYes: 'Se reporta que Luna es conquistable. Las preferencias de regalo y los eventos de corazón se añadirán en cuanto se confirmen en el juego en vivo.',
      romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: 'Vampiro', typeLabel: 'Vampiro',
      desc: 'Reportado como el cabeza de una familia de vampiros — una figura de influencia del viejo mundo en el pueblo.',
      knownInfo: [
        'Reportado como el cabeza de una familia de vampiros.',
        'Escrito como una figura cómica en los avances de prensa.',
        'Una presencia del viejo mundo entre los vampiros del pueblo.',
      ],
      romanceYes: 'Se reporta que Orlock es conquistable. Las preferencias de regalo y los eventos de corazón se añadirán en cuanto se confirmen en el juego en vivo.',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: 'Hombre lobo', typeLabel: 'Hombre lobo',
      desc: 'El alcalde de Moonlight Peaks, patriarca de la familia Logan (hombres lobo). No es una opción de romance.',
      knownInfo: [
        'Confirmado como alcalde del pueblo, a cargo del registro en el Ayuntamiento y de entregarte a Chester.',
        'Patriarca de la familia Logan; padre de Saga y Ludo, y hermano mayor de Ridge.',
        'Dirige el Martillo Aullador (Howling Hammer), la tienda de mejoras de herramientas, abierta de lunes a viernes de 18:00 a medianoche.',
      ],
      romanceYes: '', romanceNo: 'Brook no es una opción de romance confirmada.', romanceTbc: '',
    },
    'the-warlock': {
      name: 'El Brujo', familyLabel: 'Bruja', typeLabel: 'Bruja',
      desc: 'Visto en un avance de prensa: un brujo ensimismado que ronda el pueblo. Su nombre real está por confirmarse.',
      knownInfo: [
        'Un brujo ensimismado visto en un avance de prensa.',
        'En ese avance coquetea con el jugador interrumpiendo constantemente.',
        'Su nombre real dentro del juego no ha sido confirmado.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Si se puede conquistar a El Brujo todavía no está confirmado — lo actualizaremos en el lanzamiento.',
    },
    mina: {
      name: 'Mina', familyLabel: 'Vampira (Ambrosia)', typeLabel: 'Vampira',
      desc: 'Una vampira alegre, hija de Orlock, que dirige junto con su hermano Evan el café del pueblo "Coffee & Coffins".',
      knownInfo: [
        'Confirmada como hija de Orlock y hermana de Evan; ambos dirigen "Coffee & Coffins" juntos.',
        'Se reporta que Orlock quiso cerrar el café después de que su madre se fuera, pero Mina lo convenció de no hacerlo.',
        'Le encanta hornear y se mantiene determinadamente alegre y positiva.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    evan: {
      name: 'Evan', familyLabel: 'Vampiro (Ambrosia)', typeLabel: 'Vampiro',
      desc: 'Un vampiro callado y distante que dirige "Coffee & Coffins" junto con su hermana Mina; su padre Orlock lo presiona para que tome el apellido familiar.',
      knownInfo: [
        'Confirmado como hijo de Orlock y hermano de Mina, co-dirige el café del pueblo.',
        'Prefiere contar estrellas antes que tomar el apellido familiar que su padre quiere que herede.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    ridge: {
      name: 'Ridge', familyLabel: 'Hombre lobo (Logan)', typeLabel: 'Hombre lobo',
      desc: 'El carpintero del pueblo, un pacifista robusto y confiable que usa sus horas de hombre lobo para buscar madera de calidad. Hermano menor de la alcaldesa Brook.',
      knownInfo: [
        'Confirmado como carpintero hombre lobo y pacifista.',
        'Te vende tu primer Granero (4,000 monedas + materiales, espacio de 10x6, 1 noche de construcción, alberga 4 animales), requerido antes de comprar ganado con Luna.',
        'Dirige la tienda de mejoras de herramientas Howling Hammer, abierta de lunes a viernes, 6 PM a medianoche.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    sabrina: {
      name: 'Sabrina', familyLabel: 'Bruja (Webb)', typeLabel: 'Bruja',
      desc: 'Dirige "Webb of Wonders", vendiendo pociones y hechizos — incluido el Elixir de Alter Ego que cambia tu apariencia.',
      knownInfo: [
        'Confirmada como dueña de la tienda Webb of Wonders, que vende pociones y hechizos.',
        'Repara tu varita rota durante "La magia de los cultivos" (aunque en realidad es Noel quien la arregla con cinta adhesiva).',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    noel: {
      name: 'Noel', familyLabel: 'Bruja (Webb)', typeLabel: 'Bruja',
      desc: 'Un residente del pueblo que te reta a un concurso de pesca cerca del río — te da tu primera caña de pescar.',
      knownInfo: [
        'Confirmado como quien te da la primera caña de pescar tras ganar su concurso de pesca.',
        'Es en realidad quien repara tu varita rota con cinta adhesiva, un giro cómico confirmado de la historia.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    jada: {
      name: 'Jada', familyLabel: 'Humana (Henderson)', typeLabel: 'Humana',
      desc: 'Una entusiasta de lo sobrenatural llena de energía y coleccionista de reliquias que habla emocionada sobre historia — sobrina de Perséfone, hermana de Winston.',
      knownInfo: [
        'Confirmada como parte de la familia humana Henderson, llegando junto con Perséfone y Winston.',
        'Reportada como coleccionista de reliquias y entusiasta de la historia, en fuerte contraste con su hermano escéptico Winston.',
        'Su estilo de conversación acelerado y sin aliento la ha hecho un poco famosa en el pueblo.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    dragan: {
      name: 'Dragan', familyLabel: 'Vidente (Khazan)', typeLabel: 'Vidente',
      desc: 'El mayor de los hermanos videntes Khazan — sus propias predicciones suelen ser erróneas, pero es más conocido como el inventor dentro del universo del popular juego de cartas Nokturna.',
      knownInfo: [
        'Confirmado como el hermano mayor de la familia vidente Khazan, antes de Aras y Alina.',
        'Reportado como el inventor dentro del universo de Nokturna.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    alina: {
      name: 'Alina', familyLabel: 'Vidente (Khazan)', typeLabel: 'Vidente',
      desc: 'La rebelde de la familia Khazan — terca, fogosa, no soporta las mentiras, con poderes videntes poco convencionales y preferencia por las sombras.',
      knownInfo: [
        'Reportada como parte de la familia vidente Khazan — hermana menor de Dragan, junto con Aras.',
        'Vive en su propia casa, lo que sugiere que es una residente establecida en lugar de una figura secundaria.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    death: {
      name: 'Death', familyLabel: 'Sin familia', typeLabel: 'La Muerte',
      desc: 'La Parca en persona, de vacaciones en el pueblo para relajarse — humor seco, cuida el cementerio local, y colecciona tanto flores como almas.',
      knownInfo: [
        'Confirmado como opción de romance — ya no es un rumor previo al lanzamiento.',
        'Reside en "la choza de Death", en el área del cementerio de Misty Shores.',
        'Cadena de desbloqueo confirmada: los jugadores lo conocen dos veces después de desbloquear Misty Shores (vía la misión "A Bridge Too Far") antes de que dé la red de insectos.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    samael: {
      name: 'Samael', familyLabel: 'Vampiro (Ambrosia)', typeLabel: 'Vampiro',
      desc: 'Un vampiro misterioso y melancólico de la familia Ambrosia que ha dirigido el bar del pueblo, "The Broken Lamp", durante siglos. Hermano de Elvira, sobrino de Orlock.',
      knownInfo: [
        'Dirige "The Broken Lamp", el bar del pueblo, y es miembro de la familia Ambrosia.',
        'Su romance está bloqueado tras el progreso de la historia y se desbloquea al llegar a Luna Bay y conocer a la familia de sirenas Hosu.',
        'Confirmado: las misiones previas "A Curious Passage" y "The Mysterious Bay" implican levantar un árbol caído, reparar un puente con Ludo, y ayudar a preparar una boda — con una sirena llamada Kim, que se arrepiente en el altar.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    elvira: {
      name: 'Elvira', familyLabel: 'Vampira (Ambrosia)', typeLabel: 'Vampira',
      desc: 'La hermana de Samael — una vampira artística e inquieta que siempre se lanza a nuevos proyectos paralelos, a menudo molestando a su tío Orlock.',
      knownInfo: [
        'Confirmada como hermana de Samael y sobrina de Orlock.',
        'Oculta un lado frágil y artístico que se dice que solo Samael conoce completamente.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    fiona: {
      name: 'Fiona', familyLabel: 'Bruja (Webb)', typeLabel: 'Bruja',
      desc: 'La líder del aquelarre de brujas Webb, conocida por su mente aguda y terquedad — maldijo el puente después de la broma de Orlock sobre ella.',
      knownInfo: [
        'Confirmada como líder del aquelarre de brujas Webb en Moonlit Pines.',
        'Impuso la maldición sobre el puente tras una pelea de borrachos con Orlock en la misión "A Bridge Too Far".',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    kim: {
      name: 'Kim', familyLabel: 'Sirena (Hosu)', typeLabel: 'Sirena',
      desc: 'Una sirena de la familia Hosu, sin límites de energía y alegre, que llega al pueblo aproximadamente un año después del inicio de la historia.',
      knownInfo: [
        'Confirmada como miembro de la familia de sirenas Hosu, hermana de Rei y Tae.',
        'La familia Hosu llega a mitad del primer año y necesita ayuda para reincorporarse al pueblo, viviendo juntos en Luna Bay.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    ludo: {
      name: 'Ludo', familyLabel: 'Hombre lobo (Logan)', typeLabel: 'Hombre lobo',
      desc: 'El hijo despreocupado de la alcaldesa Brook (hermano de Saga, sobrino/a de Ridge) que prefiere dormir antes que preocuparse por cualquier cosa.',
      knownInfo: [
        'Confirmado como hijo de la alcaldesa Brook, hermano de Saga, sobrino/a de Ridge.',
        'Dirige una tienda que vende varitas-herramienta (pico, regadera Aquaflux, movimiento de árboles) para ahorrar resistencia en tareas repetitivas.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    tae: {
      name: 'Tae', familyLabel: 'Sireno (Hosu)', typeLabel: 'Sireno',
      desc: 'Un sireno impresionante y sencillo de la familia Hosu que se enorgullece de su apariencia y ama ayudar a otros a encontrar su confianza.',
      knownInfo: [
        'Confirmado como miembro de la familia de sirenas Hosu, hermano de Kim y Rei.',
        'Descrito como leal y alentador.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    winston: {
      name: 'Winston', familyLabel: 'Humano (Henderson)', typeLabel: 'Humano',
      desc: 'El escéptico del pueblo — reacio a vivir en un pueblo sobrenatural y fácil de asustar, pero muy divertido una vez que baja la guardia.',
      knownInfo: [
        'Confirmado como parte de la familia humana Henderson, llegando junto con Perséfone y Jada.',
        'Fue decisión de su familia mudarse a Moonlight Peaks, no la suya propia — no cree en el lado sobrenatural del pueblo.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    rei: {
      name: 'Rei', familyLabel: 'Sirena (Hosu)', typeLabel: 'Sirena',
      desc: 'Una sirena callada y tímida de la familia Hosu obsesionada con el medio ambiente, que pasa sus días limpiando la costa.',
      knownInfo: [
        'Confirmada como miembro de la familia de sirenas Hosu, hermana de Kim y Tae.',
        'Enfocada en la limpieza costera y en enseñar a los locales a respetar la naturaleza.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    aras: {
      name: 'Aras', familyLabel: 'Vidente (Khazan)', typeLabel: 'Vidente',
      desc: 'El sastre local de la familia vidente Khazan, dirige "Third Eye Threads". Evita usar sus propios poderes videntes para mantener su futuro en misterio.',
      knownInfo: [
        'Reportado como miembro de la familia vidente Khazan, dirige la sastrería "Third Eye Threads" — hermano menor de Dragan, junto con Alina.',
        'Ama la moda y las conversaciones acogedoras.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    persephone: {
      name: 'Perséfone', familyLabel: 'Humana (Henderson)', typeLabel: 'Humana',
      desc: 'Cabeza de familia de espíritu libre de los Henderson — una tía humana que cuida a su sobrina Jada y sobrino Winston, recién llegada al pueblo, con amor por la astrología y los cristales.',
      knownInfo: [
        'Confirmada como cabeza de la familia humana Henderson (tía de Jada y Winston).',
        'Interesada en astrología, chakras, auras, y temas místicos — recién llegada al pueblo buscando un nuevo comienzo.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    llemi: {
      name: 'Llemi', familyLabel: 'Demonio del amor', typeLabel: 'Demonio',
      desc: 'Un demonio del amor caprichoso que se alimenta del drama y caos local, vive en Pink Grove y visita el pueblo principalmente durante festivales.',
      knownInfo: [
        'Reportada como residente demonio de Pink Grove.',
        'Se dice que solo se le ve en el pueblo durante festivales; ganar su corazón se describe como algo que requiere esfuerzo real.',
      ],
      romanceYes: 'Sí, opción de romance confirmada.', romanceNo: '', romanceTbc: '',
    },
    logan: {
      name: 'Logan', familyLabel: 'Hombre lobo', typeLabel: 'Hombre lobo',
      desc: 'CORRECCIÓN: fuentes múltiples después del lanzamiento confirman que "Logan" es el apellido de la familia de hombres lobo, no el nombre de un residente individual — los informes anteriores sobre un "alcalde hombre lobo Logan" en realidad se referían a Brook.',
      knownInfo: [
        'Corrección: Logan es el apellido familiar, cuyo patriarca es la alcaldesa Brook, con Ridge como hermano menor y Saga y Ludo como hijos.',
        'Esta página se mantiene como redirección ya que otras páginas todavía enlazan aquí — consulta Brook, Ridge, Saga, y Ludo para los residentes reales de la familia Logan.',
      ],
      romanceYes: '', romanceNo: 'Logan no es una opción de romance independiente (ver corrección arriba).', romanceTbc: '',
    },
    'pumpkin-head': {
      name: 'Pumpkin Head', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Reportado como anfitrión teatral de eventos que anima las reuniones del pueblo.',
      knownInfo: [
        'Reportado como anfitrión teatral de eventos que aparece en reuniones del pueblo.',
        'Rol y detalles por confirmar en el lanzamiento.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Todavía no confirmado.',
    },
    jarvis: {
      name: 'Jarvis', familyLabel: 'Sin familia', typeLabel: 'Fantasma',
      desc: 'Uno de los fantasmas del pueblo, reportado junto con su compañero fantasma Balthasar. No pertenece a ninguna de las siete familias, similar a Death.',
      knownInfo: [
        'Confirmado como residente fantasma, sin pertenecer a ninguna familia (como Death).',
        'Los archivos de datamining también hacen referencia a una "Casa de Jarvis."',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Si Jarvis es una opción de romance todavía no está confirmado.',
    },
    albertus: {
      name: 'Albertus', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Un búho que dirige el tablón de anuncios del pueblo — confirmado como la fuente de "Los trabajos de Albertus", el tablón donde los jugadores revisan misiones/tareas disponibles.',
      knownInfo: [
        'Confirmado: Albertus es un búho, y "Los trabajos de Albertus" es el tablón de anuncios del pueblo para revisar misiones.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Si Albertus es una opción de romance todavía no está confirmado.',
    },
    'viktor-dracula': {
      name: 'Viktor', familyLabel: 'Vampiro (Ambrosia)', typeLabel: 'Otro',
      desc: 'El viejo tío de Orlock, que hace mucho tiempo se convirtió en murciélago y ahora vive en una cripta en tu terreno. No es una opción de romance.',
      knownInfo: [
        'Confirmado como tío de Orlock y personaje acompañante murciélago encontrado en una cripta en el terreno del jugador.',
        'Distinto tanto del Conde Drácula como de Vlad.',
      ],
      romanceYes: '', romanceNo: 'Viktor no es una opción de romance.', romanceTbc: '',
    },
    judge: {
      name: 'Judge', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Nombre confirmado que existe a través de la navegación de la wiki oficial; rol aún no documentado.',
      knownInfo: ['Listado en la wiki oficial; sin más detalles confirmados todavía.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Todavía no confirmado.',
    },
    'skull-girl': {
      name: 'Skull Girl', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Nombre confirmado que existe a través de la navegación de la wiki oficial; rol aún no documentado.',
      knownInfo: ['Listada en la wiki oficial; sin más detalles confirmados todavía.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Todavía no confirmado.',
    },
    balthasar: {
      name: 'Balthasar', familyLabel: 'Sin familia', typeLabel: 'Fantasma',
      desc: 'Un residente fantasma del pueblo, nombrado junto con su compañero fantasma Jarvis — no es una opción de romance, y no pertenece a ninguna de las siete familias (como Death).',
      knownInfo: ['Confirmado como uno de los personajes fantasma del pueblo, sin pertenecer a ninguna familia.'],
      romanceYes: '', romanceNo: 'Balthasar no es una opción de romance.', romanceTbc: '',
    },
    chester: {
      name: 'Chester', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Un cofre de almacenamiento viviente, regalado por la alcaldesa Brook durante tu registro en el Ayuntamiento — deja mercancías durante la noche y despierta con el dinero de la venta.',
      knownInfo: [
        'Confirmado: obtenido de Brook durante tu primera visita al Ayuntamiento.',
        'Funciona como tu almacenamiento de venta nocturna.',
      ],
      romanceYes: '', romanceNo: 'Chester es un objeto/acompañante, no una opción de romance.', romanceTbc: '',
    },
    laveau: {
      name: 'Laveau', familyLabel: 'Bruja (Webb)', typeLabel: 'Bruja',
      desc: 'La madre de tu personaje — una bruja que dirigió el aquelarre Webb antes de dejarlo para empezar una vida con Vlad Drácula. Central para la historia; no es una opción de romance.',
      knownInfo: [
        'Confirmada como madre del personaje jugador y ex líder del aquelarre Webb, sucedida por Fiona.',
        'Su matrimonio con Vlad Drácula es la razón por la que tu personaje tiene herencia mixta de vampiro/bruja.',
      ],
      romanceYes: '', romanceNo: 'Laveau no es una opción de romance.', romanceTbc: '',
    },
    yabbis: {
      name: 'Yabbis', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Un sapo que habla en haiku y hace compañía a Ludo — no es una opción de romance.',
      knownInfo: ['Reportado como el sapo acompañante de Ludo, conocido por hablar solo en haiku.'],
      romanceYes: '', romanceNo: 'Yabbis no es una opción de romance.', romanceTbc: '',
    },
    grim: {
      name: 'Grim', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Probablemente el nombre predeterminado/dado de tu mascota Hellkitten de tres ojos, que te sigue desde el inicio del juego (puedes nombrarla) — distinto de transformarte tú mismo en una forma Hellkitten más adelante.',
      knownInfo: [
        'Confirmado: una mascota Hellkitten sigue al jugador desde el inicio y puede ser nombrada.',
        'Listado en la wiki oficial con el ícono chibi de Hellkitten bajo "Grim" — probablemente el nombre predeterminado de esta mascota, aún no completamente confirmado.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Grim probablemente es una mascota, no una opción de romance — aún no completamente confirmado.',
    },
    'mr-deyes': {
      name: 'Mr. Deyes', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Nombre confirmado que existe a través de la navegación de la wiki oficial; rol aún no documentado.',
      knownInfo: ['Listado en la wiki oficial; sin más detalles confirmados todavía.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Todavía no confirmado.',
    },
    hoodini: {
      name: 'Hoodini', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Nombre confirmado que existe a través de la navegación de la wiki oficial, mostrado con un ícono de búho blanco similar al de Albertus — posiblemente un personaje relacionado o variante. No confirmado.',
      knownInfo: ['Listado en la wiki oficial con un ícono estilo búho blanco; la conexión con Albertus aún no está confirmada.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Todavía no confirmado.',
    },
    larry: {
      name: 'Larry', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Confirmado vía la wiki oficial: Larry es un Vampster que vive en la casa de Alina y no quiere ser devuelto a la Cueva de los Ecos, así que se queda con ella en lugar de unirse a los demás Vampsters coleccionables. No es una opción de romance.',
      knownInfo: ['Confirmado: encontrado en la casa de Alina, elige quedarse en lugar de ser devuelto como los demás Vampsters.'],
      romanceYes: '', romanceNo: 'Larry no es una opción de romance.', romanceTbc: '',
    },
    rachel: {
      name: 'Rachel', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Nombre confirmado que existe a través de la navegación de la wiki oficial, mostrado con el ícono de Vampster — probablemente un Vampster nombrado individualmente en lugar de una habitante del pueblo. No es una opción de romance.',
      knownInfo: ['Listado en la wiki oficial con el ícono de Vampster.'],
      romanceYes: '', romanceNo: 'Rachel no es una opción de romance.', romanceTbc: '',
    },
    snek: {
      name: 'Snek', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Un personaje serpiente nombrado, confirmado que existe a través de la navegación de la wiki oficial. No es una opción de romance.',
      knownInfo: ['Listado en la wiki oficial con un ícono chibi de serpiente.'],
      romanceYes: '', romanceNo: 'Snek no es una opción de romance.', romanceTbc: '',
    },
    jacques: {
      name: 'Jacques', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Un personaje serpiente nombrado, confirmado que existe a través de la navegación de la wiki oficial, junto con Snek. No es una opción de romance.',
      knownInfo: ['Listado en la wiki oficial con un ícono chibi de serpiente.'],
      romanceYes: '', romanceNo: 'Jacques no es una opción de romance.', romanceTbc: '',
    },
    'moon-goddess': {
      name: 'Diosa Luna', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Una figura tipo deidad confirmada que existe a través de la navegación de la wiki oficial; rol aún no documentado.',
      knownInfo: [
        'Listada en la wiki oficial; probablemente vinculada a la mitología nocturna/lunar del juego.',
        'Reportado por la comunidad (cobertura en japonés): agrupada con Brook como NPC solo de amistad, no una opción de romance.',
      ],
      romanceYes: '', romanceNo: 'Reportada por la comunidad como NPC solo de amistad.', romanceTbc: '',
    },
    'sun-god': {
      name: 'Dios Sol', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Una figura tipo deidad confirmada que existe a través de la navegación de la wiki oficial; rol aún no documentado.',
      knownInfo: [
        'Listado en la wiki oficial; probablemente la contraparte de la Diosa Luna en la mitología del juego.',
        'Reportado por la comunidad (cobertura en japonés): agrupado con Brook como NPC solo de amistad, no una opción de romance.',
      ],
      romanceYes: '', romanceNo: 'Reportado por la comunidad como NPC solo de amistad.', romanceTbc: '',
    },
    yasmin: {
      name: 'Yasmin', familyLabel: 'Desconocida', typeLabel: 'Otro',
      desc: 'Nombre confirmado que existe a través de la navegación de la wiki oficial; rol aún no documentado.',
      knownInfo: ['Listado en la wiki oficial; sin más detalles confirmados todavía.'],
      romanceYes: '', romanceNo: '', romanceTbc: 'Todavía no confirmado.',
    },
  },
  fr: {
    saga: {
      name: 'Saga', familyLabel: 'Loup-garou (Logan)', typeLabel: 'Loup-garou',
      desc: 'Une louve-garou épineuse mais dévouée qui fait tourner la ville — réparant les nids-de-poule et pourchassant des citrouilles disparues — avec peu de temps pour la romance jusqu\u2019à ce qu\u2019elle la surprenne.',
      knownInfo: [
        'Confirmée comme faisant partie de la famille loup-garou Logan.',
        'S\u2019occupe des tâches pratiques de la ville, avec peu de temps libre pour elle-même.',
        'Rapporté par la communauté : nettement plus sur les nerfs pendant les pleines lunes.',
      ],
      romanceYes: 'Oui, option de romance confirmée.', romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: 'Sorcière (Webb)', typeLabel: 'Sorcière',
      desc: 'Une sorcière-agricultrice qui enseigne au joueur les cultures magiques et le premier sort, Aquaflux — cousine de Fiona et Noel.',
      knownInfo: [
        'Confirmée comme membre de la famille de sorcières Webb.',
        'Déclenche la quête "La magie des cultures" par lettre, qui mène à la réparation de la baguette et au premier sort.',
      ],
      romanceYes: 'Oui, option de romance confirmée.', romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: 'Vampire (Ambrosia)', typeLabel: 'Vampire',
      desc: 'Un vampire de la vieille école et oncle du joueur, souvent vu la gueule de bois sur sa pelouse au début du jeu — père de Mina et Evan.',
      knownInfo: [
        'Confirmé comme oncle du joueur et père de Mina et Evan.',
        'Déclenche la quête "Le plan de vin d\u2019Orlock", qui mène à "A Bridge Too Far".',
        'Décrit comme une figure comique dans les aperçus de presse.',
      ],
      romanceYes: 'Rapporté qu\u2019Orlock est romançable. Les préférences de cadeaux et événements de cœur seront ajoutés dès confirmation dans le jeu en direct.',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: 'Loup-garou', typeLabel: 'Loup-garou',
      desc: 'La maire de Moonlight Peaks, matriarche de la famille Logan (loups-garous). Pas une option de romance.',
      knownInfo: [
        'Confirmée comme maire de la ville, en charge de l\u2019enregistrement à la mairie et de te remettre Chester.',
        'Matriarche de la famille Logan ; mère de Saga et Ludo, et sœur aînée de Ridge.',
        'Dirige le Howling Hammer, la boutique d\u2019amélioration d\u2019outils, ouverte du lundi au vendredi de 18h à minuit.',
      ],
      romanceYes: '', romanceNo: 'Brook n\u2019est pas une option de romance confirmée.', romanceTbc: '',
    },
  },
  ko: {
    saga: {
      name: 'Saga', familyLabel: '늑대인간 (Logan 가문)', typeLabel: '늑대인간',
      desc: '까칠하지만 헌신적인 늑대인간으로, 마을의 자잘한 일들 — 도로 구멍 메우기, 사라진 호박 찾기 — 을 도맡아 처리하며, 로맨스에 시간을 낼 여유가 별로 없다가 어느 순간 사랑에 빠진다.',
      knownInfo: [
        '늑대인간 가문 Logan 소속으로 확인됨.',
        '마을의 실질적인 잡무를 도맡아 하며, 자신을 위한 시간은 거의 없음.',
        '커뮤니티 보고: 보름달이 뜨는 동안에는 눈에 띄게 더 예민해짐.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: '마녀 (Webb 가문)', typeLabel: '마녀',
      desc: '농사짓는 마녀로, 플레이어에게 마법 작물과 첫 주문 Aquaflux를 가르쳐줌 — Fiona와 Noel의 사촌.',
      knownInfo: [
        '마녀 가문 Webb 소속으로 확인됨.',
        '편지로 "작물의 마법" 퀘스트를 발동시키며, 이는 지팡이 수리와 첫 주문으로 이어짐.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: '뱀파이어 (Ambrosia 가문)', typeLabel: '뱀파이어',
      desc: '올드스쿨 뱀파이어이자 플레이어의 삼촌으로, 게임 초반에는 자기 집 잔디밭에서 숙취에 시달리는 모습으로 자주 등장 — Mina와 Evan의 아버지.',
      knownInfo: [
        '플레이어의 삼촌이자 Mina와 Evan의 아버지로 확인됨.',
        '"Orlock의 와인 계획" 퀘스트를 발동시키며, 이는 "A Bridge Too Far"로 이어짐.',
        '언론 프리뷰에서는 코미디 감초 캐릭터로 묘사됨.',
      ],
      romanceYes: 'Orlock이 로맨스 대상이라는 보고가 있습니다. 선호 선물과 하트 이벤트는 실제 게임에서 확인되는 대로 추가됩니다.',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: '늑대인간', typeLabel: '늑대인간',
      desc: '문라이트 피크스의 시장이자 늑대인간 가문 Logan의 가모장. 로맨스 대상은 아닙니다.',
      knownInfo: [
        '마을 시장으로 확인됨 — 마을회관 등록 업무를 담당하며 플레이어에게 Chester를 건네줌.',
        'Logan 가문의 가모장; Saga와 Ludo의 어머니이자 Ridge의 누나.',
        '도구 업그레이드 상점 Howling Hammer를 운영하며, 월~금 오후 6시부터 자정까지 영업.',
      ],
      romanceYes: '', romanceNo: 'Brook은 확인된 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    'count-dracula': {
      name: '드라큘라 백작', familyLabel: '뱀파이어', typeLabel: '뱀파이어',
      desc: '플레이어의 아버지이자 마을의 전설. 그의 그림자에서 벗어나는 것이 스토리의 출발점 — 로맨스 대상이 아니라 핵심 서사 인물.',
      knownInfo: [
        '플레이어의 아버지; 문라이트 피크스로 이사하는 것을 그의 오랜 그림자에서 벗어나는 발걸음으로 그리는 스토리.',
        '로맨스 대상이 아니라 핵심 서사 인물.',
        '게임을 진행하며 더 온화하고 평온한 불멸의 삶도 가능하다는 것을 증명하게 되며, 이는 그가 늘 의심해온 일이다.',
      ],
      romanceYes: '', romanceNo: '드라큘라 백작은 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    'the-warlock': {
      name: '수수께끼의 술사', familyLabel: '마녀', typeLabel: '마녀',
      desc: '한 체험판 보도에 등장했던, 마을의 상당히 나르시시스트적인 술사 — 실제 이름은 아직 확인되지 않음.',
      knownInfo: [
        '한 체험판 보도에 등장했던 나르시시스트적인 술사.',
        '해당 보도에 따르면 대화 도중 끊임없이 플레이어에게 추파를 던짐.',
        '게임 내 실제 이름은 아직 확인되지 않음.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: '이 술사가 로맨스 대상인지는 아직 확인되지 않았습니다 — 실기 검증을 계속 지켜보고 있습니다.',
    },
    mina: {
      name: 'Mina', familyLabel: '뱀파이어 (Ambrosia 가문)', typeLabel: '뱀파이어',
      desc: '명랑한 뱀파이어로 Orlock의 딸; 오빠 Evan과 함께 Coffee & Coffins를 운영한다.',
      knownInfo: [
        'Orlock의 딸이자 Evan의 동생으로 확인됨; 두 사람이 함께 Coffee & Coffins를 운영.',
        '보고에 따르면 어머니가 떠난 후 Orlock이 카페를 닫으려 했지만 Mina가 만류함.',
        '베이킹을 좋아하며 늘 밝고 긍정적인 태도를 유지함.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    evan: {
      name: 'Evan', familyLabel: '뱀파이어 (Ambrosia 가문)', typeLabel: '뱀파이어',
      desc: '조용하고 거리감 있는 뱀파이어로, 누나 Mina와 함께 Coffee & Coffins를 운영; 아버지 Orlock은 그가 가문의 성을 이어받길 재촉한다.',
      knownInfo: [
        'Orlock의 아들이자 Mina의 동생으로 확인됨, 마을 카페를 공동 운영.',
        '아버지가 물려주고 싶어하는 가문의 성을 잇기보다 별을 세는 것을 더 좋아함.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    ridge: {
      name: 'Ridge', familyLabel: '늑대인간 (Logan 가문)', typeLabel: '늑대인간',
      desc: '마을의 목수 — 건장하고 믿음직하며 평화주의자, 늑대인간으로 변신하는 시간을 이용해 좋은 목재를 찾아다닌다. Brook의 동생.',
      knownInfo: [
        '목수인 늑대인간이자 평화주의자로 확인됨.',
        '4,000골드와 재료를 받고 첫 헛간을 판매함(10x6 크기, 건축 1일 소요, 동물 4마리 수용) — Luna에게서 가축을 사기 전 필수.',
        'Howling Hammer 도구 업그레이드 상점을 운영하며, 월~금 오후 6시부터 자정까지 영업.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    jada: {
      name: 'Jada', familyLabel: '인간 (Henderson 가문)', typeLabel: '인간',
      desc: '활기 넘치는 초자연 애호가이자 유물 수집가로 역사 이야기를 신나게 늘어놓음 — Persephone의 조카, Winston의 누나.',
      knownInfo: [
        '인간 Henderson 가문 소속으로 확인됨, Persephone·Winston과 함께 이주.',
        '유물 수집가이자 역사 애호가로 보고되어, 회의적인 오빠 Winston과 대조를 이룸.',
        '숨 가쁘게 몰아치는 대화 스타일로 마을에서 다소 유명해짐.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    dragan: {
      name: 'Dragan', familyLabel: '예언자 (Khazan 가문)', typeLabel: '예언자',
      desc: 'Khazan 예언자 삼남매 중 맏이 — 자신의 예언은 자주 빗나가지만, 설정상 인기 카드게임 Nokturna의 발명가로 더 잘 알려져 있다.',
      knownInfo: [
        '예언자 가문 Khazan의 장남으로 확인됨, Aras와 Alina보다 위.',
        '설정상 Nokturna의 발명가로 보고됨.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    alina: {
      name: 'Alina', familyLabel: '예언자 (Khazan 가문)', typeLabel: '예언자',
      desc: 'Khazan 가문의 반항아 — 고집 세고 열정적이며 거짓말을 못 참고, 독특한 예언 능력과 그림자를 선호하는 성향을 지님.',
      knownInfo: [
        '예언자 가문 Khazan 소속으로 보고됨 — Dragan의 여동생, Aras와 동년배.',
        '자신의 집에서 혼자 살고 있어, 단역이 아닌 정착 주민임을 시사함.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    death: {
      name: 'Death(죽음)', familyLabel: '가문 없음', typeLabel: '죽음의 신',
      desc: '죽음 그 자체로, 휴식을 위해 마을에 휴가차 방문 중 — 건조한 유머 감각을 지녔고, 마을 묘지를 관리하며 꽃과 영혼 둘 다를 수집한다.',
      knownInfo: [
        '확인된 로맨스 대상 — 더 이상 출시 전 소문이 아님.',
        'Misty Shores 묘지 구역의 "죽음의 오두막"에 거주.',
        '확인된 해금 흐름: "A Bridge Too Far"로 Misty Shores가 해금된 후 플레이어가 두 번 만나야 그가 벌레잡이 그물을 준다.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    samael: {
      name: 'Samael', familyLabel: '뱀파이어 (Ambrosia 가문)', typeLabel: '뱀파이어',
      desc: 'Ambrosia 가문 출신의 신비롭고 우수에 찬 뱀파이어로, 수백 년째 마을 술집 "The Broken Lamp"를 운영하고 있다. Elvira의 오빠, Orlock의 조카.',
      knownInfo: [
        '마을 술집 The Broken Lamp를 운영하며 Ambrosia 가문 소속.',
        '그의 로맨스는 스토리 진행과 연동되어 있으며, Luna Bay에 도착해 인어 Hosu 가문을 만나야 해금됨.',
        '확인됨: 선행 퀘스트 "신비로운 통로"와 "신비로운 만"에는 쓰러진 나무 옮기기, Ludo와 함께 다리 고치기, 결혼식 준비 돕기가 포함되며 — 신부는 인어 Kim이지만 결혼식 당일 마음을 바꾼다.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    elvira: {
      name: 'Elvira', familyLabel: '뱀파이어 (Ambrosia 가문)', typeLabel: '뱀파이어',
      desc: 'Samael의 여동생 — 예술적이고 가만있지 못하는 뱀파이어로, 끊임없이 새로운 부업을 벌여 삼촌 Orlock을 자주 곤란하게 한다.',
      knownInfo: [
        'Samael의 여동생이자 Orlock의 조카로 확인됨.',
        '연약하고 예술적인 면모를 숨기고 있으며, Samael만이 이를 완전히 안다고 알려짐.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    fiona: {
      name: 'Fiona', familyLabel: '마녀 (Webb 가문)', typeLabel: '마녀',
      desc: 'Webb 마녀 가문의 수장 — 날카로운 두뇌와 고집으로 유명하며, Orlock이 그녀를 놀린 조잡한 농담 때문에 다리에 저주를 내렸다.',
      knownInfo: [
        'Moonlit Pines의 마녀 결사 Webb의 수장으로 확인됨.',
        '술집에서 Orlock과 취중 다툼 끝에 "A Bridge Too Far" 퀘스트에서 다리에 저주를 내림.',
        '날카로운 두뇌와 고집으로 알려져 있지만 결국은 공정한 인물.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    kim: {
      name: 'Kim', familyLabel: '인어 (Hosu 가문)', typeLabel: '인어',
      desc: '무한한 에너지와 밝은 성격을 지닌 인어로 Hosu 가문 소속, 게임 시작 약 1년 후 마을에 도착한다.',
      knownInfo: [
        '인어 가문 Hosu 소속으로 확인됨, Rei와 Tae의 자매.',
        'Hosu 가문은 첫해 중반쯤 도착하며 마을에 다시 적응하는 데 도움이 필요하고, Luna Bay에서 함께 산다.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    ludo: {
      name: 'Ludo', familyLabel: '늑대인간 (Logan 가문)', typeLabel: '늑대인간',
      desc: 'Brook 시장의 근심 걱정 없는 자녀(Saga의 형제자매, Ridge의 조카)로, 어떤 일에 신경 쓰기보다 잠자는 것을 더 좋아한다.',
      knownInfo: [
        'Brook 시장의 자녀, Saga의 형제자매, Ridge의 조카로 확인됨.',
        '반복 작업의 체력 소모를 줄여주는 도구형 마법 지팡이(곡괭이, Aquaflux 물뿌리개, 나무 옮기기)를 파는 상점을 운영.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    tae: {
      name: 'Tae', familyLabel: '인어 (Hosu 가문)', typeLabel: '인어',
      desc: '잘생기고 담백한 인어로 Hosu 가문 소속, 자신의 외모를 자랑스러워하며 다른 사람이 자신감을 찾도록 돕는 것을 좋아한다.',
      knownInfo: [
        '인어 가문 Hosu 소속으로 확인됨, Kim과 Rei의 형제.',
        '충실하고 격려를 잘하는 성격으로 묘사됨.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    winston: {
      name: 'Winston', familyLabel: '인간 (Henderson 가문)', typeLabel: '인간',
      desc: '마을의 회의론자 — 초자연적인 마을에 사는 것을 내키지 않아 하며 쉽게 겁먹지만, 경계를 풀면 아주 재미있는 사람.',
      knownInfo: [
        '인간 Henderson 가문 소속으로 확인됨, Persephone·Jada와 함께 이주.',
        '마을로 이사 온 것은 가족의 결정이었지, 본인 의사가 아니었음 — 마을의 초자연적인 면을 믿지 않음.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    rei: {
      name: 'Rei', familyLabel: '인어 (Hosu 가문)', typeLabel: '인어',
      desc: '조용하고 수줍은 인어로 Hosu 가문 소속, 환경에 집착하며 해안을 청소하며 하루를 보낸다.',
      knownInfo: [
        '인어 가문 Hosu 소속으로 확인됨, Kim과 Tae의 자매.',
        '해안 청소에 집중하며 지역 주민들에게 자연을 존중하도록 가르침.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    aras: {
      name: 'Aras', familyLabel: '예언자 (Khazan 가문)', typeLabel: '예언자',
      desc: 'Khazan 예언자 가문의 마을 재단사로 "Third Eye Threads"를 운영한다. 자신의 미래를 신비로 남겨두기 위해 스스로의 예언 능력을 쓰지 않으려 한다.',
      knownInfo: [
        '예언자 가문 Khazan 소속으로 보고됨, 재단사 상점 "Third Eye Threads"를 운영 — Dragan의 동생, Alina와 동년배.',
        '패션과 아늑한 대화를 사랑함.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    persephone: {
      name: 'Persephone', familyLabel: '인간 (Henderson 가문)', typeLabel: '인간',
      desc: '자유분방한 Henderson 가문의 가장 — 조카 Jada와 조카 Winston을 돌보는 인간 이모, 마을에 새로 도착했으며 점성술과 크리스탈을 좋아한다.',
      knownInfo: [
        '인간 Henderson 가문의 가장(Jada와 Winston의 이모)으로 확인됨.',
        '점성술, 차크라, 아우라 등 신비로운 주제에 관심이 많음 — 새 출발을 위해 마을에 새로 도착.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    llemi: {
      name: 'Llemi', familyLabel: '사랑의 악마', typeLabel: '악마',
      desc: '기묘한 사랑의 악마로 마을의 드라마와 혼란을 먹고 살며, Pink Grove에 살고 주로 축제 기간에만 마을을 방문한다.',
      knownInfo: [
        'Pink Grove의 악마 거주자로 보고됨.',
        '축제 기간에만 마을에서 목격된다고 알려져 있으며, 그녀의 마음을 얻으려면 상당한 노력이 필요하다고 함.',
      ],
      romanceYes: '네, 확인된 로맨스 대상입니다.', romanceNo: '', romanceTbc: '',
    },
    logan: {
      name: 'Logan', familyLabel: '늑대인간', typeLabel: '늑대인간',
      desc: '정정: 출시 이후 여러 정보원에서 "Logan"은 개별 주민의 이름이 아니라 늑대인간 가문의 성(姓)임을 확인했습니다 — 이전에 "늑대인간 시장 Logan"으로 보고된 것은 실제로 Brook을 가리킨 것이었습니다.',
      knownInfo: [
        '정정: Logan은 가문의 성이며, 가장은 Brook 시장이고 Ridge가 남동생, Saga와 Ludo가 자녀입니다.',
        '다른 페이지들이 여전히 여기로 링크되어 있어 이 페이지는 리다이렉트 형태로 유지됩니다 — 실제 Logan 가문 구성원은 Brook, Ridge, Saga, Ludo를 참고하세요.',
      ],
      romanceYes: '', romanceNo: 'Logan은 독립된 로맨스 대상이 아닙니다(위 정정 내용 참고).', romanceTbc: '',
    },
    'pumpkin-head': {
      name: 'Pumpkin Head', familyLabel: '불명', typeLabel: '기타',
      desc: '마을 모임을 활기차게 만드는 연극적인 이벤트 진행자로 보고됨.',
      knownInfo: [
        '마을 모임에 등장하는 연극적인 이벤트 진행자로 보고됨.',
        '역할과 세부 사항은 출시 시점에 확인 예정.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: '아직 확인되지 않았습니다.',
    },
    jarvis: {
      name: 'Jarvis', familyLabel: '가문 없음', typeLabel: '유령',
      desc: '마을의 유령 중 하나로, 동료 유령 Balthasar와 함께 보고됨. 일곱 가문 어디에도 속하지 않음, Death와 비슷함.',
      knownInfo: [
        '유령 거주자로 확인됨, 어떤 가문에도 속하지 않음(Death처럼).',
        '데이터마이닝 파일에는 "Jarvis의 집"도 언급됨.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Jarvis가 로맨스 대상인지는 아직 확인되지 않았습니다.',
    },
    albertus: {
      name: 'Albertus', familyLabel: '불명', typeLabel: '기타',
      desc: '마을 게시판을 관리하는 부엉이 — "Albertus의 일감"의 출처로 확인됨, 플레이어가 가능한 퀘스트/작업을 확인하는 게시판.',
      knownInfo: [
        '확인됨: Albertus는 부엉이이며, "Albertus의 일감"은 가능한 퀘스트를 확인하는 마을 게시판입니다.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Albertus가 로맨스 대상인지는 아직 확인되지 않았습니다.',
    },
    'viktor-dracula': {
      name: 'Viktor', familyLabel: '뱀파이어 (Ambrosia 가문)', typeLabel: '기타',
      desc: 'Orlock의 늙은 삼촌으로, 오래전 박쥐로 변해 이제 플레이어 부지의 지하 묘실에 산다. 로맨스 대상이 아님.',
      knownInfo: [
        'Orlock의 삼촌이자 플레이어 부지의 지하 묘실에서 발견되는 박쥐 동반 캐릭터로 확인됨.',
        '드라큘라 백작, Vlad와는 다른 인물.',
      ],
      romanceYes: '', romanceNo: 'Viktor는 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    judge: {
      name: 'Judge', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션에 존재가 확인됨; 역할은 아직 문서화되지 않음.',
      knownInfo: ['공식 wiki에 등재됨; 아직 추가 세부 사항은 확인되지 않음.'],
      romanceYes: '', romanceNo: '', romanceTbc: '아직 확인되지 않았습니다.',
    },
    'skull-girl': {
      name: 'Skull Girl', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션에 존재가 확인됨; 역할은 아직 문서화되지 않음.',
      knownInfo: ['공식 wiki에 등재됨; 아직 추가 세부 사항은 확인되지 않음.'],
      romanceYes: '', romanceNo: '', romanceTbc: '아직 확인되지 않았습니다.',
    },
    balthasar: {
      name: 'Balthasar', familyLabel: '가문 없음', typeLabel: '유령',
      desc: '마을의 유령 거주자로, 동료 유령 Jarvis와 함께 이름이 언급됨 — 로맨스 대상이 아니며, 일곱 가문 어디에도 속하지 않음(Death처럼).',
      knownInfo: ['마을 유령 캐릭터 중 하나로 확인됨, 어떤 가문에도 속하지 않음.'],
      romanceYes: '', romanceNo: 'Balthasar는 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    chester: {
      name: 'Chester', familyLabel: '불명', typeLabel: '기타',
      desc: '살아있는 보관함으로, 마을회관 등록 시 Brook 시장이 선물해준다. 밤새 물건을 넣어두면 판매 금액과 함께 아침을 맞이한다.',
      knownInfo: [
        '마을회관 첫 방문 시 Brook에게서 받는 것으로 확인됨.',
        '야간 판매 보관함 역할을 함.',
      ],
      romanceYes: '', romanceNo: 'Chester는 아이템/동반자이며 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    laveau: {
      name: 'Laveau', familyLabel: '마녀 (Webb 가문)', typeLabel: '마녀',
      desc: '플레이어 캐릭터의 어머니 — Webb 결사를 이끌다가 이를 떠나 Vlad 드라큘라와 삶을 시작한 마녀. 핵심 서사 인물, 로맨스 대상이 아님.',
      knownInfo: [
        '플레이어 캐릭터의 어머니이자 Webb 결사의 전 수장으로 확인됨, 후임은 Fiona.',
        'Vlad 드라큘라와의 결혼이 플레이어 캐릭터가 뱀파이어·마녀 혼혈 혈통을 갖게 된 이유.',
      ],
      romanceYes: '', romanceNo: 'Laveau는 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    yabbis: {
      name: 'Yabbis', familyLabel: '불명', typeLabel: '기타',
      desc: 'Ludo와 함께하는 하이쿠로만 말하는 두꺼비 — 로맨스 대상이 아님.',
      knownInfo: ['Ludo의 두꺼비 동반자로 보고됨, 하이쿠로만 말하는 것으로 알려짐.'],
      romanceYes: '', romanceNo: 'Yabbis는 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    grim: {
      name: 'Grim', familyLabel: '불명', typeLabel: '기타',
      desc: '게임 시작부터 함께하는 세눈박이 Hellkitten 동반 반려동물의 기본/주어진 이름으로 추정됨(이름을 지어줄 수 있음) — 나중에 스스로 Hellkitten 형태로 변신하는 것과는 다름.',
      knownInfo: [
        '확인됨: Hellkitten 반려동물이 게임 시작부터 플레이어를 따라다니며 이름을 지어줄 수 있음.',
        '공식 wiki에 "Grim" 아래 Hellkitten 치비 아이콘과 함께 등재됨 — 이 반려동물의 기본 이름으로 추정되나 아직 완전히 확인되지 않음.',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'Grim은 반려동물로 추정되며 로맨스 대상이 아닐 가능성이 높습니다 — 아직 완전히 확인되지 않았습니다.',
    },
    'mr-deyes': {
      name: 'Mr. Deyes', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션에 존재가 확인됨; 역할은 아직 문서화되지 않음.',
      knownInfo: ['공식 wiki에 등재됨; 아직 추가 세부 사항은 확인되지 않음.'],
      romanceYes: '', romanceNo: '', romanceTbc: '아직 확인되지 않았습니다.',
    },
    hoodini: {
      name: 'Hoodini', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션에 존재가 확인됨, Albertus와 비슷한 흰 부엉이 아이콘으로 표시됨 — 관련 캐릭터이거나 변형일 가능성. 미확인.',
      knownInfo: ['공식 wiki에 흰 부엉이 스타일 아이콘으로 등재됨; Albertus와의 연관성은 아직 확인되지 않음.'],
      romanceYes: '', romanceNo: '', romanceTbc: '아직 확인되지 않았습니다.',
    },
    larry: {
      name: 'Larry', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki를 통해 확인됨: Larry는 Alina의 집에 사는 Vampster로, Cave of Echoes로 돌아가고 싶어하지 않아 다른 수집 가능한 Vampster들과 합류하는 대신 그녀 곁에 남는다. 로맨스 대상이 아님.',
      knownInfo: ['확인됨: Alina의 집에서 발견되며, 다른 Vampster들처럼 돌려보내지지 않고 그곳에 남기로 선택함.'],
      romanceYes: '', romanceNo: 'Larry는 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    rachel: {
      name: 'Rachel', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션에 존재가 확인됨, Vampster 아이콘으로 표시됨 — 마을 주민보다는 개별적으로 이름 붙은 Vampster일 가능성. 로맨스 대상이 아님.',
      knownInfo: ['공식 wiki에 Vampster 아이콘과 함께 등재됨.'],
      romanceYes: '', romanceNo: 'Rachel은 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    snek: {
      name: 'Snek', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션을 통해 존재가 확인된 이름 붙은 뱀 캐릭터. 로맨스 대상이 아님.',
      knownInfo: ['공식 wiki에 뱀 치비 아이콘과 함께 등재됨.'],
      romanceYes: '', romanceNo: 'Snek은 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    jacques: {
      name: 'Jacques', familyLabel: '불명', typeLabel: '기타',
      desc: 'Snek과 함께 공식 wiki 내비게이션을 통해 존재가 확인된 이름 붙은 뱀 캐릭터. 로맨스 대상이 아님.',
      knownInfo: ['공식 wiki에 뱀 치비 아이콘과 함께 등재됨.'],
      romanceYes: '', romanceNo: 'Jacques는 로맨스 대상이 아닙니다.', romanceTbc: '',
    },
    'moon-goddess': {
      name: '달의 여신', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션을 통해 존재가 확인된 신 같은 존재; 역할은 아직 문서화되지 않음.',
      knownInfo: [
        '공식 wiki에 등재됨; 게임의 밤·달 신화와 연관이 있을 가능성이 높음.',
        '커뮤니티 보고(일본어권 보도): Brook과 함께 순수하게 우정 대상인 NPC로 분류되며, 로맨스 대상이 아님.',
      ],
      romanceYes: '', romanceNo: '커뮤니티 보고에 따르면 순수하게 우정 대상인 NPC입니다.', romanceTbc: '',
    },
    'sun-god': {
      name: '태양의 신', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션을 통해 존재가 확인된 신 같은 존재; 역할은 아직 문서화되지 않음.',
      knownInfo: [
        '공식 wiki에 등재됨; 게임 신화에서 달의 여신과 대응되는 존재일 가능성이 높음.',
        '커뮤니티 보고(일본어권 보도): Brook과 함께 순수하게 우정 대상인 NPC로 분류되며, 로맨스 대상이 아님.',
      ],
      romanceYes: '', romanceNo: '커뮤니티 보고에 따르면 순수하게 우정 대상인 NPC입니다.', romanceTbc: '',
    },
    yasmin: {
      name: 'Yasmin', familyLabel: '불명', typeLabel: '기타',
      desc: '공식 wiki 내비게이션에 존재가 확인됨; 역할은 아직 문서화되지 않음.',
      knownInfo: ['공식 wiki에 등재됨; 아직 추가 세부 사항은 확인되지 않음.'],
      romanceYes: '', romanceNo: '', romanceTbc: '아직 확인되지 않았습니다.',
    },
  },
  ja: {
    mina: {
      name: 'ミナ', familyLabel: '吸血鬼一族(アンブロシア)', typeLabel: '吸血鬼',
      desc: '明るい性格の吸血鬼で、Orlockの娘。兄弟のEvanと一緒に町のカフェ「Coffee & Coffins」を営んでいる。',
      knownInfo: [
        '確認済み:Orlockの娘でEvanの兄弟。二人で「Coffee & Coffins」を経営している。',
        '母親が去った後、Orlockはカフェを畳もうとしたが、ミナが説得して続けさせたと報告されている。',
        '焼き菓子作りが好きで、いつも明るく振る舞っている。',
      ],
      romanceYes: 'ミナは確認済みの恋愛対象です。', romanceNo: '', romanceTbc: '',
    },
    sabrina: {
      name: 'サブリナ', familyLabel: '魔女一族(ウェッブ)', typeLabel: '魔女',
      desc: 'ウェッブ家のゴシック系魔女。「Webb of Wonders」を営み、変身エリクサーを販売している。いとこのFionaを困らせる自由奔放な性格。',
      knownInfo: [
        '確認済み:「Webb of Wonders」を営む魔女。ウェッブ家の一員でFionaのいとこと報告されている。',
        'キャラクターの外見を変えられる変身エリクサーを販売している。',
      ],
      romanceYes: 'サブリナは確認済みの恋愛対象です。', romanceNo: '', romanceTbc: '',
    },
    noel: {
      name: 'ノエル', familyLabel: '魔女一族(ウェッブ)', typeLabel: 'その他',
      desc: '町の鍛冶屋で、ウェッブ家の伊達男。Fionaの兄弟で、自らを「ムーンライト・ピークスの顔」と呼ぶ。自信満々に見えるが、内面では自己イメージに悩みを抱えている。',
      knownInfo: [
        '確認済み:250ゴールドの釣り勝負の後、プレイヤーに釣竿をくれる。',
        '確認済み:ウェッブ家のFionaの兄弟。町の鍛冶屋。',
        '確認された深み:表面上の自信の裏に、本当の自己イメージへの悩みを抱えている。',
      ],
      romanceYes: 'ノエルは確認済みの恋愛対象です。', romanceNo: '', romanceTbc: '',
    },
    fiona: {
      name: 'フィオナ', familyLabel: '魔女一族(ウェッブ)', typeLabel: '魔女',
      desc: 'ウェッブ家の当主であり、地元の魔女団のリーダー(母Laveauの後を継いだ。Laveauはヴラド・ドラキュラと結婚するために家を出た)。町の花屋でもある。冷静で厳しく、兄弟のNoelといとこたちに高い期待を寄せている。',
      knownInfo: [
        '確認済み:ウェッブ家と魔女団の当主で、Laveau(プレイヤーキャラクターの母)の後を継いだ。',
        '序盤の農場生活の中で、郵便配達のクエストをプレイヤーに与える。',
        '確認済みクエスト詳細:酔った勢いの口論の後、Orlockの家へ続く橋を呪ったとされ、「A Bridge Too Far」クエストで解除されるまでMisty Shores地域を封鎖している。',
      ],
      romanceYes: 'フィオナは確認済みの恋愛対象です。', romanceNo: '', romanceTbc: '',
    },
    'count-dracula': {
      name: 'ドラキュラ伯爵', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: 'あなたの父親であり、町の伝説的存在。その影から抜け出すことが物語の出発点になる——恋愛対象ではなく、物語の中心人物。',
      knownInfo: [
        'あなたの父親であり、Moonlight Peaksへの引っ越しは彼の長い影から抜け出す一歩として描かれる。',
        '恋愛対象ではなく、物語の中心人物。',
        'より優しく穏やかな不死の生き方が可能だと証明していく——それは彼が懐疑的に思っていること。',
      ],
      romanceYes: '', romanceNo: 'ドラキュラ伯爵は恋愛対象ではありません。', romanceTbc: '',
    },
    saga: {
      name: 'サーガ', familyLabel: '人狼', typeLabel: '人狼',
      desc: '開発元が発表した住民の一人。満月とともにエネルギーが変化する。',
      knownInfo: [
        '開発元が発表した人狼の住民。',
        '満月とともにエネルギーが変化すると説明されている。',
        'Steam Next Festのレビューでキャスト陣の中でも取り上げられた。',
      ],
      romanceYes: 'サーガは確定の恋愛対象です。好みの贈り物やハートイベントは、正式版で確認され次第追加します。',
      romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'ルナ', familyLabel: '魔女', typeLabel: '魔女',
      desc: '農業を営む魔女として報道されている——序盤の呪文や園芸知識の情報源になりそうな存在。',
      knownInfo: [
        'ハンズオン試遊の報道で、農業を営む魔女として紹介されている。',
        '序盤の呪文や園芸知識の情報源になりそう。',
        '詳細は発売時に正式版で確認予定。',
      ],
      romanceYes: 'ルナは恋愛対象になれると報じられています。好みの贈り物やハートイベントは、正式版で確認され次第追加します。',
      romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'オルロック', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: 'ある吸血鬼一族の長として報じられている——町では旧世界的な影響力を持つ人物。',
      knownInfo: [
        'ある吸血鬼一族の長として報じられている。',
        'ハンズオン試遊のレポートではコミカルな人物として描かれている。',
        '町の吸血鬼たちの中でも旧世界的な存在感を持つ。',
      ],
      romanceYes: 'オルロックは恋愛対象になれると報じられています。好みの贈り物やハートイベントは、正式版で確認され次第追加します。',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: '人狼', typeLabel: '人狼',
      desc: 'Moonlight Peaksの町長で、人狼のローガン家の家長。恋愛対象ではない。',
      knownInfo: [
        '町長として確認済み。タウンホールでの登録とChesterの授与を担当する。',
        'ローガン家の家長。Sagaの父親でLudoの父親、Ridgeの兄。',
        'ハウリング・ハンマー(道具アップグレード店)を経営、月曜〜金曜の18時から深夜0時まで営業。',
      ],
      romanceYes: '', romanceNo: 'Brookは恋愛対象として確認されていません。', romanceTbc: '',
    },
    'the-warlock': {
      name: '謎の魔術師', familyLabel: '魔女', typeLabel: '魔女',
      desc: 'ハンズオン試遊で見かけた、自惚れの強い魔術師。町を歩き回っている。本名はまだ確認されていない。',
      knownInfo: [
        'ハンズオン試遊で見かけた、自惚れの強い魔術師。',
        'その試遊では、絶えず割り込んできてプレイヤーに言い寄ってくる。',
        'ゲーム内での本名はまだ確認されていない。',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: 'この魔術師が恋愛対象になれるかどうかはまだ確認されていません——発売時に更新します。',
    },
  },
  zh: {
    'count-dracula': {
      name: '德古拉伯爵', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: '你的父亲,也是小镇的传奇人物。走出他的阴影是整个故事的起点——他是核心剧情人物,不是可攻略角色。',
      knownInfo: [
        '他是你的父亲;故事把你搬到Moonlight Peaks这件事,设定成走出他长年阴影的一步。',
        '他是故事的核心人物,而不是恋爱对象。',
        '游戏剧情让你逐步证明,一种更温柔、更平静的不死生活方式是可能的——而这正是他一直心存怀疑的事。',
      ],
      romanceYes: '', romanceNo: '德古拉伯爵不是可攻略角色。', romanceTbc: '',
    },
    saga: {
      name: 'Saga', familyLabel: '狼人(Logan家族)', typeLabel: '狼人',
      desc: '一位嘴硬心软的狼人,一手撑起小镇的日常运转——修坑洞、追丢失的南瓜——满月时情绪会明显变得更暴躁。',
      knownInfo: [
        '确认属于狼人一族Logan家族。',
        '负责打理小镇上各种琐碎的日常事务,几乎没什么时间留给自己。',
        '社区报告:满月期间会明显更难相处。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: '女巫(Webb家族)', typeLabel: '女巫',
      desc: '一位务农的女巫,教你魔法作物和第一个法术Aquaflux——Fiona和Noel的表亲。',
      knownInfo: [
        '确认属于女巫一族Webb家族。',
        '通过书信触发"作物的魔法"任务,通向法杖修复和第一个真正的法术。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: '吸血鬼(Ambrosia家族)', typeLabel: '吸血鬼',
      desc: '一位老派吸血鬼,你的叔叔,游戏开局时常常宿醉倒在你家草坪上——Mina和Evan的父亲。',
      knownInfo: [
        '确认是你的叔叔,Mina和Evan的父亲。',
        '触发"Orlock的酿酒计划"任务,通向"遥远的桥"。',
        '在发售周的报道中被描写成一个喜剧感十足的角色。',
      ],
      romanceYes: '据报道Orlock是可攻略角色。具体的礼物偏好和心动事件仍在实机验证中。',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: '狼人', typeLabel: '狼人',
      desc: 'Moonlight Peaks的镇长,狼人Logan家族的家长,不可攻略。',
      knownInfo: [
        '已确认为镇长,负责在镇公所办理登记手续,并把Chester交给你。',
        'Logan家族家长,Saga和Ludo的母亲,Ridge的姐姐。',
        '经营Howling Hammer工具升级商店,周一到周五18:00至凌晨营业。',
      ],
      romanceYes: '', romanceNo: 'Brook未被确认为可攻略角色。', romanceTbc: '',
    },
    'the-warlock': {
      name: '神秘术士', familyLabel: '女巫', typeLabel: '女巫',
      desc: '在一篇试玩报道中出现过,是镇上一位相当自恋的术士,真实姓名尚未确认。',
      knownInfo: [
        '在一篇试玩报道中出现过的一位自恋术士。',
        '据那篇报道描述,他会不断打断对话向玩家搭讪调情。',
        '他在游戏里的真实姓名目前还没有确认。',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: '这位术士能不能被攻略目前还没有确认——持续关注实机验证。',
    },
    evan: {
      name: 'Evan', familyLabel: '吸血鬼(Ambrosia家族)', typeLabel: '吸血鬼',
      desc: '一位沉默寡言、性格疏离的吸血鬼,与姐姐Mina一起经营Coffee & Coffins;父亲Orlock一直催他接手家族姓氏。',
      knownInfo: [
        '确认是Orlock的儿子、Mina的弟弟,两人共同经营小镇咖啡馆。',
        '比起接手父亲想让他继承的家族姓氏,他更愿意数星星。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    ridge: {
      name: 'Ridge', familyLabel: '狼人(Logan家族)', typeLabel: '狼人',
      desc: '小镇的木匠——健壮可靠、性情温和,会利用变身狼人的时间去寻找优质木材。Brook的弟弟。',
      knownInfo: [
        '确认是身为木匠的狼人,性格温和不好斗。',
        '会卖给你第一座谷仓(4000金+材料,占地10x6,建造需1晚,可养4只动物),这是在Luna那里买家畜之前的必要条件。',
        '经营Howling Hammer工具升级商店,周一到周五18:00至凌晨营业。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    jada: {
      name: 'Jada', familyLabel: '人类(Henderson家族)', typeLabel: '人类',
      desc: '一位活力四射的超自然爱好者兼古物收藏家,谈起历史来滔滔不绝——Persephone的侄女,Winston的姐姐。',
      knownInfo: [
        '确认属于人类Henderson家族,与Persephone、Winston一同搬来小镇。',
        '据报告是古物收藏家兼历史爱好者,与她那位持怀疑态度的弟弟Winston形成鲜明对比。',
        '她那种上气不接下气、语速飞快的说话方式,让她在小镇上小有名气。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    dragan: {
      name: 'Dragan', familyLabel: '预言者(Khazan家族)', typeLabel: '预言者',
      desc: 'Khazan预言者三兄妹中的老大——自己的预言经常不准,但更为人所知的身份是卡牌游戏Nokturna的设定内发明者。',
      knownInfo: [
        '确认是预言者一族Khazan家族的长子,排在Aras和Alina之前。',
        '据报道是设定内Nokturna游戏的发明者。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    alina: {
      name: 'Alina', familyLabel: '预言者(Khazan家族)', typeLabel: '预言者',
      desc: 'Khazan家族里叛逆的那一个——固执、火爆,受不了谎言,拥有不走寻常路的预言能力,偏爱阴影。',
      knownInfo: [
        '据报告属于预言者一族Khazan家族——Dragan的妹妹,与Aras同辈。',
        '独自住在自己的房子里,暗示她是个定居的居民,而不是次要配角。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    death: {
      name: 'Death(死神)', familyLabel: '无家族', typeLabel: '死神',
      desc: '死神本人,来小镇度假放松——幽默感很干,负责打理当地的墓地,既收集花朵也收集灵魂。',
      knownInfo: [
        '确认是可攻略角色——不再只是发售前的传闻。',
        '住在Misty Shores墓地区域的"死神小屋"。',
        '确认的解锁流程:在通过"遥远的桥"解锁Misty Shores后,玩家会与他见面两次,之后他才会给出捕虫网。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    samael: {
      name: 'Samael', familyLabel: '吸血鬼(Ambrosia家族)', typeLabel: '吸血鬼',
      desc: '一位神秘、忧郁的吸血鬼,来自Ambrosia家族,已经经营小镇酒吧The Broken Lamp数百年。Elvira的哥哥,Orlock的侄子。',
      knownInfo: [
        '经营小镇酒吧The Broken Lamp,是Ambrosia家族一员。',
        '他的恋爱线与剧情进度绑定,要在抵达Luna Bay、遇见人鱼Hosu家族后才会解锁。',
        '确认:前置任务"神秘通道"和"神秘海湾"涉及搬开一棵倒下的树、与Ludo一起修桥,以及帮忙筹备一场婚礼——新娘是人鱼Kim,但她在婚礼当天临阵退缩了。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    elvira: {
      name: 'Elvira', familyLabel: '吸血鬼(Ambrosia家族)', typeLabel: '吸血鬼',
      desc: 'Samael的妹妹——一位富有艺术气质、闲不下来的吸血鬼,总是不停地开启新的副业,常让叔叔Orlock头疼。',
      knownInfo: [
        '确认是Samael的妹妹、Orlock的侄女。',
        '内心藏着脆弱、富有艺术气质的一面,据说只有Samael完全了解。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    kim: {
      name: 'Kim', familyLabel: '人鱼(Hosu家族)', typeLabel: '人鱼',
      desc: '一位精力无限、性格开朗的人鱼,来自Hosu家族,在剧情开始约一年后抵达小镇。',
      knownInfo: [
        '确认属于人鱼一族Hosu家族,Rei和Tae的姐妹。',
        'Hosu家族大约在第一年年中抵达,需要帮助才能重新融入小镇,一家人住在Luna Bay。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    ludo: {
      name: 'Ludo', familyLabel: '狼人(Logan家族)', typeLabel: '狼人',
      desc: 'Brook镇长无忧无虑的孩子(Saga的兄弟姐妹,Ridge的侄子/侄女),比起操心任何事情更愿意睡大觉。',
      knownInfo: [
        '确认是镇长Brook的孩子,Saga的兄弟姐妹,Ridge的侄子/侄女。',
        '经营一家出售工具魔杖(镐子、Aquaflux浇水杖、移树魔杖)的商店,帮玩家省下重复劳动的体力消耗。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    tae: {
      name: 'Tae', familyLabel: '人鱼(Hosu家族)', typeLabel: '人鱼',
      desc: '一位帅气踏实的人鱼,来自Hosu家族,对自己的外表很有自信,喜欢帮助别人找回信心。',
      knownInfo: [
        '确认属于人鱼一族Hosu家族,Kim和Rei的兄弟姐妹。',
        '被描述为忠诚且善于鼓励他人。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    winston: {
      name: 'Winston', familyLabel: '人类(Henderson家族)', typeLabel: '人类',
      desc: '小镇里的怀疑论者——不太情愿住在一个超自然的小镇里,很容易被吓到,但一旦放下戒备就相当有趣。',
      knownInfo: [
        '确认属于人类Henderson家族,与Persephone、Jada一同搬来小镇。',
        '搬来小镇是他家人的决定,不是他自己的选择——他并不相信小镇超自然的那一面。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    rei: {
      name: 'Rei', familyLabel: '人鱼(Hosu家族)', typeLabel: '人鱼',
      desc: '一位安静内向的人鱼,来自Hosu家族,对环境保护充满执着,常年在海边清理垃圾。',
      knownInfo: [
        '确认属于人鱼一族Hosu家族,Kim和Tae的姐妹。',
        '专注于海岸清洁,并教导当地人尊重自然。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    aras: {
      name: 'Aras', familyLabel: '预言者(Khazan家族)', typeLabel: '预言者',
      desc: 'Khazan预言者家族的当地裁缝,经营"Third Eye Threads"服装店。刻意避免使用自己的预言能力,好让自己的未来保持神秘。',
      knownInfo: [
        '据报告属于预言者一族Khazan家族,经营裁缝店"Third Eye Threads"——Dragan的弟弟,与Alina同辈。',
        '热爱时尚,喜欢温馨的闲聊。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    persephone: {
      name: 'Persephone', familyLabel: '人类(Henderson家族)', typeLabel: '人类',
      desc: '自由奔放的Henderson家族家长——一位人类姑姑,照顾侄女Jada和侄子Winston,刚搬来小镇,热爱占星术和水晶。',
      knownInfo: [
        '确认是人类Henderson家族的家长(Jada和Winston的姑姑)。',
        '对占星术、脉轮、灵气等神秘学话题很感兴趣——刚搬来小镇,想要开始新生活。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    llemi: {
      name: 'Llemi', familyLabel: '爱情恶魔', typeLabel: '恶魔',
      desc: '一位古灵精怪的爱情恶魔,以镇上的八卦和混乱为食,住在Pink Grove,大多只在庆典期间才会现身镇上。',
      knownInfo: [
        '据报告是Pink Grove的恶魔居民。',
        '据说只有在庆典期间才能在镇上见到她;要赢得她的心据说需要下不少功夫。',
      ],
      romanceYes: '是,已确认的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
  },
  'zh-hant': {
    'count-dracula': {
      name: '德古拉伯爵', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: '你的父親,也是小鎮的傳奇人物。走出他的陰影是整個故事的起點——他是核心劇情人物,不是可攻略角色。',
      knownInfo: [
        '他是你的父親;故事把你搬到Moonlight Peaks這件事,設定成走出他長年陰影的一步。',
        '他是故事的核心人物,而不是戀愛物件。',
        '遊戲劇情讓你逐步證明,一種更溫柔、更平靜的不死生活方式是可能的——而這正是他一直心存懷疑的事。',
      ],
      romanceYes: '', romanceNo: '德古拉伯爵不是可攻略角色。', romanceTbc: '',
    },
    saga: {
      name: 'Saga', familyLabel: '狼人(Logan家族)', typeLabel: '狼人',
      desc: '一位嘴硬心軟的狼人,一手撐起小鎮的日常運轉——修坑洞、追丟失的南瓜——滿月時情緒會明顯變得更暴躁。',
      knownInfo: [
        '確認屬於狼人一族Logan家族。',
        '負責打理小鎮上各種瑣碎的日常事務,幾乎沒什麼時間留給自己。',
        '社群報告:滿月期間會明顯更難相處。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: '女巫(Webb家族)', typeLabel: '女巫',
      desc: '一位務農的女巫,教你魔法作物和第一個法術Aquaflux——Fiona和Noel的表親。',
      knownInfo: [
        '確認屬於女巫一族Webb家族。',
        '透過書信觸發"作物的魔法"任務,通向法杖修復和第一個真正的法術。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: '吸血鬼(Ambrosia家族)', typeLabel: '吸血鬼',
      desc: '一位老派吸血鬼,你的叔叔,遊戲開局時常常宿醉倒在你家草坪上——Mina和Evan的父親。',
      knownInfo: [
        '確認是你的叔叔,Mina和Evan的父親。',
        '觸發"Orlock的釀酒計劃"任務,通向"遙遠的橋"。',
        '在發售周的報道中被描寫成一個喜劇感十足的角色。',
      ],
      romanceYes: '據報道Orlock是可攻略角色。具體的禮物偏好和心動事件仍在實機驗證中。',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: '狼人', typeLabel: '狼人',
      desc: 'Moonlight Peaks的鎮長,狼人Logan家族的家長,不可攻略。',
      knownInfo: [
        '已確認為鎮長,負責在鎮公所辦理登記手續,並把Chester交給你。',
        'Logan家族家長,Saga和Ludo的母親,Ridge的姐姐。',
        '經營Howling Hammer工具升級商店,週一到週五18:00至凌晨營業。',
      ],
      romanceYes: '', romanceNo: 'Brook未被確認為可攻略角色。', romanceTbc: '',
    },
    'the-warlock': {
      name: '神秘術士', familyLabel: '女巫', typeLabel: '女巫',
      desc: '在一篇試玩報道中出現過,是鎮上一位相當自戀的術士,真實姓名尚未確認。',
      knownInfo: [
        '在一篇試玩報道中出現過的一位自戀術士。',
        '據那篇報道描述,他會不斷打斷對話向玩家搭訕調情。',
        '他在遊戲裡的真實姓名目前還沒有確認。',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: '這位術士能不能被攻略目前還沒有確認——持續關注實機驗證。',
    },
    evan: {
      name: 'Evan', familyLabel: '吸血鬼(Ambrosia家族)', typeLabel: '吸血鬼',
      desc: '一位沉默寡言、性格疏離的吸血鬼,與姐姐Mina一起經營Coffee & Coffins;父親Orlock一直催他接手家族姓氏。',
      knownInfo: [
        '確認是Orlock的兒子、Mina的弟弟,兩人共同經營小鎮咖啡館。',
        '比起接手父親想讓他繼承的家族姓氏,他更願意數星星。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    ridge: {
      name: 'Ridge', familyLabel: '狼人(Logan家族)', typeLabel: '狼人',
      desc: '小鎮的木匠——健壯可靠、性情溫和,會利用變身狼人的時間去尋找優質木材。Brook的弟弟。',
      knownInfo: [
        '確認是身為木匠的狼人,性格溫和不好鬥。',
        '會賣給你第一座穀倉(4000金+材料,佔地10x6,建造需1晚,可養4只動物),這是在Luna那裡買家畜之前的必要條件。',
        '經營Howling Hammer工具升級商店,週一到週五18:00至凌晨營業。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    jada: {
      name: 'Jada', familyLabel: '人類(Henderson家族)', typeLabel: '人類',
      desc: '一位活力四射的超自然愛好者兼古物收藏家,談起歷史來滔滔不絕——Persephone的侄女,Winston的姐姐。',
      knownInfo: [
        '確認屬於人類Henderson家族,與Persephone、Winston一同搬來小鎮。',
        '據報告是古物收藏家兼歷史愛好者,與她那位持懷疑態度的弟弟Winston形成鮮明對比。',
        '她那種上氣不接下氣、語速飛快的說話方式,讓她在小鎮上小有名氣。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    dragan: {
      name: 'Dragan', familyLabel: '預言者(Khazan家族)', typeLabel: '預言者',
      desc: 'Khazan預言者三兄妹中的老大——自己的預言經常不準,但更為人所知的身份是卡牌遊戲Nokturna的設定內發明者。',
      knownInfo: [
        '確認是預言者一族Khazan家族的長子,排在Aras和Alina之前。',
        '據報道是設定內Nokturna遊戲的發明者。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    alina: {
      name: 'Alina', familyLabel: '預言者(Khazan家族)', typeLabel: '預言者',
      desc: 'Khazan家族裡叛逆的那一個——固執、火爆,受不了謊言,擁有不走尋常路的預言能力,偏愛陰影。',
      knownInfo: [
        '據報告屬於預言者一族Khazan家族——Dragan的妹妹,與Aras同輩。',
        '獨自住在自己的房子裡,暗示她是個定居的居民,而不是次要配角。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    death: {
      name: 'Death(死神)', familyLabel: '無家族', typeLabel: '死神',
      desc: '死神本人,來小鎮度假放鬆——幽默感很乾,負責打理當地的墓地,既收集花朵也收集靈魂。',
      knownInfo: [
        '確認是可攻略角色——不再只是發售前的傳聞。',
        '住在Misty Shores墓地區域的"死神小屋"。',
        '確認的解鎖流程:在透過"遙遠的橋"解鎖Misty Shores後,玩家會與他見面兩次,之後他才會給出捕蟲網。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    samael: {
      name: 'Samael', familyLabel: '吸血鬼(Ambrosia家族)', typeLabel: '吸血鬼',
      desc: '一位神秘、憂鬱的吸血鬼,來自Ambrosia家族,已經經營小鎮酒吧The Broken Lamp數百年。Elvira的哥哥,Orlock的侄子。',
      knownInfo: [
        '經營小鎮酒吧The Broken Lamp,是Ambrosia家族一員。',
        '他的戀愛線與劇情進度繫結,要在抵達Luna Bay、遇見人魚Hosu家族後才會解鎖。',
        '確認:前置任務"神秘通道"和"神秘海灣"涉及搬開一棵倒下的樹、與Ludo一起修橋,以及幫忙籌備一場婚禮——新娘是人魚Kim,但她在婚禮當天臨陣退縮了。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    elvira: {
      name: 'Elvira', familyLabel: '吸血鬼(Ambrosia家族)', typeLabel: '吸血鬼',
      desc: 'Samael的妹妹——一位富有藝術氣質、閒不下來的吸血鬼,總是不停地開啟新的副業,常讓叔叔Orlock頭疼。',
      knownInfo: [
        '確認是Samael的妹妹、Orlock的侄女。',
        '內心藏著脆弱、富有藝術氣質的一面,據說只有Samael完全瞭解。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    kim: {
      name: 'Kim', familyLabel: '人魚(Hosu家族)', typeLabel: '人魚',
      desc: '一位精力無限、性格開朗的人魚,來自Hosu家族,在劇情開始約一年後抵達小鎮。',
      knownInfo: [
        '確認屬於人魚一族Hosu家族,Rei和Tae的姐妹。',
        'Hosu家族大約在第一年年中抵達,需要幫助才能重新融入小鎮,一家人住在Luna Bay。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    ludo: {
      name: 'Ludo', familyLabel: '狼人(Logan家族)', typeLabel: '狼人',
      desc: 'Brook鎮長無憂無慮的孩子(Saga的兄弟姐妹,Ridge的侄子/侄女),比起操心任何事情更願意睡大覺。',
      knownInfo: [
        '確認是鎮長Brook的孩子,Saga的兄弟姐妹,Ridge的侄子/侄女。',
        '經營一家出售工具魔杖(鎬子、Aquaflux澆水杖、移樹魔杖)的商店,幫玩家省下重複勞動的體力消耗。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    tae: {
      name: 'Tae', familyLabel: '人魚(Hosu家族)', typeLabel: '人魚',
      desc: '一位帥氣踏實的人魚,來自Hosu家族,對自己的外表很有自信,喜歡幫助別人找回信心。',
      knownInfo: [
        '確認屬於人魚一族Hosu家族,Kim和Rei的兄弟姐妹。',
        '被描述為忠誠且善於鼓勵他人。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    winston: {
      name: 'Winston', familyLabel: '人類(Henderson家族)', typeLabel: '人類',
      desc: '小鎮裡的懷疑論者——不太情願住在一個超自然的小鎮裡,很容易被嚇到,但一旦放下戒備就相當有趣。',
      knownInfo: [
        '確認屬於人類Henderson家族,與Persephone、Jada一同搬來小鎮。',
        '搬來小鎮是他家人的決定,不是他自己的選擇——他並不相信小鎮超自然的那一面。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    rei: {
      name: 'Rei', familyLabel: '人魚(Hosu家族)', typeLabel: '人魚',
      desc: '一位安靜內向的人魚,來自Hosu家族,對環境保護充滿執著,常年在海邊清理垃圾。',
      knownInfo: [
        '確認屬於人魚一族Hosu家族,Kim和Tae的姐妹。',
        '專注於海岸清潔,並教導當地人尊重自然。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    aras: {
      name: 'Aras', familyLabel: '預言者(Khazan家族)', typeLabel: '預言者',
      desc: 'Khazan預言者家族的當地裁縫,經營"Third Eye Threads"服裝店。刻意避免使用自己的預言能力,好讓自己的未來保持神秘。',
      knownInfo: [
        '據報告屬於預言者一族Khazan家族,經營裁縫店"Third Eye Threads"——Dragan的弟弟,與Alina同輩。',
        '熱愛時尚,喜歡溫馨的閒聊。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    persephone: {
      name: 'Persephone', familyLabel: '人類(Henderson家族)', typeLabel: '人類',
      desc: '自由奔放的Henderson家族家長——一位人類姑姑,照顧侄女Jada和侄子Winston,剛搬來小鎮,熱愛占星術和水晶。',
      knownInfo: [
        '確認是人類Henderson家族的家長(Jada和Winston的姑姑)。',
        '對占星術、脈輪、靈氣等神秘學話題很感興趣——剛搬來小鎮,想要開始新生活。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
    llemi: {
      name: 'Llemi', familyLabel: '愛情惡魔', typeLabel: '惡魔',
      desc: '一位古靈精怪的愛情惡魔,以鎮上的八卦和混亂為食,住在Pink Grove,大多隻在慶典期間才會現身鎮上。',
      knownInfo: [
        '據報告是Pink Grove的惡魔居民。',
        '據說只有在慶典期間才能在鎮上見到她;要贏得她的心據說需要下不少功夫。',
      ],
      romanceYes: '是,已確認的可攻略角色。', romanceNo: '', romanceTbc: '',
    },
  },};
