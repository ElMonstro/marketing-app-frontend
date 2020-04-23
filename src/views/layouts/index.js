import React from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer";
import "./index.scss";

function HomeLayout(props) {
  return (
    <div className="mdl-layout__container">
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header mdl-layout__header--transparent">
          <div className="mdl-layout__header-row">
            {/* <!-- Title --> */}
            <span className="mdl-layout-title">
              <Link to="/" className="homepage-link">
                Jambo SMS
              </Link>
            </span>
            {/* <!-- Add spacer, to align navigation to the right --> */}
            <div className="mdl-layout-spacer"></div>
            {/* <!-- Navigation --> */}
            <nav className="mdl-navigation">
              <span
                style={{ color: "#1B7EC2", fontWeight: 600 }}
                className="nav-link mdl-navigation__link "
              >
                <button
                  id="demo-menu-lower-left"
                  className="mdl-button mdl-js-button"
                  style={{
                    color: "#1B7EC2",
                    fontWeight: 500,
                    textTransform: "lowercase",
                  }}
                >
                  Products
                </button>
                <ul
                  className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"
                  htmlFor="demo-menu-lower-left"
                >
                  <Link to="/ussd" className="homepage-link">
                    <span
                      style={{ color: "#1B7EC2" }}
                      className="mdl-menu__item"
                    >
                      USSD
                    </span>
                  </Link>
                  <Link to="/bulk-sms" className="homepage-link">
                    <span
                      style={{ color: "#1B7EC2" }}
                      className="mdl-menu__item"
                    >
                      Bulk SMS{" "}
                    </span>{" "}
                  </Link>
                </ul>
              </span>
              <span
                style={{ color: "#1B7EC2", fontWeight: 600 }}
                className="nav-link mdl-navigation__link"
              >
                pricing
              </span>
              <span
                style={{ color: "#1B7EC2", fontWeight: 600 }}
                className="nav-link mdl-navigation__link"
              >
                about us
              </span>
              <span
                style={{ color: "#B30059", fontWeight: 600 }}
                className="nav-link mdl-navigation__link"
              >
                reseller
              </span>
              <span
                style={{ color: "#1B7EC2", fontWeight: 600 }}
                className="nav-link mdl-navigation__link"
              >
                API's
              </span>
              <Link to="/auth" className="homepage-link">
                <span
                  style={{ color: "#1B7EC2", fontWeight: 600 }}
                  className="nav-link mdl-navigation__link"
                >
                  login
                </span>
              </Link>
            </nav>
            <div></div>
          </div>
        </header>
        <main className="mdl-layout__content">
          {props.children}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default HomeLayout;
