import { ReactElement } from "react";
import BackButton from "./backButton";

type props = {
  title: string;
  children?: ReactElement;
};

const SubHeader = ({ title, children }: props) => {
  return (
    <section className="page_title">
      <BackButton />
      <h2 className="page_title_head">{title}</h2>
      {children}
    </section>
  );
};

export default SubHeader;
