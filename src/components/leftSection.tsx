import Brand from "./brand";
import LeftCard from "./leftCard";

import votingimage from "../assets/vote-table.png";
import breedsimage from "../assets/pet-breeds.png";
import galleryimage from "../assets/images-search.png";

const LeftSection = () => {
  return (
    <section className="section_left">
      <header>
        <Brand />
      </header>

      <div className="section_left__main">
        <div>
          <h1>Hi!👋</h1>
          <p>Welcome to MacPaw Bootcamp 2023</p>
        </div>
        <div>
          <strong>Lets start using The Cat API</strong>
          <div className="section_left__cards">
            <LeftCard label="VOTING" image={votingimage} backColor="#B4B7FF" />
            <LeftCard label="BREEDS" image={breedsimage} backColor="#97EAB9" />
            <LeftCard label="GALLERY" image={galleryimage} backColor="#FFD280" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
