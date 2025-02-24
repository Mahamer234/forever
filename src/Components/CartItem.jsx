import { Link } from "react-router";
import { shopContext } from "../Context/shopContextProvidor";
import { useContext } from "react";
const CartItem = ({ id, name, price, image }) => {
  const { currency } = useContext(shopContext);
  return (
    <Link to={`product/${id}`}>
      <div className="group overflow-hidden">
        <div className="overflow-hidden">
          <img
            src={image}
            alt="img"
            className="group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <p>{name}</p>
        <p>
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default CartItem;
