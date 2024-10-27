import React from 'react'
import "../Components/style/intro.css"
import bg from '../../src/assets/myimg.png'
import {Link} from 'react-scroll'
import btnimg from '../../src/assets/hireme.png'
function Intro() {
    return (
       <section id="intro">
        <span className="hello">hello </span>
        <span className="introtext">I'am <span className="introname"> Lourdez Parker</span><br />
        FullStack Developer 
        </span>
        <p className="intopara">Full Stack Developer skilled in Spring Boot, React,AWS and DevOps <br /> dedicated to building seamless, scalable applications across the tech stack.</p>
       <Link><button className='btn'><img src={btnimg} alt="" />Hire Me</button></Link>
        <div className="introcontent">
            <img src={bg} className='bg' alt="" />
        </div>
       </section>
    )
}

export default Intro