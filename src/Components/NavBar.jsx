import { NavLink } from "react-router";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { shopContext } from "../Context/shopContextProvidor";
import { Link } from "react-router";
const NavBar = () => { 
  const [isVisible, setisVisible] = useState(false);
  const { setShowsearch, getcountItems } = useContext(shopContext);
  return (
    <nav className="flex  items-center justify-between py-4 px-8 sticky top-0 bg-slate-50 z-50">
      <Link to={'/'}><img className="w-24 md:w-32" src={assets.logo} alt="logo" /></Link>
      <ul className="hidden sm:flex gap-8 items-center">
        <NavLink to={"/"} className="flex flex-col items-center ">
          <p className=" uppercase  text-gray-600 ">Home</p>
          <hr className="w-1/2 h-[2px] bg-gray-600 hidden"></hr>
        </NavLink>
        <NavLink to={"collection"} className="flex flex-col items-center ">
          <p className="  uppercase  text-gray-600   ">Collection</p>
          <hr className="w-1/2 h-[2px] bg-gray-600 hidden"></hr>
        </NavLink>
        <NavLink to={"about"} className="flex flex-col items-center ">
          <p className=" uppercase  text-gray-600   ">About</p>
          <hr className="w-1/2 h-[2px] bg-gray-600 hidden"></hr>
        </NavLink>
        <NavLink to={"contact"} className="flex flex-col items-center ">
          <p className="  uppercase  text-gray-600   ">Contact</p>
          <hr className="w-1/2 h-[2px] bg-gray-600 hidden"></hr>
        </NavLink>
      </ul>

      <div className="flex gap-4 md:gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className=" w-4 md:w-5 cursor-pointer"
          onClick={() => setShowsearch(true)}
        />
        
        <Link to={"Login"}>
        <img
          src={assets.profile_icon}
          alt="logo"
          className=" w-4 md:w-5 cursor-pointer"
        />
        
        
        </Link>
        {/* dropdowm menu */}
        {/* <div className="absolute bottom-[-90px] right-0 rounded-md bg-slate-100 w-32 z-50 ">
          <ul className="p-2">
            <li className="mb-2 border-b" onClick={navigat('order')}> order </li>
            <li className="mb-2 ">Log in  </li> 
          </ul> 
        </div> */}
 
        <Link to={"orders"} className="relative">
          <img
            src={assets.cart_icon}
            alt="profile"
            className=" w-4 md:w-5 cursor-pointer"
          />
          <div className="absolute top-3 left-2 text-[10px] aspect-square flex justify-center items-center w-4 p- h-4 text-sm rounded-full bg-black text-gray-100">
           {getcountItems()}
          </div>
        </Link>

        <img
          src={assets.menu_icon}
          alt="menu"
          className=" w-6 cursor-pointer sm:hidden"
          onClick={() => setisVisible(true)}
        />
      </div>

      {/*---------------------------- navlinks on mobile screen */}
      {isVisible && (
        <div className="absolute overflow-hidden inset-0 h-[100vh]  bg-gray-50 flex flex-col gap-8 p-2 transition-all duration-1000">
         <div className="flex justify-end p-4">
         <img
            src={assets.cross_icon}
            className="w-6 cursor-pointer hover:rotate-12 transition-transform duration-200"
            onClick={() => setisVisible(false)}

          />
         </div>
          <NavLink
            to={"/"}
            className="flex flex-col "
            onClick={() => setisVisible(false)}
          >
            <p className="uppercase  text-gray-500 text-xl">Home</p>
            <hr className="w-full h-[2px] bg-gray-300 "></hr>
          </NavLink>
          <NavLink
            to={"collection"}
            className="flex flex-col  "
            onClick={() => setisVisible(false)}
          >
            <p className="  uppercase  text-gray-500  text-xl ">Collection</p>
            <hr className="w-full h-[2px] bg-gray-300 "></hr>
          </NavLink>
          <NavLink
            to={"about"}
            className="flex flex-col  "
            onClick={() => setisVisible(false)}
          >
            <p className=" uppercase  text-gray-500   text-xl">About</p>
            <hr className="w-full h-[2px] bg-gray-300 "></hr>
          </NavLink>
          <NavLink
            to={"contact"}
            className="flex flex-col  "
            onClick={() => setisVisible(false)}
          >
            <p className="  uppercase  text-gray-500   text-xl">Contact</p>
            <hr className="w-full h-[2px] bg-gray-300 "></hr>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
