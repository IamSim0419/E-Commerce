import { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import { FaSliders } from "react-icons/fa6";
import Title from "../components/Title";
import { Product } from "../types/types";
import ProductItem from "../components/ProductItem";

export default function Collection() {
  const { products, search, showSearch } = useShop();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState<string>("relevant");

  // Toggle category
  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCategory([...category, e.target.value]);
    } else {
      setCategory(category.filter((item) => item !== e.target.value));
    }
  };

  // Toggle subCategory
  const toggleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSubCategory([...subCategory, e.target.value]);
    } else {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    }
  };

  // Apply filter based on category and subCategory
  const applyFilter = () => {
    let productsCopy = products.slice(); // Copy of products

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  // Sort products based on sortType
  const sortProducts = (type: string) => {
    let fpCopy = filterProducts.slice();

    if (type === "low-high") {
      setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
    } else if (type === "high-low") {
      setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
    } else {
      applyFilter();
    }

    //console.log(fpCopy);
  };

  // Apply filter on category and subCategory change
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  // Sort products based on sortType
  useEffect(() => {
    sortProducts(sortType);
  }, [sortType]);

  return (
    <main className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options section */}
      <section className="min-w-60 mb-6">
        <div className="flex items-center justify-between">
          <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
            Items{" "}
            <span className="text-gray-600 text-lg">[{products.length}]</span>
          </p>
          <div
            onClick={() => setShowFilter(!showFilter)}
            className={`h-6 flex items-center sm:hidden cursor-pointer transition duration-200 ease-in-out ${
              showFilter ? "text-red-500" : ""
            }`}
          >
            <FaSliders size={20} />
          </div>
        </div>

        <div className={`sm:block ${showFilter ? "" : "hidden"}`}>
          {/* Category Filter */}
          <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  type="checkbox"
                  value={"Men"}
                  className="w-3 accent-orange-300"
                />{" "}
                Men
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  type="checkbox"
                  value={"Women"}
                  className="w-3 accent-orange-300"
                />{" "}
                Women
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  type="checkbox"
                  value={"Kids"}
                  className="w-3 accent-orange-300"
                />{" "}
                Kids
              </p>
            </div>
          </div>

          {/* SubCategory Filter */}
          <div className="border border-gray-300 pl-5 py-3 mt-6">
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleSubCategory}
                  type="checkbox"
                  value={"Topwear"}
                  className="w-3 accent-orange-300"
                />{" "}
                Topwear
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleSubCategory}
                  type="checkbox"
                  value={"Bottomwear"}
                  className="w-3 accent-orange-300"
                />{" "}
                Bottomwear
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleSubCategory}
                  type="checkbox"
                  value={"Winterwear"}
                  className="w-3 accent-orange-300"
                />{" "}
                Winterwear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side section */}
      <section className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-1 mt-1">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2 "
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6 mt-8">
          {filterProducts?.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
