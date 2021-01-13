import React from 'react';

const information = (props) =>{
    return(
       <div>
           <h1>{props.name}</h1>
           <p>{props.interests}</p>
       </div> 
    );
}


export default information;