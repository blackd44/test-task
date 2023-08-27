import { ReactNode } from "react";

type props = {
  formType?: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  theme?: "normal" | "light" | "gray" | "inverse" | "active";
  type?: "icon" | "icon_md" | "large";
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => unknown;
  [others: string]: unknown;
};

const Button = ({
  formType = "button",
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
      type={formType}
      className={`btn1 ${theme} type_${type}`}
      {...others}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
