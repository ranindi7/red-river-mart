export interface Message {
  id: number;
  user: string;
  text: string;
}

export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  src: string;
}

export interface ActiveFilters {
  category: string;
  sort: string;
}

// vscode fixed this automatically ie. FilterItemsProps
export interface FilterItemsProps {
  activeFilters: ActiveFilters;
  setActiveFilters: React.Dispatch<React.SetStateAction<ActiveFilters>>;
}