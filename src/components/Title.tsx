interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children = "Title" }: TitleProps) => (
  <h1 css={{ fontSize: "3.6em", marginBottom: "0.5em", lineHeight: 0.8 }}>
    {children}
  </h1>
);

export default Title;
