import Link from "next/link";

import { RiLinkedinLine, RiGithubLine, RiYoutubeLine, RiInstagramLine, RiFacebookLine } from 'react-icons/ri'
const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://www.linkedin.com/in/pradheeshpg16/'}
        className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://github.com/PradheeshPG'}
        className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://www.instagram.com/pradh_eesh_16?igsh=MXNnMnZvZmFiMWVhbA=='}
        className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      {/* <Link href={''} 
    className='hover:text-accent transition-all duration-300'>
      <RiYoutubeLine/>
    </Link>
    <Link href={''} 
    className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine/>
    </Link> */}
    </div>
  )
};

export default Socials;
