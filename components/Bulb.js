// next image
import Image from "next/image";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Bulb = () => {
  return (
    <motion.div
      variants={fadeIn('up', 0.9)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'
    >
      <Image 
        src={'/bulb.png'} 
        width={260} 
        height={200} 
        className='w-full h-full'
        alt=''
        priority
      />
    </motion.div>
  );
};

export default Bulb;