import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="min-w-full min-h-screen flex bg-black">
      <div className="w-full min-h-screen text-white bg-gray asdfasdf">{children}</div>
    </div>
  );
};
