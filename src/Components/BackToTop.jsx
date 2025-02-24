import { useState, useEffect } from "react";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    }; 
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-2 bg-gray-200  text-gray-800  text-sm font-semibold p-5  rounded-full   w-8  h-8 rounded-s-full flex justify-center items-center"
      >
       Up 
      </button>
    )
  );
}

export default BackToTop;
