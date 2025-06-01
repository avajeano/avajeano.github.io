import './style sheets/Projects.css'
import '../index.css'
import WallStreetSim from '../assets/WallStreetSim.png'
import Restaurants from '../assets/Restaurants.png'
import GoodFeed from '../assets/GoodFeed.png'
import BookRecommender from '../assets/BookRecommender.png'

function Projects() {
    return (
        <>
            <section className='projects-section'>
            <h1 className="projects-heading">Projects</h1>
            
                <div className='project-boxes'>
                
                <div className="project-box">
                    <div className="content-box">
                        <h3>Semantic Book Recommender</h3>
                        <div className="project-content">
                        <img src={BookRecommender} alt="Book Recommender Screenshot" className="project-image" />
                        
                        <div className="project-info">
                            <div className="project-links">
                            <a href="https://github.com/avajeano/semantic_book_recommender" className="project-button" target="_blank">GitHub Repo</a>
                            </div>

                            <div className="project-tags">
                                <span className="tag">Python</span>
                                <span className="tag">PyTorch</span>
                                <span className="tag">LangChain</span>
                                <span className="tag">Numpy</span>
                                <span className="tag">Pandas</span>
                                <span className="tag">Hugging Face Transformers</span>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="content-box">
                        <h3>WallStreetSim</h3>
                        <div className="project-content">
                        <img src={WallStreetSim} alt="WallStreetSim Screenshot" className="project-image" />
                        
                        <div className="project-info">
                            <div className="project-links">
                            <a href="https://wallstreetsim-live.onrender.com" className="project-button" target="_blank">Website</a>
                            <a href="https://github.com/avajeano/wallstreetsim" className="project-button" target="_blank">GitHub Repo</a>
                            </div>

                            <div className="project-tags">
                                <span className="tag">JavaScript</span>
                                <span className="tag">React</span>
                                <span className="tag">Node</span>
                                <span className="tag">Express</span>
                                <span className="tag">PostgreSQL</span>
                                <span className="tag">Render</span>
                                <span className="tag">Supabase</span>
                                <span className="tag">Bootstrap</span>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="content-box">
                        <h3>GoodFeed</h3>
                        <div className="project-content">
                        <img src={GoodFeed} alt="GoodFeed Screenshot" className="project-image" />
                        
                        <div className="project-info">
                            <div className="project-links">
                            <a href="https://goodfeed.onrender.com" className="project-button" target="_blank">Website</a>
                            <a href="https://github.com/avajeano/goodfeed" className="project-button" target="_blank">GitHub Repo</a>
                            </div>

                            <div className="project-tags">
                                <span className="tag">Python</span>
                                <span className="tag">Flask</span>
                                <span className="tag">PostgreSQL</span>
                                <span className="tag">Render</span>
                                <span className="tag">Supabase</span>
                                <span className="tag">Bootstrap</span>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>

                <div className="project-box">
                    <div className="content-box">
                        <h3>Restaurants Sheet</h3>
                        <div className="project-content">
                        <img src={Restaurants} alt="Restaurants Screenshot" className="project-image" />
                        
                        <div className="project-info">
                            <div className="project-links">
                            <a href="https://docs.google.com/spreadsheets/d/1j3MhIKRJ8vZsminXZp3LlBsw4IpW49_J3q_Td5omtXY/edit?usp=sharing" className="project-button" target="_blank">Website</a>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>

                </div>
            </section>
        </>
        )
}

export default Projects;  