interface HeroProps {
  images: Array<{ image: string; alt: string }>;
}

const Phone = ({ src, alt }: React.ImgHTMLAttributes<string>) => (
  <div
    css={{ padding: "0.8em", backgroundColor: "#FFF8F2", borderRadius: "1em" }}
  >
    <img css={{ boxShadow: "none", width: "100%" }} src={src} alt={alt} />
  </div>
);

const ThreeImageHero = ({ images }: HeroProps) => (
  <div
    css={{
      display: "grid",
      gridTemplateColumns: "0.8fr 1fr 0.8fr",
      gridGap: "1em",
      alignItems: "center",
      "@media (min-width: 420px)": {
        gridGap: "3em",
        padding: "1em 3em",
      },
    }}
  >
    <Phone src={images[0].image} alt={images[0].alt} />
    <Phone src={images[1].image} alt={images[1].alt} />
    <Phone src={images[2].image} alt={images[2].alt} />
  </div>
);

function Hero({ images }: HeroProps) {
  const heroGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr min(65ch, 100%) 1fr",
    "& > *": {
      gridColumn: 2,
    },
  };

  if (images.length === 3) {
    return (
      <div css={heroGridStyle}>
        <ThreeImageHero images={images} />
      </div>
    );
  }

  return (
    <div css={heroGridStyle}>
      <img css={{ width: "100%" }} src={images[0].image} alt={images[0].alt} />
    </div>
  );
}

export default Hero;
