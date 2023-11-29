import "./AritziaPage.scss";

import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.png";
import aritziaArt from "../../assets/aritzia-art.jpg";
import cactusWhite from "../../assets/cactus-white.png";

function AritziaPage() {
  return (
    <section className="aritzia">
      <div className="aritzia__header">
        <Link to="../discover">
          <img className="aritzia__header--arrow" alt="arrow" src={arrow} />
        </Link>
        <h1 className="aritzia__header--text">Aritzia</h1>
      </div>

      <div className="aritzia__body">
        <img className="aritzia__art" alt="aritzia art" src={aritziaArt} />

        <h2 className="aritzia__subheader">Rewards</h2>

        <div class="aritzia__bar">
          <div class="aritzia__fill1">
            <div class="aritzia__fill-text">200</div>
          </div>
        </div>

        <div className="aritzia__redeem-container">
          <p className="aritzia__redeem-text">Accessory</p>
          <div className="aritzia__points-button">
            <p className="aritzia__points-icon-text">500</p>
            <img
              className="aritzia__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>

        <div className="aritzia__redeem-container">
          <p className="aritzia__redeem-text">25% off coupon</p>
          <div className="aritzia__points-button">
            <p className="aritzia__points-icon-text">1000</p>
            <img
              className="aritzia__points-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AritziaPage;
