import logo from './graphics/logo.png'
import image1 from './graphics/thumps/1.JPG'
import image2 from './graphics/thumps/2.JPG'
import image3 from './graphics/thumps/3.JPG'
import image4 from './graphics/thumps/4.JPG'
import image5 from './graphics/thumps/5.JPG'
import image6 from './graphics/thumps/6.JPG'
import './App.css';

const images = [image1,image2,image3,image4,image5,image6];
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === images.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 5000)
      
      return () => clearInterval(intervalId);
  }, [])

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
     
        
    
       <img src={currentImage} height="450px" ></img>
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

export default App;
