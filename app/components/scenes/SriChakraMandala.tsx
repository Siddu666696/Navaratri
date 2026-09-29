// import React from 'react';

// const DurgaYantraMandala = ({ size = 450 }) => {
//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100vh',
//     backgroundColor: '#050201', // Dark backdrop to amplify the divine glow
//     overflow: 'hidden',
//   };

//   const keyframesStyle = `
//     @keyframes spinClockwise {
//       from { transform: rotate(0deg); }
//       to { transform: rotate(360deg); }
//     }
//     @keyframes spinCounterClockwise {
//       from { transform: rotate(360deg); }
//       to { transform: rotate(0deg); }
//     }
//     @keyframes divineGlow {
//       0%, 100% { filter: drop-shadow(0 0 15px rgba(255, 40, 0, 0.85)) drop-shadow(0 0 35px rgba(255, 160, 0, 0.4)); }
//       50% { filter: drop-shadow(0 0 25px rgba(255, 80, 0, 1)) drop-shadow(0 0 50px rgba(255, 200, 0, 0.6)); }
//     }
//   `;

//   // Helper to draw clean lotus petals around a specific radius
//   const renderLotusPetals = (count, radius) => {
//     return Array.from({ length: count }).map((_, i) => {
//       const angle = (i * 360) / count;
//       return (
//         <path
//           key={i}
//           d={`M 200,${200 - radius} C ${200 - radius/4},${200 - radius - radius/4} ${200 + radius/4},${200 - radius - radius/4} 200,${200 - radius}`}
//           transform={`rotate(${angle} 200 200)`}
//           strokeWidth="1.5"
//         />
//       );
//     });
//   };

//   return (
//     <div style={containerStyle}>
//       <style>{keyframesStyle}</style>
      
//       <svg
//         width={size}
//         height={size}
//         viewBox="0 0 400 400"
//         style={{
//           animation: 'divineGlow 4s ease-in-out infinite',
//         }}
//       >
//         <defs>
//           <filter id="divine-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur stdDeviation="2" result="blur" />
//             <feMerge>
//               <feMergeNode in="blur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* Global theme using Crimson Red (#ff1a1a) and Sacred Gold-Orange (#ff9900) */}
//         <g stroke="#ff3a00" strokeWidth="2" fill="none" opacity="0.95" filter="url(#divine-glow-filter)">
          
//           {/* LAYER 1: Outer Bhupura (The Square Spiritual Gateway/Fortress) - Outer Edge Static */}
//           <path 
//             d="M 40,40 L 160,40 L 160,20 L 240,20 L 240,40 L 360,40 L 360,160 L 380,160 L 380,240 L 360,240 L 360,360 L 240,360 L 240,380 L 160,380 L 160,360 L 40,360 L 40,240 L 20,240 L 20,160 L 40,160 Z" 
//             stroke="#ff1a1a" 
//             strokeWidth="3"
//           />

//           {/* LAYER 2: 16-Petal Lotus Ring (Spins Clockwise slowly) */}
//           <g style={{ animation: 'spinClockwise 30s linear infinite', transformOrigin: '200px 200px' }} stroke="#ff7700">
//             <circle cx="200" cy="200" r="150" strokeWidth="1.5" />
//             {renderLotusPetals(16, 150)}
//           </g>

//           {/* LAYER 3: 8-Petal Lotus Ring (Spins Counter-Clockwise) */}
//           <g style={{ animation: 'spinCounterClockwise 20s linear infinite', transformOrigin: '200px 200px' }} stroke="#ff3a00">
//             <circle cx="200" cy="200" r="115" strokeWidth="2" />
//             {renderLotusPetals(8, 115)}
//           </g>

//           {/* LAYER 4: The Intersecting Triangles (Navayoni / Navarna - 9 Interlocking Shaktis) */}
//           {/* Multi-speed rotation group mimicking standard movie spell dynamics */}
//           <g style={{ animation: 'spinClockwise 15s linear infinite', transformOrigin: '200px 200px' }} stroke="#ffaa00">
//             <circle cx="200" cy="200" r="85" strokeWidth="1.5" strokeDasharray="6 4" />
            
