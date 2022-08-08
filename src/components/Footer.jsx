import React from "react";

import twitterLogo from "../assets/twitter-logo.svg";

// Constants
const MY_TWITTER_HANDLE = "fivehanz";
const MY_TWITTER_LINK = `https://twitter.com/${MY_TWITTER_HANDLE}`;
const BUILDSPACE_TWITTER_HANDLE = "_buildspace";
const BUILDSPACE_TWITTER_LINK = `https://twitter.com/${BUILDSPACE_TWITTER_HANDLE}`;

const Footer = () => {
  return (
    <footer className="footer-container">
      <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
      <p>
        built by{" "}
        <a
          className="footer-text"
          href={MY_TWITTER_LINK}
          target="_blank"
          rel="noreferrer"
        >{`@${MY_TWITTER_HANDLE}`}</a>{" "}
        with{" "}
        <a
          className="footer-text"
          href={BUILDSPACE_TWITTER_LINK}
          target="_blank"
          rel="noreferrer"
        >{`@${BUILDSPACE_TWITTER_HANDLE}`}</a>
      </p>
    </footer>
  );
};

export default Footer;
