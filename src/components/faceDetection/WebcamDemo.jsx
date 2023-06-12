import React, { useEffect, useRef } from "react";
import "./web.scss"

function VideoFeed() {
  return (
    <div className="camera__container">
      <img
        src="http://localhost:8000/video_feed"
        width="100%"
        className="img-thumbnail"
      />
    </div>
  );
}

export default VideoFeed;
