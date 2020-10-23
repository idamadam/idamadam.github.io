interface HeroProps {
  images: Array<string>;
}

function Hero({ images }: HeroProps) {
  return <img src={images[0]} alt="hero" />;
}

export default Hero;
