import React from 'react';
import { Link } from 'gatsby';
import NavBar from '../components/nav';

const Hero = () => {
    return (
        <>
        <div className='hero'>
        <NavBar/>
            <div className='herowrap'>
                <h1>Welcome to ORBIT Dev</h1>
                <Link to='/404/'><button className='btn'>Test</button></Link>
            </div>
        </div>
        </>
    )
};

export default Hero;