//             {/* Primary Overlapping Geometric Core Configurations */}
//             {/* Downward Triangles (Shakti/Durga Aspect) */}
//             <polygon points="200,280 120,140 280,140" strokeWidth="2" />
//             <polygon points="200,265 130,150 270,150" strokeWidth="1.5" transform="rotate(20 200 200)" />
//             <polygon points="200,265 130,150 270,150" transform="rotate(-20 200 200)" />
            
//             {/* Upward Triangles (Shiva / Manifestation Alignment) */}
//             <polygon points="200,120 120,260 280,260" strokeWidth="2" />
//             <polygon points="200,135 130,250 270,250" strokeWidth="1.5" transform="rotate(10 200 200)" />
//             <polygon points="200,135 130,250 270,250" transform="rotate(-10 200 200)" />
//           </g>

//           {/* LAYER 5: Core Navarna Mantra Ring & Central Bindu */}
//           {/* Spins fast in reverse for visual friction against the triangles */}
//           <g style={{ animation: 'spinCounterClockwise 8s linear infinite', transformOrigin: '200px 200px' }} stroke="#ff1a1a">
//             <circle cx="200" cy="200" r="45" strokeWidth="2" />
//             {/* Abstract symbolic representation of the 9 seed syllables (Navarna Mantra) */}
//             <circle cx="200" cy="200" r="38" strokeWidth="4" strokeDasharray="12 8 6 8 18 6 10 10 14 6" />
//           </g>

//           {/* Absolute Center: The Bindu (Source Point of Cosmic Energy) */}
//           <circle cx="200" cy="200" r="8" fill="#ffcc00" stroke="#ff3a00" strokeWidth="2" />
          
//         </g>
//       </svg>
//     </div>
//   );
// };

// export default DurgaYantraMandala;
// 'use client';

// import React from 'react';

// export default function ShodashiMandala({ className = "w-full max-w-[650px] aspect-square", ...props }) {
//   // Configured petal rings
//   const petals16 = Array.from({ length: 16 });
//   const petals8 = Array.from({ length: 8 });

//   return (
//     <div className={`relative flex items-center justify-center ${className}`} {...props}>
//       <svg
//         viewBox="0 0 1000 1000"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full drop-shadow-[0_0_35px_rgba(234,179,8,0.25)]"
//       >
//         <defs>
//           {/* Radiant Gold Gradients */}
//           <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#FFF2A3" />
//             <stop offset="35%" stopColor="#F59E0B" />
//             <stop offset="70%" stopColor="#D97706" />
//             <stop offset="100%" stopColor="#78350F" />
//           </linearGradient>

//           <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
//             <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.9" />
//             <stop offset="40%" stopColor="#D97706" stopOpacity="0.4" />
//             <stop offset="85%" stopColor="#B45309" stopOpacity="0.08" />
//             <stop offset="100%" stopColor="#000000" stopOpacity="0" />
//           </radialGradient>

//           {/* Deep Multi-stage Glow Filter */}
//           <filter id="divineGlow" x="-25%" y="-25%" width="150%" height="150%">
//             <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* Ambient Center Glow */}
//         <circle cx="500" cy="500" r="450" fill="url(#goldGlow)" />

//         {/* Master Geometry Group */}
//         <g stroke="url(#goldLinear)" filter="url(#divineGlow)">
          
//           {/* ================= 1. BHUPURA (3-TIER EARTH GATES) ================= */}
//           {/* Layer 1: Outer Wall with Traditional T-projections */}
//           <path
//             d="
//               M 500,40  L 560,40  L 560,70  L 620,70  L 620,110 L 890,110 L 890,380 
//               L 930,380 L 930,440 L 960,440 L 960,560 L 930,560 L 930,620 L 890,620 
//               L 890,890 L 620,890 L 620,930 L 560,930 L 560,960 L 440,960 L 440,930 
//               L 380,930 L 380,890 L 110,890 L 110,620 L 70,620  L 70,560  L 40,560  
//               L 40,440  L 70,440  L 70,380  L 110,380 L 110,110 L 380,110 L 380,70  
//               L 440,70  L 440,40  Z
//             "
//             strokeWidth="3.5"
//           />

