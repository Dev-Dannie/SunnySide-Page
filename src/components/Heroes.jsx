import React from 'react'

const Heroes = () =>  (
    <>
        <div className='hidden md:flex flex-row'>
        <img src="../images/desktop/image-gallery-milkbottles.jpg" alt="" className='w-1/4'/>
        <img src="../images/desktop/image-gallery-orange.jpg" alt="" className='w-1/4'/>
        <img src="../images/desktop/image-gallery-cone.jpg" alt="" className='w-1/4'/>
        <img src="../images/desktop/image-gallery-sugarcubes.jpg" alt="" className='w-1/4'/>
        </div>

        <div className=' flex md:hidden flex-row flex-wrap'>
            <img src="../images/mobile/image-gallery-milkbottles.jpg" alt="" className='w-1/2'/>
            <img src="../images/mobile/image-gallery-orange.jpg" alt="" className='w-1/2'/>
            <img src="../images/mobile/image-gallery-cone.jpg" alt="" className='w-1/2'/>
            <img src="../images/mobile/image-gallery-sugar-cubes.jpg" alt="" className='w-1/2'/>
        </div>
    </>
  )

export default Heroes
