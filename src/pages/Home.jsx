import Footer from "../components/Footer";
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import styles from '../styles';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      
      {/*home */}

      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} w-full items-center justify-center text-center bg-hero-pattern bg-center bg-cover bg-no-repeat hero mx-auto flex flex-col h-screen`}
      >
        <h1 className="font-bold m-2 p-4 name4 uppercase">
          Mis 15 Años
        </h1>

        <h1 className="font-bold m-2 p-4 name3 uppercase absolute">15</h1>
        
        <motion.h1 variants={textVariant(1.1)} className='text-5xl m-2 p-4 name leading-none'>
          More
        </motion.h1>
        
        <h1 className="font-bold name4">26/11/2024</h1>

        

      </motion.div> 
      
      {/*contador*/}

        <div className="w-full h-[200px] flex flex-col items-center justify-center text-center bg-[#0f172a]">
          <div className="cuenta__regresiva">
            <h3 className="text-white">Faltan:</h3>
            <h1 className="text-white font-">05 Días, 06 Horas, 25 Minutos </h1>
          </div>
        </div>
        
      {/*footer*/}

      <Footer/>

        
    </section>
  );
};

export default Home;