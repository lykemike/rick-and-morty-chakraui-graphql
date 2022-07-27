import React from "react";

export const Footer = ({ children }) => {
  return (
    <div>
      <main className="container w-full min-h-screen p-2 mx-auto">{children}</main>
      <div className="p-4 mt-20 bg-gray-500">
        <footer className="flex items-center justify-center space-x-2 tracking-wider">
          {/* <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐝</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐜</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐌</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐙</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🦦</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐓</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐡</span> */}
          <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🦩</span>
          <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🦆</span>
          <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🦅</span>
          <div className="font-mono text-xl font-semibold">MADE BY &copy; MKM</div>
          <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🦈</span>
          <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐟</span>
          <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐦</span>
          {/* <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐤</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🦎</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🦉</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐠</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🦢</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🕊️</span>
      <span className="font-mono text-2xl font-semibold duration-500 hover:scale-125">🐧</span> */}
        </footer>
      </div>
    </div>
  );
};
