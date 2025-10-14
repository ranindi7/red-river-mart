export interface Message {
  id: number;
  user: string;
  text: string;
}

export interface messageRequest {
  id: number;
  user: string;
  text: string;
}


export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  description?: string;
  src: string;
}

export interface ActiveFilters {
  category: string;
  sort: string;
}

export interface FilterOption {
    id: number;
    name: string;
    category?: string; 
    sort?: string;     
}

// vscode fixed this automatically ie. FilterItemsProps
export interface FilterItemsProps {
  activeFilters: ActiveFilters;
  setActiveFilters: React.Dispatch<React.SetStateAction<ActiveFilters>>;
  filterOptions: FilterOption[];
}

export interface ProductInfo {
  id: number;
  title: string;
  name: string;
  category: string;
  price: number;
  info: string;
}

export interface User {
  id: string;
  userName: string;
  bio: string;
  email: string;
  phone: string;
  preferredContact: string;
};
export interface FormItem {
    onAddItem: (newItem: Item) => void;
}

export interface MarketplaceContainerProp {
    path: string;
}
