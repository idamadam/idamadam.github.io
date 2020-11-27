/* eslint-disable @typescript-eslint/require-await */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Homepage from "../src/components/Homepage";

export default Homepage;

export async function getStaticProps() {
  const files = fs.readdirSync("src/content");

  // Handle .DS_Store files
  const filteredFiles = files.filter((filename) => !filename.startsWith("."));

  const posts = filteredFiles.map((filename) => {
    const rawMarkdown = fs
      .readFileSync(path.join("src/content", `${filename}`))
      .toString();

    const { data } = matter(rawMarkdown);

    return {
      metadata: data,
      slug: filename.replace(".md", ""),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
