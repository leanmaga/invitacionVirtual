
import Anillos from '../../src/assets/images/accesorios/anillos.png'

import regalo from '../../src/assets/images/accesorios/regalo.png'
const Projects = () => {
  return (
    <section className="w-full h-screen relative">
      
      {/*Ubicación */}

      <div className="container w-full h-screen flex flex-col items-center justify-center text-center">
        
        <img src={Anillos} alt="anillos" className='w-[50%] h-auto'/>

        <h1 className="text-3xl m-2 p-4 ">
          CEREMONIA Y FIESTA
        </h1>
            
        <p className=" m-2 p-4">
          Nuestro casamiento se realizará el Sabado 26 de Noviembre a las 18.30 horas en Hotel Sofitel, Salon Le Dome. Tocá el botón de abajo para recibir las indicaciones para llegar. ¡Te esperamos!
        </p>
        
        <button className="rounded-full py-2 px-4 bg-[#efb810] text-white font-semibold shadow-md hover:bg-[#ca8a04] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
          COMO LLEGAR
        </button>
        
      </div>

      {/*Regalo*/}

      <div className="w-full h-[300px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
        
          <img src={regalo} alt="anillos" className='w-[100px] h-auto pt-2 m-2'/>

          <p className="text-white pb-4 m-2">Si deaseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...</p>

          <button className="rounded-full py-2 px-4 bg-[#efb810] text-white font-semibold shadow-md hover:bg-[#ca8a04] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
            VER DATOS BANCARIOS
          </button>
        
      </div>

      {/*Confirmación de asistencia*/}

      <div className="container w-full h-screen flex flex-col items-center justify-center text-center"> 
          
          <h1 className='text-3xl m-2 p-4'>CONFIRMACIÓN DE ASISTENCIA</h1>

          <p className="text-black pb-4 m-2">Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!</p>

          <button className="uppercase m-4 rounded-full py-2 px-4 bg-[#efb810] text-white font-semibold shadow-md hover:bg-[#ca8a04] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
            CONFIRMAR ASISTENCIA
          </button>

          <button className="uppercase m-4 rounded-full py-2 px-4 bg-[#efb810] text-white font-semibold shadow-md hover:bg-[#ca8a04] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
            AGENDAR EVENTO
          </button>
        
      </div>

    </section>
  );
};

export default Projects;