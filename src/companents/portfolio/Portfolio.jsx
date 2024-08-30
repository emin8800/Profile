import './portfolio.css';

function Portfolio() {
  return (
    <>
      <div className="container2" id="portfolio">
        <main className="content2">
          <section className="about">
            <h2>Projects</h2>
            <ul className="imgs">
             <a href=""><li><img src="src/assets/1.jpg" alt="Skill 1" /></li></a> 
             <a href=""><li><img src="src/assets/2.jpg" alt="Skill 1" /></li></a> 
             <a href=""><li><img src="src/assets/3.jpg" alt="Skill 1" /></li></a> 
             <a href=""><li><img src="src/assets/4.jpg" alt="Skill 1" /></li></a> 
             <a href=""><li><img src="src/assets/5.jpg" alt="Skill 1" /></li></a> 
             <a href=""><li><img src="src/assets/6.jpg" alt="Skill 1" /></li></a> 
            </ul>
          </section>
        </main>
      </div>
    </>
  );
}

export default Portfolio;
