import { Link } from "react-router-dom";
import BrandIcon from "./Icon";
import BrandText from "./Text";

const Brand = () => {
  return (
    <div>
      <Link className="brand" to="/">
        <BrandIcon />
        <BrandText />
      </Link>
    </div>
  );
};

export default Brand;
