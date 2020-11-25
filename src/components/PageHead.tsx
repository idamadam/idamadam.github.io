import Head from "next/head";
import { Global } from "@emotion/core";
import { baseTypeStyles } from "../fonts";

interface PageHeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const PageHead = ({
  title = "Idam Adam | Product Designer ",
  description = "Product designer at MYOB",
  image = "https://idamadam.com/images/preview.png",
}: PageHeadProps) => (
  <div>
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://idamadam.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://idamadam.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Global styles={baseTypeStyles} />
  </div>
);

export default PageHead;
