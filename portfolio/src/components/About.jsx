import './style sheets/About.css'
import '../index.css'
import Arrow from '../assets/arrow.svg';  

function About() {
    return (
        <section className="about-section">
            <h1 className="about-heading">About</h1>
            <p className="about-summary">
                Operations planner turned software engineer with a passion for solving complex problems and building intuitive, data-driven tools. I bring a unique blend of technical skills and business insight – ideal for roles at the intersection of engineering, product, and customer success.
            </p>

            <div className="experience-boxes">

                <div className="experience-box">
                    <div className="content-box">
                        <h3>Continuous Learning</h3>
                        <p>side projects</p>
                    </div>
                </div>

                <div className="experience-box">
                    <img src={Arrow} alt="arrow" className="arrow-image" />
                    <div className="content-box">
                        <h3>Software Engineering Certificate</h3>
                        <p>2023 - 2024</p>
                    </div>
                </div>

                <div className="experience-box">
                    <img src={Arrow} alt="arrow" className="arrow-image" />
                    <div className="content-box">
                        <h3>Operations Planner</h3>
                        <p>2021 - present</p>
                    </div>
                </div>

                <div className="experience-box">
                    <img src={Arrow} alt="arrow" className="arrow-image" />
                    <div className="content-box">
                        <h3>freeCodeCamp</h3>
                        <p>dabbled in the basics during covid</p>
                    </div>
                </div>

                <div className="experience-box">
                    <img src={Arrow} alt="arrow" className="arrow-image" />
                    <div className="content-box">
                        <h3>Fashion Institute of Technology</h3>
                        <p>b.s. in business</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;
