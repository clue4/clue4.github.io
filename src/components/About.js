import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { FaFile, FaGithub, FaMailBulk } from "react-icons/fa";

function About() {
  return (
    <div className='about-container'>
      <div className='profile-wrapper'>
        <img className='profile' src='images/profile.JPG' alt='Profile'/>
      </div>
      <div className='about-content-container'>
        <div className='about-top'>
          <h1 className='hi' >Hi there!</h1>
        </div>
        <div className='about-bottom'>
          <div className='about-me'>
            <p className='about-words'>I’m Connie. I’m currently a sophomore studying Computer Science
              and Philosophy at Northeastern University. I like (trying) to solve problems, 
              learning more about pretty much anything I don't know about, 
              and questioning the meaning behind life.</p>
            <p className='about-words'>In my spare time, I enjoy reading, trying new foods, 
              and being in nature (and taking <Link to='/photography' className='about-link'>
              pictures of said nature - check it out!</Link>).</p>
            <div className='contact'>
              <ul className='contact-list'>
                <li className='about-link'>
                  <FaFile /> 
                  <a href="https://drive.google.com/file/d/1GDtvUIt3WQa67u-ClDSG1W60oGlwTwmM/view?usp=sharing"> Resume</a></li>
                <li className='about-link'>
                  <FaMailBulk />
                  <a href="mailto:liu.conn@northeastern.edu">  liu.conn@northeastern.edu</a>
                </li>
                <li className='about-link'>
                  <FaGithub />
                  <a href="https://github.com/clue4">  github: @clue4</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='fun-facts'>
            <h3>Quick facts:</h3>
            <ul>
              <li>Favorite food: hot pot</li>
              <li>Favorite book: Catalyst (SJ Kincaid)</li>
              <li>Favorite movie: Shawshank Redemption, HTTYD</li>
              <li>Favorite color: Take a guess! (and blue)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
