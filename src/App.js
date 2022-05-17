import logo from './graphics/logo.png'
import image1 from './graphics/thumps/1.JPG'
import image2 from './graphics/thumps/2.JPG'
import image3 from './graphics/thumps/3.JPG'
import image5 from './graphics/thumps/5.JPG'
import image6 from './graphics/thumps/6.JPG'
import React, { useState,useEffect } from "react";

import './App.css';

const images = [image1,image2,image3,image5,image6];
const names=["start","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","middle","end"]
export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [name,setName]=useState("start");
  let i=0;
  let u=0;
useEffect(() => {
  const interval = setInterval(() => {
    i +=1;
    setCurrentImage(i%5);

  }, 3000);
  return () => clearInterval(interval);
}, []);


useEffect(() => {
  const interval = setInterval(() => {
    u +=1;
    setName(names[u%13]);
    
  }, 3000/13);
  return () => clearInterval(interval);
}, []);

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
      
          <img src={images[currentImage]} className={name} height="450px" ></img>
    
      
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
