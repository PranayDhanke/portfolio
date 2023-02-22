import React from 'react'
import './Home.css'
import '.././Style.css'
import {Link} from 'react-scroll/modules'

const Home = () => {
    return (
        <div className="Home">
            <div className="home-header">
                <div className="My-logo">
                    <h1 className='h1'>P</h1>
                    <h1 className='h1'>RANAY</h1>
                </div>
                <div className="home-contents">
                    <nav>
                        <li><Link spy={true} smooth={true} to='Home'>Home</Link></li>
                        <li><Link spy={true} smooth={true} to='About'>About</Link></li>
                        <li><Link spy={true} smooth={true} to='Contact'>Contact</Link></li>
                    </nav>
                </div>
            </div>
            <div className="home-body">
                <div className="body-left-contain">
                    <div className="ani">
                        <span>Web-Developer / App Developer</span>
                    </div>
                    <div className="h1s">
                        <h1 >Hi, I`m</h1>
                        <h1 className='red-h1'>Pranay</h1>
                    </div>
                    <h1> From Maharashtra, India</h1>
                    <a href="My_Resume.pdf" download='My_Resume.pdf'>
                        <button  className='btn'>My Resume</button>
                    </a>
                </div>
                <div className="body-right-contain">
                    
                </div>
            </div>
        </div>
    )
}

export default Home