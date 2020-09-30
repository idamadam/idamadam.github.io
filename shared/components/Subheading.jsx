import PropTypes from "prop-types";

const Subheading = ({ children = "Subheading" }) => (
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

Subheading.propTypes = {
  children: PropTypes.node,
};

export default Subheading;
