const Image = ({
  title = "",
  src = "",
  alt = "",
}: React.ImgHTMLAttributes<string>) => (
  <img
    css={{
      width: "100%",
      borderRadius: "0.5em",
      boxShadow: "0px 8px 16px #ffddcc",
    }}
    title={title}
    src={src}
    alt={alt}
  />
);

export default Image;
