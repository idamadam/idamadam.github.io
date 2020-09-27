import Markdown from "markdown-to-jsx";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import PropTypes from "prop-types";

import Header from "../../shared/components/Header";
import essay from "./essay.md";

const Title = ({ children = "Title" }) => (
  <h1 css={{ fontSize: "3.6em", marginBottom: "0.5em", lineHeight: 0.8 }}>
    {children}
  </h1>
);

Title.propTypes = {
  children: PropTypes.node,
};

const Subheading = ({ children = "Subheading" }) => (
  <h3
    css={{
      marginTop: 0,
      fontFamily:
        "ibm-plex-sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
      fontWeight: 300,
      fontSize: "1.4em",
    }}
  >
    {children}
  </h3>
);

Subheading.propTypes = {
  children: PropTypes.node,
};

const FolioCamp = () => (
  <div css={{ maxWidth: "720px", margin: "0 auto", padding: "2em" }}>
    <Head>
      <title>Idam Adam | Folio Camp</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Global
      styles={css`
        body {
          font-family: ibm-plex-sans, -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
          font-size: 18px;
          line-height: 1.5;
          background: #fff1e5;
          color: #232323;
        }
        h1,
        h2,
        h3 {
          font-family: "source-serif-pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        img {
          width: 100%;
          border-radius: 0.5em;
          box-shadow: 0px 8px 8px rgba(35, 35, 35, 0.2);
        }
      `}
    />
    <Header />
    <Markdown options={{ overrides: { h1: Title, h3: Subheading } }}>
      {essay}
    </Markdown>
  </div>
);

export default FolioCamp;
