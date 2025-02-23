import React from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Presentation = () => {
  return (
    
    <div className="absolute w-full h-screen bg-transparent overflow-hidden">
        <div className="absolute w-[105%] h-[200vh] bg-[#D7D7D7] transform -translate-x-1/2 -translate-y-1/2 rotate-12 -z-50"></div> 
        <div className='h-screen w-[50%] items-center justify-center flex flex-col'>
            <div>
                <h1 className='font-bold text-4xl pb-5'>Hi, I am</h1>
                <h1 className='font-bold text-7xl pb-5'>Jesús Zárate</h1>
                <h1 className='text-2xl pb-5'>Full-Stack Developer</h1>
                <div className='flex'>
                    <button className='bg-[#D3E97A] h-12 w-44 rounded-3xl font-bold flex justify-center items-center gap-4 group'>
                        <p>CONTACT ME</p>
                        <div className='bg-black w-2 h-2 rounded-full group-hover:hidden'></div>
                        <div className='hidden w-2 h-2 group-hover:block'></div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Presentation