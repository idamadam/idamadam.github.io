import Head from "next/head";
import { Global } from "@emotion/core";
import baseTypeStyles from "./baseTypeStyles";

interface PageHeadProps {
  title: string;
}

const PageHead = ({ title = "Idam Adam" }: PageHeadProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Global styles={baseTypeStyles} />
  </div>
);

export default PageHead;
