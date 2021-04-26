import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const StyledReactPlayer = styled(ReactPlayer)`
  padding-bottom: 56.25%;
  position: relative;
  & > div {
    position: absolute;
  }
`;

const VideoPlayer = ({ url }: { url: string }) => (
  <StyledReactPlayer
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
