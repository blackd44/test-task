import FilterBar from "../components/filter";
import Image from "../components/images";
import useFetch from "../hooks/useFetch";
import SubHeader from "../components/header/subHeader";

interface Data {
  height: number;
  id: string;
  url: string;
  width: number;
}

const Gallery = () => {
  const { data, loading } = useFetch<Data[]>(
    `https://api.thecatapi.com/v1/images/search?limit=5`
  );
  console.log({ data });

  return (
    <>
      <SubHeader title="GALLERY" />

      <section className="content">
        <FilterBar />
        <div className="image_list">
          {!loading ? (
            data?.map(({ id, url }) => <Image src={url} key={id} />)
          ) : (
            <>loading</>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery;
