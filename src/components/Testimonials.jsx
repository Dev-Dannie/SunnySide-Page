import React from 'react'

const Testimonials = () =>  (
    <div className='flex flex-col md:m-20 md:p-6 my-20 items-center justify-center space-x-5'>
      <h1 className='text-2xl font-bold mb-10 text-grayishBlue'>CLIENT TESTIMONIALS</h1>
      <div className="flex flex-col md:flex-row  mx-auto md:space-x-5 text-center">

        {/* Testimonial 1 */}
        <div className="flex flex-col space-y-5  md:w-1/3 items-center justify-center">
            <img src="../images/image-emily.jpg" alt="" className='w-16 rounded-full' />
            <p className="text-darkGrayishBlue font-bold text-sm md:mx-5 text-center">
            We put our trust in Sunnyside and they delivered, 
            making sure our needs were met and deadlines were always hit.
            </p>
            <div className="flex flex-col items-center justify-center">
                <h4 className='text-lg font-bold veryDarkDesaturatedBlue'>Emily R.</h4>
                <p className="text-sm text-grayishBlue font-bold">
                    Marketing Director
                </p>
            </div>
        </div>

         {/* Testimonial 1 */}

        <div className="flex flex-col space-y-5 md:w-1/3 my-10 items-center justify-center">
            <img src="../images/image-thomas.jpg" alt="" className='w-16 rounded-full' />
            <p className="text-darkGrayishBlue font-bold text-sm mx-5 text-center">
            Sunnyside’s enthusiasm coupled with their keen interest 
            in our brand’s success made it a satisfying and enjoyable experience.
            </p>
            <div className="flex flex-col items-center justify-center">
                <h4 className='text-lg font-bold veryDarkDesaturatedBlue'>Thomas S.</h4>
                <p className="text-sm text-grayishBlue font-bold">
                Chief Operating Officer
                </p>
            </div>
        </div>

         {/* Testimonial 1 */}
    
        <div className="flex flex-col space-y-5 md:w-1/3 items-center justify-center">
            <img src="../images/image-jennie.jpg" alt="" className='w-16 rounded-full' />
            <p className="text-darkGrayishBlue font-bold text-sm md:mx-5 text-center">
            Incredible end result! Our sales increased over 400% 
            when we worked with Sunnyside. Highly recommended!
            </p>
            <div className="flex flex-col items-center justify-center">
                <h4 className='text-lg font-bold veryDarkDesaturatedBlue'>Jennie F.</h4>
                <p className="text-sm text-grayishBlue font-bold">
                Business Owner
                </p>
            </div>
        </div>
      </div>
    </div>
  )

export default Testimonials
