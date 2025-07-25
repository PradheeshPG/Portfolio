import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

const ProjectsSlider = () => {
  const videoRefs = useRef([]);

  const handleMouseOver = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  const handleMouseOut = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  const projectData = [
    {
      title: 'License Plate Detection',
      poster: '/thumb1.webp',
      video: '/thumb1-.mp4',
      description: 'Real-time license plate recognition system',
      link: 'https://github.com/PradheeshPG/License-Plate-Detection',
    },
    {
      title: 'Facial Attendance System',
      poster: '/thumb2.webp',
      video: '/thumb2.mp4',
      description: 'Automated attendance marking system',
      link: 'https://github.com/PradheeshPG/Facial-Attendance-monitor',
    },
    {
      title: 'Portfolio Website',
      poster: '/thumb3.png',
      video: '/thumb3.webm',
      description: 'Personal portfolio website',
      link: '#',
    },
    {
      title: 'PowerBI Dashboard',
      poster: '/thumb4.jpeg',
      video: '/thumb1.mp4',
      description: '',
      link: '#',
    },
  ];
  return (
    <div className="relative w-full max-w-3xl mx-auto px-2 mb-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: { 
            slidesPerView: 2,
            spaceBetween: 16
          },
          1024: { 
            slidesPerView: 3,
            spaceBetween: 16
          }
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        modules={[Pagination]}
        className="compact-swiper"
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-sm h-[220px] w-full"
              onMouseEnter={() => handleMouseOver(index)}
              onMouseLeave={() => handleMouseOut(index)}
            >
              {/* Image/Video Thumbnail (Fixed Height) */}
              <div className="relative h-[120px] w-full overflow-hidden group">
                {/* Static Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.poster}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* Video Overlay */}
                <video
                  ref={el => videoRefs.current[index] = el}
                  poster={project.poster}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Text Content (Remaining Height) */}
              <div className="p-3 h-[100px] flex flex-col">
                <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">{project.title}</h3>
                <p className="text-gray-300 text-xs mb-2 line-clamp-2">{project.description}</p>
                
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-xs text-gray-400">View Project</span>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-500 transition-colors duration-200"
                    aria-label={`Visit ${project.title}`}
                  >
                    <FaGlobe className="text-base" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
        .compact-swiper {
          padding-bottom: 30px;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
          transition: all 0.2s;
        }
        .swiper-pagination-bullet-active {
          background: #ef4444;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSlider;