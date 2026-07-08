export const SITE = {
  name: 'Moonlight Peaks Wiki & Guide',
  brand: 'Moonlight Peaks Wiki & Guide',
  url: 'https://moonlightpeakswiki.com',
  updated: 'June 2026',
  contact: 'norris.hui@gmail.com',
};

// Google Analytics 4 measurement ID. Paste your own ID here (looks like 'G-XXXXXXXXXX').
// While this is an empty string, NO analytics/consent code loads at all — the site behaves
// exactly as before. As soon as you fill it in, GA4 loads in consent-gated mode (see Base.astro):
// nothing is sent until the visitor accepts the cookie banner.
export const GA_MEASUREMENT_ID = 'G-SBKWNJHDT1';
export const ADSENSE_CLIENT_ID = 'ca-pub-9505220977121599';

export const GAME = {
  title: 'Moonlight Peaks',
  developer: 'Little Chicken Game Company',
  publisher: 'XSEED Games',
  releaseISO: '2026-07-07T00:00:00',
  releaseLabel: 'July 7, 2026',
  shortReleaseLabel: 'July 7, 2026',
  releaseNote: 'The official release date is July 7, 2026 across Steam, Nintendo Switch, Switch 2, and Android; the Steam store page may show July 6 in some regions because of timezone and unlock timing.',
  price: '$34.99',
  launchDiscount: '15% off across all platforms for the first 7 days after launch',
  platforms: ['Steam (PC & Mac)', 'Steam Deck', 'Nintendo Switch', 'Nintendo Switch 2', 'Android (Google Play)'],
  demo: 'Free demo on Steam (PC & Mac) and Nintendo Switch / Switch 2',
  languages: ['English', 'German', 'Japanese', 'Korean', 'Simplified Chinese', 'Traditional Chinese'],
};
