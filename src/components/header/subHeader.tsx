import { ReactElement, useMemo } from "react";
import BackButton from "./backButton";

type props = {
  title: string | string[];
  children?: ReactElement;
};

const SubHeader = ({ title, children }: props) => {
  const titles = useMemo(() => {
    if (typeof title == "string") return [title];
    else return title;
  }, [title]);

  return (
    <section className="page_title">
      <BackButton />
      {titles.map((t, index) => (
        <h2
          key={t}
          className={`page_title_head ${index !== 0 ? "w_fit" : ""} ${
            index == titles.length - 1 ? "last" : ""
          }`}
        >
          {t}
        </h2>
      ))}
      {children}
    </section>
  );
};

export default SubHeader;
