import { useEffect } from 'react';

import video3 from '/assets/videos/3.mp4'
import video4 from '/assets/videos/4.mp4'
import video5 from '/assets/videos/5.mp4'
import video6 from '/assets/videos/6.mp4'
import video1 from '/assets/videos/1.mp4'
import video2 from '/assets/videos/2.mp4'
import video7 from '/assets/videos/7.mp4'
import video8 from '/assets/videos/8.mp4'
import video9 from '/assets/videos/9.mp4'

const GalleryThree = () => {

   
  useEffect(() => {
    // Carga el script cuando el componente se monte
    const script = document.createElement('script');
    script.src = '/3dcarousel.js'; // Ruta al archivo JS en tu carpeta pública
    script.async = true;
    document.body.appendChild(script);

    // Limpia el script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Asegúrate de que este efecto solo se ejecute una vez

  return (
    <div className="boxgalleryfather h-screen w-full ">
      <div className="boxgallery w-full h-screen ">
        <div id="drag-container">
          <div id="spin-container">
        
            <video controls loop>
              <source src={video1} type="video/mp4"/>
            </video>
            <video controls loop>
              <source src={video2} type="video/mp4"/>
            </video>
            <video controls loop>
              <source src={video3} type="video/mp4"/>
            </video>
            <video controls loop>
              <source src={video4} type="video/mp4"/>
            </video>
            <video controls loop>
              <source src={video5} type="video/mp4"/>
            </video>
            <video controls loop>
              <source src={video6} type="video/mp4"/>
            </video>
            <video controls  loop>
              <source src={video7} type="video/mp4"/>
            </video>
            <video controls  loop>
              <source src={video8} type="video/mp4"/>
            </video>
            <video controls  loop>
              <source src={video9} type="video/mp4"/>
            </video>
    
            <p>Mis 15 Años</p>
          </div>
            
          <div id="ground"></div>

        </div>
      </div>
        
    </div>
  
  );
};

export default GalleryThree;