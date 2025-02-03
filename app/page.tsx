"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-132px)] flex items-center justify-center bg-[#1E1E1E]">
      <div className="w-full max-w-4xl p-8 font-mono text-[#50FA7B]">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="text-[#BD93F9]">➜</span>
            <span className="ml-2 text-[#8BE9FD]">~/video-portfolio</span>
            <span className="ml-2">(main)</span>
          </div>
          <div className="mb-6">
            <span className="text-[#F1FA8C]">$ echo</span>
            <span className="ml-2 text-2xl font-bold text-[#FF79C6]">
              "Welcome to Video Portfolio"
            </span>
            <span className={visible ? "opacity-100" : "opacity-0"}>_</span>
          </div>
          <div className="mb-8">
            <span className="text-[#F1FA8C]">$ cat</span>
            <span className="ml-2">description.txt</span>
            <p className="mt-2 text-lg text-[#F8F8F2] max-w-2xl">
              Explore interactive video compositions and test your code in our
              sandbox environment.
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
            <Link
              href="/sandbox"
              className="px-6 py-2 bg-[#44475A] text-[#50FA7B] rounded border border-[#6272A4] hover:bg-[#6272A4] transition-colors inline-flex items-center"
            >
              <span className="mr-2">$</span> cd sandbox
            </Link>
            <Link
              href="/explore"
              className="px-6 py-2 bg-[#44475A] text-[#50FA7B] rounded border border-[#6272A4] hover:bg-[#6272A4] transition-colors inline-flex items-center"
            >
              <span className="mr-2">$</span> cd explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
