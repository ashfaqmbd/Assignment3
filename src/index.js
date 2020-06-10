import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HiFullName from './HiFullName';
import MediaCard from './MediaCard';
import Gate from './Gate';


ReactDOM.render(
  <div>
    <App />
  <MediaCard title="Media Card Assignment" 
  url="https://www.setaswall.com/wp-content/uploads/2017/06/Linux-Wallpapers-02-1024-x-768.jpg"/>
  <Gate isOpen='false' />

  </div>,
  document.getElementById('root') 
);

// This single applicatio page has been designed in create [<b>REACT</b>] and this is 
//   to demonstrate the assignment task that was given by my respected teacher Mr. Zia Khan in class 3 
//   regarding BOOTCAMP 2020