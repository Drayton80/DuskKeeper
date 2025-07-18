import { BrandLogo } from "./components/brandLogo/BrandLogo";
import { ProfilePicture } from "./components/profilePicture/ProfilePicture";
import { SearchBar } from "./components/searchBar/SearchBar";
import { ThemeSwitch } from "./components/themeSwitch/ThemeSwitch";

export const Header = () => {
  return (
    <header className="h-16 w-full px-16 bg-header flex justify-between items-center">
      <BrandLogo />
      <div className="flex items-center gap-4">
        <SearchBar />
        <ThemeSwitch />
        <ProfilePicture />
      </div>
    </header>
  );
};
