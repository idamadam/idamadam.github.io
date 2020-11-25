interface HeroProps {
  images: Array<{ image: string; alt: string }>;
}

const Phone = ({ src, alt }: React.ImgHTMLAttributes<string>) => (
  <div
    css={{
      padding: "0.1em 0.4em",
      paddingTop: "1em",
      backgroundColor: "#FFF8F2",
      borderRadius: "1em",
      boxShadow:
        "inset 0 4px 7px 1px #fff, inset 0 -5px 20px rgba(173,186,204,.25), 0 2px 6px rgba(0,21,64,.14), 0 10px 20px rgba(0,21,64,.05)",
      "@media (min-width: 420px)": {
        padding: "0.5em 0.75em",
        paddingTop: "1.8em",
      },
    }}
  >
    <img
      css={{ boxShadow: "none", width: "100%", borderRadius: "0.5em" }}
      src={src}
      alt={alt}
    />
  </div>
);

const ThreeImageHero = ({ images }: HeroProps) => (
  <div
    css={{
      display: "grid",
      gridTemplateColumns: "0.8fr 1fr 0.8fr",
      gridGap: "1em",
      alignItems: "center",
      padding: "0 1em",
      "@media (min-width: 420px)": {
        gridGap: "1.8em",
        padding: "0 3em",
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
    marginTop: "2em",
    display: "grid",
    padding: "0 1em",
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
      <img
        css={{
          width: "100%",
          borderRadius: "1em",
          boxShadow:
            "inset 0 4px 7px 1px #fff, inset 0 -5px 20px rgba(173,186,204,.25), 0 2px 6px rgba(0,21,64,.14), 0 10px 20px rgba(0,21,64,.05)",
        }}
        src={images[0].image}
        alt={images[0].alt}
      />
    </div>
  );
}

export default Hero;
