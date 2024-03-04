import React, { useEffect, useState } from "react";
import { Nav } from "../../../components";
import { BurgerMenu, Logo } from "../../../shared";

export const Header = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const handleMenuOpening = () => {
    setDropMenu(!dropMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1024) {
        setDropMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full my-8 flex justify-between">
      <Logo />
      <div className="flex gap-6 relative">
        <BurgerMenu handleClick={handleMenuOpening} menuState={dropMenu} />
        <Nav sx="hidden lg:block" />
        {dropMenu && (
          <div className="transition-all duration-300 absolute top-0 bottom-0 left-0 right-0 flex justify-end">
            <Nav sx="mt-16 mr-[-1rem] lg:flex flex flex-col gap-4 text-3xl items-end dropdown-animation" />
          </div>
        )}
      </div>
    </header>
  );
};
