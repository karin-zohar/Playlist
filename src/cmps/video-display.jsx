import React from "react";

export function VideoDisplay(props) {
  const currVideoToDisplay = (props.currVideo) ? props.currVideo : 'W6NZfCO5SIk'
  return (
    <div className="video-display">
      <iframe
        title="video"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${currVideoToDisplay}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
