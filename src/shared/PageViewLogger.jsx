import { useEffect } from "react";
import { useAnalytics } from "reactfire";
import "firebase/analytics";

const PageViewLogger = () => {
  const analytics = useAnalytics();

  useEffect(() => {
    analytics.logEvent("page-view", { path_name: window.location.pathname });
  }, [window.location.pathname]);
  return null;
};

export default PageViewLogger;
