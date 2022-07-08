import React, { useState } from 'react'

const NavDesktop = () => {
  const [navActivate, setNavActivate] = useState('home')

  return (
    <header className='header_desktop'>
      <nav className='nav_desktop'>
        <a href='/portfolio'>Gonza Espindola</a>
        <ul>
          <a href='#home' onClick={() => setNavActivate('home')} className={`${navActivate === 'home' ? 'active' : ''}`}><li>Inicio</li></a>
          <a href='#projects' onClick={() => setNavActivate('projects')} className={`${navActivate === 'projects' ? 'active' : ''}`}><li>Proyectos</li></a>
        </ul>
        <div />
      </nav>
    </header>
  )
}

export { NavDesktop }
