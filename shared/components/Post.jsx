import Markdown from "markdown-to-jsx";
import Head from "next/head";
import PropTypes from "prop-types";

import GlobalCSS from "./GlobalCss";
import Header from "./Header";
import Title from "./Title";
import Subheading from "./Subheading";
import Blockquote from "./Blockquote";

function Post({ title = "", content = "Hello" }) {
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

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Post;
