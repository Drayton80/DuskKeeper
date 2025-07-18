import { useTheme } from "@/providers/theme/ThemeProvider";
import * as Switch from "@radix-ui/react-switch";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const onCheckedChange = (checked: boolean) =>
    checked ? setTheme("dark") : setTheme("light");

  return (
    <Switch.Root
      className="relative w-14 h-9 bg-input hover:bg-input-hover rounded-full cursor-pointer data-[state=checked]:bg-primary-active data-[state=checked]:hover:bg-primary-hover outline-none"
      checked={theme === "dark"}
      onCheckedChange={onCheckedChange}
    >
      <Switch.Thumb className="block w-[32px] h-[32px] bg-primary-foreground rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]" />
    </Switch.Root>
  );
};
