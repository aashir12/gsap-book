import React, { forwardRef } from "react";

interface SubtitleProps {
  text: string;
  fontSize: number;
  alignment: string;
  position: string;
}

const Subtitle = forwardRef<HTMLParagraphElement, SubtitleProps>(
  ({ text, fontSize, alignment, position }, ref) => {
    // Helper function to get text alignment
    const getTextAlign = (alignment: string) => {
      switch (alignment) {
        case "left":
          return "text-left";
        case "right":
          return "text-right";
        case "center":
        default:
          return "text-center";
      }
    };

    // Helper function to get positioning
    const getPositioning = (position: string) => {
      switch (position) {
        case "left":
          return "justify-start";
        case "right":
          return "justify-end";
        case "center":
        default:
          return "justify-center";
      }
    };

    // Helper function to format text with line breaks
    const formatText = (text: string) => {
      return text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
      ));
    };

    return (
      <div className={`absolute top-0 w-full pointer-events-none z-10`}>
        <div className="bg-gradient-to-b from-black/70 to-transparent w-full pt-4">
          <div className={`flex ${getPositioning(position)} w-full`}>
            <div
              className={`${
                position === "left" || position === "right"
                  ? "w-[60%]"
                  : "w-[90%] mx-auto"
              }`}
            >
              <p
                ref={ref}
                className={`text-white archer-book-pro font-semibold leading-snug ${getTextAlign(
                  alignment
                )}`}
                style={{ fontSize: `${fontSize}px` }}
              >
                {formatText(text)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Subtitle.displayName = "Subtitle";

export default Subtitle;
