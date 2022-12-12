import React from 'react'

const Footer = () =>  (
    <div className='flex flex-col pt-6 pb-10 bg-darkModerateCyan items-center'>
      <h1 className="text-2xl">
        sunnyside
      </h1>

      <div className="flex flex-row space-x-5">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
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
