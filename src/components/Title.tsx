import PropTypes from "prop-types";

const Title = ({ children = "Title" }) => (
  <h1 css={{ fontSize: "3.6em", marginBottom: "0.5em", lineHeight: 0.8 }}>
    {children}
  </h1>
);

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
