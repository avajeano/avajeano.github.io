import './style sheets/About.css'
import '../index.css'
import leftArrow from '../assets/left-arrow.svg';  
import rightArrow from '../assets/right-arrow.svg';

function About() {
    return (
        <section className="about-section">
            <h1 className="about-heading">About</h1>
            <p className="about-summary">
                Operations planner turned software engineer with a passion for solving complex problems and building intuitive, data-driven tools. I bring a unique blend of technical skills and business insight – ideal for roles at the intersection of engineering, product, and customer success.
            </p>

            <div>

                <div className="experience-box right">
                    <div className="content-box-right">
                        <h3>Continuous Learning</h3>
                    </div>
                </div>

                <div className="experience-box left">
                    <img src={leftArrow} alt="arrow left up" className="arrow-image" />
                    <div className="content-box-left">
                        <h3>Software Engineering Certificate</h3>
                    </div>
                </div>

                <div className="experience-box right">
                    <img src={rightArrow} alt="arrow right up" className="arrow-image" />
                    <div className="content-box-right">
                        <h3>Operations Planner</h3>
                    </div>
                </div>

                <div className="experience-box left">
                    <img src={leftArrow} alt="arrow left up" className="arrow-image" />
                    <div className="content-box-left">
                        <h3>Fashion Institute of Technology</h3>
                    </div>

                </div>
                
            </div>
        </section>
    );
}

export default About;
