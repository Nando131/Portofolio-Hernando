import { useRef, useEffect } from 'react';
import gsap from 'gsap'
import './App.css'
import Muka from './assets/Muka.png'

function App() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, {
      x: 30,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <>
    <title>
      My Portofolio
    </title>
      <body class name="body">
        <div className="container1">
        <div className='KotakKenalan'>
            <div className='Judul'>
              <p>
                <span className='nama'>Hernando Front</span>
                <span className='posisi'>  End Developer</span>
              </p>
          </div>
        </div>
        
        <div className='DivGambarKenalan'>

          <div className="TextKenalan">
            <p ref={textRef}>
            <h1>Hello, My name is Hernando. 
              <br/>
              Im is a student in RPL 
              <br/>
              at SMK TRIRATNA</h1>
            </p>
          </div>

          <div>
            <img className='Gambar' src={Muka} alt="Muka" />
          </div>

        </div>

            <div className='AboutMe'>
              <h1>
                About Me & Skill
              </h1>
              <p> Im grade 10 RPL, at SMK Sekolah Triratna. Im choose to RPL because im like coding and i want to study about coding to make some game. And my Skill is  i can do HTML, CSS so its styling the html. i can do some react.</p>
            </div>

          </div>
      </body>
    </>
  )
}

export default App
