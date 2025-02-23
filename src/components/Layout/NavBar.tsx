import React from 'react'

interface NavBarProps {
  isHome: boolean
}

const NavBar: React.FC<NavBarProps> = ({isHome}) => {
  return (
    
    <nav className={"flex navbar navbar-expand-lg navbar-light bg-light justify-between p-5 pl-10 pr-10 items-center fixed top-0 left-0 w-full z-50"}>
      <a className={`navbar-brand font-extrabold text-2xl ${isHome ? 'text-black' : 'text-white'}`} href='#'>JESÚS ZÁRATE</a>
      <div className='columns-4 font-bold text-white'> 
        <ul className='navbar-nav pr-10'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>About</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Projects</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar