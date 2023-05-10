import React from 'react'
import { faLocationArrow, faLongArrowAltRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EpisodeCard() {
  
  return (
    <div className='episodeCard'>
      <div className="episodeArt"></div>
      <div className="episodeDetails">
        <h3 className="episodeTitle">Bootcamp: The Struggles Of Beign A Developer</h3>
        <div className="episodeNumberandDateContainer">
        <span className="episodeNumber">Episode 2</span><span className="episodeDate">11 April 2023</span>
        </div>
        <span className="hostGuest">Host: Levi Okoye | Guest: Jack Doe</span>

        <p className="episodeNotes">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio itaque quae assumenda debitis! Distinctio alias enim aliquid, provident quo reiciendis!
        </p>

      </div>
      <div className="episodeActions">
      <div className="playButton"><FontAwesomeIcon size={'50'} icon={faPlay} /> Listen now</div>
      <a href='#' className='viewepisode'>View Episode <FontAwesomeIcon icon={faLocationArrow} /></a>
      </div>
    </div>
  )
}

export default EpisodeCard