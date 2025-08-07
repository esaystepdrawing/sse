
import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer id="cs-footer-274">
            <div className="cs-container">
                <div className="cs-logo-group">
                    <a aria-label="go back to home" className="cs-logo" href="/">
                        <img className="cs-logo-img" aria-hidden="true" loading="lazy" decoding="async" src="/images/logo-en.png" alt="logo" width="240" height="32"></img>
                    </a>
                </div>
                <ul className="cs-nav">
                    <li className="cs-nav-li">
                        <span className="cs-header">Contact</span>
                    </li>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="tel:414-301-2753">(414) 301 2753</a>
                    </li>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="mailto:info@codestitch.com">saicenter.milwaukee@gmail.com</a>
                    </li>
                </ul>
                <ul className="cs-nav">
                    <li className="cs-nav-li">
                        <span className="cs-header">Address</span>
                    </li>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="/">2418 W Mangold Ave,<br /> Milwaukee, WI 53221</a>
                    </li>
                </ul>
                <ul className="cs-nav">
                    <li className="cs-nav-li">
                        <span className="cs-header">Hours</span>
                    </li>
                    <li className="cs-nav-li">
                        Sunday: 2:30pm-6:00pm
                    </li>
                </ul>
                 <ul className="cs-nav">
                    <li className="cs-nav-li">
                        <span className="cs-header">Sai Websites</span>
                    </li>
                    <li className="cs-nav-li">
                        <a href="https://www.sathyasai.org/" className="cs-nav-link" target="_blank" rel="noopener noreferrer">Sathya Sai International Organization</a>
                    </li>
                    <li className="cs-nav-li">
                        <a href="https://saiuniverse.sathyasai.org/" className="cs-nav-link" target="_blank" rel="noopener noreferrer">Sri Sathya Sai Universe</a>
                    </li>
                    <li className="cs-nav-li">
                        <a href="https://sairhythms.sathyasai.org/" className="cs-nav-link" target="_blank" rel="noopener noreferrer">Sai Rhythms - Prayer and Bhajan</a>
                    </li>
                    <li className="cs-nav-li">
                        <a href="https://www.youtube.com/channel/UC-utAMgGxJVomfglWt_XWiQ" className="cs-nav-link" target="_blank" rel="noopener noreferrer">Youtube Video</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

                                