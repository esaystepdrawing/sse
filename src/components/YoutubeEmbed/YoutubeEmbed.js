import React from "react";
import PropTypes from "prop-types";
import "./YoutubeEmbed.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
  <iframe 
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/a3OAqdhjWEA?si=5xDsnCKwYEksCOIn" 
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen>
    </iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;