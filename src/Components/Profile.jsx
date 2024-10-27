import React from "react";
import "../Components/style/profile.css";
// G:\JavaScript\React\Portfolio\Parker-Portfolio\src\Components\style\profile.css
import profileImage from "../assets/myimg.png"; // Replace with your actual image path

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
                    <button className="hire-button">Hire me</button>
                </div>
                <div className="image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
            </div>
        </div>
    );
};

export default Profile;
