import React, { Fragment } from 'react';
import './projects.css';

import Pokedex from "../../images/pokedex3.gif"
import Rings from "../../images/collect-the-rings.gif"
import SpaceX from "../../images/space-x-wiki.gif"

import Project from "../project/project.jsx"

const Projects = () => {
    const projects = [
        {
            name: "Pokedex",
            image: Pokedex,
            url: "https://5f4d532dd24745000828cbe8--quizzical-sammet-b48e6f.netlify.app/",
            description: "Out of all the projects I have made, this one is my personal favorite. This is a responsive Pokédex webapp that utilizes the PokéApi, as well as firebase to create a fully functioning Pokémon experience. The project utilizes React as the framework and Redux as the state management,as well as a variety of other libraries such as React Router, React Particles, and Redux Saga.",
        },
        {
            name: "Collect the Rings",
            image: Rings,
            url: "https://jovial-pike-6e6ef8.netlify.app/",
            description: "This is a simple game I made using vanilla javascript, html, and css. It takes heavy inspiration from the classic snake game while being completely different. The goal is to collect as many rings as you can as quickly as possible while avoiding both the edges of the game board and the red dots. It saves the users high score using the browsers local storage. This is the only personal project on my portfolio that is not mobile friendly",
        },
        {
            name: "Space X Wiki",
            image: SpaceX,
            url: "https://nifty-sinoussi-80d3fa.netlify.app/",
            description: "This project is very simple, all it does is display some data I got off of a public space X graphql api I found. The main reason I decided to make this project was mostly just to demonstrate that ik how to communicate with a database that doesn't follow the traditional REST format."
        },
    ]


    return (
        <Fragment>
            <div className="personal-projects">
                <span>My Personal Projects</span>
            </div>
            {
                projects.map(project => (
                    <Project key={project.name} value={project} />
                ))
            }
        </Fragment>
    )
}

export default Projects;