import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import analytics from "@/utils/analytics";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // send SPA pageview when consent accepted and gtag is available
    analytics.sendPageview(pathname);
  }, [pathname]);

  return null;
}