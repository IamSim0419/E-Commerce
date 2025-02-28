import { useShop } from "../context/ShopContext";

export default function LatestCollections() {
  const { products, currency } = useShop(); // Custom hook
  console.log(products);

  return (
    <section>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>
            {currency}
            {product.price}
          </p>
        </div>
      ))}
    </section>
  );
}

//! Test later
// const useShop = () => {
//   const context = useContext(ShopContext);
//   if (!context) {
//     throw new Error("useShop must be used within a ShopContextProvider");
//   }
//   return context;
// };
