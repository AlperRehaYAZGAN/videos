import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { atomDark } from "@codesandbox/sandpack-themes";

export default function SandboxPage() {
  return (
    <div className="h-[calc(100vh-132px)]">
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
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showNavigator
            showOpenNewtab
            showRefreshButton
            style={{ height: "100%" }}
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
