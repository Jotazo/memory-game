import { MemoryBoard } from "../types";
import checkHowManyClicks from "./checkHowManyClicks";

const checkHasPairClicked = (memoryGame: MemoryBoard): boolean => {
  return checkHowManyClicks(memoryGame) === 2;
};

export default checkHasPairClicked;
