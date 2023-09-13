import CardLayout from "../../layouts/CardLayout";
import Box from "../Box";
import { ButtonPrimary, ButtonSecondary } from "../Buttons";

const EndGameSolo = () => {
  return (
    <CardLayout customClasses="flex flex-col gap-3 z-10">
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
  );
};

export default EndGameSolo;
