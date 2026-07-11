// src/i18n/faq-de.ts
// German translations for all FAQ entries — q/a text only. slug/cat/related fields are shared
// from the English faqs array in data/faq.ts. Only entries with a real, sourced answer are
// translated here; nothing is invented.
export type FaqTranslationDe = { q: string; a: string; more?: string[] };

export const faqDe: Record<string, FaqTranslationDe> = {
  // ── Platforms, price & demo ──
  'when-does-moonlight-peaks-release': {
    q: 'Wann erscheint Moonlight Peaks?',
    a: 'Moonlight Peaks erschien am 7. Juli 2026 und ist jetzt erhältlich.',
    more: ['Es kam am selben Tag auf Steam (PC und Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2 und Android über Google Play heraus.'],
  },
  'how-much-does-moonlight-peaks-cost': {
    q: 'Was kostet Moonlight Peaks?',
    a: 'Es kostet 34,99 $ auf Steam (PC/Mac), Switch und Android, und 39,99 $ auf Switch 2.',
    more: ['In der ersten Woche gibt es einen Launch-Rabatt, und ein Switch-zu-Switch-2-Upgrade wurde erwähnt.'],
  },
  'what-platforms-is-moonlight-peaks-on': {
    q: 'Auf welchen Plattformen ist Moonlight Peaks erhältlich?',
    a: 'Moonlight Peaks ist jetzt erhältlich auf Steam (Windows und Mac), Steam Deck, Nintendo Switch, Nintendo Switch 2 und Android über Google Play.',
  },
  'is-moonlight-peaks-on-ps5-or-xbox': {
    q: 'Ist Moonlight Peaks auf PS5 oder Xbox erhältlich?',
    a: 'Kurz gesagt: nein. Keine PlayStation- oder Xbox-Version wurde angekündigt. Die bestätigten Plattformen sind Steam, Steam Deck, Switch, Switch 2 und Android.',
    more: ['Falls später eine PS5- oder Xbox-Version angekündigt wird, aktualisieren wir diese Seite.'],
  },
  'is-there-a-moonlight-peaks-demo': {
    q: 'Gibt es eine Moonlight-Peaks-Demo?',
    a: 'Ja — eine kostenlose Demo ist auf Steam und im Nintendo eShop verfügbar (auch auf Switch 2 spielbar).',
    more: ['Sie enthält die Charaktererstellung und gemütliche Aktivitäten wie Angeln, Blumenarrangements und Stickerei, plus frühe Interaktionen mit den Stadtbewohnern.'],
  },
  'does-demo-progress-carry-over': {
    q: 'Wird der Demo-Fortschritt in Moonlight Peaks übernommen?',
    a: 'Nein — es wurde keine Übernahme bestätigt, das Hauptspiel beginnt also unabhängig davon neu, wie weit du in der Demo gekommen bist. Betrachte die Demo als Vorgeschmack, um Ton, Steuerung und frühen Spielablauf zu testen.',
  },

  // ── General ──
  'what-is-moonlight-peaks-about': {
    q: 'Worum geht es in Moonlight Peaks?',
    a: 'Es ist ein gemütlicher Vampir-Lebenssimulator. Du spielst das Kind von Graf Dracula, verlässt die Stadt, um einen verlassenen Familienhof in einer übernatürlichen Stadt voller Werwölfe, Hexen, Meerjungfrauen und mehr wiederherzustellen.',
    more: ['Du bewirtschaftest den Hof nachts, lernst Magie und braust Tränke, und freundest dich mit den Einheimischen aus den sieben Familien der Stadt an oder gehst Romanzen mit ihnen ein.'],
  },
  'who-makes-moonlight-peaks': {
    q: 'Wer entwickelt Moonlight Peaks?',
    a: 'Es wird von der Little Chicken Game Company entwickelt, mit XSEED Games als Publisher in Amerika und Marvelous Europe in Europa.',
  },
  'is-moonlight-peaks-multiplayer': {
    q: 'Ist Moonlight Peaks ein Multiplayer-Spiel?',
    a: 'Nein — Moonlight Peaks ist reines Singleplayer. Es wurde kein Multiplayer oder Koop angekündigt; Steam führt es als Singleplayer, und ein Entwickler wurde in Steam-Community-Diskussionen direkt nach Online-Koop gefragt, ohne dass eine Bestätigung erfolgte.',
    more: ['Falls Koop später angekündigt wird, aktualisieren wir diese Seite.'],
  },
  'moonlight-peaks-reddit-discord-community': {
    q: 'Gibt es ein offizielles Moonlight-Peaks-Reddit oder -Discord?',
    a: 'Wir haben bisher kein dediziertes offizielles Subreddit gefunden — wir raten nicht und verlinken keine inoffizielle Community als offiziell. Die bestätigten Community-Anlaufstellen sind der offizielle Discord-Server und die Steam-Community-Diskussionsforen, beide von den Entwicklern verlinkt.',
    more: ['Falls ein offizielles Subreddit bestätigt wird, fügen wir es hier hinzu, statt auf ein unverifiziertes zu verweisen.'],
  },
  'how-to-change-portrait-style': {
    q: 'Wie ändert man den Porträtstil des Charakters in Moonlight Peaks?',
    a: 'Bestätigt zum Release: Öffne das Hauptmenü (der "+"-Knopf auf Nintendo Switch), um zwischen zwei Voreinstellungen für das Porträt deines Charakters zu wechseln — ein Cartoon-Stil mit realistischer Schattierung oder ein niedlicherer, Anime-inspirierter Stil.',
  },
  'moonlight-peaks-age-rating': {
    q: 'Wie lautet die Altersfreigabe für Moonlight Peaks?',
    a: 'Bestätigt zum Release: PEGI 12 in Großbritannien/Europa und ESRB Teen (T) in den USA, aufgrund von Alkoholbezügen (du kannst Bier und Wein herstellen und trinken) und leicht anzüglicher romantischer Sprache.',
  },
  'moonlight-peaks-crashing-freezing': {
    q: 'Warum stürzt Moonlight Peaks ab oder friert ein?',
    a: 'Mehrere bestätigte Spielerberichte beschreiben kurze Einfrierungen alle paar Sekunden (selbst auf High-End-PCs) und Abstürze beim Verlassen des Hofs oder beim Start auf Steam Deck. Es gibt noch keine offizielle Lösung, aber das Aktualisieren der GPU-Treiber, das Einstellen des "Höchstleistung"-Modus und der Wechsel zu Proton 9.0-4 auf Steam Deck haben manchen Spielern geholfen.',
  },
  'moonlight-peaks-controller-not-working': {
    q: 'Mein Controller funktioniert in Moonlight Peaks nicht — was tun?',
    a: 'Dies ist ein gemeldetes, ungelöstes Problem — Controller funktionieren während der Charaktererstellung, können danach aber nicht mehr reagieren, wobei die Neubelegungsoptionen ausgegraut sind. Versuche, deinen Controller zu trennen und neu zu verbinden, oder wechsle zu Tastatur/Maus, bis eine offizielle Lösung erscheint.',
  },
  'moonlight-peaks-crops-wither-season-change': {
    q: 'Sterben Feldfrüchte bei einem Jahreszeitenwechsel in Moonlight Peaks?',
    a: 'Ja — von Testern bestätigt: Wenn der Frühling in den Sommer übergeht (und vermutlich auch bei anderen Jahreszeitenwechseln), welken Frühlings-Feldfrüchte, auch magische. Plane deine Ernten um die Jahreszeitengrenzen herum.',
  },
  'moonlight-peaks-mana-stamina-balance': {
    q: 'Ist das Mana-/Ausdauer-Management in Moonlight Peaks schwierig?',
    a: 'Mehrere Tester bemängelten das Mana-Management, besonders früh im Spiel — du startest mit einem kleinen Mana-Pool, der sich nur um einen Stern pro Nachtschlaf auffüllt, und Essen/Getränke, die es wiederherstellen, sind früh selten. Mehrere Kritiker fanden, dass dies zusammen mit der Ausdauerleiste und der Sonnenaufgangs-Deadline eine bessere Balance vertragen könnte.',
  },
  'moonlight-peaks-night-length-cycle': {
    q: 'Wie lang ist eine Nacht in Moonlight Peaks?',
    a: 'Bestätigt: Deine Nacht läuft von 18 bis 6 Uhr im Spiel und dauert standardmäßig etwa 15 reale Minuten (ähnlich wie ein Tag in Stardew Valley). Das Sammeln aller 100 Soul Blobs für Death belohnt dich mit der Antiken Uhr, die dies auf 25 Minuten verlängert.',
  },
  'moonlight-peaks-how-to-save': {
    q: 'Wie speichert man in Moonlight Peaks?',
    a: 'Bestätigt: Du kannst nur speichern, indem du in deinem Sarg schläfst, was dich zur nächsten Nacht um 18 Uhr weiterbringt. Es gibt kein manuelles Zwischenspeichern während der Nacht, plane deine Erledigungen also so, dass du rechtzeitig vor Sonnenaufgang zu Hause bist.',
  },
  'moonlight-peaks-starting-mana-energy': {
    q: 'Wie viel Mana und Energie hat man zu Beginn?',
    a: 'Bestätigt: Du startest mit nur 3 Mana-Punkten, die sich pro Nachtschlaf um etwa einen Stern statt vollständig regenerieren. Sowohl deine Energie (Ausdauer) als auch deine Mana-Leiste werden durch gekochtes Essen wiederhergestellt — ein kleiner Essensvorrat ist also wichtiger, als sich nur auf Cash-Crops zu verlassen.',
  },
  'moonlight-peaks-mini-map': {
    q: 'Hat Moonlight Peaks eine Minikarte?',
    a: 'Nein — bestätigt gibt es keine Minikarte. Deine Position und wichtige Orientierungspunkte erscheinen stattdessen auf einer vollständigen Übersichtskarte, die auch zeigt, wo sich Bewohner gerade befinden.',
  },
  'moonlight-peaks-well-price': {
    q: 'Was kostet der Brunnen in Moonlight Peaks?',
    a: 'Berichten zufolge kostet der Brunnen 1.500 Gold und hilft beim Gießen — eine günstigere frühe Anschaffung als die 4.000-Gold-Scheune.',
  },
  'moonlight-peaks-best-universal-gifts': {
    q: 'Was sind die besten Geschenke für alle in Moonlight Peaks?',
    a: 'Community-Geschenktests (via TheGamer und Spielerberichte) deuten darauf hin, dass Purple Tulip bei vielen Bewohnern breit beliebt ist, während Onion Seeds weithin unbeliebt sind — vermeide sie. Darüber hinaus haben die meisten Bewohner individuelle Vorlieben, die noch katalogisiert werden. Saga ist der einzige vollständig bestätigte Fall: Sie liebt Weißwein und einzelne Blumen, mag aber keine Blumensträuße.',
  },
  'moonlight-peaks-how-to-get-copper': {
    q: 'Wie bekommt man Kupfer in Moonlight Peaks?',
    a: 'Bestätigt: Kupfer kommt aus der Höhle des Echos, unten links im Bereich Misty Shores (westlich von Orlocks Anwesen). Sie ist zunächst durch die Fehde zwischen Orlock und Fiona blockiert — du musst "Orlocks Weinplan" und "A Bridge Too Far" abschließen, um den Brückenfluch aufzuheben und den Bereich zu öffnen. Baue drinnen die kupferdurchzogenen Felsen mit deiner Spitzhacke ab; große Erzcluster können 6 Erz statt 1 aus regulären Vorkommen liefern. Stelle am Ofen mit 4 Kupfererz + 1 Holzkohle einen Kupferbarren her.',
  },
  'moonlight-peaks-how-to-go-on-dates': {
    q: 'Wie geht man in Moonlight Peaks auf Verabredungen?',
    a: 'Bestätigt: Erreiche zuerst Herzstufe 4 mit einem Bewohner, dann kannst du ihn zu einer Verabredung einladen. Verabredungen laufen als Minispiele ab (z. B. einen Blumenstrauß in gewünschten Farben zusammenstellen), nicht als passive Zwischensequenzen. Um Herz-Event-Zwischensequenzen zu finden, öffne deine Karte und suche nach Ausrufezeichen (Bereich betreten) oder einer funkelnden Aura an einem Gebäude (hineingehen).',
  },
  'moonlight-peaks-tool-upgrade-materials': {
    q: 'Was braucht man, um Werkzeuge in Moonlight Peaks aufzurüsten?',
    a: 'Bestätigt: Werkzeuge werden am Howling Hammer aufgerüstet (Ridges Laden, geöffnet Mo–Fr 18 Uhr bis Mitternacht). Sprich mit Ridge, wähle Shop, dann "Ich möchte etwas kaufen" und scrolle zweimal nach rechts, um den Upgrade-Tab zu erreichen. Upgrades kosten Gold plus Kupfer-, Silber- oder Goldbarren je nach Stufe — du brauchst also zuerst Minenzugang. Die Sense kann nur zweimal aufgerüstet werden; andere Werkzeuge erreichen eine Goldstufe. Community-berichtet: Priorisiere die Spitzhacke zuerst bis Gold, da sie bestimmt, wie viel Erz dir die Höhle des Echos für die Materialien aller anderen Werkzeuge liefert.',
  },
  'moonlight-peaks-cant-interact-indoors': {
    q: 'Warum kann ich Objekte in meinem Haus nicht anklicken?',
    a: 'Dies ist ein gemeldeter, ungelöster Fehler — manche Spieler können Objekte drinnen (wie den Sarg zum Schlafen oder Haustiere) nicht anklicken, während Interaktionen im Freien einwandfrei funktionieren. Noch keine bestätigte Lösung; versuche, den Bereich neu zu laden oder bis zur nächsten Nacht zu schlafen, und melde es an support@xseedgames.com, falls es anhält.',
  },
  'moonlight-peaks-exe-deleted-antivirus': {
    q: 'Mein Antivirenprogramm hat Moonlight Peaks.exe gelöscht — was tun?',
    a: 'Berichten zufolge markieren und entfernen manche Antivirenprogramme "Moonlight Peaks.exe" fälschlicherweise, was Startfehler verursachen kann. Füge die .exe der Ausnahmeliste deines Antivirenprogramms hinzu und überprüfe die Spieldateien (Steam → Rechtsklick auf das Spiel → Eigenschaften → Installierte Dateien → Integrität überprüfen), um es wiederherzustellen.',
  },

  // ── World & gameplay ──
  'is-there-combat-in-moonlight-peaks': {
    q: 'Gibt es Kampf in Moonlight Peaks?',
    a: 'Nein. Vorschauen bestätigen, dass es nirgendwo Kampf gibt — selbst die Minen und Katakomben bleiben friedlich, sodass es ein durchgehend gemütliches Erlebnis bleibt.',
  },
  'do-you-farm-at-night': {
    q: 'Baut man in Moonlight Peaks nachts an?',
    a: 'Ja. Als Vampir erledigst du Anbau und Pflege nach Einbruch der Dunkelheit und kehrst bis Sonnenaufgang in deinen Sarg zurück — ein Twist auf den üblichen tagsüber stattfindenden Farming-Loop.',
  },
  'how-does-magic-work-in-moonlight-peaks': {
    q: 'Wie funktioniert Magie in Moonlight Peaks?',
    a: 'Magie basiert auf einem Zauberstab: Du reparierst einen kaputten Zauberstab, zeichnest Zauberrunen zum Wirken und verwaltest Mana (das du durch Essen auffüllst).',
    more: ['Es gibt ein kleines Gieß-Minispiel, und du schaltest energiesparende Zaubersprüche frei, die Hofarbeit reduzieren. Du braust auch Tränke wie den Alter-Ego-Elixier, der dein Aussehen ändert.'],
  },
  'can-you-shapeshift-in-moonlight-peaks': {
    q: 'Kann man sich in Moonlight Peaks verwandeln?',
    a: 'Ja. Du kannst dich verwandeln — zum Beispiel in eine Fledermaus —, um die Stadt schnell zu durchqueren und versteckte Bereiche zu erreichen.',
  },
  'what-is-nokturna': {
    q: 'Was ist Nokturna in Moonlight Peaks?',
    a: 'Nokturna ist das Sammelkartenspiel der Stadt. Du sammelst Karten und forderst Bewohner zu Duellen heraus.',
    more: ['Vollständige Regeln und die Kartenliste sind zum Release bestätigt — wir erfinden keine Karten.'],
  },
  'what-pets-and-livestock-are-there': {
    q: 'Welche Haustiere und Nutztiere gibt es in Moonlight Peaks?',
    a: 'Du kannst ein dreiäugiges Hellkitten als Haustier halten und magisches Vieh wie das Draculamb aufziehen.',
  },

  // ── Romance & marriage ──
  'can-you-get-married-in-moonlight-peaks': {
    q: 'Kann man in Moonlight Peaks heiraten?',
    a: 'Ja — bestätigt zum Release. Mache bei Herzstufe 8 einen Antrag, und die Hochzeit findet innerhalb einer Woche statt, besucht von den Vampiren und Werwölfen der Stadt. Dein Partner zieht danach auf deinen Hof und schaltet ein weiteres Herz-Event frei. Es gibt keine Kinder im Spiel.',
  },
  'can-you-have-children-in-moonlight-peaks': {
    q: 'Kann man in Moonlight Peaks Kinder haben?',
    a: 'Nein. Du kannst Bewohner daten und heiraten, aber Kindererziehung ist kein Feature.',
  },
  'best-general-gifts-in-moonlight-peaks': {
    q: 'Was sind sichere, allgemeine Geschenke in Moonlight Peaks?',
    a: 'Über mehrere Launch-Week-Quellen hinweg bestätigt: Die Farbe eines Geschenks an die Lieblingsfarbe eines Bewohners anzupassen, kommt allgemein gut an, und ein selbst arrangierter Blumenstrauß in der bevorzugten Farbe (über das Blumenarrangement-Minispiel) ist eine sichere, immer verfügbare Option, die auch als Deko funktioniert, falls sie nicht angenommen wird. Handgemachte Geschenke — darunter Sträuße und Stickereien — kommen Berichten zufolge über individuelle Vorlieben hinaus gut an.',
  },
  'how-many-romance-options-are-there': {
    q: 'Wie viele Romanze-Optionen gibt es in Moonlight Peaks?',
    a: 'Die Steam-Seite beschreibt rund zwei Dutzend (etwa 24) romantisch verfügbare Bewohner. Frühere Berichte nannten 15, die Besetzung ist also während der Entwicklung gewachsen.',
    more: ['Das Dating ist geschlechtsneutral, und die vollständige benannte Liste wurde näher am Release bestätigt.'],
  },
  'is-dating-gender-locked-in-moonlight-peaks': {
    q: 'Ist das Dating in Moonlight Peaks geschlechtsgebunden?',
    a: 'Nein. Charaktermodelle sind bewusst geschlechtsneutral gestaltet, sodass du jeden verfügbaren Bewohner unabhängig davon romantisch kennenlernen kannst, wie du deinen eigenen Vampir gestaltest.',
  },
  'can-you-romance-a-werewolf': {
    q: 'Kann man in Moonlight Peaks einen Werwolf daten?',
    a: 'Ja. Saga, eine Werwölfin, ist eine bestätigte Romanze-Option. Da Vampire und Werwölfe bekanntlich streiten, ist das Dating über diese Kluft hinweg Teil des Charmes.',
  },
  'can-you-date-multiple-characters': {
    q: 'Kann man in Moonlight Peaks mehrere Charaktere gleichzeitig daten?',
    a: 'Dies wurde vor dem Release nicht bestätigt — Exklusivitäts- und Polyamorie-Regeln wurden nicht offengelegt.',
    more: ['Wir aktualisieren diese Antwort, sobald die Live-Version zeigt, wie das Daten mehrerer Bewohner funktioniert.'],
  },

  // ── Characters ──
  'who-is-saga': {
    q: 'Wer ist Saga in Moonlight Peaks?',
    a: 'Saga ist eine von den Entwicklern vorgestellte Werwolf-Stadtbewohnerin und eine bestätigte Romanze-Option. Ihre Energie soll sich mit dem Vollmond verändern.',
  },
  'who-is-luna': {
    q: 'Wer ist Luna in Moonlight Peaks?',
    a: 'Luna wird als landwirtschaftlich orientierte Hexe gemeldet — wahrscheinlich eine frühe Quelle für Zaubersprüche und Gartenwissen. Details wurden zum Release bestätigt.',
  },
  'who-is-orlock': {
    q: 'Wer ist Orlock in Moonlight Peaks?',
    a: 'Orlock wird als Oberhaupt einer Vampirfamilie gemeldet, in Hands-on-Vorschauen als komische Figur dargestellt.',
  },
  'who-is-count-dracula': {
    q: 'Wer ist Graf Dracula in Moonlight Peaks?',
    a: 'Graf Dracula ist dein Vater und eine zentrale Erzählfigur. Er ist keine Romanze-Option; die Geschichte lässt dich aus seinem Schatten heraustreten, um zu beweisen, dass ein sanfteres unsterbliches Leben möglich ist.',
  },

  // ── Added angle: high-intent "is/does/how" questions ──
  'is-moonlight-peaks-worth-it': {
    q: 'Lohnt sich Moonlight Peaks?',
    a: 'Es entwickelt sich zu einem der eigenständigsten gemütlichen Sims von 2026 — ein 3D-Vampir-Lebenssimulator mit nächtlichem Anbau, Zauberstab-Magie und großer Romanze-Auswahl — aber die ehrliche Antwort ist, zuerst die kostenlose Demo auszuprobieren.',
    more: ['Die Demo lässt dich den Charaktereditor und gemütliche Aktivitäten kostenlos testen — der beste Weg zu beurteilen, ob es dir zusagt, bevor du kaufst.'],
  },
  'is-moonlight-peaks-free': {
    q: 'Ist Moonlight Peaks kostenlos?',
    a: 'Nein — das vollständige Spiel kostet 34,99 $ (39,99 $ auf Switch 2). Es gibt jedoch eine kostenlose Demo auf Steam und im Nintendo eShop.',
  },
  'is-moonlight-peaks-open-world': {
    q: 'Ist Moonlight Peaks Open World?',
    a: 'Es wird nicht als Open-World-Spiel vermarktet. Es ist ein gemütlicher Lebenssimulator, in dem du durch die Stadt, deinen Hof und umliegende Bereiche wie Wald, See und Minen streifst.',
    more: ['Das genaue Kartenlayout und wie frei man erkunden kann, wurden zum Release bestätigt.'],
  },
  'is-moonlight-peaks-cozy': {
    q: 'Ist Moonlight Peaks ein gemütliches Spiel?',
    a: 'Ja. Es ist ein gemütlich-gotischer Lebenssimulator ohne jeglichen Kampf, mit Fokus auf Landwirtschaft, Handwerk, Magie und Beziehungen.',
  },
  'how-long-is-moonlight-peaks': {
    q: 'Wie lang ist Moonlight Peaks?',
    a: 'Wie die meisten Lebenssimulatoren ist es offen statt eine feste Story-Länge zu haben, die Spielzeit variiert also stark je nach Spieler.',
  },
  'is-moonlight-peaks-on-game-pass': {
    q: 'Ist Moonlight Peaks auf Game Pass?',
    a: 'Es wurde kein Game-Pass-Release angekündigt, und da keine Xbox-Version bestätigt ist, wird Game Pass nicht erwartet. Die bestätigten Plattformen sind Steam, Steam Deck, Switch, Switch 2 und Android.',
  },
  'can-you-play-moonlight-peaks-offline': {
    q: 'Kann man Moonlight Peaks offline spielen?',
    a: 'Moonlight Peaks ist ein Singleplayer-Spiel ohne angekündigte Online-Voraussetzung, es wird also offline spielbar erwartet. Genaue Details wurden zum Release bestätigt.',
  },
  'is-moonlight-peaks-coming-to-mobile': {
    q: 'Kommt Moonlight Peaks auf Mobilgeräte?',
    a: 'Ja — auf Android, über Google Play, am Erscheinungstag. Keine iOS- oder iPhone-Version wurde angekündigt.',
  },
  'does-moonlight-peaks-have-co-op': {
    q: 'Hat Moonlight Peaks lokalen oder Online-Koop?',
    a: 'Es wurde kein Koop angekündigt. Ein Spieler fragte die Entwickler in den Steam-Community-Diskussionen direkt nach Online-Koop, ohne dass eine Bestätigung erfolgte. Alles deutet derzeit darauf hin, dass Moonlight Peaks Singleplayer ist.',
  },
  'what-age-rating-is-moonlight-peaks': {
    q: 'Welche Altersfreigabe hat Moonlight Peaks?',
    a: 'Bestätigt: PEGI 12 in Europa und ESRB Teen (T) in den USA — trotz des gemütlichen, kampffreien Tons wird die Einstufung durch Alkoholbezüge (du kannst Bier und Wein herstellen und trinken) und leicht anzügliche romantische Sprache bestimmt, nicht durch Gewalt.',
  },
  'how-do-you-make-money-in-moonlight-peaks': {
    q: 'Wie verdient man Geld in Moonlight Peaks?',
    a: 'Der bestätigte Hauptkreislauf ist Anbau und Verkauf deiner Ernte — die Steam-Seite rahmt das Freischalten von Fähigkeiten und Upgrades um "eine reichhaltigere Ernte" ein. Eine sekundäre Spieldatenbank-Zusammenfassung fügt hinzu, dass seltsamere, "unnatürlichere" Feldfrüchte mehr einbringen, dieses Detail ist aber nicht entwicklerbestätigt. Genaue Preise, Käufer und Verkaufsmechanik wurden zum Release bestätigt.',
  },
  'can-you-sell-crops-in-moonlight-peaks': {
    q: 'Kann man in Moonlight Peaks Feldfrüchte verkaufen?',
    a: 'Den Verkauf deiner Ernte für Münzen als Kernkreislauf eines solchen Farming-Sims wird impliziert, und Moonlight Peaks\' eigene Store-Seite verknüpft die Erträge deines Hofs mit dem Freischalten von Upgrades und Fähigkeiten. Wir haben keine entwicklerbestätigten Details darüber gesehen, wer genau deine Feldfrüchte kauft oder wie der Verkauf mechanisch funktioniert — das kommt zum Release.',
  },
  'is-there-a-shop-in-moonlight-peaks': {
    q: 'Gibt es einen Laden in Moonlight Peaks?',
    a: 'Ja, bestätigt — mehrere benannte Läden existieren in der Stadt, darunter Webb of Wonders (Sabrina, Tränke und Kleidung), Howling Hammer (Ridge, Werkzeug-Upgrades), Third Eye Threads (Aras, Kleidung) und Coffee & Coffins (ein Café von Mina und Evan). Der Verkauf deiner eigenen Waren läuft separat über Chester statt über einen Ladenbesitzer.',
  },
  'how-to-get-dark-wood-in-moonlight-peaks': {
    q: 'Wie bekommt man Dunkelholz in Moonlight Peaks?',
    a: 'Bestätigt: Fälle die übergroßen Baumstämme auf dem Hofgelände mit einer Kupferaxt (eine aufgerüstete Axtstufe — die Anfangs-Rostaxt reicht nicht). Dunkelholz wird in mehreren Deko-Rezepten verwendet, darunter ein Fellsessel (mit Hartholzbrettern und Stoff) und ein Sarg-Bücherregal (mit Brettern).',
  },
  'how-does-the-museum-work-in-moonlight-peaks': {
    q: 'Wie funktioniert das Museum in Moonlight Peaks?',
    a: 'Bestätigt: Das Museum öffnet erst im Verlauf des ersten Jahres, sobald ein Handlungsstrang um den Umzug von Persephone, Jada und Winston in die Stadt abgeschlossen ist — nicht von Anfang an. Du spendest, indem du zu einem thematischen Sammelraum gehst und mit einem Ausrufezeichen-Schild interagierst, statt mit einem Kurator zu sprechen. Gegenstände, die dir noch für eine Sammlung fehlen, werden in deinem Inventar mit einem Museumssymbol markiert. Die Qualitätsanforderungen variieren je nach Sammlung; die landwirtschaftliche verlangt speziell höherwertige Feldfrüchte.',
  },
  'does-moonlight-peaks-have-accessibility-options': {
    q: 'Hat Moonlight Peaks Barrierefreiheits-Optionen?',
    a: 'Einige, aber nicht umfangreich: Bestätigte Optionen umfassen VSync-Umschaltung, Controller-Vibration, Bildschirm-Interaktionslabels und Textanimation, plus neu belegbare Tasten, eine Bildratenbegrenzung und Renderskalierung. Nicht bestätigt: Bisher wurde kein Farbenblind-Modus oder dyslexiefreundliche Textoptionen gemeldet.',
  },
  'can-you-romance-death-in-moonlight-peaks': {
    q: 'Kann man in Moonlight Peaks mit Death eine Romanze eingehen?',
    a: 'Unbestätigt. Death ist ein echter Name in vorab durchsickerten Spieldateien, mit einem eigenen Zuhause ("Deaths Hütte"), und manche Vorab-Gerüchte haben ihn als mögliche Romanze-Option genannt — das ist aber Spekulation, keine Entwicklerbestätigung. Wir aktualisieren dies, sobald das vollständige Spiel es klärt.',
  },
  'is-count-dracula-romanceable': {
    q: 'Ist Graf Dracula in Moonlight Peaks eine Romanze-Option?',
    a: 'Nein. Graf Dracula ist der Vater deines Charakters und eine zentrale Erzählfigur, keine Romanze-Option — das Spiel macht deutlich, dass deine Beziehung zu ihm familiär ist, nicht romantisch.',
  },
  'is-logan-romanceable-in-moonlight-peaks': {
    q: 'Ist Logan in Moonlight Peaks eine Romanze-Option?',
    a: 'Gemeldet, aber noch nicht mit voller Sicherheit entwicklerbestätigt — Logan erscheint als Werwolf-Bewohner in der Presseberichterstattung, und unabhängige Hinweise (ein Entwicklertagebuch und vorab durchsickerte Dateien) deuten beide darauf hin, dass sein Name und Zuhause echt sind. Behandle ihn bis zum Release als wahrscheinliche, nicht garantierte Romanze-Option.',
  },
  'can-you-divorce-in-moonlight-peaks': {
    q: 'Kann man sich in Moonlight Peaks scheiden lassen oder trennen?',
    a: 'Nicht bestätigt. Die Entwickler haben bestätigt, dass man einen Romanze-Partner heiraten kann, aber ob man sich später scheiden lassen, trennen oder jemand anderen heiraten kann, wurde nirgendwo behandelt, das wir gefunden haben.',
  },
  'is-there-a-wedding-ceremony-in-moonlight-peaks': {
    q: 'Gibt es eine Hochzeitszeremonie in Moonlight Peaks?',
    a: 'Nicht bestätigt. Die Ehe selbst ist bestätigt, aber ob sie mit einer echten Zeremonie, Gästen oder einem dedizierten Event einhergeht — statt einer einfachen Menübestätigung — wurde noch nirgendwo gezeigt oder beschrieben.',
  },
  'do-families-disapprove-of-cross-family-romance': {
    q: 'Missbilligen Familien in Moonlight Peaks Romanzen außerhalb der eigenen Familie?',
    a: 'Nicht als Spielmechanik bestätigt, passt aber zum Ton: Vampire und Werwölfe streiten Berichten zufolge ständig, und die Presseberichterstattung beschreibt eine alte Fehde zwischen den übernatürlichen Familien der Stadt. Ob sich das in eine echte In-Game-Missbilligungsmechanik für familienübergreifende Romanzen übersetzt, ist unbekannt.',
  },
  'is-moonlight-peaks-scary': {
    q: 'Ist Moonlight Peaks gruselig oder ein Horrorspiel?',
    a: 'Nein. Trotz der gotischen Ästhetik (Vampire, Friedhöfe, ein Charakter, der buchstäblich Death heißt) deutet alles bisher Gezeigte — die Demo, Pressevorschauen, offizielle Trailer — auf einen gemütlichen, leichtherzigen Ton hin. Die Berichterstattung beschrieb es in seinem sozialen Drama als "niedlich-chibi, aber ernsthaft toxisch", nicht als beängstigend. Es gibt keinen bestätigten Kampf oder Horror-Inhalt.',
  },
  'is-moonlight-peaks-based-on-a-book-or-show': {
    q: 'Basiert Moonlight Peaks auf einem Buch, Film oder einer Serie?',
    a: 'Nein. Soweit wir gefunden haben, ist Moonlight Peaks ein Originaltitel der Little Chicken Game Company — es adaptiert kein bestehendes Buch, keinen Film oder keine Serie.',
  },
  'does-moonlight-peaks-have-a-tutorial': {
    q: 'Hat Moonlight Peaks ein Tutorial für neue Spieler?',
    a: 'Nicht im Detail bestätigt, aber die kostenlose Demo führt neue Spieler bereits durch die Charaktererstellung und einige Kernaktivitäten (Angeln, Blumenarrangements, Stickerei) mit frühen Stadt-Interaktionen — was auch ohne formell angekündigten Tutorial-Modus als sanfte Einführung dient.',
  },
  'does-moonlight-peaks-have-a-story': {
    q: 'Hat Moonlight Peaks eine Story, oder ist es offen?',
    a: 'Es hat einen leichten Story-Aufhänger — du bist ein Vampir, der in den verlassenen Hof deiner Familie zieht, um deinem skeptischen Vater zu beweisen, dass ein sanfteres unsterbliches Leben möglich ist —, der auf einen offenen, gemütlichen Lebenssimulator-Kreislauf aus Landwirtschaft, Magie und Beziehungen aufgesetzt ist. Wie viel skriptete Story-Inhalte es über diese Prämisse hinaus gibt, ist noch nicht im Detail beschrieben.',
  },
  'does-moonlight-peaks-support-a-controller': {
    q: 'Kann man Moonlight Peaks mit einem Controller spielen?',
    a: 'Ja, auf Switch, Switch 2 und Steam Deck, wo ein Controller die Standardeingabe ist. Auf dem PC empfahl eine Hands-on-Pressevorschau ausdrücklich, ein Gamepad statt Maus und Tastatur zu verwenden, was darauf hindeutet, dass das Spiel selbst auf Steam mit Controller-Spiel im Sinn gestaltet ist.',
  },
  'is-moonlight-peaks-difficult': {
    q: 'Ist Moonlight Peaks schwierig, oder kann man scheitern?',
    a: 'Nichts deutet auf einen unbarmherzigen Schwierigkeitsgrad hin — es gibt keinen bestätigten Kampf, und der Ton ist durchgehend gemütlich statt herausforderungsorientiert. Ob es Fehlschlagzustände (wie das Ausgehen von Geld) oder Schwierigkeitsoptionen gibt, wurde noch nicht im Detail beschrieben.',
  },
  'does-moonlight-peaks-have-voice-acting': {
    q: 'Hat Moonlight Peaks Sprachausgabe?',
    a: 'Nicht bestätigt. Nichts in der Demo, den Trailern oder der Presseberichterstattung, die wir gesehen haben, erwähnt vertonte Dialoge — behandle dies bis zum vollständigen Release als in beide Richtungen unbestätigt.',
  },
  'is-moonlight-peaks-turn-based-or-real-time': {
    q: 'Ist Moonlight Peaks rundenbasiert oder Echtzeit?',
    a: 'Echtzeit, wie die meisten gemütlichen Lebenssimulatoren dieses Genres — die Tag-/Nacht-Uhr läuft weiter, während du bewirtschaftest, erkundest und mit Bewohnern sprichst, statt darauf zu warten, dass du einen Zug beendest.',
  },
  'does-moonlight-peaks-have-achievements': {
    q: 'Hat Moonlight Peaks Erfolge oder Trophäen?',
    a: 'Für keine Plattform bisher bestätigt. Falls Steam-Erfolge oder plattformspezifische Trophäenlisten existieren, dokumentieren wir sie, sobald das vollständige Spiel erscheint.',
  },
  'is-moonlight-peaks-family-friendly': {
    q: 'Ist Moonlight Peaks für Kinder geeignet?',
    a: 'Angesichts des gemütlichen Tons und des fehlenden Kampfs wahrscheinlich ja für die meisten Altersgruppen, aber wir können keine feste Antwort geben — das Spiel wurde zum Zeitpunkt dieses Textes noch nicht von der ESRB bewertet (einige Medien berichteten von einer Teen-Einstufung auf Konsolen/Mobilgeräten, die wir nicht unabhängig verifizieren konnten). Prüfe die offizielle Einstufung, sobald sie bestätigt ist, besonders angesichts der erwachsenenorientierten Romanze- und Ehesysteme des Spiels.',
  },
  'how-to-get-married-in-moonlight-peaks': {
    q: 'Wie heiratet man in Moonlight Peaks?',
    a: 'Bestätigt zum Release: Dating wird bei Herzstufe 4 freigeschaltet, und du kannst bei Herzstufe 8 einen Antrag machen. Verabredungen laufen als Minispiele ab (z. B. einen Blumenstrauß in gewünschten Farben zusammenstellen) — es ist möglich, eine zu vermasseln, z. B. durch Zuspätkommen, was Freundschaftspunkte statt eines endgültigen Abbruchs kostet. Die Hochzeit findet innerhalb einer Woche nach dem Antrag statt und wird von den Vampiren und Werwölfen der Stadt besucht. Die Ehe selbst ist monogam, und dein Partner zieht danach auf deinen Hof.',
  },
  'can-you-date-multiple-people-moonlight-peaks': {
    q: 'Kann man in Moonlight Peaks mehrere Personen gleichzeitig daten?',
    a: 'Ja, bestätigt zum Release — du kannst mehrere Bewohner gleichzeitig umwerben. Sie bemerken es und kommentieren es, aber es wird als milde Eifersucht statt als hartes Rivalitätssystem beschrieben. Die Ehe selbst ist streng monogam, sobald du einen Antrag machst.',
  },
  'moonlight-peaks-step-parent-children': {
    q: 'Kann man in Moonlight Peaks Kinder haben oder Stiefelternteil werden?',
    a: 'Du kannst keine leiblichen Kinder haben — von mehreren Quellen bestätigt, ohne angekündigte Pläne, diese Mechanik hinzuzufügen. Gemeldetes Detail: Die Heirat mit einem älteren Charakter, der bereits Kinder hat, wie Orlock (Vater von Mina und Evan), soll dich stattdessen zu deren Stiefelternteil machen.',
  },
  'how-to-turn-into-a-bat-hellkitten': {
    q: 'Wie verwandelt man sich in Moonlight Peaks in eine Fledermaus oder ein Hellkitten?',
    a: 'Bestätigt zum Release: Sobald die Gestaltwandlung durch Story-Fortschritt freigeschaltet ist, halte die linke Schultertaste gedrückt, um ein Zauberrad zu öffnen, und wähle deine Form — Fledermaus für schnelles Reisen oder dein dreiäugiges Hellkitten für schnellere Bewegung und kostenloses Pflügen.',
  },
  'is-there-fast-travel-in-moonlight-peaks': {
    q: 'Gibt es Schnellreisen in Moonlight Peaks?',
    a: 'Ja, über mehrere Quellen bestätigt: Der Hexenzirkel bietet eine Schnellreise-Option in der Stadt, und die Fledermausform deckt schnell Boden ab, sobald die Gestaltwandlung freigeschaltet ist. Es gibt kein Minikarten- oder Quest-Marker-System, die Ingame-Karte (mit ihren Ausrufezeichen- und Funkel-Symbolen für ausstehende Zwischensequenzen) ist also die Haupt-Navigationshilfe.',
  },
  'how-to-find-quests-heart-events': {
    q: 'Wie findet man Quests und Herz-Events in Moonlight Peaks?',
    a: 'Bestätigt zum Release: Prüfe die Karte auf Markierungen — ein Ausrufezeichen bedeutet, dass das Betreten dieses Bereichs eine Zwischensequenz auslöst, und eine funkelnde Aura um ein Gebäude bedeutet, dass das Hineingehen eine auslöst. Das Schwarze Brett in der Stadt (verwaltet von Albertus, einer Eule) listet ebenfalls verfügbare Jobs/Quests auf.',
  },
};
