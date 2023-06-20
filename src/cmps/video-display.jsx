import React from "react";

export function VideoDisplay(props) {
  return (
    <div className="video-display">
      <iframe
        title="video"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/HYsz1hP0BFo"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
