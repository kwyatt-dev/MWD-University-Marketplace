import { Link } from "react-router-dom";
import "../../index.css";
const Footer = () => (
  <footer>
    <nav>
      <ul class="footer-ul">
        <li>
          <Link to="/" id="footer-link">Home</Link>
        </li>
        <li>
          <Link to="/users" id="footer-link">Users</Link>
        </li>
        <li>
          <Link to="/profile" id="footer-link">Profile</Link>
        </li>
        <li>
          <Link to="/profile/awong2@nd.edu" id="footer-link">Ava Profile</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
