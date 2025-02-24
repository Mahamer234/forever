import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { shopContext } from "../Context/shopContextProvidor";
import CartItem from "./CartItem";
const LatestSeller = () => {
  const { products } = useContext(shopContext);
  const [latestSeller, setlatestSeller] = useState([]);

  useEffect(() => {
    setlatestSeller(products);
  }, [products]);
  return (
    <section className="my-12">
      <Title text1={"latest"} text2={"collection"} />
      <p className="text-neutral-700 my-8 text-center">
        {" "}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure totam
        eligendi .
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4">
        {latestSeller.slice(0, 10).map((item) => (
          <CartItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestSeller;
