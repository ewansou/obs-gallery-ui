"use client";

import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      <p className="mt-4 text-sm text-gray-700">Loading, please wait...</p>
    </div>
  );
};

export default Loading;