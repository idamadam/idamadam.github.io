import fs from "fs";
import path from "path";
import PropTypes from "prop-types";

import CaseStudy from "../../shared/components/CaseStudy";

export default function Post({ content }) {
  return <CaseStudy content={content} />;
}

Post.propTypes = {
  content: PropTypes.string,
};

export async function getStaticPaths() {
  const files = fs.readdirSync("content");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs
    .readFileSync(path.join("content", `${slug}.md`))
    .toString();

  return {
    props: {
      content: markdown,
    },
  };
}
