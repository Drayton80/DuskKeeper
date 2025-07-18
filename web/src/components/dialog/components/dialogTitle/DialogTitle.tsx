import { cn } from "@/utils/cn";
import { Title } from "@radix-ui/react-dialog";

export const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof Title>) => {
  return (
    <Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
};
