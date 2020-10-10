import PropTypes from "prop-types";

const Blockquote = ({ children }) => (
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

Blockquote.propTypes = {
  children: PropTypes.node,
};

export default Blockquote;
