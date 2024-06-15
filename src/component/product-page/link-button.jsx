import React from 'react'

const LinkButton = ({id,icon,name}) => {
  return (
    <>
    <div className="pro-links">
        <a href='#'>
           {icon} {name}
        </a>
    </div>
      
    </>
  )
}

export default LinkButton
