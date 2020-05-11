import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Moment from "react-moment";
import Image from "./Image";
import "../scss/styles.scss";

const Layout = ({ settings, children }) => (
  <div id="wrapper">
    <div
      className="content"
      style={{
        color: settings["color"] ? settings["color"] : "none",
        backgroundColor: settings["background-color"]
          ? settings["background-color"]
          : "none",
        background: settings["background-image"]
          ? `url(${settings["background-image"]}) center bottom no-repeat`
          : "none",
      }}
    >
      {settings["logo"] ? (
        <Link to="/">
          <Image
            className="logo"
            src={settings["logo"]}
            alt={settings["title"]}
          />
        </Link>
      ) : null}
      <div>{settings["description"]}</div>
      <div className="title m-b-md">{settings["title"]}</div>
    </div>
    {children}
    <footer className="page-footer">
      <ul className="contact-social">
        {settings["facebook"] ? (
          <li>
            <a
              href={settings["facebook"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} color="#2d88ff" size="2x" />
            </a>
          </li>
        ) : null}
        {settings["youtube"] ? (
          <li>
            <a
              href={settings["youtube"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} color="red" size="2x" />
            </a>
          </li>
        ) : null}
        {settings["github"] ? (
          <li>
            <a
              href={settings["github"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#24292e" size="2x" />
            </a>
          </li>
        ) : null}
        {settings["mailto"] ? (
          <li>
            <a
              href={`mailto:${settings["mailto"]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#333" size="2x" />
            </a>
          </li>
        ) : null}
        {settings["telephone"] ? (
          <li>
            <a
              href={`tel:${settings["telephone"]}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faPhoneSquareAlt} color="#333" size="2x" />
            </a>
          </li>
        ) : null}
      </ul>
      <ul className="copyright">
        <li>
          © <Moment format="YYYY" date={new Date()} /> {settings["title"]}
        </li>
      </ul>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
