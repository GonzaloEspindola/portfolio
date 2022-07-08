import React, { useState } from 'react'

const NavMobile = () => {
  const [isNavbarActivate, setIsNavbarActivate] = useState(false)

  return (
    <>
      <header className='header_mobile'>
        <nav className='nav_mobile'>
          <a href='/portfolio'>Gonza Espindola</a>
          <i class='fa-solid fa-bars fa-2xl' onClick={() => setIsNavbarActivate(!isNavbarActivate)} />
        </nav>
      </header>
      <div className={`nav_mobile_ul ${isNavbarActivate ? 'active' : ''}`}>
        <ul>
          <a href='#home' onClick={() => setIsNavbarActivate(!isNavbarActivate)}><li><span>1_</span>Inicio</li></a>
          <a href='#projects' onClick={() => setIsNavbarActivate(!isNavbarActivate)}><li><span>2_</span>Proyectos</li></a>
        </ul>
      </div>
    </>
  )
}

export { NavMobile }