//           {/* Layer 2: Mid-tier Wall */}
//           <path
//             d="
//               M 500,60  L 545,60  L 545,85  L 605,85  L 605,130 L 870,130 L 870,395 
//               L 915,395 L 915,455 L 940,455 L 940,545 L 915,545 L 915,605 L 870,605 
//               L 870,870 L 605,870 L 605,915 L 545,915 L 545,940 L 455,940 L 455,915 
//               L 395,915 L 395,870 L 130,870 L 130,605 L 85,605  L 85,545  L 60,545  
//               L 60,455  L 85,455  L 85,395  L 130,395 L 130,130 L 395,130 L 395,85  
//               L 455,85  L 455,60  Z
//             "
//             strokeWidth="2"
//             opacity="0.9"
//           />

//           {/* Layer 3: Inner Gateway Wall */}
//           <path
//             d="
//               M 500,80  L 530,80  L 530,105 L 590,105 L 590,150 L 850,150 L 850,410 
//               L 895,410 L 895,470 L 920,470 L 920,530 L 895,530 L 895,590 L 850,590 
//               L 850,850 L 590,850 L 590,895 L 530,895 L 530,920 L 470,920 L 470,895 
//               L 410,895 L 410,850 L 150,850 L 150,590 L 105,590 L 105,530 L 80,530  
//               L 80,470  L 105,470 L 105,410 L 150,410 L 150,150 L 410,150 L 410,105 
//               L 470,105 L 470,80  Z
//             "
//             strokeWidth="1.8"
//             opacity="0.8"
//           />

//           {/* ================= 2. CONCENTRIC SACRED CIRCLES ================= */}
//           <circle cx="500" cy="500" r="340" strokeWidth="2.5" />
//           <circle cx="500" cy="500" r="332" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
//           <circle cx="500" cy="500" r="325" strokeWidth="1.5" />
//           <circle cx="500" cy="500" r="235" strokeWidth="1.8" />
//           <circle cx="500" cy="500" r="160" strokeWidth="1.5" />
//           <circle cx="500" cy="500" r="100" strokeWidth="1.2" />

//           {/* ================= 3. SHODASHA DALA (16-PETAL LOTUS) ============= */}
//           <g strokeWidth="1.6" fill="rgba(245, 158, 11, 0.03)">
//             {petals16.map((_, i) => (
//               <g key={`petal-16-${i}`} transform={`rotate(${i * 22.5} 500 500)`}>
//                 {/* Petal contour matching Shodashi iconography */}
//                 <path d="M 436,265 C 452,220 472,175 500,165 C 528,175 548,220 564,265 Z" />
//                 {/* Subtle inner spine */}
//                 <line x1="500" y1="168" x2="500" y2="250" strokeWidth="0.8" opacity="0.5" />
//               </g>
//             ))}
//           </g>

//           {/* ================= 4. ASHTA DALA (8-PETAL INNER LOTUS) =========== */}
//           <g strokeWidth="1.6" fill="rgba(251, 191, 36, 0.05)">
//             {petals8.map((_, i) => (
//               <g key={`petal-8-${i}`} transform={`rotate(${i * 45 + 22.5} 500 500)`}>
//                 <path d="M 440,362 C 456,310 476,270 500,265 C 524,270 544,310 560,362 Z" />
//                 <circle cx="500" cy="300" r="3" fill="url(#goldLinear)" stroke="none" opacity="0.7" />
//               </g>
//             ))}
//           </g>

//           {/* ================= 5. CENTRAL TRIANGLE & BINDU ================== */}
//           {/* Primary Inscribed Shodashi Triangle */}
//           <polygon
//             points="500,400 587,550 413,550"
//             strokeWidth="2.5"
//             fill="rgba(217, 119, 6, 0.12)"
//           />

//           {/* Inverted Sub-Triangle / Yoni Yantra Core */}
//           <polygon
//             points="500,535 552,445 448,445"
//             strokeWidth="1.2"
//             opacity="0.85"
//           />

//           {/* Central Bindu (Supreme Consciousness) */}
//           <circle cx="500" cy="475" r="7" fill="url(#goldLinear)" />
//           <circle cx="500" cy="475" r="14" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.7" />
//         </g>
//       </svg>
//     </div>
//   );
// }
'use client';

import React from 'react';

