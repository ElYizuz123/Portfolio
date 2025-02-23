import React from 'react'

interface NavBarProps {
  isHome: boolean
}

const NavBar: React.FC<NavBarProps> = ({isHome}) => {
  return (
    
    <nav className={"flex navbar navbar-expand-lg navbar-light bg-light justify-between p-5 pl-10 pr-10 items-center fixed top-0 left-0 w-full z-50"}>
      <a className={`navbar-brand font-extrabold text-2xl ${isHome ? 'text-black' : 'text-white'}`} href='#'>JESÚS ZÁRATE</a>
      <div className='columns-4 font-bold text-white'> 
        <ul className='pr-8'>
          <li className='flex'>
            <a className='w-24 hover:bg-white hover:text-black rounded-3xl text-center' href='#'>Home</a>
          </li>
          <li className='flex'>
            <a className='w-24 hover:bg-white hover:text-black rounded-3xl text-center' href='#'>About</a>
          </li>
          <li className='flex'>
            <a className='w-24 hover:bg-white hover:text-black rounded-3xl text-center' href='#'>Projects</a>
          </li>
          <li className='flex'>
            <a className='w-24 hover:bg-white hover:text-black rounded-3xl text-center' href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar