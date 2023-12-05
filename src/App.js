import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage.js";
import ScanPage from "./pages/Scan/ScanPage.js";
import DiscoverPage from "./pages/Discover/DiscoverPage.js";
import StarbucksPage from "./pages/Starbucks/StarbucksPage.js";
import LululemonPage from "./pages/Lululemon/LululemonPage.js";
import McDonaldsPage from "./pages/McDonalds/McDonaldsPage.js";
import AritziaPage from "./pages/Aritzia/AritziaPage.js";
import ChipotlePage from "./pages/Chipotle/ChipotlePage.js";
import SephoraPage from "./pages/Sephora/SephoraPage.js";
import IndigoPage from "./pages/Indigo/IndigoPage.js";
import PointsPage from "./pages/Points/PointsPage.js";
import ProfilePage from "./pages/Profile/ProfilePage.js";
import Nav from "./components/Nav/Nav.js";

import iphone from "./assets/iphone2.png";
import arrow from "./assets/arrow-green.png";
import appStore from "./assets/app-store.png";
import mockup1 from "./assets/iphone-mockup1.png";
import mockup2 from "./assets/iphone-mockup2.png";
import screen1 from "./assets/screen1.png";
import screen2 from "./assets/screen2.png";
import screen3 from "./assets/screen3.png";
import screen4 from "./assets/screen4.png";

import stockScan1 from "./assets/stock-scan1.jpg";
import stockScan2 from "./assets/stock-scan2.jpg";
import stockScan3 from "./assets/stock-scan3.jpg";

function App() {
  return (
    <div className="body">
      <div className="hero">
        <div className="hero__text-container">
          <h1 className="hero__desktop-header--grey">welcome to</h1>
          <h1 className="hero__desktop-header">cactus</h1>
          <p className="hero__text">The loyalty rewards app for</p>
          <p className="hero__text">every transaction on the planet.</p>
          <div className="hero__app-store">
            <img
              className="hero__app-store-logo"
              alt="app store logo"
              src={appStore}
            />
          </div>
          <button className="hero__text-button" id="scrollButton">
            <p className="hero__button-text">Contact Us</p>
          </button>
        </div>

        <div className="prototype">
          <img className="iphone" alt="iphone" src={iphone} />

          <div className="container">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/scan" element={<ScanPage />} />
                <Route path="/discover" element={<DiscoverPage />} />
                <Route path="/discover/starbucks" element={<StarbucksPage />} />
                <Route path="/discover/lululemon" element={<LululemonPage />} />
                <Route path="/discover/mcdonalds" element={<McDonaldsPage />} />
                <Route path="/discover/aritzia" element={<AritziaPage />} />
                <Route path="/discover/chipotle" element={<ChipotlePage />} />
                <Route path="/discover/sephora" element={<SephoraPage />} />
                <Route path="/discover/indigo" element={<IndigoPage />} />
                <Route path="/points" element={<PointsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Routes>
              <Nav />
            </BrowserRouter>
          </div>
        </div>

        <div className="try-container">
          <p className="try-container__text">try cactus</p>
          <img className="try-container__arrow" alt="arrow" src={arrow} />
        </div>
      </div>

      <div className="subheader1">
        <p className="subheader1__text1">ONE REWARDS APP,</p>
        <p className="subheader1__text2">FOR EVERYTHING</p>
      </div>

      <div className="section1">
        <div className="section1__image-container">
          <img
            className="section1__image"
            alt="prototype screen 1"
            src={mockup1}
          />
        </div>
        <div className="section1__text-container">
          <p className="section1__header">
            Get the best rewards right at your fingertips.
          </p>
          <p className="section1__body">
            Use the Cactus mobile app to collect rewards with your favourite
            brands or to track rewards you’ve already earned, whether you’ve
            paid with cash, credit, or the Cactus app.
          </p>
        </div>
      </div>

      <div className="section2">
        <div className="section2__text-container">
          <p className="section2__header">Your only QR-code, for everything.</p>
          <p className="section2__body">
            Instantly join any loyalty program with one scan of the personal
            QR-code on your mobile device and start earning rewards immediately.
          </p>
        </div>
        <div className="section2__image-container">
          <img
            className="section2__image"
            alt="prototype screen 2"
            src={mockup2}
          />
        </div>
      </div>

      <div className="subheader2">
        <p className="subheader2__text1">WHY OFFER</p>
        <p className="subheader2__text2">LOYALTY REWARDS?</p>
      </div>

      <div className="section56">
        <div className="section5">
          <div className="section5__image-container">
            <img
              className="section5__image"
              alt="customer shopping 1"
              src={stockScan1}
            />
          </div>
          <div className="section5__text-container">
            <p className="section5__header">More sales</p>
            <p className="section5__body">
              Customers are 75% more likely to make another purchase after
              receiving an incentive from a loyalty rewards program.
            </p>
          </div>
        </div>

        <div className="section6">
          <div className="section6__text-container">
            <p className="section6__header">More customers</p>
            <p className="section6__body">
              84% of customers say they’re more likely to shop with a brand that
              offers loyalty rewards.
            </p>
          </div>
          <div className="section6__image-container">
            <img
              className="section6__image"
              alt="customer shopping 2"
              src={stockScan2}
            />
          </div>
        </div>

        <div className="section5">
          <div className="section5__image-container">
            <img
              className="section5__image"
              alt="customer shopping 3"
              src={stockScan3}
            />
          </div>
          <div className="section5__text-container">
            <p className="section5__header">More referrals</p>
            <p className="section5__body">
              70% of customers are more likely to recommend a brand if it has a
              good loyalty rewards program.
            </p>
          </div>
        </div>
      </div>

      <div className="ui-gallery">
        <div className="ui-gallery__screen-container">
          <div className="ui-gallery__text-container">
            <p className="ui-gallery__header">EARN POINTS</p>
          </div>
          <img className="ui-gallery__image" alt="app screen 1" src={screen1} />
        </div>
        <div className="ui-gallery__screen-container">
          <div className="ui-gallery__text-container">
            <p className="ui-gallery__header">TRACK REWARDS</p>
          </div>
          <img className="ui-gallery__image" alt="app screen 2" src={screen2} />
        </div>
        <div className="ui-gallery__screen-container">
          <div className="ui-gallery__text-container">
            <p className="ui-gallery__header">PAY IN STORE</p>
          </div>
          <img className="ui-gallery__image" alt="app screen 3" src={screen3} />
        </div>
        <div className="ui-gallery__screen-container">
          <div className="ui-gallery__text-container">
            <p className="ui-gallery__header">REDEEM POINTS</p>
          </div>
          <img className="ui-gallery__image" alt="app screen 4" src={screen4} />
        </div>
      </div>

      <div className="section4" id="contact">
        <p className="section4__header">Contact Us</p>
        <div className="section4__text-container">
          <div className="section4__contact-container">
            <p className="section4__body">info@cactusapp.ca</p>
            <p className="section4__body">(647) 458-4868</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
