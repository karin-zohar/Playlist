import React, { useState } from "react"
import { SearchBar } from "../cmps/search-bar"
import { VideosList } from "../cmps/videos-list"
import { VideoDisplay } from "../cmps/video-display"
import { videoService } from "../services/video.service"
import { httpService } from "../services/http.service"

export function PlaylistIndex(props) {
  const [searchTerm, setSearchTerm] = useState("")
  const [videos, setVideos] = useState([])
  const [currVideo, setCurrVideo] = useState('')

  console.log('videos - from index: ', videos)

  function searchVideo(e) {
    e.preventDefault()
    loadVideos()
  }

  async function loadVideos() {
    const requestUrl = videoService.getRequestUrl(searchTerm)
    const videos = await videoService.queryVideos(requestUrl) // returns array of video objects
    setVideos(videos)
  }

  return (
    <div className="playlist-index">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchVideo={searchVideo} />
      <VideosList
        videos={videos}
        setCurrVideo={setCurrVideo} />
      <VideoDisplay currVideo={currVideo.videoId} />
    </div>
  )
}
