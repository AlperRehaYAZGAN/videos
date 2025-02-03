"use client";

import {
  DURATION_IN_FRAMES,
  MyComposition,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "@/my-remotion";
import { CompositionProps } from "@/types/constants";
import { Player } from "@remotion/player";
import { useMemo, useState } from "react";
import { z } from "zod";

export default function ExplorePage() {
  const [text, setText] = useState<string>("hello world!");

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  return (
    <div className="flex flex-col sm:flex-row h-auto sm:h-[calc(100vh-8rem)]">
      {/* Left Panel - Code Editor */}
      <div className="w-full sm:w-1/2 border-b sm:border-b-0 sm:border-r border-gray-200 sm:h-full mt-12 sm:my-0">
        <div className="flex flex-col items-center justify-center h-full space-y-2">
          <label htmlFor="videoText" className="text-sm font-medium text-white">
            Enter text to display it on video
          </label>
          <label htmlFor="videoText" className="text-xs text-gray-400">
            This text will be displayed in the video
          </label>
          <input
            id="videoText"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-64 px-4 py-2 mb-12 border border-white text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter text for video"
          />
        </div>
      </div>

      {/* Right Panel - Video Preview */}
      <div className="w-full sm:w-1/2 h-[50vh] sm:h-full flex flex-col">
        <div className="flex-grow overflow-hidden">
          <Player
            inputProps={inputProps}
            component={MyComposition}
            durationInFrames={DURATION_IN_FRAMES}
            fps={VIDEO_FPS}
            compositionWidth={VIDEO_WIDTH}
            compositionHeight={VIDEO_HEIGHT}
            style={{
              width: "100%",
              height: "100%",
            }}
            controls
          />
        </div>
      </div>
    </div>
  );
}
