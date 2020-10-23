interface ImageGridProps {
  children: React.ReactNode;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  fullbleed?: boolean;
  shadow?: boolean;
}

function ImageGrid({
  children,
  gridTemplateColumns = "repeat(auto-fill, minmax(200px, 1fr))",
  gridTemplateRows = "1fr",
  fullbleed = false,
  shadow = true,
}: ImageGridProps) {
  const style = {
    display: "grid",
    gridGap: "1em",
    gridTemplateColumns,
    gridTemplateRows,
    gridColumn: fullbleed ? "1 / -1" : "2",
    "& > img": {
      // This is to only turn the shadow off, the shadow is defined in Image.tsx
      boxShadow: shadow ? "" : "none",
    },
  };

  return <div css={style}>{children}</div>;
}

export default ImageGrid;
