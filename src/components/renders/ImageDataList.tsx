import { ReactElement } from "react";
import ItemNotFound from "../itemNotFound";
import Loader from "../loaders";

type props = {
  loading: boolean;
  data: unknown[];
  children?: ReactElement;
};

const DataImageListRender = ({ loading, data, children }: props) => {
  return !loading ? (
    data && data.length ? (
      <div className="image_list">{children}</div>
    ) : (
      <ItemNotFound />
    )
  ) : (
    <Loader />
  );
};

export default DataImageListRender;
