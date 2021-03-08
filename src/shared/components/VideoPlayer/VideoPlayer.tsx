import React from 'react';
import styled from 'styled-components';

const Video = styled.video.attrs(() => ({
  muted: false,
  autoPlay: false,
  loop: false,
  playsInline: true,
}))`
  width: 100%;
  height: 100%;
  outline: 0;
`;

const VideoPlayer = ({ url }: { url: string }) => <Video controls src={url} />;

export default VideoPlayer;
