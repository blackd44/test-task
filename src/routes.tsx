import { Route, Routes as Router } from "react-router-dom";

import HomePage from "./pages";
import Gallery from "./pages/gallery";

const Routes = () => {
  return (
    <>
      <Router>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<HomePage />} />
      </Router>
    </>
  );
};

export default Routes;
