import Head from "next/head";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/core";

const GlobalCSS = () => (
  <Global
    styles={css`
      body {
        font-family: ibm-plex-sans, -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 300;
        font-size: 18px;
        line-height: 1.5;
        background: #fff1e5;
        color: #232323;
      }
      h1,
      h2 {
        font-family: "source-serif-pro", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
      }
      img {
        width: 100%;
        border-radius: 0.5em;
        box-shadow: 0px 8px 16px #ffddcc;
      }
    `}
  />
);

const PageHead = ({ title = "Idam Adam" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <GlobalCSS />
  </div>
);

PageHead.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHead;
