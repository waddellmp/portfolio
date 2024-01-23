const Intro = () => {
 return (
  <>
   <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
    <h2 className="after-effect after:left-52">About Me</h2>
    {/* About page title */}

    <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
     <div className="col-span-12 space-y-2.5">
      <div className="lg:mr-16">
       <p className="text-gray-lite  dark:text-color-910 leading-7">
        I am a proud dad of two kids and a software engineer by trade. I enjoy country living in rural East Texas while
        wrangling code during the day. I&apos;m passionate about my feild and have years of experience creating high
        quality and extensible code. Whether I am using React to build frontend components or testings APIs, I&apos;m
        commited to listening to the client&apos;s needs and delivering products.
       </p>
       {/* <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">I am a</p> */}
      </div>
     </div>
    </div>
   </div>
   {/* End pt-12 */}
  </>
 );
};

export default Intro;
