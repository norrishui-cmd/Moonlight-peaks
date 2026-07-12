// src/i18n/quests-side-de.ts
// German translations for side quests (title/summary/reward/troubleshooting text only).
// slug/npc/status/related are shared from data/quests-side.ts.
export type SideQuestTrDe = { title: string; summary: string; reward?: string; troubleshooting?: { q: string; a: string }[] };

export const sideQuestsDe: Record<string, SideQuestTrDe> = {
  'noels-fishing-contest': {
    title: 'Noels Angelwettbewerb (Erste Angelrute)',
    summary: 'Bestätigt: Innerhalb deiner ersten paar Spielnächte fordert dich Noel am Fluss zu einem Angelwettbewerb heraus \u2014 fang 3 verschiedene Fischarten, bevor er es tut. Es ist zeitlos, also ein leichter Sieg.',
    reward: 'Deine erste Angelrute, plus einen Münzbonus',
    troubleshooting: [
      { q: 'Ich habe noch keine Angelrute \u2014 wo bekomme ich eine her?', a: 'Bestätigt (abgeglichen mit whisperofthehouse.com\u2019s Unlock-Gate-Guide): Die Angelrute wird in keinem Laden verkauft \u2014 sie ist eine Questbelohnung von Noels Angelwettbewerb. Wenn du Noel am Fluss noch nicht getroffen hast, ist das der eigentliche Blocker, kein fehlender Kauf.' },
      { q: 'Ich finde Noel nicht, um den Wettbewerb zu starten \u2014 was tun?', a: 'Community-berichtet: Noel findet sich typischerweise früh im Spiel am Fluss. Wenn mehrere Spielnächte ohne Anzeichen von ihm vergangen sind, prüfe, ob du die frühesten Setup-Quests (Am Rathaus registrieren, Die Stadtbewohner treffen) abgeschlossen hast, da manche frühen NPCs erst danach erscheinen.' },
    ],
  },
  'fix-the-roof': {
    title: 'Das Dach reparieren (Hausupgrades gesperrt)',
    summary: 'Bestätigt: eine Quest von Ridge, die Hausupgrades freischaltet, die danach am Howling Hammer gekauft werden. Sie schaltet außerdem den Refiner-Bauplan frei.',
    reward: 'Zugang zu Hausupgrades, Refiner-Bauplan',
    troubleshooting: [
      { q: 'Der Howling Hammer verkauft mir keine Hausupgrades \u2014 warum?', a: 'Bestätigt: Hausupgrades sind hinter dem Abschluss von "Das Dach reparieren" mit Ridge gesperrt. Wenn die Upgrade-Optionen am Howling Hammer nicht erscheinen, ist diese Quest der fehlende Schritt, kein Laden-Bug.' },
      { q: 'Ich habe keinen Refiner und kann kein Fodder oder Bretter herstellen \u2014 was blockiert das?', a: 'Bestätigt: Der Refiner-Bauplan ist eine Belohnung derselben Dach-Reparatur-Questkette, nicht separat kaufbar. Schließe zuerst "Das Dach reparieren" ab.' },
    ],
  },
  'the-magic-of-crops': {
    title: 'Die Magie der Feldfrüchte (Aquaflux / Kaputter Zauberstab)',
    summary: 'Bestätigt: eine briefausgelöste Quest von Luna, die den Aquaflux-Zauber freischaltet (magisches, automatisches Gießen) \u2014 eine Voraussetzung in der Kette, die zu "The Quest for Mana" und letztlich zur Zauberstab-Reparatur und zum Zaubern allgemein führt.',
    reward: 'Aquaflux-Zauber freigeschaltet',
    troubleshooting: [
      { q: 'Mein Zauberstab ist noch kaputt \u2014 wie repariere ich ihn?', a: 'Community-berichtet (whisperofthehouse.com): Die Zauberstab-Reparatur ist kein Ladenkauf \u2014 sie kommt über diese Story-Kette (Luna \u2192 Sabrina \u2192 Fiona \u2192 Mana-Extraktor \u2192 Aquaflux). Wenn du "Die Magie der Feldfrüchte" von Luna noch nicht ausgelöst hast, ist das der eigentliche Ausgangspunkt.' },
      { q: 'Ich habe kein Aquaflux und muss von Hand gießen \u2014 was ist der Auslöser?', a: 'Bestätigt: Diese Quest wird brieflich von Luna ausgelöst. Falls sie noch nicht begonnen hat, stelle sicher, dass du die früheren Story-Beats (bis "A Bridge Too Far") abgeschlossen hast, da spätere Briefe meist hinter früheren Quests gesperrt sind.' },
    ],
  },
  'the-net-and-death': {
    title: 'Das Netz freischalten (Death & Soul Blobs)',
    summary: 'Bestätigt (abgeglichen mit whisperofthehouse.com): Das Netz kommt über Death, gesperrt hinter Fortschritt bei Orlocks Weinplan, "A Bridge Too Far" und Misty-Shores-Zugang \u2014 kein Ladenartikel. Nach deinem zweiten Treffen mit Death in der Stadt stellt er die 100 Soul Blobs vor und bittet dich, sie mit dem Netz einzusammeln.',
    reward: 'Das Netz (Insekten-/Soul-Blob-Fang); Antike Uhr beim Sammeln aller 100 Soul Blobs (verlängert die Nacht von 15 auf 25 Minuten)',
    troubleshooting: [
      { q: 'Ich kann keine Insekten oder Soul Blobs fangen \u2014 wo ist das Netz?', a: 'Bestätigt: Das Netz wird nirgendwo verkauft \u2014 es wird über Death freigeschaltet, gesperrt hinter früherem Story-Fortschritt (Orlocks Weinplan, A Bridge Too Far und Misty-Shores-Zugang). Wenn du Death noch nicht zweimal getroffen hast, ist das der Blocker.' },
      { q: 'Wo finde ich Death in Moonlight Peaks?', a: 'Bestätigt: in der Stadt, verbunden mit dem Ambrosia-Friedhof-Bereich, der sich nach "A Bridge Too Far" öffnet, wenn Misty Shores freigeschaltet wird.' },
    ],
  },
  'vampster-collection-quest': {
    title: 'Vampster-Sammlung',
    summary: 'Bestätigt: Alina, gefunden in der Höhle des Echos, erklärt, dass die 53 in der Stadt verstreuten Vampster verloren sind, und bittet dich, sie einzeln zu einer Höhle in Misty Shores nach Hause zu bringen.',
    troubleshooting: [
      { q: 'Ich verliere immer wieder den Überblick über einen Vampster, den ich getragen habe \u2014 warum?', a: 'Community-berichtet: Das Ansprechen eines Bewohners oder das Auslösen einer Zwischensequenz lässt dich den gerade getragenen Vampster fallen. Er bleibt dort liegen, wo du ihn fallen gelassen hast \u2014 räume also dialoglastige Bereiche, bevor du mit einem losziehst.' },
      { q: 'Ich kann diese Quest nicht starten \u2014 wo ist Alina?', a: 'Bestätigt: in der Höhle des Echos, die erst öffnet, nachdem "A Bridge Too Far" Misty Shores freischaltet. Wenn du die Höhle des Echos noch nicht erreicht hast, ist das die Voraussetzung.' },
    ],
  },
  'albertus-job-board': {
    title: "Albertus' Jobs werden nicht angezeigt",
    summary: 'Bestätigt: ein laufendes, wiederholbares System statt einer einmaligen Quest \u2014 kurze Anfragen, die auf Albertus\u2019 Brett am Rathaus gepostet werden, jede belohnt mit Münzen, manchmal einem Gegenstand, und Beziehungspunkten mit der Person, die sie gepostet hat.',
    troubleshooting: [
      { q: 'Das Job-Brett am Rathaus wirkt leer \u2014 ist das ein Bug?', a: 'Community-berichtet: Das Brett ist hinter dem Erreichen des Rathauses über "Am Rathaus registrieren" gesperrt. Falls du das abgeschlossen hast und trotzdem nichts siehst, aktualisieren sich Jobs möglicherweise nach einem Zeitplan statt immer etwas Gepostetes zu haben \u2014 prüfe nach dem Schlafen erneut.' },
    ],
  },
  'npc-stuck-cant-interact': {
    title: 'Ein NPC ist stecken geblieben / eingefroren und reagiert nicht',
    summary: 'Bestätigt über die offizielle Known-Issues-Verfolgung des Spiels und Steam-Community-Bugberichte: Manche Spieler finden einen bestimmten NPC (besonders Orlock) an Ort und Stelle festgefroren und reagiert nicht auf Interaktion. Dies ist ein bekannter, ungelöster Bug, kein Quest-Gating-Problem.',
    troubleshooting: [
      { q: 'Ein NPC reagiert nicht, wenn ich versuche, mit ihm zu sprechen \u2014 ist das ein Bug oder übersehe ich etwas?', a: 'Bestätigt über die offizielle Known-Issues-Verfolgung: Dies wurde gemeldet, besonders mit Orlock, der stecken bleibt. Das Neuladen des Bereichs und Schlafen bis zum nächsten Tag haben bei betroffenen Spielern bisher nicht geholfen, und es gibt noch keine bestätigte Lösung. Das ist ein echter Bug, keine übersehene Quest-Anforderung.' },
      { q: 'Was soll ich tun, wenn mir das passiert?', a: 'Bestätigt: Melde es an support@xseedgames.com mit deiner Plattform und einer Beschreibung, was passiert ist, da es noch keinen bestätigten spielerseitigen Workaround gibt.' },
    ],
  },
  'form-wheel-softlock': {
    title: 'Im Formen-Rad stecken geblieben / kann mich nicht bewegen',
    summary: 'Bestätigt über einen offiziellen Entwickler-Bug-Tracking-Thread auf Steam: Manche Tastatur/Maus-Spieler sind stecken geblieben, während das Gestaltwandlungs-Formen-Rad geöffnet blieb (besonders beim Verlassen des Ambrosia-Anwesens), ohne Möglichkeit, es zu schließen oder die Kontrolle zurückzuerlangen.',
    troubleshooting: [
      { q: 'Ich stecke mit offenem Formen-Rad fest und kann mich nicht bewegen \u2014 Hilfe?', a: 'Bestätigt über einen offiziellen XSEED-Games-Entwickler-Thread: Dies hat Tastatur/Maus-Spieler betroffen, oft beim Verlassen des Ambrosia-Anwesens. Eine gemeldete Ursache war, dass keine Taste für die Formen-Rad-Aktion belegt war \u2014 prüfe deine Tastenbelegung unter Einstellungen auf eine "Formen-Rad öffnen"-Belegung (Standard ist bei manchen Setups R) und weise eine zu, falls sie leer ist.' },
      { q: 'Ich bin in diesem Zustand gefangen und komme nicht ins Einstellungsmenü \u2014 was jetzt?', a: 'Bestätigt über denselben Entwickler-Thread: Betroffene Spieler mussten das Spiel als letzten Ausweg zwangsschließen (Alt+F4 auf PC). Da das Spiel nur beim Schlafen speichert, verlierst du möglicherweise Fortschritt seit deinem letzten Speicherstand \u2014 melde das Problem über den offiziellen Bug-Thread oder support@xseedgames.com, damit eine Lösung priorisiert werden kann.' },
    ],
  },
  'elviras-treasure-hunt': {
    title: 'Elviras Schatzsuche (Raiders of the Lost Art)',
    summary: 'Bestätigt: Elvira schickt dich auf eine Schatzsuche mit 5 Hinweisen durch die Stadt \u2014 gemeldete Route: Samaels Bar \u2192 der Friedhof \u2192 eine Glocke in den Minen \u2192 die Höhle des Echos \u2192 der Khazan-Tempel. Der Abschluss ist mit der Errungenschaft "Raiders of the Lost Art" verbunden.',
    reward: 'Errungenschaft "Raiders of the Lost Art"',
    troubleshooting: [
      { q: 'Ich stecke bei einem von Elviras Schatzsuche-Hinweisen fest \u2014 wie lautet die Route?', a: 'Community-berichtet: Die bestätigte Reihenfolge der Orte ist Samaels Bar (The Broken Lamp), dann der Friedhof, dann eine Glocke in den Minen, dann die Höhle des Echos, und schließlich der Khazan-Tempel. Wenn du bei einem Hinweis feststeckst, prüfe noch einmal, ob du den vorherigen Ort vollständig erkundet hast \u2014 Hinweise sind Berichten zufolge an bestimmte Stellen innerhalb jedes Bereichs gebunden, nicht nur an das Betreten der allgemeinen Umgebung.' },
      { q: 'Wo starte ich diese Quest?', a: 'Bestätigt: Sie wird von Elvira gegeben. Falls du sie noch nicht getroffen hast oder sie keine Quest anbietet, könnte ihre Hinweiskette hinter früherem Story-Fortschritt gesperrt sein, da der Khazan-Tempel-Abschnitt Bereiche erfordert, die sich später öffnen.' },
    ],
  },
  'ui-softlock-after-shop': {
    title: 'UI eingefroren / Softlock nach Verlassen eines Ladens',
    summary: 'Bestätigt über offizielle Steam-Community-Bugberichte: Bei manchen Spielern deaktivieren sich nach dem Verlassen eines Ladens oder einer Quest-Zwischensequenz alle UI-Elemente, sodass kein Menü mehr geöffnet und keine anderen Orte betreten werden können \u2014 meist gemeldet nach etwa 2 Stunden durchgehendem Spiel, manchmal mit vorherigem Ruckeln.',
    troubleshooting: [
      { q: 'Ich habe einen Laden oder eine Zwischensequenz verlassen und jetzt reagiert nichts mehr \u2014 ist das ein bekannter Bug?', a: 'Bestätigt über mehrere offizielle Steam-Community-Berichte: Ja, dies ist ein bekannter Softlock, am häufigsten gemeldet nach etwa 2 Stunden durchgehendem Spiel, manchmal mit Ruckeln kurz davor. Das liegt nicht an dir.' },
      { q: 'Gibt es eine Lösung oder einen Workaround?', a: 'Noch keine bestätigte spielerseitige Lösung. Betroffene Spieler mussten das Spiel zwangsschließen. Da Moonlight Peaks nur beim Schlafen speichert, verlierst du möglicherweise Fortschritt seit deinem letzten Speicherstand \u2014 melde das Problem mit deinen Plattformdetails an support@xseedgames.com, damit die Entwickler einen Patch priorisieren können.' },
      { q: 'Kann ich das verhindern?', a: 'Nicht bestätigt, aber als Vorsichtsmaßnahme: Schlafe öfter zum Speichern als in anderen Farming-Sims, da es kein manuelles Speichern gibt, und erwäge eine kurze Pause alle paar Stunden, wenn du Ruckeln bemerkst.' },
    ],
  },
  'lost-save-data': {
    title: 'Speicherdaten verloren / Fortschritt verschwunden',
    summary: 'Bestätigt über offizielle Steam-Community-Berichte: Spieler haben nach einem Absturz oder unerwartetem Herunterfahren (z. B. Stromausfall) mehrere Nächte Fortschritt verloren, da Moonlight Peaks nur beim Schlafen speichert, ohne manuelle Speicheroption.',
    troubleshooting: [
      { q: 'Mein Spielstand ist nach einem Absturz oder Stromausfall verschwunden \u2014 kann ich ihn zurückbekommen?', a: 'Bestätigt über offizielle Steam-Community-Berichte: Das ist auch anderen Spielern passiert, und es gibt noch keine bestätigte Wiederherstellungsmethode \u2014 das Spiel schreibt nur einen Spielstand, wenn du in deinem Sarg schläfst, sodass alles seit deinem letzten Schlaf verloren geht, wenn das Spiel unerwartet schließt.' },
      { q: 'Wo sind meine Speicherdateien, falls ich sie selbst sichern möchte?', a: 'Bestätigt über einen offiziellen XSEED-Games-Entwicklerbeitrag \u2014 Windows: %USERPROFILE%/AppData/LocalLow/Little Chicken Game Company/Moonlight Peaks/. Mac: ~/Library/Application Support/Little Chicken Game Company/Moonlight Peaks/. Das manuelle Kopieren dieses Ordners nach einer guten Spielsitzung ist eine vernünftige Vorsichtsmaßnahme, bis (falls) manuelle/Mini-Speicherstände hinzugefügt werden.' },
      { q: 'Wie melde ich das den Entwicklern?', a: 'Bestätigt: E-Mail an support@xseedgames.com. Falls der Verlust nach einem Absturz auftrat, prüfe auch %LOCALAPPDATA%\\CrashDumps auf einen "Moonlight Peaks.exe"-Absturzbericht und erwähne ihn \u2014 die Entwickler haben in ihrem offiziellen Bug-Tracking-Thread um diese Details gebeten.' },
      { q: 'Gibt es eine manuelle Speicheroption?', a: 'Derzeit nicht \u2014 bestätigt abwesend zum Release. Im Sarg zu schlafen ist die einzige Möglichkeit zu speichern, und es ist ein häufig gewünschtes Feature im offiziellen Steam-Community-Bug-Thread des Spiels.' },
    ],
  },
};
