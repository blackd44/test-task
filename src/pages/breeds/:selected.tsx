import { useParams } from "react-router-dom";
import SubHeader from "../../components/header/subHeader";
import useFetch from "../../hooks/useFetch";
import Breed from "../../components/breed";
import Loader from "../../components/loaders";

interface Data {
  name: string;
  id: string;
  reference_image_id: string;
  url: string;
}

const BreedSelected = () => {
  const { breedId } = useParams();
  const { data, loading } = useFetch<Data>(
    `https://api.thecatapi.com/v1/breeds/${breedId}`
  );

  return (
    <>
      <SubHeader title={["BREEDS", `${breedId}`]} />

      <section className="content">
        {loading ? (
          <Loader />
        ) : (
          <div className="breed_images">
            <Breed hoverEffect={false} {...data} />
          </div>
        )}
      </section>
    </>
  );
};

export default BreedSelected;
