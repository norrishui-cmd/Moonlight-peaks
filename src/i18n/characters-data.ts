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

export const charTranslations: Record<'es' | 'ja' | 'zh' | 'zh-hant' | 'de', Record<string, CharTranslation>> = {
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
      desc: '你的父亲,也是小镇的传奇人物,你此行正是为了走出他的阴影。他是故事的核心人物——不是可攻略角色。',
      knownInfo: [
        '他是你的父亲;故事把你搬到 Moonlight Peaks 这件事,设定成走出他长年阴影的一步。',
        '他是故事的核心人物,而不是恋爱对象。',
        '游戏的设定是让你证明一种更温柔、更善良的不死生活方式是可能的——而这正是他一直心存怀疑的事。',
      ],
      romanceYes: '', romanceNo: '德古拉伯爵不是可攻略角色。', romanceTbc: '',
    },
    saga: {
      name: 'Saga', familyLabel: '狼人', typeLabel: '狼人',
      desc: '开发商公开介绍过的一位居民,她的情绪状态会随满月变化。',
      knownInfo: [
        '开发商公开介绍过的一位狼人居民。',
        '据描述,她的状态会随满月起伏变化。',
        'Steam Next Fest 的一篇报道特意点名提到了她。',
      ],
      romanceYes: 'Saga 是官方确认的可攻略角色。礼物偏好和心动事件会在正式版确认后补充。',
      romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: '女巫', typeLabel: '女巫',
      desc: '据报道是一位务农的女巫——很可能是前期法术和园艺知识的重要来源。',
      knownInfo: [
        '在试玩报道中被描述为一位务农的女巫。',
        '很可能是前期法术和园艺知识的重要来源。',
        '具体细节要等正式版上线后确认。',
      ],
      romanceYes: '据报道 Luna 是可攻略角色。礼物偏好和心动事件会在正式版确认后补充。',
      romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: '据报道是某个吸血鬼家族的家主——在镇上是位带着旧世界影响力的人物。',
      knownInfo: [
        '据报道是某个吸血鬼家族的家主。',
        '在试玩报道里被描写成一个喜剧感十足的角色。',
        '在镇上的吸血鬼群体中带着旧世界式的存在感。',
      ],
      romanceYes: '据报道 Orlock 是可攻略角色。礼物偏好和心动事件会在正式版确认后补充。',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: '狼人', typeLabel: '狼人',
      desc: 'Moonlight Peaks 的镇长,狼人洛根(Logan)家族的家长,不可攻略。',
      knownInfo: [
        '已确认为镇长,负责在镇公所办理登记手续,并把 Chester 交给你。',
        '洛根家族家长,Saga 和 Ludo 的父亲,Ridge 的兄长。',
        '经营 Howling Hammer 工具升级商店,周一到周五 18:00 至凌晨营业。',
      ],
      romanceYes: '', romanceNo: 'Brook 未被确认为可攻略角色。', romanceTbc: '',
    },
    'the-warlock': {
      name: '神秘术士', familyLabel: '女巫', typeLabel: '女巫',
      desc: '在一篇试玩报道中出现过,是镇上一位相当自恋的术士,真实姓名尚未确认。',
      knownInfo: [
        '在一篇试玩报道中出现过的一位自恋术士。',
        '据那篇报道描述,他会不断打断对话向玩家搭讪调情。',
        '他在游戏里的真实姓名目前还没有确认。',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: '这位术士能不能被攻略目前还没有确认——正式版上线后会更新。',
    },
  },
  'zh-hant': {
    'count-dracula': {
      name: '德古拉伯爵', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: '你的父親,也是小鎮的傳奇人物,你此行正是為了走出他的陰影。他是故事的核心人物——不是可攻略角色。',
      knownInfo: [
        '他是你的父親;故事把你搬到 Moonlight Peaks 這件事,設定成走出他長年陰影的一步。',
        '他是故事的核心人物,而不是戀愛對象。',
        '遊戲的設定是讓你證明一種更溫柔、更善良的不死生活方式是可能的——而這正是他一直心存懷疑的事。',
      ],
      romanceYes: '', romanceNo: '德古拉伯爵不是可攻略角色。', romanceTbc: '',
    },
    saga: {
      name: 'Saga', familyLabel: '狼人', typeLabel: '狼人',
      desc: '開發商公開介紹過的一位居民,她的情緒狀態會隨滿月變化。',
      knownInfo: [
        '開發商公開介紹過的一位狼人居民。',
        '據描述,她的狀態會隨滿月起伏變化。',
        'Steam Next Fest 的一篇報道特意點名提到了她。',
      ],
      romanceYes: 'Saga 是官方確認的可攻略角色。禮物偏好和心動事件會在正式版確認後補充。',
      romanceNo: '', romanceTbc: '',
    },
    luna: {
      name: 'Luna', familyLabel: '女巫', typeLabel: '女巫',
      desc: '據報道是一位務農的女巫——很可能是前期法術和園藝知識的重要來源。',
      knownInfo: [
        '在試玩報道中被描述為一位務農的女巫。',
        '很可能是前期法術和園藝知識的重要來源。',
        '具體細節要等正式版上線後確認。',
      ],
      romanceYes: '據報道 Luna 是可攻略角色。禮物偏好和心動事件會在正式版確認後補充。',
      romanceNo: '', romanceTbc: '',
    },
    orlock: {
      name: 'Orlock', familyLabel: '吸血鬼', typeLabel: '吸血鬼',
      desc: '據報道是某個吸血鬼家族的家主——在鎮上是位帶著舊世界影響力的人物。',
      knownInfo: [
        '據報道是某個吸血鬼家族的家主。',
        '在試玩報道里被描寫成一個喜劇感十足的角色。',
        '在鎮上的吸血鬼群體中帶著舊世界式的存在感。',
      ],
      romanceYes: '據報道 Orlock 是可攻略角色。禮物偏好和心動事件會在正式版確認後補充。',
      romanceNo: '', romanceTbc: '',
    },
    brook: {
      name: 'Brook', familyLabel: '狼人', typeLabel: '狼人',
      desc: 'Moonlight Peaks 的鎮長,狼人洛根(Logan)家族的家長,不可攻略。',
      knownInfo: [
        '已確認為鎮長,負責在鎮公所辦理登記手續,並把 Chester 交給你。',
        '洛根家族家長,Saga 和 Ludo 的父親,Ridge 的兄長。',
        '經營 Howling Hammer 工具升級商店,週一到週五 18:00 至凌晨營業。',
      ],
      romanceYes: '', romanceNo: 'Brook 未被確認為可攻略角色。', romanceTbc: '',
    },
    'the-warlock': {
      name: '神秘術士', familyLabel: '女巫', typeLabel: '女巫',
      desc: '在一篇試玩報道中出現過,是鎮上一位相當自戀的術士,真實姓名尚未確認。',
      knownInfo: [
        '在一篇試玩報道中出現過的一位自戀術士。',
        '據那篇報道描述,他會不斷打斷對話向玩家搭訕調情。',
        '他在遊戲裡的真實姓名目前還沒有確認。',
      ],
      romanceYes: '', romanceNo: '', romanceTbc: '這位術士能不能被攻略目前還沒有確認——正式版上線後會更新。',
    },
  },
};
