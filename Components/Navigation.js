import React, {useContext} from 'react'
import { AppContex } from '../Context/Store'
import Link from 'next/link.js'

function Navigation({active}) {
  const {demo, setdemo, side, setside} = useContext(AppContex)

  return (
    <div className="navigationContainer">
      <div className="leftLinks">
        <Link className='link' href={'/'}><span className={`${active == 'Home' ? 'active' : ''}`}>Home</span></Link>
        <Link className='link' href={'/episodes'}><span className={`${active == 'Episodes' ? 'active' : ''}`}>Episodes</span></Link> 
        <a href="/#subscribe" className='link'><span>Subscribe</span></a>
        <Link href={'/about'} className='link'><span className={`${active == 'About' ? 'active' : ''}`}>About</span></Link>
        <Link href={'/contact'} className='link'><span className={`${active == 'Contact' ? 'active' : ''}`}>Contact</span></Link>
        <span>Blog</span>
      </div>
      <div className="logo">
        The Code Hurdle Podcast
      </div>
      <div className="rightLinks">
        <a href="#" target='_blank'><div className="applePodcast podcastbanner"></div></a>
        <a href="#" target='_blank'><div className="spotifyPodcast podcastbanner"></div></a>
      </div>
    </div>

  )
}

export default Navigation