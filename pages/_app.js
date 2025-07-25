import { useEffect } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Programmatically play video to handle browser restrictions
    const video = document.querySelector('.video-bg-element');
    if (video) {
      video.play().catch(error => {
        console.log('Video autoplay prevented:', error);
        // Fallback: Show play button or use poster image
      });
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="preload" href="/galaxy.mp4" as="video" />
      </Head>
      
      {/* Video Background with enhanced attributes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-bg-element absolute inset-0 w-full h-full object-cover"
          poster="/galaxy.png"
        >
          <source src="/galaxy.mp4" type="video/mp4" />
          <source src="/galaxy.webm" type="video/webm" />
          Your browser does not support HTML5 video.
        </video>
        <div className="absolute inset-0 bg-primary/30"></div>
      </div>

      {/* Existing layout */}
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div key={router.route} className="h-full">
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
