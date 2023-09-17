import { MemoryItem } from "../interfaces/MemoryItem";
import { GameTheme, GridSizes as TGridSizes } from "../types";

import { GameThemes, GridSizes } from "../enums";

import {
  GRID_BIG,
  GRID_SMALL,
  NUM_ICONS,
  RANDOM_NUMS_LIMIT,
} from "../constants";

import ICONS from "../components/icons/iconsArr";

const GRID_LIMIT = {
  [GridSizes.Small]: GRID_SMALL,
  [GridSizes.Big]: GRID_BIG,
};

const RANDOM_LIMIT = {
  [GameThemes.Numbers]: RANDOM_NUMS_LIMIT,
  [GameThemes.Icons]: NUM_ICONS,
};

const getRandomMemoryItems = (gridSize: TGridSizes, gameType: GameTheme) => {
  const randomPairedValues: number[] = [];
  const randomMemoryItems: MemoryItem[] = [];
  for (let i = 0; i < GRID_LIMIT[gridSize]; i++) {
    const randomValue = getRandomPairedValue(randomPairedValues, gameType);

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

const getRandomPairedValue = (
  actualPairedValues: number[],
  gameType: GameTheme
): number => {
  const randomValue = Math.floor(Math.random() * RANDOM_LIMIT[gameType]);
  if (actualPairedValues.includes(randomValue))
    return getRandomPairedValue(actualPairedValues, gameType);
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
