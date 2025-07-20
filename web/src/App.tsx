import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./providers/theme/ThemeProvider";
import { HomePage } from "@/pages/home/HomePage";
import { ActionsPage } from "./pages/actions/ActionsPage";
import { ROUTE_ACTIONS, ROUTE_HOME } from "@/constants/routes";

export function App() {
  return (
    <ErrorBoundary fallbackRender={() => <div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider>
          <Routes>
            <Route element={<HomePage />} path={ROUTE_HOME} index={true} />
            <Route element={<ActionsPage />} path={ROUTE_ACTIONS} />
          </Routes>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
