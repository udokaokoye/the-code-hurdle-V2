import React from 'react'
import GenericShowcase from '../Components/GenericShowcase'
import Navigation from '../Components/Navigation'
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AllEpisodes from '../Components/AllEpisodes';
import Footer from '../Components/Footer';
function Episodes() {
  return (
    <div>
      <Navigation active='Episodes' /> 
      <GenericShowcase page='Episodes' />


      <div className="episodesContainer">
        <div className="searchContainer">
          <input type="text" placeholder='Search our episodes...' className='episodeSearchInput' />
          <button className='searchButton'>Search</button>
        </div>
        <div className="episodesContainerHeader">
          <h1 className='headerText'>All Episodes</h1>
          <div className="filterContainer">
            <span className="filterText"><FontAwesomeIcon icon={faFilter} /> Date</span>
            {/* have a state that manages when this is clicked, when true, set filterHoverDiv display to flex. then when an item is selected set the state to false */}
            <div className="filterHoverDiv">
              <span className="filterItem">Date</span>
              <span className="filterItem">Date</span>
              <span className="filterItem">Date</span>
            </div>
          </div>
        </div>

        <AllEpisodes />

        {/* I might add a bottom tab paggination to control the amount of data that is show at a time */}

        <Footer />
      </div>

    </div> 
  )
}

export default Episodes