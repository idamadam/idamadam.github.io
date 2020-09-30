/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from "next/link";

function Header() {
  return (
    <div css={{ padding: "1em", maxWidth: "1080px", margin: "0 auto" }}>
      <Link href="/" passHref>
        <a
          css={{
            fontSize: "1em",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Idam Adam
        </a>
      </Link>
    </div>
  );
}

export default Header;
