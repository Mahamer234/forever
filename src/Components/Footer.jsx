import { Link } from "react-router";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-[3fr_1fr_1fr] ">
        <div>
          <Link to={"/"}>
            <img src={assets.logo} alt="logo" className="w-40" />
          </Link>
          <p className="text-gray-800 text-lg w-[80%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            eligendi cumque blanditiis reprehenderit minima natus, expedita
            doloremque illum facilis? Adipisci officia possimus quasi pariatur
            dolor ea ipsam minus reprehenderit. Delectus.
          </p>
        </div>
        {/* columtwo */}
        <div className="flex flex-col gap-1  mb-4">
          <h2 className="text-2xl uppercase font-semibold ">company</h2>
          <Link to={"/"} className="text-gray-800 text-lg ">
            {" "}
            Home
          </Link>
          <Link to={"about"} className="text-gray-800 text-lg ">
            {" "}
            About Us
          </Link>
          <Link to={"collection"} className="text-gray-800 text-lg ">
            {" "}
            Collection
          </Link>
          <Link to={"contact"} className="text-gray-800 text-lg ">
            {" "}
            Contact
          </Link>
        </div>
        {/* footer col 3 */}
        <div className="flex flex-col gap-1 ">
          <h2 className="text-2xl uppercase font-semibold ">get in touch</h2>
          <p className="text-gray-800 text-lg ">+201050035241</p>
          <p className="text-gray-800 text-lg ">forever@yahoo.com</p>
        </div>
      </div>
      {/* copy Right */}
      <hr className="h-[1.5px] bg-gray-300"></hr>
      <p className="flex justify-center py-4 capitalize text-gray-500 font-medium">All Copy Right reserved for forever</p>
    </footer>
  );
};

export default Footer;
