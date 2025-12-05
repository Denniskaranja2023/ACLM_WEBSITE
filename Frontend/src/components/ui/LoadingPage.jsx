import React from 'react';

export function LoadingPage() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#2E652A] via-[#234d21] to-[#2E652A] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative mb-8 flex justify-center">
          <div className="w-16 h-16 border-4 border-[#F6EFE2] border-t-[#2E652A] rounded-full animate-spin"></div>
          <div className="absolute w-16 h-16 border-4 border-transparent border-r-[#BEA336] rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>
      </div>
    </div>
  );
}