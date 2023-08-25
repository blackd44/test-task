import { Outlet, Route, Routes as Router } from "react-router-dom";

import HomePage from "./pages";
import Gallery from "./pages/gallery";
import Header from "./components/header";
import Breeds from "./pages/breeds";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/"
          element={
            <div className="page_content">
              <Header />
              <main>
                <Outlet />
              </main>
            </div>
          }
        >
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/breeds" element={<Breeds />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Router>
    </>
  );
};

export default Routes;
