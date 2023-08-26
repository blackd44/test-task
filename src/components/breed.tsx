import useFetch from "../hooks/useFetch";
import Image from "./images";

interface props {
  name: string;
  id: string;
  reference_image_id: string;
  url: string;
}

const Breed = ({ name, reference_image_id }: props) => {
  const { data } = useFetch(
    `https://api.thecatapi.com/v1/images/${reference_image_id}`
  );
  return <Image src={(data as { url: string })?.url} alt={name} />;
};

export default Breed;
