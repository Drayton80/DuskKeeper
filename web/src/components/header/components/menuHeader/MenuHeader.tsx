import { MenuButton } from "./components/menuButton/MenuButton";

export const MenuHeader = () => {
  return (
    <div className="flex w-full max-w-[1516px] px-16 bg-header">
      <MenuButton
        label="Actions"
        options={[
          { key: "Moving", label: "Moving" },
          { key: "Supporting", label: "Supporting" },
          { key: "Fighting", label: "Fighting" },
          { key: "Interacting", label: "Interacting" },
        ]}
      />
      <MenuButton label="Feats" />
      <MenuButton label="Origins" />
      <MenuButton label="Races" />
    </div>
  );
};
