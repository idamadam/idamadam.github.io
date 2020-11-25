const year = new Date().getFullYear();

const Footer = () => (
  <footer css={{ textAlign: "center", padding: "2em", color: "#B5866E" }}>
    <span css={{ fontWeight: 500 }}>© {year} idam adam</span>
    <br />
    <span css={{ fontSize: "0.8em" }}>
      Built with{" "}
      <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
        Next.js
      </a>
      . Read my code on{" "}
      <a
        href="https://github.com/idamadam/idamadam.com"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Github
      </a>
    </span>
  </footer>
);

export default Footer;
