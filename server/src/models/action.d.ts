export type ActionCategory = {
    id: string;
    name: string;
    link: string;
    summary: string;
    description: string;
}

export type Action = {
  id: string;
  name: string; 
  link: string;
  description: string;
  category: ActionCategory;
  mechanic?: Mechanic;
  effects?: Effect[];
};
