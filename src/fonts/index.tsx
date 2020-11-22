const nativeFonts =
  '-apple-system, BlinkMacSystemFont,"Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

const baseTypeStyles = {
  body: {
    fontFamily: `ibm-plex-sans, ${nativeFonts}`,
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: 1.5,
    background: "#fff1e5",
    color: "#232323",
  },
  "h1,h2": {
    fontFamily: `source-serif-pro, ${nativeFonts}`,
    marginBottom: "0",
  },
  a: {
    color: "#7C5D4C",
    fontWeight: 500,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

export default baseTypeStyles;

interface TypeComponentProps {
  children: React.ReactNode;
}

const H1 = ({ children = "H1" }: TypeComponentProps) => (
  <h1 css={{ fontSize: "3.6em", marginBottom: "0.2em", lineHeight: 0.8 }}>
    {children}
  </h1>
);

const H3 = ({ children = "H3" }: TypeComponentProps) => (
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

export { H1, H3, baseTypeStyles };
