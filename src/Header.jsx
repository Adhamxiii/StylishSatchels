import React, { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
import { useGlobalContext } from "./context";

const Header = () => {
  const { amount } = useGlobalContext();
  const [isBump, setIsBump] = useState(false);

  useEffect(() => {
    if (amount === 0) {
      return;
    }
    setIsBump(true);

    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [amount]);

  return (
    <header>
      <h1 className="logo">StylishSatchels</h1>
      <div className="cart-icon">
        <span className={`cart-count ${isBump ? " bump" : ""}`}>{amount}</span>
        <BsBag />
      </div>
    </header>
  );
};

export default Header;
