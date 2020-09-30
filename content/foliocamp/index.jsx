import Markdown from "markdown-to-jsx";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import PropTypes from "prop-types";

import Header from "../../shared/components/Header";
import Title from "../../shared/components/Title";
import Subheading from "../../shared/components/Subheading";
import essay from "./essay.md";

const Blockquote = ({ children }) => (
  <p
    css={{
      backgroundColor: "#FFF8F2",
      padding: "1.5em",
      margin: "1em 0",
      borderRadius: "0.5em",
      fontSize: "1.1em",
    }}
  >
    {children}
  </p>
);

Blockquote.propTypes = {
  children: PropTypes.node,
};

const FolioCamp = () => (
  <div>
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
        h2 {
          font-family: "source-serif-pro", -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
            "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        img {
          width: 100%;
          border-radius: 0.5em;
          box-shadow: 0px 8px 16px #ffddcc;
        }
      `}
    />
    <Header />
    <div css={{ maxWidth: "720px", margin: "0 auto", padding: "2em" }}>
      <Markdown
        options={{
          overrides: {
            h1: Title,
            h3: Subheading,
            blockquote: Blockquote,
          },
        }}
      >
        {essay}
      </Markdown>
    </div>
  </div>
);

export default FolioCamp;
