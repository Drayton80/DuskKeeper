import {
  ROUTE_ACTIONS,
  ROUTE_ACTIONS_FIGHTING,
  ROUTE_ACTIONS_INTERACTING,
  ROUTE_ACTIONS_MOVING,
  ROUTE_ACTIONS_SUPPORTING,
} from "@/constants/routes";
import { MenuButton } from "./components/menuButton/MenuButton";
import { useNavigate } from "react-router-dom";

export const MenuHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full max-w-[1516px] px-16 bg-header">
      <MenuButton
        label="Actions"
        onClick={() => navigate(ROUTE_ACTIONS)}
        options={[
          {
            key: "Moving",
            label: "Moving",
            onClick: () => navigate(ROUTE_ACTIONS_MOVING),
          },
          {
            key: "Supporting",
            label: "Supporting",
            onClick: () => navigate(ROUTE_ACTIONS_SUPPORTING),
          },
          {
            key: "Fighting",
            label: "Fighting",
            onClick: () => navigate(ROUTE_ACTIONS_FIGHTING),
          },
          {
            key: "Interacting",
            label: "Interacting",
            onClick: () => navigate(ROUTE_ACTIONS_INTERACTING),
          },
        ]}
      />
      <MenuButton label="Feats" />
      <MenuButton label="Origins" />
      <MenuButton label="Races" />
    </div>
  );
};
