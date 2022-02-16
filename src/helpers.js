import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// on route change always show top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;