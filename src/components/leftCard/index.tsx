import css from "./style.module.scss";
import defaultImage from "../../assets/vote-table.png";
import { NavLink } from "react-router-dom";

type props = {
  image?: string;
  alt?: string;
  label?: string;
  backColor?: string;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
};

const LeftCard = ({
  image = defaultImage,
  alt = "card image",
  label = "VOTING",
  backColor = "#b4b7ff",
  link = "",
  onClick = () => {},
}: props) => {
  return (
    <NavLink
      onClick={onClick}
      to={link}
      className={({ isActive }) => `${css.card} ${isActive && css.active}`}
      style={{ color: backColor }}
    >
      <div className={css.card_image}>
        <img alt={alt} src={image} />
      </div>
      <div className={css.card_label}>{label}</div>
    </NavLink>
  );
};

export default LeftCard;
