const Blockquote: React.FunctionComponent = ({ children }) => (
  <div
    css={{
      backgroundColor: "#FFF8F2",
      padding: "1.5em",
      margin: "1em 0",
      borderRadius: "0.5em",
      fontSize: "1.1em",
    }}
  >
    {children}
  </div>
);

export default Blockquote;
