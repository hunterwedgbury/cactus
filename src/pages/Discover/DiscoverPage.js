import "./DiscoverPage.scss";

import searchIcon from "../../assets/search.png";

import DiscoverList from "../../components/DiscoverList/DiscoverList";

function DiscoverPage() {
  return (
    <section className="discover">
      <div className="discover__search-box-container">
        <img className="discover__search-icon" src={searchIcon} />
        <input
          className="discover__search-box"
          type="search"
          placeholder="Search"
        />
      </div>

      <div className="discover__header">
        <h1 className="discover__header--text">Discover</h1>
      </div>

      <div className="discover__discover-list">
        <DiscoverList />
      </div>
    </section>
  );
}

export default DiscoverPage;
