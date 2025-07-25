import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-4 xl:px-0 h-[100px] xl:h-[100px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-center xl:justify-end items-center xl:items-end pt-0 xl:pt-0 pb-2 h-full gap-y-4 xl:gap-y-0'>
          <Socials />
        </div>
      </div>  
    </header>
  );
};

export default Header;