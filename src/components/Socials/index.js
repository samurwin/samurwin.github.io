import React from 'react'

export default function Socials({socialLinks}) {

  function onClick(link) {
    window.open(link, '_blank');
  }

  return(
    <>
      {socialLinks.map(social => (
        <span 
        className="svg text-secondary pb-3"
        onClick={(e) => {
            e.preventDefault();
            onClick(social.link)
        }}
        key={social.key}
        >
            {social.icon}
        </span>
      ))}
      
    </>
  )
}