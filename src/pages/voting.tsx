import SubHeader from "../components/header/subHeader";
import useFetch from "../hooks/useFetch";

const API_KEY = "";
// const API_KEY = import.meta.env.VITE_CAT_API_KEY;

const Voting = () => {
  const { data } = useFetch(`https://api.thecatapi.com/v1/votes?limit=10&api_key=${API_KEY}`);

  console.log({ data });

  return (
    <>
      <SubHeader title="VOTING" />

      <section className="content">{JSON.stringify(data)}</section>
    </>
  );
};

export default Voting;
