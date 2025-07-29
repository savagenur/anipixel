import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType(); // "POP", "PUSH", or "REPLACE"

  useEffect(() => {
    // Only scroll to top on PUSH (i.e. new navigation, not back/forward)
    if (navigationType === "PUSH") {
      console.log("Yeeeeees");
      
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    // Do nothing on POP (back/forward), so scroll stays where user left off
  }, [location.pathname, navigationType]);

  return null;
};

export default ScrollToTop;
