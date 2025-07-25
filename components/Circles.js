import Image from "next/image";


const Circles = () => {
  return (
    <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 bg-gradient-to-r from-accent to-[#00f2fe] bg-clip-text text-transparent opacity-90'>
      <Image src={'/circles.png'}
        width={260}
        height={200}
        className='w-full h-full object-contain mix-blend-screen opacity-80 contrast-125 brightness-110 animate-pulse duration-75'
        alt=''
      />
    </div>
  );
};

export default Circles;
