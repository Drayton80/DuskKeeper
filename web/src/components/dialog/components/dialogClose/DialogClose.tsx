import { Close } from "@radix-ui/react-dialog";

export const DialogClose = ({
  ...props
}: React.ComponentProps<typeof Close>) => {
  return <Close data-slot="dialog-close" {...props} />;
};
