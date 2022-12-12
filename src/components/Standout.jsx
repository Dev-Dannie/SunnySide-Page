import React from 'react'

const Standout = () => (
    <div className='flex md:flex-row flex-col'>

      <div className='hidden md:flex md:w-1/2'>
        <img src="./images/desktop/image-stand-out.jpg" alt="" />
      </div>
      <div className='w-full md:hidden'>
        <img src="./images/mobile/image-stand-out.jpg" alt="" />
      </div>

      <div className="flex flex-col  text-center md:w-1/2 md:text-left w-full">
      <h1>
      Standout your brand
      </h1>

      <p>  
      Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
      </p>

      <a href="#">Learn more</a>
      </div>
    </div>
  )


export default Standout
