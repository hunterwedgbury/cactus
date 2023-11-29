import "./SephoraPage.scss";

import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.png";
import sephoraArt from "../../assets/sephora-art.jpg";
import cactusWhite from "../../assets/cactus-white.png";

function SephoraPage() {
  return (
    <section className="sephora">
      <div className="sephora__header">
        <Link to="../discover">
          <img className="sephora__header--arrow" alt="arrow" src={arrow} />
        </Link>
        <h1 className="sephora__header--text">Sephora</h1>
      </div>

      <div className="sephora__body">
        <img className="sephora__art" alt="sephora art" src={sephoraArt} />

        <h2 className="sephora__subheader">Rewards</h2>

        <div class="sephora__bar">
          <div class="sephora__fill1">
            <div class="sephora__fill-text--zero">0</div>
          </div>
        </div>

        <p className="sephora__subheader--text">
          Make your first purchase to start collecting rewards!
        </p>

        <div className="sephora__redeem-container">
          <p className="sephora__redeem-text">10% off coupon</p>
          <div className="sephora__points-button">
            <p className="sephora__points-icon-text">500</p>
            <img
              className="sephora__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>

        <div className="sephora__redeem-container">
          <p className="sephora__redeem-text">25% off coupon</p>
          <div className="sephora__points-button">
            <p className="sephora__points-icon-text">1000</p>
            <img
              className="sephora__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SephoraPage;
