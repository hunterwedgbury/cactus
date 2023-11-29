import "./HomePage.scss";

import { Link } from "react-router-dom";

import homeArt from "../../assets/homeArt.png";
import cactusWhite from "../../assets/cactus-white.png";
import cactusGreen from "../../assets/cactus-green.png";
import creditWhite from "../../assets/credit-white.png";

function HomePage() {
  return (
    <section className="home">
      <div className="home__header-container">
        <h1 className="home__header">cactus</h1>
      </div>

      <div className="home__art">
        <img alt="home page art" src={homeArt} />
      </div>

      <div className="home__sub-header-container">
        <h2 className="home__sub-header">Good morning, Hunter</h2>
      </div>

      <div className="home__body-container">
        <p className="home__body">
          Welcome to the loyalty rewards app for every retail transaction on the
          planet.
        </p>
      </div>

      <div className="home__points-button">
        <p className="home__points">2,150</p>
        <img
          className="home__points-icon"
          alt="cactus logo"
          src={cactusGreen}
        />
      </div>

      <div class="home__box-container">
        <Link to="/points">
          <div class="home__box1">
            <img
              className="home__box-icon"
              alt="cactus logo"
              src={cactusWhite}
            />
            <p class="home__box-text">Rewards</p>
          </div>
        </Link>
        {/* <Link to="/pay"> */}
        <div class="home__box2">
          <img className="home__box-icon" alt="cactus logo" src={creditWhite} />
          <p class="home__box-text">Pay</p>
        </div>
        {/* </Link> */}
      </div>
    </section>
  );
}

export default HomePage;
