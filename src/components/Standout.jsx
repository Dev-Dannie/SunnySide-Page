import React from 'react'

const Standout = () => (
    <div className='flex md:flex-row flex-col justify-center items-center'>

      <div className='hidden md:flex md:w-1/2'>
        <img src="./images/desktop/image-stand-out.jpg" alt="" />
      </div>
      <div className='w-full md:hidden'>
        <img src="./images/mobile/image-stand-out.jpg" alt="" />
      </div>

      <div className="flex flex-col px:16 md:px-20 text-center 
      py-12 md:w-1/2 md:text-left w-full">
      <h1 className='text-4xl font-bold mb-10'>
      Standout to the right audience
      </h1>

      <p className='font-bold mb-10 text-center md:text-left text-darkGrayishBlue'>  
      Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
      </p>

      <a href="#" className='font-bold hover:text-softRed'>LEARN MORE</a>
      </div>
    </div>
  )


export default Standout
