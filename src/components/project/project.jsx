import React, { Fragment } from 'react';
import './project.css';


const Project = ({ value }) => {
    console.log(value)
    return (
        <Fragment>
            <div className="project-data">
                <div className="project-border">
                    <span className="project-name">{value.name}</span>
                    <span className="project-description" >{value.description}</span>
                    <a href={value.url} >See Live</a>
                </div>
                <div className="image">
                    <img src={value.image} width="700px" height="400px" />
                </div>
            </div>
        </Fragment>
    )
}

export default Project;