import React, { PureComponent } from 'react';
import './Footer.css';
import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/social-icon-1.png';
import twitter from '../../assets/images/social-icon-2.png';
import youtube from '../../assets/images/social-icon-3.png';

class Footer extends PureComponent {
  footerLinks = [
    {
      title: "COMPANY",
      links: [
        { name: "Home", url: "#" },
        { name: "Order", url: "#" },
        { name: "FAQ", url: "#" },
        { name: "Contact", url: "#" },
      ]
    },
    {
      title: "TEMPLATE",
      links: [
        { name: "Style Guide", url: "https://www.google.com/" },
        { name: "Changelog", url: "https://www.google.com/" },
        { name: "Licence", url: "https://www.google.com/" },
        { name: "Webflow University", url: "https://www.google.com/" },
      ]
    },
    {
      title: "FLOWBASE",
      links: [
        { name: "More Cloneables", url: "#" }
      ]
    }
  ];

  socialIcons = [
    { url: "#instagram", icon: instagram, alt: "Instagram" },
    { url: "#twitter", icon: twitter, alt: "Twitter" },
    { url: "#youtube", icon: youtube, alt: "YouTube" },
  ];

  render() {
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
              {this.footerLinks.map(section => (
                <div className="footer-section" key={section.title}>
                  <h5>{section.title}</h5>
                  <ul>
                    {section.links.map(link => (
                      <li key={link.name}><a href={link.url} onClick={(e) => link.url === "#" && e.preventDefault()}>{link.name}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-base">
            <span>Built by <span className="highlight">Flowbase</span>. Powered by <span className="highlight">Webflow</span></span>
            <div className="social-icons">
              {this.socialIcons.map(icon => (
                <a href={icon.url} key={icon.alt} className="social-icon" onClick={(e) => icon.url === "#" && e.preventDefault()}>
                  <img src={icon.icon} alt={icon.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;