import "./StarbucksPage.scss";

import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.png";
import starbucksArt from "../../assets/starbucks-art.jpg";
import cactusWhite from "../../assets/cactus-white.png";

function StarbucksPage() {
  return (
    <section className="starbucks">
      <div className="starbucks__header">
        <Link to="../discover">
          <img className="starbucks__header--arrow" alt="arrow" src={arrow} />
        </Link>
        <h1 className="starbucks__header--text">Starbucks</h1>
      </div>

      <div className="starbucks__body">
        <img
          className="starbucks__art"
          alt="starbucks art"
          src={starbucksArt}
        />

        <h2 className="starbucks__subheader">Rewards</h2>

        <div class="starbucks__bar">
          <div class="starbucks__fill1">
            <div class="starbucks__fill-text">600</div>
          </div>
        </div>

        <div className="starbucks__redeem-container">
          <p className="starbucks__redeem-text">Coffee or tea</p>
          <div className="starbucks__points-button">
            <p className="starbucks__points-icon-text">100</p>
            <img
              className="starbucks__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>

        <div className="starbucks__redeem-container">
          <p className="starbucks__redeem-text">Premium beverage</p>
          <div className="starbucks__points-button">
            <p className="starbucks__points-icon-text">200</p>
            <img
              className="starbucks__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>

        <div className="starbucks__redeem-container">
          <p className="starbucks__redeem-text">Breakfast sandwich</p>
          <div className="starbucks__points-button">
            <p className="starbucks__points-icon-text">300</p>
            <img
              className="starbucks__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>

        <div className="starbucks__redeem-container">
          <p className="starbucks__redeem-text">Lunch sandwich</p>
          <div className="starbucks__points-button">
            <p className="starbucks__points-icon-text">400</p>
            <img
              className="starbucks__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StarbucksPage;
