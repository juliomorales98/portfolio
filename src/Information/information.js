import React from 'react';
import './Information.css';

const information = (props) =>{
    return(
       <div className='information'>
           <h1>{props.title}</h1>
           <p>{props.par}</p>
           {props.children}
       </div> 
    );
}


export default information;