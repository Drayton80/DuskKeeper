import { cn } from "@/utils/cn";
import { Description } from "@radix-ui/react-dialog";

export const DialogDescription = ({
  className,
  ...props
}: React.ComponentProps<typeof Description>) => (
  <Description
    data-slot="dialog-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);
