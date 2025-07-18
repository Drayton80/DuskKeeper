import { MainHeader } from "./components/mainHeader/MainHeader";

export const Header = () => {
  return (
    <header className="flex flex-col">
      <MainHeader />
      <div data-slot="header-buttons" className="flex"></div>
    </header>
  );
};
