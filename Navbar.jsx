import React from 'react'

const Navbar = () => {
  return (
      <nav className='bg-blue-400 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
         
         <div className="logo font-bold text-black text-2xl">
            <span className='text-blue-700'> &lt; </span>
            <span>Pass</span> <span className='text-blue-700'>Manager/&gt;</span>
         
         </div>
         <ul><li className='flex gap-4'>
            <a className='hover:font-bold' href ='/'>Home</a>
            <a className='hover:font-bold' href ='/'>About</a>
            <a className='hover:font-bold' href ='/'>Contacts</a>
            </li></ul>
            <button className='text-white bg-blue-500 my-5 rounded-md flex  justify-between items-center ring-white ring'>
              <img className='invert w-10 p-1' src="/github.svg" alt="" srcset="" />
             <span className='font-bold px-2'>Github</span>
            </button>
            </div>
          
      </nav>
  )
}

export default Navbar
 