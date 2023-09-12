const Box = ({
  direction = "col",
  title,
  children,
}: {
  direction?: "row" | "col";
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <article
      className={`bg-[#DFE7EC] py-2 flex flex-${direction} justify-between items-center px-4 rounded-md`}
    >
      <p className="text-center text-sm text-shadowBlue">{title}</p>
      <p className="text-center text-xl text-charcoal">{children}</p>
    </article>
  );
};

export default Box;
