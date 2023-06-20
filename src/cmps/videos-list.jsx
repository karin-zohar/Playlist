import React from "react";
import { VideoPreview } from "./video-preview";

export function VideosList(props) {
  const videos = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language.",
      views: 1500,
      img: "https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg",
    },
    {
      id: 2,
      title: "Advanced CSS Techniques",
      description:
        "Master the art of creating beautiful and responsive web designs with CSS.",
      views: 2500,
      img: "https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg.webp",
    },
    {
      id: 3,
      title: "Node.js Crash Course",
      description:
        "Build scalable and high-performance web applications using Node.js.",
      views: 1800,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png",
    },
  ];
  return (
    <ul className="videos-list">
      {videos.map((video) => (
        <li key={video.id}>
          <VideoPreview video={video} />
        </li>
      ))}
    </ul>
  );
}
