import Anillos from '../../src/assets/images/accesorios/anillos.png'
import nosotros1 from '../../src/assets/images/photos/nosotros1.jpg'
import nosotros2 from '../../src/assets/images/photos/nosotros2.jpg'
import nosotros3 from '../../src/assets/images/photos/nosotros3.jpg'
import nosotros5 from '../../src/assets/images/photos/nosotros5.jpg'
import nosotros9 from '../../src/assets/images/photos/nosotros9.jpg'
import nosotros8 from '../../src/assets/images/photos/nosotros8.jpg'
import regalo from '../../src/assets/images/accesorios/regalo.png'
import igdorado from '../../src/assets/images/accesorios/igdorado.png'
import musica from '../../src/assets/images/accesorios/musica.png'

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      
      <div className="w-full h-screen flex flex-col items-center justify-center  text-center bg-hero-pattern bg-center bg-cover bg-no-repeat">
        <h1 className="text-5xl font-bold m-2 p-4 title">
          Leandro
        </h1>
            <span className="text-8xl text-[#eab308] title">__ & __ </span>
        <h1 className="text-5xl font-bold m-2 p-4 title">
          Brenda
        </h1>
        <h2>¡Nos casamos!</h2>
        <p className="font-bold">26/11/2024</p>
      </div>

      <div className="w-full h-[200px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
        <div className="cuenta__regresiva">
          <h3 className="text-white">Faltan:</h3>
          <h1 className="text-white font-">05 Días, 06 Horas, 25 Minutos </h1>
        </div>
      </div>

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

      <div className="container w-full h-screen items-center text-center place-content-center lg:w-[60%]">

        <h1 className='text-3xl m-2 p-4'>NOSOTROS...</h1>

        <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-4">
          <img src={nosotros1} className="row-span-3"/>
          <img src={nosotros2} className="col-span-2"/>
          <img src={nosotros5} className="col-span-2"/>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-4">
          <img src={nosotros3} className="row-span-3"/>
          <img src={nosotros8} className="col-span-2"/>
          <img src={nosotros9} className="col-span-2"/>
        </div>
        
      </div>

      <div className="w-full h-[300px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
        
          <img src={regalo} alt="anillos" className='w-[100px] h-auto pt-2 m-2'/>

          <p className="text-white pb-4 m-2">Si deaseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...</p>

          <button className="rounded-full py-2 px-4 bg-[#efb810] text-white font-semibold shadow-md hover:bg-[#ca8a04] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
            VER DATOS BANCARIOS
          </button>
        
      </div>

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

      <div className="w-full h-[200px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
        <div className="cuenta__regresiva">
          <h1 className="text-white uppercase text-3xl m-2 p-4 ">dress code</h1>
          <p className="text-white">Formal elegante.</p>
        </div>
      </div>

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

      <div className="container w-full h-[300px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
        <div className="cuenta__regresiva">
          <h3 className="text-white m-4  p-4">ALOJAMIENTO Y DATOS ÚTILES</h3>
          <h1 className="text-white m-4 p-4">Te dejamos nuestras sugerencias para que aproveches ese fin de semana al máximo.</h1>
          <button className="uppercase m-4 rounded-full py-2 px-4 bg-[#efb810] text-white font-semibold shadow-md hover:bg-[#ca8a04] focus:ring-2 focus:ring-[#422006] focus:ring-opacity-75">
            ver más
          </button>
        </div>
      </div>

      <div className="container w-full h-[300px] flex flex-col items-center justify-center text-center bg-[#020617]">
        <div className="cuenta__regresiva">
          <h3 className="text-white m-4  p-4">GRACIAS POR ACOMPAÑARNOS EN ESTE MOMENTO TAN IMPORTANTE</h3>
        </div>
      </div>

      <div className="container w-full h-[100px] flex flex-col items-center justify-center text-center bg-black">
        <div className="cuenta__regresiva">
          <p className="text-white">copyright PATAGONIASCRIPT</p>
        </div>
      </div>

    </section>
  );
};

export default Home;