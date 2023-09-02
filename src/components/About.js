import react from 'react';
import ReactPlayer from 'react-player';
import video_aboutus from '../videos/video-aboutus.mp4'

const About = () => {

  return (
    <section id="quienes-somos" className="quienes-somos-section">
      <div className="fullscreen-container" id='info-us'>
        <div className="content">
          <div className="content-left">
            <h1>¿Quiénes Somos?</h1>
            <p className="intro">
              Forward Studios: Especialistas en marketing digital estratégico. Potenciamos marcas en línea con creatividad y calidad. Enfoque en redes sociales, desde contenido cautivador hasta campañas efectivas. Resultados excepcionales respaldados por atención al cliente sobresaliente.
            </p>
            <div className="icon-grid">
              <div className="icon">
                <i className="material-icons">lightbulb</i>
                <h3>Creatividad</h3>
                <p>Nuestra creatividad nos impulsa a <br></br> generar ideas innovadoras para tu marca.</p>
              </div>
              <div className="icon">
                <i className="material-icons">check_circle</i>
                <h3>Calidad</h3>
                <p>Trabajamos con estándares de calidad para <br></br> entregar resultados excepcionales.</p>
              </div>
              <div className="icon">
                <i className="material-icons">security</i>
                <h3>Garantía</h3>
                <p>Nuestra garantía es asegurar el <br></br> éxito de tus campañas y proyectos.</p>
              </div>
            </div>
          </div>
          <div className="content-right">
            <video className='video_aboutus' autoPlay loop>
              <source src={video_aboutus} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
