import { useReducer, useEffect } from "react";

type State<T> = {
  data: T;
  loading: boolean;
  error: Error | null;
};

type Action<T> =
  | { type: "LOADING" }
  | { type: "SUCCESS"; payload: T }
  | { type: "ERROR"; payload: Error };

function dataFetchReducer<T>(state: State<T>, action: Action<T>) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, data: action.payload, loading: false };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      throw new Error();
  }
}

function useFetch<T>(url: string, options: RequestInit = {}): State<T> {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      dispatch({ type: "LOADING" });

      try {
        const response = await fetch(url, options);
        if (!didCancel) {
          const data = await response.json();
          dispatch({ type: "SUCCESS", payload: data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "ERROR", payload: error as Error });
        }
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url]);

  return state as State<T>;
}

export default useFetch;
