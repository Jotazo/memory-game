import { MemoryBoard } from "../types";

const checkHowManyClicks = (memoryGame: MemoryBoard) => {
  let elementsClicked = 0;
  memoryGame.forEach((row) => {
    row.forEach((memoryItem) => memoryItem.isClicked && elementsClicked++);
  });
  return elementsClicked;
};

export default checkHowManyClicks;
