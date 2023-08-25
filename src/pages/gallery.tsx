import BackButton from "../components/backButton";
import FilterBar from "../components/filter";
import Header from "../components/header";
import Image from "../components/images";
import useFetch from "../hooks/useFetch";

interface Data {
  height: number;
  id: string;
  url: string;
  width: number;
}

const Gallery = () => {
  const { data, loading } = useFetch<Data[]>(
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );
  console.log({ data });

  return (
    <div className="page_content">
      <Header />
      <main>
        <section className="page_title">
          <div className="page_title_left">
            <BackButton />
            <h2 className="page_title_head">GALLERY</h2>
          </div>
        </section>

        <section className="content">
          <FilterBar />
          <div className="image_list">
            {!loading ? (
              data?.map(({ id, url }) => <Image src={url} key={id} />)
            ) : (
              <>loading</>
            )}
            {/* <div></div> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
