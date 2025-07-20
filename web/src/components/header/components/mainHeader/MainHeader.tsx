import { cn } from "@/utils/cn";
import { BrandLogo } from "./components/brandLogo/BrandLogo";
import { ProfilePicture } from "./components/profilePicture/ProfilePicture";
import { SearchBar } from "./components/searchBar/SearchBar";
import { ThemeSwitch } from "./components/themeSwitch/ThemeSwitch";

export const MainHeader = () => {
  return (
    <div
      data-slot="main-header"
      className={cn([
        "flex justify-between items-center",
        "h-16 w-full max-w-[1516px] px-16",
        " bg-header",
      ])}
    >
      <BrandLogo />
      <div className="flex items-center gap-4">
        <SearchBar />
        <ThemeSwitch />
        <ProfilePicture />
      </div>
    </div>
  );
};
