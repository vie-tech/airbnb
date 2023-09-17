import React from "react";
import aboutPhoto from "../react photos/about-page-picture-2.jpg";
import powderSplash from "../react photos/happy-african-woman-yellow-jacket.jpg"
import aboutUs from "../react photos/About SVG.svg"
import darkmodepic from "../react photos/man.png"

export default function About(props) {
  return (
    <>
      <div className={` about-container ${props.mode ? "about-container-dark-mode" : ""}`}>
        <div className="image-and-text-container">
          <div className="col1">
            <h2>Who are we?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              voluptas atque nisi, eligendi, eius, distinctio cumque adipisci
              fuga dolor fugiat voluptates ipsum facere consequuntur? Fugiat
              nobis sequi qui nam fugit. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Minima labore iusto id consequuntur beatae ad
              fugiat, praesentium dolorum a sapiente incidunt quos, accusantium
              tenetur fugit quam vero officia rerum suscipit? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Unde consequuntur quis
              fugit debitis facere similique neque. Ab numquam, deleniti illum
              facere aperiam aliquid quas nisi error quisquam placeat eos
              provident? <span>Read more....</span>
            </p>

           <img src={props.mode ? darkmodepic : aboutUs } alt="icon" className="about-us-image"/>
          </div>

          <div className="col2">
            <img src={props.mode ? powderSplash : aboutPhoto} className="about-photo" />
          </div>
        </div>

        <div className="objective-container">
          <h3>Our Objectives?</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            adipisci, maxime, alias tenetur perspiciatis laboriosam error enim,
            porro consectetur eligendi saepe. Natus, repudiandae nesciunt
            praesentium sunt delectus totam minima velit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Delectus, odit atque? Corporis
            esse veniam error, sit nulla est officiis expedita aut? Consequatur
            aliquid, nisi maxime quia dolorem recusandae dicta dolore? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Atque sapiente
            in ipsa! Illo expedita necessitatibus earum eveniet facere totam
            odit quasi quisquam, ratione, ut nisi commodi harum assumenda ipsum
            rerum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
            in sequi debitis rem neque perspiciatis non deserunt, velit
            accusantium inventore nam et eius tenetur ea soluta ut ratione
            facere tempore!
          </p>
        </div>
      </div>
    </>
  );
}
