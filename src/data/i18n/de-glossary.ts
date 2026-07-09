// src/data/i18n/de-glossary.ts
// Centralized German terminology for the /de/ MVP. Every entry records its confidence basis —
// per this task's explicit rule, nothing here is claimed as "official in-game German UI text"
// unless verified, since Moonlight Peaks has no confirmed official German localization in any
// repository source data found so far.

export type GlossaryEntry = {
  en: string;
  de: string;
  sourceBasis: 'standard-german' | 'existing-repo-pattern' | 'unverified-guess';
  officialVerified: boolean;
  note?: string;
};

export const glossary: GlossaryEntry[] = [
  { en: 'romance', de: 'Romanze', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'dating', de: 'verabreden / daten', sourceBasis: 'standard-german', officialVerified: false, note: '"daten" is a common gaming-anglicism in German; used alongside the native verb.' },
  { en: 'marriage', de: 'Heirat', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'romanceable', de: 'romanzefähig / zum Verlieben verfügbar', sourceBasis: 'unverified-guess', officialVerified: false, note: 'No standard single German gaming term found; using a descriptive phrase rather than inventing an "official" one.' },
  { en: 'character', de: 'Charakter', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'quest', de: 'Quest', sourceBasis: 'standard-german', officialVerified: false, note: 'Anglicism "Quest" is standard in German gaming contexts and typically preferred over "Aufgabe".' },
  { en: 'side quest', de: 'Nebenquest', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'walkthrough', de: 'Komplettlösung', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'location', de: 'Ort / Ortschaft', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'unlock', de: 'freischalten', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'requirement', de: 'Voraussetzung', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'gift', de: 'Geschenk', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'loved gift', de: 'Lieblingsgeschenk', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'liked gift', de: 'gemochtes Geschenk', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'item', de: 'Gegenstand / Item', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'crop', de: 'Feldfrucht / Ernte', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'farming', de: 'Landwirtschaft / Farmen', sourceBasis: 'standard-german', officialVerified: false, note: '"Farmen" (verb) is common gaming usage; "Landwirtschaft" is the formal noun.' },
  { en: 'stamina', de: 'Ausdauer', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'energy', de: 'Energie', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'controller', de: 'Controller', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'save (verb)', de: 'speichern', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'loading screen', de: 'Ladebildschirm', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'deck', de: 'Deck', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'card', de: 'Karte', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'mining', de: 'Bergbau / Minen', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'ore', de: 'Erz', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'known issue', de: 'Bekanntes Problem', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'workaround', de: 'Workaround / Umgehungslösung', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'demo', de: 'Demo', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'progress', de: 'Spielstand / Fortschritt', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'multiplayer', de: 'Multiplayer / Mehrspieler', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'co-op', de: 'Koop', sourceBasis: 'standard-german', officialVerified: false },
  { en: 'confirmed (status label)', de: 'Bestätigt', sourceBasis: 'existing-repo-pattern', officialVerified: false, note: 'Must preserve the same confidence level as English "Confirmed" — never upgraded from a lower-confidence label.' },
  { en: 'community-reported (status label)', de: 'Community-berichtet', sourceBasis: 'existing-repo-pattern', officialVerified: false },
  { en: 'player-reported (status label)', de: 'Von Spielern berichtet', sourceBasis: 'existing-repo-pattern', officialVerified: false },
  { en: 'unverified (status label)', de: 'Nicht verifiziert', sourceBasis: 'existing-repo-pattern', officialVerified: false },
  { en: 'no confirmed workaround', de: 'Keine bestätigte Lösung bekannt', sourceBasis: 'existing-repo-pattern', officialVerified: false },
];

// Proper nouns kept unchanged (per Phase 6) — no verified official German localization exists
// for this game in any source found, so English proper nouns are preserved and explained in
// German prose rather than translated.
export const preservedProperNouns = [
  'Moonlight Peaks', 'Cave of Echoes', 'Nokturna', 'Hellkitten', 'Vampster', 'Soul Blobs',
  'Blood Grapes', 'Aquaflux', 'Webb of Wonders', 'Howling Hammer', 'A Bridge Too Far',
  'Ambrosia', 'Khazan', 'Hosu', 'Henderson',
];
