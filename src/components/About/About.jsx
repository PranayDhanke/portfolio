
import React from 'react'
import './About.css'
import Image from '../../images/codel.png'

const About = () => {
    const tablinks = document.getElementsByClassName('tab-links');
    const tabcontents = document.getElementsByClassName('tab-contents');
      
    function sudo(tabname){
        for(var tablink of tablinks){
            tablink.classList.remove('active-link');
        }
        for(var tabcontent of tabcontents){
            tabcontent.classList.remove('active-tab')
        }
       
        document.getElementById(tabname).classList.add('active-tab')
        
    }

    return (
        <div className='About'>
            <div className="image-me">
                <img src={Image} alt="" />
            </div>
            <div className="myInf">
                <h1 className=''>About Me</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia alias deleniti repudiandae minima iste, incidunt esse totam quisquam eos molestias nobis rem odit hic, quidem obcaecati, modi officia consequuntur rerum.
                    Dolorem earum corrupti impedit esse deleniti vitae, accusantium rerum iusto? Deserunt </p>
                <div className="tab-titles event">
                    <span onClick={()=>sudo('skills')} id='links' className='tab-links active-link'>Skills</span>
                    <span onClick={()=>sudo('experence')} id='links' className='tab-links'>Experence</span>
                    <span onClick={()=>sudo('education')} id='links' className='tab-links'>Education</span>
                </div>
                <div className="tab-contents , active-tab" id='skills'>
                    <ul>
                    <li>
                            <span>Web Developer</span> <br />
                            Front-End Developer<br />
                            Full-Stact Developer
                        </li>
                        <li>
                            <span>Android Development</span><br />
                            Building Android App
                        </li>
                    </ul>
                </div>
                <div className="tab-contents" id='experence'>
                    <ul>
                       
                    </ul>
                </div>
                <div className="tab-contents" id='education'>
                    <ul>
                        <li>
                            <span>2021 - 2023</span> <br />
                            Diploma in Computer Engineering ,<br />
                            Government Polytechnic, Arvi
                         </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About