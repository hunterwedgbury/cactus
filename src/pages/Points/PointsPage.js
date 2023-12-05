import "./PointsPage.scss";

import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.png";
import cactusGreen from "../../assets/cactus-green.png";

import RewardsList from "../../components/RewardsList/RewardsList";

function PointsPage() {
  return (
    <section className="points">
      <div className="points__header">
        <Link to="../">
          <img className="points__header--arrow" alt="arrow" src={arrow} />
        </Link>
        <h1 className="points__header--text">My Rewards</h1>
      </div>

      <div className="points__points-button">
        <div className="points__points-button-container">
          <p className="points__points">2,150</p>
          <img
            className="points__points-icon"
            alt="cactus logo"
            src={cactusGreen}
          />
        </div>
        <p className="points__body">
          Welcome to the loyalty rewards app for every transaction on the
          planet.
        </p>
      </div>

      <div className="points__rewards-list">
        <h2 className="points__rewards-list-text">Recent</h2>
        <RewardsList />
      </div>
    </section>
  );
}

export default PointsPage;
