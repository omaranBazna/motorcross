import logo from './graphics/logo.png'
import image1 from './graphics/thumps/1.JPG'
import image2 from './graphics/thumps/2.JPG'
import image3 from './graphics/thumps/3.JPG'
import image4 from './graphics/thumps/4.JPG'
import image5 from './graphics/thumps/5.JPG'
import image6 from './graphics/thumps/6.JPG'
import React, { useState } from "react";

import './App.css';

const images = [image1,image2,image3,image4,image5,image6];
export default function App() {
  const [currentImage, setCurrentImage] = useState(0);

  let i=0;

     setInterval(() => {
        i +=1;
        if(i>images.length-1){
          i=0;
        }
          setCurrentImage(i);
      }, 1000)
      
     

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
      
          <img src={images[currentImage]} height="450px" ></img>
    
      
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
