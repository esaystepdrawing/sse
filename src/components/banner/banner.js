import React from 'react';
import './banner.css';

const Banner = ({title = "sse", pic="/images/sse-Banner.png"}) => {
  return (
    <div id="banner-712">
        <div className="cs-container">
            <span className="cs-int-title">{title}</span>
        </div>
        <picture className="cs-background">
            <source media="(max-width: 200px)" srcSet={pic}></source>
            <source media="(min-width: 601px)" srcSet={pic}></source>
            <img loading="lazy" decoding="async" src={pic} alt="Sathya Sai SSE Education" height="568" ></img>
        </picture>
    </div>
    );
};

export default Banner;
                                