/* eslint-disable @typescript-eslint/require-await */

import PageHead from "../PageHead";
import Header from "../Header";
import Intro from "./Intro";
import PostList, { PostListProps } from "./PostList";

const Homepage = ({ posts }: PostListProps) => (
  <div
    css={{
      display: "grid",
      gridTemplateColumns: "1fr min(65ch,100%) 1fr",
      padding: "1em",
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
