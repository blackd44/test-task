import css from "./style.module.scss";
import defaultImage from "../../assets/vote-table.png";

type props = {
  image?: string;
  alt?: string;
  label?: string;
  backColor?: string;
};

const LeftCard = ({
  image = defaultImage,
  alt = "card image",
  label = "VOTING",
  backColor = "#b4b7ff",
}: props) => {
  return (
    <div className={`${css.card}`}>
      <div className={css.card_image} style={{ background: backColor }}>
        <img alt={alt} src={image} />
      </div>
      <div className={css.card_label}>{label}</div>
    </div>
  );
};

export default LeftCard;
