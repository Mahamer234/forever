import { useState, useEffect, useContext } from "react";
import { shopContext } from "../Context/shopContextProvidor";
import Title from "./title";
import CartItem from "./CartItem";

const BestSeller = () => {
  const { products } = useContext(shopContext);
  const [BestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    setBestSeller(products.filter((item) => item.bestseller === true));
  }, [products]);
  return (
    <section className="my-14">
      <Title text1={"Best"} text2={"Seller"} />
      <p className="text-neutral-700 my-8 text-center">
     
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure totam
        eligendi .
      </p>
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {
        BestSeller.slice(0,5).map(({_id,name,price,image})=><CartItem key={_id} id={_id} name={name} price={price} image={image[0]} />)

      }
      </div>
    </section>
  );
};

export default BestSeller;
