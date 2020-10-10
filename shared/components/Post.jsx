import Markdown from "markdown-to-jsx";
import PropTypes from "prop-types";

import PageHead from "./PageHead";
import Header from "./Header";
import Title from "./Title";
import Subheading from "./Subheading";
import Blockquote from "./Blockquote";

function Post({ title = "", content = "Hello" }) {
  const pageTitle = `Idam Adam ${title ? `| ${title}` : ""}`;

  const contentBodyStyle = {
    maxWidth: "720px",
    margin: "0 auto",
    padding: "2em",
  };

  const markdownOptions = {
    overrides: {
      h1: Title,
      h3: Subheading,
      blockquote: Blockquote,
    },
  };

  return (
    <div>
      <PageHead title={pageTitle} />
      <Header />
      <div css={contentBodyStyle}>
        <Markdown options={markdownOptions}>{content}</Markdown>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Post;
