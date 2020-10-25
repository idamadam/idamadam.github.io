/* eslint-disable @typescript-eslint/require-await */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import PageHead from "../src/components/PageHead";
import Header from "../src/components/Header";
import Hero from "../src/components/Post/Hero";

interface HomeProps {
  posts: Array<{
    metadata: {
      title: string;
      heroImages: Array<{
        image: string;
        alt: string;
      }>;
    };
    slug: string;
  }>;
}

const Intro = () => (
  <p>
    Designing tools to help businesses succeed at{" "}
    <a href="https://myob.com/" target="_blank" rel="noreferrer">
      MYOB
    </a>
    .
    <br />
    Prior experience includes{" "}
    <a href="https://canstar.com.au/" target="_blank" rel="noreferrer">
      Canstar
    </a>
    ,{" "}
    <a href="https://netengine.com.au/" target="_blank" rel="noreferrer">
      NetEngine
    </a>{" "}
    &amp;{" "}
    <a href="https://qut.edu.au/" target="_blank" rel="noreferrer">
      QUT
    </a>
    .
  </p>
);

const PostList = ({ posts }: HomeProps) => (
  <div css={{ display: "grid" }}>
    {posts.map((post) => (
      <div
        key={post.slug}
        css={{
          display: "grid",
          gridTemplateColumns: "4fr 1fr",
          alignItems: "center",
          gridGap: "1em",
        }}
      >
        <Hero images={post.metadata.heroImages} />
        <Link href={`/content/${post.slug}`}>{post.metadata.title}</Link>
      </div>
    ))}
  </div>
);

const Home = ({ posts }: HomeProps) => (
  <div
    css={{
      display: "grid",
      gridTemplateColumns: "1fr min(65ch,100%) 1fr",
    }}
  >
    <PageHead />
    <Header />
    <div css={{ gridColumn: 2 }}>
      <h1>Idam Adam</h1>
      <Intro />
      <PostList posts={posts} />
    </div>
  </div>
);

export default Home;

export async function getStaticProps() {
  const files = fs.readdirSync("src/content");

  const posts = files.map((filename) => {
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
