import { GridSizes } from "../../enums";
import { useMemoryGameStore } from "../../store/useMemoryGameStore";

function withCustomClasses<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithCustomClasses(props: P) {
    const gridSizeSeleted = useMemoryGameStore((state) => state.gridSelected);
    const mdStyles =
      gridSizeSeleted === GridSizes.Small
        ? "md:min-h-[93px] md:min-w-[95px]"
        : "md:min-h-[86px] md:w-[90px]";
    const lgStyles = gridSizeSeleted === GridSizes.Small ? "" : "lg:min-h-[74px]";
    return (
      <WrappedComponent customClasses={`md:w-[99px] ${mdStyles} ${lgStyles}`} {...props} />
    );
  };
}

export default withCustomClasses;
