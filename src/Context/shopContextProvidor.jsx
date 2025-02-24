import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
/*---------------------------------------- create context  */
export const shopContext = createContext();
const ShopContextProvidor = (props) => {
  const currency = "$";
  const delever_fee = 10;
  const [search, setsearch] = useState("");
  const [showSearch, setShowsearch] = useState(false);
  const [cartITem, setcartITem] = useState({});

  /*-------------------------------------- cart data */
  const addToCart = async (id, size) => {
    let cItemCopy = structuredClone(cartITem);
    if(!size){
      toast.error("select products size ", {
        position: "top-right",
        autoClose: 3000, // يغلق بعد 3 ثوانٍ
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      }
        
      )
      return
    } 
    if (id && size) {
      if (cItemCopy[id]) {
        if (cItemCopy[id][size]) {
          if( cItemCopy[id][size] >= 5 ){
            toast.error("lemeted selected for this item ")
            return
          }
          cItemCopy[id][size] += 1;
        } else {
          cItemCopy[id][size] = 1;
        }
      } else {
        cItemCopy[id] = {};
        cItemCopy[id][size] = 1;
      }
    }
    setcartITem(cItemCopy);
    toast.success(`you add to cart : ${size} size from this item` )
  };
  /*------------------------- counter item in cart  */ 
  const getcountItems = () => {
    let totalCount = 0;
    for (let items in cartITem) {
      for (let item in cartITem[items]) {
        try {
          if (cartITem[items][item] > 0) {
            totalCount += cartITem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

/* --------------------------- Updation quntity  */
const updateQuantity = (id , size , quantity)=>{
  let cartITemUpadate = structuredClone(cartITem) 
    cartITemUpadate[id][size] = quantity; 
  setcartITem(cartITemUpadate)
}
/*   console.log(cartITem); */


/* ----------------------------- getTotale  */
const getTotalprice=()=>{
  let total = 0;
  for (const items in cartITem) {
    for (const item in cartITem[items]) {
      const product = products.find((product) => product._id === items);
      total += product.price * cartITem[items][item];
    }
  }
  return total;
}
/* -------------------------- Value */
  const value = {
    products,
    currency,
    delever_fee,
    search,
    setsearch,
    showSearch,
    setShowsearch,
    addToCart,
    getcountItems, 
    cartITem,
    updateQuantity,
    getTotalprice

  };
  return (
    <shopContext.Provider value={value}>{props.children}</shopContext.Provider>
  );
};

export default ShopContextProvidor;
