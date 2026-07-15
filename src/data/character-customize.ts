export type CharacterCustomizeCategory = 'Hair' | 'Face';

export type CharacterCustomizeGroup = {
  category: CharacterCustomizeCategory;
  title: string;
  slug: string;
  columns: number;
  items: CharacterCustomizeItem[];
};

export type CharacterCustomizeItem = {
  id: string;
  name: string;
  category: CharacterCustomizeCategory;
  group: string;
  icon: string;
};

const icon = (slug: string) => `/images/character-customize/${slug}.png`;

const numberedItems = (
  prefix: string,
  label: string,
  count: number,
  category: CharacterCustomizeCategory,
  group: string,
): CharacterCustomizeItem[] =>
  Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    const id = `${prefix}-${number}`;

    return {
      id,
      name: `${label} ${number}`,
      category,
      group,
      icon: icon(id),
    };
  });

export const characterCustomizeGroups: CharacterCustomizeGroup[] = [
  {
    category: 'Hair',
    title: 'Hair Styles',
    slug: 'hair-styles',
    columns: 7,
    items: numberedItems('hair-style', 'Hair Style', 35, 'Hair', 'Hair Styles'),
  },
  {
    category: 'Hair',
    title: 'Facial Hair',
    slug: 'facial-hair',
    columns: 6,
    items: numberedItems('facial-hair', 'Facial Hair', 30, 'Hair', 'Facial Hair'),
  },
  {
    category: 'Face',
    title: 'Hats',
    slug: 'hats',
    columns: 11,
    items: numberedItems('hat', 'Hat', 22, 'Face', 'Hats'),
  },
];

export const characterCustomizeItems = characterCustomizeGroups.flatMap((group) => group.items);
