import { Header } from "@/components/header/Header";
import { useTheme } from "@/providers/theme/ThemeProvider";

export const HomePage = () => {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen bg-background">
      <Header />
    </main>
  );
};
