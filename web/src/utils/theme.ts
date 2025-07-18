import { type ClassValue } from "clsx";

export const theme = (classValues: ClassValue) =>
  `transition-colors duration-300 ${classValues}`;
