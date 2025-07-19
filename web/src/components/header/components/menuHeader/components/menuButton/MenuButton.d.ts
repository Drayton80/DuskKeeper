import { type MouseEventHandler } from "react";
import { type ClassValue } from "clsx";

interface MenuButtonOption {
  key: string;
  label: string;
  className?: ClassValue;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface MenuButtonProps {
  label: string;
  className?: ClassValue;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  options?: MenuButtonOption[];
}