export default function SriChakraMandala({ 
  className = "w-full max-w-[720px] aspect-square", 
  ...props 
}) {
  const petals8 = Array.from({ length: 8 });
  const petals16 = Array.from({ length: 16 });

  return (
    <div className={`relative flex items-center justify-center ${className}`} {...props}>
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]"
      >
        <defs>
          {/* Luminous Gold Shading */}
          <linearGradient id="goldBeam" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF7CC" />
            <stop offset="25%" stopColor="#F59E0B" />
            <stop offset="60%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Deep Ambience Center Radial */}
          <radialGradient id="divineAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.8" />
            <stop offset="35%" stopColor="#D97706" stopOpacity="0.3" />
            <stop offset="75%" stopColor="#92400E" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Golden Glow Filter */}
          <filter id="goldenBloom" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Canonical Shilpa Shastra Padma Peetam Outer Petal */}
          <g id="shilpa-petal-outer">
            {/* Outer Petal Silhouette with classic flared cheeks and crested apex */}
            <path
              d="M -36,0 
                 C -38,-45 -62,-80 -48,-115 
                 C -38,-138 -18,-156 0,-172 
                 C 18,-156 38,-138 48,-115 
                 C 62,-80 38,-45 36,0 
                 Z"
              fill="rgba(245, 158, 11, 0.04)"
              stroke="url(#goldBeam)"
              strokeWidth="1.6"
            />
            {/* Inner Carved Rim (Dala-Rekha) of traditional stone Padma Peetam */}
            <path
              d="M -22,-10 
                 C -24,-45 -40,-72 -30,-98 
                 C -22,-116 -10,-130 0,-142 
                 C 10,-130 22,-116 30,-98 
                 C 40,-72 24,-45 22,-10"
              stroke="url(#goldBeam)"
              strokeWidth="0.9"
              strokeDasharray="4 2"
              opacity="0.8"
            />
            {/* Center spine ridge */}
            <line x1="0" y1="-25" x2="0" y2="-152" stroke="url(#goldBeam)" strokeWidth="1.1" opacity="0.65" />
          </g>

          {/* Canonical Shilpa Shastra Padma Peetam Inner Petal */}
          <g id="shilpa-petal-inner">
            <path
              d="M -48,0 
                 C -52,-35 -75,-62 -55,-88 
                 C -40,-106 -18,-120 0,-134 
                 C 18,-120 40,-106 55,-88 
                 C 75,-62 52,-35 48,0 
                 Z"
              fill="rgba(251, 191, 36, 0.06)"
              stroke="url(#goldBeam)"
              strokeWidth="1.8"
            />
            <path
              d="M -30,-10 
                 C -34,-35 -48,-55 -35,-74 
                 C -24,-88 -10,-98 0,-108 
                 C 10,-98 24,-88 35,-74 
                 C 48,-55 34,-35 30,-10"
              stroke="url(#goldBeam)"
              strokeWidth="1"
              opacity="0.8"
            />
            <line x1="0" y1="-15" x2="0" y2="-120" stroke="url(#goldBeam)" strokeWidth="1" opacity="0.7" />
          </g>
        </defs>

        {/* Backdrop Glow */}
        <circle cx="500" cy="500" r="430" fill="url(#divineAura)" />

        <g stroke="url(#goldBeam)" filter="url(#goldenBloom)">
          
          {/* ==============================================================
              1. DHARANEE SADANA TRAYAM (Bhūpura - 3 Outer Gateway Walls)
              ============================================================== */}
          {/* Tier 1: Outermost Wall */}
          <path
            d="M 500,45  L 555,45  L 555,75  L 615,75  L 615,115 L 885,115 L 885,385 
               L 925,385 L 925,445 L 955,445 L 955,555 L 925,555 L 925,615 L 885,615 
               L 885,885 L 615,885 L 615,925 L 555,925 L 555,955 L 445,955 L 445,925 
               L 385,925 L 385,885 L 115,885 L 115,615 L 75,615  L 75,555  L 45,555  
               L 45,445  L 75,445  L 75,385  L 115,385 L 115,115 L 385,115 L 385,75  
               L 445,75  L 445,45  Z"
            strokeWidth="3.2"
          />

          {/* Tier 2: Intermediate Wall */}
          <path
            d="M 500,65  L 540,65  L 540,92  L 600,92  L 600,135 L 865,135 L 865,400 
               L 908,400 L 908,460 L 935,460 L 935,540 L 908,540 L 908,600 L 865,600 
               L 865,865 L 600,865 L 600,908 L 540,908 L 540,935 L 460,935 L 460,908 
               L 400,908 L 400,865 L 135,865 L 135,600 L 92,600   L 92,540   L 65,540   
               L 65,460  L 92,460   L 92,400   L 135,400 L 135,135 L 400,135 L 400,92  
               L 460,92  L 460,65  Z"
            strokeWidth="2.2"
            opacity="0.9"
          />

          {/* Tier 3: Innermost Wall */}
          <path
            d="M 500,85  L 525,85  L 525,110 L 585,110 L 585,155 L 845,155 L 845,415 
               L 890,415 L 890,475 L 915,475 L 915,525 L 890,525 L 890,585 L 845,585 
               L 845,845 L 585,845 L 585,890 L 525,890 L 525,915 L 475,915 L 475,890 
               L 415,890 L 415,845 L 155,845 L 155,585 L 110,585 L 110,525 L 85,525  
               L 85,475  L 110,475 L 110,415 L 155,415 L 155,155 L 415,155 L 415,110 
               L 475,110 L 475,85  Z"
            strokeWidth="1.8"
            opacity="0.8"
          />

          {/* ==============================================================
              2. VRITTATRAYA (The 3 Concentric Girdling Circles)
              ============================================================== */}
          <circle cx="500" cy="500" r="348" strokeWidth="2.4" />
          <circle cx="500" cy="500" r="338" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="500" cy="500" r="330" strokeWidth="2.0" />

          {/* ==============================================================
              3. SHODASAPATRA (16 Lotus Petals - Outer Peetam)
              ============================================================== */}
          {petals16.map((_, i) => (
            <g
              key={`shodasa-${i}`}
              transform={`translate(500, 500) rotate(${i * 22.5}) translate(0, -158)`}
            >
              <use href="#shilpa-petal-outer" />
            </g>
          ))}

          {/* Separation Circle between Outer and Inner Lotus */}
          <circle cx="500" cy="500" r="236" strokeWidth="1.8" />
          <circle cx="500" cy="500" r="230" strokeWidth="1.0" strokeDasharray="2 2" opacity="0.5" />

          {/* ==============================================================
              4. NAGADALA / ASHTA DALA (8 Lotus Petals - Inner Peetam)
              ============================================================== */}
          {petals8.map((_, i) => (
            <g
              key={`nagadala-${i}`}
              transform={`translate(500, 500) rotate(${i * 45 + 22.5}) translate(0, -96)`}
            >
              <use href="#shilpa-petal-inner" />
            </g>
          ))}

          {/* Inner Base Circle framing the Central 43 Triangles */}
          <circle cx="500" cy="500" r="148" strokeWidth="2.0" />

          {/* ==============================================================
              5. CENTRAL 9 INTERLOCKING YANTRA TRIANGLES (43 Triangles Total)
              - Formed by 4 Upward Triangles (Shiva) & 5 Downward (Shakti)
              - Yields: Chaturdasara (14), Dasarayugma (10+10), Vasukona (8)
              ============================================================== */}
          <g strokeWidth="1.8" fill="rgba(217, 119, 6, 0.04)">
            {/* 5 Downward-pointing Triangles (Shakti) */}
            <polygon points="500,642 368,390 632,390" />
            <polygon points="500,622 388,416 612,416" />
            <polygon points="500,600 410,442 590,442" />
            <polygon points="500,580 430,466 570,466" />
            <polygon points="500,560 448,488 552,488" />

            {/* 4 Upward-pointing Triangles (Shiva) */}
            <polygon points="500,364 372,606 628,606" />
            <polygon points="500,386 394,582 606,582" />
            <polygon points="500,410 418,558 582,558" />
            <polygon points="500,432 440,534 560,534" />
          </g>

          {/* ==============================================================
              6. TRIKONA (Innermost Central Primary Triangle)
              ============================================================== */}
          <polygon
            points="500,544 460,472 540,472"
            strokeWidth="2.2"
            fill="rgba(245, 158, 11, 0.22)"
          />

          {/* ==============================================================
              7. BINDU (Supreme Transcendental Center Point)
              ============================================================== */}
          <circle cx="500" cy="496" r="4.5" fill="url(#goldBeam)" strokeWidth="0" />
          <circle cx="500" cy="496" r="9" stroke="url(#goldBeam)" strokeWidth="0.8" strokeDasharray="1.5 1.5" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}