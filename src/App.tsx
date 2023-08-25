import "./App.scss";
import LeftSection from "./components/leftSection";
import Routes from "./routes";

function App() {
  return (
    <>
      <div className="warper">
        <LeftSection />
        <section>
          <Routes />
        </section>
      </div>
    </>
  );
}

export default App;
