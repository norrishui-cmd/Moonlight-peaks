import { collectionBySlug } from './collections';

export type CollectionDetailPage = {
  collection: 'fish' | 'critters';
  slug: string;
  name: string;
  icon: string;
  facts: { label: string; value: string }[];
  use: string;
};

const slugify = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const rowsFor = (slug: 'fish' | 'critters') => collectionBySlug.get(slug)?.tableRows ?? [];

const fishRows = rowsFor('fish');
const critterRows = rowsFor('critters').slice(0, 28);

export const fishDetailPages: CollectionDetailPage[] = fishRows.map((row) => ({
  collection: 'fish',
  slug: slugify(row[1]),
  name: row[1],
  icon: row[0],
  facts: [
    { label: 'Location', value: row[2] },
    { label: 'Rarity', value: row[3] },
    { label: 'Spawns during', value: row[4] },
    { label: 'Size', value: row[5] },
    { label: 'Consumption value', value: row[6] },
    { label: 'Sell price', value: row[7] },
  ],
  use: row[8],
}));

export const critterDetailPages: CollectionDetailPage[] = critterRows.map((row) => ({
  collection: 'critters',
  slug: slugify(row[1]),
  name: row[1],
  icon: row[0],
  facts: [
    { label: 'Season', value: row[2] },
    { label: 'Location', value: row[3] },
    { label: 'Type', value: row[4] },
    { label: 'Sells for', value: row[5] },
  ],
  use: row[6],
}));

export const collectionDetailPages = [...fishDetailPages, ...critterDetailPages];
