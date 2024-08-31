import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaBriefcase,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function NavBar() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile">
          <img src="src/assets/emin.jpg" alt="Emin Hesenov" />
          <h1>Emin Hesenov</h1>
          <p>WEB DEVELOPER</p>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                <FaBlog /> Skills
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                <FaUser /> About
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={500}>
                <FaBriefcase /> Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                <FaEnvelope /> Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social-media">
          <a
            href="https://www.instagram.com/gasanofff._0/"
            className="insta"
            target="blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@emin_h88"
            className="tt"
            target="blank"
          >
            <FaTiktok />
          </a>

          <a href="https://github.com/emin8800" className="gt" target="blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/emin-hesenov-81b740269/"
            className="li"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://wa.me/994515966841" className="wp" target="blank">
            <FaWhatsapp />
          </a>
        </div>
      </aside>
    </div>
  );
}

export default NavBar;
