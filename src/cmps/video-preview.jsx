import React from "react";

export function VideoPreview({ video }) {
  return (
    <article className="video-preview">
      <img src={video.img} alt={video.title} />
      <div className="video-description">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        <p>{video.views}</p>
      </div>
    </article>
  );
}
