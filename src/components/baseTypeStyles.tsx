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
  },
};

export default baseTypeStyles;
