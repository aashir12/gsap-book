"use client";

import React, { forwardRef, memo } from "react";

interface BackgroundVideoProps {
  src: string;
  className?: string;
  // Allow additional props if ever needed
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

// Forward ref so parent can control playback; memoize so it only re-renders when src changes.
const BackgroundVideo = memo(
  forwardRef<HTMLVideoElement, BackgroundVideoProps>(
    ({ src, className = "", ...rest }, ref) => {
      return (
        <video
          ref={ref}
          // Using src directly instead of <source> prevents reload on re-renders where src is unchanged.
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className={className}
          {...rest}
        />
      );
    }
  )
);

BackgroundVideo.displayName = "BackgroundVideo";

export default BackgroundVideo;
