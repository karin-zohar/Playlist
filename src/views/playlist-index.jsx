import React from "react";
import { SearchBar } from "../cmps/search-bar";
import { VideosList } from "../cmps/videos-list";
import { VideoDisplay } from "../cmps/video-display";

export function PlaylistIndex(props) {
  return (
    <div className="playlist-index">
      <SearchBar />
      <VideosList />
      <VideoDisplay />
    </div>
  );
}
