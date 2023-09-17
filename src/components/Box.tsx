const Box = ({
  direction = "col",
  title,
  children,
  isWinner = false,
}: {
  direction?: "row" | "col";
  title: string;
  children: React.ReactNode;
  isWinner?: boolean;
}) => {
  const bgColor = isWinner ? "bg-charcoal" : "bg-[#DFE7EC]";
  const titleTextColor = isWinner ? "text-softWhite" : "text-shadowBlue";
  const childrenTextColor = isWinner ? "text-softWhite" : "text-charcoal";

  return (
    <article
      className={`${bgColor} py-2 flex flex-${direction} justify-between items-center px-4 md:p-6 rounded-md`}
    >
      <p className={`text-center text-sm md:text-lg ${titleTextColor}`}>{title}</p>
      <p className={`text-center text-xl md:text-[2rem] ${childrenTextColor}`}>{children}</p>
    </article>
  );
};

export default Box;
