import './header.css';


function Header() {
    return (
        <>
            <section id="hero-143">
                <div className="cs-container">
                    <h1 className="cs-title">Sathya Sai Center - Milwaukee, WI</h1>
                    <p className="cs-text">
                        <br />
                        Sathya Sai Center of Milwaukee is a spiritual organization that promotes the teachings of Sathya Sai Baba, focusing on Selfless Service, Love, and Unity among all people.
                    </p>
                    <h1 className="cs-title">Love All, Serve All. <br />Help Ever, Hurt Never.</h1>

                </div>

                <picture className="cs-background">
                    <source media="(max-width: 600px)" srcSet="images/thron058.webp"></source>
                    <source media="(min-width: 601px)" srcSet="images/thron058.webp"></source>
                    <img loading="lazy" decoding="async" src="images/thron058.webp" alt="kitchen" width="2250" height="1500" aria-hidden="true"></img>
                </picture>

            </section>
            <section id="h-services-143">
                <ul className="cs-card-group">
                    <li className="cs-item">
                        <a className="cs-link" href="/sse">
                            <picture className="cs-icon">
                                <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/Lifebuoy-gold.svg" alt="icon" width="52" height="52" aria-hidden="true"></img>
                            </picture>
                            <h2 className="cs-title">Sai Spiritual Education</h2>
                            <p className="cs-text">
                                A Spiritual Education program that helps children develop a strong <strong>moral foundation</strong>, <strong>character</strong>, and <strong>values</strong>.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a className="cs-link" href="/sathya100birthday">
                            <picture className="cs-icon">
                                <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/Like-gold.svg" alt="icon" width="52" height="52" aria-hidden="true"></img>
                            </picture>
                            <h2 className="cs-title">Sathya Sai 100th Birthday</h2>
                            <p className="cs-text">
                                Sathya Sai Baba's <strong>100th birthday</strong> celebration, a time to reflect on his teachings and legacy.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a className="cs-link" href="https://sairhythms.sathyasai.org/" target="_blank" rel="noopener noreferrer">
                            <picture className="cs-icon">
                                <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/checkmark-circle-gold.svg" alt="icon" width="52" height="52" aria-hidden="true"></img>
                            </picture>
                            <h2 className="cs-title">Prayer and Bhajan</h2>
                            <p className="cs-text">
                                Singing devotional songs and prayers to connect with the divine and foster a sense of community. <strong>All Are One; Be Alike To Everyone</strong>.
                            </p>
                        </a>
                    </li>
                    <li className="cs-item">
                        <a className="cs-link" href="/service" rel="noopener noreferrer">
                            <picture className="cs-icon">
                                <img loading="lazy" decoding="async" src="https://csimg.nyc3.digitaloceanspaces.com/Services/two-people.svg" alt="service" width="52" height="52" aria-hidden="true"></img>
                            </picture>
                            <h2 className="cs-title">Service</h2>
                            <p className="cs-text">
                                Engaging in selfless service to help those in need and make a positive impact in the community. <strong>Help Ever, Hurt Never.</strong>
                            </p>
                        </a>
                    </li>
                </ul>
            </section>  
        </>  
    );
}

export default Header;