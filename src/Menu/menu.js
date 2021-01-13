import React from 'react';
import './menu.css';

const menu = (props) => {
    return(
        <div className="navBar">
            <img src={props.img} alt=""></img>
            <h3>{props.name}</h3>
            {props.children}
        </div>
    );
};

export default menu;