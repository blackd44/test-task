import { ReactElement } from "react";
import css from "./style.module.scss";

type props = {
  src: string;
  alt?: string;
  loading?: "lazy" | "eager" | undefined;
  hoverEffect?: boolean;
  hoverElement?: ReactElement;
};

const Image = ({
  src,
  alt = "image alt",
  loading = "lazy",
  hoverEffect,
  hoverElement,
}: props) => {
  return (
    <div className={css.image}>
      {src && <img src={src} alt={alt} loading={loading} />}
      {hoverEffect && <div className={css.hovered}>{hoverElement}</div>}
    </div>
  );
};

export default Image;
