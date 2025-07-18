import { Trigger } from "@radix-ui/react-dialog";

export const DialogTrigger = ({
  ...props
}: React.ComponentProps<typeof Trigger>) => {
  return <Trigger data-slot="dialog-trigger" {...props} />;
};
