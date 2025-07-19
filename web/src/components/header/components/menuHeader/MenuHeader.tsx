import { MenuButton } from "./components/menuButton/MenuButton";
import { Root } from "@radix-ui/react-menubar";

export const MenuHeader = () => {
  return (
    <Root className="flex w-full max-w-[1516px] px-16 bg-header">
      <MenuButton
        label="Actions"
        onClick={() => ({})}
        options={[
          { key: "Moving", label: "Moving" },
          { key: "Supporting", label: "Supporting" },
          { key: "Fighting", label: "Fighting" },
          { key: "Interacting", label: "Interacting" },
        ]}
      />
      <MenuButton label="Feats" onClick={() => ({})} />
      <MenuButton label="Origins" onClick={() => ({})} />
      <MenuButton label="Races" onClick={() => ({})} />
    </Root>
  );
};
