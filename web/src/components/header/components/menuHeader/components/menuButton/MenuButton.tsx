import { ChevronDownIcon } from "lucide-react";
import { MenuButtonProps } from "./MenuButton.d";
import { Root, Content, Portal, Trigger } from "@radix-ui/react-hover-card";
import { cn } from "@/utils/cn";

export const MenuButton = ({
  label,
  onClick,
  options,
  className,
}: MenuButtonProps) => {
  const showOptions = !!options?.length;

  return (
    <Root openDelay={300}>
      <Trigger asChild>
        <button
          className={cn([
            "group",
            "flex justify-start items-center",
            "h-full min-w-28 px-2 py-2 text-[16px] gap-2 font-medium",
            "text-foreground hover:text-foreground-hover bg-header",
            "cursor-pointer",
            className,
          ])}
          onClick={onClick}
        >
          {label}
          {showOptions && (
            <ChevronDownIcon
              className={cn([
                "w-[20px] h-[20px]",
                "transform -rotate-90 transition duration-[300ms] ease-in-out",
                "group-data-[state=open]:rotate-0",
              ])}
            />
          )}
        </button>
      </Trigger>
      {showOptions && (
        <Portal>
          <Content align="start" sideOffset={0} alignOffset={5}>
            {options?.map(({ key, label, onClick, className }) => (
              <button
                className={cn([
                  "flex items-center",
                  "text-foreground bg-header hover:bg-header-accent font-semibold",
                  "min-h-10 h-full min-w-28 px-2 py-1 text-[13px]",
                  "cursor-pointer",
                  className,
                ])}
                key={key}
                onClick={onClick}
              >
                {label}
              </button>
            ))}
          </Content>
        </Portal>
      )}
    </Root>
  );
};
