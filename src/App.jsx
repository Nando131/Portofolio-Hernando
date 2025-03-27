import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import './App.css';
import Muka from './assets/Muka.png';
import htmlImage from './assets/html.png';
import cssImage from './assets/css.png';
import viteImage from './assets/Vite.png';
import downloadImage from './assets/download.png';

function App() {
  const textRef = useRef(null);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [projectListVisible, setProjectListVisible] = useState(false);

  const handleHomeClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(false);
    setHistoryVisible(false);
    setContactVisible(false);
    setProjectListVisible(false);
  };

  const handleAboutMeClick = () => {
    setAboutMeVisible(true);
    setSkillsVisible(false);
    setHistoryVisible(false);
    setContactVisible(false);
    setProjectListVisible(false);
  };

  const handleSkillsClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(true);
    setHistoryVisible(false);
    setContactVisible(false);
    setProjectListVisible(false);
  };

  const handleHistoryClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(false);
    setHistoryVisible(true);
    setContactVisible(false);
    setProjectListVisible(false);
  };

  const handleContactClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(false);
    setHistoryVisible(false);
    setContactVisible(true);
    setProjectListVisible(false);
  };

  const handleProjectListClick = () => {
    setAboutMeVisible(false);
    setSkillsVisible(false);
    setHistoryVisible(false);
    setContactVisible(false);
    setProjectListVisible(true);
  };

  useEffect(() => {
    gsap.from(textRef.current, {
      x: 30,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  useEffect(() => {
    gsap.from('.container1', {
      y: -50,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  useEffect(() => {
    if (aboutMeVisible) {
      gsap.from('.AboutMe', {
        y: -50,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [aboutMeVisible]);

  useEffect(() => {
    if (skillsVisible) {
      gsap.from('.Skills', {
        y: -50,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [skillsVisible]);

  useEffect(() => {
    if (historyVisible) {
      gsap.from('.History', {
        y: -50,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [historyVisible]);

  useEffect(() => {
    if (contactVisible) {
      gsap.from('.Contact', {
        y: -50,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [contactVisible]);

  useEffect(() => {
    if (projectListVisible) {
      gsap.from('.ProjectList', {
        y: -50,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [projectListVisible]);

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
            <button onClick={handleProjectListClick}>Project List</button>
          </div>

          <div className='AboutMe' style={{ display: aboutMeVisible ? 'block' : 'none' }}>
            <h1>About Me</h1>
            <p>I'm grade 10 RPL, at SMK Sekolah Triratna. I chose RPL because I like coding and I want to study coding to make some games.</p>
          </div>
          <div className='Skills' style={{ display: skillsVisible ? 'block' : 'none' }}>
            <h1>Skills</h1>
            <div className="skills-images">
              <div className="skill-item">
                <img src={htmlImage} alt="HTML" />
                <h2>HTML</h2>
              </div>
              <div className="skill-item">
                <img src={cssImage} alt="CSS" />
                <h2>CSS</h2>
              </div>
              <div className="skill-item">
                <img src={viteImage} alt="React" />
                <h2>React</h2>
              </div>
              <div className="skill-item">
                <img src={downloadImage} alt="GSAP" />
                <h2>GSAP</h2>
              </div>
            </div>
          </div>
          <div className='History' style={{ display: historyVisible ? 'block' : 'none' }}>
            <h1>History of Education</h1>
            <p>I started in elementary school from 2016 until July 2022 at Sekolah Amitayus. From July 2022 until 2024, I was in SMP at Sekolah Budi Agung. Now, in 2024, I am studying at SMK Triratna in Class 10 majoring in RPL.</p>
          </div>

          <div className='Contact' style={{ display: contactVisible ? 'block' : 'none' }}>
            <h1>Contact Me</h1>
            <p>Email: Nandoher00@gmail.com</p>
            <p>Phone: (+62) 812 8093 4898</p>
          </div>

          <div className='ProjectList' style={{ display: projectListVisible ? 'block' : 'none' }}>
            <h1>My Project</h1>
            <p>Test</p>
          </div>

          </div>
        </div>
      </>
  );
}

export default App;
