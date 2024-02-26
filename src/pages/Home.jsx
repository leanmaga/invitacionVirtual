
const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      
      {/*home */}

      <div className="w-full h-screen flex flex-col items-center justify-center  text-center bg-hero-pattern bg-center bg-cover bg-no-repeat">
        
        <h1 className="font-bold m-2 p-4 name4 uppercase">
          Mis 15 Años
        </h1>

        <h1 className="font-bold m-2 p-4 name3 uppercase absolute">15</h1>

        <h1 className=" text-5xl m-2 p-4 name">
          More
        </h1>
        
        <h1 className="font-bold name4">26/11/2024</h1>

      </div>
      
      {/*contador*/}

      <div className="w-full h-[200px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
        <div className="cuenta__regresiva">
          <h3 className="text-white">Faltan:</h3>
          <h1 className="text-white font-">05 Días, 06 Horas, 25 Minutos </h1>
        </div>
      </div>

      

      

      {/*footer*/}

      <div className="container w-full h-[100px] flex flex-col items-center justify-center text-center bg-black">
        <div className="cuenta__regresiva">
          <p className="text-white">copyright PATAGONIASCRIPT</p>
        </div>
      </div>

    </section>
  );
};

export default Home;