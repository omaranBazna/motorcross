import react from "react";
import './Tutor.css';
import tutor1 from './graphics/tutors/1.jpg'
import tutor2 from './graphics/tutors/2.jpg'
import tutor3 from './graphics/tutors/3.jpg'


export default function Tutor(props) {
    let tutorImage=null
if(props.image==1){
tutorImage=tutor1;
}
if(props.image==2){
    tutorImage=tutor2;
}
if(props.image==3){
    tutorImage=tutor3;
}


  return (
    <div className="Tutor">
        <img src={tutorImage} />
        <h1>instructor name</h1>
        <p>intructor name have more than 12 years of experience in motors ,he has been played in severals games when he won the first place</p>
   </div>
        )}
    