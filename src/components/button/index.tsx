import { ReactElement } from "react";

type props = {
  children: ReactElement;
  theme?: "normal" | "gray" | "inverse";
};

const Button = ({ children, theme = "normal" }: props) => {
  return <button className={`btn1 ${theme}`}>{children}</button>;
};

export default Button;
