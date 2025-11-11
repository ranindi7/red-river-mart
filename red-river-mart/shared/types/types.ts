export interface Forum {
  id: number;
  subject?: string;
  title: string;
  date: string;
  description: string;
  comments?: Comment[];
}

export interface Comment {
  id: number;
  text: string;
  user: string; 
}

export interface ForumPost {
    onAddForum: (newForum: Forum) => void;
}

export interface SearchFilter  {
  searchFilter: string;
  handleSearchChange: (newValue: string) => void;
  handleSubmit: () => void;
};

export interface Item {
  id: number;
  name: string;
  category: string;
  price: number;
  description?: string;
  src: string;
  sellerName?: string;
  sellerEmail?: string;
}

export interface ItemPageProps {
  items: Item[];
  onItemClick: (item: Item) => void;
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

export interface User {
  id: number;
  userName: string;
  bio: string;
  email: string;
  phone: string;
  preferredContact: string;
};
export interface FormItem {
    onAddItem: (newItem: Omit<Item, 'id'>) => void;
}

export interface MarketplaceContainerProp {
    path: string;
}

export interface FieldsType {
    [key: string]: string | File | null;
}

export interface ErrorsType {
    [key: string]: string;
}