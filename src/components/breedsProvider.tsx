import { ReactNode, createContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";

interface Data {
  name: string;
  id: string;
  reference_image_id: string;
  url: string;
}

interface Props {
  children?: ReactNode;
}

interface context {
  data?: Data[] | null;
  loading?: boolean;
}

export const BreedContext = createContext<context>({
  data: null,
  loading: true,
});

const BreedProvider = ({ children }: Props) => {
  const { data, loading } = useFetch<Data[]>(
    `https://api.thecatapi.com/v1/breeds?`
  );

  const contextValue = useMemo(
    () => ({
      data,
      loading,
    }),
    [data, loading]
  );

  return (
    <BreedContext.Provider value={contextValue}>
      {children}
    </BreedContext.Provider>
  );
};

export default BreedProvider;
