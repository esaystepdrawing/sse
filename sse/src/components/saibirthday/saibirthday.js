import React from 'react';
import './saibirthday.css';



function SaiBirthday() {
    return (
        <>
        <div id="banner-849">
            <div className="cs-container">
                <span className="cs-int-title">Sathya Sai Baba 100th Birthday</span>
            </div>
            <picture className="cs-background" aria-hidden="true">
                <source media="(max-width: 600px)" srcSet="/images/sai100.jpeg"></source>
                <source media="(min-width: 601px)" srcSet="/images/sai100.jpeg"></source>
                <img loading="lazy" decoding="async" src="/images/sai100.jpeg" alt="yoga" width="1280" height="568"></img>
            </picture>
            <svg className="cs-wave" width="1920" height="179" viewBox="0 0 1920 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1920 179V91.3463C1835.33 91.3463 1715.47 76.615 1549.2 32.9521C1299.48 -32.3214 1132.77 12.1006 947.32 61.5167C810.762 97.9044 664.042 137 466.533 137C331.607 137 256.468 123.447 188.082 111.113C130.974 100.812 78.5746 91.3609 0 91.3609V179H1920Z" fill="white"/>
            </svg>
        </div>

        <section id="content-page-849">
            <div className="cs-container">
                <div className="cs-content">
                    <h1 className="cs-title">Sathya Sai Baba Birthday - <span className="cs-color">100 Years</span></h1>
                    <h2>November 23rd 2025</h2>
                    <h3>Save the date</h3>
                    <p>
                        The 100th birthday of Bhagawan is more than a mere chronological milestone; it is a clarion call to rejuvenate and recommit to His ideals. In an era marked by rapid technological advancements and moral dilemmas, His teachings offer a compass, directing humanity towards a future anchored in love, empathy, and unity.                    
                    </p>
                    <p>
                        He urged individuals to internalise the five human values: 
                    </p>
                        <ol>
                            <li>Satya (Truth)</li>
                            <li>Dharma (Righteousness)</li>
                            <li>Shanti (Peace)</li>
                            <li>Prema (Love)</li>
                            <li>Ahimsa (Non-violence)</li>
                        </ol>
                    <p>
                        and asserting that true transformation begins within. His discourses, filled with timeless wisdom, continue to guide seekers on the path of self-realisation and moral rectitude.                    
                    </p>
                    <h3>Celebrating a Century of Divine Love and Wisdom</h3>
                    <p>
                        Bhagawan Sri Sathya Sai Baba's legacy thrives through the selfless acts of His devotees worldwide. <br /><br />
                        From disaster relief efforts to community service projects, the global Sai community embodies His spirit of giving. As we celebrate this centenary, it's a moment to introspect and reaffirm our commitment to His vision. <br />
                        <br /><br />
                        In the words of Bhagawan, <strong>"The end of education is character. The end of knowledge is love."</strong>
                        <br />
                        <br />
                        Let us, on this auspicious occasion, pledge to carry forward His message, ensuring that love, service, and righteousness remain the cornerstones of our lives.
                    </p>                
                </div>
                <div className="cs-image-group">
                    <picture className="cs-picture">
                        <source media="(max-width: 600px)" srcSet="/images/100th Birthday Logo_HQ.png"></source>
                        <source media="(min-width: 601px)" srcSet="/images/100th Birthday Logo_HQ.png"></source>
                        <img decoding="async" src="/images/100th Birthday Logo_HQ.png" alt="person" width="542" height="520" aria-hidden="true"></img>
                    </picture>
                    <picture className="cs-picture">
                        <source media="(max-width: 600px)" srcSet="/images/100th Birthday Logo_HQ.png"></source>
                        <source media="(min-width: 601px)" srcSet="/images/100th Birthday Logo_HQ.png"></source>
                        <img decoding="async" src="/images/100th Birthday Logo_HQ.png" alt="person" width="542" height="520" aria-hidden="true"></img>
                    </picture>
                </div>
            </div>
        </section>
        </>
    );
}
export default SaiBirthday;
                                