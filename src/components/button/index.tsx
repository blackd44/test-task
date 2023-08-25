import { ReactElement } from "react";

type props = {
  children: ReactElement;
  theme?: "normal" | "light" | "gray" | "inverse";
  type?: "icon" | "icon_md" | "large";
};

const Button = ({ children, theme = "normal", type = "icon" }: props) => {
  return <button className={`btn1 ${theme} type_${type}`}>{children}</button>;
};

export default Button;
