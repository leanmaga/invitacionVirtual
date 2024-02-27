import { motion } from 'framer-motion';

import styles from '../styles';

import { footerVariants } from '../utils/motion';


import { textVariant} from '../utils/motion';

const Footer = () => (
  
  <motion.footer
    variants={footerVariants}
    
    className={`${styles.xPaddings} py-8 relative h-200px w-full bg-black`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center text-center content-center justify-between flex-wrap gap-4">
          <div className="flex items-center text-center content-center justify-between flex-wrap gap-4">
            <motion.img 
            variants={textVariant(1.2)}
            src="/logowhite.png"
            alt="hero_logo"
            className="w-[50px] h-[50px] object-contain"
            >
            </motion.img>

            <h4 className="font-extrabold text-[24px] text-white">
              PatagoniaScript
            </h4>
            
            

          </div>
          
        <p className="font-normal text-[14px] text-white opacity-50">
         Copyright © 2023 PatagoniaScript. All rights reserved.
        </p>
          
        </div>
      </div>
    </div>
  </motion.footer>

);

export default Footer;