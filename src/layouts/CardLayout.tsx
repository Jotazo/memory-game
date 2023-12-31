import React from "react";

const CardLayout = ({
  children,
  customClasses = "",
}: {
  children: React.ReactNode;
  customClasses?: string;
}) => {
  return (
    <div
      className={`bg-softWhite p-6 md:p-12 md:py-16 rounded-xl w-[90%] md:max-w-2xl ${customClasses}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
