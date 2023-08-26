import { ReactElement } from "react";
import ItemNotFound from "./itemNotFound";

type props = {
  loading: boolean;
  data: unknown[];
  children?: ReactElement;
};

const DataRender = ({ loading, data, children }: props) => {
  return !loading ? (
    data && data.length ? (
      <div className="image_list">{children}</div>
    ) : (
      <ItemNotFound />
    )
  ) : (
    <div className="loader_full">
      <div>
        <span className="spinner" />
      </div>
    </div>
  );
};

export default DataRender;
