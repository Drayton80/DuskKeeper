import { SwitchTheme } from "@/components/switchTheme/SwitchTheme";
import { useTheme } from "@/providers/theme/ThemeProvider";

export const HomePage = () => {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl text-primary font-bold">Home Page</h1>
          <SwitchTheme />
        </div>
      </div>
    </main>
  );
};
