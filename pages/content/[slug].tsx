/* eslint-disable @typescript-eslint/require-await */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Post from "../../src/components/Post";

interface ContentPageProps {
  content: string;
  title: string;
  heroImages: Array<{ image: string; alt: string }>;
}

export default function ContentPage({
  content,
  title,
  heroImages,
}: ContentPageProps) {
  return <Post content={content} title={title} heroImages={heroImages} />;
}

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

interface StaticProps {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params: { slug } }: StaticProps) {
  const rawMarkdown = fs
    .readFileSync(path.join("src/content", `${slug}.md`))
    .toString();

  const { data, content } = matter(rawMarkdown);

  return {
    props: {
      title: data.title as string,
      heroImages: data.heroImages as Array<string>,
      content,
    },
  };
}
