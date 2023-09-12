import { GridSizes } from "../enums";
import { GridSizes as TGridSizes } from "../types";
import { MemoryItem } from "../interfaces/MemoryItem";

const GRID_LIMIT = {
  [GridSizes.Small]: 8,
  [GridSizes.Big]: 18,
};

const RANDOM_LIMIT = 20;

const getRandomMemoryItems = (gridSize: TGridSizes) => {
  const randomPairedValues: number[] = [];
  const randomMemoryItems: MemoryItem[] = [];
  for (let i = 0; i < GRID_LIMIT[gridSize]; i++) {
    const randomValue = getRandomPairedValue(randomPairedValues);

    const [memoryItemOne, memoryItemTwo]: MemoryItem[] =
      getMemoryItems(randomValue);
    randomPairedValues.push(randomValue);
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
});

export default getRandomMemoryItems;