import React from 'react';

/**
 * Hand-drawn punk zine graphics & doodles directly inspired by the user's reference images:
 * - Image 3 Canva brush elements: diamond, square spiral, spiky star, snail spiral, crosshatch,
 *   sun with wiggly rays, organic star, starburst, wavy arch.
 * - Image 4: Psychedelic wavy contour snake ribbon.
 * - Image 2: Kill Rock Stars cut-out stars & tilted sticker typography.
 */

interface GraphicProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

// 1. Hand-drawn diamond outline (Image 3 - Top Left)
export const DoodleDiamond: React.FC<GraphicProps> = ({ className = 'w-10 h-10', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <path
      d="M50 8C52 10 74 38 88 50C92 53 70 78 50 92C32 76 10 54 12 50C14 44 38 18 50 8Z"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 2. Concentric squared labyrinth / spiral doodle (Image 3 - Top Center)
export const DoodleSquareSpiral: React.FC<GraphicProps> = ({ className = 'w-10 h-10', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <path
      d="M15 15H85V85H25V28H73V73H37V40H61V61H49"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. Thick brush spiky star / asterisk (Image 3 - Top Right)
export const DoodleSpikyStar: React.FC<GraphicProps> = ({ className = 'w-10 h-10', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <path
      d="M50 6L48 94M6 50L94 48M16 16L84 84M84 16L16 84M34 10L66 90M10 34L90 66"
      stroke={color}
      strokeWidth="7"
      strokeLinecap="round"
    />
  </svg>
);

// 4. Hand-drawn snail spiral doodle (Image 3 - Row 2 Left & Right)
export const DoodleSnailSpiral: React.FC<GraphicProps> = ({ className = 'w-10 h-10', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <path
      d="M50 50C53 45 44 43 42 47C38 54 47 62 53 61C63 60 67 48 63 39C57 26 39 25 29 34C16 46 19 69 31 80C46 93 72 90 84 74C97 56 91 28 73 14C51 -2 21 7 7 30C-9 56 1 90 27 106"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 5. Cross-hatch scribble / grid mesh doodle (Image 3 - Row 2 Center)
export const DoodleCrossHatch: React.FC<GraphicProps> = ({ className = 'w-10 h-10', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    {/* Horizontals */}
    <path d="M10 25H90M6 45H94M12 65H88M8 82H92" stroke={color} strokeWidth="6" strokeLinecap="round" />
    {/* Verticals */}
    <path d="M25 8V92M45 6V94M65 10V90M82 8V92" stroke={color} strokeWidth="6" strokeLinecap="round" />
  </svg>
);

// 6. Hand-drawn sun with radiating wiggly rays (Image 3 - Row 3 Left)
export const DoodleSun: React.FC<GraphicProps> = ({ className = 'w-12 h-12', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <circle cx="60" cy="60" r="18" stroke={color} strokeWidth="6" />
    {/* Wiggly radiating rays */}
    <path d="M60 14C58 24 62 26 60 32" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M60 88C58 94 62 96 60 106" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M14 60C24 58 26 62 32 60" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M88 60C94 58 96 62 106 60" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M27 27C35 33 37 36 41 41" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M79 79C85 85 87 88 93 93" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M93 27C87 35 85 37 79 41" stroke={color} strokeWidth="5" strokeLinecap="round" />
    <path d="M41 79C37 85 35 87 27 93" stroke={color} strokeWidth="5" strokeLinecap="round" />
  </svg>
);

// 7. Hand-drawn organic 5-point star doodle (Image 3 - Row 3 Center & Row 4 Center)
export const DoodleOrganicStar: React.FC<GraphicProps> = ({ className = 'w-10 h-10', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <path
      d="M50 10C53 28 58 35 72 38C88 41 94 54 80 62C68 68 66 75 70 90C62 94 48 84 42 78C32 86 20 92 14 84C18 72 16 64 6 56C0 46 16 42 26 38C38 34 44 24 50 10Z"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 8. Multi-pointed spiky burst star (Image 3 - Row 3 Right)
export const DoodleStarburst: React.FC<GraphicProps> = ({ className = 'w-10 h-10', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <path
      d="M50 6L54 34L76 14L66 40L94 36L72 54L96 70L68 66L80 92L54 74L50 96L44 74L20 92L32 66L4 70L28 54L6 36L34 40L24 14L46 34Z"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 9. Hand-drawn wavy arch / horseshoe doodle (Image 3 - Row 4 Right)
export const DoodleHorseshoe: React.FC<GraphicProps> = ({ className = 'w-10 h-10', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <path
      d="M25 90V45C25 25 75 25 75 45V90"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
    />
  </svg>
);

// 10. The Wavy Psychedelic Contour Snake Ribbon (Image 4)
export const WavyRibbonSnake: React.FC<GraphicProps> = ({ className = 'w-48 h-96', color = 'currentColor', ...props }) => (
  <svg
    viewBox="0 0 300 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Thick black and white contour ribbons waving down */}
    <path
      d="M50 20C150 40 260 80 240 170C220 270 40 280 60 400C80 500 260 520 230 580"
      stroke={color}
      strokeWidth="28"
      strokeLinecap="round"
    />
    <path
      d="M90 20C190 40 300 80 280 170C260 270 80 280 100 400C120 500 300 520 270 580"
      stroke="#FFFFFF"
      strokeWidth="14"
      strokeLinecap="round"
    />
    <path
      d="M10 20C110 40 220 80 200 170C180 270 0 280 20 400C40 500 220 520 190 580"
      stroke={color}
      strokeWidth="14"
      strokeLinecap="round"
    />
  </svg>
);

// 11. Kill Rock Stars Scissor-Cut Stark Black Star (Image 2)
export const PunkStarCutout: React.FC<{ className?: string; color?: string; fill?: boolean }> = ({
  className = 'w-10 h-10',
  color = '#111111',
  fill = true,
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <polygon
      points="50,4 64,36 98,39 72,62 80,96 50,78 20,96 28,62 2,39 36,36"
      fill={fill ? color : 'none'}
      stroke={color}
      strokeWidth={fill ? '0' : '6'}
    />
  </svg>
);

// Masking tape strip to tape images/cards down like an authentic zine
export const MaskingTape: React.FC<{ className?: string; angle?: string }> = ({
  className = 'w-24 h-6',
  angle = '-rotate-6',
}) => (
  <div
    className={`absolute z-20 pointer-events-none opacity-85 ${className} ${angle}`}
    aria-hidden="true"
  >
    <div
      className="w-full h-full bg-[#E5DEC9] border-t border-b border-[#D8CEB4] shadow-xs"
      style={{
        clipPath: 'polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)',
      }}
    />
  </div>
);

// Editorial Barcode
export const BarcodeStrip: React.FC<GraphicProps> = ({ className = 'w-28 h-8', color = 'currentColor', ...props }) => (
  <svg viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true" {...props}>
    <rect x="0" y="0" width="4" height="40" fill={color} />
    <rect x="7" y="0" width="2" height="40" fill={color} />
    <rect x="13" y="0" width="7" height="40" fill={color} />
    <rect x="24" y="0" width="3" height="40" fill={color} />
    <rect x="31" y="0" width="9" height="40" fill={color} />
    <rect x="44" y="0" width="2" height="40" fill={color} />
    <rect x="50" y="0" width="6" height="40" fill={color} />
    <rect x="60" y="0" width="3" height="40" fill={color} />
    <rect x="67" y="0" width="8" height="40" fill={color} />
    <rect x="79" y="0" width="2" height="40" fill={color} />
    <rect x="85" y="0" width="5" height="40" fill={color} />
    <rect x="94" y="0" width="8" height="40" fill={color} />
    <rect x="106" y="0" width="2" height="40" fill={color} />
    <rect x="112" y="0" width="6" height="40" fill={color} />
    <rect x="122" y="0" width="3" height="40" fill={color} />
    <rect x="129" y="0" width="6" height="40" fill={color} />
  </svg>
);
