import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

type ProductItemProps = {
  id: string;
  image: string[];
  name: string;
  price: number;
};

// Reusable ProductItem component
export default function ProductItem({
  id,
  image,
  name,
  price,
}: ProductItemProps) {
  const { currency } = useShop();

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer border">
      <div className="overflow-hidden">
        <img
          src={image[0]}
          alt=""
          className="hover:scale-110 transition ease-in-out"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
}
