
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
                    <span className="cs-header">Contact</span>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="tel:414-301-2753">(414) 301 2753</a>
                    </li>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="mailto:info@codestitch.com">saicenter.milwaukee@gmail.com</a>
                    </li>
                </ul>
                <ul className="cs-nav">
                    <span className="cs-header">Address</span>
                    <li className="cs-nav-li">
                        <a className="cs-nav-link" href="/">2418 W Mangold Ave,<br /> Milwaukee, WI 53221</a>
                    </li>
                </ul>
                <ul className="cs-nav">
                    <span className="cs-header">Hours</span>
                    <li className="cs-nav-li">
                        <strong>Sunday: 2:30 - 5:30pm</strong>
                        <ul>
                            <li><strong>Service Activity</strong>: 2:30pm-3:00pm</li>
                            <li><strong>Bal Vikas / SSE</strong>: 3:00pm-4:00pm</li>
                            <li><strong>Bhajans</strong>: 4:00pm-5:00pm</li>
                            <li><strong>Social</strong>: 5:00pm-5:30pm</li>
                        </ul>
                    </li>
                </ul>
                 <ul className="cs-nav">
                    <span className="cs-header">Sai Websites</span>
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
                        <a href="https://www.youtube.com/channel/UC-utAMgGxJVomfglWt_XWiQ" className="cs-nav-link" target="_blank" rel="noopener noreferrer">Youtube</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

                                