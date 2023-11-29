import "./ScanPage.scss";

import { Link } from "react-router-dom";

import cactusGreen from "../../assets/cactus-green.png";
import profile from "../../assets/profile.png";
import qrcode from "../../assets/qrcode.png";

function ScanPage() {
  return (
    <section className="scan">
      <div className="scan__header">
        <div className="scan__points-container">
          <p className="scan__points">225</p>
          <img
            className="scan__points-icon"
            alt="cactus logo"
            src={cactusGreen}
          />
        </div>
        <h1 className="scan__header--text">Hunter</h1>
        <Link to="../profile">
          <img
            className="scan__profile-icon"
            alt="profile icon"
            src={profile}
          />
        </Link>
      </div>

      <div className="scan__scan-container">
        <p className="scan__body">Scan to earn Cactus Points</p>
        <div className="scan__text-container">
          <p className="scan__text">Earn 1</p>
          <img
            className="scan__points-icon--body"
            alt="cactus logo"
            src={cactusGreen}
          />
          <p className="scan__text">per $1</p>
        </div>
        <img className="scan__qrcode" alt="qr code" src={qrcode} />
      </div>
    </section>
  );
}

export default ScanPage;
