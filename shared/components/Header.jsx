/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from "next/link";

function Header() {
  return (
    <div>
      <Link href="/" passHref>
        <a
          css={{
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
