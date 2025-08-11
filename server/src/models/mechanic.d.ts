export type MechanicCost = {
    sp?: number;
    mp?: number;
    hp?: number;
    ma?: number;
    pa?: number;
}

export type Mechanic = {
  id: string;
  target?: string;
  range?: number;
  check?: string;
  counteraction?: string;
  cost?: MechanicCost;
};