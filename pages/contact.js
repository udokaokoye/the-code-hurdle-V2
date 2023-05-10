import GenericShowcase from '../Components/GenericShowcase'
import Navigation from '../Components/Navigation'
import React from 'react'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '../Components/Footer';

function contact() {
  return (
    <div>
        <Navigation active={'Contact'} />
        <GenericShowcase page={'Get In Touch'} />

        <div className="contactForm">
            <span className='formInstructions'>fill all required fields <sup>*</sup></span><br />
            <span className='formInstructions'>Please make sure to select appropriate reason, to help direct your message to the right person.</span><br />
            <span className='formInstructions'>Expect response within 24-48 hours</span>

            <form className='contactForm'> 
                <div className="nameAndEmail">
                    <input type="text" name='name' placeholder='Name *' className='formName' />
                    <input type="email" name="email" placeholder='Email *' className='formEmail' />
                </div>

                <select name="reason" className='formContactReason'>
                    <option value="null">Select contact reason</option>
                    <option value="null">Become a Guest</option>
                    <option value="null">Topic Suggestion</option>
                    <option value="null">Become a Sponsor</option>
                    <option value="null">Advertisment</option>
                </select>

                <textarea name="message" className='formMessage' placeholder='Message'></textarea>
                <br />
                <button type="submit" className='submitButton'>Submit <FontAwesomeIcon icon={faLongArrowAltRight} ></FontAwesomeIcon></button>
            </form>
        </div>

        <Footer />
    </div>
  )
}

export default contact