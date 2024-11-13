import React from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.svg';
import instagram from '../..//assets/images/social-icon-1.png';
import twitter from '../..//assets/images/social-icon-2.png';
import youtube from '../..//assets/images/social-icon-3.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-background"></div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <img src={logo} alt="Logo" className="footer-logo" />
                        <p>Takeaway & Delivery template for small - medium businesses.</p>
                    </div>
                    <div className="footer-section footer-lists">
                        <div className="footer-section">
                            <h5>COMPANY</h5>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#order">Order</a></li>
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h5>TEMPLATE</h5>
                            <ul>
                                <li><a href="#styleguide">Style Guide</a></li>
                                <li><a href="#changelog">Changelog</a></li>
                                <li><a href="#licence">Licence</a></li>
                                <li><a href="#webflowuniversity">Webflow University</a></li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h5>FLOWBASE</h5>
                            <ul>
                                <li><a href="#morecloneables">More Cloneables</a></li>
                            </ul>
                        </div>
                    </div>  
                </div>
                <div className="footer-base">
                <span>Built by <span className="highlight">Flowbase</span>. Powered by <span className="highlight">Webflow</span></span>
                    <div className="social-icons">
                        <a href="#instagram" className="social-icon"><img src={instagram} alt="Instagram" /></a>
                        <a href="#twitter" className="social-icon"><img src={twitter} alt="Twitter" /></a>
                        <a href="#youtube" className="social-icon"><img src={youtube} alt="YouTube" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;