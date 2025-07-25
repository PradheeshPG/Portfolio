// components
import Circles from '../../components/Circles';
// icons
import { BsArrowRight } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
// framer
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../../variants';
import { useState } from 'react';
// particles
import ParticlesContainer from '../../components/ParticlesContainer';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto'>
      <ParticlesContainer />
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto">
        {/* text */}
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 
            variants={fadeIn('down', 0.2)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          <motion.div
            variants={fadeIn('down', 0.4)} 
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex flex-col items-center xl:items-start gap-y-4 mb-12'
          >
            <a 
              href="mailto:pgpradheesh@gmail.com" 
              className='flex items-center gap-x-2 hover:text-accent transition-all duration-300'
            >
              <HiMail className='text-2xl' /> pgpradheesh@gmail.com
            </a>
            <a 
              href="tel:+917010647839" 
              className='flex items-center gap-x-2 hover:text-accent transition-all duration-300'
            >
              <FaPhoneAlt className='text-2xl' /> +91 70106 47839
            </a>
          </motion.div>
        </div>
        
        {/* form */}
        <motion.div
          variants={fadeIn('up', 0.4)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className='flex-1 relative'
        >
          {isSubmitted ? (
            <div className="bg-green-500/10 text-green-500 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Thank you!</h3>
              <p>Your message has been sent successfully.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-sm underline hover:text-accent transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form 
              action="https://formspree.io/f/xvgqznlo"  
              method="POST"
              className='flex-1 flex flex-col gap-y-6 w-full max-w-[500px] mx-auto'
              onSubmit={() => setIsLoading(true)}
            >
              <div className='flex gap-x-6 w-full'>
                <input 
                  type="text" 
                  name="name" 
                  placeholder='Name' 
                  className='input' 
                  required 
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder='Email' 
                  className='input' 
                  required 
                />
              </div>
              <input 
                type="text" 
                name="subject" 
                placeholder='Subject' 
                className='input' 
                required 
              />
              <textarea 
                name="message" 
                placeholder='Message' 
                className='textarea' 
                required
              ></textarea>
              <button 
                type="submit" 
                disabled={isLoading}
                className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative'
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                      Let's talk
                    </span>
                    <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
