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
  'how-many-quests-are-in-moonlight-peaks': {
    q: 'Wie viele Quests gibt es in Moonlight Peaks?',
    a: 'Bestätigt über eine cross-verifizierte Quest-Log-Transkription: Die Hauptgeschichte umfasst mindestens 20+ benannte Quests von der Ankunft in der Stadt bis zu einem Hochzeits-Handlungsbogen, plus mehrere bestätigte Nebenquests und laufende Systeme wie das Job-Brett. Es könnte mehr Story-Inhalt existieren als bisher dokumentiert.',
    more: ['Den vollständigen Quest-Guide findest du unter /quests (derzeit nur auf Englisch).'],
  },
  'what-does-a-bridge-too-far-quest-unlock': {
    q: 'Was schaltet die Quest "A Bridge Too Far" in Moonlight Peaks frei?',
    a: 'Bestätigt: Der Abschluss hebt den Fluch auf der Brücke nach Misty Shores auf und schaltet diesen Bereich frei (einschließlich der Höhle des Echos, deiner ersten Kupfererz-Quelle) sowie den Friedhof, und löst den nächsten Handlungsbogen am Crest Garden aus.',
  },
  'what-quest-unlocks-hellkitten-form': {
    q: 'Welche Quest schaltet die Hellkitten-Form (Katze) in Moonlight Peaks frei?',
    a: 'Bestätigt über ein cross-verifiziertes Quest-Log: Die Quest "The Dinner Party" belohnt die Cat Form (Hellkitten-Gestaltwandlung). Sie liegt einige Story-Beats nach "A Bridge Too Far", im Anschluss an die Mana-Extraktor-Quest-Kette.',
  },
  'why-is-my-quest-not-starting-in-moonlight-peaks': {
    q: 'Warum startet eine Quest in Moonlight Peaks nicht?',
    a: 'Community-berichtet: Viele Quests werden einfach durch das Betreten eines neuen Bereichs, das Warten einer festgelegten Anzahl von Spieltagen oder das Lesen eines Briefs/einer Einladung ausgelöst, statt durch eine offensichtliche Bildschirm-Aufforderung. Wenn eine Quest festzuhängen scheint, prüfe, ob die vorherige Quest in der Kette wirklich abgeschlossen ist, ob genug Tage vergangen sind, und ob du den Bereich oder das Gebäude betreten hast, an das der nächste Schritt gebunden ist.',
  },
  'how-does-the-job-board-work-in-moonlight-peaks': {
    q: 'Wie funktioniert das Job-Brett in Moonlight Peaks?',
    a: 'Bestätigt: Albertus\u2019 Jobs ist ein laufendes, wiederholbares Brett am Rathaus, verwaltet von Albertus, einer Eule. Das Abschließen eines ausgeschriebenen Jobs bringt Münzen, manchmal einen Gegenstand, und einen Beziehungsschub mit der Person, die die Anfrage gestellt hat — ein fortlaufendes System statt einer einmaligen Quest.',
  },
  'what-are-the-main-story-quests-in-moonlight-peaks': {
    q: 'Was sind die Hauptgeschichte-Quests in Moonlight Peaks, in der Reihenfolge?',
    a: 'Bestätigt über ein cross-verifiziertes Quest-Log: Die Kette verläuft etwa von der Registrierung am Rathaus und dem Treffen mit Orlock über "A Bridge Too Far" (der Fiona/Orlock-Brückenfluch), ein Crest-Garden-Mysterium, das Freischalten deiner ersten Magie und des Mana-Extraktors, "The Dinner Party" (schaltet die Cat Form frei), bis hin zu einer Hochzeits-Handlungsbogen-Geschichte. Die vollständige Kapitel-für-Kapitel-Aufschlüsselung mit genauer Reihenfolge und Freischaltbedingungen findest du auf der Übersichtsseite.',
  },
  'did-patch-1-1-41-fix-npcs-not-responding-to-gifts': {
    q: 'Hat Patch 1.1.41 das Problem behoben, dass NPCs nicht auf Geschenke reagieren?',
    a: 'Ja, bestätigt über die offiziellen Marvelous-Games-Patch-Notes: Version 1.1.41 behob ein Problem, bei dem manche NPCs nicht mehr auf Geschenke reagierten, sowie das Steckenbleiben beim Pflücken bestimmter Blumen in Pink Grove.',
  },
  'did-patch-1-1-41-fix-steam-deck-controller-defaulting': {
    q: 'Hat Patch 1.1.41 das Problem behoben, dass Steam-Deck-Steuerung auf Tastatur/Maus zurückfällt?',
    a: 'Ja, bestätigt: Version 1.1.41 behob, dass die Steam-Deck-Steuerung auf Tastatur/Maus statt auf den Controller zurückfiel, und behob einen Steam-exklusiven Bug, der Controller-Interaktionen verhinderte, verursacht durch einen unsichtbaren Cursor über UI-Elementen.',
  },
  'was-back-to-the-den-achievement-bug-fixed': {
    q: 'Wurde der Bug beim Erfolg "Back to the Den" behoben?',
    a: 'Ja, bestätigt: Ein Fix behob, dass der Erfolg nach dem Zurückbringen aller Vampster nicht auslöste. Spieler, die die Sammlung bereits vor dem Fix abgeschlossen hatten, erhalten den Erfolg rückwirkend nach Fortschreiten um einen Spieltag.',
  },
  'can-you-get-stuck-in-the-recover-the-moon-quest': {
    q: 'Kann man in der Quest "Recover the Moon" steckenbleiben?',
    a: 'Das war ein bestätigter, mittlerweile behobener Bug: Spieler konnten zuvor der Quest entkommen, ohne ihr Ziel zu erfüllen. Betroffene Spielstände schreiten beim nächsten Spieltag automatisch zur nächsten Quest fort.',
  },
  'why-is-my-japan-release-date-different': {
    q: 'Warum ist mein Japan/Asien-Erscheinungsdatum anders als der 7. Juli?',
    a: 'Bestätigt: Clouded Leopard Entertainment legte den Japan/Asien-Release für Nintendo Switch auf den 9. Juli 2026 fest, zwei Tage nach dem globalen 7.-Juli-Release.',
  },
  'what-is-j-anime-style-in-moonlight-peaks': {
    q: 'Was ist der "J-Anime Style" in Moonlight Peaks?',
    a: 'Bestätigt: Ein optionaler "J-Anime Style" tauscht Charakterporträts gegen Artwork eines japanischen Illustrators aus, gebunden an den Asien-Release. Der Vorbesteller-Bonus der physischen Asien-Edition ist als "Original Can Mirror" plus DLC-Paket bestätigt.',
  },
  'why-are-steam-and-switch-on-different-version-numbers': {
    q: 'Warum sind Steam und Switch auf unterschiedlichen Versionsnummern?',
    a: 'Bestätigt: Steam erhält Patches zuerst — es lief weltweit auf Version 1.1.44, während Nintendo Switch, Switch 2 und Google Play Games zum gleichen Zeitpunkt bei Version 1.1.3 blieben, da Konsolen- und Mobile-Updates nach Steam ausgerollt werden.',
  },
  'what-festivals-are-in-moonlight-peaks': {
    q: 'Welche Feste gibt es in Moonlight Peaks?',
    a: 'Bestätigt über die Festivals-Seite des offiziellen Wikis: Fünf benannte Feiern existieren — das Loveage Festival (Frühling 20–21), der Moonlight Ball (Sommer 20), das Mastersoup-Event (Herbst 5), das Evernight Festival (Herbst 26–28) und Winterwake (Winter 28).',
  },
  'who-hosts-the-loveage-festival': {
    q: 'Wer veranstaltet das Loveage Festival in Moonlight Peaks?',
    a: 'Bestätigt: Llemi, der "Liebesdämon", veranstaltet das Loveage Festival (Frühling 20–21). Stände während des Festivals werden von Elvira und Mina betrieben, mit seltenem Blumenbinden bei Luna.',
  },
  'what-is-the-secret-admirer-gift-exchange': {
    q: 'Was ist der "geheimer Verehrer"-Geschenkeaustausch in Moonlight Peaks?',
    a: 'Bestätigt: Am zweiten Tag des Loveage Festivals kann man mit Llemi sprechen, um ein besonderes Geschenk an einen beliebigen romanzefähigen Charakter zu übergeben, als Teil eines stadtweiten Geschenkeaustauschs unter geheimen Verehrern.',
  },
  'where-is-lunas-loveage-bouquet-booth': {
    q: 'Wo ist Lunas Blumenstrauß-Stand beim Loveage Festival?',
    a: 'Bestätigt: Luna betreibt den Blumenstrauß-Stand des Loveage Festivals vor Webb of Wonders, in der südöstlichen Ecke der Stadt.',
  },
  'is-the-moonlight-ball-fully-detailed-yet': {
    q: 'Ist der Moonlight Ball schon vollständig beschrieben?',
    a: 'Noch nicht ganz — bestätigt sind Name und Datum (Sommer 20) über das offizielle Wiki, aber die genauen Aktivitäten bleiben unbestätigt statt geraten, dieselbe Vorsicht gilt für einen gemeldeten Mastersoup-Kochwettbewerb und eine Modenschau.',
  },
  'how-long-is-a-year-in-moonlight-peaks': {
    q: 'Wie lang ist ein Jahr in Moonlight Peaks?',
    a: 'Bestätigt: Das Jahr ist in vier Jahreszeiten unterteilt — Frühling, Sommer, Herbst, Winter — jede dauert einen Monat, insgesamt also ein Vier-Monats-Kalender. Spieler beginnen das Spiel im Frühling.',
  },
  'is-there-a-weather-system-in-moonlight-peaks': {
    q: 'Gibt es ein Wettersystem in Moonlight Peaks?',
    a: 'Bestätigt über Vorab-Dateien vor dem Release: Ein Wettersystem existiert. Wie genau es sich auf Landwirtschaft oder Aktivitäten auswirkt, ist im lebenden Spiel noch nicht unabhängig bestätigt.',
  },
  'where-are-elviras-treasure-hunt-clues': {
    q: 'Wo sind alle Hinweise von Elviras Schatzsuche in Moonlight Peaks?',
    a: 'Bestätigt: Die fünf Orte, in Reihenfolge, sind The Broken Lamp, Ambrosia-Friedhof, Webb of Wonders, die Cave of Echoes und der Khazan-Tempel. Der vierte Hinweis liegt neben der großen Glocke auf der Ostseite der Cave of Echoes.',
  },
  'how-do-you-start-elviras-treasure-hunt': {
    q: 'Wie startet man Elviras Schatzsuche in Moonlight Peaks?',
    a: 'Bestätigt: Die Quest beginnt nach Auslösen von Elviras Vier-Herzen-Ereignis, gefolgt von einem Brief, der am nächsten Tag im Briefkasten erscheint. Falls der Brief nicht angekommen ist, prüfe, ob das Herz-Ereignis selbst abgeschlossen ist, nicht nur die Herz-Schwelle erreicht wurde.',
  },
  'what-do-you-get-for-completing-elviras-treasure-hunt': {
    q: 'Was bekommt man für den Abschluss von Elviras Schatzsuche?',
    a: 'Bestätigt: Eine Truhe am letzten Hinweisort enthält das Treasure Hunt Painting, eine Dekoration fürs Haus, und der Abschluss der Suche schaltet den Steam-Erfolg "Raiders of the Lost Art" frei.',
  },
  'how-many-achievements-does-moonlight-peaks-have': {
    q: 'Wie viele Erfolge hat Moonlight Peaks?',
    a: 'Bestätigt: 59 Erfolge insgesamt auf Steam. Keiner ist auf einem einzelnen Spielstand dauerhaft verpassbar, da verpasste Feste oder saisonale Ernten im folgenden Spieljahr einfach wieder verfügbar werden.',
  },
  'what-is-the-rarest-achievement-in-moonlight-peaks': {
    q: 'Was ist der seltenste Erfolg in Moonlight Peaks?',
    a: 'Gemeldet: Der seltenste erfasste Erfolg erfordert das Freischalten jedes dunklen Zauberspruchs und hatte kurz nach Release eine extrem niedrige Abschlussquote.',
  },
  'how-long-does-100-percent-completion-take': {
    q: 'Wie lange dauert eine 100%-Fertigstellung in Moonlight Peaks?',
    a: 'Gemeldet: Etwa 100 Stunden normales, unassistiertes Spiel, was die Tiefe der Landwirtschafts-, Zauber- und Beziehungssysteme widerspiegelt, die für alle 59 Erfolge nötig sind.',
  },
  'can-you-miss-a-festival-permanently': {
    q: 'Kann man ein Fest in Moonlight Peaks dauerhaft verpassen?',
    a: 'Nein, bestätigt: Da das Spiel unbegrenzt viele Spieljahre erlaubt, sperrt das Verpassen einer Fest-Interaktion oder eines saisonalen Erntefensters keinen Inhalt dauerhaft — er wird im folgenden Jahr auf demselben Spielstand wieder verfügbar.',
  },
  'how-do-you-get-to-khazan-temple': {
    q: 'Wie kommt man zum Khazan-Tempel in Moonlight Peaks?',
    a: 'Bestätigt: Folge dem Weg direkt östlich vom Rathaus, nicht der Route hinauf zu Howling Marshes. Der Tempel liegt neben einem Wasserfall, mit einer Notiz auf dem Boden rechts davon.',
  },
  'where-is-the-bell-in-the-cave-of-echoes': {
    q: 'Wo ist die Glocke in der Cave of Echoes in Moonlight Peaks?',
    a: 'Bestätigt: Eine große Glocke, die die Stunde markiert, befindet sich auf der Ostseite der Cave-of-Echoes-Mine in Misty Shores, derselben Mine, die zum Kupferabbau genutzt wird.',
  },
  'what-does-the-evernight-festival-sell': {
    q: 'Was verkauft das Evernight Festival in Moonlight Peaks?',
    a: 'Gemeldet: Neben Essen und Einrichtung verkauft ein Händler beim Evernight Festival das "Arcane Flame"-Upgrade für 399 Evernight-Münzen, das die maximale Mana-Menge erhöhen soll.',
  },
  'what-is-the-jitterbug-event': {
    q: 'Was ist das Jitterbug-Event?',
    a: 'Gemeldet: Nachdem die Moonlight-Ball-Zwischensequenz am Sommer 20 ausgelöst wird, startet ein Gespräch mit Elvira am Heart Pier ein "Jitterbug"-Event, beschrieben als Wettbewerb mit einer Auszeichnung.',
  },
  'is-a-bouquet-a-good-gift-in-moonlight-peaks': {
    q: 'Ist ein selbst gebundener Blumenstrauß ein gutes Geschenk in Moonlight Peaks?',
    a: 'Ja, gemeldet: Ein selbst arrangierter Blumenstrauß gilt als deutlich besseres Geschenk als jeder gewöhnliche Laden-Artikel, besonders während Fest-Geschenkefenstern.',
  },
  'is-the-treasure-hunt-painting-just-decorative': {
    q: 'Ist das Treasure-Hunt-Painting nur Dekoration?',
    a: 'Soweit geprüfte Quellen berichten, ja — das rosa Gemälde mit einer katzenartigen Kreatur wird als dekorative Belohnung im Stil eines Herz-Ereignisses behandelt, ohne bestätigten Münz-, Beziehungspunkte- oder Spielbonus.',
  },
  'do-treasure-hunt-clues-need-to-be-found-in-order': {
    q: 'Müssen Elviras Schatzsuche-Hinweise in einer bestimmten Reihenfolge gefunden werden?',
    a: 'Ja, bestätigt: Jeder frühere Umschlag muss aufgesammelt werden, bevor der nächste erscheint, sodass spätere Hinweise nicht außer der Reihe auftauchen, selbst wenn man ihren Ort früh besucht.',
  },
  'how-do-you-change-your-portrait-style': {
    q: 'Wie ändert man den Porträtstil seines Charakters?',
    a: 'Bestätigt: Öffne das Hauptmenü (der "+"-Knopf auf Nintendo Switch), um zwischen zwei Voreinstellungen zu wechseln — ein Cartoon-Stil mit realistischer Schattierung oder ein niedlicherer, anime-inspirierter Stil.',
  },
  'is-your-starting-outfit-lost-after-changing-clothes': {
    q: 'Geht das Start-Outfit verloren, wenn man die Kleidung wechselt?',
    a: 'Nein, bestätigt: Welches Outfit man bei der Charaktererstellung auch trägt, es bleibt dauerhaft im Kleiderschrank freigeschaltet, sodass man später jederzeit über einen Spiegel dazu zurückwechseln kann.',
  },
  'where-do-you-get-new-clothing-options': {
    q: 'Wo bekommt man neue Kleidungsoptionen in Moonlight Peaks?',
    a: 'Bestätigt: Neue Kleidung kommt entweder durch das Abschließen von Aufgaben im Spiel oder durch den Kauf bei Third Eye Threads in der Stadt.',
  },
  'is-there-a-mod-to-replace-character-portraits': {
    q: 'Gibt es einen Mod, um Charakterporträts zu ersetzen?',
    a: 'Gemeldet: Ein von der Community erstellter Mod namens "Portrait Replacer", verfügbar auf Nexus Mods, tauscht Charakterporträts, Ausdrücke, Outfits und alternative Formen gegen eigene Artworks aus. Dies ist inoffizieller Fan-Content, kein Entwickler-Feature.',
  },
  'can-you-rename-your-hellkitten-later': {
    q: 'Kann man sein Hellkitten später umbenennen?',
    a: 'Nicht einfach so — bestätigt: Die Namensgebung für Charakter, Farm und Hellkitten während der Charaktererstellung bleibt die einzige wirklich dauerhafte Entscheidung, während Haare, Augen, Haut und Outfit später über Spiegel oder das Alter-Ego-Elixier geändert werden können.',
  },
  'does-the-day-night-cycle-change-with-weather': {
    q: 'Ändert sich der Tag/Nacht-Landwirtschaftszyklus mit dem Wetter?',
    a: 'Nein, bestätigt: Unabhängig von Jahreszeit oder Wetter arbeitet man weiterhin nachts auf der Farm und muss vor Sonnenaufgang zum Sarg zurückkehren — dieser Grundzyklus bleibt konstant.',
  },
  'is-spellcasting-one-of-the-slower-systems-to-complete': {
    q: 'Ist das Zaubersystem eines der langsameren Systeme zum Abschließen?',
    a: 'Gemeldet: Ja — der Erfolg für das Freischalten jedes dunklen Zauberspruchs hatte kurz nach Release eine extrem niedrige Abschlussquote, was darauf hindeutet, dass der Zauber-Fortschritt absichtlich eines der tieferen, langsameren Systeme ist.',
  },
  'do-festivals-help-with-gift-giving-efficiency': {
    q: 'Helfen Feste dabei, effizienter Geschenke zu verteilen?',
    a: 'Ja, gemeldet: An Festtagen versammeln sich die meisten Bewohner, einschließlich Romanze-Kandidaten, vor der Hauptzeremonie an einem Ort, was ein effizientes Zeitfenster bietet, um mehrere potenzielle Partner auf einmal zu beschenken.',
  },
  'can-you-choose-who-receives-the-secret-admirer-gift': {
    q: 'Kann man wählen, wer das Geschenk des geheimen Verehrers erhält?',
    a: 'Ja, bestätigt: Ein Gespräch mit Llemi während des Geschenkeaustauschs der geheimen Verehrer erlaubt es, auszuwählen, welcher romanzefähige Charakter das besondere Geschenk erhält, statt einer festen zugewiesenen Paarung.',
  },
  'what-is-elviras-personality-like': {
    q: 'Wie ist Elviras Persönlichkeit in Moonlight Peaks?',
    a: 'Bestätigt: Elvira, Orlocks Nichte, nimmt das Vampirsein nicht allzu ernst, sehr zum strengen Missfallen ihres Onkels — ein bewusster Persönlichkeitskontrast innerhalb der Familie Ambrosia.',
  },
  'which-character-fixes-were-in-julys-patch-cycle': {
    q: 'Welche Charakter-Interaktions-Bugs wurden im Juli-Patch-Zyklus behoben?',
    a: 'Bestätigt über die Patches 1.1.38 bis 1.1.44: Der Aras-Herz-Ereignis-Funkel-Bug, NPCs, die nicht auf Geschenke reagierten, und das Steckenbleiben beim Pflücken bestimmter Blumen in Pink Grove wurden alle in derselben Fix-Welle behoben.',
  },
  'is-a-future-update-planned-beyond-1-1-x': {
    q: 'Ist ein zukünftiges Update über den 1.1.x-Patch-Zyklus hinaus geplant?',
    a: 'Ja, bestätigt: Die Entwickler haben zusätzliche Verbesserungen in einem zukünftigen 1.2-Update angedeutet, ohne bisher konkrete Inhalte oder ein Erscheinungsfenster zu nennen.',
  },
  'what-tips-help-solve-treasure-hunt-riddles-faster': {
    q: 'Welche Tipps helfen, Elviras Schatzsuche-Rätsel schneller zu lösen?',
    a: 'Gemeldet: Konzentriere dich auf Wahrzeichen statt auf den exakten Rätseltext, suche hinter großen Dekorationen und Möbeln, und drehe die Kamera in unübersichtlichen Bereichen, um versteckte Objekte sichtbar zu machen.',
  },
  'do-elvira-and-mina-run-their-own-loveage-stalls': {
    q: 'Betreiben Elvira und Mina eigene Stände beim Loveage Festival?',
    a: 'Ja, bestätigt: Elvira und Mina betreiben während des zweitägigen Loveage Festivals ihre eigenen Verkaufsstände, getrennt von Lunas Blumenstrauß-Stand vor Webb of Wonders.',
  },
  'is-festival-variety-criticized-in-reviews': {
    q: 'Wird die Fest-Vielfalt in Reviews kritisiert?',
    a: 'Gemischt — ehrlich gemeldet: Manche Reviewer in der Launch-Woche genossen die Stände und den Geschenkeaustausch des Loveage Festivals, aber mindestens ein Reviewer fand die allgemeine Häufigkeit und Vielfalt der Feste im Vergleich zu Genre-Vertretern wie Stardew Valley dünn.',
  },
  'what-does-patch-1-1-45-fix': {
    q: 'Was behebt Patch 1.1.45 in Moonlight Peaks?',
    a: 'Bestätigt über die offiziellen Steam-Patch-Notes: 1.1.45 fügt eine Fotosensibilitäts-Warnung beim ersten Spielstart hinzu und behebt ein Problem, bei dem Sternzeichen im Star-Gazing-Minispiel durch schwarze Balken auf Breitbildmonitoren verdeckt wurden.',
  },
  'did-patch-1-1-44-fix-l-r-buttons-and-cloud-saves': {
    q: 'Hat Patch 1.1.44 das L+R-Tasten-Problem und die Cloud-Speicher-Synchronisation behoben?',
    a: 'Ja, bestätigt über die offiziellen Marvelous-USA-Patch-Notes: Version 1.1.44 behob ein Problem, bei dem die L- und R-Tasten nicht funktionierten, behob, dass das Marshmallow-Date-Ereignis die Röst-Eingabe nicht akzeptierte, und behob, dass Cloud-Speicherdateien nicht richtig synchronisierten.',
  },
  'when-is-the-physical-switch-2-edition-releasing': {
    q: 'Wann erscheint die physische Nintendo-Switch-2-Edition von Moonlight Peaks?',
    a: 'Bestätigt: Marvelous Europes physische Nintendo-Switch-2-Edition erscheint am 28. August 2026 in ganz Europa, zum Preis von 49,99 € / 44,99 £, und enthält ein exklusives Sammel-Stickerblatt der Stadtbewohner sowie einen digitalen Soundtrack.',
  },
  'does-the-steam-version-have-achievements-and-trading-cards': {
    q: 'Hat die Steam-Version von Moonlight Peaks Erfolge und Sammelkarten?',
    a: 'Ja, bestätigt: Der Funktionsumfang der Steam-Version umfasst Steam-Erfolge, Steam-Sammelkarten, Steam-Cloud-Speicher und volle Controller-Unterstützung, einschließlich DualShock-/PlayStation-Controller-Kompatibilität.',
  },
  'was-the-save-corruption-bug-fixed': {
    q: 'Wurde der Spielstand-Beschädigungs-Bug in Moonlight Peaks behoben?',
    a: 'Ja, bestätigt über die offiziellen Steam-Community-Update-Notizen: Ein Fix behob ein Problem, das Spielstände beim Beenden des Spiels während des Speicherns beschädigte, gebündelt mit Fixes rund um Ausdauer, Lagerung und einige Charakter-Interaktionen.',
  },
  'can-your-spouse-become-a-vampire-in-moonlight-peaks': {
    q: 'Kann der Ehepartner in Moonlight Peaks zum Vampir werden?',
    a: 'Ja, bestätigt: Nach der Hochzeit kann man einen menschlichen Ehepartner in einen Vampir verwandeln, sodass er nie altert und zum ewigen Begleiter wird. Im aktuellen Build gibt es keine Kinder, aber die Hochzeit umfasst eine große Zeremonie und das gemeinsame Einziehen.',
  },
  'what-does-setting-a-wedding-date-unlock': {
    q: 'Was schaltet die Festlegung eines Hochzeitsdatums frei?',
    a: 'Bestätigt: Die Festlegung eines Hochzeitsdatums (mindestens zwei Tage nach dem Antrag) schaltet neue Kleidung bei Third Eye Threads frei. Man kann sie sofort anziehen oder für den Hochzeitstag aufbewahren.',
  },
  'what-are-alinas-aras-and-dragans-birthdays': {
    q: 'Was sind Alinas, Aras\u2019 und Dragans Geburtstage und Lieblingsgeschenke?',
    a: 'Bestätigt: Alinas Geburtstag ist Frühling 10, sie liebt Schwarze Rosen und Schwarze Tulpen; Aras\u2019 Geburtstag ist Herbst 8, er mag Rote Azaleen; Dragans Geburtstag ist Frühling 28, er lässt sich mit Mondkristallen umwerben.',
  },
  'does-romance-unlock-crafting-blueprints': {
    q: 'Schaltet der Aufbau von Beziehungen Handwerks-Baupläne frei?',
    a: 'Ja, bestätigt über offizielles Spielmaterial: Freundschaften und romantische Beziehungen schalten einzigartige Handwerks-Baupläne und Materialien für Farm und Zuhause frei, zusätzlich zu Zuneigungs- und Story-Vorteilen.',
  },
  'is-the-romance-roster-23-or-24-characters': {
    q: 'Hat Moonlight Peaks 23 oder 24 Romanze-Charaktere?',
    a: 'Ungeklärt, Stand einer Überprüfung vom 18. Juli 2026: Post-Launch-Guides identifizieren 23 benannte daten-fähige Charaktere, während der offizielle Shop-Text weiterhin "zwei Dutzend romanzefähige Charaktere" beschreibt. Keine verlässliche Quelle benennt derzeit einen 24. Kandidaten.',
  },
  'can-the-watering-can-be-refilled-in-the-river': {
    q: 'Kann man die Gießkanne im Fluss auffüllen, bevor man einen Brunnen kauft?',
    a: 'Ja, bestätigt: Bis man einen Brunnen kauft, kann man die Gießkanne direkt am Fluss auffüllen — der Brunnen ist damit eher ein Komfort-Upgrade als eine zwingende Voraussetzung.',
  },
  'does-aquaflux-water-non-magical-crops-too': {
    q: 'Bewässert Aquaflux auch nicht-magische Pflanzen?',
    a: 'Ja, bestätigt: Das Wirken von Aquaflux bewässert als Nebeneffekt auch nahegelegene nicht-magische Pflanzen, aber der Zauber geht nicht sparsam mit Mana um — er läuft weiter, bis die Gießkanne leer ist, was bei knappem Mana verschwenderisch sein kann.',
  },
  'how-much-is-noels-fishing-rod-bet': {
    q: 'Wie viel Gold setzt Noel bei der Angelruten-Wette?',
    a: 'Bestätigt: Noel wettet 250 Gold, dass man nicht vor ihm drei verschiedene Fische fangen kann. Das Gewinnen der Wette ist der Weg zur ersten Angelrute, statt sie zu kaufen.',
  },
  'what-does-orlock-give-you-on-spring-1': {
    q: 'Was gibt Orlock einem am Frühling 1 in Moonlight Peaks?',
    a: 'Bestätigt: Orlock liefert die ersten Samentüten (Blutrauben-Samen) am Frühling 1, nachdem er darum gebeten hat, ihm Wein zu machen. Blutrauben-Samen produzieren die ganze Saison über unbegrenzt und können zu Wein verarbeitet werden.',
  },
  'how-do-you-harvest-a-gobbler-crop': {
    q: 'Wie erntet man eine Gobbler-Pflanze in Moonlight Peaks?',
    a: 'Bestätigt: Der Gobbler ist eine magische Sommerpflanze, die mit Aquaflux bewässert und mit dem spezifischen Fisch oder Critter gefüttert werden muss, den sie verlangt, bevor sie geerntet werden kann — anders als eine normale Pflanze.',
  },
  'what-crops-are-best-each-season': {
    q: 'Welche Pflanzen sind in jeder Jahreszeit am besten in Moonlight Peaks?',
    a: 'Gemeldet: Karotte im Frühling, Stinktierschwanz im Sommer und Kürbis im Herbst werden für direkten Verkauf hervorgehoben, während Preiselbeeren eine nachwachsende Fass-Pflanze über Herbst und Winter liefern.',
  },
  'is-there-one-best-crop-in-moonlight-peaks': {
    q: 'Gibt es eine einzige beste Pflanze zum Anbauen in Moonlight Peaks?',
    a: 'Nein, gemeldet: Die Antwort hängt davon ab, ob man Erzeugnisse verarbeiten kann, Mana-Bewässerung für magische Pflanzen unterstützt, und bereit ist, auf eine nachwachsende Pflanze zu warten, bis sie ihre Samenkosten zurückzahlt — es gibt keine universell beste Wahl.',
  },
  'is-there-a-mirror-outside-your-house': {
    q: 'Gibt es einen Spiegel außerhalb des eigenen Hauses in Moonlight Peaks?',
    a: 'Ja, bestätigt: Ein Spiegel zum Wechseln von Kleidung und Accessoires ist zusätzlich bei Third Eye Threads verfügbar, dem Kleidungsladen in der südöstlichen Ecke der Stadt, neben dem im eigenen Haus.',
  },
  'can-you-use-more-than-one-alter-ego-elixir': {
    q: 'Kann man mehr als ein Alter-Ego-Elixier in Moonlight Peaks verwenden?',
    a: 'Ja, bestätigt: Jedes einzelne Elixier ist einmal verwendbar, aber da Sabrina es wiederholt bei Webb of Wonders verkauft, kann man jederzeit ein weiteres kaufen und trinken, um das Aussehen erneut zu ändern.',
  },
  'is-there-a-mod-for-more-character-customization': {
    q: 'Gibt es einen Mod für mehr Charakteranpassung in Moonlight Peaks?',
    a: 'Gemeldet: Ein von der Community erstellter Mod namens "Serena\u2019s Salon", verfügbar auf Nexus Mods, erweitert den Spiegel, um den vollständigen In-Game-Charakter-Editor erneut zu öffnen, und fügt ein tragbares Menü für Farben und Namensgebung hinzu. Dies ist inoffizieller Fan-Content, kein Entwickler-Feature.',
  },
  'how-many-rooms-does-the-museum-have-and-what-quality': {
    q: 'Wie viele Räume hat das Museum und welche Qualität brauchen sie?',
    a: 'Bestätigt: Das Museum hat fünf Räume — Aquarium (22 Fische, normale Qualität), Kleintier (95 Käfer und Schmetterlinge), Landwirtschaft (55 Pflanzen, nur 2-Sterne-Qualität), Gottheit (4 Objekte durch Beschenken von Sonnengott, Mondgöttin, Kürbiskopf und Tod) und ein übernatürlicher Raum.',
  },
  'what-unlocks-at-10-percent-museum-completion': {
    q: 'Was schaltet sich bei 10% Museums-Fortschritt frei?',
    a: 'Bestätigt von zwei unabhängigen Quellen: Das Erreichen von 10% Gesamt-Museumsfortschritt schaltet den Bauplan für das Firefly Sanctuary als Jadas Meilenstein-Belohnung frei.',
  },
  'why-wont-the-museum-accept-my-furniture-donation': {
    q: 'Warum akzeptiert das Museum meine Möbelspende nicht?',
    a: 'Gemeldet: Manche Möbeldekorationen zählen nur in bestimmten Material- oder Farbvarianten als Spende. Wenn eine Version nicht akzeptiert wird, versuche eine andere Variante desselben Stücks herzustellen.',
  },
  'is-there-a-mod-to-track-museum-donations': {
    q: 'Gibt es einen Mod, um Museumsspenden zu verfolgen?',
    a: 'Gemeldet: Ein von der Community erstellter Mod namens "Museum Tracker", verfügbar auf Nexus Mods, öffnet über die F8-Taste eine Checkliste mit jedem Museumsspenden-Objekt über alle Sammlungen hinweg und speichert den Fortschritt automatisch. Dies ist inoffizieller Fan-Content.',
  },
  'what-is-in-howling-marshes': {
    q: 'Was gibt es in Howling Marshes in Moonlight Peaks?',
    a: 'Bestätigt: Howling Marshes, nördlich der Stadt, ist die Heimat des Logan-Hauses, in dem Brook wohnt. Spieler können hier Gelben Glowglammer sammeln und beim Angeln den Brickle fangen, und Tod wird häufig gesehen, wie er unter einem Baum nahe der Mitte des Sumpfes sitzt.',
  },
  'who-lives-at-the-ambrosia-mansion-in-misty-shores': {
    q: 'Wer wohnt im Ambrosia-Anwesen in Misty Shores?',
    a: 'Bestätigt: Das Ambrosia-Anwesen in Misty Shores, südlich der Spielerfarm, ist die Heimat von Orlock, Mina und Evan. Der Friedhof der Gegend wird oft von Tod, Jarvis und Balthasar Logan besucht, und Yabbis verkauft Waren am Strand südlich des Anwesens.',
  },
  'why-are-luna-bays-waters-special': {
    q: 'Warum sind Luna Bays Gewässer besonders in Moonlight Peaks?',
    a: 'Bestätigt: Den verzauberten Gewässern von Luna Bay werden heilende Eigenschaften nachgesagt, im Spiel zurückgeführt auf ihre lange Aussetzung gegenüber dem Licht des Mondes.',
  },
  'where-is-luna-bay-located': {
    q: 'Wo befindet sich Luna Bay in Moonlight Peaks?',
    a: 'Gemeldet: Luna Bay ist der wolkenverhangene Bereich der Karte oberhalb von Howling Marshes. Früh im Spiel sieht man die Brücke dorthin, aber sie ist kaputt, ohne klaren Weg zur Reparatur, sodass die Meerjungfrauen-Bewohner verborgen bleiben, bis die Region freigeschaltet wird.',
  },
  'which-residents-live-in-central-town': {
    q: 'Welche Bewohner leben im Stadtzentrum von Moonlight Peaks?',
    a: 'Bestätigt: Das Stadtzentrum beherbergt die Mehrheit der Bewohner, darunter Noel, Saga, Alina, Elvira, Samael, Ridge, Ludo, Dragan, Sabrina und Aras, unter anderen.',
  },
  'where-do-you-catch-whisper-and-splotch': {
    q: 'Wo fängt man Whisper und Splotch in Moonlight Peaks?',
    a: 'Bestätigt: Whisper kann jederzeit in den meisten Gewässern außer dem Silverveil-See gefangen werden, während Splotch ein häufiger Fang speziell im Silverveil-See ist.',
  },
  'when-does-goldy-appear-in-moonlight-peaks': {
    q: 'Wann erscheint Goldy in Moonlight Peaks?',
    a: 'Bestätigt: Goldy erscheint in Flüssen, die mit dem Silverveil-See verbunden sind, nur im Frühling oder Sommer, und erscheint nicht in Herbst oder Winter.',
  },
  'when-can-you-catch-moonflutter-and-twilight': {
    q: 'Wann kann man Moonflutter und Twilight fangen?',
    a: 'Bestätigt: Twilight wird in Luna Bay am frühen Abend vor Einbruch der Dunkelheit gefangen, während der seltene Moonflutter nur in Luna Bay bei Vollmond erscheint.',
  },
  'which-fish-need-a-rod-upgrade-first': {
    q: 'Welche Fische brauchen zuerst ein Angelruten-Upgrade?',
    a: 'Bestätigt: Furybud, Moonflutter, Gnasher, Gloy Gloy, Daybreaker und Goliath erfordern alle zuerst ein Angelruten-Upgrade. Der ungewöhnliche Fisch "Missing" wird am besten als besondere Jagd behandelt, nachdem die normale regionale Checkliste abgeschlossen ist.',
  },
  'does-moonlight-peaks-have-a-minimap-or-quest-markers': {
    q: 'Hat Moonlight Peaks eine Minikarte oder Quest-Marker?',
    a: 'Nein, bestätigt: Es gibt kein Minikarten- oder Quest-Marker-System, und die Kamera ist fest statt frei folgend. Die Spielkarte ist die Haupt-Navigationshilfe und markiert Gebäude mit einem Ausrufezeichen oder funkelnder Aura, wenn eine Zwischensequenz verfügbar ist.',
  },
  'how-many-confirmed-locations-are-there-in-moonlight-peaks': {
    q: 'Wie viele bestätigte Orte gibt es in Moonlight Peaks?',
    a: 'Laut einem cross-referenzierten Orts-Tracker: 18 bestätigte benannte Orte über Stadt, Gehöft, Wildnis, Wasser und unterirdische Bereiche, einschließlich des Twilight-Katakomben-Tunnelnetzes, das Krypta, Kristallhöhle, Misty-Shores-Friedhof, Luna Bay und Howling Marshes verbindet.',
  },
  'does-the-can-need-to-be-full-before-casting-aquaflux': {
    q: 'Muss die Gießkanne voll sein, bevor man Aquaflux wirkt?',
    a: 'Ja, bestätigt: Achte darauf, dass die Gießkanne voll ist, bevor du Aquaflux wirkst, da der Zauber in dem Moment endet, in dem die Kanne leer wird, was den Zauber verschwendet, wenn sie nicht vorher aufgefüllt wurde.',
  },
  'does-rain-water-magical-crops-in-moonlight-peaks': {
    q: 'Bewässert Regen magische Pflanzen in Moonlight Peaks?',
    a: 'Nein, bestätigt: Gewöhnlicher Regen wirkt bei magischen Pflanzen nicht so wie bei normalen — Aquaflux (oder ein anderer Bewässerungszauber) wird unabhängig vom Wetter benötigt.',
  },
  'where-should-new-players-start-with-tools-and-spells': {
    q: 'Wo sollten neue Spieler bei Werkzeugen und Zaubersprüchen anfangen?',
    a: 'Empfohlen von einem Walkthrough-Hub: Beginne mit dem Werkzeug-Guide und dem Zauber-Guide zusammen, um die wichtigsten Upgrades, Hilfsgegenstände und Magie-Optionen zu verstehen, die den Alltag prägen, und wechsle dann zu Formen und besonderen Interaktionen für bewegungsbasierte Ziele.',
  },
  'what-is-orlocks-personality-like': {
    q: 'Wie ist Orlocks Persönlichkeit in Moonlight Peaks?',
    a: 'Bestätigt: Orlock, der Älteste des Ambrosia-Clans, wird als Mann mit gepflegtem Geschmack und strenger Art beschrieben. Eine frühe Interaktion dreht sich um seine Bitte um Wein, und ihn für sich zu gewinnen soll Geduld und Sinn für die feineren Dinge erfordern.',
  },
  'what-are-samael-and-elviras-personalities-like': {
    q: 'Wie sind Samaels und Elviras Persönlichkeiten in Moonlight Peaks?',
    a: 'Bestätigt: Samael passt zum Archetyp des sensiblen, grüblerischen Romantikers, oft in Gedanken versunken. Elvira, sein ehrgeizigeres Gegenstück, nimmt das Vampirsein nicht allzu ernst, sehr zum Missfallen ihres Onkels Orlock.',
  },
  'what-gifts-does-death-like-as-a-romance-option': {
    q: 'Welche Geschenke mag Tod als Romanze-Option?',
    a: 'Bestätigt: Tod, dargestellt als jemand, der in Moonlight Peaks Urlaub macht und es ruhig angehen lässt, lässt sich mit Müllflaschen und rostigen Fischdosen umwerben, passend zu seiner andernorts bestätigten Vorliebe für Müll als Lieblingsgeschenk.',
  },
  'can-you-date-more-than-one-character-at-once': {
    q: 'Kann man mehr als einen Charakter gleichzeitig daten?',
    a: 'Ja, bestätigt: Man kann mehrere Charaktere gleichzeitig daten, und Partner bemerken es möglicherweise, aber ein Heiratsantrag bei acht Herzen bindet einen fortan an diesen einen exklusiven Partner.',
  },
  'how-do-heart-icons-show-who-is-dateable': {
    q: 'Wie zeigen Herzsymbole, wer daten-fähig ist?',
    a: 'Bestätigt: Im Beziehungsmenü zeigen Charaktere, die als Freunde ihr Maximum erreichen, nur vier Herzsymbole, während daten-fähige Charaktere einen gestapelten Satz von drei Herzen mit "..." darauf zeigen.',
  },
  'is-your-first-fishing-rod-a-quest-reward-or-purchase': {
    q: 'Ist die erste Angelrute eine Quest-Belohnung oder ein Kauf?',
    a: 'Bestätigt: Die erste Angelrute erhält man durch das Gewinnen einer Wette gegen Noel (drei verschiedene Fische vor ihm fangen, für 250 Gold), statt eine im Laden zu kaufen.',
  },
  'can-you-rotate-and-preview-your-character-before-starting': {
    q: 'Kann man den Charakter vor dem Start drehen und ansehen?',
    a: 'Ja, bestätigt: Nach der Wahl von Körper, Hautton, Frisur, Augen, Gesichtsmerkmalen und Start-Outfit kann man das Modell drehen und die Farbkombination prüfen, bevor man bestätigt und "Spiel starten" drückt.',
  },
  'are-preview-build-details-guaranteed-to-match-launch': {
    q: 'Stimmen Details aus Vorschau-Builds garantiert mit der Release-Version überein?',
    a: 'Nicht unbedingt — ein ausführlicher Charakter-Editor-Guide kennzeichnet Informationen aus erweiterten Vorschau-Builds explizit mit einer Demo-Build-Warnung, da sich solche Details gegenüber dem finalen Release ändern können.',
  },
  'what-does-patch-1-1-44-fix': {
    q: 'Was behebt Patch 1.1.44 in Moonlight Peaks?',
    a: 'Bestätigt über die offiziellen Steam-Patch-Notes: 1.1.44 erschien einen Tag nach 1.1.41 mit sieben gezielten Fixes, die Spielstand- und Haus-Upgrade-Ladevorgänge, Baumsamen, Pflanzenwachstum in Regennächten, Sichtbarkeit des Stick-Tisches, die zu lange dauernde Krönungszeremonie beim Moonlight Ball, einen Aras-Herz-Ereignis-Funkel-Bug und das Nicht-Graben-Können von Grabstellen als Hellkitten in Küstennähe betrafen.',
  },
  'what-does-patch-1-1-41-add': {
    q: 'Was fügt Patch 1.1.41 in Moonlight Peaks hinzu?',
    a: 'Bestätigt über offizielle Patch-Notes: 1.1.41 macht Hauslagerung von überall auf dem Grundstück zugänglich (einschließlich Scheunen und Gewächshäusern), fügt eine Schnellübertragungs-Option hinzu, lässt Stickerei früher freischalten, zeigt bei Baumsamen die Erntesaison statt der Wachstumssaison, fügt mehr Vampir-Skizzen von Brook hinzu, verbessert Szenen-Ladezeiten und behebt, dass das Netz bei verfehlten Schwüngen Energie verbraucht, plus zwei separate Dialog-Steckenbleib-Bugs.',
  },
  'do-switch-patches-arrive-same-time-as-steam': {
    q: 'Kommen Switch- und Switch-2-Patches gleichzeitig mit der Steam-Version?',
    a: 'Nein, bestätigt vom Entwickler: Große Updates wie 1.1.41 gehen zuerst an Steam, wobei Nintendo Switch, Switch 2 und Google Play Games erst danach folgen, sobald die Plattform-Zertifizierung abgeschlossen ist. Man sollte nicht von übereinstimmenden Patch-Nummern oder Daten über Plattformen hinweg ausgehen.',
  },
  'what-did-patch-1-1-38-fix': {
    q: 'Was behob Patch 1.1.38 in Moonlight Peaks?',
    a: 'Bestätigt: Patch 1.1.38 (veröffentlicht am 11. Juli 2026) zielte auf periodische Mikroruckler und einen Soft-Lock im Zusammenhang mit dem Nokturna-Kartenminispiel ab. Community-Berichte weisen darauf hin, dass danach weiterhin einige Quest-Bugs und Switch-Performance-Probleme auftraten, weshalb 1.1.41 und 1.1.44 innerhalb weniger Tage folgten.',
  },
  'how-do-you-unlock-museum-in-the-making-quest': {
    q: 'Wie schaltet man die Quest "Museum in the Making" frei?',
    a: 'Bestätigt durch einen speziellen Quest-Walkthrough: Die Hendersons müssen in die Stadt gezogen sein, außerdem müssen "A New Beginning" und "The Need for Herbs" abgeschlossen sein. Nach dem Treffen mit Jada Henderson prüfe die Spielpost auf einen "Fan Mail"-Brief und betrete dann die Stadt, um die Quest auszulösen.',
  },
  'how-many-main-quests-does-the-game-have': {
    q: 'Wie viele Hauptquests hat Moonlight Peaks?',
    a: 'Gemeldet von GameRants Quest-Liste: 44 Hauptquests insgesamt, deren Abschluss beschrieben wird als notwendig, um viele Funktionen, Verwandlungsformen und Kartenorte freizuschalten, statt rein optionaler Inhalt zu sein.',
  },
  'what-is-the-museum-unlock-route': {
    q: 'Wie lautet die vollständige Freischalt-Route für das Museum?',
    a: 'Bestätigt über einen cross-referenzierten Walkthrough: Die Route verläuft in zwei Stufen — erst vier Familienartefakte sammeln, dann den Museumspark säubern und dekorieren, bevor fünf Eröffnungseinladungen verteilt werden. Ein dokumentierter Durchgang erreichte dies etwa zu Beginn des Herbstes im Jahr 1, wobei das ein Beispiel-Zeitpunkt statt eines festen Kalenderdatums ist.',
  },
  'can-you-only-invite-one-date-per-night': {
    q: 'Was passiert, wenn man zwei Charaktere für dieselbe Nacht zum Date einlädt?',
    a: 'Gemeldet als Warnung von einem Romanze-Walkthrough: Wenn man mehr als eine Date-Einladung für dieselbe bevorstehende Nacht verschickt, könnte nur die zuletzt gesendete Einladung tatsächlich auslösen — man sollte nicht annehmen, dass beide Dates stattfinden.',
  },
  'what-does-a-touch-of-magic-quest-require': {
    q: 'Was verlangt die Quest "A Touch of Magic"?',
    a: 'Bestätigt über einen speziellen Quest-Guide: Wenige Tage nach "Mend it with Magic" kommt ein Brief mit dem Titel "The Coven\u2019s Calling" an. Fiona bittet dann darum, die Beherrschung der Magie zu beweisen, indem man mit einem Zauber sofort eine Pflanze wachsen lässt, mit einem anderen Regen erzeugt und mit einem dritten das Haus versetzt.',
  },
  'which-characters-gift-guides-still-disagree-on': {
    q: 'Bei welchen Charakteren sind sich Geschenke-Guides noch uneinig?',
    a: 'Gemeldet von einem cross-geprüften Geschenke-Guide, der GameRant, IGN und Nintendo Everything vergleicht: Noel, Evan, Aras, Elvira und Ludo werden als Charaktere markiert, bei denen sich öffentliche Geschenktabellen noch widersprechen. Der Guide empfiehlt, für diese fünf einer aktuellen In-Game-Geschenkhistorie mehr zu vertrauen als jeder einzelnen kopierten Liste.',
  },
  'how-many-romanceable-characters-are-there-really': {
    q: 'Sind es 23 oder 24 romanzefähige Charaktere in Moonlight Peaks?',
    a: 'Ungeklärte Diskrepanz, gemeldet: Ein ausführliches Review zählt 23 daten-fähige Charaktere, ein anderes sagt 24, während der offizielle Shop-Text einfach "über zwei Dutzend" sagt. Keine Quelle hat benannt, wer ein umstrittener 24. Kandidat wäre, daher wird dies als offener Konflikt behandelt statt als feststehende Zahl.',
  },
  'what-are-sagas-confirmed-loved-gifts': {
    q: 'Was sind Sagas bestätigte Lieblingsgeschenke?',
    a: 'Bestätigt durch Abgleich von GameRant, IGN und Nintendo Everything (als der am stärksten cross-geprüfte Eintrag in einem Vergleichs-Guide bezeichnet): Saga liebt Lila Kthonia, Blaue Kthonia, Lila Mondblume, Blaue Mondblume, Tee, Goldenes Ei und Diamant. Gewöhnliche Blumen, Getränke und Hüte funktionieren als einfachere gemochte Alternativen; Honig vermeiden.',
  },
  'what-does-death-like-as-gifts': {
    q: 'Welche Geschenke mag Tod in Moonlight Peaks?',
    a: 'Gemeldet von einem cross-geprüften Geschenke-Guide: Tods Lieblingskategorie ist ungewöhnlich — Müllgegenstände, jeder Hut oder Eierlikör. Rostige Sodadosen, Plastikringe und ähnlicher Müll werden als geliebt gemeldet, wobei Nintendo Everything separat auf Müllflaschen und rostige Fischdosen speziell hinweist. Eier, Brot, Käse, Bier und Saft werden als gemocht gemeldet.',
  },
  'was-aras-heart-event-bug-fixed': {
    q: 'Wurde der Aras-Herz-Ereignis-Marker-Bug behoben?',
    a: 'Ja, bestätigt über offizielle Patch-Notes: Ein Bug, der Aras\u2019 Herz-Ereignis-Funkelanzeige am Third-Eye-Threads-Schneidergebäude statt an seinem korrekten Stadtort zeigte, wurde behoben.',
  },
  'which-five-characters-are-confirmed-not-romanceable': {
    q: 'Welche Charaktere sind bestätigt nicht romanzefähig?',
    a: 'Bestätigt durch einen cross-geprüften Romanze-Guide: Skull Girl, Kürbiskopf (der theatralische Event-Gastgeber), die Mondgöttin, Viktor und Brook Logan (Sagas Vater) stehen ausdrücklich außerhalb des Dating-Aufgebots, auch wenn mehrere von ihnen volle Zeitpläne und Freundschaftsereignisse haben.',
  },
  'how-many-hearts-for-marriage': {
    q: 'Wie viele Herzen braucht man zum Heiraten in Moonlight Peaks?',
    a: 'Bestätigt über mehrere Gameplay-basierte Guides: 8 Herzen insgesamt. Die ersten 4 rosa Herzen kommen aus gewöhnlicher Freundschaft (reden und schenken), und die restlichen 4 roten Herzen schalten sich erst frei, sobald man offiziell mit diesem Charakter datet.',
  },
  'can-you-divorce-or-break-up-with-llemi': {
    q: 'Kann man sich in Moonlight Peaks trennen oder scheiden lassen?',
    a: 'Ja, bestätigt: Ein Besuch bei Llemi erlaubt es, eine bestehende Beziehung oder Ehe zu beenden, aber der andere Charakter wird verärgert und für ein paar Spieltage nicht ansprechbar, statt sofort ohne Konsequenzen zurückgesetzt zu werden.',
  },
  'when-can-you-hug-a-character': {
    q: 'Ab wann kann man einen Charakter umarmen?',
    a: 'Bestätigt durch TechRaptors Romanze-Guide: Sobald man zwei Herzen mit einem Charakter erreicht, kann man ihn umarmen, was zu einem täglichen Zuneigungs-Tracker zählt, der mit dem Küssen geteilt wird, sobald diese Aktion durch Dating freigeschaltet wird.',
  },
  'what-are-safe-generic-gifts-early-on': {
    q: 'Was sind sichere generische Geschenke, bevor man die Vorlieben eines Charakters kennt?',
    a: 'Gemeldet von einem Gameplay-basierten Romanze-Guide: Lila Tulpe und Blutraube werden als verlässliche Standardgeschenke genannt, die die meisten Romanze-Kandidaten mögen, was sie zu einer vernünftigen Rückfalloption macht, während man die Lieblingsgegenstände eines bestimmten Charakters noch lernt.',
  },
  'how-does-daily-gifting-affect-relationship-points': {
    q: 'Wie beeinflusst tägliches Schenken die Beziehungspunkte?',
    a: 'Bestätigt von TechRaptor: Ein Charakter täglich anzusprechen und ihm ein Geschenk zu geben, steigert die Beziehungspunkte, mit Extrapunkten für gemochte oder geliebte Geschenke. Gemochte Gegenstände sind mit einem Stern markiert und geliebte mit einem Herz im Geschenkhistorie-Log, sodass man vergangene Reaktionen nachschauen kann, statt erneut zu raten.',
  },
  'what-materials-does-ambrosia-crest-quest-need': {
    q: 'Welche Materialien verlangt die Ambrosia-Wappen-Quest?',
    a: 'Bestätigt über ein cross-verifiziertes Quest-Log: Orlock verlangt für das Ambrosia-Wappen veredelten Stein, Goldbarren und Glas — eine Handwerksmaterial-Anfrage statt einer Suchquest nach einem bestimmten verlorenen Objekt wie beim früheren Logan-Wappen.',
  },
  'what-can-you-harvest-in-howling-marshes': {
    q: 'Was kann man in Howling Marshes ernten?',
    a: 'Bestätigt über mehrere Launch-Woche-Quellen: Sugarbone und mehrere Blumenarten. Guides empfehlen, sie an einer Kochstation oder einem Trockengestell zu verarbeiten statt roh zu verkaufen, für besseren Wert.',
  },
  'what-fish-need-specific-weather-or-moon-phase': {
    q: 'Welche Fische benötigen bestimmtes Wetter oder Mondphasen?',
    a: 'Gemeldet von einem cross-verifizierten Angel-Guide: Silverveil-See bei Regen ist mit Mouthout verknüpft, seine Zuflüsse im Frühling oder Sommer mit Goldy, der See selbst im Winter mit Fortipod, Luna Bay bei Vollmond mit Moonflutter und Luna Bay am frühen Abend mit Twilight.',
  },
  'why-does-fish-count-say-21-vs-22': {
    q: 'Warum sagen manche Quellen 21 Fische und andere 22?',
    a: 'Gemeldet von einem cross-referenzierten Angel-Guide, der Neoseeker, Bonus Action, IGN und TheGamer vergleicht: Launch-Woche-Quellen dokumentieren insgesamt 22 benannte Fische, aber mindestens eine Museums-Aquarium-Seite scheint den ungewöhnlichen Fisch "Missing" aus ihrer Zählung auszuschließen, was die Diskrepanz zwischen 21 und 22 erklärt.',
  },
  'is-it-armour-or-amour-fish': {
    q: 'Heißt der Pink-Grove-Fisch "Armour" oder "Amour"?',
    a: 'Ungeklärte Rechtschreib-Diskrepanz, gemeldet: Ein Launch-Guide schreibt den Pink-Grove-Fisch als "Armour", während eine größere 22-Einträge-Tabelle "Amour" verwendet. Prüfe den genauen Namen in der eigenen In-Game-Sammlung, bevor du ihn unter einer der beiden Schreibweisen als fehlend meldest.',
  },
  'how-many-rooms-does-the-museum-have': {
    q: 'Wie viele Spendenräume hat das Museum?',
    a: 'Bestätigt über einen speziellen Museums-Guide: Fünf separate thematische Sammlungsräume, erreichbar über ein Portal in der Haupthalle. Man spendet, indem man den spezifischen Raum für diese Sammlung besucht, statt mit einem Kurator oder Jada direkt zu sprechen.',
  },
  'how-do-you-know-what-the-museum-still-needs': {
    q: 'Woher weiß man, was das Museum noch braucht?',
    a: 'Bestätigt über einen speziellen Museums-Guide: Jeder Gegenstand im Inventar, der noch für eine Sammlung benötigt wird, zeigt ein kleines Museumssymbol darüber, was hilft, versehentliches Verkaufen oder Verwenden von etwas noch Benötigtem zu vermeiden.',
  },
  'why-is-rose-quartz-worth-prioritizing': {
    q: 'Warum lohnt es sich, Rosenquarz früh zu priorisieren?',
    a: 'Bestätigt über cross-referenzierte Bergbau- und Quest-Guides: Rosenquarz aus der Kristallhöhle ist direkt mit dem Freischalten des Mana-Extraktors verknüpft, statt ein allgemeines Handwerksmaterial zu sein, weshalb es sich lohnt, gezielt danach zu graben, wenn man dieses Freischalten anstrebt.',
  },
  'how-much-mana-does-aquaflux-i-cost': {
    q: 'Wie viel Mana kostet Aquaflux I und wie viel kann er bewässern?',
    a: 'Bestätigt über einen dokumentierten Zauber-Prioritäts-Guide, der Eurogamers Zauberliste zitiert: Aquaflux I kostet 1 Mana und deckt bis zu 16 Pflanzen pro Wirkung ab. Es ist der eindeutig erste Prioritätszauber, da magische Pflanzen mit einer gewöhnlichen Gießkanne überhaupt nicht bewässert werden können.',
  },
  'does-refilliarmus-cost-mana': {
    q: 'Kostet Refilliarmus Mana?',
    a: 'Nein, bestätigt: Refilliarmus füllt die Gießkanne sofort für null Mana auf. Er ersetzt Aquaflux für magische Pflanzen nicht, entfernt aber die Notwendigkeit eines manuellen Nachfüll-Wegs beim Bewässern gewöhnlicher Pflanzen.',
  },
  'what-does-tomorrows-tears-do': {
    q: 'Was bewirkt der Zauber "Tomorrow\u2019s Tears"?',
    a: 'Bestätigt über eine dokumentierte Zauberliste: Tomorrow\u2019s Tears kostet 3 Mana und verursacht Regen in der folgenden Spielnacht, was manuelles Bewässern reduzieren kann — magische Pflanzen brauchen aber unabhängig vom Wetter weiterhin Aquaflux.',
  },
  'can-you-date-any-character-regardless-of-gender': {
    q: 'Kann man in Moonlight Peaks jeden Charakter unabhängig vom Geschlecht daten?',
    a: 'Ja, bestätigt: Alle romanzefähigen Charaktere können unabhängig von Identität und Orientierung der Spielfigur gedatet werden. Das Spiel bietet einen inklusiven Charakter-Editor und queere Romanze-Optionen ohne Geschlechtseinschränkungen.',
  },
  'does-the-character-creator-have-heterochromia': {
    q: 'Hat der Charakter-Editor Heterochromie in Moonlight Peaks?',
    a: 'Ja, von den Entwicklern über offizielles TikTok bestätigt: Der Charakter-Editor umfasst Heterochromie (unterschiedlich gefärbte Augen) unter seinen Optionen, zusammen mit Frisuren, Hauttönen, Make-up, Piercings und Kleidung.',
  },
  'does-moonlight-peaks-use-joy-con-motion-controls': {
    q: 'Nutzt Moonlight Peaks Joy-Con-Bewegungssteuerung?',
    a: 'Ja, bestätigt: Die Switch-Version nutzt Joy-Con-Bewegungssteuerung und HD-Rumble-haptisches Feedback für Zaubersprüche und Werkzeug-Interaktionen, was Aktivitäten wie Tränkebrauen und Angeln taktiles Feedback verleiht.',
  },
  'does-shapeshifting-use-gyro-controls-on-switch': {
    q: 'Nutzt die Gestaltwandlung auf Switch Gyro-Steuerung?',
    a: 'Ja, bestätigt: Der Gestaltwandlungs-Mechanismus arbeitet mit der Gyroskop-Steuerung der Switch zusammen und lässt Spieler nach der Verwandlung intuitiv durch die Umgebungen der Stadt bewegen.',
  },
  'is-moonlight-peaks-a-3d-or-2d-game': {
    q: 'Ist Moonlight Peaks ein 3D- oder 2D-Spiel?',
    a: 'Bestätigt: Die offizielle chinesische Steam-Tag-Liste bestätigt es als Third-Person, 3D und Immersive Sim — kein 2D-Pixel-Art-Titel wie manche Genre-Vertreter.',
  },
  'is-there-only-one-vampire-transformation-form': {
    q: 'Ist die Fledermausform die einzige Vampir-Verwandlung in Moonlight Peaks?',
    a: 'Nicht unbedingt — bestätigt: Die Fledermausform ist die bestätigte Signatur-Verwandlung, aber die offizielle Website deutet ausdrücklich an, dass weitere Verwandlungen verfügbar sein könnten, ohne sie direkt zu benennen.',
  },
  'can-you-have-children-with-your-spouse': {
    q: 'Kann man mit dem Ehepartner Kinder bekommen in Moonlight Peaks?',
    a: 'Nein, bestätigt: Es gibt keine Kindererziehungs-Funktion in Moonlight Peaks, mit keinem Plan, sie später hinzuzufügen — eine bewusste Umfangsentscheidung trotz des Heiratssystems.',
  },
  'can-you-have-multiple-save-files': {
    q: 'Kann man mehrere Spielstände in Moonlight Peaks haben?',
    a: 'Ja, bestätigt: Man kann mehrere Spielstände für verschiedene Charakter-Durchgänge führen, aber es ist nicht möglich, zusätzliche Spielstände zu erstellen, die einen bestehenden Spielstand duplizieren.',
  },
  'how-does-moonlight-peaks-perform-on-switch-2': {
    q: 'Wie läuft Moonlight Peaks auf Nintendo Switch 2?',
    a: 'Bestätigt durch ein Hands-on-Review: Es lief außergewöhnlich gut auf der tragbaren Konsole, mit einer als solide und gut organisiert beschriebenen Controller-Belegung.',
  },
  'what-is-sagas-personality-like': {
    q: 'Wie ist Sagas Persönlichkeit in Moonlight Peaks?',
    a: 'Bestätigt: Saga ist oberflächlich schroff, aber tief der Stadt verbunden, kümmert sich um Gemeindeprobleme wie Schlaglöcher und verschwundene Kürbisse, und lässt Romanze wenig Raum, bis sie "sie überrascht".',
  },
  'is-orlock-estranged-from-his-children': {
    q: 'Ist Orlock von seinen Kindern entfremdet in Moonlight Peaks?',
    a: 'Bestätigt: Orlock wird mit einem Zerwürfnis zu seinen Kindern Mina und Evan geschrieben, sowie einer Frau, die vor langer Zeit ging — eine sensible, kunstliebende Seite soll aber mit Geduld erreichbar sein.',
  },
  'how-long-has-samael-run-the-broken-lamp': {
    q: 'Wie lange betreibt Samael schon The Broken Lamp in Moonlight Peaks?',
    a: 'Bestätigt: Samael, ein Mitglied der Familie Ambrosia, betreibt The Broken Lamp seit Jahrhunderten, beschrieben als geheimnisvoller Vampir unter einem grüblerischen Äußeren.',
  },
  'does-character-behavior-vary-by-creature-type': {
    q: 'Variiert das Charakterverhalten je nach Kreaturentyp?',
    a: 'Ja, von den Entwicklern bestätigt: Charaktere können sich je nach Umgebungsumständen, ihrer Vorstellung von Vampiren, oder ihrer Beziehung zur Familie der Spielfigur, einschließlich Graf Dracula, unterschiedlich verhalten.',
  },
  'what-gifts-does-jada-like': {
    q: 'Welche Geschenke mag Jada in Moonlight Peaks?',
    a: 'Bestätigt: Jada mag Weiße Rosen als Geschenk, passend zu ihrem Interesse am Sammeln von Relikten und der Erforschung des Übernatürlichen — ein Persönlichkeitszug, der auch ihre Museums-Questreihe antreibt.',
  },
  'what-is-winstons-personality-like': {
    q: 'Wie ist Winstons Persönlichkeit in Moonlight Peaks?',
    a: 'Bestätigt: Winston ist ängstlich mit einer sehr aktiven Vorstellungskraft und vertraut nur sehr langsam — eine der drei bestätigten Romanze-Optionen der Familie Henderson.',
  },
  'who-are-kim-and-rei-in-moonlight-peaks': {
    q: 'Wer sind Kim und Rei in Moonlight Peaks?',
    a: 'Bestätigt: Kim, die jüngste der Meerjungfrauen-Geschwister von Hosu, ist überschwänglich und aufgeschlossen, während Rei, die älteste, auf ihre jüngeren Geschwister aufpasst — beide sind bestätigte Romanze-Optionen.',
  },
  'can-you-navigate-menus-with-the-switch-touchscreen': {
    q: 'Kann man Menüs mit dem Switch-Touchscreen navigieren?',
    a: 'Ja, bestätigt: Touchscreen-Eingabe wird für Menü-Navigation unterstützt, was es erlaubt, Gegenstände und Handwerk im Handheld-Modus leichter zu verwalten, zusätzlich zur normalen Tastensteuerung.',
  },
  'does-resolution-change-between-docked-and-handheld': {
    q: 'Ändert sich die Auflösung zwischen Docked- und Handheld-Modus auf Switch?',
    a: 'Ja, bestätigt: Die Auflösung wechselt nahtlos zwischen Docked- und Handheld-Modus, wobei OLED-Modelle die mondbeschienene Szenerie und magische Effekte mit auffallend lebendiger Klarheit darstellen.',
  },
  'can-vampire-abilities-boost-farming-efficiency': {
    q: 'Können Vampirfähigkeiten die Landwirtschafts-Effizienz steigern?',
    a: 'Ja, bestätigt: Die Vampirfähigkeiten der Spielfigur können genutzt werden, um die Landwirtschafts-Effizienz zu steigern, ein separates System, das zusätzlich zu gewöhnlichen Werkzeug-Upgrades wirkt, statt sie zu ersetzen.',
  },
  'is-exploration-a-core-part-of-moonlight-peaks': {
    q: 'Ist Erkundung ein Kernbestandteil von Moonlight Peaks, oder nur Landwirtschaft?',
    a: 'Bestätigt: Die Stadt nach Ressourcen, beim Angeln und nach versteckten Geheimnissen zu erkunden, wird als zentrale Säule der Erfahrung beschrieben, neben Landwirtschaft und Beziehungsaufbau.',
  },
  'how-is-spellcasting-marketed-narratively': {
    q: 'Wie wird das Zaubersystem erzählerisch beworben?',
    a: 'Bestätigt über offiziellen Marketing-Text: Zauberforschung und Tränkebrauen werden als Wege dargestellt, verborgene Fähigkeiten freizuschalten, die durch das ewige Vampirleben der Spielfigur möglich werden.',
  },
  'how-many-families-are-officially-in-the-town': {
    q: 'Wie viele Familien gibt es offiziell in der Stadt?',
    a: 'Bestätigt: Die offizielle Website beschreibt sieben übernatürliche Familien plus gewöhnliche menschliche Bewohner und stellt klar, dass die Familie Henderson in diese gleiche Sieben-Familien-Struktur passt, statt eine zusätzliche achte Gruppe zu sein.',
  },
  'is-romance-tied-to-family-secret-quests': {
    q: 'Ist Romanze an Familiengeheimnis-Quests gebunden?',
    a: 'Bei mindestens einigen Charakteren ja — bestätigt durch Abgleich der offiziellen Darstellung mit Romanze-Guides: Das Fortschreiten in der eigenen Questreihe einer Familie ist an das Freischalten der tieferen Romanze-Inhalte dieser Familie gebunden.',
  },
  'is-magical-livestock-separate-from-crop-farming': {
    q: 'Ist die Haltung magischer Nutztiere getrennt vom Pflanzenanbau?',
    a: 'Ja, bestätigt: Die Haltung magischer Nutztiere und der magische Pflanzenanbau werden als zwei getrennte Systeme beschrieben, die beide mit den Vampirfähigkeiten der Spielfigur verstärkt werden können.',
  },
  'how-many-romanceable-characters-were-planned-originally': {
    q: 'Wie viele romanzefähige Charaktere waren ursprünglich für Moonlight Peaks geplant?',
    a: 'Bestätigt über ein früheres Entwickler-Interview: Der Art Director nannte zu diesem Zeitpunkt in der Entwicklung 15 romanzefähige Charaktere, mit der Hoffnung des Teams, dass die Zahl wachsen würde — passend zum späteren Launch-Text, der "über zwei Dutzend" beschreibt.',
  },
  'does-item-management-support-touch-input-on-all-platforms': {
    q: 'Unterstützt die Gegenstandsverwaltung Touch-Eingabe auf allen Plattformen?',
    a: 'Nein, bestätigt: Touchscreen-Unterstützung für die Verwaltung von Gegenständen und Handwerk ist spezifisch für den Handheld-Modus der Switch-Hardware — PC, Steam Deck und Android verlassen sich stattdessen auf ihre eigenen Standard-Eingabemethoden.',
  },
  'is-the-museum-quest-line-tied-to-jadas-personality': {
    q: 'Ist die Museums-Questreihe an Jadas Persönlichkeit gebunden?',
    a: 'Ja, bestätigt durch Abgleich von Charakter- und Museums-Guides: Jadas Charakterzug, Relikte zu sammeln und das Übernatürliche zu erforschen, wird im Spiel direkt als ihre Museumseröffnungs-Questreihe umgesetzt.',
  },
  'is-gothic-cottage-customization-a-marketed-headline-feature': {
    q: 'Ist die Anpassung des Cottages im gotischen Stil ein beworbenes Hauptmerkmal?',
    a: 'Ja, bestätigt über offiziellen chinesischen Steam-Text: Das verlassene, spukhaus-artige Familien-Cottage in einen bevorzugten gotischen Look zu verwandeln, wird als Hauptsäule gelistet, neben Tränkebrauen, Landwirtschaft und Romanze.',
  },
  'how-many-total-spells-are-in-the-game': {
    q: 'Wie viele Zaubersprüche gibt es insgesamt im Spiel?',
    a: 'Bestätigt über einen Systematik-Guide, der ausschließlich aus in Langform-Gameplay gezeigten Effekten erstellt wurde: 12 Zaubersprüche insgesamt, die alle Landwirtschaft, Sammeln, Pflanzenpflege oder Dekoration unterstützen. Das Spiel hat kein Kampfsystem, daher hat kein bestätigter Zauber eine Schadens- oder Kampfanwendung.',
  },
  'how-does-maturio-spell-family-work': {
    q: 'Wie funktioniert die Maturio-Zauberfamilie?',
    a: 'Bestätigt über eine quest-spezifische Zauber-Aufschlüsselung: Maturio-Zauber lassen Pflanzen sofort von ihrer ersten Wachstumsstufe bis zur Erntereife reifen, wobei höhere Stufen eine größere Anbaufläche pro Wirkung abdecken. Der Zauber schlägt fehl, wenn Bäume oder Felsen im Weg der Zielfläche stehen.',
  },
  'does-moon-phase-affect-crop-growth': {
    q: 'Beeinflusst die Mondphase das Pflanzenwachstum in Moonlight Peaks?',
    a: 'Gemeldet von einem Landwirtschafts- und Werkzeug-Guide: Pflanzen während eines Vollmonds soll das Wachstum merklich beschleunigen, was ein gutes Zeitfenster für hochwertige Pflanzen ist, während Neumondnächte für Pflanzen empfohlen werden, die dunklere Bedingungen bevorzugen.',
  },
  'how-do-you-unlock-the-herb-garden': {
    q: 'Wie schaltet man den Kräutergarten in Moonlight Peaks frei?',
    a: 'Bestätigt über einen Landwirtschafts-Guide: Der Kräutergarten-Bauplan wird durch ein Gespräch mit Luna nach Abschluss von "The Magic of Crops" freigeschaltet, statt direkt an ihrem Samenstand wie gewöhnliche Samen gekauft zu werden.',
  },
  'when-do-magical-seeds-appear-at-lunas-stand': {
    q: 'Wann erscheinen magische Samen an Lunas Samenstand?',
    a: 'Bestätigt über einen Landwirtschafts-Guide: Magische Samen fehlen an Lunas Stand zu Spielbeginn und werden erst verfügbar, nachdem ihre magiebezogene Questreihe ("The Magic of Crops") abgeschlossen ist.',
  },
  'how-much-gold-does-a-bee-house-make': {
    q: 'Wie viel Gold kann ein einzelnes Bienenhaus einbringen?',
    a: 'Gemeldet von einem Geld-Tipps-Guide: Ein einzelnes, von Blumen umgebenes Bienenhaus soll etwa 320 Gold Honig pro Zyklus erzeugen, was Bienenhäuser zu einer der besseren passiven Einkommensquellen macht.',
  },
  'how-much-does-the-alter-ego-elixir-cost': {
    q: 'Wie viel kostet das Alter-Ego-Elixier, und was verändert es?',
    a: 'Bestätigt über mehrere unabhängige Guides: Das Alter-Ego-Elixier kostet 1.300 Gold bei Webb of Wonders (verfügbar während Sabrinas Arbeitszeiten) und öffnet erneut den Charakteranpassungs-Bildschirm, wo man Hautfarbe, Augenfarbe, Haarfarbe und Frisur ändern kann. Kleidung und Accessoires hingegen werden kostenlos an jedem Spiegel gewechselt.',
  },
  'what-does-the-character-creator-cover': {
    q: 'Was umfasst der Charakter-Editor von Moonlight Peaks?',
    a: 'Bestätigt über die Anpassungs-Aufschlüsselung des offiziellen Wikis: Gesicht und Sommersprossen, Irisform und Augenfarbe, Wimpern, Make-up, Augenbrauen, Haare und Haarfarbe, Outfits (Sets, Oberteile, Unterteile, Schuhe) und Accessoires für Arme und Gesicht — plus die Namensgebung für Charakter, Farm und Hellkitten.',
  },
  'can-you-rename-your-character-later': {
    q: 'Kann man Charakter, Farm oder Hellkitten später umbenennen?',
    a: 'Nein, bestätigt durch einen Launch-Durchgang: Namen, die im Charakter-Editor für Charakter, Farm und Hellkitten gewählt werden, sind dauerhaft. Alles andere am Aussehen — Haare, Augen, Outfit — kann später über das Alter-Ego-Elixier neu gemacht werden.',
  },
  'are-character-creator-options-gender-locked': {
    q: 'Sind Optionen im Charakter-Editor geschlechtsgebunden in Moonlight Peaks?',
    a: 'Nein, bestätigt durch Community-Tests und die Editor-Aufschlüsselung des offiziellen Wikis: Optionen wie Gesichtsbehaarung, Frisuren und Outfits sind unabhängig vom Körpertyp verfügbar. Ein Community-Bericht merkt separat an, dass In-Game-Animationen unabhängig vom gewählten Körpertyp feminin kodiert bleiben, was eine Spielerbeobachtung ist, keine offizielle Aussage.',
  },
  'how-much-does-copper-pickaxe-upgrade-cost': {
    q: 'Wie viel kostet das Kupferspitzhacken-Upgrade?',
    a: 'Bestätigt über einen ausführlichen Bergbau-Guide: 3 Kupferbarren plus 1.000 Gold. Der Guide empfiehlt, so früh wie möglich zu upgraden, da höhere Spitzhacken-Stufen Zugang zu tieferen Bergbaugebieten freischalten.',
  },
  'what-tier-pickaxe-breaks-60-durability-deposits-fast': {
    q: 'Welche Spitzhacken-Stufe eignet sich am besten für intensive Bergbau-Sitzungen?',
    a: 'Bestätigt über einen ausführlichen Bergbau-Guide: Die Eisenspitzhacke ist die erste Stufe, die Vorkommen mit 60 Haltbarkeit in 8 Schlägen zerschlägt, weshalb sie das empfohlene Upgrade vor einer intensiven Bergbau-Sitzung ist.',
  },
  'do-ore-deposits-have-a-diamond-chance': {
    q: 'Haben Erzvorkommen eine Chance auf einen Diamanten?',
    a: 'Ja, bestätigt über einen ausführlichen Bergbau-Guide: Erz-, Rosenquarz- und Galaxiekristall-Vorkommen tragen eine 0,5%-Chance auf einen Diamanten zusätzlich zu ihrem Hauptmaterial, plus eine separate 5%-Bonus-Belohnungs-Chance (ein Bergbau-Rezept, oder nach Museumseröffnung eine Rezept-/Artefakt-Aufteilung). Reine Steinvorkommen liefern nur ihr Grundmaterial.',
  },
  'how-much-does-the-premium-fishing-rod-cost': {
    q: 'Wie viel kostet das Premium-Angelruten-Upgrade?',
    a: 'Bestätigt über einen cross-referenzierten Angel-Guide, der IGN zitiert: 16.000 Gold plus die ursprüngliche Rute und 3 Goldbarren. Das Upgrade schaltet das Fangen von "großen Schatten"-Fischen frei, die die Basis-Rute nicht erreicht.',
  },
  'does-the-enchanted-rod-remove-fishing-energy-cost': {
    q: 'Entfernt die verzauberte Rute die Energiekosten beim Angeln?',
    a: 'Gemeldet, noch nicht unabhängig bestätigt: Ein Guide beschreibt ein Upgrade auf eine verzauberte Rute, das die normalen Energiekosten beim Angeln vollständig entfernt, aber dieser spezifische Upgrade-Weg braucht noch unabhängige Verifizierung, bevor er als gesichert gilt.',
  },
  'should-you-keep-first-of-a-kind-items': {
    q: 'Sollte man den ersten Fisch, das erste Kleintier oder Artefakt behalten oder verkaufen?',
    a: 'Behalten, gemeldet von einem Walkthrough zur Inventarstrategie: Behalte ein oder zwei Exemplare jeder neuen Gegenstandsart (Fisch, Kleintiere, Artefakte, 2-Sterne-Pflanzen), da sie später für eine Museumssammlung benötigt werden könnten, und Gegenstände verlieren im Lager keinen Wert.',
  },
  'can-crafting-stations-pull-from-house-storage': {
    q: 'Können Handwerksstationen Materialien direkt aus dem Hauslager ziehen?',
    a: 'Ja, bestätigt durch einen Walkthrough: Farm-Handwerksstationen können Materialien wie Holz, Stein und Erz direkt aus dem Hauslager ziehen, sodass diese Rohstoffe nicht in der persönlichen Tasche getragen werden müssen — nur Geschenke, Questgegenstände und Museumsspenden müssen physisch im Inventar sein, um sie zu übergeben.',
  },
  'was-demo-expanded-before-launch': {
    q: 'Wurde die kostenlose Demo vor dem Vollversion-Release erweitert?',
    a: 'Ja, vom Entwickler bestätigt: Little Chicken erweiterte die kostenlose Demo vor dem Release um mehr Charaktererstellungs-Optionen, Handwerk und neue Minispiele, zusammen mit einem neuen Trailer, der bei Wholesome Direct 2026 gezeigt wurde.',
  },
  'was-nokturna-soft-lock-fixed': {
    q: 'Wurde der Nokturna-Soft-Lock-Bug behoben?',
    a: 'Bestätigt über offizielle Patch-Notes: Patch 1.1.38 (veröffentlicht am 11. Juli 2026) behob einen Soft-Lock im Zusammenhang mit dem Nokturna-Kartenminispiel, zusammen mit Fixes für periodische Mikroruckler.',
  },
  'how-do-you-track-gift-preferences-when-guides-disagree': {
    q: 'Was sollte man tun, wenn sich Geschenke-Guides bei den Vorlieben eines Charakters widersprechen?',
    a: 'Empfohlen von einem cross-geprüften Geschenke-Guide: Gib dem Bewohner einen Gegenstand und prüfe dann die Reaktion in der Historie der letzten acht Geschenke, statt einer kopierten Community-Liste blind zu vertrauen. Nach jedem Spiel-Patch erneut prüfen, da Uneinigkeit zwischen zwei öffentlichen Guides besonders bei Noel, Evan, Aras, Elvira und Ludo häufig vorkommt.',
  },
  'how-do-you-get-gold-ore': {
    q: 'Wie bekommt man Golderz in Moonlight Peaks?',
    a: 'Gemeldet von einer Walkthrough-Serie: Golderz findet sich tief in der Cave of Echoes — halte dich weiter nordöstlich, bis man auf Wasser trifft, und überquere es mit Fledermaus- oder Meerjungfrauenform. Ein großer goldener Knoten dort erfordert eine Silberspitzhacke zum Zerschlagen.',
  },
  'what-happens-after-the-main-story-ends': {
    q: 'Was gibt es nach Abschluss der Hauptgeschichte noch zu tun?',
    a: 'Gemeldet von einer Walkthrough-Serie: Sobald die Familie Dracula in die Stadt zieht und die großen Familien-Handlungsstränge abgeschlossen sind, bleiben als Ziele: Museums- und Journal-Sammlungen abschließen, alle Seelenblobs, Käfer und Fische fangen, Charaktere durch Nebenquests befreunden, die Twilight-Katakomben freischalten, alle Zauber/Rezepte/Tränke lernen, und die Farm weiter dekorieren und erweitern.',
  },
  'how-many-achievements-does-the-game-have': {
    q: 'Wie viele Erfolge hat Moonlight Peaks?',
    a: 'Gemeldet: Die Liste umfasst über 50 Erfolge, die Story-Fortschritt, Landwirtschaft, Sammelobjekte, Erkundung, Beziehungen, Handwerk, Angeln, Magie und Stadterneuerung abdecken.',
  },
  'what-happens-if-youre-caught-outside-at-dawn': {
    q: 'Was passiert, wenn man bei Sonnenaufgang noch draußen ist?',
    a: 'Gemeldet: Das Verpassen des Fensters von 18:00 bis 6:00 Uhr bedeutet Sonnenschaden zu nehmen, plus einen Start in die nächste Nacht mit weniger Energie als gewöhnlich. Das Brauen eines Sonnenschutz-Tranks erlaubt es, vorübergehend ohne die Strafe im Tageslicht herumzulaufen.',
  },
  'what-are-some-named-achievements-in-moonlight-peaks': {
    q: 'Was sind einige benannte Erfolge in Moonlight Peaks?',
    a: 'Gemeldete Beispiele: "New Beginnings" (erste Pflanze setzen), "Purrgatory" und "Wings of the Night" (Hellkitten- und Fledermausform freischalten), "Out of the Mist" (Fluch von Misty Shores heben), "To the Depths" (Katakomben-Eingang öffnen), "Archaeo-Logistics" (Museum eröffnen) und "Happy New Year!" (erstes volles Spieljahr abschließen).',
  },
  'is-out-of-this-world-achievement-really-about-going-to-the-moon': {
    q: 'Gibt es wirklich einen Spätspiel-Handlungspunkt über eine Reise zum Mond?',
    a: 'Gemeldet: Ja, laut einem Erfolgs-Guide wird "Out of This World" als Spätspiel-Handlungspunkt beschrieben, der eine Reise zum Mond erlaubt — dies als gemeldet behandeln, bis weitere unabhängige Bestätigung des genauen Story-Kontexts vorliegt.',
  },
  'what-are-the-best-early-stamina-recipes': {
    q: 'Was sind die besten frühen Rezepte zur Ausdauer-Wiederherstellung?',
    a: 'Gemeldet: Pilzeintopf und Gazpacho-Suppe werden als beste frühe Rezepte zur Ausdauer-Wiederherstellung hervorgehoben. Später schaltet der Kauf des Rezeptbuchs "Cooking for Vampires" von Mina bei Coffee and Coffins Rezepte frei, die noch mehr wiederherstellen.',
  },
  'is-moonlight-peaks-inclusive-of-queer-content': {
    q: 'Ist Moonlight Peaks inklusiv bei queeren Beziehungen und Inhalten?',
    a: 'Gemeldet von einem Reviewer aus der queeren Community: Ja, beschrieben als eines der authentischeren und inklusiveren gemütlichen Landwirtschaftsspiele, die sie gespielt haben, mit der Anmerkung, dass die inklusiven Ergänzungen sich nicht wie eine Einheitslösung anfühlten.',
  },
  'why-is-moonlight-peaks-rated-teen': {
    q: 'Warum ist Moonlight Peaks als PEGI 12 / ESRB Teen eingestuft?',
    a: 'Bestätigt: Die Einstufung liegt speziell an Erwähnungen von Alkoholkonsum und der Möglichkeit, Bier und Wein herzustellen, sowie leicht anzüglicher Sprache in den romantischen Handlungssträngen — nicht an Gewalt, da das Spiel keine Kämpfe hat.',
  },
  'should-you-treat-collectibles-as-early-priorities': {
    q: 'Sollte man Vampster und Seelenblobs früh sammeln oder für später aufheben?',
    a: 'Gemeldet: Guides empfehlen, Sammelobjekte wie Vampster, Seelenblobs und versteckte Gegenstände von Anfang an als aktive Priorität zu behandeln, statt sie als Aufräumaufgaben für später liegen zu lassen — zusammen mit einer täglichen Gewohnheit aus Museumsspenden und der Annahme von Albertus\u2019 Jobangeboten.',
  },
  'do-transformation-forms-unlock-new-areas': {
    q: 'Schalten Fledermaus-, Meerjungfrauen- und Hellkitten-Form jeweils neue Gebiete frei?',
    a: 'Bestätigt: Ja, jede Verwandlungsform öffnet Zugang zu verschiedenen Kartenbereichen, die zuvor unzugänglich waren — Guides empfehlen, nach jedem neuen Formen-Unlock die Karte erneut zu prüfen, um neu erreichbare Stellen zu finden.',
  },
  'when-does-luna-bay-become-accessible': {
    q: 'Wann wird Luna Bay zugänglich in Moonlight Peaks?',
    a: 'Gemeldet: Luna Bay wird entdeckt, wenn sich durch Story-Fortschritt neue Regionen öffnen, gebunden an einen Erfolg fürs Finden — nicht von Spielbeginn an verfügbar.',
  },
  'what-triggers-the-witnessing-revolution-achievement': {
    q: 'Was löst den Erfolg "Witnessing Revolution" aus?',
    a: 'Gemeldet: Die Teilnahme am Draculamm-Marsch während der Story löst diesen Erfolg aus — er ist an ein bestimmtes Story-Ereignis gebunden, statt frei auslösbar zu sein.',
  },
  'can-you-marry-nearly-any-eligible-npc': {
    q: 'Kann man fast jeden erwachsenen NPC in Moonlight Peaks daten?',
    a: 'Gemeldet: Ja, man kann fast jeden geeigneten erwachsenen NPC daten, einschließlich Tod, und der Aufbau dieser Beziehungen schaltet einzigartige Story-Bögen und seltene Baupläne als Belohnungen frei.',
  },
  'does-spellcasting-skill-level-up-over-time': {
    q: 'Steigt die Zauber-Fertigkeit im Laufe der Zeit an?',
    a: 'Gemeldet: Ja, das Steigern der Zauber-Fertigkeit erfordert nächtliches Üben von Zaubersprüchen — sie wird als Fertigkeit dargestellt, die sich mit regelmäßiger Nutzung verbessert, statt einmal freigeschaltet und dann statisch zu bleiben.',
  },
  'how-do-you-fix-your-broken-wand': {
    q: 'Wie repariert man den zerbrochenen Zauberstab in Moonlight Peaks?',
    a: 'Bestätigt durch Abgleich von vier unabhängigen Guides: Etwa in Nacht 18 (Sommer) erhält man einen Brief von Luna, die bittet, ihre Farm zu besuchen, wobei sich herausstellt, dass der Zauberstab zerbrochen ist. Gehe zu Webb of Wonders — Sabrinas Laden muss geöffnet sein — wo man auf Noel trifft, der den Stab wieder benutzbar verzaubert. Zurück bei Luna lehrt sie einem Aquaflux I.',
    more: ['Nach dem Erlernen von Aquaflux I muss man Lunas magische Mondfrucht zwei Tage lang mit dem Zauber bewässern, um die Quest abzuschließen. Der Abschluss gibt Mondfrucht-Samen und erweitert Lunas Laden am nächsten Tag um den Verkauf magischer Samen.'],
  },
  'what-is-the-fixed-wand-vs-witchs-wand': {
    q: 'Was ist der Unterschied zwischen dem reparierten Zauberstab und dem Hexenstab?',
    a: 'Bestätigt: Der reparierte Zauberstab ist das, was man direkt nach der Reparatur durch Sabrina und Noel erhält — er erlaubt grundlegendes Zaubern. Der Hexenstab ist ein späteres Upgrade, das Aquaflux II freischaltet und die Zauber-Effizienz verbessert.',
  },
  'how-is-mana-displayed-on-screen': {
    q: 'Wie wird Mana auf dem Bildschirm angezeigt?',
    a: 'Bestätigt: Mana wird als kleine blaue Stern-/Diamant-Symbole unterhalb der Energie-(Ausdauer-)Leiste in der oberen linken Ecke angezeigt.',
  },
  'what-blueprints-does-luna-give-you': {
    q: 'Welche Handwerks-Baupläne gibt Luna im Spielverlauf?',
    a: 'Bestätigt: Luna liefert die Baupläne für den Kräutergarten (züchtet Kräuterpflanzen), den Kräutertrockner (verwandelt bestimmte Pflanzen in Pulver) und den Verzauberten Mörser (verarbeitet Zutaten), während man in der Story voranschreitet.',
  },
  'how-do-you-restore-mana': {
    q: 'Wie stellt man Mana in Moonlight Peaks wieder her?',
    a: 'Bestätigt: Schlafen stellt Mana wieder her, und Mana-Essenz (hergestellt über den Mana-Extraktor) kann direkt konsumiert oder Essen hinzugefügt werden, um es ebenfalls wiederherzustellen.',
  },
  'where-do-you-get-potion-ingredients': {
    q: 'Wo bekommt man Tränke-Zutaten in Moonlight Peaks?',
    a: 'Bestätigt: Die meisten Komponenten stammen aus dem Anbau verzauberter Pflanzen (Samen bei Lunas Laden erhältlich), zusätzlich zum Sammeln ungewöhnlicher Blumen, Kräuter und Pilze beim Erkunden der Welt.',
  },
  'does-magic-require-mana-every-cast': {
    q: 'Kostet jeder Zauberspruch Mana in Moonlight Peaks?',
    a: 'Bestätigt: Ja, alle Magie erfordert den Zauberstab und verbraucht Mana. Da der Mana-Pool zu Beginn klein ist, empfehlen Guides, Magie nur bei Bedarf einzusetzen, bis man ihn erweitert hat.',
  },
  'does-the-almanac-track-learned-spells': {
    q: 'Verfolgt das Spiel, welche Zaubersprüche man gelernt hat?',
    a: 'Bestätigt: Jeder neu gelernte Zauber wird im Almanach registriert, einschließlich einer Wiederholung, wie man ihn ausführt, falls man das Zaubermuster vergisst.',
  },
  'is-death-really-a-romance-option-confirmed-again': {
    q: 'Ist wirklich bestätigt, dass Tod romanzefähig ist?',
    a: 'Ja, von mehreren unabhängigen Quellen bestätigt: Tod ist eine bestätigte Romanze-Option, nicht mehr nur ein Gerücht vor dem Release.',
  },
  'what-forms-can-you-shapeshift-into': {
    q: 'In welche Formen kann man sich in Moonlight Peaks verwandeln?',
    a: 'Bestätigt: Fledermausform für schnelles Reisen und Meerjungfrauenform für Unterwassererkundung sind beide bestätigte Verwandlungen, zusammen mit der Hellkitten-Form für Kreaturen-Interaktionen und kostenloses Pflügen — jede wird an unterschiedlichen Punkten der Story freigeschaltet.',
  },
  'what-is-the-current-steam-review-count': {
    q: 'Wie viele Steam-Reviews hat Moonlight Peaks, und wie ist die Bewertung?',
    a: 'Stand dieser Schreibung, bestätigt über die offizielle Steam-Shop-Seite: 1.086 Nutzer-Reviews, 89% positiv, mit der Bewertung "Sehr positiv". Dies ist eine Momentaufnahme, die sich mit weiteren Reviews ändern wird.',
  },
  'what-are-the-best-early-crops-for-profit': {
    q: 'Was sind die besten frühen Pflanzen für Profit in Moonlight Peaks?',
    a: 'Gemeldet: Blutraube und Weiße Traube werden als starke Profit-Pflanzen für die ersten zwei Jahreszeiten hervorgehoben — Blutrauben-Samen erhält man zu Beginn direkt von Orlock. Bluttomaten und Zwiebeln sind ebenfalls das ganze Jahr verfügbar und können zu Gazpacho-Suppe verarbeitet werden, einer verlässlichen frühen Energiequelle, die sich gut verkauft.',
  },
  'do-npcs-send-recipes-by-mail': {
    q: 'Schicken NPCs manchmal Rezepte als Geschenk?',
    a: 'Gemeldet: Ja, Charaktere schicken Spielern gelegentlich ihre Lieblingsrezepte als Geschenk per Post — Froschkuchen von Mina und Erdbeer-Cupcake von Luna werden als Beispiele genannt. Es lohnt sich, besonders nach Romanze-Herz-Ereignissen die Post zu prüfen.',
  },
  'is-there-a-seasonal-market-with-limited-recipes': {
    q: 'Gibt es einen saisonalen Markt mit zeitlich begrenzten Rezepten?',
    a: 'Gemeldet: Der Evernight-Markt verkauft zeitlich begrenzte Herbst-Rezepte, mit Kürbiskuchen und Kürbiseintopf als Beispiele. Im Kalender vormerken, um kein einmaliges Kochbuch zu verpassen, da diese nur während des Events verfügbar sind.',
  },
  'how-do-you-unlock-the-refiner': {
    q: 'Wie schaltet man die Raffinerie in Moonlight Peaks frei?',
    a: 'Bestätigt: Repariere das Dach des Bauernhauses für Ridge, was den Raffinerie-Bauplan einbringt. Herstellen mit 20 Holz und 20 Stein. Die Raffinerie produziert veredelte Materialien wie Barren, Holzkohle und Glas, von denen viele spätere Rezepte abhängen.',
  },
  'what-is-the-sunscreen-potion-recipe': {
    q: 'Was ist das Rezept für den Sonnenschutz-Trank?',
    a: 'Bestätigt: 1 Ei + 1 Faser.',
  },
  'how-many-recipes-do-you-start-with': {
    q: 'Mit wie vielen Kochrezepten startet man in Moonlight Peaks?',
    a: 'Bestätigt: Das Start-Gehöft hat bereits eine Kochstation und 16 Grundrezepte — genug für Spiegeleier, Brot und einfache Suppen in der ersten Woche. Erweiterbar durch den Kauf von Rezeptbüchern bei Mina, das Ausgraben funkelnder Spiralstellen beim Sammeln, oder das Abschließen bestimmter Story-Quests.',
  },
  'does-cooking-quality-affect-gift-reactions': {
    q: 'Beeinflusst die Kochqualität Geschenk-Reaktionen?',
    a: 'Gemeldet: Ja, ein perfektes Wenden im Koch-Minispiel ergibt höhere Energie-Wiederherstellung, einen besseren Verkaufspreis und eine stärkere Reaktion, wenn das Gericht verschenkt wird — alles an denselben Qualitätssterne-Mechanismus gebunden.',
  },
  'is-there-a-storage-limit-in-moonlight-peaks': {
    q: 'Gibt es eine Lagergrenze in Moonlight Peaks?',
    a: 'Gemeldet: Reviewer fanden keine praktische Grenze beim universellen Hauslager, das Handwerks-, Koch-, Tränke- und Verarbeitungsstationen direkt versorgt. Die eine Ausnahme ist der Dekorationsmodus, der keine Möbel aus dem universellen Lager ziehen kann — Gegenstände zuerst in die Tasche legen.',
  },
  'can-you-water-crops-while-walking': {
    q: 'Kann man Pflanzen im Gehen bewässern?',
    a: 'Bestätigt: Die Gießkanne kann während der Bewegung genutzt werden, und die Sichel ist darauf ausgelegt, mehrere erntereife Pflanzen in einem effizienten Durchgang einzusammeln.',
  },
  'how-many-romanceable-characters-really': {
    q: 'Wie viele romanzefähige Charaktere gibt es also wirklich — 23 oder 24?',
    a: 'Ungeklärt: Zwei ausführliche Reviews verwenden unterschiedliche Zahlen — eines zählt 23 daten-fähige Charaktere, ein anderes sagt 24. Offizielle Launch-Berichterstattung beschreibt "über zwei Dutzend". Bis eine offizielle Liste dies klärt, wird keine einzelne Zahl als Fakt erzwungen.',
  },
  'can-dates-fail-in-moonlight-peaks': {
    q: 'Kann ein Date in Moonlight Peaks scheitern?',
    a: 'Bestätigt: Dates beinhalten Minispiele, und es ist möglich, eines zu verpatzen, statt dass jedes Date automatisch gelingt.',
  },
  'what-happens-if-you-break-up': {
    q: 'Was passiert, wenn man sich von einem Partner trennt?',
    a: 'Gemeldet, mit leicht abweichenden Darstellungen: Eine Quelle sagt, eine Trennung versetzt den Ex-Partner in einen vorübergehenden "Verletzt"-Status, der ein paar Tage nicht mit einem spricht, bevor er auf vier Herzen zurückgesetzt wird, als hätte man nie gedatet. Eine andere beschreibt wiederholtes Ablehnen von Date-Einladungen als Auslöser, wobei der Charakter schließlich vergibt und die Romanze neu starten kann. Beide Darstellungen werden hier genannt, statt eine als endgültig festzulegen.',
  },
  'how-far-out-can-you-schedule-a-wedding': {
    q: 'Wie weit im Voraus kann man eine Hochzeit planen?',
    a: 'Bestätigt: Das Hochzeitsdatum muss mindestens 2 Tage nach dem Antrag liegen, ohne gemeldete Obergrenze — viele Spieler planen es Berichten zufolge praktisch etwa eine Woche im Voraus. Das Festlegen des Datums schaltet neue Hochzeitskleidung bei Third Eye Threads frei.',
  },
  'do-you-become-a-step-parent-if-you-marry-ridge-or-orlock': {
    q: 'Wird man Stiefelternteil, wenn man Ridge oder Orlock heiratet?',
    a: 'Bestätigt von mehreren Quellen: Ja, gemeldet — das Heiraten eines älteren Charakters, der bereits Kinder hat, wie Ridge oder Orlock (Vater von Mina und Evan), macht einen zum Stiefelternteil ihrer bestehenden Kinder. Eigene Kinder kann man nicht bekommen, und es gibt keine angekündigten Pläne, diesen Mechanismus hinzuzufügen.',
  },
  'what-fish-are-in-silverveil-lake': {
    q: 'Welche Fische kann man im Silverveil-See fangen?',
    a: 'Bestätigt über das offizielle Wiki: mindestens vier benannte Arten — Whisper, Twilight, Splotch und Orbis.',
  },
  'what-can-you-gather-in-howling-marshes': {
    q: 'Was kann man in Howling Marshes sammeln oder fangen?',
    a: 'Bestätigt über das offizielle Wiki: Gelber Glowglammer ist dort sammelbar, und man kann den Brickle-Fisch fangen. Kürbisse erscheinen im Herbst im Wald, und Frosteria erscheint im Winter. Tod wird häufig gesehen, wie er auf einem Baumstumpf nahe der Mitte des Sumpfes sitzt.',
  },
  'who-lives-at-ambrosia-mansion': {
    q: 'Wer wohnt im Ambrosia-Anwesen in Misty Shores?',
    a: 'Bestätigt über das offizielle Wiki: Orlock, Mina und Evan. Der nahegelegene Friedhof wird oft von Tod, Jarvis und Balthasar Logan besucht, und Yabbis verkauft Waren am Strand südlich des Anwesens.',
  },
  'why-are-luna-bays-waters-special': {
    q: 'Warum gelten Luna Bays Gewässer als besonders?',
    a: 'Bestätigt über das offizielle Wiki: Den Gewässern werden heilende Eigenschaften durch lange Aussetzung gegenüber dem Mondlicht nachgesagt, mit magischen Strömungen, die seltsame Fische anziehen und den nahen Pink Grove nähren. Es ist auch die Heimat der Meerjungfrauen Tae, Kim und Rei Hosu.',
  },
  'how-much-ore-do-large-clusters-give': {
    q: 'Wie viel Erz geben große Mineralvorkommen im Vergleich zu normalen Knoten?',
    a: 'Bestätigt: Große Erzvorkommen in der Cave of Echoes können bis zu 6 Kupfererz liefern, verglichen mit 1 bei einem normalen Knoten. Ein Kupferbarren benötigt 4 Kupfererz + 1 Holzkohle am Ofen.',
  },
  'are-brook-moon-goddess-sun-god-romanceable': {
    q: 'Sind Brook, Mondgöttin oder Sonnengott romanzefähig?',
    a: 'Nein, bestätigt: Alle drei sind ausdrücklich reine Freundschafts-Charaktere, die keine romantischen Partner werden können.',
  },
  'do-npc-schedules-change-with-weather-or-season': {
    q: 'Ändern sich NPC-Zeitpläne mit Wetter oder Jahreszeit?',
    a: 'Bestätigt über das offizielle Wiki: Ja, NPCs folgen täglichen Routinen, die je nach Wochentag, Jahreszeit, Wetter, einem laufenden Fest oder einer aktiven Quest variieren können — der Zeitplan eines Bewohners ist nicht immer fest.',
  },
  'what-is-sagas-relationship-with-her-family': {
    q: 'Wie ist Sagas Beziehung zu ihrer Familie?',
    a: 'Gemeldet: Saga möchte in die Fußstapfen ihres Vaters, Bürgermeister Brook, treten, während ihr Geschwister Ludo lieber schläft, statt das Familienhandwerk zu lernen — ein bemerkenswerter Persönlichkeitskontrast zwischen beiden.',
  },
  'is-samael-romanceable-or-not': {
    q: 'Ist Samael romanzefähig oder nicht?',
    a: 'Andernorts als Romanze-Option mit eigenem Handlungsbogen bestätigt, wobei ein 40-Tage-Eindrucksbericht ihn zu diesem Zeitpunkt als nicht daten-fähig beobachtete, basierend auf einer Begrenzung auf vier Freundschaftsherzen in diesem bestimmten Durchgang — wahrscheinlich eher eine Widerspiegelung des Story-Fortschritts dieses Reviewers als eine feste Grenze.',
  },
  'is-there-dialogue-variation-in-noels-fishing-contest': {
    q: 'Gibt es Dialogvariationen während Noels Angelwettbewerb?',
    a: 'Gemeldet: Ja, Dialogoptionen während des Wettbewerbs steigern sich passend zu Noels zunehmend hektischer Energie, während er nervöser wird, von einem Reviewer als einer seiner liebsten frühen komischen Momente beschrieben.',
  },
  'what-does-patch-1-1-44-fix': {
    q: 'Was behebt Patch 1.1.44 in Moonlight Peaks?',
    a: 'Bestätigt über die offiziellen Marvelous-USA-Patch-Notes: 1.1.44 behebt, dass L+R-Tasten nicht funktionierten, behebt, dass das Marshmallow-Date die Röst-Eingabe nicht akzeptierte, und behebt, dass Cloud-Speicherdateien nicht richtig synchronisierten. Es ist weltweit live auf Steam.',
    more: ['Aktuell bestätigte Versionen: Steam 1.1.44, Nintendo Switch 1.1.3, Nintendo Switch 2 1.1.3, Google Play Games 1.1.3 — Konsole und Mobile holen gegenüber PC noch auf.'],
  },
  'how-much-is-the-physical-switch-2-edition-in-europe': {
    q: 'Wie viel kostet die physische Switch-2-Edition in Europa?',
    a: 'Bestätigt: 49,99 € / 44,99 £, erscheint am 28. August 2026 in ganz Europa über Marvelous Europe, mit einem exklusiven Sammel-Stickerblatt und einem digitalen Soundtrack.',
  },
  'does-steam-version-support-playstation-controllers': {
    q: 'Unterstützt die Steam-Version PlayStation-(DualShock-)Controller?',
    a: 'Bestätigt: Die Steam-Version listet DualShock-/PlayStation-Controller-Unterstützung zusammen mit Steam-Erfolgen, Steam-Sammelkarten und Steam-Cloud-Speicherung — passend zum Controller-orientierten Design des Spiels.',
  },
  'stuck-in-skull-girl-storyline-what-to-do': {
    q: 'Ich habe versprochen zu melden, dass ich Skull Girl wiedergesehen habe, aber nichts passiert — ist das ein Bug?',
    a: 'Von Spielern in Steam-Community-Diskussionen gemeldet, noch nicht vom Entwickler bestätigt: Manche Spieler sagen, die Handlung scheint nach einer zweiten Skull-Girl-Sichtung im Anschluss an die anfängliche Taschen-Fund-Szene nicht weiterzugehen. Dies als ungeklärten Spielerbericht behandeln statt als bestätigte Sackgasse — nach einer entsprechenden Patch-Notiz suchen, oder die eigenen Spielstand-Details dem Support melden, falls es anhält.',
  },
  'are-there-still-known-issues-after-1-1-44': {
    q: 'Gibt es nach Patch 1.1.44 noch bekannte Probleme?',
    a: 'Ja, von den Entwicklern selbst bestätigt: Zusätzlich zu den in 1.1.44 ausgelieferten Fixes gaben sie an, weiterhin andere bekannte Probleme zu untersuchen und Zeitangaben zu teilen, sobald verfügbar.',
  },
  'how-many-items-in-each-museum-collection': {
    q: 'Wie viele Objekte sind in jeder Museumssammlung?',
    a: 'Bestätigt: 5 Objekte in der Hexen-Sammlung, 7 in der Werwolf-Sammlung, 7 in der Vampir-Sammlung, 7 in der Seher-Sammlung und 8 in der Meerjungfrauen-Sammlung, plus eine separate Gottheiten-Sammlung und eine Kleintier-Sammlung, die außerhalb der fünf übernatürlichen Familienräume verfolgt werden.',
  },
  'does-fur-chair-need-specific-color-for-museum': {
    q: 'Muss der Pelzsessel eine bestimmte Farbe haben, um fürs Museum zu zählen?',
    a: 'Ja, bestätigt: Der Pelzsessel muss in der Farbvariante "Braun" hergestellt werden, um für die Werwolf-Sammlung zu qualifizieren. Der Aquatische Schrank benötigt ähnlich die Variante "Blau" für die Meerjungfrauen-Sammlung — falsch gefärbte Duplikate zählen nicht als Spende.',
  },
  'what-is-the-deity-collection-in-the-museum': {
    q: 'Was ist die Gottheiten-Sammlung im Moonlight-Peaks-Museum?',
    a: 'Bestätigt: Eine sechste Sammlung getrennt von den fünf übernatürlichen Familienräumen, vollständig aus Artefakten bestehend. Jede Zeile verlangt einen Gegenstand normaler Qualität, und Einträge gelten als einmalige Funde, die am besten vor dem Verkauf etwaiger Duplikate gespendet werden.',
  },
  'does-museum-donation-quality-vary-by-row': {
    q: 'Brauchen alle Museumsspenden dieselbe Qualität, oder variiert das?',
    a: 'Es variiert zeilenweise, bestätigt: Qualitätsanforderungen unterscheiden sich pro einzelner Zeile innerhalb einer Sammlung, statt einheitlich zu gelten — jede Zeile vor dem Spenden prüfen, da ein Gegenstand normaler Qualität eine Zeile nicht erfüllt, die speziell Perfekt-Qualität verlangt.',
  },
  'does-farming-collection-need-perfect-quality': {
    q: 'Braucht die Landwirtschafts-Sammlung im Museum Perfekt-Qualität-Pflanzen?',
    a: 'Ja, bestätigt: Jede Zeile in der Landwirtschafts-Sammlung verlangt speziell eine Pflanze oder ein anbaubares Objekt in Perfekt-Qualität — beste Ernten aufheben, statt sie zu verkaufen, bevor man die Museums-Anforderungen prüft.',
  },
  'what-milestone-rewards-does-the-museum-give': {
    q: 'Welche Meilenstein-Belohnungen gibt das Museum im Spielverlauf?',
    a: 'Bestätigt: Bei 10% Gesamtfortschritt gibt Jada eine Meilenstein-Belohnung. Bei 25% Gesamtfortschritt erhält man den Dracula-Insignien-Schlüssel, der die Twilight-Katakomben freischaltet. Die Belohnungs-Zwischensequenz löst aus, wenn man die Ausstellungsräume in den Empfangsbereich verlässt.',
  },
  'how-do-you-know-what-still-needs-donating': {
    q: 'Woher weiß man, welche Gegenstände man noch ans Museum spenden muss?',
    a: 'Bestätigt: Jeder Inventar-Gegenstand, der Teil einer unvollständigen Museumssammlung ist, zeigt eine kleine Museumssymbol-Überlagerung, speziell um zu helfen, versehentliches Verkaufen oder Verwenden von etwas noch Benötigtem zu vermeiden.',
  },
  'what-is-the-starting-tool-set-in-moonlight-peaks': {
    q: 'Mit welchen Werkzeugen startet man in Moonlight Peaks?',
    a: 'Bestätigt: Nach den einleitenden Quests von Orlock und Viktor füllt sich das Werkzeugrad mit einer rostigen Spitzhacke, rostiger Sense, rostiger Schaufel, rostiger Gießkanne und einem zerbrochenen Zauberstab — genug, um einen Teil des Grundstücks zu roden und erste Pflanzen zu setzen, wobei jedes anfangs schwach ist (die Spitzhacke zerbricht nur kleine Steine, die Gießkanne leert sich schnell).',
  },
  'can-ridge-upgrade-the-magic-wand': {
    q: 'Kann Ridge den Zauberstab wie andere Werkzeuge aufwerten?',
    a: 'Nein, bestätigt: Anders als Spitzhacke, Axt, Sense und Gießkanne entwickelt sich der Zauberstab nicht durch Ridges Laden mit Barren und Geld. Er entwickelt sich stattdessen durch Story-Quests, Gespräche mit Hexen und Besuche bei Webb of Wonders.',
  },
  'how-do-you-make-the-mana-extractor': {
    q: 'Wie stellt man den Mana-Extraktor in Moonlight Peaks her?',
    a: 'Bestätigt durch Abgleich mehrerer Walkthroughs: Baue Rosenquarz in der Kristallhöhle ab (den Felsbrocken mit einer Kupferspitzhacke aufbrechen, rosa Knoten mit einer Eisenaxt abbauen), mahle ihn mit einem Mörser zu Quarzstaub, und verwandle ihn dann an einem Ofen zu Glas. Kombiniere mit 3 Kupferbarren und 3 Eisenbarren für Sabrinas Mana-Extraktor-Quest.',
  },
  'how-do-you-make-cheese-in-moonlight-peaks': {
    q: 'Wie stellt man Käse in Moonlight Peaks her?',
    a: 'Gemeldet von einer Walkthrough-Serie: Stelle eine Presse aus Eisenbarren her (Eisenerz findet sich in der Cave of Echoes), und lege dann Cowcula-Milch hinein, um sie zu Käse zu verarbeiten. Dies schließt die Quest "Cheese, if You Please" für Viktor ab.',
  },
  'how-many-seeds-are-in-moonlight-peaks': {
    q: 'Wie viele Samen gibt es insgesamt in Moonlight Peaks?',
    a: 'Gemeldet: 53 Samen insgesamt, wobei Lunas Samenstand-Bestand je nach Jahreszeit rotiert. Beispiele umfassen die ganzjährige Zwiebel und Bluttomate, nur im Frühling/Sommer erhältliche Blutraube, und eine ganzjährige Mondfrucht, die statt einer gewöhnlichen Gießkanne den Aquaflux-Bewässerungszauber erfordert.',
  },
  'do-herbs-need-a-special-garden': {
    q: 'Brauchen Kräuter einen speziellen Garten zum Pflanzen?',
    a: 'Ja, bestätigt: Kräutersamen können nicht in normaler Erde gepflanzt werden und benötigen einen hergestellten Kräutergarten. Magische Kräuter wie Nachtschatten und Wolfsbann erfordern zusätzlich den Aquaflux-Bewässerungszauber statt einer gewöhnlichen Gießkanne.',
  },
  'juice-vs-wine-which-is-better-moonlight-peaks': {
    q: 'Sollte man aus Blutrauben Saft oder Wein machen?',
    a: 'Bestätigt: Es hängt von der Priorität ab — Saft ist schneller fertig und hilft, frühe Energie wiederherzustellen, während Wein länger braucht, aber mehr Geld einbringt. Beide werden durch eine frühe Blutrauben-Quest für Orlock eingeführt.',
  },
  'what-is-the-alter-ego-elixir-recipe': {
    q: 'Was ist das Rezept für das Alter-Ego-Elixier?',
    a: 'Bestätigt: Quarzstaub, Nachtschatten-Pulver und Honig. Dies ist der Trank, der den Erscheinungsbild-Anpassungsbildschirm erneut öffnet, gekauft bei Sabrina bei Webb of Wonders für 1.300 Gold.',
  },
  'does-alter-ego-elixir-change-clothes': {
    q: 'Ändert das Alter-Ego-Elixier auch die Kleidung?',
    a: 'Nein, bestätigt: Es ändert nur Frisur, Haarfarbe, Hautton, Augenfarbe, Augenbrauenform, Augenbrauenfarbe und Make-up-Stil. Kleidung und Accessoires werden separat und kostenlos über jeden Spiegel geändert.',
  },
  'do-you-lose-the-elixir-if-you-cancel': {
    q: 'Verliert man das Alter-Ego-Elixier, wenn man ohne Änderung abbricht?',
    a: 'Ja, bestätigt: Das Trinken des Elixiers verbraucht es sofort, selbst wenn man den Anpassungsbildschirm ohne Änderung verlässt. Das gewünschte Aussehen vor dem Öffnen des Menüs entscheiden.',
  },
  'can-you-buy-multiple-alter-ego-elixirs': {
    q: 'Kann man das Alter-Ego-Elixier mehr als einmal kaufen?',
    a: 'Ja, bestätigt: Es gibt keine Obergrenze, wie oft man es kaufen und trinken kann — jede Nutzung kostet erneut 1.300 Gold, was freies Experimentieren mit dem Aussehen über mehrere Sitzungen erlaubt.',
  },
  'does-character-creator-name-your-farm': {
    q: 'Kann man im Charakter-Editor auch Farm und Haustier benennen?',
    a: 'Ja, bestätigt: Derselbe Erstellungsablauf, in dem man den Charakter benennt, ist auch der Ort, an dem man dauerhaft die Farm und den Hellkitten-Begleiter benennt — leicht zu übersehen, wenn man sich nur auf das Aussehen konzentriert.',
  },
  'is-moonlight-peaks-built-on-one-body-type': {
    q: 'Verwendet Moonlight Peaks einen einzigen Körpertyp für alle Charaktere?',
    a: 'Ja, bestätigt über einen offiziellen Entwickler-Blogbeitrag: Das Spiel basiert auf einem geschlechtslosen Körpertyp, sodass jedes Kleidungsset, jede Frisur und jedes Anbauteil so gestaltet ist, dass es mit demselben Basis-Mesh über alle Charaktere hinweg kompatibel ist.',
  },
  'what-is-heterochromia-option-in-creator': {
    q: 'Kann man dem Charakter unterschiedliche Augenfarben (Heterochromie) geben?',
    a: 'Bestätigt über das offizielle Entwickler-TikTok: Heterochromie (unterschiedlich gefärbte Augen) wurde als eines der inklusiven Charakter-Editor-Features genannt, die die Entwickler einbauen wollten, zusammen mit Frisuren, Hauttönen, Make-up und Piercings.',
  },
  'how-does-quest-for-mana-unlock': {
    q: 'Wie schaltet man "The Quest for Mana" frei?',
    a: 'Bestätigt: Schließe "The Magic of Crops" ab, warte einen Tag, betrete die Stadt, um "A Mayor\u2019s Burden" auszulösen, und warte dann zwei weitere Tage, bis Sabrina einen Brief schickt. Der Abschluss belohnt mit Mana-Essenz und dem Mana-Extraktor-Bauplan.',
  },
  'how-many-townsfolk-must-you-meet-at-the-start': {
    q: 'Wie viele Stadtbewohner muss man zu Beginn von Moonlight Peaks treffen?',
    a: 'Bestätigt: Das einleitende Ziel "Die Stadtbewohner kennenlernen" zählt fünf Vampire, vier Hexen, vier Werwölfe und drei Seher. Man muss nicht jede Vorstellung abschließen, bevor man mit der Farmarbeit beginnt, da sich frühe Anfragen überschneiden.',
  },
  'how-do-you-win-noels-fishing-challenge': {
    q: 'Wie gewinnt man Noels Angel-Herausforderung "Outfish the Fisherman"?',
    a: 'Bestätigt: Fange drei verschiedene Fischarten, nicht drei vom selben Fisch. Die Rückmeldung nach dem Fang schließt die Herausforderung ab, mit einer Belohnung von 250 Münzen.',
  },
  'when-does-the-fishing-net-unlock': {
    q: 'Wann schaltet sich das Angel-/Insektennetz frei?',
    a: 'Bestätigt: Später als die Angelrute. Bringe die Story voran, bis Fiona die Misty-Shores-Route freimacht und die "Dinner Party"-Handlung im Ambrosia-Anwesen beginnt, dann löse die erste Tod-Szene am Ambrosia-Friedhof aus. Nach dem Schlafen gewährt ein Folge-Ereignis mit Tod/Seelenblob das Netz.',
  },
  'how-much-does-the-first-house-expansion-cost': {
    q: 'Wie viel kostet die erste Hauserweiterung?',
    a: 'Bestätigt: 8.000 Münzen, 100 Holz und 25 Stein, bei Ridge bestellt. Da Ridge nur einen Bauauftrag gleichzeitig bearbeiten kann, zuerst alle questbezogenen Gebäude fertigstellen, bevor man ihn mit der Hauserweiterung beauftragt.',
  },
  'how-do-you-win-a-museum-artifact-from-dragan': {
    q: 'Wie bekommt man ein Museumsartefakt von Dragan?',
    a: 'Gemeldet: Ein Sieg in einer Partie Nokturna gegen Dragan ist nötig, um ein Artefakt von ihm fürs Museum zu erhalten, was das Kartenminispiel direkt mit dem Museumsfortschritt verknüpft.',
  },
  'what-night-length-options-are-there': {
    q: 'Welche Nachtlängen-Optionen gibt es in Moonlight Peaks?',
    a: 'Bestätigt: Eine Standardnacht dauert standardmäßig etwa 15 reale Minuten. Ein Seelenblob-Sammelmeilenstein schaltet alternative Einstellungen für etwa 10-minütige Nächte (schnellere Pflanzen, Bau und Story-Wartezeiten) oder 25-minütige Nächte (mehr Erkundungszeit) frei.',
  },
  'how-much-mana-does-sleeping-restore': {
    q: 'Wie viel Mana stellt Schlafen in Moonlight Peaks wieder her?',
    a: 'Bestätigt: Schlafen stellt im Launch-Build nur einen Mana-Stern wieder her, weshalb frühe magische Pflanzenfelder klein bleiben sollten, bis Mana-wiederherstellendes Essen und der Mana-Extraktor mehr Optionen eröffnen.',
  },
  'what-spell-waters-magical-crops': {
    q: 'Welchen Zauber nutzt man, um magische Pflanzen zu bewässern?',
    a: 'Bestätigt: Der Aquaflux-Zauber, keine gewöhnliche Gießkanne. Ein Upgrade auf die Hexenstab-Stufe soll Aquaflux II freischalten, das bis zu 48 Pflanzen in einer Wirkung bewässert (noch nicht unabhängig mit einer zweiten Quelle abgeglichen).',
  },
  'what-is-kims-wedding-questline': {
    q: 'Was passiert in Kims Hochzeits-Questreihe?',
    a: 'Gemeldet von einer Walkthrough-Serie: Baue Rosenquarz in der Kristallhöhle für Persephone ab, nimm am nächsten Tag an einem Yoga-Minispiel teil, und besuche dann ein Abendessen am Crest Garden, um das Hosu-Familienwappen zu erhalten. Tage später führt ein Brief von Kim zum Hosu-Haus und einer Quest über ihre Hochzeitstorte.',
  },
  'where-does-yoga-unlock-in-moonlight-peaks': {
    q: 'Wo schaltet sich Yoga in Moonlight Peaks frei?',
    a: 'Gemeldet von einer Walkthrough-Serie: Yoga schaltet sich in Luna Bay frei, etwa im selben Questreihen-Abschnitt, der herstellbare Bienenhäuser zur Honigproduktion einführt.',
  },
  'what-are-alinas-aras-dragans-birthdays': {
    q: 'Was sind die Geburtstage von Alina, Aras und Dragan?',
    a: 'Bestätigt: Alinas Geburtstag ist Frühling 10 (liebt Schwarze Rosen und Schwarze Tulpen), Aras\u2019 ist Herbst 8 (mag Rote Azaleen), und Dragans ist Frühling 28 (reagiert gut auf Mondkristalle).',
  },
  'what-gifts-does-death-like': {
    q: 'Welche Geschenke mag Tod in Moonlight Peaks?',
    a: 'Bestätigt: Müllflaschen und rostige Fischdosen, passend zu seinem unkonventionellen Geschmack als Bewohner, der als Urlauber in Moonlight Peaks beschrieben wird.',
  },
  'how-is-llemi-introduced-and-what-gifts': {
    q: 'Wie wird Llemi eingeführt, und welche Geschenke mag er/sie?',
    a: 'Bestätigt: Llemi (Geburtstag Sommer 8) wird zuerst durch ein ungewöhnliches Ereignis eingeführt, bei dem sich die Spielfigur in einen Baum verlieben kann, und lässt sich mit Diamanten, Blumensträußen und Mondkristallen umwerben.',
  },
  'what-are-jada-persephone-winston-like': {
    q: 'Wie sind Jada, Persephone und Winston als Charaktere?',
    a: 'Bestätigt: Jada sammelt gerne Relikte und erforscht das Übernatürliche (reagiert gut auf Weiße Rosen); Persephone ist neu angekommen und möchte frei und spirituell leben; Winston, der mit seiner Schwester und Tante ankam, hat spürbare Ängstlichkeit und vertraut nur langsam.',
  },
  'which-characters-have-disputed-gift-data': {
    q: 'Bei welchen Charakteren gibt es widersprüchliche oder unzuverlässige Geschenkdaten?',
    a: 'Gemeldet von einem Geschenke-Guide, der die eigene Beweisqualität kennzeichnet: Bei Noel, Evan, Aras, Elvira und Ludo gibt es echte Uneinigkeiten zwischen Community-Quellen — bis geklärt, einer aktuellen In-Game-Erfassung mehr vertrauen als jeder kopierten Liste für diese fünf.',
  },
  'what-are-easy-strong-gifts-for-luna-ridge-alina': {
    q: 'Was sind einfache, starke Geschenke für Luna, Ridge und Alina?',
    a: 'Bestätigt: Jede Blume für Luna, Bier oder eine blaue Blume für Ridge, und Schwarze Rose für Alina.',
  },
  'what-thresholds-unlock-hugs-dating-marriage': {
    q: 'Welche Herz-Schwellen schalten Umarmungen, Dating und Heirat frei?',
    a: 'Bestätigt über mehrere unabhängige Quellen: 2 Herzen schalten Umarmungen frei, 4 Herzen erlauben den Beginn des Datings (was eine separate romantische Herzreihe hinzufügt), und 8 Herzen schalten eine vollständige Hochzeit frei.',
  },
  'which-five-characters-cannot-be-romanced': {
    q: 'Welche Charaktere sind bestätigt keine Romanze-Optionen?',
    a: 'Bestätigt: Skull Girl, Kürbiskopf, die Mondgöttin, Viktor und Bürgermeisterin Brook Logan sind ausdrücklich nicht Teil des Romanze-Aufgebots.',
  },
  'what-are-flower-bouquet-and-marshmallow-dates': {
    q: 'Was sind Blumenstrauß-Dates und Marshmallow-Röst-Dates?',
    a: 'Bestätigt: Bestimmte Date-Aktivitäten, verfügbar sobald ein Paar die Dating-Phase erreicht — Blumenstrauß-Dates beinhalten das gemeinsame Binden eines Straußes, und Marshmallow-Röst-Dates das gemeinsame Rösten von Marshmallows.',
  },
  'are-handmade-gifts-better-than-store-bought': {
    q: 'Sind selbstgemachte Geschenke besser als gekaufte?',
    a: 'Gemeldet: Geschenke, die durch Blumenbinden oder Stickerei hergestellt werden, kosten mehr Aufwand und Zutaten als ein Kauf im Laden, bieten aber Berichten zufolge mehr Beziehungswert als ähnliche gekaufte Geschenke.',
  },
  'what-ui-languages-does-steam-support': {
    q: 'Welche Oberflächensprachen unterstützt die Steam-Version?',
    a: 'Bestätigt über das offizielle Steam-Community-Hub: Neben Englisch umfasst die Unterstützung vereinfachtes und traditionelles Chinesisch, Japanisch, Koreanisch, Thailändisch, Indonesisch, Malaiisch und über ein Dutzend europäische Sprachen einschließlich Deutsch, Spanisch, Französisch, Italienisch, Portugiesisch und Russisch.',
  },
  'what-is-the-current-steam-review-score': {
    q: 'Wie ist Moonlight Peaks\u2019 aktuelle Steam-Bewertung?',
    a: 'Stand dieser Schreibung, bestätigt über die offizielle Steam-Shop-Seite: "Sehr positiv" von 1.046 Nutzer-Reviews, 89% positiv. Diese Momentaufnahme wird sich mit weiteren Reviews im Laufe der Zeit ändern.',
  },
  'is-llemi-also-a-romance-option-during-loveage': {
    q: 'Ist Llemi während des Loveage Festivals auch eine Romanze-Option?',
    a: 'Ja, bestätigt: Llemi ist ein Romanze-Kandidat, und Guides empfehlen, Llemi während des Loveage Festivals ein geliebtes oder gemochtes Geschenk zu geben, da Llemi das Event und den Geschenkeaustausch darin veranstaltet.',
  },
  'what-does-patch-1-1-41-fix': {
    q: 'Was behebt Patch 1.1.41 in Moonlight Peaks?',
    a: 'Bestätigt über die offiziellen Steam-Patch-Notes: 1.1.41 ist jetzt live auf PC (Switch/Switch 2 folgen) und macht Hauslagerung von überall auf dem Grundstück zugänglich, mit einer neuen Schnellübertragungs-Option, plus verbesserten Ladezeiten über alle Szenen hinweg.',
    more: ['Derselbe Patch behebt auch, dass das Netz bei verfehlten Schwüngen Ausdauer verbraucht, mehrere Dialog-Steckenbleib-Bugs (Loveage-Geschenkeaustausch, Algen-Verschenken, Blumenpflücken in Pink Grove), und dass Haus-Upgrades den Inhalt der Lagerkiste oder die Dekorationsqualität löschen.'],
  },
  'how-much-is-the-digital-deluxe-edition': {
    q: 'Wie viel kostet die Moonlight Peaks Digital Deluxe Edition?',
    a: 'Bestätigt über die offizielle Steam-Ankündigung: 44,97 $, bündelt das Basisspiel mit einem digitalen Artbook und digitalen Soundtrack. Beide Extras sind auch geplant, später separat verkauft zu werden.',
  },
  'is-there-a-physical-switch-2-edition': {
    q: 'Gibt es eine physische Switch-2-Edition von Moonlight Peaks?',
    a: 'Ja, bestätigt von Marvelous Europe: Eine physische Nintendo-Switch-2-Edition erscheint am 28. August 2026 in ganz Europa, für 49,99 € / 44,99 £, mit einem Sammel-Stickerblatt und digitalem Soundtrack.',
  },
  'does-the-net-still-cost-stamina-on-a-miss': {
    q: 'Kostet das Netz bei einem verfehlten Schwung noch Ausdauer?',
    a: 'Nicht mehr, seit Patch 1.1.41 — bestätigt über die offiziellen Patch-Notes, verfehlte Netzschwünge verbrauchen keine Ausdauer mehr, was das beim Release gemeldete Verhalten rückgängig macht.',
  },
  'how-many-nokturna-cards-in-a-deck': {
    q: 'Wie viele Karten kommen in ein Nokturna-Deck?',
    a: 'Bestätigt: Genau 20 Karten pro Deck, mit maximal 2 Kopien jeder einzelnen Karte, und insgesamt 60 gedruckten Punkten oder weniger. Spieler können bis zu 13 eigene Decks gleichzeitig speichern.',
    more: ['Partien laufen über bis zu 3 Runden mit je 3 Zügen, beginnend mit einer 5-Karten-Hand; die höhere Feldsumme gewinnt jede Runde.'],
  },
  'what-does-jadas-museum-quest-require': {
    q: 'Was verlangt Jadas Museums-Ausstellungs-Quest?',
    a: 'Bestätigt über einen Launch-Woche-Walkthrough: Jada bittet um jeweils ein Artefakt von vier Familien — Rotwein von Orlock, eine Nokturna-Partie gegen Dragan, eine Nachtschatten von Fiona, und Wolfsbann von Saga (erreicht über ein vorheriges Gespräch mit Brook).',
    more: ['Alle vier zurückzubringen und am nächsten Tag die Ausstellung zu besuchen platziert das Henderson-Wappen im Crest Garden als direkte Folge.'],
  },
  'how-do-you-unlock-potion-making': {
    q: 'Wie schaltet man Tränkebrauen in Moonlight Peaks frei?',
    a: 'Bestätigt: Ein von der Mutter geschickter Kessel kommt zerbrochen an; das Aufsuchen der Hexen führt dazu, dass Fiona um zwei Mana-Essenzen bittet, und deren Lieferung bringt einige Tage später den reparierten Kessel plus das Alter-Ego-Elixier-Rezept.',
  },
  'what-other-story-quests-exist': {
    q: 'Welche weiteren Story-Quests gibt es jenseits des frühen Spiels?',
    a: 'Namentlich bestätigt über einen ausführlichen Quest-Walkthrough: "Elections by Moonlight", "Darkness over Moonlight Peaks", "Master of the Night", "A Key to the Deep" und "Cosmic Preparations". Ihre Freischalt-Bedingungen und Belohnungen sind noch nicht bequellt.',
  },
  'how-do-you-unlock-bat-and-mermaid-forms': {
    q: 'Wie schaltet man Fledermausform und Meerjungfrauenform frei?',
    a: 'Bestätigt über einen Launch-Woche-Walkthrough: Die Fledermausform ist an das Finden des "vermissten Mondes" und den Erhalt des Khazan-Familienwappens gebunden, während die Meerjungfrauenform durch Hilfe für Kim mit einem besonderen Muschelpulver freigeschaltet wird.',
  },
  'do-new-residents-move-in-during-the-game': {
    q: 'Ziehen im Spielverlauf neue Bewohner zu?',
    a: 'Ja, bestätigt: Eine Questreihe lässt Ludo um ein Spiegelei bitten, um am eigenen Haus zu arbeiten, gefolgt von einer Einweihungsfeier am nächsten Tag, und die Familie Henderson zieht in ein Haus unterhalb des Sargladens.',
  },
  'what-gifts-does-alina-like-in-moonlight-peaks': {
    q: 'Welche Geschenke mag Alina in Moonlight Peaks?',
    a: 'Cross-verifiziert über mindestens zwei unabhängige Post-Launch-Guides: Alina liebt Schwarze Rose und Schwarze Tulpe, zusammen mit anderen schwarz-thematischen Blumen und düsteren Kunstdrucken.',
    more: ['Ihr erstes Herz-Ereignis löst aus, indem man sie nach Erreichen eines Herzens in der Bar besucht, wo man sie dabei erwischt, wie sie zusieht, wie Noel beim Flirten mit ihr scheitert — ihre eigene Retourkutsche zu loben kommt besser an als Noel zu loben.'],
  },
  'what-gifts-does-ridge-like': {
    q: 'Welche Geschenke mag Ridge in Moonlight Peaks?',
    a: 'Cross-verifiziert: Bier ist derzeit der stärkste bestätigte Geschenke-Hinweis für Ridge, von mindestens zwei unabhängigen Post-Launch-Guides bestätigt.',
  },
  'how-does-the-gift-tracking-ui-work': {
    q: 'Wie erkennt man, ob ein Geschenk gut ankam?',
    a: 'Bestätigt: Der Beziehungsbildschirm speichert die letzten acht Geschenke an jeden Bewohner, markiert gemochte Gegenstände mit einem Stern und geliebte mit einem Herz — der zuverlässigste Weg, eine Vorliebe selbst zu bestätigen.',
  },
  'do-gift-preferences-cluster-by-family': {
    q: 'Folgen Geschenkvorlieben einem Muster nach Familie?',
    a: 'Community-gemeldet (Einzelquelle, noch nicht pro Charakter cross-verifiziert): Schwarze Blumen funktionieren gut bei mehreren Werwölfen und Hexen, blaue Blumen passen eher zur Logan-Werwolf-Familie, und mana-thematische Gegenstände sind allgemein eine sichere Wahl für die Hexenfamilie.',
    more: ['Eine gemeldete Ausnahme: Keiner der Vampirfamilie soll Blutrauben als Geschenk mögen, obwohl es die Startpflanze der Spielfigur ist — sie bevorzugen Berichten zufolge stattdessen den verarbeiteten Wein.'],
  },
  'is-there-a-24th-romanceable-character': {
    q: 'Gibt es einen 24. romanzefähigen Charakter?',
    a: 'Unbestätigt. Mehrere Post-Launch-Guides benennen unabhängig voneinander dieselben 23 romanzefähigen Charaktere, aber der offizielle Shop-Text bewirbt weiterhin "etwa zwei Dutzend", was die Möglichkeit eines weiteren, noch nicht verlässlich identifizierten Charakters offen lässt.',
  },
  'is-the-vampster-in-alinas-house-collectible': {
    q: 'Ist der Vampster in Alinas Haus einer der 100 sammelbaren?',
    a: 'Nein, bestätigt: Alina führt die Vampster-Sammelquest ein, aber der Vampster, der in ihrem eigenen Haus lebt, ist speziell ihr Haustier und nicht dafür gedacht, als Sammelobjekt aufgenommen zu werden.',
  },
  'what-gifts-does-ludo-like': {
    q: 'Welche Geschenke mag Ludo in Moonlight Peaks?',
    a: 'Community-gemeldet (Einzelquelle): Ludo, ein schelmischer Werwolf, soll gekochte Gerichte wie Burger, Burritos und Pizza bevorzugen, zusammen mit schwarzen Blumen.',
  },
  'what-gifts-does-samael-like': {
    q: 'Welche Geschenke mag Samael in Moonlight Peaks?',
    a: 'Community-gemeldet (Einzelquelle): Samael, der die Bar der Stadt betreibt, soll Weißen oder Roten Wein zusammen mit Gerichten im japanischen Stil wie Onigiri und Violettem Sashimi bevorzugen.',
  },
  'why-wont-an-npc-respond-to-my-gifts': {
    q: 'Warum reagiert ein NPC nicht auf Geschenke?',
    a: 'Dies war ein bekannter Bug, bei dem bestimmte Bewohner komplett aufhörten, auf Geschenke zu reagieren — bestätigt behoben seit Patch 1.1.41. Falls das vor dem Patch passiert ist, lohnt es sich, es jetzt erneut zu versuchen.',
  },
  'why-cant-i-find-aras-heart-event': {
    q: 'Warum finde ich Aras\u2019 Herz-Ereignis nicht, obwohl ich einen Funkel-Marker sehe?',
    a: 'Dies war ein bekannter Bug, bei dem Aras\u2019 Herz-Ereignis-Marker am Schneiderladen statt am korrekten Ort erschien — bestätigt behoben in Patch 1.1.41.',
  },
  'how-many-save-files-can-you-have-in-moonlight-peaks': {
    q: 'Wie viele Spielstände kann man in Moonlight Peaks haben, und kann man zu einem früheren Punkt zurück?',
    a: 'Bestätigt: Man kann mehrere Spielstände für verschiedene Charaktere/Durchgänge behalten, aber man kann keinen bestehenden Spielstand verzweigen, um einen früheren Kontrollpunkt desselben Charakters zu erstellen. Der Fortschritt ist innerhalb eines Spielstands dauerhaft — es gibt keine Möglichkeit, zurückzurollen und später auf derselben Datei andere Entscheidungen zu treffen. Zusammen mit der Tatsache, dass Moonlight Peaks nur beim Schlafen speichert (kein manuelles Speichern), lohnt es sich, große Entscheidungen zu durchdenken, statt anzunehmen, man könne sie rückgängig machen.',
  },
  'is-moonlight-peaks-lgbtq-friendly': {
    q: 'Ist Moonlight Peaks LGBTQ+-freundlich?',
    a: 'Ja, bestätigt: Das Spiel bietet einen inklusiven Charakter-Editor ohne geschlechtsspezifische Einschränkungen, und Dating ist vollständig geschlechtsneutral — jeder romanzefähige Bewohner kann unabhängig von Identität oder Aussehen der Spielfigur gedatet werden. Reviewer haben die queeren Romanze-Inhalte und die Charakterschreibung besonders als herausragende Stärke gelobt.',
  },
  'how-does-aquaflux-mana-limit-work': {
    q: 'Bewässert Aquaflux Pflanzen kostenlos, oder kostet es trotzdem etwas?',
    a: 'Bestätigt: Aquaflux ist keine unbegrenzte automatische Bewässerungslösung — er zieht weiterhin aus der Mana-Leiste, demselben Ressourcen-Pool, der für andere Zauber genutzt wird. Eine einzelne Wirkung deckt Berichten zufolge bis zu 16 Pflanzenfelder ab, aber wenn man ein großes magisches Pflanzenfeld plant, ohne genug Mana-Kapazität dafür zu haben, geht einem mittendrin das Mana aus und man muss warten, bis es sich regeneriert (durch Schlaf oder Mana-wiederherstellendes Essen/Tränke), bevor man fertig wird. Als Bewässerungswerkzeug mit echten Grenzen behandeln, nicht als Freifahrtschein, die Mana-Leiste ganz zu ignorieren.',
  },
  'is-patch-1-1-41-out-on-switch': {
    q: 'Ist Patch 1.1.41 schon für Nintendo Switch und Switch 2 verfügbar?',
    a: 'Noch nicht, Stand dieser Schreibung. Bestätigt über die offiziellen Patch-Notes: 1.1.41 erschien zuerst für Steam, wobei Switch-, Switch-2- und Google-Play-Games-Updates bestätigt später folgen, statt gleichzeitig.',
    more: ['Stand der neuesten offiziellen Versionsübersicht: Steam liegt bei 1.1.41, während Nintendo Switch, Nintendo Switch 2 und Google Play Games noch bei 1.1.3 liegen — man sollte also nicht annehmen, dass die eigene Plattform einen Fix hat, nur weil die Steam-Patch-Notes ihn erwähnen.'],
  },
  'does-1-1-41-fix-crop-growth': {
    q: 'Behebt Patch 1.1.41 Pflanzen und Bäume, die nicht ausreifen?',
    a: 'Ja, bestätigt über die offiziellen Patch-Notes: 1.1.41 listet ausdrücklich einen Fix für "manche Pflanzen und Bäume reiften nicht aus" als eine seiner Änderungen.',
    more: ['Derselbe Patch änderte auch, wie Baumsamen-Tooltips Saisoninformationen anzeigen — sie zeigen jetzt die Saisons, in denen der Baumertrag wächst, statt der Saisons, in denen der Baum selbst wächst, was manche Spieler beim Vergleich mit dem Landwirtschafts-Guide verwirrt hatte.'],
  },
  'does-1-1-41-fix-lost-saves': {
    q: 'Behebt Patch 1.1.41 fehlende oder verlorene Spielstände?',
    a: 'Teilweise. Bestätigt über offizielle Patch-Notes: 1.1.41 stellt fehlende Spielstände für eine bestimmte bekannte Ursache wieder her, aber dieser Fix gilt ausdrücklich nicht für Spielstände, die durch Schließen des Spiels während des Speicherns beschädigt wurden.',
    more: ['Falls der Spielstand-Verlust durch Beenden mitten im Speichervorgang entstand, statt durch das Problem, das dieser Patch behebt, als weiterhin ungelöst behandeln und vor größeren Updates Backups des lokalen Speicherordners aufbewahren.'],
  },
  'house-storage-from-barn-greenhouse': {
    q: 'Kann man in Moonlight Peaks von Scheune oder Gewächshaus aus auf Hauslagerung zugreifen?',
    a: 'Ja, seit Patch 1.1.41. Bestätigt über offizielle Patch-Notes: Hauslagerung ist jetzt vom gesamten Grundstück aus verfügbar, einschließlich Scheunen und Gewächshäusern, nicht nur von innerhalb des Hauses selbst.',
    more: ['Derselbe Patch fügte eine Schnellübertragungs-Option zum Verschieben von Gegenständen in und aus der Hauslagerung hinzu, was das Materialverschieben zwischen Gebäuden in einer geschäftigen Nacht schneller macht.'],
  },
  'does-1-1-41-fix-nokturna-card-reward': {
    q: 'Behebt Patch 1.1.41, dass man nach einer Partie keine Nokturna-Karte erhält?',
    a: 'Ja, bestätigt über offizielle Patch-Notes: 1.1.41 behebt ein Problem, bei dem Spieler keine Nokturna-Kartenbelohnung erhielten, wenn sie direkt nach dem Betrachten des Spielfelds am Ende einer Partie das Spiel verließen.',
  },
  'does-1-1-41-fix-cloud-save-sync': {
    q: 'Behebt Patch 1.1.41 Probleme bei der Cloud-Speicher-Synchronisation?',
    a: 'Ja, bestätigt über die offiziellen Patch-Notes: 1.1.41 behebt ein Problem, bei dem Cloud-Speicherdateien nicht richtig synchronisierten.',
    more: ['Wer auf mehreren Geräten spielt, sollte weiterhin sicherheitshalber das Spiel vollständig schließen und eine abgeschlossene Synchronisation bestätigen lassen, bevor man das Gerät wechselt, da Patch-Notes, die einen Sync-Bug beheben, keine Spielstände rückwirkend reparieren, die bereits vor dem Update betroffen waren.'],
  },
  'embroidery-unlock-timing-patch': {
    q: 'Hat Patch 1.1.41 geändert, wann Stickerei freischaltet?',
    a: 'Ja, bestätigt über offizielle Patch-Notes: Stickerei schaltet seit 1.1.41 früher frei, was wiederum NPCs, deren Date-Aktivität Stickerei ist, erlaubt, früher als vor dem Patch zu einem Date eingeladen zu werden.',
  },
  'what-are-the-water-bubbles-ripples': {
    q: 'Was sind die funkelnden Blasen oder Wellen im Wasser in Moonlight Peaks?',
    a: 'Bestätigt von GameRant: Diese funkelnden Blasen oder Wellen auf Flüssen und Seen sind Meerjungfrauenform-Tauchstellen, keine besonderen Angelstellen — eine Angelschnur hineinzuwerfen gibt keinen Seltenen-Fisch-Bonus.',
    more: ['Man braucht die Meerjungfrauen-(Wasser-)Form, um mit ihnen zu interagieren, freigeschaltet durch die Questreihe "The Mermaid\u2019s Wish", die nach Erreichen von Luna Bay erscheint. Einmal freigeschaltet, verwandeln, zur Welle schwimmen und interagieren, um nach dem Gegenstand unter der Oberfläche zu tauchen. Bis dahin die Blasen in Ruhe lassen und später wiederkommen.'],
  },
  'how-does-the-scarecrow-protection-work': {
    q: 'Wie viel Fläche schützt eine Vogelscheuche in Moonlight Peaks?',
    a: 'Gemeldet von einer geprüften Anfänger-Tipps-Zusammenstellung: Eine Vogelscheuche schützt nur einen begrenzten, hervorgehobenen Bereich, der in ihrer Platzierungsvorschau gezeigt wird, nicht die gesamte Farm. Onkel Viktor führt die Notwendigkeit ein, Pflanzen vor Raben zu schützen.',
    more: ['Keine am Rand eines großen Feldes platzieren und annehmen, die entfernte Seite sei abgedeckt — ein weites Feld in geschützte Blöcke aufteilen, oder eine zweite Vogelscheuche hinzufügen, sobald der Radius der ersten nicht mehr jedes Feld abdeckt.'],
  },
  'does-house-storage-have-a-capacity-limit': {
    q: 'Gibt es eine Kapazitätsgrenze bei der universellen Hauslagerung?',
    a: 'Gemeldet über mehrere Durchgänge hinweg (sechs-Stunden- und 60-Stunden-Reviews): Es wurde keine praktische Kapazitätsgrenze für die universelle Hauslagerung gefunden, aus der Handwerks-, Koch-, Tränke- und Verarbeitungsstationen alle direkt ziehen können.',
    more: ['Das ist jedoch getrennt von der persönlichen Tragetasche — Sabrina soll separat ein 10-Slot-Inventar-Upgrade bei Webb of Wonders verkaufen, sodass "unbegrenzte Hauslagerung" und "begrenzte Taschenplätze" zwei verschiedene Systeme zu sein scheinen, kein Widerspruch.'],
  },
  'can-you-decorate-from-universal-storage': {
    q: 'Kann man im Dekorationsmodus Möbel aus der Hauslagerung platzieren?',
    a: 'Nein, gemeldet von einem geprüften Tipps-Guide: Die universelle Hauslagerung ist im Dekorationsmodus nicht zugänglich. Man muss die geplanten Möbel- und Deko-Stücke vor einer großen Umgestaltung in die Tasche sammeln.',
  },
  'do-you-pick-furniture-color-when-crafting': {
    q: 'Wählt man die Möbelfarbe vor oder nach der Herstellung?',
    a: 'Vorher, gemeldet von einer Tipps-Zusammenstellung früher Spieler: Beim Herstellen von Möbeln und Deko wählt man die Farbe oder Variante von vornherein, im Moment der Herstellung, statt eine schlichte Version zu machen und sie später neu zu bemalen.',
    more: ['Manche Gegenstände sollen ihre Farbe von den Blumen erhalten, die man ins Rezept einfüttert, weshalb Sammlern empfohlen wird, Blumen in den gewünschten Farben vor einem thematischen Bauprojekt zu horten.'],
  },
  'is-decorating-on-a-grid-in-moonlight-peaks': {
    q: 'Ist das Dekorieren kachelbasiert oder freie Platzierung?',
    a: 'Kachelbasiert, gemeldet von einer Tipps-Zusammenstellung früher Spieler: Dekorieren (sowohl innen als auch außen) erfolgt von oben auf einem Kachelraster, und man kann die Platzierung nicht auf halbe Kacheln versetzen oder Objekte in freien Winkeln platzieren.',
    more: ['Man kann trotzdem die meisten Objekte drehen, kleine Deko-Gegenstände auf kompatiblen Möbeln stapeln, und die Pinselgröße beim Anlegen von Wegen anpassen — und manche Gegenstände sind bewusst vorab gewinkelt gestaltet, damit sich das Layout nicht vollständig rastergebunden anfühlt.'],
  },
  'is-cooking-available-from-night-one': {
    q: 'Ist Kochen von Anfang an verfügbar, anders als Tränkebrauen?',
    a: 'Ja, gemeldet von einem Rezepte-Guide: Anders als Tränkebrauen am Kessel (das später durch die Story freigeschaltet wird), ist Kochen ab der ersten Nacht über die bereits im Haus vorhandene Kochstation verfügbar.',
    more: ['Man startet nicht mit Rezeptkenntnissen — sie werden aus in der Stadt gekauften Kochbüchern gelernt oder beim Erkunden entdeckt. Zusätzliche Kochstationen können an einer Werkbank gebaut werden, mit gemeldeten Kosten von 5 Brettern und 5 veredeltem Stein, falls man eine zweite Küche will, etwa nahe der Scheune.'],
  },
  'how-does-the-cooking-minigame-work': {
    q: 'Wie funktioniert das Koch-Minispiel in Moonlight Peaks?',
    a: 'Gemeldet von einem Rezepte-Guide: Die Bestätigungstaste drücken, wenn ein rotierender Marker die rote Zone auf dem Koch-Ring trifft. Mehr erfolgreiche Treffer während des Vorgangs sollen eine höhere Sternequalität beim fertigen Gericht ergeben.',
    more: ['Es gibt Berichten zufolge keinen Sammel-Koch-Knopf — jeder Teller erfordert eine eigene Minispiel-Sitzung, also ein Gericht nach dem anderen planen, statt zu erwarten, mehrere gleichzeitig vor Sonnenaufgang einzureihen.'],
  },
  'when-is-coffee-and-coffins-open': {
    q: 'Welche Öffnungszeiten hat Coffee and Coffins?',
    a: 'Konsistent über zwei unabhängige Quellen gemeldet: Coffee and Coffins, das Café von Mina und Evan, hat von 20 bis 1 Uhr geöffnet, sieben Nächte die Woche.',
    more: ['Mina verkauft während dieser Zeit Kochbücher hinterm Tresen, weshalb es effizient ist, einen Kochbuch-Kauf mit einem Geschenk und Gespräch beim selben Besuch zu kombinieren.'],
  },
  'when-is-minas-birthday': {
    q: 'Wann ist Minas Geburtstag in Moonlight Peaks?',
    a: 'Bestätigt von einem eigenen Charakter-Guide: Minas Geburtstag ist Sommer 16. Ihr an genau diesem Tag ein geliebtes Geschenk wie eine rosa Blume zu geben, gibt den größten Beziehungsschub des Jahres.',
  },
  'what-happens-after-marrying-mina': {
    q: 'Was passiert, nachdem man Mina geheiratet hat?',
    a: 'Bestätigt von einem eigenen Charakter-Guide: Nach der Heirat zieht Mina bei einem ein, betreibt aber weiterhin Coffee and Coffins zusammen mit ihrem Bruder Evan. Sie zu heiraten macht auch Orlock zum Schwiegervater.',
    more: ['Wie bei anderen Ehen im Spiel gibt es keine Kinder — die Heirat wird als Endpunkt der Beziehung beschrieben, nicht als Stufe, die zu einem Familiensystem führt.'],
  },
  'do-birthday-gifts-give-a-bonus': {
    q: 'Geben Geburtstagsgeschenke einen größeren Beziehungsschub?',
    a: 'Ja, konsistent über mehrere Geschenke-Guides gemeldet: Ein geliebtes Geschenk genau am Geburtstag eines Bewohners zu geben, bringt einen deutlich größeren Beziehungszuwachs als dasselbe Geschenk an einem gewöhnlichen Tag.',
    more: ['Community-Rat: Für jeden bevorstehenden Geburtstag mindestens ein geliebtes Geschenk in einer Truhe aufbewahren, statt zu hoffen, am Tag selbst eines zu finden.'],
  },
  'how-many-gifts-per-day-per-person': {
    q: 'Wie viele Geschenke kann man pro Tag an eine Person geben?',
    a: 'Eines, konsistent über Geschenke-Guides gemeldet: Man kann einem Bewohner pro Spielnacht ein einzelnes Geschenk geben, sodass ein schlecht gewähltes Geschenk eine ganze Tagesgelegenheit kostet, nicht nur den Gegenstand.',
  },
  'does-relationship-screen-track-gift-history': {
    q: 'Zeigt der Beziehungsbildschirm die letzte Geschenkhistorie?',
    a: 'Ja, über mehrere Geschenke-Guides bestätigt: Der Beziehungsbildschirm merkt sich die letzten acht Geschenke, die man einem Bewohner gegeben hat, und ob er jedes geliebt, gemocht oder nicht gemocht hat.',
    more: ['Das macht Ausprobieren relativ risikoarm — man kann danach prüfen, was funktioniert hat, statt sich erinnern oder raten zu müssen.'],
  },
  'are-there-universally-loved-gifts': {
    q: 'Gibt es universell geliebte Geschenke, die bei fast jedem funktionieren?',
    a: 'Gemeldet von einem Community-Geschenke-Guide: Das goldene Ei und Diamanten werden als mindestens zwei Gegenstände genannt, die bei vielen Bewohnern weithin geliebt werden, nützlich als sichere Rückfalloption, wenn die spezifischen Vorlieben eines Charakters noch nicht bekannt sind.',
  },
  'how-do-you-learn-npc-preferences-organically': {
    q: 'Wie lernt man Geschenkvorlieben eines Charakters ohne Guide?',
    a: 'Durch tägliches Gespräch mit Bewohnern, gemeldet von einem geschenkefokussierten Review: Charaktere geben in gewöhnlichen Gesprächen Hinweise auf Hobbys, Lieblingsessen, Berufe und persönliche Interessen preis, und das Spiel zeichnet Gelerntes dauerhaft in einem Journal auf.',
  },
  'how-many-critters-fish-vampsters-total': {
    q: 'Wie viele Kleintiere, Fische und Vampster gibt es insgesamt zu sammeln?',
    a: 'Gemeldet aus einem 60-Stunden-Review-Build: 95 Kleintiere, 22 Fische und 100 Vampster, zusätzlich Seelenblobs und weitere Entdeckungen. Kürzere Launch-Woche-Tabellen als Teillisten behandeln, bis ihre Autoren die Vollständigkeit ausdrücklich bestätigen.',
    more: ['Fische und Kleintiere sollen je nach Gebiet und Jahreszeit variieren, also nicht erwarten, eine der beiden Sammlungen in einem einzigen frühen Durchgang abzuschließen.'],
  },
  'when-does-the-museum-unlock': {
    q: 'Wann schaltet sich das Museum in Moonlight Peaks frei?',
    a: 'Bestätigt von zwei unabhängigen Quellen: Das Museum ist ein Story- und Beziehungs-Unlock, nicht schon in den ersten Nächten verfügbar. Es öffnet, nachdem Persephone, Jada und Winston in das Haus am Pier ziehen, und Jadas Museums-Questreihe dann über zwei Stufen fortschreitet.',
    more: ['Ein dokumentierter Durchgang erreichte diesen Punkt etwa zu Beginn des Herbstes in Jahr 1 — das als Beispiel-Zeitpunkt behandeln, nicht als Garantie, da Questreihenfolge und Erkundungstempo dies verschieben können.'],
  },
  'does-the-museum-require-perfect-quality-items': {
    q: 'Braucht das Museum Perfekt-Qualität-Gegenstände für Spenden?',
    a: 'Für manche Sammlungen ja. Bestätigt von zwei unabhängigen Quellen: Die meisten Museumsspenden brauchen nur einen Gegenstand normaler Qualität, aber die Landwirtschafts-Sammlung verlangt bei manchen Einträgen ausdrücklich Perfekt-Qualität-Pflanzen und Anbaugüter. Mehrere gekochte übernatürliche Spenden sollen ebenfalls Perfekt-Qualität benötigen.',
    more: ['Das Sammlungs-Schild prüfen, bevor man eine hochwertige Ernte verkauft, da ein verkaufter Perfekt-Qualität-Gegenstand schwer auf Abruf reproduzierbar sein kann.'],
  },
  'how-many-museum-collection-rooms': {
    q: 'Wie viele Sammlungsräume hat das Museum?',
    a: 'Gemeldet von einer aus dem offiziellen Wiki stammenden Checkliste: Das Museum gruppiert Spenden in mehrere thematische Räume — gemeldet als Hexen-, Vampir-, Seher-, Werwolf-, Meerjungfrauen-, Gottheiten-/Landwirtschafts-, Aquarium- und Kleintier-Sammlungen, wobei die genaue Raumanzahl zwischen frühen Guides leicht variiert und noch als sich einpendelnd behandelt werden sollte.',
  },
  'what-does-the-refiner-do': {
    q: 'Was macht die Raffinerie in Moonlight Peaks?',
    a: 'Bestätigt von einem Walkthrough-Guide: Die Raffinerie wandelt Rohmaterialien in nutzbare Handwerksressourcen um — Holz in Bretter, Stein in veredelten Stein, und Faser in Futter für Tiere.',
    more: ['Reviewer merken an, dass sich diese veredelten Bestände schnell aufbrauchen, sobald man ernsthaft baut und herstellt, also einen Kreislauf von Rohmaterialien in die Raffinerie einspeisen, statt erst bei Bedarf herzustellen.'],
  },
  'can-you-buy-an-inventory-upgrade': {
    q: 'Kann man ein Inventar-(Taschen-)Upgrade kaufen?',
    a: 'Gemeldet von einem Walkthrough-Guide: Sabrina verkauft bei Webb of Wonders ein 10-Slot-Inventar-Upgrade für gemeldete 2.000 Münzen, für Spieler, deren Start-Taschenplätze Besorgungen ständig verkürzen.',
    more: ['Das ist ein separates System von der universellen Hauslagerung, die laut mehreren Reviewern keine praktische Kapazitätsgrenze hat — das kostenpflichtige Upgrade gilt speziell für die Tasche, die man unterwegs trägt.'],
  },
  'what-happens-at-sunrise-if-youre-not-home': {
    q: 'Was passiert, wenn man bei Sonnenaufgang noch draußen ist?',
    a: 'Gemeldet aus einem 60-Stunden-Review-Build: Der Sonnenaufgang teleportiert die Spielfigur automatisch nach Hause, ohne beobachtete Geld- oder Ausdauerstrafe. Im Sarg zu schlafen bleibt der normale Weg, eine Nacht zu beenden und zu speichern, aber ein später Ausflug ist nicht automatisch eine Katastrophe.',
  },
  'can-you-change-night-length-settings': {
    q: 'Kann man ändern, wie lange eine Nacht dauert?',
    a: 'Ja, sobald freigeschaltet. Über mehrere Quellen bestätigt: Die Standardnacht dauert etwa 15 reale Minuten, und spätere Einstellungen erlauben stattdessen etwa 10-minütige oder 25-minütige Nächte, freigeschaltet bei Erreichen von Seelenblob-Sammelmeilensteinen.',
    more: ['Eine längere Nachteinstellung erleichtert es, das Tempo an Erkundung, Dekorieren oder das Warten auf Quest-Auslöser anzupassen, während eine kürzere Einstellung Spielern entgegenkommt, die schneller durch Tage zyklieren wollen.'],
  },
  'do-magical-crops-need-special-watering': {
    q: 'Brauchen magische Pflanzen etwas anderes als normales Gießen?',
    a: 'Für manche ja. Gemeldet von einem geprüften Tipps-Guide: Magische Pflanzen müssen generell mit einem Zauber statt der gewöhnlichen Gießkanne bewässert werden, und manche geprüften Beispiele brauchen mehr als das — Pflanzen, die mit einem Käfer oder Fisch gefüttert werden, Pflanzen, die selbst nahegelegene Erde bewässern, und Pflanzen, die umliegende Felder austrocknen.',
    more: ['Der Rat ist, eine kleine Pflanzung jeder neuen magischen Pflanze zu testen, bevor man ein ganzes Feld dafür festlegt, da sich das Verhalten Berichten zufolge von Pflanze zu Pflanze unterscheidet.'],
  },
  'do-ethereal-tool-spells-lock-you-in-place': {
    q: 'Verhindern die ätherischen Axt- und Spitzhacken-Zauber andere Aktionen während sie aktiv sind?',
    a: 'Gemeldet in einem geprüften Build: Die ätherischen Axt- und Spitzhacken-Zauber verhinderten andere Aktionen, während die beschworenen Werkzeuge arbeiteten, anders als die ätherische Gießkanne, die diese Einschränkung nicht hatte.',
    more: ['Da dies in einem bestimmten Review-Build beobachtet wurde, das Verhalten im aktuellen Patch selbst testen, bevor man eine Mana-Routine darauf aufbaut, diese Zauber mit anderen Aktionen zu verketten.'],
  },
  'is-nokturna-a-relationship-activity': {
    q: 'Kann man Nokturna mit Bewohnern als Beziehungsaktivität spielen, nicht nur als Minispiel?',
    a: 'Ja, gemeldet von einem geprüften Tipps-Guide: Nokturna ist nicht nur ein eigenständiges Kartenspiel — es wird auch unter den verfügbaren Beziehungsaktivitäten mit Bewohnern gelistet, ähnlich einer Date-Aktivität.',
    more: ['Verschiedene NPCs sollen unterschiedliche Decks verwenden, weshalb es hilft, mehr als eine Deck-Strategie zu haben, wenn man gegen mehrere Bewohner spielen möchte.'],
  },
  'how-many-total-characters-are-in-the-game': {
    q: 'Wie viele Charaktere insgesamt (nicht nur Romanze-Optionen) gibt es?',
    a: 'Gemeldet von einem Launch-Review: Moonlight Peaks hat 23 daten-fähige Charaktere (verglichen mit etwa 12 in vielen ähnlichen Spielen) und über 30 Charaktere insgesamt, sobald nicht-romanzefähige Bewohner mitgezählt werden.',
  },
  'do-new-characters-appear-later-in-the-year': {
    q: 'Tauchen neue Charaktere später im Jahr auf, statt zu Spielbeginn?',
    a: 'Ja, bestätigt von einem Launch-Review: Neue Gesichter werden schrittweise im Jahresverlauf eingeführt — zum Beispiel erscheint der Charakter Kürbiskopf erst im Herbst, was dafür sorgt, dass die Stadt weit über die Anfangsstunden hinaus neue Leute einführt.',
  },
  'who-is-snek-in-moonlight-peaks': {
    q: 'Wer ist Snek in Moonlight Peaks?',
    a: 'Gemeldet von einem Launch-Review: Snek ist ein Ladenbesitzer-Charakter, beschrieben als eine buchstäbliche Schlange, die Ölgemälde verkauft, ein von den Autoren gespieltes Wortspiel mit "snake oil salesman" (Ölschlange/Scharlatan).',
  },
  'is-death-a-real-character-you-can-meet': {
    q: 'Ist Tod ein echter Charakter, den man trifft, nicht nur ein Game-Over-Bildschirm?',
    a: 'Ja, bestätigt von mehreren Reviews: Tod ist ein echter, benannter Bewohner der Stadt, in einem Review beschrieben, als würde er in Moonlight Peaks "Urlaub machen", komplett mit Hawaiihemd in mindestens einer Review-Beschreibung.',
    more: ['Das passt dazu, dass Tod andernorts in der Berichterstattung ein eigenes bestätigtes Zuhause hat ("Death\u2019s Cabin"), was bekräftigt, dass er als richtiger Stadtbewohner geschrieben ist, nicht als reines Erzählmittel.'],
  },
  'why-does-noel-challenge-you-to-a-fishing-contest': {
    q: 'Warum fordert Noel einen früh im Spiel zu einem Angelwettbewerb heraus?',
    a: 'Gemeldet von einem Launch-Review: Noel wird als Hexenlehrling mit Minderwertigkeitskomplex geschrieben, und die Spielfigur zu einem Angelwettbewerb herauszufordern ist einer seiner frühen charakterprägenden Momente, kein Zufallsereignis.',
  },
  'are-there-tensions-between-the-four-factions': {
    q: 'Gibt es Spannungen zwischen verschiedenen übernatürlichen Gruppen?',
    a: 'Ja, bestätigt von einem Launch-Review: Die Bewohner der Stadt sind grob in Vampire, Werwölfe, Hexen und Seher gruppiert, mit deutlichen Spannungen zwischen manchen dieser Gruppen — ein Reviewer verbrachte auffällig viel Zeit damit, speziell die Beziehungen zwischen Vampiren und Werwölfen zu glätten.',
  },
  'is-orlock-drunk-animation-a-real-detail': {
    q: 'Stolpert Orlock tatsächlich betrunken herum, oder ist das nur eine Beschreibung?',
    a: 'Ja, bestätigt von einem Launch-Review: Orlock hat eine spezifische stolpernde, taumelnde Animation, wenn er betrunken ist, von mindestens einem Reviewer als eines seiner liebsten kleinen Charakterdetails im Spiel hervorgehoben.',
  },
  'are-character-portraits-chibi-style': {
    q: 'Sind Charakterporträts im Chibi-(super-deformierten-)Kunststil gezeichnet?',
    a: 'Ja, bestätigt von einem Launch-Review: Charakterporträts werden als "verchibifizierte" Versionen der Charaktere beschrieben, mit sichtbarer Leerlaufanimation und reaktiven Ausdrücken statt statischer Kunst.',
    more: ['Dies ist getrennt von der bestätigten Option, im Hauptmenü zwischen zwei Porträtstil-Voreinstellungen zu wechseln — ein Cartoon-Stil mit realistischer Schattierung, oder ein niedlicherer, anime-inspirierter Stil.'],
  },
  'does-the-town-color-palette-change-by-season': {
    q: 'Ändert sich die Farbpalette oder Beleuchtung mit den Jahreszeiten?',
    a: 'Ja, gemeldet von einem Launch-Review: Statt eines hellen, luftigen Frühlings mit Pastellfarben wird das Spiel beschrieben als beginnend mit tiefen, stimmungsvollen Violett- und Blautönen, wobei ein Großteil der Palette gedämpft ist, um sich wie in Dunkelheit gebadet anzufühlen, akzentuiert durch leuchtende Pflanzen und Lichterketten.',
  },
  'save-data-and-crash-dump-locations': {
    q: 'Wo genau werden Spielstände und Absturzdaten auf dem PC gespeichert?',
    a: 'Bestätigt vom offiziellen Support-Thread: Auf Windows liegen Spielstände unter %USERPROFILE%/AppData/LocalLow/Little Chicken Game Company/Moonlight Peaks/, und auf Mac unter ~/Library/Application Support/Little Chicken Game Company/Moonlight Peaks/. Absturzdaten auf Windows liegen typischerweise unter %LOCALAPPDATA%\\CrashDumps, von "Moonlight Peaks.exe".',
    more: ['Bei einer Bug-Meldung bitten die Entwickler ausdrücklich darum, diese Dateien der Support-E-Mail beizufügen, statt nur eine Problembeschreibung zu senden.'],
  },
  'how-to-report-a-bug-to-the-developers': {
    q: 'Wie meldet man einen Bug direkt den Entwicklern?',
    a: 'Bestätigt vom offiziellen Support-Thread: E-Mail an support@xseedgames.com mit Spielstand-Ort, Plattform und (bei Abstürzen) den Absturzdaten-Dateien, oder im angehefteten Bug-Thread der offiziellen Steam-Community-Diskussionen posten.',
    more: ['Die Entwickler bitten ausdrücklich darum, dass dieser zentrale Bug-Thread auf Gameplay-Probleme fokussiert bleibt, andere Kommentare oder Fragen stattdessen an comments@xseedgames.com zu richten.'],
  },
  'does-net-drain-stamina-on-a-miss': {
    q: 'Verschwendet ein verfehlter Netzschwung Ausdauer?',
    a: 'Vor Patch 1.1.41 war das so, ist aber jetzt behoben. Bestätigt über offizielle Patch-Notes: 1.1.41 behebt, dass das Netz bei verfehlten Schwüngen Energie verbrauchte, sodass ein Fehlversuch beim Fangen eines Kleintiers unter dem aktuellen Patch keine Ausdauer mehr kostet.',
  },
  'does-1-1-41-fix-decorate-mode-item-loss': {
    q: 'Behebt Patch 1.1.41, dass hochwertige Gegenstände im Dekorationsmodus verschwinden?',
    a: 'Ja, bestätigt über offizielle Patch-Notes: 1.1.41 behebt ein Problem, bei dem im Dekorationsmodus platzierte hochwertige Gegenstände nicht aus dem Inventar entfernt wurden, was Spielern versehentlich ermöglichte, hochwertigen Bestand zu duplizieren.',
    more: ['Derselbe Patch behob auch ein verwandtes Handwerksproblem, bei dem Zutaten ohne Qualitätsbewertung im Inventar blieben, wenn sie zur Herstellung höherstufiger Gegenstände verwendet wurden.'],
  },
  'does-1-1-41-fix-orlock-bench-interaction': {
    q: 'Behebt Patch 1.1.41, dass Orlock auf einer Bank schwer ansprechbar ist?',
    a: 'Ja, bestätigt über offizielle Patch-Notes: 1.1.41 behebt, dass Orlock schwer ansprechbar war, während er auf einer Bank saß, zusammen mit einem Fix dafür, dass die Krönungszeremonie beim Moonlight Ball zu lange brauchte, um zu starten.',
  },
  'does-1-1-41-fix-hellkitten-dig-spots': {
    q: 'Behebt Patch 1.1.41 das Graben nahe der Küste in Hellkitten-Form?',
    a: 'Ja, bestätigt über offizielle Patch-Notes: 1.1.41 behebt, dass man Grabstellen nahe der Küste nicht ausgraben konnte, während man als Hellkitten verwandelt war.',
  },
  'does-1-1-41-fix-cutscene-blocking-bugs': {
    q: 'Behebt Patch 1.1.41 Zwischensequenzen, die andere Ereignisse blockieren, wie Tods Antike-Uhr-Szene?',
    a: 'Ja, bestätigt über offizielle Patch-Notes: 1.1.41 behebt, dass die Zwischensequenzen "Crow Introduction", "Dead Crops" und "Keg" verhinderten, dass andere Zwischensequenzen auf dem eigenen Grundstück ausgelöst wurden — einschließlich, als benanntes Beispiel, Tods Übergabe der Antiken Uhr und einiger NPC-Herz-Ereignisse.',
  },
  'does-1-1-41-fix-aras-heart-event-marker': {
    q: 'Behebt Patch 1.1.41, dass Aras\u2019 Herz-Ereignis-Marker am falschen Ort erscheint?',
    a: 'Ja, bestätigt über offizielle Patch-Notes: 1.1.41 behebt, dass Aras\u2019 Herz-Ereignis-Funkelmarker beim Schneiderladen statt in der Stadt erschien, was Spieler in die Irre geführt hatte, wohin sie gehen sollten.',
  },
  'what-is-the-current-version-per-platform': {
    q: 'Was ist die aktuelle Moonlight-Peaks-Versionsnummer auf jeder Plattform?',
    a: 'Bestätigt von der offiziellen Versionsübersicht, Stand dieser Schreibung: Steam liegt bei 1.1.41 (weltweit live), während Nintendo Switch, Nintendo Switch 2 und Google Play Games bei 1.1.3 liegen.',
    more: ['Versionsnummern sind über Plattformen hinweg nicht direkt eins-zu-eins vergleichbar — die plattformspezifischen Patch-Notes prüfen, statt anzunehmen, dass eine höhere Steam-Nummer bedeutet, Steam habe strikt mehr Inhalt oder Fixes als Konsolen-Builds.'],
  },
};











