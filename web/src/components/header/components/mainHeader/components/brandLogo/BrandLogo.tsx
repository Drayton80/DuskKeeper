import { ROUTE_HOME } from "@/constants/routes";
import { useNavigate } from "react-router-dom";

export const BrandLogo = () => {
  const navigate = useNavigate();

  return (
    <h1
      onClick={() => navigate(ROUTE_HOME)}
      className="text-2xl font-bold text-foreground hover:text-foreground-hover cursor-pointer"
    >
      Dusk Keeper
    </h1>
  );
};
