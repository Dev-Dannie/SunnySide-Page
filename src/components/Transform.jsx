import React from 'react'

const Transform = () => (
    <div className=' flex md:flex-row flex-col-reverse'>
      <div className="flex flex-col  text-center md:w-1/2 md:text-left">
      <h1>
      Transform your brand
      </h1>

      <p>
      We are a full-service creative agency specializing in helping brands grow fast. 
      Engage your clients through compelling visuals that do most of the marketing for you.
      </p>

      <a href="#">Learn more</a>
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
