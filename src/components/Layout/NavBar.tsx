import React, { useState, useEffect } from 'react'

interface NavBarProps {
  isHome: boolean
}

const NavBar: React.FC<NavBarProps> = ({ isHome }) => {
  // Estado para controlar la animación)
  const [isVisible, setIsVisible] = useState(false)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  
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

  const routes = (
    <div className='columns-4 font-bold text-white hidden lg:block'>
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
  )

  const hamburgerButton = (
    <button 
      onClick={toggleMenu} 
      className="lg:hidden text-white focus:outline-none"
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {isMenuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  )

  

  
  return (
    <div>
      {isHome && 
        <div>
          <nav className={`absolute top-0 left-0 w-full z-50 p-5 pl-10 pr-10 flex justify-between items-center
            transition-all duration-500 ease-in-out transform `}>
            <a className={`navbar-brand font-extrabold text-2xl min-w-48 ${isHome ? 'text-black' : 'text-white'}`} href='#'>JESÚS ZÁRATE</a>
            {routes}
            {hamburgerButton}
          </nav>
          
        </div>
      }
      {!isHome && 
        <nav className={`fixed top-0 left-0 w-full z-50 p-5 pl-10 pr-10 flex justify-between items-center
          transition-all duration-500 ease-in-out transform ${!isVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
          <a className={`navbar-brand font-extrabold text-2xl min-w-48 ${isHome ? 'text-black' : 'text-white'}`} href='#'>JESÚS ZÁRATE</a>
          {routes}
          {hamburgerButton}
        </nav>
      }
      
    </div>
  )
}

export default NavBar