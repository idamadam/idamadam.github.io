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

const Caption = ({ children }: React.PropsWithChildren<React.ReactNode>) => (
  <p
    css={{
      textAlign: "center",
      fontWeight: 600,
      fontSize: "0.8em",
      textTransform: "uppercase",
    }}
  >
    {children}
  </p>
);

export default Image;
export { Image, Caption };
