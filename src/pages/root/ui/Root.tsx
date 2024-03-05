
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Wrapper, Header } from "../../../components";

export const Root = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(delay);
  });
  return (
    <Wrapper>
      <div
        className={`w-full h-full flex flex-col opacity-0 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : ""
        }`}
      >
        <div className="w-full h-full text-white">
          <div className="w-4/5 mx-auto my-0" id="container">
              <Header />
              <Outlet />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
