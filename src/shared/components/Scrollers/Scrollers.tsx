import React, { HTMLAttributes } from 'react';

export const thumbVertical = ({ style, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const finalStyle = {
    ...style,
    cursor: 'pointer',
    backgroundColor: '#0C2D80',
    borderRadius: '10px',
  };
  return <div style={finalStyle} {...props} />;
};

export const trackVertical = ({ style, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const trackStyle = {
    ...style,
    backgroundColor: '#C4C4C4',
    width: '6px',
    right: '0',
    borderRadius: '10px',
    bottom: '2px',
    top: '2px',
  };
  return <div style={trackStyle} {...props} />;
};
