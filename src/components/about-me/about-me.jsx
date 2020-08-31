import React, { Fragment } from 'react';
import './about-me.css';


const AboutMe = () => {
    return (
        <Fragment>
            <div className="about-me">
                <span className="description-header" >About me</span>
                <span className="description">
                    Hi! My name is Jacob Rushlow, I am a front end web developer and UI designer with a fair amount
                    of personal and profesional experience building responsive web apps for both my own projects,
                    and freelance clients.
                 </span>
                <span className="description" >
                    I am fluent in languages like html, css, and javascript as well as frameworks like React and
                    version contol systems like git.
                 </span>
                <span className="description" >
                    I am very capable of learning anything neccasary for a new project.
                 </span>
            </div>
        </Fragment>
    )
}




export default AboutMe;