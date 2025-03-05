import { useLocation } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { useShop } from "../context/ShopContext";
import { useEffect, useState } from "react";

export default function SearchBar() {
  const { search, setSearch, showSearch, setShowSearch } = useShop();
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    // console.log(location.pathname);
  }, [location]);

  const ClearSearchInput = () => {
    setSearch("");
    setShowSearch(!showSearch);
  };

  return showSearch && visible ? (
    <div className="border-t bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none py-2 bg-inherit text-sm"
        />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>
      <img
        onClick={ClearSearchInput}
        src={assets.cross_icon}
        alt=""
        className="inline w-3 cursor-pointer"
      />
    </div>
  ) : null;
}
