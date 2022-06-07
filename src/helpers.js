import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// on route change always show top
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return <>{children}</>;
};

const getYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export { ScrollToTop, getYear };
