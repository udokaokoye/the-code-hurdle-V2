import Footer from "../Components/Footer";
import GenericShowcase from "../Components/GenericShowcase";
import Navigation from "../Components/Navigation";
import React from "react";
import { faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function about() {
  return (
    <div>
      <Navigation active={"About"} />
      <GenericShowcase page={"About"} />
      <div className="aboutContainer">

        <div className="aboutShow">
        <h1 className="aboutTitle">About The Show</h1>
        <div className="showHeader">
            <div className="showImg"></div>
            <div className="showInfo">
                <h1>The Code Hurdle</h1>
                <span>Software Development | Self Growth</span>
                <div className="showSocialLinks">
                <a href="https://www.instagram.com/thecodehurdlepodcast/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="aboutIcons" /></a>
                <a href="https://twitter.com/thecodehurdle" target="_blank"><FontAwesomeIcon icon={faTwitter} className="aboutIcons" /></a>
                    {/* <FontAwesomeIcon icon={faGithub} className="aboutIcons" /> */}
                </div>
            </div>
        </div>
        <p className="podcastDescription">
          Welcome to The Code Hurdle Podcast! Our show is dedicated to bringing
          you the stories of experienced and non-experienced developers in the
          software development industry. We aim to inspire and educate our
          listeners by exploring the journeys of these developers, highlighting
          the obstacles they've faced, and learning how they overcame those
          hurdles.
        </p>
        <p className="podcastDescription">
          Our podcast is a platform for developers to share their stories and
          experiences with a wider audience. We believe that there is so much to
          learn from the experiences of others, and we hope that our listeners
          will be able to take away valuable insights and lessons from each
          episode.
        </p>
        <p className="podcastDescription">
          At The Code Hurdle Podcast, we're committed to creating a welcoming
          and inclusive space where all developers, regardless of their
          experience level, can come together to learn and grow. We believe that
          by sharing our stories and experiences, we can help build a stronger
          and more supportive community of developers.
        </p>
        <p className="podcastDescription">
          Thank you for tuning in to The Code Hurdle Podcast. We hope you'll
          join us on this journey and discover new insights, tips, and
          inspiration for your own career in software development.
        </p>
        </div>

        <div className="aboutHost">
        <h1 className="hostTitle">About The Host</h1>

        <div className="hostHeader">
            <div className="hostImg"></div>
            <div className="hostInfo">
                <h1>Levi Okoye</h1>
                <span>Software Developer | Content Creator</span>
                <div className="hostSocialLinks">
                   <a href="http://udokaokoye.com" target="_blank"><FontAwesomeIcon icon={faGlobe} className="aboutIcons" /></a>
                   <a href="https://www.linkedin.com/in/udoka-okoye-abba591ab/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="aboutIcons" /></a>
                   <a href="https://www.instagram.com/levi.dev__/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="aboutIcons" /></a>
                   <a href="https://twitter.com/levi_dev_" target="_blank"><FontAwesomeIcon icon={faTwitter} className="aboutIcons" /></a>
                   <a href="https://github.com/udokaokoye" target="_blank"><FontAwesomeIcon icon={faGithub} className="aboutIcons" /></a>
                </div>
            </div>
        </div>

        <p className="hostDescription">
        Hey There, My name is Levi Okoye, and I'm the host of The Code Hurdle Podcast. I have 3 years of experience as a software developer and I'm currently a second-year software engineering student at The University Of Cincinnati.
        <br />
        As someone who's been through the process of learning software development, I understand the challenges that come with it. That's why I'm passionate about sharing my knowledge and experience with others, particularly those who are just starting out.
        </p>
        <p className="hostDescription">In addition to hosting The Code Hurdle Podcast, I'm also a content creator on Instagram, TikTok, and LinkedIn, where I share relatable content about software development. I believe that learning should be fun and engaging, and I strive to create content that makes programming more accessible to everyone.</p>
        <p className="hostDescription">
        My goal with The Code Hurdle Podcast is to inspire and educate developers at all levels of experience. I'm excited to speak with both experienced and non-experienced developers in the software development industry about their journeys and the obstacles they've faced. By sharing their stories and experiences, I hope to provide listeners with valuable insights, tips, and inspiration to help them overcome their own hurdles.
        </p>
        <p className="hostDescription">Thank you for taking the time to learn more about me and The Code Hurdle Podcast. I hope you'll tune in and join me on this exciting journey of discovery and growth in the software development industry.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default about;
