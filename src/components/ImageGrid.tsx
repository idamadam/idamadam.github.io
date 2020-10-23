interface ImageGridProps {
  children: React.ReactNode;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  fullbleed?: boolean;
}

function ImageGrid({
  children,
  gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))",
  gridTemplateRows = "1fr",
  fullbleed = false,
}: ImageGridProps) {
  const style = {
    display: "grid",
    gridGap: "1em",
    gridTemplateColumns,
    gridTemplateRows,
    gridColumn: fullbleed ? "1 / -1" : "2",
  };

  return <div css={style}>{children}</div>;
}

export default ImageGrid;
