// src/i18n/demo-de.ts
// German translation overlay for demo/[slug] detail pages, merged onto the English base data
// (data/demo.ts) in src/pages/de/demo/[slug].astro.
export const demoDe: Record<string, { title: string; dek: string; body: string[]; faq?: { q: string; a: string }[] }> = {
  'whats-in-the-demo': {
    title: 'Was in der Moonlight-Peaks-Demo steckt',
    dek: 'Was du in der kostenlosen Demo tatsächlich tun kannst.',
    body: [
      'Die kostenlose Demo lässt dich deinen Vampir erstellen und einen Ausschnitt des gemütlichen Lebens ausprobieren — inklusive Angeln, Blumenarrangements und Sticken, plus frühe Interaktionen mit den Stadtbewohnern.',
      'Sie ist ein Vorgeschmack auf das volle Erlebnis, nicht das ganze Spiel; die Vollversion ist seit dem 7. Juli 2026 erhältlich.',
    ],
    faq: [{ q: 'Ist die Moonlight-Peaks-Demo kostenlos?', a: 'Ja — sie ist kostenlos auf Steam und im Nintendo eShop (auch auf Switch 2) erhältlich.' }],
  },
  'how-to-download-the-demo': {
    title: 'Wie man die Moonlight-Peaks-Demo herunterlädt',
    dek: 'Wo du die kostenlose Demo auf Steam und Switch bekommst.',
    body: [
      'Auf Steam öffne die Moonlight-Peaks-Shopseite und nutze den Demo-Download-Button; auf Nintendo findest du die Demo im eShop, wo sie auf Switch und Switch 2 spielbar ist.',
      'Die Demo ist auf beiden Plattformen kostenlos.',
    ],
    faq: [{ q: 'Gibt es eine Moonlight-Peaks-Demo auf Switch?', a: 'Ja — die kostenlose Demo ist im Nintendo eShop erhältlich und auf Switch sowie Switch 2 spielbar.' }],
  },
  'demo-vs-full-game': {
    title: 'Moonlight-Peaks-Demo vs. Vollversion',
    dek: 'Was übernommen wird und was die Vollversion hinzufügt.',
    body: [
      'Der Demo-Fortschritt wird nicht in die Vollversion übertragen — die volle Veröffentlichung startet neu.',
      'Die Vollversion geht weit über den Ausschnitt der Demo hinaus, mit der kompletten Stadt, den sieben Familien, Landwirtschaft, Magie, Romanze und Heirat. Vollständige Details gibt es seit dem Release am 7. Juli 2026.',
    ],
    faq: [{ q: 'Wird der Moonlight-Peaks-Demo-Fortschritt übernommen?', a: 'Nein — die Vollversion startet neu.' }],
  },
};
