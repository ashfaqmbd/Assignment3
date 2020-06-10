import React from 'react';
//import { findAllByTitle } from '@testing-library/react';

function MediaCard(props)
{
    return(<div>
        <div><h2>{props.title}</h2></div>
        <div><p>This single applicatio page has been designed in create <b>REACT</b> and this is 
  to demonstrate the assignment task that was given by my respected teacher Mr. Zia Khan in class 3 
  regarding <b>BOOTCAMP 2020</b></p></div>
        <div><img src={props.url} width={500} /></div>
    </div>
    );
}

export default MediaCard;