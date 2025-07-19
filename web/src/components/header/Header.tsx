import { MainHeader } from "./components/mainHeader/MainHeader";
import { MenuHeader } from "./components/menuHeader/MenuHeader";

export const Header = () => {
  return (
    <header className="flex flex-col w-full items-center bg-header">
      <MainHeader />
      <MenuHeader />
    </header>
  );
};
