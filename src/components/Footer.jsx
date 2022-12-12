import React from 'react'

const Footer = () =>  (
    <div className='flex flex-col pt-6 pb-10 space-y-8 bg-darkModerateCyan items-center'>
     <img src="../images/logo.svg" alt="" className='text-darkDesaturatedCyan'/>

      <div className="flex flex-row space-x-5">
        <a href="#" className='text-darkDesaturatedCyan font-bold'>About</a>
        <a href="#" className='text-darkDesaturatedCyan font-bold'>Services</a>
        <a href="#" className='text-darkDesaturatedCyan font-bold'>Projects</a>
      </div>

      <div className="flex flex-row space-x-3">
        <img src="../images/icon-facebook.svg" alt="" className='text-darkDesaturatedCyan' />
        <img src="../images/icon-instagram.svg" alt="" />
        <img src="../images/icon-twitter.svg" alt="" />
        <img src="../images/icon-pinterest.svg" alt="" />
      </div>
    </div>
  )


export default Footer
