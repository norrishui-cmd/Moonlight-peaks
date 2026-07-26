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
};





