import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const HobbySlider = () => {
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

  const hobbyData = [
    {
      title: 'Magician',
      description: 'Stage magic and illusion performances for live audiences',
      poster: '/hthumb.jpeg',
      video: '/hthumb1.mp4'
    },
    {
      title: 'Rubiks cube Solver',
      description: 'Mentalism and cognitive demonstration techniques',
      poster: '/hthumb2.png',
      video: '/hthumb2.mp4'
    },
    {
      title: 'Competitive Sports',
      description: 'Competitive athlete pushing physical and mental limits through sports.',
      poster: '/hthumb3.jpeg',
      video: '/hthumb3.mp4'
    }
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
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        modules={[Pagination]}
        className="hobby-swiper"
      >
        {hobbyData.map((hobby, index) => (
          <SwiperSlide key={index}>
            <div 
              className="relative bg-gray-800 rounded-lg overflow-hidden shadow-sm h-[220px] w-full group"
              onMouseEnter={() => handleMouseOver(index)}
              onMouseLeave={() => handleMouseOut(index)}
            >
              {/* Media Container */}
              <div className="relative h-[120px] w-full overflow-hidden">
                {/* Static Image */}
                <div className="absolute inset-0">
                <Image
                  src={hobby.poster}
                  alt={hobby.title}
                  fill
                  className={`transition-opacity duration-300 group-hover:opacity-0 
                    ${index === 2 ? 'object-cover' : 'object-cover'}`}
                  style={index === 2 ? { objectPosition: 'center 20%' } : {}}
                  unoptimized
                />
              </div>
                {/* Video Overlay */}
                <video
                  ref={el => videoRefs.current[index] = el}
                  poster={hobby.poster}
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <source src={hobby.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content Area */}
              <div className="p-4 h-[100px] flex flex-col">
                <h3 className="text-sm font-bold text-white mb-1">{hobby.title}</h3>
                <p className="text-gray-300 text-xs line-clamp-2">{hobby.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .hobby-swiper {
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

export default HobbySlider;