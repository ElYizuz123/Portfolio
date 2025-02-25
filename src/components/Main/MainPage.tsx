import React from 'react'
import NavBar from '../Layout/NavBar'
import Presentation from './Presentation'
import Footer from '../Layout/Footer'

const MainPage = () => {
  return (
    <main>
        <NavBar isHome={true}/>
            <div className="min-h-screen">
                <Presentation/>
            </div>
            <hr className="w-full border-[#484848]"/>
        <Footer/>
    </main>
  )
}

export default MainPage