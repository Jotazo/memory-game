import { MemoryItem } from "../interfaces/MemoryItem";
import { MemoryBoard } from "../types";

const handleItemsMatched = (
  board: MemoryBoard,
  itemsClicked: MemoryItem[],
  isPaired: boolean = false
) => {
  itemsClicked.forEach((itemClicked) => {
    itemClicked.isClicked = false;
    itemClicked.isPaired = isPaired;
    board[itemClicked.position[0]][itemClicked.position[1]] = itemClicked;
  });
};

export default handleItemsMatched;
