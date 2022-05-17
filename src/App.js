import logo from './graphics/logo.png'
import image1 from './graphics/thumps/1.JPG'
import image2 from './graphics/thumps/2.JPG'
import image3 from './graphics/thumps/3.JPG'
import image5 from './graphics/thumps/5.JPG'
import image6 from './graphics/thumps/6.JPG'


import tutor1 from './graphics/tutors/1.jpg'
import tutor2 from './graphics/tutors/2.jpg'
import tutor3 from './graphics/tutors/3.jpg'

import Tutor from './Tutor'
import React from "react";
import Calender from './Calender'
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
        <img src={logo} />
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
        <h1>meet our tutors</h1>
        <div className='tutors'>
        <Tutor image={1}></Tutor>
        <Tutor image={2}></Tutor>
        <Tutor image={3}></Tutor>
       
        </div>
    </section>
    <section className='calender'>
       <h1>races timeline</h1>
       <Calender>

       </Calender>
      
    </section>
    <section className='results'>

    </section>
    <footer>

    </footer>
     </div>
  );
}
