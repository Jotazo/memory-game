import { useState, useEffect } from "react";

const useScreenWidth = () => {
  const [displayWidth, setDisplayWidth] = useState(window.innerWidth);

  const updateDisplayWidth = () => {
    setDisplayWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDisplayWidth);
    return () => window.removeEventListener("resize", updateDisplayWidth);
  }, []);

  return displayWidth;
};

export default useScreenWidth;
