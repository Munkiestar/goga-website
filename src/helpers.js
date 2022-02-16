import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// on route change always show top
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export { ScrollToTop, getYear };
