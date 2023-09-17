import { GridSizes } from "../../enums";
import { useMemoryGameStore } from "../../store/useMemoryGameStore";

function withCustomClasses<P>(WrappedComponent: React.ComponentType<P>) {
  return function WithCustomClasses(props: P) {
    const gridSizeSeleted = useMemoryGameStore((state) => state.gridSelected);
    const mdStyles = gridSizeSeleted === GridSizes.Small ? "md:min-h-[102px]" : "md:min-h-[86px]";
    const lgStyles = gridSizeSeleted === GridSizes.Small ? "" : "";
    return (
      <WrappedComponent customClasses={`${mdStyles} ${lgStyles}`} {...props} />
    );
  };
}

export default withCustomClasses;
