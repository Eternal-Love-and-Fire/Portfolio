import { Link } from "react-router-dom";

export const CustomLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link
      to={to}
      className="
        px-2
        transition-all duration-500
        border-b-2 border-transparent
        hover:[text-shadow:_0_0_4px_white] hover:border-b-2 hover:border-white"
    >
      {text}
    </Link>
  );
};
