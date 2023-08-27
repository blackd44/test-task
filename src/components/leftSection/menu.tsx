import { useContext } from "react";
import Button from "../button";
import { MenuContext } from "./provider";

const MenuButton = () => {
  const { toggleNav } = useContext(MenuContext);

  return (
    <Button
      type="icon_md"
      theme="light"
      className="menu_button"
      onClick={toggleNav}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="18"
        viewBox="0 0 30 18"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z"
          fill="#FF868E"
        />
      </svg>
    </Button>
  );
};

export default MenuButton;
