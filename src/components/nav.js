import React from 'react';
import {Link} from 'gatsby';



const NavBar = () => {
    return (
        <div className='nav'>
            <Link to='/'><h2>Orbit Dev</h2></Link>
             <div className='navprop'>
                <Link to='/about'><h3>ABOUT</h3></Link>
                <Link to='/projects'><h3>PROJECTS</h3></Link>
            </div>
        </div>
    )
};

export default NavBar;