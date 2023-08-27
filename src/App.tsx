import { useLocation } from "react-router-dom";
import "./App.scss";
import BreedProvider from "./components/breedsProvider";
import LeftSection from "./components/leftSection";
import Routes from "./routes";
import MenuProvider from "./components/leftSection/provider";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <MenuProvider>
        <BreedProvider>
          <div className={`warper ${pathname == "/" ? "home" : ""}`}>
            <LeftSection />
            <section className="section_right">
              <Routes />
            </section>
          </div>
        </BreedProvider>
      </MenuProvider>
    </>
  );
}

export default App;
