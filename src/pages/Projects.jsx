
import regalo from '../../src/assets/images/accesorios/regalo.png'
import ubicacion from '../../src/assets/images/accesorios/ubicacion.png'

import calendario from '../../src/assets/images/accesorios/calendario.png'

const Projects = () => {

  return (
    <section className="w-full h-screen relative">
      
      {/*Ubicación */}

      <div className="container w-full h-screen flex flex-col items-center justify-center text-center">
        
        
        <img src={ubicacion} alt="musica" className='w-[50%] h-auto'/>
            
        <p className=" m-2 p-4">
          El evento se realizará el Sabado 6 de Abril a las 21.00 horas en Lasalle 3071, Salón Lahuen Eventos. Tocá el botón de abajo para recibir las indicaciones para llegar. ¡Te esperamos!
        </p>
        
        <button className="rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#262886] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
            <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/352L4dURXMGrQJybA">
              COMO LLEGAR
            </a>
        </button>
        
      </div>

      {/*Regalo*/}

      <div className="w-full h-[300px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
        
          <img src={regalo} alt="anillos" className='w-[100px] h-auto pt-2 m-2'/>

          <p className="text-white pb-4 m-2">Si deaseás realizarme un regalo...</p>

          <button className="rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#262886] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
            <a target="_blank" rel="noreferrer" href="#">
              VER DATOS BANCARIOS
            </a>
         
          </button>
        
      </div>

      {/*Confirmación de asistencia*/}

      <div className="container w-full h-screen flex flex-col items-center justify-center text-center">

      <img src={calendario} alt="musica" className='w-[50%] h-auto'/>


         
          
          <h1 className='text-3xl m-2 p-4'>CONFIRMACIÓN DE ASISTENCIA</h1>

          <p className="text-black pb-4 m-2">Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!</p>

          <button className="uppercase m-4 rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#262886] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
              <a href='https://api.whatsapp.com/send?phone=5491127883863&text=Hola%20,estaré%20encantado%20de%20ir%20a%20tu%20cumpleaños.' target="_blank" rel="noreferrer">
                CONFIRMAR ASISTENCIA
              </a>
          </button>

          <button className="uppercase m-4 rounded-full py-2 px-4 bg-[#10c2ef] text-white font-semibold shadow-md hover:bg-[#262886] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
            <a target="_blank" rel="noreferrer" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NTA5cnB1NDNjazhxZmdvdGlsYnRoNDF0NW0gcGF0YWdvbmlhc2NyaXB0QG0&amp;tmsrc=patagoniascript%40gmail.com">AGENDAR EVENTO</a>
          </button>
        
      </div>


    </section>
  );
};

export default Projects;