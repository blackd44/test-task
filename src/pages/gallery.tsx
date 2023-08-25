import FilterBar from "../components/filter";
import Image from "../components/images";
import useFetch from "../hooks/useFetch";
import SubHeader from "../components/header/subHeader";
import { useState } from "react";
import Button from "../components/button";

interface Data {
  height: number;
  id: string;
  url: string;
  width: number;
}

// const API_KEY = import.meta.env.VITE_CAT_API_KEY;

const Gallery = () => {
  const [limit] = useState<number>(15);
  const { data, loading } = useFetch<Data[]>(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${""}`
  );

  console.log({ data });

  return (
    <>
      <SubHeader title="GALLERY">
        <div style={{ flex: 1, display: "flex", justifyContent: "end" }}>
          <Button type="large">
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
                  fill="#FF868E"
                />
              </svg>
              <span>UPLOAD</span>
            </>
          </Button>
        </div>
      </SubHeader>

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
