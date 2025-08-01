import { cn } from "@/utils/cn";
import { Overlay } from "@radix-ui/react-dialog";

export const DialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof Overlay>) => {
  return (
    <Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
};
