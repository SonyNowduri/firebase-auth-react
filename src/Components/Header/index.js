import { Link, withRouter, useHistory } from "react-router-dom";
import { removeData } from "../../storage/storeData";

// import Cookie from 'js-cookie'

import "./index.css";

const Header = (props) => {
  const history = useHistory();
  const onClickLogout = async () => {
    await removeData("accessToken");
    history.replace("/login");
  };
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <p>Dummy</p>
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/categories" className="nav-link">
            <li>Categories</li>
          </Link>
          <Link to="/services" className="nav-link">
            <li>Services</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>

        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
    </nav>
  );
};
export default withRouter(Header);
