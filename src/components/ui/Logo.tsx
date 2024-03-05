import { Link } from "react-router-dom";

export const Logo = ({ text = "Eternal Love" }: { text?: string }) => {
  return (
    <h1
      className="
        px-2
        transition-all duration-500
        border-b border-transparent
        hover:[text-shadow:_0_0_4px_white] hover:border-b hover:border-white"
    >
      <Link to="/">{text}</Link>
    </h1>
  );
};
