import React from 'react'
import { PageContainer } from '../components/PageContainer'
import { NavDesktop } from '../components/NavDesktop'
import { NavMobile } from '../components/NavMobile'
import { FeaturedProject } from '../components/FeaturedProject'

function Home () {
  return (
    <>
      <NavDesktop />
      <NavMobile />

      <PageContainer section='home'>
        <h1>Gonzalo Espindola</h1>
        <span>Desarrollador web</span>
        <div className='contact_container_item'>
          <div>
            <a className='contact_link' href='https://www.linkedin.com/in/gonzalo-espindola/' target='_blank' rel='noreferrer'><i class='fa-brands fa-linkedin-in fa-2xl' />Linkedin</a>
          </div>

          <div>
            <a className='contact_link' href='https://github.com/GonzaloEspindola' target='_blank' rel='noreferrer'><i class='fa-brands fa-github fa-2xl' />Github</a>
          </div>

          <div>
            <a className='contact_link' href='https://www.instagram.com/gonzaa.espindola/' target='_blank' rel='noreferrer'><i class='fa-brands fa-instagram fa-2xl' />Instagram</a>
          </div>
        </div>
        <a href='#projects' className='button_more'>
          <i class='fa-solid fa-arrow-down fa-2xl more_home_button' />
        </a>
      </PageContainer>

      <PageContainer section='projects'>
        <h3 className='subtitle'>Proyectos destacados</h3>
        <FeaturedProject />
      </PageContainer>
    </>
  )
}

export { Home }
