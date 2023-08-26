import { ReactElement } from "react";

type props = {
  children: ReactElement;
  theme?: "normal" | "light" | "gray" | "inverse";
  type?: "icon" | "icon_md" | "large";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => unknown;
  [others: string]: unknown;
};

const Button = ({
  children,
  theme = "normal",
  type = "icon",
  onClick,
  ...others
}: props) => {
  const click = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (typeof onClick == "function") onClick(e);
  };

  return (
    <button
      className={`btn1 ${theme} type_${type}`}
      {...others}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
