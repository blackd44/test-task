import Image from "../components/images";
import useFetch from "../hooks/useFetch";
import SubHeader from "../components/header/subHeader";
import DataRender from "../components/renders/ImageDataList";
import { useSearchParams } from "react-router-dom";

interface Data {
  height: number;
  id: string;
  url: string;
  width: number;
}

// const API_KEY = import.meta.env.VITE_CAT_API_KEY;

const Search = () => {
  const [params] = useSearchParams();
  const { data, loading } = useFetch<Data[]>(
    `https://api.thecatapi.com/v1/images/search?`
  );

  return (
    <>
      <SubHeader title="FAVOURITES" />

      <section className="content">
        <p
          className="grey_color"
          style={{
            marginBottom: "1.25rem",
            fontSize: "1.25rem",
            fontWeight: 400,
          }}
        >
          Search results for:{" "}
          <span className="dark_color">{params.get("s")}</span>
        </p>
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

export default Search;
