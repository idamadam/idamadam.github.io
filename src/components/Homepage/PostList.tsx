import Link from "next/link";
import Hero from "../Post/Hero";

interface PostProps {
  slug: string;
  title: string;
  blurb: string;
  heroImages: Array<{
    image: string;
    alt: string;
  }>;
}

const Post = ({ slug, title, heroImages, blurb }: PostProps) => (
  <div
    key={slug}
    css={{
      display: "grid",
      gridTemplateColumns: "1fr",
      "@media (min-width: 560px)": {
        gridTemplateColumns: "3fr 1fr",
      },
      alignItems: "center",
      gridGap: "2em",
    }}
  >
    <Hero images={heroImages} />
    <div>
      <h2
        css={{
          lineHeight: 1,
          marginTop: 0,
        }}
      >
        {title}
      </h2>
      <p>{blurb}</p>
      <Link href={`/content/${slug}`}>View project →</Link>
    </div>
  </div>
);

export interface PostListProps {
  posts: Array<{
    metadata: {
      title: string;
      blurb: string;
      heroImages: Array<{
        image: string;
        alt: string;
      }>;
    };
    slug: string;
  }>;
}

const PostList = ({ posts }: PostListProps) => (
  <div css={{ display: "grid" }}>
    {posts.map((post) => (
      <Post
        key={post.slug}
        title={post.metadata.title}
        slug={post.slug}
        blurb={post.metadata.blurb}
        heroImages={post.metadata.heroImages}
      />
    ))}
  </div>
);

export default PostList;
