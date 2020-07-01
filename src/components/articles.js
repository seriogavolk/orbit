import React from 'react';
import { Link } from 'gatsby';
import SEO from "../components/seo"


const Article = () => {
    return (
        <>
        <div className='articleframe'>
            <div className='headerwrap'>
            <h1>What can Orbit do for you?</h1>
            <p>We provide solutions for comapnies who seek to improve their website's performance and seeking for a fresh new responsive look</p>
                </div>
                <div className='gridwrap'>
            <div className='card1'>
                <h1>card1</h1>
                <Link to='/404/'><button className='btn'>Test</button></Link>
            </div>
            <div className='card2 posend'>
                <h1>card2</h1>
                <Link to='/404/'><button className='btn'>Test</button></Link>
            </div>
            <div className='card3'>
                <h1>card3</h1>
                <Link to='/404/'><button className='btn'>Test</button></Link>
            </div>
            </div>
        </div>
        </>
    )
};

export default Article;