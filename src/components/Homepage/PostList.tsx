import Post from "./Post";

interface PostProps {
  metadata: {
    title: string;
    blurb: string;
    heroImages: Array<{
      image: string;
      alt: string;
    }>;
    pageRank: number;
  };
  slug: string;
}

export interface PostListProps {
  posts: PostProps[];
}

function compare(a: PostProps, b: PostProps) {
  if (a.metadata.pageRank < b.metadata.pageRank) {
    return -1;
  }

  if (a.metadata.pageRank > b.metadata.pageRank) {
    return 1;
  }

  return 0;
}

const PostList = ({ posts }: PostListProps) => {
  const sortedPosts = posts.sort(compare);

  return (
    <div css={{ marginTop: "2em" }}>
      <h2 css={{ marginBottom: 0, color: "#B5866E" }}>Selected projects</h2>
      <div css={{ display: "grid" }}>
        {sortedPosts.map((post) => (
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
};

export default PostList;
