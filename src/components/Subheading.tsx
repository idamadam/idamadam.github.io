interface SubheadingProps {
  children: string;
}

const Subheading = ({ children = "Subheading" }: SubheadingProps) => (
  <h3
    css={{
      marginTop: 0,
      fontWeight: 300,
      fontSize: "1.4em",
    }}
  >
    {children}
  </h3>
);

export default Subheading;
