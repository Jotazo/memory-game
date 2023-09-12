interface Props {
  children: React.ReactNode;
  handleClickItem: () => void;
  isClicked: boolean;
  isPaired: boolean;
}

const GridItem: React.FC<Props> = ({
  children,
  handleClickItem,
  isClicked,
  isPaired,
}) => {
  const circleBg = isClicked
    ? "bg-orange"
    : isPaired
    ? "bg-lightPeriwinkle"
    : "bg-charcoal";

  return (
    <span
      onClick={handleClickItem}
      className={`${circleBg} transition duration-300 text-center rounded-full p-2`}
    >
      {children}
    </span>
  );
};

export default GridItem;
