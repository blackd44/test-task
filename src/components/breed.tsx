import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Button from "./button";
import Image from "./images";

interface props {
  name: string;
  id: string;
  reference_image_id: string;
  url: string;
  hoverEffect?: boolean;
}

const Breed = ({ name, reference_image_id, id, hoverEffect = true }: props) => {
  const { data } = useFetch(
    `https://api.thecatapi.com/v1/images/${reference_image_id}`
  );
  return (
    <Image
      src={(data as { url: string })?.url}
      alt={name}
      hoverEffect={hoverEffect}
      hoverElement={
        <div className="flex_btm fill">
          <Link to={`/breeds/${id}`} style={{ width: "100%" }}>
            <Button
              theme="light"
              type="large"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <>{name}</>
            </Button>
          </Link>
        </div>
      }
    />
  );
};

export default Breed;
