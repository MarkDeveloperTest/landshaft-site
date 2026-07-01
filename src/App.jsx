import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { usePrefersReducedMotion } from "./hooks/usePrefersReducedMotion";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ProcessPage } from "./pages/ProcessPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ServicesPage } from "./pages/ServicesPage";

const ROUTE_EXIT_DURATION_MS = 180;
const ROUTE_ENTER_DURATION_MS = 320;

function App() {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayedLocation, setDisplayedLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("idle");

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLocation(location);
      setTransitionStage("idle");
      return undefined;
    }

    if (location.pathname === displayedLocation.pathname) {
      return undefined;
    }

    setTransitionStage("exiting");

    const exitTimer = window.setTimeout(() => {
      setDisplayedLocation(location);
      setTransitionStage("entering");
    }, ROUTE_EXIT_DURATION_MS);

    return () => window.clearTimeout(exitTimer);
  }, [displayedLocation.pathname, location, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || transitionStage !== "entering") {
      return undefined;
    }

    const enterTimer = window.setTimeout(() => {
      setTransitionStage("idle");
    }, ROUTE_ENTER_DURATION_MS);

    return () => window.clearTimeout(enterTimer);
  }, [prefersReducedMotion, transitionStage]);

  return (
    <Routes location={displayedLocation}>
      <Route
        element={
          <AppLayout
            routeTransitionState={transitionStage}
            routeTransitionPath={displayedLocation.pathname}
          />
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
