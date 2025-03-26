import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './App.css';
import Muka from './assets/Muka.png';
import { useState } from 'react';

function App() {
  const textRef = useRef(null);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const handleHomeClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(false);
    setHistoryVisible(false);
    setContactVisible(false);
  };

  const handleAboutMeClick = () => {
    setAboutMeVisible(true);
    setSkillsVisible(false);
    setHistoryVisible(false);
    setContactVisible(false);
  };

  const handleSkillsClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(true);
    setHistoryVisible(false);
    setContactVisible(false);
  };

  const handleHistoryClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(false);
    setHistoryVisible(true);
    setContactVisible(false);
  };

  const handleContactClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(false);
    setHistoryVisible(false);
    setContactVisible(true);
  };

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
      <title>My Portfolio</title>
      <div className="body">
        <div className="container1">
          <div className='KotakKenalan'>
            <div className='Judul'>
              <p>
                <span className='nama'>Hernando Front</span>
                <span className='posisi'> End Developer</span>
              </p>
            </div>
          </div>

          <div className='DivGambarKenalan'>
            <div className="TextKenalan">
              <h1 ref={textRef}>Hello, My name is Hernando.</h1>
            </div>

            <div>
              <img className='Gambar' src={Muka} alt="Muka" style={{ width: '150px', height: 'auto' }} />
            </div>
          </div>

          <div className='buttons'>
            <button onClick={handleHomeClick}>Home</button>
            <button onClick={handleAboutMeClick}>About Me</button>
            <button onClick={handleSkillsClick}>Skills</button>
            <button onClick={handleHistoryClick}>History</button>
            <button onClick={handleContactClick}>Contact Me</button>
          </div>

          <div className='AboutMe' style={{ display: aboutMeVisible ? 'block' : 'none' }}>
            <h1>About Me</h1>
            <p>I'm grade 10 RPL, at SMK Sekolah Triratna. I chose RPL because I like coding and I want to study coding to make some games.</p>
          </div>
          <div className='Skills' style={{ display: skillsVisible ? 'block' : 'none' }}>
            <h1>Skills</h1>
            <p>My Skill is I can do HTML, CSS so it's styling the HTML. I can do some React.</p>
          </div>
          <div className='History' style={{ display: historyVisible ? 'block' : 'none' }}>
            <h1>History of Education</h1>
            <p>I started in elementary school from 2016 until July 2022 at Sekolah Amitayus. From July 2022 until 2024, I was in SMP at Sekolah Budi Agung. Now, in 2024, I am studying at SMK Triratna in Class 10 majoring in RPL.</p>
          </div>
          <div className='Contact' style={{ display: contactVisible ? 'block' : 'none' }}>
            <h1>Contact Me</h1>
            <p>Email: Nandoher00@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
