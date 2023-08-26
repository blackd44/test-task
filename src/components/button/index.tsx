import { ReactElement } from "react";

type props = {
  children: ReactElement;
  theme?: "normal" | "light" | "gray" | "inverse";
  type?: "icon" | "icon_md" | "large";
  [others: string]: unknown
};

const Button = ({ children, theme = "normal", type = "icon", ...others }: props) => {
  return <button className={`btn1 ${theme} type_${type}`} {...others}>{children}</button>;
};

export default Button;
