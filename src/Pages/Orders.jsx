import { useContext, useEffect, useState } from "react";
import { Title } from "../Components";
import { shopContext } from "../Context/shopContextProvidor";
import { assets } from "../assets/assets";
const Orders = () => {
  const [orders, setorders] = useState([]);
  const { products, cartITem, currency, updateQuantity, getTotalprice,delever_fee } =
    useContext(shopContext);

  useEffect(() => {
    /* extract element from cart item to get all product data from products */
    const temp = [];
    for (const items in cartITem) {
      for (const item in cartITem[items]) {
        if (cartITem[items][item]) {
          temp.push({
            id: items,
            size: item,
            quantity: cartITem[items][item],
          });
        }
      }
    }
    setorders(temp);
  }, [cartITem]);

  return (
    <div className="mt-16 mb-32">
      <div className="flex justify-start mb-16">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      {/* -------------------------------------------------orders */}
      {orders.map((order, index) => {
        const prodctData = products.find((item) => item._id === order.id);
        return (
          <div
            key={index}
            className="grid  grid-cols-[4fr_1fr_1fr] sm:grid-cols-[3fr_1fr_1fr] mb-4 border-b pb-2 "
          >
            {/* ------- img + details */}
            <div className="flex flex-row  gap-4">
              <img src={prodctData.image[0]} className="w-16 sm:w-20" />
              <div>
                <p>{prodctData.name}</p>
                <div className="flex flex-row justify-center items-center gap-8 mt-4">
                  <p>
                    {currency} {prodctData.price}
                  </p>
                  <span className="w-8 h-8 bg-slate-200 flex justify-center items-center ">
                    {order.size}
                  </span>
                </div>
              </div>
            </div>
            {/* quantity apdate  */}
            <div className="flex justify-center items-center">
              <input
                type="number"
                defaultValue={1}
                className="border outline-none w-8 sm:w-16 p-1"
                onChange={(e) =>
                  e.target.value < 1 || e.target.value === ""
                    ? null
                    : updateQuantity(
                        order.id,
                        order.size,
                        Number(e.target.value)
                      )
                }
              />
            </div>
            {/*-------------------- delete order */}
            <div className="flex justify-center items-center">
              <img
                src={assets.bin_icon}
                className="w-8 cursor-pointer"
                onClick={() => updateQuantity(order.id, order.size, 0)}
              />
            </div>
          </div>
        );
      })}

      {/* -------------------------- Cart total  */}
      <div className="flex justify-center sm:justify-end mt-8">
        <div className="w-[80%] sm:w-[40%]  gap-3 flex   flex-col">
          <div className="flex justify-center sm:justify-start">
            <Title text1={"cart"} text2={"totals"} />
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <p>SubToTal</p>
            <p>{currency } { getTotalprice()}.00</p>
          </div>

          <div className="flex justify-between items-center py-2 border-b">
            <p>Shipping Fee</p>
            <p>{currency} {delever_fee}</p>
          </div>

          <div className="flex justify-between items-center  font-semibold">
            <p>SubToTal</p>
            <p>{currency } { getTotalprice() > 0 ? getTotalprice() + delever_fee: 0 }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
