import React from "react";

export function VideoDisplay({ currVideo }) {
  const videoId = currVideo ? currVideo.videoId : "W6NZfCO5SIk";
  const videoTitle = currVideo ? currVideo.title : "Introduction to JavaScript";
  return (
    <div className="video-display">
      <iframe
        title="video"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h2>Currently Playing: {videoTitle}</h2>
    </div>
  );
}
