import logo from './graphics/logo.png'
import image1 from './graphics/thumps/1.JPG'
import image2 from './graphics/thumps/2.JPG'
import image3 from './graphics/thumps/3.JPG'
import image5 from './graphics/thumps/5.JPG'
import image6 from './graphics/thumps/6.JPG'
import React from "react";

import './App.css';
export default function App() {





  return (
    <div className="App">
    
    <nav>
      <img src={logo} width="60" height="30"/>
      <div>
        <a herf="#">
        AbuDubiMotor
        </a>
        <a href="#">
         tutors
        </a>
        <a href="#">
         tracks
        </a>
        <a href="#">
        Results
        </a>
      </div>
 

    </nav>
    <section className='hero'>
      <div className='left'>
         <h1>
           Motocross Club in Abu Dhabi
         </h1>
          <h2>
         “Great memories happen when you don’t know where you’re going”
         </h2>
      </div>
      <div className='right'>
      
          <img src={image1}  height="450px" ></img>
    
      
      </div>
      
    </section>
    <section className='tutor'>

    </section>
    <section className='calender'>

    </section>
    <section className='results'>

    </section>
    <footer>

    </footer>
     </div>
  );
}
