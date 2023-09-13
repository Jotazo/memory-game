import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH_PORTRAIT = 412;

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_MAX_WIDTH_PORTRAIT
  );

  const handleResize = () => {
    setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH_PORTRAIT);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;
