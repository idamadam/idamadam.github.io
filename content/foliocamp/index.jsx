import Markdown from "markdown-to-jsx";
import { Global, css } from "@emotion/core";
import Head from "next/head";

import Header from "../../shared/components/Header";
import essay from "./essay.md";

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
        }
      `}
    />
    <Header />
    <Markdown>{essay}</Markdown>
  </div>
);

export default FolioCamp;
