import Markdown from "markdown-to-jsx";

import PageHead from "../PageHead";
import Header from "../Header";
import Title from "../Title";
import Subheading from "../Subheading";
import Blockquote from "../Blockquote";
import ImageGrid from "../ImageGrid";
import Hero from "./Hero";

interface PostProps {
  title: string;
  content: string;
  heroImages: Array<string>;
}

function Post({ title = "", content = "Hello", heroImages }: PostProps) {
  const pageTitle = `Idam Adam ${title ? `| ${title}` : ""}`;

  const contentBodyStyle = {
    padding: "2em",
    display: "grid",
    gridTemplateColumns: "1fr min(65ch, 100%) 1fr",
    "& > *": {
      gridColumn: 2,
    },
  };

  const markdownOptions = {
    overrides: {
      h1: Title,
      h3: Subheading,
      blockquote: Blockquote,
      ImageGrid,
    },
  };

  return (
    <div>
      <PageHead title={pageTitle} />
      <Header />
      <article css={contentBodyStyle}>
        <Hero images={heroImages} />
        <Markdown options={markdownOptions}>{content}</Markdown>
      </article>
    </div>
  );
}

export default Post;
