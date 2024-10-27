import React from "react";
import "../Components/style/profile.css";
import profileImage from "../assets/myimg.png";  
import hire from "../assets/hireme.png"
import { Link } from 'react-scroll'

const Profile = () => {
    return (
        <div className="intro-section">
            <div className="intro-content">
                <div className="text-content">
                    <h2>Hello,</h2>
                    <h1>
                        I’m <span className="highlight">Lourdez Parker</span>
                    </h1>
                    <h2>FullStack Developer</h2>
                    <p>
                        Full Stack Developer skilled in Spring Boot, React,AWS and DevOps dedicated to building seamless, scalable applications across the tech stack.
                    </p>
                    <Link><button className="hire-button"><img src={hire} alt="" className="hireimg" />
                        Hire me</button></Link>
                </div>
                <div className="image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
