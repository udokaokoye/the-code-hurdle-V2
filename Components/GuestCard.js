import React from 'react'

function GuestCard({guest}) {
  return (
    <div className='guestCardContainer'>
        <div className="guestImage"></div>
        <h3 className="guestName">{guest.name}</h3>
        <span className="guestTitle">{guest.title} | {guest.company}</span>
        <p className="guestDescription">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus at fuga ex dolorum consectetur deserunt consequuntur officia provident animi sint repellat expedita inventore a maiores impedit ut neque consequatur repellendus, voluptatibus odit accusantium non! Natus itaque neque tempore beatae alias magni nemo in! Incidunt ratione recusandae veritatis ipsa ab.
        </p>
        <button className='guest_viewEpisodeBtn'>View Episodes</button>
    </div>
  )
}

export default GuestCard