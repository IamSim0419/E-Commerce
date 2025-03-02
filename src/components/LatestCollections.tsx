import { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import Title from "./Title";
import { Product } from "../types/types"; //Type definition for Product
import ProductItem from "./ProductItem";

export default function LatestCollections() {
  const { products } = useShop(); // Custom hook
  const [latestProducts, setLatestProducts] = useState<Product[]>();

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          voluptas suscipit eveniet libero et nobis.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm::grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts?.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
