import React from 'react'

const Transform = () => (
    <div className='flex md:flex-row flex-col-reverse justify-center items-center'>
      <div className=" flex flex-col w-full px-5 py-12 md:w-1/2 md:px-20">
      <h1 className='text-4xl font-bold mb-10 mx-10 text-center'>
      Transform your brand
      </h1>

      <p className='font-bold mb-10 mx-3 text-center text-darkGrayishBlue'>
      We are a full-service creative agency specializing in helping brands grow fast. 
      Engage your clients through compelling visuals that do most of the marketing for you.
      </p>

      <a href="#" className='font-bold hover:text-Yellow text-center'>LEARN MORE</a>
      </div>

      <div className='hidden md:flex md:w-1/2'>
        <img src="./images/desktop/image-transform.jpg" alt="" />
      </div>
      <div className='w-full md:hidden'>
        <img src="./images/mobile/image-transform.jpg" alt="" />
      </div>
    </div>
  )


export default Transform
