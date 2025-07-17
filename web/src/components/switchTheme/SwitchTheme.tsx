import { useTheme } from "@/providers/theme/ThemeProvider";
import * as Switch from "@radix-ui/react-switch";

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  const onCheckedChange = (checked: boolean) =>
    checked ? setTheme("dark") : setTheme("light");

  return (
    <Switch.Root
      className="relative w-10 h-6 bg-primary rounded-full cursor-pointer hover:bg-primary-hover data-[state=checked]:bg-primary-active data-[state=checked]:hover:bg-primary-hover outline-none"
      checked={theme === "dark"}
      onCheckedChange={onCheckedChange}
    >
      <Switch.Thumb className="block w-[18px] h-[18px] bg-primary-foreground rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
    </Switch.Root>
  );
};
