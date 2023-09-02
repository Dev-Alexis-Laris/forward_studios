import React from 'react';
import mini_1 from '../images/miniatura-1.png'
import mini_2 from '../images/miniatura-2.png'
import mini_3 from '../images/miniatura-3.png'
import mini_4 from '../images/miniatura-4.png'
import mini_5 from '../images/miniatura-5.png'
import mini_6 from '../images/miniatura-6.png'

import video_1 from '../videos/video-1.mp4'
import video_2 from '../videos/video-2.mp4'
import video_3 from '../videos/video-3.mp4'
import video_4 from '../videos/video-4.mp4'
import video_5 from '../videos/video-5.mp4'
import video_6 from '../videos/video-6.mp4'

const Works = () => {
  return (
    <section id="works" className="works-section">
      <h1>Nuestros Servicios</h1>
      <div className="icon-grid-works">
        <div className="icon-works">
          <i className="material-icons">brush</i>
          <h3>Creación de Imagen</h3>
          <p>Desarrollamos todo tipo de imágenes <br></br>que necesites para tus redes <br></br>sociales, como banners, flyers, miniaturas, etc. <br></br>Estamos aquí para dar vida visual a tu presencia en línea.</p>
        </div>
        <div className="icon-works">
          <i className="material-icons">videocam</i>
          <h3>Edición de Vídeo</h3>
          <p>Mejoramos tu contenido audiovisual <br></br> a través de historias poderosas mediante la edición de vídeo<br></br>dando forma a secuencias para producir contenido <br></br>cinematográfico y cautivador.</p>
        </div>
        <div className="icon-works">
          <i className="material-icons">rocket_launch</i>
          <h3>Marketing</h3>
          <p>Impulsamos tu marca hacia el éxito<br></br> combinando investigación de <br></br>mercado con estrategias creativas para <br></br> y persuadir a audiencias específicas<br></br></p>
        </div>
      </div>

      <div className='works-info'>
        <div class="works-info-left">
          <h1>Miniaturas</h1>
          <div class="image-grid">
            <img src={mini_1} alt="Imagen 1" />
            <img src={mini_2} alt="Imagen 2" />
            <img src={mini_3} alt="Imagen 3" />
            <img src={mini_4} alt="Imagen 4" />
            <img src={mini_5} alt="Imagen 5" />
            <img src={mini_6} alt="Imagen 6" />
          </div>
        </div>
        <div class="works-info-right">
          <h1>Videos</h1>
          <div class="video-grid">
            <video className='videos_works' controls autoPlay loop muted>
              <source src={video_1} type="video/mp4" />
            </video>
            <video className='videos_works' controls autoPlay loop muted>
              <source src={video_2} type="video/mp4" />
            </video>
            <video className='videos_works' controls autoPlay loop muted>
              <source src={video_3} type="video/mp4" />
            </video>
            <video className='videos_works' controls autoPlay loop muted>
              <source src={video_4} type="video/mp4" />
            </video>
            <video className='videos_works' controls autoPlay loop muted>
              <source src={video_5} type="video/mp4" />
            </video>
            <video className='videos_works' controls autoPlay loop muted>
              <source src={video_6} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
