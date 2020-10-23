import Markdown from "markdown-to-jsx";

import PageHead from "./PageHead";
import Header from "./Header";
import Title from "./Title";
import Subheading from "./Subheading";
import Blockquote from "./Blockquote";
import ImageGrid from "./ImageGrid";

interface PostProps {
  title: string;
  content: string;
}

function Post({ title = "", content = "Hello" }: PostProps) {
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
      <Markdown options={markdownOptions} css={contentBodyStyle}>
        {content}
      </Markdown>
    </div>
  );
}

export default Post;
