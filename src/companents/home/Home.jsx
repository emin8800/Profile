import "./home.css";
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaFileAlt,
  FaBriefcase,
  FaBlog,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import NavBar from "../navbar/NavBar";

function Home() {
  return (
    <>
      <div class="container" id="home">
        <NavBar />

        <main class="content">
          <section class="intro">
            <h2>Men Emin Hesenov</h2>
            <p>
              Artiq 2 aydirki MilliSoft kursunda full stack developer olma
              yolunda addimlayiram. Bu proyekt reactla yigilmisdir.
            </p>
            <div class="buttons">
              <a href="#" class="btn">
                View Portfolio
              </a>
              <a href="mailto:hesenovemin58@gmail.com" class="btn">
                Mesaj Gönder
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
