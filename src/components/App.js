import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {

   const projects = [
    { name: "Weather App", description: "An app that shows live weather updates." },
    { name: "Todo App", description: "Manage daily tasks efficiently." },
    { name: "E-Commerce Website", description: "A shopping website for gadgets." }
  ];
  return (
    <div id="main">
     
     {projects.map((project, index) => ( 
        <div key={index}>
           <h1 data-ns-test="project-name">{project.name}</h1>
           <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
     ))}

    </div>
  )
}


export default App;
