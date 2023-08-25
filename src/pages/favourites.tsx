import Image from "../components/images";
import useFetch from "../hooks/useFetch";
import SubHeader from "../components/header/subHeader";
import ItemNotFound from "../components/itemNotFound";

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

  console.log({ data });

  return (
    <>
      <SubHeader title="FAVOURITES" />

      <section className="content">
        {!loading ? (
          data && data.length ? (
            <div className="image_list">
              {data.map(({ id, url }) => (
                <Image src={url} key={id} />
              ))}
            </div>
          ) : (
            <ItemNotFound />
          )
        ) : (
          <>loading</>
        )}
      </section>
    </>
  );
};

export default Favourites;
