import { useState, useEffect } from "react";

export const useScroll = () => {
  const [y, setY] = useState(0);

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", watch);
    };
    watchScroll();

    return () => {
      window.removeEventListener("scroll", watch);
    };
  }, []);

  const watch = () => setY(window.scrollY);

  return { scrollY: y };
};
