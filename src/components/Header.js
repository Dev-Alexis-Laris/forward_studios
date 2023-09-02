import React, { useState, useEffect } from 'react';
import video_main from '../videos/video-main.mp4';

const CounterText = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount(prevCount => prevCount + 1);
      }
    }, 30); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [count, value]);

  return (
    <h5>
      +{count.toLocaleString()} {label}
    </h5>
  );
};

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const textsToType = ['Entregas a tiempo', 'Estrategias de Marketing', 'Creatividad'];
  const textSpeed = 100; // Velocidad de escritura en milisegundos
  const repeatDelay = 2000; // Tiempo en milisegundos entre repeticiones

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';

    const typeText = () => {
      if (currentIndex < textsToType.length) {
        if (currentText.length < textsToType[currentIndex].length) {
          currentText += textsToType[currentIndex][currentText.length];
          setTypedText(currentText);
          setTimeout(typeText, textSpeed);
        } else {
          setTimeout(eraseText, repeatDelay);
        }
      }
    };

    const eraseText = () => {
      if (currentText.length > 0) {
        currentText = currentText.slice(0, -1);
        setTypedText(currentText);
        setTimeout(eraseText, textSpeed);
      } else {
        currentIndex = (currentIndex + 1) % textsToType.length;
        setTimeout(typeText, textSpeed);
      }
    };

    typeText();
  }, []);

  return (
    <header className="header">
      <video className='background-video' autoPlay loop>
        <source src={video_main} type="video/mp4" />
      </video>
      <h1>Comienza hoy mismo...</h1>
      <p className="offer-text">
        <span className="writing-line"></span> Te ofrecemos:{' '}
        <span className="typing-text">{typedText}</span>
      </p>
      <a className="ver-mas-btn" href="#quienes-somos">Ver más...</a>
      <div className='textos-info'>
        <CounterText value={150} label={<span className="colored-text">Billones <br />Visitas generadas</span>} />
        <CounterText value={50} label={<span className="colored-text">Proyectos <br />Exitosos</span>} />
        <CounterText value={100} label={<span className="colored-text">Influencers <br />Satisfechos</span>} />
      </div>
    </header>
  );
};

export default Header;
