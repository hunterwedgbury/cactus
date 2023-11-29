import "./IndigoPage.scss";

import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.png";
import indigoArt from "../../assets/indigo-art.jpg";
import cactusWhite from "../../assets/cactus-white.png";

function IndigoPage() {
  return (
    <section className="indigo">
      <div className="indigo__header">
        <Link to="../discover">
          <img className="indigo__header--arrow" alt="arrow" src={arrow} />
        </Link>
        <h1 className="indigo__header--text">Indigo</h1>
      </div>

      <div className="indigo__body">
        <img className="indigo__art" alt="indigo art" src={indigoArt} />

        <h2 className="indigo__subheader">Rewards</h2>

        <div class="indigo__bar">
          <div class="indigo__fill1">
            <div class="indigo__fill-text--zero">0</div>
          </div>
        </div>

        <p className="indigo__subheader--text">
          Make your first purchase to start collecting rewards!
        </p>

        <div className="indigo__redeem-container">
          <p className="indigo__redeem-text">Mug</p>
          <div className="indigo__points-button">
            <p className="indigo__points-icon-text">100</p>
            <img
              className="indigo__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>

        <div className="indigo__redeem-container">
          <p className="indigo__redeem-text">Candle</p>
          <div className="indigo__points-button">
            <p className="indigo__points-icon-text">200</p>
            <img
              className="indigo__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>

        <div className="indigo__redeem-container">
          <p className="indigo__redeem-text">Book</p>
          <div className="indigo__points-button">
            <p className="indigo__points-icon-text">300</p>
            <img
              className="indigo__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndigoPage;
