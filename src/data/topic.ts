// Shared shape for topic-cluster pages (Locations, Families, Activities).
// Each data file exports a `section` (hub meta) and an array of `TopicItem`.
// RULE: body/dek must be first-party-sourced or honestly labelled. status: confirmed | reported | datamined | expected.

export type TopicStatus = 'confirmed' | 'reported' | 'datamined' | 'expected';
export type TopicLink = { label: string; href: string };
export type TopicFaq = { q: string; a: string };

export type TopicItem = {
  slug: string;
  title: string;
  tag: string;
  dek: string;
  image?: string;
  status?: TopicStatus;
  body: string[];
  // Optional structured H2 sections, used instead of `body` when a page needs explicit,
  // named subsections (e.g. "How to Unlock X" / "Common Problems") rather than flat paragraphs.
  sections?: { title: string; body: string }[];
  related?: TopicLink[];
  faq?: TopicFaq[];
  // Optional CTR-focused overrides for the <title>/<meta description> tags specifically.
  // Falls back to the auto-generated title (`${title} - ${section.label}`) and `dek` when absent.
  // Use when search-console data shows high impressions but poor CTR for a specific item.
  seoTitle?: string;
  seoDescription?: string;
};

export type TopicSection = {
  base: string;        // '/locations'
  label: string;       // 'Locations'
  eyebrow: string;     // 'World'
  heading: string;     // H1 HTML, may contain <em>
  schemaType: string;  // 'Place' | 'Thing'
  title: string;       // <title>
  description: string; // meta description
  intro: string;       // hub intro paragraph
};
