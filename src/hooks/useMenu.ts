import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [noTransition, setNoTransition] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  let location = useLocation();

  const toggleMenu = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setNoTransition(true);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setNoTransition(false);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [width]);

  return [open, toggleMenu, location, noTransition] as const;
};

export { useMenu };
