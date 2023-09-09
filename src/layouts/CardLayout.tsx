import React from "react";

const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-softWhite p-6 md:p-12 rounded-xl w-[90%] max-w-xl">
      {children}
    </div>
  );
};

export default CardLayout;
