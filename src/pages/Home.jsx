
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import styles from '../styles';
import Countdown from "../components/Countdown";

const Home = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center content-center">
      
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} w-full h-screen flex flex-col items-center 
      justify-center text-center bg-hero-pattern bg-center bg-cover bg-no-repeat hero`}
      >
        <h1 className="font-bold  name4 uppercase flex ">
          Mis 15 Años
        </h1>

        <h1 className="font-bold name3 uppercase absolute">15</h1>
        
        <motion.h1 variants={textVariant(1.1)} className='text-5xl name leading-none text-white ' translate="no">
          More
        </motion.h1>
        
        <h1 className="font-bold name4 p-4">06/04/2024</h1>
          
        {/*contador*/}

        <div className="cuenta__regresiva p-4">
          <h3 className="text-white link">Faltan:</h3>
          <h1 className="text-white link"><Countdown/></h1>
        </div>

      </motion.div> 
          
    </section>
  );
};

export default Home;