import "./App.scss";
import BreedProvider from "./components/breedsProvider";
import LeftSection from "./components/leftSection";
import Routes from "./routes";

function App() {
  return (
    <>
      <BreedProvider>
        <div className="warper">
          <LeftSection />
          <section>
            <Routes />
          </section>
        </div>
      </BreedProvider>
    </>
  );
}

export default App;
