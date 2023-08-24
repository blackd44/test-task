import "./App.scss";
import LeftSection from "./components/leftSection";
import HomePage from "./pages";

function App() {
  return (
    <>
      <div className="warper">
        <LeftSection />
        <section>
          <HomePage />
        </section>
      </div>
    </>
  );
}

export default App;
