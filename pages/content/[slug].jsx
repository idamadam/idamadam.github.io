import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PropTypes from "prop-types";

import Post from "../../src/components/Post";

export default function ContentPage({ content, title }) {
  return <Post content={content} title={title} />;
}

ContentPage.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
};

export async function getStaticPaths() {
  const files = fs.readdirSync("src/content");

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
    .readFileSync(path.join("src/content", `${slug}.md`))
    .toString();

  const { data, content } = matter(rawMarkdown);

  return {
    props: {
      title: data.title,
      content,
    },
  };
}