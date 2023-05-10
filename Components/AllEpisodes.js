import React from 'react'
import EpisodeCard from './EpisodeCard'

function AllEpisodes({optionalText}) {
  return (
    <div className='allEpisodesContainer'>
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
    </div>
  )
}

export default AllEpisodes