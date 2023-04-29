import { Link } from "react-router-dom";
import "../../index.css";
const Footer = () => (
  // This is the footer component
  <footer>
    <nav>
      <ul class="footer-ul">
        <li>
          <Link to="/" id="footer-link">Market</Link>
        </li>
        <li>
          <Link to="/users" id="footer-link">Users</Link>
        </li>
        <li>
          <Link to="/profile" id="footer-link">Home</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
