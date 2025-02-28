import { createContext, useContext } from "react";
import { Product } from "../assets/frontend_assets/assets"; // Type definition for Product
import { products } from "../assets/frontend_assets/assets";

export type ShopContextType = {
  products: Product[];
  currency: string;
  deliver_fee: number;
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
  const currency = "$";
  const deliver_fee = 10;

  // Value object to be passed to the context
  const value = {
    products,
    currency,
    deliver_fee,
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
