import { MemoryBoard } from "../types";

const isGameFinish = (memoryGame: MemoryBoard) => {
  return memoryGame.every((row) => {
    return row.every((memoryItem) => memoryItem.isPaired);
  });
};

export default isGameFinish;
