import Image from "../components/images";
import useFetch from "../hooks/useFetch";
import SubHeader from "../components/header/subHeader";
import DataRender from "../components/renders/ImageDataList";

interface Data {
  height: number;
  id: string;
  url: string;
  width: number;
}

// const API_KEY = import.meta.env.VITE_CAT_API_KEY;

const Favourites = () => {
  const { data, loading } = useFetch<Data[]>(
    `https://api.thecatapi.com/v1/favourites`
  );

  return (
    <>
      <SubHeader title="FAVOURITES" />

      <section className="content">
        <DataRender loading={loading} data={data}>
          <>
            {data?.map(({ id, url }) => (
              <Image src={url} key={id} />
            ))}
          </>
        </DataRender>
      </section>
    </>
  );
};

export default Favourites;
