import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }: { url: string }) => (
  <ReactPlayer
    url={url}
    width="100%"
    height="100%"
    config={{
      youtube: {
        playerVars: { controls: 1, showinfo: 1, loop: 1, modestbranding: 1, host: 'https://www.youtube.com' },
      },
    }}
  />
);

export default VideoPlayer;
