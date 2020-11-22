import Post from "./Post";

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
  <div css={{ marginTop: "2em" }}>
    <h2 css={{ marginBottom: 0, color: "#B5866E" }}>Selected projects</h2>
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
  </div>
);

export default PostList;
