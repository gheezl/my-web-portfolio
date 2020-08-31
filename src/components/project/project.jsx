import React, { Fragment } from 'react';
import './project.css';


const Project = (name) => {
    return (
        <Fragment>
            <div>
                <span>{name.name}</span>
            </div>
        </Fragment>
    )
}

export default Project;