import "./LululemonPage.scss";

import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.png";
import lululemonArt from "../../assets/lululemon-art.jpg";
import cactusWhite from "../../assets/cactus-white.png";

function LululemonPage() {
  return (
    <section className="lululemon">
      <div className="lululemon__header">
        <Link to="../discover">
          <img className="lululemon__header--arrow" alt="arrow" src={arrow} />
        </Link>
        <h1 className="lululemon__header--text">Lululemon</h1>
      </div>

      <div className="lululemon__body">
        <img
          className="lululemon__art"
          alt="lululemon art"
          src={lululemonArt}
        />

        <h2 className="lululemon__subheader">Rewards</h2>

        <div class="lululemon__bar">
          <div class="lululemon__fill1">
            <div class="lululemon__fill-text">450</div>
          </div>
        </div>

        <div className="lululemon__redeem-container">
          <p className="lululemon__redeem-text">Accessory</p>
          <div className="lululemon__points-button">
            <p className="lululemon__points-icon-text">500</p>
            <img
              className="lululemon__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>

        <div className="lululemon__redeem-container">
          <p className="lululemon__redeem-text">25% off coupon</p>
          <div className="lululemon__points-button">
            <p className="lululemon__points-icon-text">1000</p>
            <img
              className="lululemon__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LululemonPage;
