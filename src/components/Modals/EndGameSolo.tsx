import CardLayout from "../../layouts/CardLayout";
import Box from "../Box";
import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const EndGameSolo = () => {
  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-zinc-950 opacity-70 flex justify-center items-center">
      <CardLayout customClasses="flex flex-col gap-3">
        <h3 className="text-center">You did it!</h3>
        <p className="text-center text-sm text-shadowBlue">
          Game over! Here’s how you got on…
        </p>
        <Box direction="row" title="Time Elapsed">
          1:53
        </Box>
        <Box direction="row" title="Moves Taken">
          39 Moves
        </Box>
        <ButtonPrimary text="Restart" />
        <ButtonSecondary text="Back to Main Menu" />
      </CardLayout>
    </div>
  );
};

export default EndGameSolo;
