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

const Post = ({ slug, title, heroImages, blurb }: PostProps) => {
  const HeroImageContainer = () => (
    <div
      css={{
        "@media (min-width: 560px)": {
          gridColumn: 2,
        },
      }}
    >
      <Hero images={heroImages} />
    </div>
  );

  const DetailsContainer = () => (
    <div
      css={{
        "@media (min-width: 560px)": {
          gridRow: 1,
        },
      }}
    >
      <h2
        css={{
          lineHeight: 1,
          marginTop: 0,
        }}
      >
        <Link href={`/content/${slug}`}>{title}</Link>
      </h2>
      <p>{blurb}</p>
      <Link href={`/content/${slug}`}>View project →</Link>
    </div>
  );

  const postContainerStyles = {
    display: "grid",
    gridTemplateColumns: "1fr",
    "@media (min-width: 560px)": {
      gridTemplateColumns: "1fr 3fr",
    },
    alignItems: "center",
    gridGap: "2em",
    margin: "1em 0",
    "&:hover": {
      cursor: "pointer",
    },
    "&:hover a": {
      textDecoration: "underline",
    },
  };

  return (
    <Link href={`/content/${slug}`}>
      <div key={slug} css={postContainerStyles}>
        <HeroImageContainer />
        <DetailsContainer />
      </div>
    </Link>
  );
};

export default Post;
