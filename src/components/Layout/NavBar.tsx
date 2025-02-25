import React, { useState, useEffect } from 'react'

interface NavBarProps {
  isHome: boolean
}

const NavBar: React.FC<NavBarProps> = ({ isHome }) => {
  // Estado para controlar la animación)
  const [isVisible, setIsVisible] = useState(false)
  
  // Efecto que activa la animación después de montar el componente
  useEffect(() => {
    if(!isHome){
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 100) // Pequeño retraso para asegurar que la transición sea visible
      
      return () => clearTimeout(timer)
    }
    if(isHome){
      setIsVisible(false)
    }
  }, [isHome])

  
  return (
    <div>
      {isHome && 
        <nav className={`absolute top-0 left-0 w-full z-50 p-5 pl-10 pr-10 flex justify-between items-center
          transition-all duration-500 ease-in-out transform`}>
          <a className={`navbar-brand font-extrabold text-2xl min-w-48 ${isHome ? 'text-black' : 'text-white'}`} href='#'>JESÚS ZÁRATE</a>
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
      }
      {!isHome && 
        <nav className={`fixed top-0 left-0 w-full z-50 p-5 pl-10 pr-10 flex justify-between items-center
          transition-all duration-500 ease-in-out transform ${!isVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          <a className={`navbar-brand font-extrabold text-2xl min-w-48 ${isHome ? 'text-black' : 'text-white'}`} href='#'>JESÚS ZÁRATE</a>
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
      }
      
    </div>
  )
}

export default NavBar