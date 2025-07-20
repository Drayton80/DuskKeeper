import { Header } from "@/components/header/Header";
import type { PageWrapperProps } from "./PageWrapper.d";
import { cn } from "@/utils/cn";

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen bg-background">
      <Header />
      <div
        className={cn([
          "flex justify-between items-center",
          "h-full w-full max-w-[1516px] px-20 py-10",
        ])}
      >
        {children}
      </div>
    </main>
  );
};
