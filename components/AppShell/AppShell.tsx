"use client";

import { ReactNode, useEffect, useState } from "react";

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1e1e1e]">
      {/* Header */}
      <header className="h-16 border-b border-gray-100 bg-[#1e1e1e]">
        <div className="container mx-auto h-full px-4 flex justify-between items-center">
          <a
            href="/"
            className="text-xl font-mono text-white flex items-center"
          >
            rehash
            <span className={visible ? "opacity-100" : "opacity-0"}>_</span>
            {/* <span className="w-2.5 h-5 bg-white ml-1 animate-cursor-blink"></span> */}
          </a>
          <nav>
            <ul className="flex gap-8">
              <li className="group">
                <a href="/" className="font-mono text-white relative">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li className="group">
                <a href="/sandbox" className="font-mono text-white relative">
                  Sandbox
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              </li>
              <li className="group">
                <a href="/explore" className="font-mono text-white relative">
                  Videos
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow h-[calc(100vh-8rem)]">{children}</main>

      {/* Footer */}
      <footer className="h-16 border-t border-gray-100 bg-[#1e1e1e]">
        <div className="container mx-auto h-full flex items-center justify-center text-white/60">
          © {new Date().getFullYear()} @alperreha. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AppShell;
