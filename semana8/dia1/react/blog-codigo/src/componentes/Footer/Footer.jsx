import React from 'react'
import './Footer.scss'
import icon_facebook from './../../assets/icons/facebook.png'
import icon_instagram from './../../assets/icons/instagram.png'
import icon_twitter from './../../assets/icons/twitter.png'

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__copyright">codiGo, copyright 2021</p>
            <div className="footer__social-media-container">
                <div className="footer__social-media-container__icon"><img src={icon_facebook} alt="facebook"/></div>
                <div className="footer__social-media-container__icon"><img src={icon_instagram} alt="instagram"/></div>
                <div className="footer__social-media-container__icon"><img src={icon_twitter} alt="twitter"/></div>
            </div>
        </div>
    )
}

export default Footer
