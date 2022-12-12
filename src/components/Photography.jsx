import React from 'react'

const Photography = () => (
    <div className='flex md:flex-row flex-col'>

      <div className='hidden relative md:flex md:w-1/2'>
        <img src="./images/desktop/image-graphic-design.jpg" alt="" />

        <div className="absolute bottom-0 mb-8 px-20 flex flex-col text-center">
            <h1 className="text-2xl">    
                Graphic Design
            </h1>

            <p>
            Great design makes you memorable. We deliver artwork that 
            underscores your brand message and captures potential clients’ attention.
            </p>
        </div>
      </div>
      <div className='w-full md:hidden relative'>
        <img src="./images/mobile/image-graphic-design.jpg" alt="" />

        <div className="absolute bottom-0 mb-8 px-20 flex flex-col text-center">
            <h1 className="text-2xl">    
                Graphic Design
            </h1>

            <p>
            Great design makes you memorable. We deliver artwork that 
            underscores your brand message and captures potential clients’ attention.
            </p>
        </div>
      </div>

      <div className='hidden justify-center relative md:flex md:w-1/2'>
        <img src="./images/desktop/image-photography.jpg" alt="" />
        <div className="absolute bottom-0 mb-8 px-20 flex flex-col text-center">
            <h1 className="text-2xl">    
                Photography
            </h1>

            <p>
            Increase your credibility by getting the most stunning, 
            high-quality photos that improve your business image.
            </p>
        </div>
      </div>

      <div className='w-full md:hidden relative'>
        <img src="./images/mobile/image-photography.jpg" alt="" />
        
        <div className="absolute bottom-0 mb-8 px-20 flex flex-col text-center">
            <h1 className="text-2xl">    
                Photography
            </h1>

            <p>
            Increase your credibility by getting the most stunning, 
            high-quality photos that improve your business image.
            </p>
        </div>
      </div>
    </div>
  )


export default Photography
