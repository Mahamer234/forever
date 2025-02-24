import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./router/router.jsx";
import { RouterProvider } from "react-router-dom";
import ShopContextProvidor from "./Context/shopContextProvidor.jsx";
createRoot(document.getElementById("root")).render(
  <ShopContextProvidor>
     <RouterProvider router={router} />
  </ShopContextProvidor>
 
);
