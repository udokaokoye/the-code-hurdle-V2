
import React, {useContext} from 'react'
import { AppContex } from '../Context/Store'
import Link from 'next/link.js'

function Navigation() {
  const {demo, setdemo, side, setside} = useContext(AppContex)

  return (
    <div className="navigationContainer">
      <div className="leftLinks">
        <Link className='link' href={'/'}><span className='active'>Home</span></Link>
       <Link className='link' href={'/Episodes'}><span>Episodes</span></Link> 
        <span>Subscribe</span>
        <span>About</span>
        <span>Contact</span>
        <span>Blog</span>
      </div>
      <div className="logo">
        The Code Hurdle Podcast
      </div>
      <div className="rightLinks">
        <div className="applePodcast podcastbanner"></div>
        <div className="spotifyPodcast podcastbanner"></div>
      </div>
    </div>

  )
}

export default Navigation