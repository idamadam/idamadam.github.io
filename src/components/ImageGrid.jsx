import PropTypes from "prop-types";

function ImageGrid({
  children,
  gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))",
  gridTemplateRows = "1fr",
}) {
  const style = {
    display: "grid",
    gridGap: "1em",
    gridTemplateColumns,
    gridTemplateRows,
  };

  return <div css={style}>{children}</div>;
}

ImageGrid.propTypes = {
  children: PropTypes.node.isRequired,
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
};

export default ImageGrid;
