import React from 'react'

const Testimonials = () =>  (
    <div className='flex flex-col mx-auto p-6 items-center justify-center space-x-5'>
      <h1 className='text-2xl font-bold'>CLIENT TESTIMONIALS</h1>
      <div className="flex flex-col md:flex-row p-6 mx-auto space-x-5 text-center">

        {/* Testimonial 1 */}
        <div className="flex flex-col space-y-5 w-1/3 items-center justify-center">
            <img src="../images/image-emily.jpg" alt="" className='w-16 rounded-full' />
            <p className="">
            We put our trust in Sunnyside and they delivered, 
            making sure our needs were met and deadlines were always hit.
            </p>
            <div className="flex flex-col items-center justify-center">
                <h4 className='text-lg'>Emily R.</h4>
                <p className="text-sm">
                    Marketing Director
                </p>
            </div>
        </div>

         {/* Testimonial 1 */}

        <div className="flex flex-col space-y-5 w-1/3 items-center justify-center">
            <img src="../images/image-thomas.jpg" alt="" className='w-16 rounded-full' />
            <p className="">
            Sunnyside’s enthusiasm coupled with their keen interest 
            in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="flex flex-col items-center justify-center">
                <h4 className='text-lg'>Thomas S.</h4>
                <p className="text-sm">
                Chief Operating Officer
                </p>
            </div>
        </div>

         {/* Testimonial 1 */}
    
        <div className="flex flex-col space-y-5 w-1/3 items-center justify-center">
            <img src="../images/image-jennie.jpg" alt="" className='w-16 rounded-full' />
            <p className="">
            Incredible end result! Our sales increased over 400% 
            when we worked with Sunnyside. Highly recommended!
            </p>
            <div className="flex flex-col items-center justify-center">
                <h4 className='text-lg'>Jennie F.</h4>
                <p className="text-sm">
                Business Owner
                </p>
            </div>
        </div>
      </div>
    </div>
  )

export default Testimonials
