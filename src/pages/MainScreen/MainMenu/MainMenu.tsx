import { GameThemes, GridSizes } from "../../../enums";

import { NUM_PLAYERS_BUTTONS } from "../../../constants";

import TitleSection from "./TitleSection";

import {
  ButtonMenuSelection,
  ButtonPrimary,
} from "../../../components/Buttons";

import { useMemoryGameStore } from "../../../store/useMemoryGameStore";

// const MainMenu = ({ startGame }: { startGame: () => void }) => {
const MainMenu = () => {
  const {
    themeSelected,
    playersSelected,
    gridSelected,
    handleTheme,
    handlePlayers,
    handleGrid,
    startGame,
  } = useMemoryGameStore((state) => state);

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <TitleSection text="Select Theme" />
        <div className="grid grid-cols-2 gap-x-3">
          <ButtonMenuSelection
            value={GameThemes.Numbers}
            onClick={handleTheme}
            active={themeSelected === GameThemes.Numbers}
            text={GameThemes.Numbers}
          />
          <ButtonMenuSelection
            value={GameThemes.Icons}
            onClick={handleTheme}
            active={themeSelected === GameThemes.Icons}
            text={GameThemes.Icons}
          />
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <TitleSection text="Number of Players" />
        <div className="grid grid-cols-4 gap-x-3">
          {NUM_PLAYERS_BUTTONS.map((numButton) => (
            <ButtonMenuSelection
              key={numButton}
              value={numButton}
              onClick={handlePlayers}
              active={playersSelected === numButton}
              text={numButton}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <TitleSection text="Grid Size" />
        <div className="grid grid-cols-2 gap-x-3">
          <ButtonMenuSelection
            value={GridSizes.Small}
            onClick={handleGrid}
            active={gridSelected === GridSizes.Small}
            text={GridSizes.Small}
          />
          <ButtonMenuSelection
            value={GridSizes.Big}
            onClick={handleGrid}
            active={gridSelected === GridSizes.Big}
            text={GridSizes.Big}
          />
        </div>
      </section>
      <ButtonPrimary onClick={startGame} text="Start Game" />
    </div>
  );
};

export default MainMenu;
