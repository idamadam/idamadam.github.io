/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from "next/link";

const Header = () => (
  <div
    css={{
      padding: "0 2em",
      margin: "0 auto",
      marginTop: "2.5em",
      "@media (min-width: 960px)": {
        position: "fixed",
      },
    }}
  >
    <div>
      <Link href="/" passHref>
        <a
          css={{
            fontSize: "1.1em",
            textDecoration: "none",
            fontWeight: 700,
            color: "#CFAF9F",
            transition: "color 250ms ease-in-out",
            "&:hover": {
              textDecoration: "none",
              color: "#B5866E",
            },
          }}
        >
          idam adam
        </a>
      </Link>
    </div>
  </div>
);

export default Header;
