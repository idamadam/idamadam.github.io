import PropTypes from "prop-types";

function ImageGrid({
  children,
  gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))",
  gridTemplateRows = "1fr",
  fullbleed = false,
}) {
  const style = {
    display: "grid",
    gridGap: "1em",
    gridTemplateColumns,
    gridTemplateRows,
    gridColumn: fullbleed ? "1 / -1" : "2",
  };

  return <div css={style}>{children}</div>;
}

ImageGrid.propTypes = {
  children: PropTypes.node.isRequired,
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  fullbleed: PropTypes.bool,
};

export default ImageGrid;
