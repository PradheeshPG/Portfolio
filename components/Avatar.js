import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Avatar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='absolute top-[15%] left-[54%] transform -translate-x-1/2 z-20 w-full max-w-[400px]'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Avatar - floats and fades on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0 : 1,
          y: [0, -20, 0],
        }}
        transition={{
          opacity: { duration: 0.3, ease: "easeInOut" },
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          },
        }}
        className="relative w-[400px] h-[400px] rounded-full border-accent/20 overflow-hidden"
      >
        <Image
          src={"/Avatar.jpeg"}
          fill
          alt="Profile picture"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Bitmoji - enters from top, floats, exits to bottom */}
      <motion.div
        className="absolute top-[-80px] left-[-150px] w-[650px] h-[730px]"
        initial={{ opacity: 0, y: "-100vh" }}
        animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: "100vh" }}
        transition={{
          opacity: { duration: 0.6, ease: "easeInOut" },
          y: { duration: 1.2, ease: "easeInOut" },
        }}
      >
        {/* Floating effect while visible */}
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <Image
            src={"/fbitmoji.png"}
            fill
            alt="Bitmoji"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Avatar;
