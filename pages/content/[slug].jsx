import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PropTypes from "prop-types";

import CaseStudy from "../../shared/components/CaseStudy";

export default function Post({ content, title }) {
  return <CaseStudy content={content} title={title} />;
}

Post.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
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
  const rawMarkdown = fs
    .readFileSync(path.join("content", `${slug}.md`))
    .toString();

  const { data, content } = matter(rawMarkdown);

  return {
    props: {
      title: data.title,
      content,
    },
  };
}
