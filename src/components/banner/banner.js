import React from 'react';
import './banner.css';

const Banner = () => {
  return (
    <div id="banner-712">
        <div className="cs-container">
            <span className="cs-int-title">Sai Spiritual Education</span>
        </div>
        <picture className="cs-background">
            <source media="(max-width: 200px)" srcSet="/images/sse-Banner.png"></source>
            <source media="(min-width: 601px)" srcSet="/images/sse-Banner.png"></source>
            <img loading="lazy" decoding="async" src="/images/sse-Banner.png" alt="Sathya Sai SSE Education" height="568" ></img>
        </picture>
    </div>
    );
};

export default Banner;
                                