import { useParams } from "react-router-dom";
import SubHeader from "../../components/header/subHeader";
import useFetch from "../../hooks/useFetch";
import Breed from "../../components/breed";
import DataRender from "../../components/renders/data";

interface Data {
  name: string;
  id: string;
  reference_image_id: string;
  url: string;
}

const API_KEY = "";
// const API_KEY = import.meta.env.VITE_CAT_API_KEY;

const BreedSelected = () => {
  const { breedId } = useParams();
  const { data, loading } = useFetch<Data>(
    `https://api.thecatapi.com/v1/breeds/${breedId}?api_key=${API_KEY}`
  );

  return (
    <>
      <SubHeader title={["BREEDS", `${breedId}`]} />

      <section className="content">
        <DataRender loading={loading} data={data}>
          <>
            <div className="breed_images">
              <Breed hoverEffect={false} {...data} />
            </div>
            <div>
              <h2>{data?.name}</h2>
              <h3></h3>
              <div></div>
            </div>
          </>
        </DataRender>
      </section>
    </>
  );
};

export default BreedSelected;
