import { createBrowserRouter } from "react-router";
import {
  Home,
  About,
  Collection,
  Contact,
  Product,
  Orders, 
  Login,
} from "../Pages";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "collection", element: <Collection /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:id", element: <Product /> },
      { path: "collection/product/:id", element: <Product /> },
      { path: "orders", element: <Orders /> },
      { path: "Login", element: <Login /> },
    ],
  },
]);
export default router;
