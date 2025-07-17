import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./providers/theme/ThemeProvider";
import { HomePage } from "@/pages/home/HomePage";

export function App() {
  return (
    <ErrorBoundary fallbackRender={() => <div>Error</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider>
          <Routes>
            <Route element={<HomePage />} index={true} />
          </Routes>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
}
