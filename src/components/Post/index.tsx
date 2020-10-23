import Markdown from "markdown-to-jsx";

import PageHead from "../PageHead";
import Header from "../Header";
import Title from "../Title";
import Subheading from "../Subheading";
import Blockquote from "../Blockquote";
import ImageGrid from "../ImageGrid";
import Hero from "./Hero";
import Image from "../Image";

interface PostProps {
  title: string;
  content: string;
  heroImages: Array<{ image: string; alt: string }>;
}

const contentBodyStyle = {
  padding: "2em",
  display: "grid",
  gridTemplateColumns: "1fr min(65ch, 100%) 1fr",
  "& > *": {
    gridColumn: 2,
  },
};

function Post({ title = "", content = "Hello", heroImages }: PostProps) {
  const pageTitle = `Idam Adam ${title ? `| ${title}` : ""}`;

  const markdownOptions = {
    overrides: {
      h1: Title,
      h3: Subheading,
      blockquote: Blockquote,
      img: Image,
      ImageGrid,
    },
  };

  return (
    <div>
      <PageHead title={pageTitle} />
      <Header />
      <article>
        <Hero images={heroImages} css={contentBodyStyle} />
        <Markdown options={markdownOptions} css={contentBodyStyle}>
          {content}
        </Markdown>
      </article>
    </div>
  );
}

export default Post;
