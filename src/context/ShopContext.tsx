import { createContext, useContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { Product } from "../types/types"; // Type definition for Product

export type ShopContextType = {
  products: Product[];
  currency: string;
  deliver_fee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

// Value object the values of the context and undefined by default
export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

//Provider component to wrap the children components
export default function ShopContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const currency = "$";
  const deliver_fee = 10;

  // Value object to be passed to the context
  const value = {
    products,
    currency,
    deliver_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

// Custom hook to use the context
export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopContextProvider");
  }
  return context;
}
