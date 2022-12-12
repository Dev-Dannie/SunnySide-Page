

const Navbar = () =>  (
    
        <nav className="relative  p-6">
        <div className="flex justify-between items-center ">
          
        <img src="../images/logo.svg" alt="" />
        
        <div className="hidden md:flex space-x-6 items-center">
        <a href="#" className='text-sm text-White'>About</a>
        <a href="#" className='text-sm text-White'>Services</a>
        <a href="#" className='text-sm text-White'>Project</a>
        <a href="#" className='text-sm font-[500] bg-White py-2 
        px-3 rounded-full hover:bg-grayishB'>CONTACT</a>
        </div>
        </div>
        
        </nav>
    
  )


export default Navbar
