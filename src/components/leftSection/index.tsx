import Brand from "../brand";
import LeftCard from "../leftCard";

import votingimage from "../../assets/vote-table.png";
import breedsimage from "../../assets/pet-breeds.png";
import galleryimage from "../../assets/images-search.png";
import ThemeSwitch from "../theme/switch";
import { MenuContext } from "./provider";
import { useContext } from "react";
import Button from "../button";

const LeftSection = () => {
  const { showNav, setShowNav } = useContext(MenuContext);

  return (
    <section className={`section_left ${!showNav ? "hide" : "show"}`}>
      <div className="closeNav">
        <Button theme="light" onClick={() => setShowNav(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z"
              fill="#FF868E"
            />
          </svg>
        </Button>
      </div>
      <div className="section_left_container">
        <div className="section_left__head">
          <Brand />
          <ThemeSwitch />
        </div>

        <div className="section_left__main">
          <div className="small_hide">
            <h1>Hi!👋</h1>
            <p>Welcome to MacPaw Bootcamp 2023</p>
          </div>
          <div>
            <strong className="small_hide">Lets start using The Cat API</strong>
            <div className="section_left__cards">
              <LeftCard
                onClick={() => setShowNav(false)}
                label="VOTING"
                image={votingimage}
                backColor="#B4B7FF"
                link="/votings"
              />
              <LeftCard
                onClick={() => setShowNav(false)}
                label="BREEDS"
                image={breedsimage}
                backColor="#97EAB9"
                link="/breeds"
              />
              <LeftCard
                onClick={() => setShowNav(false)}
                label="GALLERY"
                image={galleryimage}
                backColor="#FFD280"
                link="/gallery"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
