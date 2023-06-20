import React from "react";

export function VideoPreview({ video }) {

  console.log('video: ', video)
  return (
    <article className="video-preview">
      <img src={video.img} alt={video.title} />
      <div className="video-description">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
        {/* <p>Views: {video.views}</p> */}
      </div>
    </article>
  );
}
