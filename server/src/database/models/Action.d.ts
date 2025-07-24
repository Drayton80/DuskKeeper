import { Effect } from "./Effect.d";

export type Action = {
  id: string;
  name: string;
  type: string;
  category: string;
  traits: string[];
  flavor: string;
  mechanics: Mechanic;
  description: string;
  effects: Effect[];
};
