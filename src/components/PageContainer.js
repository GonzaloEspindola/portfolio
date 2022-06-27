import React from 'react'

const PageContainer = (props) => {
  return (
    <section className='page_container' id={`${props.section}`}>
      {props.children}
    </section>
  )
}

export { PageContainer }
