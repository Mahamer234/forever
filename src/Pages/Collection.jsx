import { useContext, useEffect, useState } from "react";
import { Title } from "../Components";
import { shopContext } from "../Context/shopContextProvidor";
import CartItem from "../Components/CartItem";
import { assets } from "../assets/assets";
const Collection = () => {
  const { products, search, showSearch } = useContext(shopContext);
  const [filterdata, setfilterdata] = useState([]);
  const [catogry, setcatogry] = useState([]);
  const [subcatogry, setsubcatogry] = useState([]);
  const [sortType, setsortType] = useState("");
  const [showFilter, setshowFilter] = useState(false);
  /* toggle catogry------------------ */
  const toggleCatogry = (e) => {
    if (catogry.includes(e.target.value)) {
      setcatogry(catogry.filter((item) => item !== e.target.value));
    } else {
      setcatogry((prev) => [...prev, e.target.value]);
    }
  };

  /* toggle sub catogry---------------- */
  const toggleSubCatogry = (e) => {
    if (subcatogry.includes(e.target.value)) {
      setsubcatogry(subcatogry.filter((item) => item !== e.target.value));
    } else {
      setsubcatogry((prev) => [...prev, e.target.value]);
    }
  };

  console.log(search);
  /* Applay Fillter to catogery & subb catogery -------------*/
  const applyFilter = () => {
    let productsCopy = products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (catogry.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        catogry.includes(item.category)
      );
    }
    if (subcatogry.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subcatogry.includes(item.subCategory)
      );
    }
    setfilterdata(productsCopy);
  };

  /* sort items ------------------- */
  const sortProducts = () => {
    let fdCopy = filterdata.slice();
    switch (sortType) {
      case "low-to-hight":
        setfilterdata(fdCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-tolow":
        setfilterdata((fdCopy = fdCopy.sort((a, b) => b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }; 
  useEffect(() => {
    applyFilter();
  }, [products, catogry, subcatogry,showSearch,search]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);
  return (
    <section className="border-t pt-8 flex flex-col gap-8 sm:flex-row">
      {/* filters Options div */}
      <div className="sm:min-w-[16rem] ">
        <h2
          className=" text-xl uppercase text-gray-600 mb-4 flex items-center gap-4"
          onClick={() => setshowFilter(!showFilter)}
        >
          <span>filters</span>
          <img
            src={assets.dropdown_icon}
            alt="toggleFilter"
            className={`w-3  sm:hidden cursor-pointer ${
              showFilter ? "rotate-90" : ""
            }`}
          />
        </h2>
        {/*--------- caatogery  filter */}
        <div className={`${showFilter ? "" : "hidden"} sm:block`}>
          <div className="border p-4">
            <h2 className=" uppercase  font-medium text-2xl mb-2">Catogery</h2>
            <ul>
              <li className="text-gray-700 capitalize flex gap-2">
                <input
                  type="checkbox"
                  value={"Men"}
                  onChange={toggleCatogry}
                  className="cursor-pointer"
                />
                <span>men</span>
              </li>
              <li className="text-gray-700 capitalize flex gap-2 py-2">
                <input
                  type="checkbox"
                  value={"Women"}
                  onChange={toggleCatogry}
                  className="cursor-pointer"
                />
                <span>women</span>
              </li>
              <li className="text-gray-700 capitalize flex gap-2">
                <input
                  type="checkbox"
                  value={"Kids"}
                  onChange={toggleCatogry}
                  className="cursor-pointer"
                />
                <span>kids</span>
              </li>
            </ul>
          </div>
          {/*----------- sub caatogery  filter */}
          <div className="border p-4 mt-8">
            <h2 className=" uppercase  font-medium  text-2xl mb-2">type</h2>
            <ul>
              <li className="text-gray-700 capitalize flex gap-2">
                <input
                  type="checkbox"
                  value={"Topwear"}
                  onChange={toggleSubCatogry}
                  className="cursor-pointer"
                />
                <span>topwear</span>
              </li>
              <li className="text-gray-700 capitalize flex gap-2 py-2">
                <input
                  type="checkbox"
                  value={"Bottomwear"}
                  onChange={toggleSubCatogry}
                  className="cursor-pointer"
                />
                <span>bottomwear </span>
              </li>
              <li className="text-gray-700 capitalize flex gap-2">
                <input
                  type="checkbox"
                  value={"Winterwear"}
                  onChange={toggleSubCatogry}
                  className="cursor-pointer"
                />
                <span>winterwear</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* -------------- collection content  */}
      <div className=" flex-1">
        <div className="flex  justify-between items-center">
          <Title text1={"All"} text2={"collection"}  />
          <select
            className="capitalize text-gray-700 py-2 px-0 sm:px-2 border outline-none cursor-pointer "
            onChange={(e) => setsortType(e.target.value)}
          >
            <option value={"relavent"}>sorted by: relavent</option>
            <option value={"low-to-hight"}>sorted by: low to hight</option>
            <option value={"high-tolow"}>sorted by: hight to low</option>
          </select>
        </div>

        {/* collection products item */}
        <section className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 mt-2 mb-16">
          {filterdata.map((item) => (
            <CartItem
              id={item._id}
              name={item.name}
              key={item._id}
              price={item.price}
              image={item.image[0]}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Collection;
