
import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import FloatingBubble from '../components/FloatingBubble';
import { useNavigate } from 'react-router-dom';

// FIU Brand Color Tokens
const FIU = {
  blue:       '#081E3F',
  blueShade1: '#0A254E',
  blueShade2: '#0C2B5A',
  gold:       '#B6862C',
  brightGold: '#FFCC00',
  magenta:    '#CC0066',
  cyan:       '#00FFFF',
  white:      '#FFFFFF',
};

// Gradient stops from brand guide (Bright Gold → Magenta, avoiding prominent orange)
const BUBBLE_GRADIENTS = [
  `linear-gradient(135deg, ${FIU.brightGold}, ${FIU.magenta})`,   // gold → magenta
  `linear-gradient(135deg, ${FIU.brightGold}, ${FIU.cyan})`,      // gold → cyan
  `linear-gradient(135deg, ${FIU.magenta}, ${FIU.brightGold})`,   // magenta → gold
  `linear-gradient(135deg, ${FIU.cyan}, ${FIU.magenta})`,         // cyan → magenta (reversed, not c→m start)
  `linear-gradient(135deg, ${FIU.brightGold}, #FF3399)`,          // gold → hot pink variant
  `linear-gradient(135deg, #FFDD44, ${FIU.magenta})`,             // warm gold → magenta
  `linear-gradient(135deg, ${FIU.cyan}, ${FIU.brightGold})`,      // cyan → gold
  `linear-gradient(135deg, ${FIU.magenta}, ${FIU.cyan})`,         // magenta → cyan
  `linear-gradient(135deg, ${FIU.brightGold}, ${FIU.magenta})`,   // repeat for extras
];

const Index = () => {
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState([]);
  const [resetTrigger, setResetTrigger] = useState(0);

  const projects = [
    { id: 1,  name: 'Resume Analyzer', icon: '🤖', path: '/resume-analyzer',  gradient: BUBBLE_GRADIENTS[0] },
    { id: 2,  name: 'BuildLLM',        icon: '🤖', path: '/buildLLM',         gradient: BUBBLE_GRADIENTS[1] },
    { id: 7,  name: 'Hackathons',      icon: '🏅', path: '/hackathons',       gradient: BUBBLE_GRADIENTS[2] },
    { id: 8,  name: 'Signifi',         img: 'images/signifi-logo.png', path: '/signifi', gradient: BUBBLE_GRADIENTS[3] },
    { id: 9,  name: 'Cattrax',         icon: '🚂', path: '/cattrax',          gradient: BUBBLE_GRADIENTS[4] },
    { id: 10, name: 'Work Exp',        icon: '💼', path: '/work-experience',  gradient: BUBBLE_GRADIENTS[5] },
    { id: 11, name: 'Pluto',           icon: '🌑', path: '/pluto',            gradient: BUBBLE_GRADIENTS[6] },
    { id: 12, name: 'Neuroplay',       icon: '🧠', path: '/neuroplay',        gradient: BUBBLE_GRADIENTS[7] },
    { id: 13, name: 'Morganizer',      img: 'images/morganizer.png', path: '/morganizer', gradient: BUBBLE_GRADIENTS[8] },
  ];

  useEffect(() => {
    const generateBubblePositions = () => {
      const newBubbles = projects.map(project => ({
        ...project,
        // Pass gradient as color so FloatingBubble can use it
        color: project.gradient,
        x: 10 + Math.random() * 80,
        y: 15 + Math.random() * 70,
      }));
      setBubbles(newBubbles);
      setResetTrigger(Date.now());
    };

    generateBubblePositions();
  }, []);

  const handleBubbleClick = (path) => navigate(path);

  return (
    <div
      className="min-h-screen overflow-hidden relative"
      style={{
        background: `
          radial-gradient(ellipse at 20% 30%, ${FIU.blueShade2} 0%, transparent 55%),
          radial-gradient(ellipse at 80% 70%, #0D1F3C 0%, transparent 55%),
          ${FIU.blue}
        `,
      }}
    >
      {/* ── Subtle geometric texture overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(182,134,44,0.04) 60px,
              rgba(182,134,44,0.04) 61px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(182,134,44,0.04) 60px,
              rgba(182,134,44,0.04) 61px
            )
          `,
        }}
      />

      {/* ── Gold accent glow blobs ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            width: 320, height: 320,
            top: '-80px', left: '-80px',
            background: `radial-gradient(circle, ${FIU.brightGold}22 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 260, height: 260,
            bottom: '-60px', right: '-60px',
            background: `radial-gradient(circle, ${FIU.magenta}1A 0%, transparent 70%)`,
            animation: 'pulse 4s ease-in-out infinite 1s',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 180, height: 180,
            top: '40%', right: '5%',
            background: `radial-gradient(circle, ${FIU.cyan}15 0%, transparent 70%)`,
            animation: 'pulse 5s ease-in-out infinite 2s',
          }}
        />
      </div>

      {/* ── Main title ── */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 text-center whitespace-nowrap">
        <h1
          className="text-5xl md:text-7xl pb-2 font-extrabold"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            letterSpacing: '-0.02em',
            background: `linear-gradient(90deg, ${FIU.brightGold} 0%, #FFE066 40%, ${FIU.magenta} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 24px rgba(255,204,0,0.18))',
          }}
        >
          FIU Tech Internships
        </h1>

        {/* Gold underline bar */}
        <div
          style={{
            height: 3,
            borderRadius: 2,
            background: `linear-gradient(90deg, transparent, ${FIU.brightGold}, ${FIU.magenta}, transparent)`,
            margin: '6px auto 0',
            width: '70%',
          }}
        />

        <p
          className="mt-3 text-lg md:text-xl font-semibold tracking-widest uppercase"
          style={{ color: FIU.brightGold, opacity: 0.85, letterSpacing: '0.22em' }}
        >
          Sprinternship™ — Our Partnership With Break Through Tech
        </p>
      </div>

      {/* ── Central avatar ── */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => navigate('/about')}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer bg-transparent border-none"
          style={{
            filter: `drop-shadow(0 0 18px ${FIU.brightGold}55)`,
          }}
        >
          <Logo />
        </button>
      </div>

      {/* ── Floating project bubbles ── */}
      {bubbles.map((bubble) => (
        <FloatingBubble
          key={`${bubble.id}-${bubble.x}-${bubble.y}`}
          project={bubble}
          onClick={() => handleBubbleClick(bubble.path)}
        />
      ))}

      {/* ── Floating particles (gold + magenta tones) ── */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const colors = [FIU.brightGold, FIU.magenta, FIU.cyan, FIU.white];
          return (
            <div
              key={i}
              className="absolute rounded-full animate-ping"
              style={{
                width: 4, height: 4,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: colors[i % colors.length],
                opacity: 0.25,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          );
        })}
      </div>

      {/* ── Bottom FIU wordmark bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center py-2 pointer-events-none"
        style={{
          borderTop: `1px solid ${FIU.gold}33`,
          background: `linear-gradient(0deg, ${FIU.blue}CC, transparent)`,
        }}
      >
        <span
          style={{
            fontFamily: "'Georgia', serif",
            color: FIU.gold,
            fontSize: '0.9rem',
            letterSpacing: '0.3em',
            opacity: 0.6,
            textTransform: 'uppercase',
          }}
        >
          Florida International University
        </span>
      </div>
    </div>
  );
};

export default Index;
