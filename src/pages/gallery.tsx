import FilterBar from "../components/filter";
import Image from "../components/images";
import useFetch from "../hooks/useFetch";
import SubHeader from "../components/header/subHeader";
import { useState } from "react";
import Button from "../components/button";
import DataRender from "../components/renders/ImageDataList";
import { Icon } from "../components/header/bars";
import UploadButton from "../components/upload";

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

  return (
    <>
      <SubHeader title="GALLERY">
        <div style={{ flex: 1, display: "flex", justifyContent: "end" }}>
          <UploadButton />
        </div>
      </SubHeader>

      <section className="content">
        <FilterBar />
        <DataRender loading={loading} data={data}>
          <>
            {data?.map(({ id, url }) => (
              <Image
                src={url}
                key={id}
                hoverEffect
                hoverElement={
                  <div className="flex_center fill">
                    <Button theme="light" type="icon">
                      <Icon type="heart" />
                    </Button>
                  </div>
                }
              />
            ))}
          </>
        </DataRender>
      </section>
    </>
  );
};

export default Gallery;
