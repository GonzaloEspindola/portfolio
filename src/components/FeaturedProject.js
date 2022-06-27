import React from 'react'
import { projects } from '../utils/projects'

const FeaturedProject = () => {
  function generateIcon ({ project }) {
    return (
      project.tech.map(item => {
        return (
          <i key={item} className={`fa-brands fa-${item} fa-2xl`} title={`${item}`} />
        )
      })
    )
  }

  const featuredProject = projects.map(project => {
    return (
      <div className='featured_project_container' key={project.title}>
        <div className='featured_project_info'>
          <span>{project.date}</span>
          <h2>{project.title}</h2>
          <p>{project.subtitle}</p>
          <div className='techs_used'>
            {generateIcon({ project })}
          </div>
          <div className='project_links'>
            <a className='project_link' href={`${project.demoLink}`} target='_blank' rel='noreferrer'>Ver demo</a>
            <a className='project_link' href={`${project.githubLink}`} target='_blank' rel='noreferrer'>Ver repositorio</a>
          </div>
        </div>
        <div className='featured_project_img'>
          <img alt='project' src={`${project.imageLink}`} />
        </div>
      </div>
    )
  })

  return <>{featuredProject}</>
}

export { FeaturedProject }
