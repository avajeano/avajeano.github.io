import React, { useEffect, useState } from 'react';
import '../index.css';
import './style sheets/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const roles = ["Software Engineer", "Web Developer", "Solutions Engineer", "Full-Stack Engineer"]

function Home() {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className='home-section' id='home'>
                <div className='home-wrapper'>
                    <div className='home-content'>
                        <h1 className='name-title'>Ava Isaacson</h1>
                        <h2 className='role-subtitle'>{roles[currentRoleIndex]}</h2>
                    </div>

                    <div className="social-icon-links">
                        <a href="https://www.linkedin.com/in/avaisaacson/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
                        </a>
                        <a href="https://github.com/avajeano" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home; 