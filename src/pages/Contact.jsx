import Footer from "../components/Footer";


import igdorado from '../../src/assets/images/accesorios/igdorado.png'
import musica from '../../src/assets/images/accesorios/musica.png'

const Contact = () => {
 


  return (
    <section className="w-full h-screen relative">
      
      

      {/*Instagram*/}

      <div className="w-full h-screen flex flex-col items-center justify-center text-center bg-hero-pattern bg-center bg-cover bg-no-repeat">

        <img src={igdorado} alt="anillos" className='w-[50%] h-auto'/>

        
        <h1 className="text-5xl font-bold m-2 p-4 ">
          #LeanyBren2024
        </h1>
        
        <p className="text-black pb-4 m-2">¡Preparate para nuestro gran día! Ya podés etiquetarnos en Instagram con nuestro hashtag en tus fotos o videos.</p>
      
        <button className="uppercase m-4 rounded-full py-2 px-4 bg-[#efb810] text-white font-semibold shadow-md hover:bg-[#ca8a04] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
          ver fotos instagram
        </button>
      
      </div>

      {/*List player*/}

      <div className="container w-full h-screen flex flex-col items-center justify-center text-center">
        
        <img src={musica} alt="musica" className='w-[50%] h-auto'/>

        <h1 className="text-3xl m-2 p-4 ">
          ¿QUÉ CANCIONES NO PUEDEN FALTAR?
        </h1>
            
        <p className="t m-2 p-4">
          ¡Ayudanos sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
        </p>
        
        <button className="rounded-full py-2 px-4 bg-[#efb810] text-white font-semibold shadow-md hover:bg-[#ca8a04] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
          SUGERIR CANCIÓN
        </button>
        
      </div>

      {/*mensaje*/}

      <div className="container w-full h-[300px] flex flex-col items-center justify-center text-center bg-[#020617]">
        <div className="cuenta__regresiva">
          <h3 className="text-white m-4  p-4">GRACIAS POR ACOMPAÑARNOS EN ESTE MOMENTO TAN IMPORTANTE</h3>
        </div>
      </div>

      {/*footer*/}

      <Footer/>

    </section>
  );
};

export default Contact;