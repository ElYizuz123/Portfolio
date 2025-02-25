import React, { Suspense } from 'react'
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Presentation = () => {
  return (
    
    <div className="absolute w-full h-screen bg-transparent overflow-hidden">
        <div className="absolute w-[105%] h-[200vh] bg-[#D7D7D7] transform -translate-x-1/2 -translate-y-1/2 rotate-12 -z-50"></div> 
        <div className='flex justify-between'>
            <div className='h-screen w-[50%] items-center justify-center flex flex-col'>
                <div>
                    <h1 className='font-bold text-4xl pb-5'>Hi, I am</h1>
                    <h1 className='font-bold text-7xl pb-5'>Jesús Zárate</h1>
                    <h1 className='text-2xl pb-5'>Full-Stack Developer</h1>
                    <div className='flex gap-5 items-center'>
                        <button className='bg-[#D3E97A] h-12 w-44 rounded-3xl font-bold flex justify-center items-center gap-4 group transition-transform duration-150 hover:scale-105 hover:cursor-pointer'>
                            <p>CONTACT ME</p>
                            <div className="relative w-5 h-5 flex justify-center items-center">
                                <div className="absolute bg-black w-2 h-2 rounded-full transition-opacity duration-150 group-hover:opacity-0"></div>
                                <BsArrowUpRightCircleFill className="bg-white rounded-full absolute w-8 h-8 opacity-0 scale-75 transition-all duration-150 group-hover:opacity-100 group-hover:scale-100"/>
                            </div>
                        </button>
                        <button className='bg-[#222222] h-10 w-10 rounded-3xl font-bold flex justify-center items-center gap-4 group transition-transform duration-150 hover:scale-110 hover:cursor-pointer'>
                            <FaLinkedinIn className='text-[#D3E97A] w-4 h-4' />
                        </button>
                        <button className='bg-[#222222] h-10 w-10 rounded-3xl font-bold flex justify-center items-center gap-4 group transition-transform duration-150 hover:scale-110 hover:cursor-pointer'>
                            <FiGithub className='text-[#D3E97A] w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='h-screen w-[50%] items-start justify-end flex flex-col'>
                <Suspense fallback={<div>Loading...</div>}>
                    <img className="w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-lg xl:max-w-[70%]" src="/MyImages/Main_Image.png" alt="Description" />
                </Suspense>
            </div>
        </div>
    </div>
    
  )
}

export default Presentation