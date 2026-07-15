// src/i18n/platforms-de.ts
export type PlatformTrDe = { title: string; dek: string; body?: string[]; faq?: { q: string; a: string }[] };

export const platformsDe: Record<string, PlatformTrDe> = {
  'steam-deck': {
    title: 'Moonlight Peaks auf Steam Deck', dek: 'Moonlight Peaks ist jetzt auf Steam für PC und Mac erhältlich, also auch auf Steam Deck spielbar.',
    body: [
      'Moonlight Peaks ist auf Steam für Windows und Mac verfügbar, läuft also auf dem Steam Deck wie andere Steam-Titel.',
      'Ein bestätigtes Launch-Week-Problem: manche Spieler erleben einen Absturz beim Start auf dem Steam Deck. Der gemeldete Fix ist, das Kompatibilitätstool in den Eigenschaften → Kompatibilitätseinstellungen des Spiels auf Proton 9.0-4 umzustellen. Eine offizielle Valve-"Steam-Deck-verifiziert"-Bewertung ist hier noch nicht bestätigt.',
    ],
    faq: [{ q: 'Ist Moonlight Peaks Steam-Deck-verifiziert?', a: 'Eine offizielle Valve-"Steam-Deck-verifiziert"-Bewertung ist hier noch nicht bestätigt. Das Spiel ist über Steam auf dem Deck spielbar; bei einem Startabsturz ist der Wechsel zu Proton 9.0-4 der gemeldete Fix.' }],
  },
  'switch': {
    title: 'Moonlight Peaks auf Nintendo Switch', dek: 'Moonlight Peaks ist jetzt auf der originalen Nintendo Switch erhältlich — Preis, kostenlose Demo und das Switch-2-Upgrade.',
    body: [
      'Moonlight Peaks erschien am 7. Juli 2026 auf der originalen Nintendo Switch, und die kostenlose Demo ist im eShop verfügbar.',
      'Es gibt auch eine separate, verbesserte Nintendo-Switch-2-Edition; Spielern, die auf der originalen Switch gekauft haben, wurde mitgeteilt, dass ein Switch-zu-Switch-2-Upgrade-Pass verfügbar sein wird.',
      'Bestätigt zum Release: volle Controller-Unterstützung von Anfang an — Rezensenten beschreiben das Spiel als von Design her controllerorientiert, was gut zum tragbaren Switch-Spiel passt.',
    ],
    faq: [{ q: 'Ist Moonlight Peaks auf der originalen Nintendo Switch?', a: 'Ja — es erschien am 7. Juli 2026 auf der originalen Switch, und die kostenlose Demo ist im eShop. Eine separate, verbesserte Switch-2-Edition ist ebenfalls verfügbar.' }],
  },
  'switch-2': {
    title: 'Moonlight Peaks auf Nintendo Switch 2', dek: 'Eine native Nintendo-Switch-2-Edition ist für 39,99 $ bestätigt — hier ist, was Rezensenten im tragbaren Modus fanden.',
    body: [
      'Moonlight Peaks hat eine eigene Nintendo-Switch-2-Edition neben der originalen Switch-Version, mit einem Preis von 39,99 $ (gegenüber 34,99 $ auf Steam, Switch und Android), und die kostenlose Demo ist auf Switch 2 spielbar.',
      'Ein Switch-zu-Switch-2-Upgrade-Pass wurde für Spieler erwähnt, die auf der originalen Switch kaufen.',
      'Bestätigt durch Launch-Week-Rezensionen: die Switch-2-Edition lief im tragbaren Modus außergewöhnlich gut, mit solider, gut organisierter Controller-Belegung — eine der stärkeren Handheld-Erfahrungen unter den bestätigten Plattformen.',
    ],
    faq: [{ q: 'Gibt es eine Switch-2-Version von Moonlight Peaks?', a: 'Ja — eine native Nintendo-Switch-2-Edition ist für 39,99 $ bestätigt, und die kostenlose Demo ist auf Switch 2 spielbar. Rezensenten fanden, dass sie im tragbaren Modus außergewöhnlich gut lief.' }],
  },
  'android': {
    title: 'Moonlight Peaks auf Android (Google Play)', dek: 'Moonlight Peaks ist jetzt auf Android über Google Play erhältlich — ein einmaliger Kauf, ohne Gacha oder In-App-Käufe.',
    body: [
      'Moonlight Peaks erschien am 7. Juli 2026 auf Android über Google Play (Google Play Games) und ist damit einer der wenigen Cozy-Life-Sims dieses Umfangs, die am ersten Tag auf Mobilgeräten erscheinen, zum gleichen Preis wie Steam und Switch bei 34,99 $.',
      'Bestätigt: dies ist ein einmaliger Kauf ohne Gacha-Mechaniken, Energie-Timer oder In-App-Käufe — das vollständige Spiel wird zu diesem einen Preis freigeschaltet, genau wie auf PC oder Konsole.',
      'Es wurde keine iOS-Version angekündigt; Android über Google Play ist die einzige bestätigte mobile Plattform.',
      'Hier noch nicht unabhängig bestätigt: genaue Mindestgeräteanforderungen und vollständige Details zum Touch-Steuerungsschema.',
    ],
    faq: [
      { q: 'Ist Moonlight Peaks auf iOS oder iPhone?', a: 'Es wurde keine iOS-Version angekündigt. Auf Mobilgeräten ist Moonlight Peaks über Android via Google Play verfügbar.' },
      { q: 'Hat die Moonlight-Peaks-Mobilversion Gacha oder In-App-Käufe?', a: 'Nein, bestätigt: es ist ein einmaliger Kauf mit vollständig freigeschaltetem Spiel, ohne Gacha, Energie-Timer oder In-App-Käufe.' },
    ],
  },
};
