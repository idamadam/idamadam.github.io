import Markdown from "markdown-to-jsx";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import PropTypes from "prop-types";

import Header from "./Header";
import Title from "./Title";
import Subheading from "./Subheading";
import Blockquote from "./Blockquote";

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

function CaseStudy({ title = "", content = "Hello" }) {
  const pageTitle = `Idam Adam ${title ? `| ${title}` : ""}`;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalCSS />
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
          {content}
        </Markdown>
      </div>
    </div>
  );
}

CaseStudy.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CaseStudy;
