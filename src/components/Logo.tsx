
import React from 'react';

const Logo = () => {
  return (
    <div className="relative">
      {/* Outer glowing ring — Bright Gold → Magenta (FIU brand gradient 1) */}
      <div
        className="absolute inset-0 rounded-full opacity-80 animate-spin-slow"
        style={{
          background: 'linear-gradient(135deg, #FFCC00, #CC0066)',
          padding: 3,
          borderRadius: '50%',
        }}
      />

      {/* Inner ring — Bright Gold → Cyan (FIU brand gradient 2) */}
      <div
        className="absolute inset-2 rounded-full opacity-60 animate-spin-reverse"
        style={{
          background: 'linear-gradient(135deg, #FFCC00, #00FFFF)',
          borderRadius: '50%',
        }}
      />

      {/* Main avatar container — FIU Navy */}
      <div
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, #0C2B5A, #081E3F)',
          boxShadow: '0 0 32px rgba(255,204,0,0.25), 0 0 64px rgba(204,0,102,0.15)',
        }}
      >
        {/* Photo */}
        <div className="w-full h-full rounded-full overflow-hidden">
          <img
            src="fiu-logo.png"
            alt="Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Orbiting dots — FIU brand colors */}
        {/* Bright Gold */}
        <div
          className="absolute top-0 left-1/2 w-4 h-4 rounded-full animate-orbit-1"
          style={{ backgroundColor: '#FFCC00', boxShadow: '0 0 8px #FFCC00' }}
        />
        {/* Magenta */}
        <div
          className="absolute top-1/2 right-0 w-3 h-3 rounded-full animate-orbit-2"
          style={{ backgroundColor: '#CC0066', boxShadow: '0 0 8px #CC0066' }}
        />
        {/* Cyan */}
        <div
          className="absolute bottom-0 left-1/2 w-4 h-4 rounded-full animate-orbit-3"
          style={{ backgroundColor: '#00FFFF', boxShadow: '0 0 8px #00FFFF' }}
        />
        {/* Gold (heritage) */}
        <div
          className="absolute top-1/2 left-0 w-3 h-3 rounded-full animate-orbit-4"
          style={{ backgroundColor: '#B6862C', boxShadow: '0 0 8px #B6862C' }}
        />
      </div>
    </div>
  );
};

export default Logo;