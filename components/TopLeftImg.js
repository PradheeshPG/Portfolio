import Image from "next/image";
const TopLeftImg = () => {
  return (
  <div className="absolute left-0 top-0 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[400px] bg-gradient-to-r from-accent to-[#00f2fe] bg-clip-text text-transparent opacity-90">
    <Image 
    src='/top-left-img.png' 
    width={400} 
    height={400} 
    className='w-full h-full object-contain mix-blend-screen opacity-80 contrast-145 brightness-100 animate-pulse duration-75'
    alt='' />
    </div>
  );
};

export default TopLeftImg;
