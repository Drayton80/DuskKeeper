import { MainHeader } from "./components/mainHeader/MainHeader";
import { MenuHeader } from "./components/menuHeader/MenuHeader";

export const Header = () => {
  return (
    <header className="flex flex-col">
      <MainHeader />
      <MenuHeader />
    </header>
  );
};
