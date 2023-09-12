import { MemoryItem } from "../interfaces/MemoryItem";
import { MemoryBoard } from "../types";

const getFoundedItem = (memoryGame: MemoryBoard, memoryItemId: string) => {
  let foundedMemoryItem: MemoryItem | undefined;

  memoryGame.forEach((row) => {
    if (foundedMemoryItem) return;
    foundedMemoryItem = row.find((el) => el.id === memoryItemId);
  });

  if (!foundedMemoryItem) throw Error("No se ha encontrado elemento???");

  return foundedMemoryItem;
};

export default getFoundedItem;
