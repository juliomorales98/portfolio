import React from 'react';
import './project.css';

const project = (props) => {
    return(
        <div className='project'>
            <h2>{props.title}</h2>
            <h4>Description:</h4>
            <p>{props.description}</p>
            <img src={props.img} alt="" width="250" height="250"/>
        </div>
    );

};

export default project;