import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { shopContext } from "../Context/shopContextProvidor";
import { assets } from "../assets/assets";

const Product = () => {
  const productId = useParams();
  const { products, currency, addToCart } = useContext(shopContext);
  const [productData, setproductData] = useState(null);
  const [Image, setImage] = useState(null);
  const [size, setsize] = useState("");

  const fetchData = async () => {
    products.map((item) => {
      if (item._id === productId.id) {
        setproductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchData();
  }, [productId]);

  return productData ? (
    <section className="flex flex-col-reverse sm:flex-row my-8 gap-8 ">
      {/* image gallary */}
      <div className="flex-1  flex gap-4">
        {/* imags columns */}
        <div className="w-1/5 flex flex-col gap-y-2">
          {productData.image.map((item, index) => (
            <img
              key={index}
              src={item}
              alt=" img"
              onClick={() => setImage(item)}
              className=" cursor-pointer hover:scale-105 "
            />
          ))}
        </div>
        {/* main image */}
        <div className="flex-1 ">
          <img src={Image} alt="img" className="w-full h-full" />
        </div>
      </div>
      {/* product item content */}
      <div className="flex-1 flex flex-col gap-4">
        <p> {productData.name}</p>
        {/* rating  */}
        <div className="flex flex-row gap-16">
          <div className="flex flex-row gap-2 ">
            <img
              src={assets.star_icon}
              alt="img"
              className="cursor-pointer w-5"
            />
            <img
              src={assets.star_icon}
              alt="img"
              className="cursor-pointer w-5"
            />
            <img
              src={assets.star_icon}
              alt="img"
              className="cursor-pointer w-5"
            />
            <img
              src={assets.star_icon}
              alt="img"
              className="cursor-pointer w-5"
            />
            <img src={assets.star_dull_icon} alt="img" />
          </div>
          {productData.date}
        </div>

        <p>{currency + productData.price}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          tempore rerum sapiente minus mollitia quo, distinctio sed atque
          consequuntur adipisci doloremque fuga iure veritatis provident cumque
          a. In, pariatur ipsum.
        </p>
        {/* size divs */}
        <div>
          <h2>select size</h2>
          <div className="flex flex-row gap-2">
            {productData.sizes.map((item, index) => (
              <button
                key={index}
                onClick={() => setsize(item)}
                className={`p-2 bg-gray-200 h-12 w-12 flex justify-center items-center text-lg cursor-pointer ${
                  item === size ? "border border-orange-700" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* -------------------- add to cart button */}
        <button
          className={`w-40 bg-black py-3 px-4 text-gray-100 uppercase active:bg-slate-300 `}
          onClick={() => addToCart(productId.id, size)  }
        >
          add to cart
        </button>
        <p>100% Original Product</p>
        <p>{productData.description}</p>
      </div>
    </section>
  ) : (
    <section className="opacity">no data here from product data </section>
  );
};

export default Product;
