import React from 'react'

const Footer = () => {
  return (
    <div className='bg-blue-400 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>

<div className="logo font-bold text-black text-2xl ">
            <span className='text-blue-700'> &lt; </span>
            <span>Pass</span> <span className='text-blue-700'>Manager/&gt;</span>
         
         </div>
      
      <div className='flex justify-center items-center '>
        Managed <img className='w-7 mx-2' src="/heart.png" alt=""/>by Junaid Shareef
      </div>
    </div>
    
  )
}

export default Footer
