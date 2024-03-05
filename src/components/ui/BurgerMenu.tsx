interface BurgerMenuProps {
  handleClick: () => void;
  menuState: boolean;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  handleClick,
  menuState,
}: BurgerMenuProps) => {
  return (
    <button
      onClick={handleClick}
      className="w-[32px] h-[25px] flex lg:hidden flex-col gap-2 z-10"
    >
      <span
        className={`w-full h-1 bg-gray-300 transition-all duration-300 ${
          menuState ? "rotate-45 origin-top-left" : ""
        }`}
      ></span>
      <span
        className={`w-full h-1 bg-gray-300 transition-all duration-300 ${
          menuState ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`w-full h-1 bg-gray-300 transition-all duration-300 ${
          menuState ? "-rotate-45 origin-bottom-left" : ""
        } `}
      ></span>
    </button>
  );
};
