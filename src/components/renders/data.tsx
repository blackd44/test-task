import { ReactElement } from "react";
import ItemNotFound from "../itemNotFound";
import Loader from "../loaders";

type props = {
  loading: boolean;
  data: unknown;
  children?: ReactElement;
};

const DataRender = ({ loading, data, children }: props): JSX.Element => {
  return !loading ? (
    data && Object.keys(data).length ? (
      <>{children}</>
    ) : (
      <ItemNotFound />
    )
  ) : (
    <Loader />
  );
};

export default DataRender;
