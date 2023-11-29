import "./ProfilePage.scss";

import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.png";

import cactusGreen from "../../assets/cactus-green.png";
import RewardsList from "../../components/RewardsList/RewardsList";

function ProfilePage() {
  return (
    <section className="profile">
      <div className="profile__header">
        <Link to="../scan">
          <img className="profile__header--arrow" alt="arrow" src={arrow} />
        </Link>
        <h1 className="profile__header--text">Account</h1>
      </div>

      <div className="profile__rewards-list">
        <h2 className="profile__rewards-list-text">Profile</h2>
        {/* <Link to='../profile/personal'>   */}
        <div className="profile__container">
          <p className="profile__text">Personal info</p>
        </div>
        {/* </Link> */}
        {/* <Link to='../profile/transactions'>   */}
        <div className="profile__container">
          <p className="profile__text">Transaction history</p>
        </div>
        {/* </Link> */}
        {/* <Link to='../profile/privacy-data'>   */}
        <div className="profile__container">
          <p className="profile__text">Privacy & data</p>
        </div>
        {/* </Link> */}
        {/* <Link to='../profile/notifications'>   */}
        <div className="profile__container">
          <p className="profile__text">Notification preferences</p>
        </div>
        {/* </Link> */}
        {/* <Link to='../profile/security'>   */}
        <div className="profile__container--borderless">
          <p className="profile__text">Security</p>
        </div>
        {/* </Link> */}
      </div>

      <div className="profile__rewards-list">
        <h2 className="profile__rewards-list-text">Help</h2>
        {/* <Link to='../profile/help'>   */}
        <div className="profile__container">
          <p className="profile__text">Help & policies</p>
        </div>
        {/* </Link> */}
        {/* <Link to='../profile/application'>   */}
        <div className="profile__container">
          <p className="profile__text">Application terms</p>
        </div>
        {/* </Link> */}
        {/* <Link to='../profile/privacy-data'>   */}
        <div className="profile__container">
          <p className="profile__text">Privacy notice</p>
        </div>
        {/* </Link> */}
        {/* <Link to='../profile/notifications'>   */}
        <div className="profile__container--borderless">
          <p className="profile__text">Delete account</p>
        </div>
        {/* </Link> */}
      </div>
    </section>
  );
}

export default ProfilePage;
