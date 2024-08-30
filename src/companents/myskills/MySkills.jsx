import './myskills.css'
import { FaHtml5,FaCss3Alt,FaReact,FaPython,FaCuttlefish } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux,SiPostgresql } from "react-icons/si";


function MySkills() {

  return (
    <>
   

    <div class="container2" id="skills">
   
        
        <main class="content2">
            <section class="about">
                <h2>Skills</h2>
                <ul className='lang'>
                    <li>HTML <FaHtml5 /></li>
                    <li>CSS <FaCss3Alt /></li>
                    <li>JavaScript <IoLogoJavascript /></li>
                    <li>React <FaReact /></li>
                    <li>Redux <SiRedux /></li>
                    <li>SQL <SiPostgresql /></li>
                    <li>Python <FaPython /></li>
                    <li>C# <FaCuttlefish /></li>
                </ul>

               
            </section>
        </main>
      
    </div>

    </>
  )
}

export default MySkills
