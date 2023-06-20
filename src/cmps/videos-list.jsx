import React from "react"
import { VideoPreview } from "./video-preview"
import { demoVideos } from "../constants/consts"

export function VideosList({videos, setCurrVideo}) {

  const videosToDisplay = (videos.length > 0) ? videos : demoVideos

  return (
    <ul className="videos-list">
      {videosToDisplay.map((video) => (
        <li key={video.id}
          onClick={() => setCurrVideo(video)}>
          <VideoPreview video={video} />
        </li>
      ))}
    </ul>
  )
}
