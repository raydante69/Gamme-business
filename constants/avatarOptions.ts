export const SKIN_COLORS = [
  { id: 'light', name: 'Beige' },
  { id: 'brown', name: 'Métisse' },
  { id: 'darkBrown', name: 'Noir' },
];

export const MOUTHS = [
  { id: 'smile', name: 'Sourire' },
  { id: 'tongue', name: 'Heureux' },
  { id: 'twinkle', name: 'Malicieux' },
  { id: 'default', name: 'Normal' },
];

export const EYEBROWS = [
  { id: 'default', name: 'Normal' },
  { id: 'raisedExcited', name: 'Excité' },
  { id: 'upDown', name: 'Sceptique' },
];

export const EYES = [
  { id: 'happy', name: 'Joyeux' },
  { id: 'default', name: 'Normal' },
  { id: 'wink', name: 'Clin d\'œil' },
];

export const ACCESSORIES = [
  { id: 'blank', name: 'Aucun' },
  { id: 'prescription02', name: 'Lunettes' },
  { id: 'round', name: 'Lunettes rondes' },
  { id: 'sunglasses', name: 'Lunettes de soleil' },
];

export const HAIRSTYLES = [
  { id: 'shortFlat', name: 'Court', levelRequired: 1 },
  { id: 'shortWaved', name: 'Court ondulé', levelRequired: 1 },
  { id: 'theCaesar', name: 'César', levelRequired: 1 },
  { id: 'theCaesarAndSidePart', name: 'César avec raie', levelRequired: 1 },
  { id: 'longButNotTooLong', name: 'Long', levelRequired: 1 },
  { id: 'bob', name: 'Carré', levelRequired: 1 },
  { id: 'bun', name: 'Chignon', levelRequired: 1 },
  { id: 'curly', name: 'Bouclé', levelRequired: 1 },
  { id: 'dreads', name: 'Tresses plaquées', levelRequired: 2 },
  { id: 'fro', name: 'Afro', levelRequired: 3 },
  { id: 'shavedSides', name: 'Rasé sur les côtés', levelRequired: 4 },
  { id: 'straight02', name: 'Lisse', levelRequired: 5 },
  { id: 'shortRound', name: 'Arrondi', levelRequired: 6 },
];

export const CLOTHING = [
  { id: 'shirtCrewNeck', name: 'T-shirt col rond', levelRequired: 1 },
  { id: 'shirtVNeck', name: 'T-shirt col V', levelRequired: 1 },
  { id: 'collarAndSweater', name: 'Pull et col', levelRequired: 1 },
  { id: 'hoodie', name: 'Sweat à capuche', levelRequired: 1 },
  { id: 'overall', name: 'Salopette', levelRequired: 1 },
  { id: 'blazerAndShirt', name: 'Blazer et chemise', levelRequired: 3 },
  { id: 'blazerAndSweater', name: 'Blazer et pull', levelRequired: 5 },
  { id: 'graphicShirt', name: 'T-shirt graphique', levelRequired: 7 },
];

export const CLOTHING_COLORS = [
  { id: '262e33', name: 'Noir' },
  { id: '65c9ff', name: 'Bleu' },
  { id: 'ff5c5c', name: 'Rouge' },
  { id: 'a7ffc4', name: 'Vert' },
  { id: 'ffffb1', name: 'Jaune' },
  { id: 'e6e6e6', name: 'Gris' },
  { id: 'ffffff', name: 'Blanc' },
];

export const getSafeAvatarUrl = (url: string | null | undefined): string | null => {
  if (!url) return null;
  if (!url.includes('avataaars')) return url;
  
  try {
    const parsedUrl = new URL(url);
    let changed = false;
    
    let top = parsedUrl.searchParams.get('top');
    if (top === 'shortHair') { parsedUrl.searchParams.set('top', 'shortFlat'); changed = true; }
    if (top === 'longHair') { parsedUrl.searchParams.set('top', 'longButNotTooLong'); changed = true; }
    if (top === 'theCaesar') { parsedUrl.searchParams.set('top', 'shortRound'); changed = true; }
    
    let skinColor = parsedUrl.searchParams.get('skinColor');
    if (skinColor === 'light') { parsedUrl.searchParams.set('skinColor', 'ffdbb4'); changed = true; }
    if (skinColor === 'brown') { parsedUrl.searchParams.set('skinColor', 'd08b5b'); changed = true; }
    if (skinColor === 'darkBrown') { parsedUrl.searchParams.set('skinColor', '614335'); changed = true; }
    
    let mouth = parsedUrl.searchParams.get('mouth');
    if (mouth === 'happy') { parsedUrl.searchParams.set('mouth', 'tongue'); changed = true; }
    
    if (changed) {
      return parsedUrl.toString();
    }
    return url;
  } catch (e) {
    return url;
  }
};

export const generateAvatarUrl = (options: any) => {
  const params = new URLSearchParams();
  params.append('backgroundColor', 'transparent');
  
  let skinColor = options.skinColor;
  if (skinColor === 'light') skinColor = 'ffdbb4';
  if (skinColor === 'brown') skinColor = 'd08b5b';
  if (skinColor === 'darkBrown') skinColor = '614335';
  if (skinColor) params.append('skinColor', skinColor);
  
  let mouth = options.mouth;
  if (mouth === 'happy') mouth = 'tongue';
  if (mouth) params.append('mouth', mouth);
  
  if (options.eyes) params.append('eyes', options.eyes);
  if (options.eyebrows) params.append('eyebrows', options.eyebrows);
  
  let top = options.top;
  if (top === 'shortHair') top = 'shortFlat';
  if (top === 'longHair') top = 'longButNotTooLong';
  if (top) params.append('top', top);
  
  if (options.clothing) params.append('clothing', options.clothing);
  if (options.clothingColor) params.append('clothingColor', options.clothingColor);
  if (options.accessories && options.accessories !== 'blank') params.append('accessories', options.accessories);
  
  return "https://api.dicebear.com/7.x/avataaars/svg?" + params.toString();
};
