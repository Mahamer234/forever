import { Outlet } from "react-router";
import { NavBar, Footer, Search, ScrollToTop, BackToTop } from "./Components"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BackToTop />
      <ScrollToTop />
      <NavBar />
      <div className="container mx-auto">
        <ToastContainer />
        <Search />
        <Outlet /> 
        <Footer />
      </div>
    </>
  );
};

export default App;
