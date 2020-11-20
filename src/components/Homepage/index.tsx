/* eslint-disable @typescript-eslint/require-await */

import Link from "next/link";

import PageHead from "../PageHead";
import Header from "../Header";
import Hero from "../Post/Hero";
import Intro from "./Intro";

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

export interface HomeProps {
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

const Homepage = ({ posts }: HomeProps) => (
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

export default Homepage;
