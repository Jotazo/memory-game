import { GameThemes, GridSizes } from "../enums";
import { GameTheme, GridSizes as TGridSizes } from "../types";
import { MemoryItem } from "../interfaces/MemoryItem";

import ICONS from "../components/icons/iconsArr";

const GRID_LIMIT = {
  [GridSizes.Small]: 8,
  [GridSizes.Big]: 18,
};

const RANDOM_LIMIT = 20;

const getRandomMemoryItems = (gridSize: TGridSizes, gameType: GameTheme) => {
  const randomPairedValues: number[] = [];
  const randomMemoryItems: MemoryItem[] = [];
  for (let i = 0; i < GRID_LIMIT[gridSize]; i++) {
    const randomValue = getRandomPairedValue(randomPairedValues);

    const [memoryItemOne, memoryItemTwo]: MemoryItem[] =
      getMemoryItems(randomValue);
    randomPairedValues.push(randomValue);

    if (gameType === GameThemes.Icons) {
      memoryItemOne.element = ICONS[i];
      memoryItemTwo.element = ICONS[i];
    }

    randomMemoryItems.push(memoryItemOne);
    randomMemoryItems.push(memoryItemTwo);
  }

  return randomMemoryItems;
};

const getRandomPairedValue = (actualPairedValues: number[]): number => {
  const randomValue = Math.floor(Math.random() * RANDOM_LIMIT);
  if (actualPairedValues.includes(randomValue))
    return getRandomPairedValue(actualPairedValues);
  return randomValue;
};

const getMemoryItems = (randomValue: number): MemoryItem[] => [
  getMemoryItem(randomValue),
  getMemoryItem(randomValue),
];

const getMemoryItem = (randomValue: number): MemoryItem => ({
  id: crypto.randomUUID(),
  element: randomValue,
  isClicked: false,
  isPaired: false,
  pairedValue: randomValue,
  position: [0, 0],
});

export default getRandomMemoryItems;
