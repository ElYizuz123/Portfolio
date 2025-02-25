import React, { useEffect, useState } from "react";
import NavBar from "../Layout/NavBar";

const ScrollReader = () => {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const divider = document.getElementById("page-divider");

      if (divider) {
        const dividerPosition = divider.getBoundingClientRect().top;
        const isAtTop = dividerPosition > 0;

        setIsHome(isAtTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Llamamos a handleScroll para verificar el estado inicial
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <NavBar isHome={isHome} />;
};

export default ScrollReader;
