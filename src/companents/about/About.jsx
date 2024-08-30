import './About.css'
import { MdDownload } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";

function About() {

  return (
    <>
   

    <div class="container2" id="about">
   
        
        <main class="content2">
            <section class="about">
                <h2>About Me ...</h2>
                <p>Name:Emin <br />
                    Surname:Hesenov <br />
                    Date: 25.12.2000 <br/>
                    Course: Developia <br/>
                    Sertifcate:Python,SQL

                    </p>
                <div class="buttons">
                    <a href="/cv.pdf" className="btn1"  download><MdDownload />CV Download</a>
                    <a href="#" class="btn2"><FiMessageSquare />Hire me</a>
                </div>
            </section>
        </main>
      
    </div>

    </>
  )
}

export default About
