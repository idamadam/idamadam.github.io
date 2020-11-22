/* eslint-disable @typescript-eslint/require-await */

import PageHead from "../PageHead";
import Intro from "./Intro";
import PostList, { PostListProps } from "./PostList";

const Homepage = ({ posts }: PostListProps) => (
  <div
    css={{
      padding: "1em",
      display: "grid",
      gridTemplateColumns: "1fr min(65ch,100%) 1fr",
    }}
  >
    <PageHead />
    <div css={{ gridColumn: 2 }}>
      <Intro />
      <PostList posts={posts} />
    </div>
  </div>
);

export default Homepage;
