import { useContext, useEffect, useState } from "react";
import { shopContext } from "../Context/shopContextProvidor";
import { assets } from "../assets/assets";
import { useLocation } from "react-router";
const Search = () => {
  const { search, setsearch, showSearch, setShowsearch } =
    useContext(shopContext);
  const [isVisible, setisVisible] = useState(false);
  const location = useLocation();
  /* handle search debouncing */
   /* handle search   */
   const hanldeSearch =(e)=>{
    const timer =setTimeout(() => {
      setsearch(e.target.value)
    }, 1600);
    return timer
  }
  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
    if(!showSearch){ 
      setsearch("")
    }
  }, [location, showSearch]);
 /*  console.log(search) */
  return isVisible ? (
    <section className="flex justify-center gap-3 items-center bg-gray-100 py-4">
      <div className="flex items-center  border w-[80%] sm:w-[50%] rounded-full ">
        <input
          type="text"
          placeholder="search" 
          onChange={hanldeSearch}
          className="px-3 py-3  rounded-l-full w-[90%] outline-none text-gray-800 "
        />
        <div className="flex items-center justify-center flex-1">
          <img src={assets.search_icon} className="w-4" />
        </div>
      </div>
      <img
        src={assets.cross_icon}
        onClick={() => setShowsearch(false)}
        className="bg-gray-300 p-2 rounded-full cursor-pointer w-6 hover:scale-150 transition-transform duration-200"
      />
    </section>
  ) : (
    <section className="opacity-0"></section>
  );
};

export default Search;
