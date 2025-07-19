import { ChevronDownIcon } from "lucide-react";
import { MenuButtonProps } from "./MenuButton.d";
import { Content, Item, Menu, Portal, Trigger } from "@radix-ui/react-menubar";
import { cn } from "@/utils/cn";

export const MenuButton = ({
  label,
  onClick,
  options,
  className,
}: MenuButtonProps) => {
  const showOptions = !!options?.length;

  return (
    <Menu>
      <Trigger
        className={cn([
          "h-full min-w-28 px-2 py-2 text-[16px] gap-2 font-medium",
          "text-foreground hover:text-foreground-hover bg-header",
          "flex justify-start items-center",
          className,
        ])}
        onClick={onClick}
      >
        {label}
        {showOptions && <ChevronDownIcon className="w-[20px] h-[20px]" />}
      </Trigger>
      {showOptions && (
        <Portal>
          <Content align="start" sideOffset={0} alignOffset={5}>
            {options?.map(({ key, label, onClick, className }) => (
              <Item
                className={cn([
                  "text-foreground bg-header hover:bg-header-accent font-semibold",
                  "min-h-10 h-full min-w-28 px-2 py-1 text-[13px]",
                  "flex items-center",
                  "cursor-pointer",
                  className,
                ])}
                key={key}
                onClick={onClick}
              >
                {label}
              </Item>
            ))}
          </Content>
        </Portal>
      )}
    </Menu>
  );
};
