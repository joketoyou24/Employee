import React, { useEffect, useRef } from "react";
import "./web.scss"

function VideoFeed() {
  return (
    <div className="camera__container">
      <img
        src="https://rpl-production.up.railway.app/video_feed"
        width="100%"
        className="img-thumbnail"
      />
    </div>
  );
}

export default VideoFeed;
