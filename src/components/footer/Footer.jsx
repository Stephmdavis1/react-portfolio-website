import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'


const Footer = () => {
    return (
        <footer>
            <a href='/' className='footer__logo'>Stephanie Davis</a>

            <ul className="permalinks">
                <li><a href='/'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>My Work</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://dribble.com" target="_blank" rel="noreferrer"><FiDribbble /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; All Rights Reserved.</small>
            </div>
        </footer>
    )
}

export default Footer