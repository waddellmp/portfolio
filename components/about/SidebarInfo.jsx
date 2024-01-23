import Image from 'next/image';

import Social from '../social/Social';
import Info from './Info';
import { withPrefix } from '../../prefix';

const SidebarInfo = () => {
 return (
  <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
   <Image
    src={withPrefix('/images/about/me.jpeg')}
    width={200}
    height={200}
    className="w-[140px] absolute left-[50%] transform -translate-x-[50%] h-[140px] drop-shadow-xl mx-auto  rounded-[20px] -mt-[75px]"
    alt="avatar"
   />
   {/* Social card */}
   <div className="pt-[100px] pb-8">
    <h1 className="mt-6 mb-1 text-5xl font-semibold  dark:text-white">Matthew Waddell</h1>
    <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]  ">
     Software Engineer
    </h3>

    {/* Social Links */}

    <div className="flex justify-center space-x-3">
     <Social />
    </div>

    {/* personal information */}
    <div className="p-7 rounded-2xl mt-7  bg-[#F3F6F6] dark:bg-[#1D1D1D]">
     <Info />
    </div>

    <a
     href="/images/cv.pdf"
     download
     className="inline-flex items-center mx-auto bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6"
    >
     <Image src={withPrefix('/images/download.png')} alt="icon" className="mr-2" width={16} height={16} />
     Download CV
    </a>
   </div>
  </div>
 );
};

export default SidebarInfo;
