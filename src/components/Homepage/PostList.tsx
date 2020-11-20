import Link from "next/link";
import Hero from "../Post/Hero";
import { HomeProps } from "./index";

interface PostProps {
  slug: string;
  title: string;
  heroImages: Array<{
    image: string;
    alt: string;
  }>;
}

const Post = ({ slug, title, heroImages }: PostProps) => (
  <div
    key={slug}
    css={{
      display: "grid",
      gridTemplateColumns: "4fr 1fr",
      alignItems: "center",
      gridGap: "1em",
    }}
  >
    <Hero images={heroImages} />
    <Link href={`/content/${slug}`}>{title}</Link>
  </div>
);

const PostList = ({ posts }: HomeProps) => (
  <div css={{ display: "grid" }}>
    {posts.map((post) => (
      <Post
        key={post.slug}
        title={post.metadata.title}
        slug={post.slug}
        heroImages={post.metadata.heroImages}
      />
    ))}
  </div>
);

export default PostList;
