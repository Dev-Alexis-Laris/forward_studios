import React, { useState } from 'react'; // Importa useState aquí
import image_1 from '../images/img_1.jpg'; // Importa tus imágenes aquí
import image_2 from '../images/img_2.png'; // Importa tus imágenes aquí
import image_3 from '../images/img_3.jpg'; // Importa tus imágenes aquí
import image_4 from '../images/img_4.png'; // Importa tus imágenes aquí
import image_5 from '../images/img_5.png'; // Importa tus imágenes aquí
import image_6 from '../images/img_6.png'; // Importa tus imágenes aquí
import image_7 from '../images/img_7.png'; // Importa tus imágenes aquí
import image_8 from '../images/img_8.jpg'; // Importa tus imágenes aquí

const Partners = () => {
  const partnersData = [
    {
      name: 'Hermanas JM',
      image: image_1,
      tiktokLink: 'https://www.tiktok.com/@odalysanddafnne?lang=es',
      tiktokFollowers: '20.5M',
      youtubeLink: 'https://www.youtube.com/@HermanasJM',
      youtubeFollowers: '3.4M',
      instagramLink: 'https://www.instagram.com/odalysanddafnne/',
      instagramFollowers: '946K'
    },
    {
      name: 'Shaula Ponce',
      image: image_2,
      tiktokLink: 'https://www.tiktok.com/@shaulaponce2.0?lang=es',
      tiktokFollowers: '10M',
      youtubeLink: 'https://www.youtube.com/@shaulaponceoficial',
      youtubeFollowers: '954K',
      instagramLink: 'https://www.instagram.com/shaula.ponce/',
      instagramFollowers: '2M'
    },
    {
      name: 'El Trollino',
      image: image_3,
      tiktokLink: 'https://www.tiktok.com/@trollinoyt?lang=es',
      tiktokFollowers: '2.2M',
      youtubeLink: 'https://www.youtube.com/user/eltrollino',
      youtubeFollowers: '20M',
      instagramLink: 'https://www.instagram.com/eltrollinoyt/?hl=es-la',
      instagramFollowers: '838K'
    },
    {
      name: 'Krao ESP',
      image: image_4,
      tiktokLink: 'https://www.youtube.com/@KraoESP',
      tiktokFollowers: '---',
      youtubeLink: 'https://www.youtube.com/@KraoESP',
      youtubeFollowers: '2.6M',
      instagramLink: 'https://www.instagram.com/kraoesp/',
      instagramFollowers: '93.5K'
    },
    {
      name: 'KarimJUEGA',
      image: image_5,
      tiktokLink: 'https://www.youtube.com/@karimjuega1037',
      tiktokFollowers: '---',
      youtubeLink: 'https://www.youtube.com/@karimjuega1037',
      youtubeFollowers: '7.3M',
      instagramLink: 'https://www.youtube.com/@karimjuega1037',
      instagramFollowers: '---'
    },
    {
      name: 'Geraldine Galván',
      image: image_6,
      tiktokLink: 'https://www.tiktok.com/@geraldinegalvan_of?lang=es',
      tiktokFollowers: '6.5M',
      youtubeLink: 'https://www.youtube.com/@geraldinegalvanoficial2372',
      youtubeFollowers: '116K',
      instagramLink: 'https://www.instagram.com/geraldinegalvan/',
      instagramFollowers: '1.4M'
    },
    {
      name: 'Neembihu',
      image: image_7,
      tiktokLink: 'https://www.tiktok.com/@nembihu?lang=es',
      tiktokFollowers: '3M',
      youtubeLink: 'https://www.youtube.com/@neembihu/videos',
      youtubeFollowers: '141K',
      instagramLink: 'https://www.instagram.com/neembihu/?hl=es',
      instagramFollowers: '360K'
    },    
    {
      name: 'Sr Gato',
      image: image_8,
      tiktokLink: 'https://www.tiktok.com/@srgatoelnato',
      tiktokFollowers: '575K',
      youtubeLink: 'https://www.youtube.com/@SrGatoYT/featured',
      youtubeFollowers: '5.4M',
      instagramLink: 'https://www.instagram.com/srgatoelnato/',
      instagramFollowers: '58K'
    }
    // Agregar más datos de partners aquí
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);


  return (
    <section id="partners" className="partners-section">
      <h1>Principales Colaboradores</h1>
      <div className="partners-grid">
        {partnersData.map((partner, index) => (
          <div
            key={index}
            className="card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={`profile-image-container ${hoveredIndex === index ? 'hidden' : ''}`}>
              <div className="image-clipper">
                <img src={partner.image} alt={partner.name} className="profile-image" />
              </div>
            </div>
            <h2 className={`card-name ${hoveredIndex === index ? 'hidden' : ''}`}>{partner.name}</h2>
            <div className={`social-icons ${hoveredIndex !== index ? 'hidden' : ''}`}>
              <div className="icon-with-count">
                <div className="icon-person">
                  <a href={partner.tiktokLink} target="_blank"><i className="fab fa-tiktok icono-tk"></i></a>
                  <p className="follower-count"><b>{partner.tiktokFollowers}</b> <br/> Seguidores</p>
                </div>
              </div>
              <div className="icon-with-count">
                <div className="icon-person">
                  <a href={partner.youtubeLink} target="_blank"><i className="fab fa-youtube icono-yt"></i></a>
                  <p className="follower-count"><b>{partner.youtubeFollowers}</b> <br/> Suscriptores</p>
                </div>
              </div>
              <div className="icon-with-count">
                <div className="icon-person">
                  <a href={partner.instagramLink} target="_blank"><i className="fab fa-instagram icono-ig"></i></a>
                  <p className="follower-count"><b>{partner.instagramFollowers}</b> <br/> Seguidores</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
