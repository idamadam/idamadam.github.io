const year = new Date().getFullYear();

const Footer = () => (
  <footer css={{ textAlign: "center", padding: "2em" }}>
    © {year} idam adam
  </footer>
);

export default Footer;
