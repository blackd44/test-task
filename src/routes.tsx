import { Outlet, Route, Routes as Router } from "react-router-dom";

import HomePage from "./pages";
import Gallery from "./pages/gallery";
import Header from "./components/header";
import Breeds from "./pages/breeds";
import Voting from "./pages/voting";
import Likes from "./pages/likes";
import DisLikes from "./pages/dislikes";
import Favourites from "./pages/favourites";
import BreedSelected from "./pages/breeds/:selected";

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
          <Route path="/breeds/:breedId" element={<BreedSelected />} />

          <Route path="/votings" element={<Voting />} />

          <Route path="/likes" element={<Likes />} />
          <Route path="/dislikes" element={<DisLikes />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>

        <Route path="*" element={<HomePage />} />
      </Router>
    </>
  );
};

export default Routes;
