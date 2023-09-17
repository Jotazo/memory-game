const CardFooter = ({
  children,
  title,
  isSelected = false,
  customClasses = "",
}: {
  children: React.ReactNode;
  title: string;
  isSelected?: boolean;
  customClasses?: string;
}) => {
  const bgStyles = isSelected ? "bg-[#FDA214]" : "bg-[#DFE7EC]";
  const textColorTitle = isSelected ? "text-softWhite" : "text-shadowBlue";
  const textColorChildren = isSelected ? "text-softWhite" : "text-charcoal";

  return (
    <article
      className={`${bgStyles} py-2 rounded-lg relative flex flex-col items-center md:p-6 ${customClasses}`}
    >
      {isSelected && (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "18px solid transparent",
            borderRight: "18px solid transparent",
            borderBottom: "25px solid #FDA214",
            position: "absolute",
            top: -18,
            left: "50%",
            transform: "translate(-50%)",
          }}
        ></div>
      )}
      <p className={`text-sm md:text-lg ${textColorTitle}`}>{title}</p>
      <p className={`text-2xl md:text-[2rem] ${textColorChildren}`}>
        {children}
      </p>
    </article>
  );
};

export default CardFooter;
