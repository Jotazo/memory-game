import { MemoryItem } from "../interfaces/MemoryItem";
import { MemoryBoard } from "../types";

const handleItemsMatched = (
  memoryGame: MemoryBoard,
  memoryGameUpdated: MemoryBoard
) => {
  const clickedItems = getClickedItems(memoryGameUpdated);
  const isPair = clickedItems[0].pairedValue === clickedItems[1].pairedValue;

  if (isPair) {
    clickedItems[0].isPaired = true;
    clickedItems[1].isPaired = true;
  }

  clickedItems[0].isClicked = false;
  clickedItems[1].isClicked = false;

  memoryGameUpdated = memoryGame.map((row) =>
    row.map((memoryItem) =>
      memoryItem.id === clickedItems[0].id
        ? clickedItems[0]
        : memoryItem.id === clickedItems[1].id
        ? clickedItems[1]
        : memoryItem
    )
  );
};

const getClickedItems = (memoryGame: MemoryBoard): MemoryItem[] => {
  const clickedItems: MemoryItem[] = [];
  memoryGame.forEach((row) => {
    row.forEach(
      (memoryItem) => memoryItem.isClicked && clickedItems.push(memoryItem)
    );
  });
  return clickedItems;
};

export default handleItemsMatched;
