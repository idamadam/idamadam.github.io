import Head from "next/head";
import { GlobalCSS } from "@emotion/core";
import PropTypes from "prop-types";

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
