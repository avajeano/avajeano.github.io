import React, { useEffect, useState } from 'react';
import '../index.css';
import './style sheets/Home.css';

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
                <div className='home-content'>
                    <h1 className='name-title'>Ava Isaacson</h1>
                    <h2 className='role-subtitle'>{roles[currentRoleIndex]}</h2>
                </div>
            </section>
        </>
    )
}

export default Home; 