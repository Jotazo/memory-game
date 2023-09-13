import { MemoryItem } from "../interfaces/MemoryItem";
import { MemoryBoard, GridSizes as TGridSizes } from "../types";

import getRandomMemoryItems from "./getRandomMemoryItems";

const getMemoryGame = (
  gridSize: TGridSizes,
): MemoryItem[][] => {
  const randomMemoryItems: MemoryItem[] = getRandomMemoryItems(gridSize);
  shuffleMemoryItems(randomMemoryItems);

  const memoryGame: MemoryBoard = getMemoryBoard(gridSize, randomMemoryItems);

  return memoryGame;
};

const shuffleMemoryItems = (memoryGame: MemoryItem[]) => {
  for (let i = memoryGame.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [memoryGame[i], memoryGame[j]] = [memoryGame[j], memoryGame[i]];
  }
};

const getMemoryBoard = (
  gridSize: TGridSizes,
  randomMemoryItems: MemoryItem[]
) => {
  const gridSizeNum = Number(gridSize[0]);
  const memoryGame: MemoryBoard = [];
  let auxIndex = 0;
  for (let i = 0; i < gridSizeNum; i++) {
    const auxArr = [];
    for (let j = 0; j < gridSizeNum; j++) {
      auxArr.push(randomMemoryItems[auxIndex]);
      auxIndex++;
    }
    memoryGame.push([...auxArr]);
    auxArr.length = 0;
  }

  return memoryGame;
};

export default getMemoryGame;
