"use client";

import {
  DURATION_IN_FRAMES,
  MyComposition,
  VIDEO_FPS,
  VIDEO_HEIGHT,
  VIDEO_WIDTH,
} from "@/my-remotion";
import { CompositionProps } from "@/types/constants";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";
import { Player } from "@remotion/player";
import { useMemo, useState } from "react";
import { z } from "zod";

export default function ExplorePage() {
  const [text, _] = useState<string>("hello world!");

  const inputProps: z.infer<typeof CompositionProps> = useMemo(() => {
    return {
      title: text,
    };
  }, [text]);

  return (
    <div className="flex h-[calc(100vh-132px)]">
      {/* Left Panel - Code Editor */}
      <div className="w-1/2 border-r border-gray-200">
        <SandpackProvider
          template="react-ts"
          style={{ height: "100%" }}
          theme={atomDark}
          options={{
            classes: {
              "sp-wrapper": "h-full",
              "sp-layout": "h-full",
              "sp-stack": "h-full",
            },
          }}
          files={{
            "/App.js": `import React from 'react';
            
            export default function App() {
              return (
                <div style={{ padding: 20 }}>
                  <h1>Welcome to the Sandbox!</h1>
                  <p>Start editing to see your changes reflected instantly.</p>
                </div>
              );
            }`,
          }}
        >
          <SandpackLayout style={{ height: "100%" }}>
            <SandpackFileExplorer style={{ height: "100%" }} />
            <SandpackCodeEditor
              showInlineErrors
              showLineNumbers
              closableTabs
              showTabs
              style={{ height: "100%" }}
            />
          </SandpackLayout>
        </SandpackProvider>
      </div>

      {/* Right Panel - Video Preview */}
      <div className="w-1/2 h-full flex flex-col">
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
