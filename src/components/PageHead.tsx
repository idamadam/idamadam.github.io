import Head from "next/head";
import { Global } from "@emotion/core";

const nativeFonts =
  '-apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const globalStyles = {
  body: {
    fontFamily: `ibm-plex-sans, ${nativeFonts}`,
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: 1.5,
    background: "#fff1e5",
    color: "#232323",
  },
  "h1,h2": {
    fontFamily: `source-serif-pro, ${nativeFonts}`,
  },
  img: {
    width: "100%",
    borderRadius: "0.5em",
    boxShadow: "0px 8px 16px #ffddcc",
  },
};

interface PageHeadProps {
  title: string;
}

const PageHead = ({ title = "Idam Adam" }: PageHeadProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Global styles={globalStyles} />
  </div>
);

export default PageHead;
