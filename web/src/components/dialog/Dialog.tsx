import * as React from "react";
import { Root } from "@radix-ui/react-dialog";
import { DialogDescription } from "./components/dialogDescription/DialogDescription";
import { DialogTitle } from "./components/dialogTitle/DialogTitle";
import { DialogTrigger } from "./components/dialogTrigger/DialogTrigger";
import { DialogPortal } from "./components/dialogPortal/DialogPortal";
import { DialogClose } from "./components/dialogClose/DialogClose";
import { DialogOverlay } from "./components/dialogOverlay/DialogOverlay";
import { DialogContent } from "./components/dialogContent/DialogContent";
import { DialogHeader } from "./components/dialogHeader/DialogHeader";
import { DialogFooter } from "./components/dialogFooter/DialogFooter";

function Dialog({ ...props }: React.ComponentProps<typeof Root>) {
  return <Root data-slot="dialog" {...props} />;
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
