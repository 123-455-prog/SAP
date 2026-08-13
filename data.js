/* ==== Illustrative SVGs (simple, hand-drawn feel) ==== */
const ICONS = {
  car:     '<svg viewBox="0 0 64 64" fill="none" stroke="#e8462b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 40h48v-8l-6-14H14l-6 14v8z" fill="#fde5d3"/><circle cx="18" cy="46" r="6" fill="#1a1a2e"/><circle cx="46" cy="46" r="6" fill="#1a1a2e"/><path d="M14 32h36"/></svg>',
  pipe:    '<svg viewBox="0 0 64 64" fill="none" stroke="#2a9d8f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14h14v22h22v14" fill="#e6f5ef"/><path d="M14 10v8M50 46v8"/><path d="M32 44l4 4-4 4" fill="none"/></svg>',
  bolt:    '<svg viewBox="0 0 64 64" fill="none" stroke="#f0b917" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M36 6L14 36h14l-4 22 22-30H32l4-22z" fill="#fef2d8"/></svg>',
  pan:     '<svg viewBox="0 0 64 64" fill="none" stroke="#8b5a2b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 30h40v14a8 8 0 0 1-8 8H18a8 8 0 0 1-8-8V30z" fill="#fde5d3"/><path d="M50 34h8v6h-8"/><circle cx="22" cy="20" r="3"/><circle cx="30" cy="16" r="3"/><circle cx="38" cy="20" r="3"/></svg>',
  house:   '<svg viewBox="0 0 64 64" fill="none" stroke="#8a4baf" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 30l24-20 24 20v24H8V30z" fill="#f0e6f5"/><path d="M26 54V38h12v16"/></svg>',
  wifi:    '<svg viewBox="0 0 64 64" fill="none" stroke="#2a9d8f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 24c14-14 38-14 52 0"/><path d="M14 32c10-10 26-10 36 0"/><path d="M22 40c6-6 14-6 20 0"/><circle cx="32" cy="48" r="3" fill="#2a9d8f"/></svg>',
  aid:     '<svg viewBox="0 0 64 64" fill="none" stroke="#d94a3a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="18" width="48" height="34" rx="4" fill="#fde3dc"/><path d="M32 26v18M23 35h18"/></svg>',
  fire:    '<svg viewBox="0 0 64 64" fill="none" stroke="#e8462b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M32 8c4 8 12 12 12 22 0 10-6 18-12 18s-12-8-12-18c0-6 4-8 6-14 2 4 4 6 6 8-2-6 0-12 0-16z" fill="#fef2d8"/></svg>',
  compass: '<svg viewBox="0 0 64 64" fill="none" stroke="#2a9d8f" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="24" fill="#e6f5ef"/><path d="M32 14v6M32 44v6M14 32h6M44 32h6"/><path d="M24 24l16 16M40 24L24 40" stroke="none" fill="none"/><path d="M32 20l6 12-6 12-6-12z" fill="#e8462b"/></svg>',
};

/* ==== Illustrations used inside step cards ==== */
const ART = {
  jack: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="260" height="90" rx="12" fill="#e5e0d5"/>
    <rect x="20" y="20" width="260" height="90" rx="12" fill="none" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="70" cy="130" r="24" fill="#1a1a2e"/><circle cx="70" cy="130" r="10" fill="#e5e0d5"/>
    <circle cx="230" cy="130" r="24" fill="#1a1a2e"/><circle cx="230" cy="130" r="10" fill="#e5e0d5"/>
    <path d="M150 120 L140 155 L160 155 Z" fill="#e8462b" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M120 155 L180 155" stroke="#1a1a2e" stroke-width="3"/>
  </svg>`,
  loosen: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="90" r="60" fill="#1a1a2e"/>
    <circle cx="150" cy="90" r="45" fill="#3a3a52"/>
    <g stroke="#e8462b" stroke-width="4" fill="#e8462b">
      <circle cx="150" cy="60" r="6"/><circle cx="180" cy="80" r="6"/>
      <circle cx="180" cy="110" r="6"/><circle cx="150" cy="120" r="6"/>
      <circle cx="120" cy="110" r="6"/><circle cx="120" cy="80" r="6"/>
    </g>
    <rect x="220" y="82" width="60" height="16" fill="#f4a261" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="200" y="76" width="30" height="28" rx="4" fill="#f4a261" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M180 60 L220 40" stroke="#1a1a2e" stroke-width="2" fill="none" marker-end="url(#a1)"/>
    <defs><marker id="a1" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1a1a2e"/></marker></defs>
  </svg>`,
  tire: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="90" r="55" fill="#1a1a2e"/>
    <circle cx="90" cy="90" r="30" fill="#3a3a52"/>
    <circle cx="90" cy="90" r="10" fill="#e5e0d5"/>
    <path d="M150 90 L210 90" stroke="#1a1a2e" stroke-width="3" marker-end="url(#a2)"/>
    <defs><marker id="a2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#1a1a2e"/></marker></defs>
    <circle cx="240" cy="90" r="30" fill="#e8462b" opacity=".2"/>
    <rect x="220" y="80" width="40" height="20" fill="#1a1a2e"/>
    <circle cx="240" cy="90" r="6" fill="#e5e0d5"/>
  </svg>`,
  battery: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="80" height="60" rx="4" fill="#1a1a2e"/>
    <rect x="60" y="42" width="16" height="10" fill="#e8462b"/>
    <rect x="104" y="42" width="16" height="10" fill="#1a1a2e"/>
    <text x="66" y="80" fill="#e8462b" font-size="14" font-weight="bold">+</text>
    <text x="108" y="80" fill="#e5e0d5" font-size="14" font-weight="bold">-</text>
    <rect x="170" y="50" width="80" height="60" rx="4" fill="#1a1a2e"/>
    <rect x="180" y="42" width="16" height="10" fill="#e8462b"/>
    <rect x="224" y="42" width="16" height="10" fill="#1a1a2e"/>
    <text x="186" y="80" fill="#e8462b" font-size="14" font-weight="bold">+</text>
    <text x="228" y="80" fill="#e5e0d5" font-size="14" font-weight="bold">-</text>
    <path d="M68 42 Q100 20 188 42" stroke="#e8462b" stroke-width="4" fill="none"/>
    <path d="M112 42 Q140 30 152 130 Q152 150 130 150" stroke="#1a1a2e" stroke-width="4" fill="none"/>
    <circle cx="130" cy="150" r="4" fill="#1a1a2e"/>
    <text x="60" y="140" font-size="12" fill="#6b7280">bateria descarregada</text>
    <text x="180" y="140" font-size="12" fill="#6b7280">bateria boa</text>
  </svg>`,
  oil: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M120 20 L120 130 Q120 145 135 145 L140 145 L140 60 L120 60" fill="none" stroke="#1a1a2e" stroke-width="3"/>
    <rect x="115" y="110" width="10" height="30" fill="#f0b917"/>
    <rect x="115" y="80" width="10" height="30" fill="#e5e0d5"/>
    <circle cx="120" cy="22" r="8" fill="#e8462b"/>
    <text x="160" y="105" font-size="14" fill="#1a1a2e" font-weight="bold">MAX</text>
    <text x="160" y="140" font-size="14" fill="#1a1a2e" font-weight="bold">MIN</text>
    <line x1="150" y1="100" x2="140" y2="100" stroke="#1a1a2e" stroke-width="2"/>
    <line x1="150" y1="135" x2="140" y2="135" stroke="#1a1a2e" stroke-width="2"/>
  </svg>`,
  faucet: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="120" width="180" height="40" rx="6" fill="#e5e0d5" stroke="#1a1a2e" stroke-width="2"/>
    <ellipse cx="150" cy="130" rx="30" ry="5" fill="#3a3a52"/>
    <rect x="140" y="60" width="20" height="60" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M150 60 Q150 30 190 30 L200 30" fill="none" stroke="#c0c8d0" stroke-width="16"/>
    <path d="M150 60 Q150 30 190 30 L200 30" fill="none" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="130" cy="40" r="12" fill="#e8462b"/>
    <circle cx="170" cy="40" r="12" fill="#2a9d8f"/>
    <path d="M200 40 L200 60" stroke="#4fc3f7" stroke-width="4"/>
  </svg>`,
  plunger: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="150" cy="150" rx="90" ry="12" fill="#e5e0d5"/>
    <path d="M110 130 Q110 100 150 100 Q190 100 190 130 Z" fill="#e8462b" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="144" y="30" width="12" height="80" fill="#8b5a2b" stroke="#1a1a2e" stroke-width="2"/>
    <ellipse cx="150" cy="30" rx="14" ry="6" fill="#8b5a2b" stroke="#1a1a2e" stroke-width="2"/>
  </svg>`,
  bulb: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M150 30 Q110 30 110 70 Q110 100 130 115 L130 130 L170 130 L170 115 Q190 100 190 70 Q190 30 150 30 Z" fill="#fef2d8" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="130" y="130" width="40" height="8" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="132" y="138" width="36" height="6" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="134" y="144" width="32" height="6" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M150 155 L150 165" stroke="#1a1a2e" stroke-width="2"/>
    <g stroke="#f0b917" stroke-width="3" stroke-linecap="round">
      <path d="M150 12 L150 22"/><path d="M80 45 L90 50"/><path d="M220 45 L210 50"/>
      <path d="M70 80 L82 80"/><path d="M230 80 L218 80"/>
    </g>
  </svg>`,
  breaker: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="20" width="180" height="140" rx="6" fill="#e5e0d5" stroke="#1a1a2e" stroke-width="2"/>
    <g stroke="#1a1a2e" stroke-width="2">
      <rect x="80" y="40" width="30" height="20" fill="#2a9d8f"/>
      <rect x="80" y="70" width="30" height="20" fill="#2a9d8f"/>
      <rect x="80" y="100" width="30" height="20" fill="#e8462b"/>
      <rect x="80" y="130" width="30" height="20" fill="#2a9d8f"/>
      <rect x="180" y="40" width="30" height="20" fill="#2a9d8f"/>
      <rect x="180" y="70" width="30" height="20" fill="#2a9d8f"/>
      <rect x="180" y="100" width="30" height="20" fill="#2a9d8f"/>
      <rect x="180" y="130" width="30" height="20" fill="#2a9d8f"/>
    </g>
    <text x="115" y="115" font-size="10" fill="white" font-weight="bold">OFF</text>
    <path d="M130 110 L170 110" stroke="#e8462b" stroke-width="3" marker-end="url(#a3)"/>
    <defs><marker id="a3" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#e8462b"/></marker></defs>
  </svg>`,
  outlet: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="30" width="100" height="120" rx="8" fill="#f7f5f0" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="150" cy="80" r="20" fill="#e5e0d5" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="140" cy="80" r="4" fill="#1a1a2e"/>
    <circle cx="160" cy="80" r="4" fill="#1a1a2e"/>
    <circle cx="150" cy="65" r="4" fill="#1a1a2e"/>
    <rect x="115" y="115" width="70" height="20" rx="3" fill="#e5e0d5" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="130" cy="125" r="3" fill="#1a1a2e"/>
    <circle cx="170" cy="125" r="3" fill="#1a1a2e"/>
  </svg>`,
  rice: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 80 L60 140 Q60 160 80 160 L220 160 Q240 160 240 140 L240 80 Z" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <ellipse cx="150" cy="80" rx="90" ry="14" fill="#e5e0d5" stroke="#1a1a2e" stroke-width="2"/>
    <g fill="#fff"><ellipse cx="120" cy="80" rx="4" ry="2"/><ellipse cx="140" cy="82" rx="4" ry="2"/><ellipse cx="160" cy="78" rx="4" ry="2"/><ellipse cx="180" cy="80" rx="4" ry="2"/><ellipse cx="130" cy="76" rx="4" ry="2"/></g>
    <path d="M110 60 Q108 40 100 30" fill="none" stroke="#c0c8d0" stroke-width="3"/>
    <path d="M150 60 Q148 35 140 25" fill="none" stroke="#c0c8d0" stroke-width="3"/>
    <path d="M190 60 Q188 40 180 30" fill="none" stroke="#c0c8d0" stroke-width="3"/>
  </svg>`,
  egg: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="150" cy="120" rx="110" ry="18" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <ellipse cx="150" cy="115" rx="100" ry="14" fill="#3a3a52"/>
    <path d="M110 105 Q90 100 90 115 Q90 130 120 128 Q150 132 175 125 Q200 130 210 115 Q212 100 190 105 Q170 90 145 95 Q120 92 110 105 Z" fill="#fff8e6" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="150" cy="112" r="16" fill="#f0b917" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M40 115 L20 115 L40 120" fill="none" stroke="#1a1a2e" stroke-width="2"/>
  </svg>`,
  washer: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="20" width="120" height="140" rx="8" fill="#f7f5f0" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="150" cy="95" r="40" fill="#e5e0d5" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="150" cy="95" r="30" fill="#a0d8ff"/>
    <path d="M130 95 Q140 85 150 95 T170 95" stroke="#fff" stroke-width="3" fill="none"/>
    <path d="M130 105 Q140 95 150 105 T170 105" stroke="#fff" stroke-width="3" fill="none"/>
    <circle cx="115" cy="40" r="4" fill="#1a1a2e"/>
    <circle cx="130" cy="40" r="4" fill="#1a1a2e"/>
    <rect x="150" y="35" width="50" height="10" fill="#1a1a2e"/>
  </svg>`,
  router: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="60" y="80" width="180" height="50" rx="8" fill="#1a1a2e"/>
    <rect x="70" y="70" width="6" height="10" fill="#1a1a2e"/>
    <rect x="85" y="60" width="6" height="20" fill="#1a1a2e"/>
    <rect x="100" y="50" width="6" height="30" fill="#1a1a2e"/>
    <g fill="#2a9d8f"><circle cx="80" cy="105" r="3"/><circle cx="95" cy="105" r="3"/><circle cx="110" cy="105" r="3"/><circle cx="125" cy="105" r="3"/></g>
    <g stroke="#2a9d8f" stroke-width="3" fill="none">
      <path d="M120 40 Q150 20 180 40"/>
      <path d="M130 55 Q150 40 170 55"/>
    </g>
    <circle cx="150" cy="65" r="4" fill="#2a9d8f"/>
    <path d="M240 100 L260 100" stroke="#1a1a2e" stroke-width="3"/>
    <circle cx="270" cy="100" r="8" fill="#e8462b"/>
    <text x="264" y="105" font-size="12" fill="white" font-weight="bold">O</text>
  </svg>`,
  heimlich: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="45" r="18" fill="#fde5d3" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M132 60 L130 130 L170 130 L168 60 Z" fill="#a0d8ff" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="150" cy="100" r="6" fill="#e8462b" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M120 80 Q90 90 80 130" fill="none" stroke="#f4a261" stroke-width="14" stroke-linecap="round"/>
    <path d="M180 80 Q220 100 205 135" fill="none" stroke="#f4a261" stroke-width="14" stroke-linecap="round"/>
    <path d="M200 135 L155 108" stroke="#f4a261" stroke-width="14" stroke-linecap="round"/>
    <path d="M85 130 L145 108" stroke="#f4a261" stroke-width="14" stroke-linecap="round"/>
    <path d="M150 108 L150 90" stroke="#e8462b" stroke-width="3" marker-end="url(#ah)"/>
    <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#e8462b"/></marker></defs>
  </svg>`,
  cut: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 100 Q80 60 130 70 Q180 60 220 90 Q250 110 230 140 Q200 160 150 150 Q90 155 60 130 Z" fill="#fde5d3" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M110 110 L150 120" stroke="#e8462b" stroke-width="3"/>
    <path d="M115 115 Q118 118 122 115" stroke="#e8462b" stroke-width="2" fill="none"/>
    <rect x="140" y="100" width="80" height="20" fill="#fff8e6" stroke="#1a1a2e" stroke-width="2"/>
    <line x1="150" y1="105" x2="160" y2="115" stroke="#1a1a2e"/>
    <line x1="160" y1="105" x2="170" y2="115" stroke="#1a1a2e"/>
    <line x1="180" y1="105" x2="190" y2="115" stroke="#1a1a2e"/>
    <line x1="190" y1="105" x2="200" y2="115" stroke="#1a1a2e"/>
  </svg>`,
  hammer: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="90" y="60" width="60" height="30" fill="#3a3a52" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="80" y="65" width="12" height="20" fill="#e8462b" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="120" y="88" width="15" height="70" fill="#8b5a2b" stroke="#1a1a2e" stroke-width="2" transform="rotate(20 127 120)"/>
    <path d="M180 100 L200 100 L200 130 L180 130 Z" fill="#e5e0d5" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="190" cy="115" r="3" fill="#1a1a2e"/>
    <text x="185" y="90" font-size="14" fill="#1a1a2e">🖼️</text>
  </svg>`,
  wiper: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 130 Q150 100 280 130 L280 150 L20 150 Z" fill="#a0d8ff" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="140" y="60" width="8" height="70" fill="#1a1a2e" transform="rotate(-25 144 95)"/>
    <rect x="60" y="120" width="180" height="6" fill="#3a3a52" rx="3" transform="rotate(-8 150 123)"/>
    <circle cx="60" cy="130" r="6" fill="#e8462b"/>
    <path d="M40 40 Q60 30 80 40" stroke="#4fc3f7" stroke-width="2" fill="none"/>
    <path d="M100 30 Q120 20 140 30" stroke="#4fc3f7" stroke-width="2" fill="none"/>
    <path d="M180 40 Q200 30 220 40" stroke="#4fc3f7" stroke-width="2" fill="none"/>
  </svg>`,
  gauge: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 140 A120 120 0 0 1 260 140" fill="none" stroke="#1a1a2e" stroke-width="4"/>
    <path d="M40 140 A120 120 0 0 1 100 60" fill="none" stroke="#2a9d8f" stroke-width="8"/>
    <path d="M100 60 A120 120 0 0 1 200 60" fill="none" stroke="#f0b917" stroke-width="8"/>
    <path d="M200 60 A120 120 0 0 1 260 140" fill="none" stroke="#e8462b" stroke-width="8"/>
    <line x1="150" y1="140" x2="120" y2="80" stroke="#1a1a2e" stroke-width="4"/>
    <circle cx="150" cy="140" r="8" fill="#1a1a2e"/>
    <text x="80" y="155" font-size="12" fill="#2a9d8f" font-weight="bold">baixa</text>
    <text x="130" y="155" font-size="12" fill="#f0b917" font-weight="bold">ok</text>
    <text x="200" y="155" font-size="12" fill="#e8462b" font-weight="bold">alta</text>
  </svg>`,
  drill: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="60" width="120" height="50" rx="8" fill="#e8462b" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="80" y="110" width="40" height="45" fill="#3a3a52" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="170" y="70" width="20" height="30" fill="#3a3a52" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="190" y="80" width="60" height="10" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <g stroke="#1a1a2e" stroke-width="1"><path d="M195 85 L250 85"/><path d="M195 90 L250 90"/></g>
    <rect x="250" y="80" width="6" height="10" fill="#3a3a52"/>
    <circle cx="100" cy="85" r="4" fill="#fef2d8"/>
    <text x="94" y="102" font-size="10" fill="#fff" font-weight="bold">ON</text>
  </svg>`,
  shower: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="120" y="20" width="60" height="40" rx="6" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M140 60 L140 80" stroke="#c0c8d0" stroke-width="6"/>
    <path d="M110 80 L190 80 L200 100 L100 100 Z" fill="#e8462b" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M120 100 L118 110" stroke="#4fc3f7" stroke-width="3"/>
    <path d="M135 100 L133 115" stroke="#4fc3f7" stroke-width="3"/>
    <path d="M150 100 L150 118" stroke="#4fc3f7" stroke-width="3"/>
    <path d="M165 100 L167 115" stroke="#4fc3f7" stroke-width="3"/>
    <path d="M180 100 L182 110" stroke="#4fc3f7" stroke-width="3"/>
    <rect x="190" y="70" width="12" height="90" fill="#1a1a2e" rx="2"/>
    <circle cx="196" cy="90" r="4" fill="#f0b917"/>
    <circle cx="196" cy="110" r="4" fill="#e5e0d5"/>
    <text x="205" y="93" font-size="10" fill="#1a1a2e">verão</text>
    <text x="205" y="113" font-size="10" fill="#1a1a2e">inverno</text>
  </svg>`,
  pasta: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 80 L60 140 Q60 160 80 160 L220 160 Q240 160 240 140 L240 80 Z" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <ellipse cx="150" cy="80" rx="90" ry="14" fill="#a0d8ff" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M100 75 Q120 70 140 78 Q160 72 180 78 Q195 74 200 80" stroke="#f0b917" stroke-width="3" fill="none"/>
    <path d="M110 82 Q130 76 150 84 Q170 78 190 84" stroke="#f0b917" stroke-width="3" fill="none"/>
    <path d="M80 90 L82 76 L84 92" stroke="#f0b917" stroke-width="2" fill="none"/>
    <circle cx="130" cy="65" r="3" fill="#fff"/>
    <circle cx="170" cy="60" r="3" fill="#fff"/>
    <circle cx="105" cy="70" r="2" fill="#fff"/>
    <path d="M40 40 L45 20 L50 40 L55 22 L60 42" stroke="#e5e0d5" stroke-width="2" fill="none"/>
  </svg>`,
  feijao: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 60 L60 150 L240 150 L250 60 Z" fill="#1a1a2e" stroke="#1a1a2e" stroke-width="2"/>
    <ellipse cx="150" cy="60" rx="100" ry="16" fill="#3a3a52" stroke="#1a1a2e" stroke-width="2"/>
    <ellipse cx="150" cy="58" rx="90" ry="12" fill="#6b3410"/>
    <g fill="#1a1a2e">
      <ellipse cx="120" cy="55" rx="6" ry="4" transform="rotate(20 120 55)"/>
      <ellipse cx="140" cy="60" rx="6" ry="4" transform="rotate(-15 140 60)"/>
      <ellipse cx="160" cy="55" rx="6" ry="4" transform="rotate(10 160 55)"/>
      <ellipse cx="180" cy="60" rx="6" ry="4" transform="rotate(-20 180 60)"/>
      <ellipse cx="130" cy="52" rx="6" ry="4"/>
      <ellipse cx="170" cy="52" rx="6" ry="4" transform="rotate(30 170 52)"/>
    </g>
    <path d="M240 90 L250 90 L250 130 L240 130" fill="none" stroke="#3a3a52" stroke-width="3"/>
    <path d="M120 30 Q118 15 108 8" stroke="#c0c8d0" stroke-width="2" fill="none"/>
    <path d="M150 30 Q148 12 140 4" stroke="#c0c8d0" stroke-width="2" fill="none"/>
    <path d="M180 30 Q178 15 188 8" stroke="#c0c8d0" stroke-width="2" fill="none"/>
  </svg>`,
  fridge: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="20" width="100" height="140" rx="8" fill="#f7f5f0" stroke="#1a1a2e" stroke-width="2"/>
    <line x1="100" y1="60" x2="200" y2="60" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="188" y="30" width="6" height="18" fill="#1a1a2e" rx="2"/>
    <rect x="188" y="90" width="6" height="30" fill="#1a1a2e" rx="2"/>
    <rect x="115" y="75" width="70" height="14" fill="#e5e0d5"/>
    <rect x="115" y="95" width="70" height="14" fill="#e5e0d5"/>
    <rect x="115" y="115" width="70" height="14" fill="#e5e0d5"/>
    <circle cx="130" cy="42" r="6" fill="#4fc3f7"/>
    <path d="M126 42 L130 46 L136 38" stroke="#fff" stroke-width="2" fill="none"/>
  </svg>`,
  mold: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="30" width="220" height="120" fill="#fff8e6" stroke="#1a1a2e" stroke-width="2"/>
    <g fill="#3a3a52" opacity=".7">
      <circle cx="80" cy="70" r="12"/><circle cx="90" cy="60" r="6"/>
      <circle cx="200" cy="90" r="14"/><circle cx="215" cy="80" r="7"/>
      <circle cx="130" cy="120" r="10"/><circle cx="120" cy="115" r="5"/>
    </g>
    <g fill="#2a9d8f" opacity=".6">
      <circle cx="180" cy="130" r="10"/><circle cx="195" cy="125" r="6"/>
      <circle cx="60" cy="115" r="8"/>
    </g>
    <path d="M50 40 L120 40" stroke="#e8462b" stroke-width="3"/>
    <text x="132" y="46" font-size="12" fill="#e8462b" font-weight="bold">JOGAR FORA</text>
  </svg>`,
  password: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="60" width="160" height="90" rx="10" fill="#1a1a2e" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M105 60 L105 40 Q105 20 150 20 Q195 20 195 40 L195 60" fill="none" stroke="#1a1a2e" stroke-width="5"/>
    <g fill="#e8462b"><circle cx="105" cy="105" r="8"/><circle cx="135" cy="105" r="8"/><circle cx="165" cy="105" r="8"/><circle cx="195" cy="105" r="8"/></g>
    <g fill="#fef2d8"><rect x="103" y="115" width="4" height="10"/><rect x="133" y="115" width="4" height="10"/><rect x="163" y="115" width="4" height="10"/><rect x="193" y="115" width="4" height="10"/></g>
  </svg>`,
  phishing: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <rect x="40" y="40" width="220" height="110" rx="8" fill="#fff" stroke="#1a1a2e" stroke-width="2"/>
    <rect x="40" y="40" width="220" height="30" fill="#e8462b"/>
    <text x="60" y="60" font-size="14" fill="#fff" font-weight="bold">URGENTE! Sua conta será bloqueada</text>
    <text x="60" y="90" font-size="12" fill="#1a1a2e">Clique aqui para atualizar seus dados:</text>
    <rect x="60" y="100" width="180" height="20" fill="#f7f5f0" stroke="#1a1a2e"/>
    <text x="66" y="114" font-size="10" fill="#e8462b" font-family="monospace">http://bancoo-brasii.com/login</text>
    <path d="M120 90 L120 130" stroke="#e8462b" stroke-width="3"/>
    <text x="130" y="140" font-size="12" fill="#e8462b" font-weight="bold">DOMÍNIO FALSO!</text>
  </svg>`,
  water: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 30 L100 130 Q100 155 130 155 L170 155 Q200 155 200 130 L200 30 Z" fill="#a0d8ff" fill-opacity=".4" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M100 60 L200 60" stroke="#4fc3f7" stroke-width="2" stroke-dasharray="4 4"/>
    <ellipse cx="150" cy="150" rx="70" ry="8" fill="#4fc3f7"/>
    <g fill="#4fc3f7"><circle cx="130" cy="110" r="4"/><circle cx="155" cy="85" r="3"/><circle cx="170" cy="120" r="5"/><circle cx="145" cy="130" r="3"/></g>
    <text x="120" y="45" font-size="14" fill="#1a1a2e" font-weight="bold">2 L / dia</text>
  </svg>`,
  boilwater: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 60 L60 130 Q60 150 80 150 L220 150 Q240 150 240 130 L240 60 Z" fill="#c0c8d0" stroke="#1a1a2e" stroke-width="2"/>
    <ellipse cx="150" cy="60" rx="90" ry="12" fill="#4fc3f7" stroke="#1a1a2e" stroke-width="2"/>
    <g fill="#fff" opacity=".8"><circle cx="120" cy="80" r="6"/><circle cx="150" cy="90" r="8"/><circle cx="175" cy="75" r="5"/><circle cx="135" cy="105" r="6"/><circle cx="170" cy="110" r="7"/></g>
    <path d="M100 30 Q98 20 108 15" stroke="#c0c8d0" stroke-width="3" fill="none"/>
    <path d="M150 25 Q148 12 158 8" stroke="#c0c8d0" stroke-width="3" fill="none"/>
    <path d="M200 30 Q198 20 208 15" stroke="#c0c8d0" stroke-width="3" fill="none"/>
    <g stroke="#e8462b" stroke-width="4" stroke-linecap="round">
      <path d="M40 130 Q30 120 40 110"/>
      <path d="M45 135 Q35 125 45 115"/>
    </g>
    <text x="60" y="180" font-size="10" fill="#1a1a2e">1 min a 100°C</text>
  </svg>`,
  knot: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 90 Q90 90 100 60 Q110 30 150 30 Q190 30 200 60 Q210 90 270 90" fill="none" stroke="#8b5a2b" stroke-width="10" stroke-linecap="round"/>
    <path d="M100 60 Q140 90 100 120 Q60 90 100 60 Z" fill="none" stroke="#8b5a2b" stroke-width="10"/>
    <path d="M200 60 Q160 90 200 120 Q240 90 200 60 Z" fill="none" stroke="#e8462b" stroke-width="10"/>
    <text x="80" y="150" font-size="11" fill="#1a1a2e">alça fixa</text>
    <text x="185" y="150" font-size="11" fill="#e8462b" font-weight="bold">volta viva</text>
  </svg>`,
  shelter: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 150 L150 40 L260 150 Z" fill="#8b5a2b" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M40 150 L150 40" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M150 40 L260 150" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M60 148 L150 55 L240 148" fill="none" stroke="#2a9d8f" stroke-width="1" stroke-dasharray="4 4"/>
    <path d="M148 40 L148 20" stroke="#1a1a2e" stroke-width="3"/>
    <path d="M144 22 L152 22" stroke="#1a1a2e" stroke-width="3"/>
    <g fill="#2a9d8f"><circle cx="80" cy="150" r="4"/><circle cx="220" cy="150" r="4"/><circle cx="150" cy="45" r="4"/></g>
    <text x="70" y="170" font-size="10" fill="#1a1a2e">galhos + folhas</text>
  </svg>`,
  bearing: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="90" r="70" fill="#f7f5f0" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="150" cy="90" r="60" fill="none" stroke="#1a1a2e" stroke-width="1"/>
    <text x="146" y="30" font-size="14" fill="#e8462b" font-weight="bold">N</text>
    <text x="146" y="160" font-size="14" fill="#1a1a2e" font-weight="bold">S</text>
    <text x="222" y="94" font-size="14" fill="#1a1a2e" font-weight="bold">L</text>
    <text x="70" y="94" font-size="14" fill="#1a1a2e" font-weight="bold">O</text>
    <path d="M150 90 L150 35" stroke="#e8462b" stroke-width="4" marker-end="url(#nr)"/>
    <defs><marker id="nr" markerWidth="10" markerHeight="10" refX="4" refY="6" orient="auto"><path d="M0,0 L4,6 L8,0 z" fill="#e8462b"/></marker></defs>
    <circle cx="150" cy="90" r="6" fill="#1a1a2e"/>
    <path d="M150 90 L195 55" stroke="#2a9d8f" stroke-width="2" stroke-dasharray="4 4"/>
    <text x="200" y="55" font-size="12" fill="#2a9d8f" font-weight="bold">45°</text>
  </svg>`,
  bandage: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M60 90 Q60 60 90 60 L210 60 Q240 60 240 90 Q240 120 210 120 L90 120 Q60 120 60 90 Z" fill="#f4a261" stroke="#1a1a2e" stroke-width="2" transform="rotate(-20 150 90)"/>
    <rect x="130" y="65" width="40" height="50" fill="#fff8e6" stroke="#1a1a2e" stroke-width="1" transform="rotate(-20 150 90)"/>
    <g transform="rotate(-20 150 90)"><circle cx="140" cy="80" r="2" fill="#8b5a2b"/><circle cx="150" cy="90" r="2" fill="#8b5a2b"/><circle cx="160" cy="100" r="2" fill="#8b5a2b"/><circle cx="140" cy="105" r="2" fill="#8b5a2b"/><circle cx="160" cy="75" r="2" fill="#8b5a2b"/></g>
  </svg>`,
  snake: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 130 Q80 60 130 100 Q180 140 220 80 Q250 50 280 60" fill="none" stroke="#2a9d8f" stroke-width="16" stroke-linecap="round"/>
    <path d="M40 130 Q80 60 130 100 Q180 140 220 80 Q250 50 280 60" fill="none" stroke="#1a1a2e" stroke-width="16" stroke-linecap="round" stroke-dasharray="6 20"/>
    <circle cx="278" cy="58" r="10" fill="#2a9d8f" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="282" cy="55" r="2" fill="#1a1a2e"/>
    <path d="M285 62 L295 60 M285 65 L295 68" stroke="#e8462b" stroke-width="2"/>
    <path d="M120 40 L120 20" stroke="#e8462b" stroke-width="3"/>
    <text x="90" y="15" font-size="12" fill="#e8462b" font-weight="bold">imobilize!</text>
  </svg>`,
  cpr: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="130" rx="40" ry="12" fill="#e5e0d5"/>
    <rect x="20" y="110" width="220" height="25" fill="#a0d8ff" stroke="#1a1a2e" stroke-width="2" rx="10"/>
    <circle cx="240" cy="122" r="18" fill="#fde5d3" stroke="#1a1a2e" stroke-width="2"/>
    <circle cx="245" cy="118" r="2" fill="#1a1a2e"/>
    <path d="M242 128 Q245 130 248 128" stroke="#1a1a2e" stroke-width="1" fill="none"/>
    <path d="M110 100 L110 60 L130 60 L130 100" fill="#f4a261" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M100 40 Q120 20 140 40 Q140 60 120 65 Q100 60 100 40 Z" fill="#fde5d3" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M120 100 L120 115" stroke="#e8462b" stroke-width="4" marker-end="url(#dn)"/>
    <defs><marker id="dn" markerWidth="10" markerHeight="10" refX="4" refY="8" orient="auto"><path d="M0,0 L4,8 L8,0 z" fill="#e8462b"/></marker></defs>
    <text x="90" y="30" font-size="10" fill="#e8462b" font-weight="bold">100-120 x/min</text>
  </svg>`,
  fireart: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#8b5a2b" stroke-width="4">
      <line x1="90" y1="150" x2="130" y2="110"/>
      <line x1="210" y1="150" x2="170" y2="110"/>
      <line x1="110" y1="150" x2="150" y2="105"/>
      <line x1="190" y1="150" x2="160" y2="115"/>
    </g>
    <path d="M150 100 Q125 90 130 60 Q145 75 148 55 Q160 80 155 40 Q175 65 172 55 Q180 90 150 100 Z" fill="#e8462b"/>
    <path d="M148 90 Q135 82 140 65 Q152 78 155 55 Q170 80 165 55 Q170 85 148 90 Z" fill="#f0b917"/>
    <path d="M150 80 Q145 72 148 62 Q155 72 155 65 Q160 78 150 80 Z" fill="#fef2d8"/>
    <g fill="#3a3a52"><ellipse cx="120" cy="150" rx="8" ry="3"/><ellipse cx="180" cy="150" rx="8" ry="3"/><ellipse cx="150" cy="155" rx="12" ry="4"/></g>
  </svg>`,
  bugout: `<svg viewBox="0 0 300 180" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 60 L100 160 L200 160 L200 60 Q200 40 180 40 L120 40 Q100 40 100 60 Z" fill="#e8462b" stroke="#1a1a2e" stroke-width="2"/>
    <path d="M120 40 Q120 20 150 20 Q180 20 180 40" fill="none" stroke="#1a1a2e" stroke-width="3"/>
    <rect x="115" y="70" width="70" height="6" fill="#1a1a2e"/>
    <g fill="#fef2d8" opacity=".9">
      <rect x="115" y="90" width="30" height="14" rx="2"/>
      <rect x="150" y="90" width="35" height="14" rx="2"/>
      <rect x="115" y="110" width="70" height="14" rx="2"/>
      <rect x="115" y="130" width="30" height="14" rx="2"/>
      <rect x="150" y="130" width="35" height="14" rx="2"/>
    </g>
    <text x="120" y="100" font-size="8" fill="#1a1a2e">água</text>
    <text x="155" y="100" font-size="8" fill="#1a1a2e">comida</text>
    <text x="120" y="120" font-size="8" fill="#1a1a2e">1º socorros</text>
    <text x="120" y="140" font-size="8" fill="#1a1a2e">rádio</text>
    <text x="155" y="140" font-size="8" fill="#1a1a2e">lanterna</text>
  </svg>`,
};

/* ==== Categories & Tasks ==== */
const CATEGORIES = [
  {
    id: 'carros',
    name: 'Carros',
    icon: ICONS.car,
    color: '#fde5d3',
    tasks: [
      {
        id: 'trocar-pneu',
        title: 'Trocar um pneu furado',
        summary: 'Passo-a-passo para trocar pelo estepe com segurança na beira da estrada.',
        difficulty: 'medium',
        time: '20 min',
        // Imagem local: a pasta image deve ficar no mesmo nível do index.html.
        imageUrl: 'image/image.png',
        imageAlt: 'Pneu furado em um carro',
        thumb: ART.tire,
        materials: ['Estepe (pneu reserva)', 'Macaco (jack)', 'Chave de roda', 'Triângulo de sinalização', 'Luvas (opcional)'],
        steps: [
          { title: 'Pare em local seguro e sinalize', text: 'Encoste o mais longe possível do fluxo, no plano. Puxe o freio de mão, ligue o pisca-alerta e coloque o triângulo pelo menos 30 metros atrás do carro. Se possível, calce a roda oposta com uma pedra para não rolar.', art: null, tip: 'Nunca troque pneu no acostamento de rodovia movimentada sem sinalização — chame o guincho se estiver inseguro.' },
          { title: 'Afrouxe (mas não retire) os parafusos', text: 'Com o carro ainda no chão, encaixe a chave de roda e gire no sentido anti-horário. Faça meia volta em cada parafuso só para "quebrar" a resistência. É muito mais fácil agora do que com a roda no ar.', art: ART.loosen },
          { title: 'Levante o carro com o macaco', text: 'Posicione o macaco no ponto reforçado do chassi (consulte o manual — geralmente há uma marca perto da roda). Suba devagar até o pneu ficar 2-3 cm acima do chão.', art: ART.jack, warn: 'Nunca coloque nenhuma parte do corpo debaixo do carro apoiado só no macaco.' },
          { title: 'Retire os parafusos e o pneu furado', text: 'Termine de desatarraxar os parafusos com a mão e guarde todos juntos. Puxe o pneu para fora — ele pode estar duro; balance de leve.' },
          { title: 'Coloque o estepe', text: 'Encaixe o estepe alinhando os furos. Coloque os parafusos e aperte com a mão em "estrela" (cruzado, não seguido) para o pneu assentar reto.' },
          { title: 'Desça e aperte firme', text: 'Baixe o carro até o pneu tocar o chão com peso. Agora sim, aperte os parafusos com força, sempre em estrela. Depois desça o macaco totalmente e dê o aperto final.', tip: 'A maioria dos estepes de socorro é limitado a 80 km/h. Vá para uma borracharia arrumar o pneu original o quanto antes.' },
        ],
      },
      {
        id: 'chupeta bateria',
        title: 'Dar chupeta na bateria',
        summary: 'Como usar cabos de chupeta para ligar um carro com bateria descarregada.',
        difficulty: 'easy',
        time: '10 min',
        imageUrl: 'image/chupeta.png',
        imageAlt: 'Cabos de chupeta para bateria de carro',
        thumb: ART.battery,
        materials: ['Cabos de chupeta (jumper)', 'Um segundo carro com bateria boa', 'Óculos e luvas (opcional, recomendado)'],
        steps: [
          { title: 'Aproxime os carros', text: 'Estacione o carro que vai ajudar de frente ou lado a lado, perto o suficiente para os cabos alcançarem as duas baterias. Desligue os dois carros e tire a chave.', warn: 'Nunca deixe os polos dos cabos se tocarem depois de conectados.' },
          { title: 'Conecte o cabo vermelho (+)', text: 'Pinça vermelha no polo POSITIVO (+) da bateria descarregada. A outra pinça vermelha no polo POSITIVO da bateria boa.', art: ART.battery },
          { title: 'Conecte o cabo preto (-)', text: 'Pinça preta no polo NEGATIVO (-) da bateria boa. A outra pinça preta em uma parte METÁLICA do motor do carro descarregado (um parafuso limpo, longe da bateria). Isso evita faíscas perto da bateria.', tip: 'Pode fazer no polo negativo da bateria descarregada, mas na peça de metal é mais seguro.' },
          { title: 'Ligue o carro doador e espere', text: 'Ligue o motor do carro com bateria boa. Deixe funcionando 2-3 minutos para começar a carregar a outra bateria.' },
          { title: 'Ligue o carro descarregado', text: 'Dê partida no carro descarregado. Se não pegar de primeira, espere mais 1 minuto e tente de novo. Se depois de 3 tentativas não pegar, o problema pode não ser só a bateria.' },
          { title: 'Desconecte na ordem inversa', text: 'Com os dois carros ligados: tire o preto do metal, depois o preto da bateria boa, depois o vermelho da bateria boa e por fim o vermelho da bateria que estava fraca. Rode com o carro por pelo menos 20 minutos para a bateria recarregar.' },
        ],
      },
      {
        id: 'oleo do carro',
        title: 'Verificar o nível do óleo do motor',
        summary: 'Checagem rápida que deve ser feita a cada 1.000 km ou antes de viagem longa.',
        difficulty: 'easy',
        time: '5 min',
        imageUrl: 'image/oleo.png',
        imageAlt: 'Verificação do óleo do motor',
        thumb: ART.oil,
        materials: ['Um pano ou papel-toalha', 'Óleo do motor (para completar, se precisar)'],
        steps: [
          { title: 'Carro no plano, motor frio', text: 'O carro precisa estar em piso plano e desligado há pelo menos 5 minutos. Assim o óleo escorre todo para o cárter e a leitura fica correta.' },
          { title: 'Localize a vareta', text: 'Abra o capô. A vareta do óleo geralmente tem um puxador amarelo ou laranja com o desenho de uma latinha de óleo. Consulte o manual se tiver dúvida.', art: ART.oil },
          { title: 'Puxe, limpe e recoloque', text: 'Tire a vareta toda, limpe a ponta com o pano e enfie de volta até o fim. Isso remove o óleo respingado nas paredes e dá a medida real.' },
          { title: 'Puxe de novo e leia', text: 'Puxe a vareta sem virar. Veja onde o óleo termina — precisa estar entre as marcas MIN e MAX (ou entre os dois pontinhos).', tip: 'Se estiver perto do MIN, complete com o óleo indicado no manual — 200 ml de cada vez, sempre conferindo.' },
          { title: 'Verifique a cor', text: 'Óleo bom: cor de mel/dourado. Óleo preto, grosso ou com cheiro de queimado indica que a troca está atrasada.' },
        ],
      },
      {
        id: 'trocar palheta',
        title: 'Trocar palheta do limpador',
        summary: 'Palheta que faz barulho ou deixa borrões — troca simples em 5 minutos.',
        difficulty: 'easy',
        time: '5 min',
        imageUrl: 'image/palheta.png',
        imageAlt: 'Palheta de limpador de para-brisa',
        thumb: ART.wiper,
        materials: ['Palhetas novas do tamanho correto (medir a atual ou consultar o manual)', 'Um pano velho'],
        steps: [
          { title: 'Levante o braço do limpador', text: 'Puxe o braço do limpador para longe do vidro até ficar em pé. Ele tem uma mola e trava sozinho na posição levantada.', warn: 'Se soltar de repente, o braço bate no vidro e pode trincar. Segure firme.' },
          { title: 'Coloque um pano no vidro', text: 'Cubra o para-brisa embaixo da palheta com um pano. Se por acaso o braço escapar da sua mão, o pano protege o vidro.' },
          { title: 'Solte a palheta antiga', text: 'A maioria tem uma travinha embaixo, onde a palheta encontra o braço. Aperte a trava e puxe a palheta para baixo (paralela ao braço), deslizando para fora.', art: ART.wiper },
          { title: 'Encaixe a palheta nova', text: 'Faça o caminho inverso: deslize a nova pelo mesmo encaixe até ouvir um clique da trava. Puxe de leve para conferir que ficou firme.' },
          { title: 'Abaixe com cuidado', text: 'Guie o braço de volta ao vidro devagar, segurando pela base. Nunca solte para bater sozinho.' },
          { title: 'Teste com água', text: 'Acione o esguicho + limpador. A palheta boa desliza suave, sem barulho de "borracha arrastando" e sem deixar rastros.', tip: 'Palheta dura em média 6-12 meses. Se mora em local ensolarado, dura menos.' },
        ],
      },
      {
        id: 'calibrar pneu',
        title: 'Calibrar os pneus',
        summary: 'Pneu na pressão certa aumenta segurança, economia e dura mais.',
        difficulty: 'easy',
        time: '10 min',
        imageUrl: 'image/pneu.png',
        imageAlt: 'Calibragem de pneu de carro',
        thumb: ART.gauge,
        materials: ['Compressor de posto (grátis na maioria)', 'Pressão recomendada (etiqueta na porta do motorista)'],
        steps: [
          { title: 'Descubra a pressão correta', text: 'Abra a porta do motorista — na lateral tem uma etiqueta com os valores para pneus vazio e cheio. Manual do carro também traz. Geralmente entre 30 e 36 PSI.', tip: 'Ignore o número máximo escrito no PNEU — é o limite dele, não o ideal para SEU carro.' },
          { title: 'Calibre com o pneu FRIO', text: 'Idealmente, calibre depois do carro parado por 3+ horas ou tendo rodado menos de 3 km. Pneu quente lê mais alto e você calibra errado.', warn: 'Se rodou muito para chegar no posto, acrescente 4 PSI ao valor recomendado para compensar.' },
          { title: 'Retire a tampinha da válvula', text: 'Cada pneu tem uma válvula com tampinha preta ou colorida. Desatarraxe e guarde no bolso — se cair no chão do posto, some.' },
          { title: 'Encaixe o bico do compressor', text: 'Empurre firme na válvula até parar de escapar ar. Segure reto. O manômetro do compressor vai mostrar a pressão atual.', art: ART.gauge },
          { title: 'Ajuste até o valor certo', text: 'Aperte o gatilho para inflar. Se passou, aperte o botão de escape (ou pressione o pino central da válvula com a unha) para tirar ar. Confira novamente.' },
          { title: 'Não esqueça o estepe', text: 'Confira o estepe a cada 3 meses — de nada adianta quando furar e ele estar murcho. Guarde os 4 valores na cabeça: dianteiros costumam ser 2 PSI a mais que traseiros no carro leve.' },
        ],
      },
    ],
  },
  {
    id: 'encanamento',
    name: 'Encanamento',
    icon: ICONS.pipe,
    color: '#e6f5ef',
    tasks: [
      {
        id: 'trocar torneira',
        title: 'Trocar uma torneira de pia',
        summary: 'Substitua uma torneira antiga por uma nova sem chamar encanador.',
        difficulty: 'medium',
        time: '30 min',
        imageUrl: 'image/pia.png',
        imageAlt: 'Torneira de pia',
        thumb: ART.faucet,
        materials: ['Torneira nova', 'Chave de grifo ou chave inglesa', 'Fita veda-rosca', 'Pano ou balde para respingos'],
        steps: [
          { title: 'Feche o registro geral da água', text: 'Vá até o registro da casa (geralmente perto do relógio da rua ou na área de serviço) e feche. Abra a torneira antiga para escoar a água que sobrou nos canos.', warn: 'Se não fechar o registro, você vai levar um banho de água pressurizada.' },
          { title: 'Solte a torneira antiga', text: 'Segure a base com uma mão e gire a porca de fixação embaixo da pia no sentido anti-horário com a chave. Alguns modelos parafusam diretamente na parede — nesse caso, gire a torneira inteira.', art: ART.faucet },
          { title: 'Limpe a rosca da parede/pia', text: 'Tire os restos de fita veda-rosca velha e sujeira. A rosca precisa estar limpa para o veda-rosca novo agarrar bem.' },
          { title: 'Aplique fita veda-rosca na rosca', text: 'Enrole a fita 5 a 8 voltas na rosca, sempre no sentido em que a torneira vai apertar (senão a fita desenrola). Aperte com o dedo.', tip: 'Fita muito grossa impede o encaixe, muito fina vaza. Se aprender: comece pelo fio da rosca e siga uniforme.' },
          { title: 'Rosqueie a torneira nova', text: 'Encaixe a torneira e gire com a mão até apertar. Depois dê mais 1 a 2 voltas com a chave, cuidando para deixar a torneira alinhada (boca voltada para o meio da pia).' },
          { title: 'Abra o registro e teste', text: 'Reabra o registro geral devagar. Abra a torneira nova, deixe correr por 30 segundos e observe a base — se pingar, aperte mais meia volta. Se continuar, refaça o veda-rosca.' },
        ],
      },
      {
        id: 'desentupir a pia',
        title: 'Desentupir a pia da cozinha',
        summary: 'Métodos caseiros — do mais simples ao mais forte — para resolver antes de chamar o profissional.',
        difficulty: 'easy',
        time: '15 min',
        imageUrl: 'image/desentupir.png',
        imageAlt: 'Desentupimento de pia',
        thumb: ART.plunger,
        materials: ['Água quente', 'Bicarbonato de sódio', 'Vinagre branco', 'Desentupidor tipo ventosa (plunger)'],
        steps: [
          { title: 'Retire a água parada', text: 'Se tem água acumulada na pia, tire com uma caneca ou pano até restar só o fundo. Isso deixa o produto agir direto no cano.' },
          { title: 'Água fervente (só cano de PVC ou metal)', text: 'Ferva 2 litros de água e despeje devagar no ralo, em três etapas com 30 segundos de intervalo. Dissolve gordura acumulada.', warn: 'Não use água fervente em pia de mármore/pedra ou tubulação muito antiga.' },
          { title: 'Bicarbonato + vinagre', text: 'Se não resolveu: jogue 1 xícara de bicarbonato no ralo, depois 1 xícara de vinagre branco. Vai borbulhar — tampe o ralo com um pano por 15 minutos. Depois, mais 2 litros de água quente.', tip: 'O borbulhar mecânico ajuda a soltar sujeira. Bem eficaz para gorduras e sabão.' },
          { title: 'Desentupidor de ventosa', text: 'Se ainda não resolveu, cubra o ralo com o desentupidor, encha a pia com um dedo de água (para fazer selo) e bombeie firme 10 a 15 vezes. Puxe rápido de uma vez.', art: ART.plunger },
          { title: 'Limpe o sifão', text: 'Se persistir: coloque um balde embaixo do sifão (o cano em forma de U embaixo da pia). Desatarraxe as porcas, esvazie o conteúdo no balde e lave o sifão com detergente.' },
        ],
      },
      {
        id: 'arrumar descarga',
        title: 'Consertar descarga que fica correndo',
        summary: 'A caixa acoplada não para de encher — quase sempre é o vedante ou a boia.',
        difficulty: 'easy',
        time: '15 min',
        imageUrl: 'image/descarga.png',
        imageAlt: 'Reparo de descarga sanitária',
        thumb: ART.pipe,
        materials: ['Vedante novo (borracha da saída) — R$ 5 a R$ 15', 'Chave de fenda (às vezes)'],
        steps: [
          { title: 'Feche o registro do vaso', text: 'Localize o pequeno registro na parede atrás ou ao lado do vaso e feche girando no sentido horário até o fim.' },
          { title: 'Tire a tampa da caixa acoplada', text: 'A tampa é solta — levante com cuidado. Se tiver o botão da descarga, geralmente é preciso desatarraxar a rosca dele antes.' },
          { title: 'Descubra o problema', text: 'Dê descarga uma vez para esvaziar. Observe: (a) a boia sobe e trava a entrada de água ou fica passando? (b) a borracha do fundo (vedante) veda ou fica escorregando?', tip: 'Água correndo pelo vaso = vedante gasto. Água transbordando pelo ladrão = boia com problema.' },
          { title: 'Troque o vedante (mais comum)', text: 'Puxe a borracha preta redonda do fundo da caixa. Compare com a nova, encaixe do mesmo jeito. Pronto — na maioria dos casos resolve.' },
          { title: 'Ajuste ou troque a boia', text: 'Se o problema for a boia: ajuste o nível apertando/afrouxando o parafuso da haste. Se estiver furada (afundando), troque por uma nova.' },
          { title: 'Reabra a água e teste', text: 'Abra o registro, espere a caixa encher e dê algumas descargas para conferir que não corre mais. Recoloque a tampa.' },
        ],
      },
      {
        id: 'trocar a resistencia',
        title: 'Trocar a resistência do chuveiro',
        summary: 'Chuveiro parou de esquentar? A resistência queimada é a causa em 90% dos casos.',
        difficulty: 'medium',
        time: '20 min',
        imageUrl: 'image/chuveiro.png',
        imageAlt: 'Chuveiro elétrico',
        thumb: ART.shower,
        materials: ['Resistência nova (mesma potência e voltagem — leia na etiqueta do chuveiro)', 'Chave de fenda', 'Escada firme'],
        steps: [
          { title: 'DESLIGUE O DISJUNTOR DO CHUVEIRO', text: 'Vá no quadro e desligue o disjuntor exclusivo do chuveiro. Confirme desligando o interruptor de luz também — mas o disjuntor é o essencial.', warn: 'Chuveiro elétrico usa 220V com corrente altíssima. Trabalhar com energia ligada É FATAL.' },
          { title: 'Feche o registro do chuveiro', text: 'Feche o registro na parede antes do chuveiro para não jorrar água quando abrir.' },
          { title: 'Desmonte a tampa', text: 'Retire a "carcaça" do chuveiro. Alguns têm parafusos visíveis; outros abrem girando o corpo no sentido anti-horário. Deixe pendurado pelos fios.', art: ART.shower },
          { title: 'Identifique a resistência', text: 'A resistência é a peça em espiral (uma "molinha") no centro. Ela tem duas hastes metálicas nos parafusos laterais. Compare com a peça nova antes de tirar.' },
          { title: 'Solte e substitua', text: 'Afrouxe os dois parafusos que prendem as hastes. Puxe a resistência velha. Encaixe a nova nas mesmas posições e reaperte firme.', tip: 'Anote a potência (ex: 5500W 220V) antes de comprar. Colocar potência errada estraga o disjuntor ou não esquenta.' },
          { title: 'Monte, abra a água, teste', text: 'Recoloque a carcaça, abra o registro, ligue o disjuntor. Teste na posição verão primeiro (menor corrente). Se aquecer, teste inverno.' },
        ],
      },
      {
        id: 'vazamento da mangueira',
        title: 'Diagnosticar um vazamento em casa',
        summary: 'Conta de água alta ou pia molhada sem motivo? Descubra onde está o vazamento.',
        difficulty: 'easy',
        time: '30 min',
        imageUrl: 'image/vazamento.webp',
        imageAlt: 'Vazamento de água em casa',
        thumb: ART.pipe,
        materials: ['Um relógio', 'Papel-toalha ou pano bem seco'],
        steps: [
          { title: 'Teste do hidrômetro (relógio de água)', text: 'Feche TUDO na casa: torneiras, mangueiras, máquinas. Olhe o hidrômetro (na rua) — se o ponteirinho continuar girando, tem vazamento em algum lugar.', tip: 'Faça o teste à noite antes de dormir e cheque de manhã sem usar água. Se o número mudou, é vazamento.' },
          { title: 'Vazamento externo (canos aparentes)', text: 'Passe papel-toalha SECO em cada conexão de cano visível (embaixo da pia, tanque, atrás da máquina). Papel molhou = vazamento naquele ponto.' },
          { title: 'Teste do vaso sanitário', text: 'Pingue algumas gotas de corante alimentício na caixa acoplada. Não dê descarga. Se depois de 15 minutos o vaso ficou colorido, o vedante está passando água.' },
          { title: 'Vazamento oculto (dentro da parede)', text: 'Sinais: mancha de umidade, tinta descascando ou "bolha", piso sempre úmido em um ponto. Passe a mão em paredes — se um trecho está mais frio, provavelmente tem cano vazando ali dentro.', warn: 'Vazamento oculto pode danificar estrutura em semanas. Chame um profissional com detector de vazamento (equipamento eletrônico).' },
          { title: 'Registro do jardim / caixa d\'água', text: 'Não esqueça: torneira do quintal, boia da caixa d\'água (na laje). Boia com defeito faz a caixa transbordar sem parar — vaza pelo ladrão.' },
        ],
      },
    ],
  },
  {
    id: 'eletrica',
    name: 'Elétrica',
    icon: ICONS.bolt,
    color: '#fef2d8',
    tasks: [
      {
        id: 'trocar a lampada',
        title: 'Trocar uma lâmpada com segurança',
        summary: 'Parece besteira, mas trocar do jeito errado pode dar choque ou quebrar o bocal.',
        difficulty: 'easy',
        time: '5 min',
        thumb: ART.bulb,
        imageUrl: 'image/lampada.png',
        imageAlt: 'Troca de lâmpada',
        materials: ['Lâmpada nova (mesma base do bocal — E27 é a comum)', 'Escada firme', 'Um pano seco'],
        steps: [
          { title: 'Desligue o interruptor', text: 'Sempre desligue o interruptor daquela luz. Ideal: desligue também o disjuntor daquele cômodo, se souber qual é.', warn: 'Não confie só no interruptor — instalações antigas podem ter fio vivo mesmo desligado.' },
          { title: 'Deixe a lâmpada esfriar', text: 'Se estava acesa, espere 2-3 minutos. Lâmpadas incandescentes e halógenas ficam quentíssimas.' },
          { title: 'Suba na escada firme', text: 'Escada em superfície plana, alguém segurando embaixo se possível. Nunca use cadeira instável.' },
          { title: 'Retire a lâmpada velha', text: 'Base rosca (E27): gire no sentido anti-horário. Base baioneta/encaixe: empurre e gire. Segure só pelo vidro perto da base, sem apertar demais.', art: ART.bulb },
          { title: 'Coloque a nova', text: 'Encaixe e gire no sentido horário até apertar levemente — não force. Se for LED, pegue pelo corpo plástico (a placa interna é sensível a estática).', tip: 'Prefira LED: dura 10x mais, esquenta menos e gasta pouco. Só verifique se seu bocal é dimmerizado ou não.' },
          { title: 'Religue e teste', text: 'Desça da escada, ligue o disjuntor (se desligou) e acione o interruptor. Se não acender, confira se apertou bem ou tente outra lâmpada nova.' },
        ],
      },
      {
        id: 'resetar o disjuntor',
        title: 'Resetar um disjuntor que desarmou',
        summary: 'Quando cai a luz de uma parte da casa e o quadro está com uma chavinha caída.',
        difficulty: 'easy',
        time: '2 min',
        imageUrl: 'image/dijuntor.png',
        imageAlt: 'Quadro de disjuntores',
        thumb: ART.breaker,
        materials: ['Uma lanterna (o celular serve)'],
        steps: [
          { title: 'Abra o quadro de disjuntores', text: 'Fica geralmente na entrada da casa ou lavanderia. Abra a portinha — dentro há várias chavinhas.', art: ART.breaker },
          { title: 'Identifique a chave desarmada', text: 'A chavinha que "caiu" para baixo (ou fica na posição do meio) é a que desarmou. As outras estarão para cima (ligadas).' },
          { title: 'Desligue tudo naquele cômodo', text: 'Antes de rearmar, desligue os aparelhos do cômodo afetado (chuveiro, microondas, ar-condicionado). O disjuntor caiu por sobrecarga — se religar com tudo ligado, cai de novo.', tip: 'Chuveiro elétrico é a principal causa de disjuntor caído em casa.' },
          { title: 'Rearme o disjuntor', text: 'Empurre a chavinha totalmente para baixo primeiro (posição OFF), depois totalmente para cima (posição ON). Se ficar no meio, não vai funcionar.' },
          { title: 'Se cair de novo, chame um eletricista', text: 'Se o disjuntor desarma repetidamente, tem problema real: fio danificado, curto ou circuito sobrecarregado. Não force religar seguidas vezes.', warn: 'Cheiro de queimado no quadro? Chame um profissional AGORA e não religue.' },
        ],
      },
      {
        id: 'trocar a tomada',
        title: 'Trocar uma tomada quebrada',
        summary: 'Troca simples que qualquer um faz — desde que desligue o disjuntor certo.',
        difficulty: 'medium',
        time: '15 min',
        imageUrl: 'image/tomada.png',
        imageAlt: 'Tomada elétrica',
        thumb: ART.outlet,
        materials: ['Tomada nova (10A ou 20A — conferir o padrão)', 'Chave de fenda', 'Fita isolante', 'Chave de teste (canetinha teste)'],
        steps: [
          { title: 'Desligue o disjuntor daquele cômodo', text: 'Vá no quadro e desligue a chave do circuito de tomadas do cômodo. Se não souber qual é, desligue o geral.', warn: 'JAMAIS mexa em tomada com o circuito ligado. Choque de 127V ou 220V pode ser fatal.' },
          { title: 'Confirme com a chave de teste', text: 'Encoste a chave de teste em cada furo da tomada. Ela não deve acender. Se acender, você desligou o disjuntor errado.', tip: 'Sem chave de teste? Plugue um abajur ligado antes de mexer — se não acender, está sem energia.' },
          { title: 'Retire a tampa e a tomada', text: 'Desatarraxe o parafuso central da tampa e puxe. Depois desatarraxe os dois parafusos que prendem a tomada à caixa. Puxe a tomada com cuidado para fora.', art: ART.outlet },
          { title: 'Observe e desconecte os fios', text: 'Você verá 3 fios: fase (preto ou vermelho), neutro (azul) e terra (verde ou verde-amarelo). ANTES de tirar, tire foto de como estão ligados.', tip: 'Se não tem fio terra (casa antiga), NÃO invente — use tomada 2 pinos ou chame eletricista para passar o terra.' },
          { title: 'Ligue os fios na tomada nova', text: 'Terra vai no borne do meio (marcado com T ou símbolo de terra). Fase e neutro vão nos dois laterais (não importa qual em qual, se for 127V). Aperte os parafusos com firmeza.' },
          { title: 'Encaixe, parafuse e teste', text: 'Empurre a tomada de volta na caixa, parafuse, coloque a tampa. Religue o disjuntor e teste com um aparelho pequeno (carregador, abajur) antes de plugar coisa cara.' },
        ],
      },
      {
        id: 'furar a parede',
        title: 'Furar parede com furadeira',
        summary: 'Escolher a broca certa, evitar canos e furar sem trincar o azulejo.',
        difficulty: 'medium',
        time: '15 min',
        imageUrl: 'image/furar.png',
        imageAlt: 'Furadeira em parede',
        thumb: ART.drill,
        materials: ['Furadeira (de impacto para alvenaria)', 'Broca do tamanho da bucha', 'Bucha e parafuso', 'Fita crepe', 'Lápis'],
        steps: [
          { title: 'Descubra o que passa dentro da parede', text: 'Como regra: NÃO fure na vertical acima nem abaixo de tomadas/interruptores (é aí que passa o fio). Também evite parede logo atrás de pia/vaso (canos).', warn: 'Furou e viu faísca = fio elétrico. Desligue o disjuntor imediatamente e chame um eletricista.' },
          { title: 'Escolha a broca certa', text: 'Alvenaria/concreto: broca com ponta reforçada (cor prata/dourada) + furadeira em modo IMPACTO. Madeira: broca para madeira, modo NORMAL. Azulejo: broca para vidro/cerâmica, modo NORMAL.', tip: 'Broca do MESMO diâmetro da bucha (bucha 6mm = broca 6mm).' },
          { title: 'Marque e cole fita crepe', text: 'Marque o ponto com lápis. Cole um X de fita crepe em cima — evita a broca "patinar" no começo e, em azulejo, impede trincar.', art: ART.drill },
          { title: 'Fure devagar no começo', text: 'Segure a furadeira reta (90° em relação à parede). Comece com rotação BAIXA só para "morder" a superfície. Depois acelere.' },
          { title: 'Profundidade certa', text: 'Fure só o tamanho da bucha + 5 mm. Marque a broca com fita antes para saber quando parar. Furos muito fundos não seguram melhor.' },
          { title: 'Coloque a bucha e o parafuso', text: 'Empurre a bucha até ficar rente à parede. Coloque o objeto a fixar (suporte, prateleira) e depois o parafuso. Aperte firme mas sem exagerar (arranca a bucha).' },
        ],
      },
    ],
  },
  {
    id: 'cozinha',
    name: 'Cozinha',
    icon: ICONS.pan,
    color: '#fde5d3',
    tasks: [
      {
        id: 'fazer arroz soltinho',
        title: 'Fazer arroz branco soltinho',
        summary: 'Receita básica infalível — a proporção certa e o segredo do refogado.',
        difficulty: 'easy',
        time: '20 min',
        imageUrl: 'image/arroz.png',
        imageAlt: 'Arroz cozido',
        thumb: ART.rice,
        materials: ['1 xícara de arroz (branco tipo 1)', '2 xícaras de água quente', '1 dente de alho picado', '1 colher (sopa) de óleo', 'Sal a gosto'],
        steps: [
          { title: 'Lave o arroz (opcional)', text: 'Coloque o arroz numa peneira e lave em água corrente até a água sair menos branca. Isso tira excesso de amido e ajuda a soltar. Deixe escorrer.', tip: 'Alguns cozinheiros pulam esse passo — o arroz fica mais cremoso, menos solto.' },
          { title: 'Refogue o alho', text: 'Numa panela média, aqueça o óleo em fogo médio. Adicione o alho picado e mexa por 30 segundos, só até dourar levemente. Cuidado para não queimar (fica amargo).' },
          { title: 'Adicione o arroz', text: 'Jogue o arroz na panela e mexa por 1 minuto, envolvendo todos os grãos no óleo. Isso "sela" o grão e é o segredo do soltinho.', art: ART.rice },
          { title: 'Ponha a água quente e o sal', text: 'Despeje as 2 xícaras de água quente (fervida à parte). Adicione 1 pitada boa de sal. Mexa uma vez só, para acertar o sal.', warn: 'Água FRIA baixa a temperatura da panela e o arroz empapa. Sempre água quente.' },
          { title: 'Fogo baixo e tampa parcial', text: 'Quando levantar fervura, abaixe para o mínimo e tampe deixando uma frestinha. Cozinhe por 10-12 minutos, sem mexer. Está pronto quando a água sumiu e aparecem "furinhos" na superfície.' },
          { title: 'Descanso final', text: 'Desligue o fogo e deixe tampado por mais 5 minutos. Depois solte com um garfo — nunca com colher, senão amassa.' },
        ],
      },
      {
        id: 'fazer ovo frito',
        title: 'Fritar um ovo perfeito',
        summary: 'Clara branca e firme, gema mole no centro — parece simples, mas tem técnica.',
        difficulty: 'easy',
        time: '5 min',
        imageUrl: 'image/ovo.webp',
        imageAlt: 'Ovo frito',
        thumb: ART.egg,
        materials: ['1 ovo fresco', '1 colher (chá) de óleo, manteiga ou azeite', 'Frigideira antiaderente pequena', 'Sal e pimenta'],
        steps: [
          { title: 'Quebre o ovo num prato antes', text: 'Não quebre direto na panela — se cair casca ou a gema estourar, você resolve fora do fogo.' },
          { title: 'Aqueça a frigideira em fogo MÉDIO-BAIXO', text: 'Óleo muito quente queima a parte de baixo antes da clara firmar. Deixe a gordura brilhar mas não fumegar.', tip: 'Manteiga dá mais sabor, mas queima rápido. Azeite ou óleo comum é mais fácil de controlar.' },
          { title: 'Deslize o ovo devagar', text: 'Escorregue o ovo do prato para a frigideira em um só movimento suave. A clara vai começar a firmar imediatamente.', art: ART.egg },
          { title: 'Espere 2 a 3 minutos', text: 'Não mexa. A clara vai ficar branca e as bordas levemente crocantes. A gema começa a firmar ao redor mas fica mole no meio.' },
          { title: 'Tempere e sirva', text: 'Sal só depois de firmar (senão a clara fica dura). Pimenta-do-reino, se gostar. Solte com uma espátula fina e sirva na hora.', tip: 'Quer a gema mais firme? Tampe a frigideira por 30 segundos no final — o vapor cozinha por cima.' },
        ],
      },
      {
        id: 'fazer cha',
        title: 'Preparar chá corretamente',
        summary: 'Cada tipo de chá tem uma temperatura e tempo. Fazer tudo com água fervente é erro comum.',
        difficulty: 'easy',
        time: '5 min',
        imageUrl: 'image/cha.png',
        imageAlt: 'Xícara de chá',
        thumb: ART.pan,
        materials: ['Chaleira ou panela', 'Água filtrada', 'Chá (sachê ou folha) da sua preferência', 'Xícara'],
        steps: [
          { title: 'Ferva a água filtrada', text: 'Água da torneira pode ter gosto de cloro. Use filtrada. Ferva em chaleira ou panela sem tampa (para o vapor sair e a água oxigenar).' },
          { title: 'Aguarde conforme o chá', text: '- Chá preto/mate: água fervendo (100°C).\n- Chá verde: espere 1 minuto após ferver (~80°C).\n- Chá branco/floral: espere 2 minutos (~70°C).', tip: 'Chá verde fica AMARGO se usar água fervendo — é o erro mais comum.' },
          { title: 'Coloque o chá na xícara e adicione a água', text: 'Sachê ou 1 colher de chá de folhas soltas para 200ml de água. Despeje a água por cima devagar.' },
          { title: 'Deixe infundir no tempo certo', text: '- Preto: 3-5 min\n- Verde: 2-3 min\n- Floral/frutas: 5-7 min\nDepois retire o sachê ou coe. Ficar mais tempo deixa amargo.' },
          { title: 'Adoce se quiser (mas prove antes)', text: 'Bons chás têm sabor delicado que o açúcar mascara. Prove sem antes. Mel combina melhor que açúcar refinado.' },
        ],
      },
      {
        id: 'macarrao',
        title: 'Cozinhar macarrão al dente',
        summary: 'Nada de macarrão empapado — proporção, tempo e o segredo do sal.',
        difficulty: 'easy',
        time: '15 min',
        imageUrl: 'image/macarrao.png',
        imageAlt: 'Macarrão preparado',
        thumb: ART.pasta,
        materials: ['500g de macarrão', '5 litros de água', '1 colher (sopa) rasa de sal grosso', 'Panela grande'],
        steps: [
          { title: 'Muita água, panela grande', text: 'Regra italiana: 1 litro de água para cada 100g de macarrão. Sem essa proporção, o macarrão gruda e a água engrossa demais.' },
          { title: 'Ferva primeiro, sal depois', text: 'Espere a água ferver em BORBULHÃO forte. Só então adicione o sal — 10 g por litro (1 colher rasa por litro). A água vai borbulhar mais forte por segundos.', tip: 'Sal na água fria demora mais para ferver e não muda o gosto. Sal ANTES de colocar o macarrão.' },
          { title: 'Nunca coloque óleo na água', text: 'Óleo na água NÃO impede o macarrão grudar — só impede o molho aderir depois. Se tiver água suficiente e mexer no início, não gruda.' },
          { title: 'Jogue o macarrão de uma vez', text: 'Coloque todo o macarrão de uma vez, mexa nos primeiros 30 segundos para não grudar entre si e no fundo.', art: ART.pasta },
          { title: 'Tempo: 2 minutos a menos do que diz o pacote', text: 'Al dente = firme no centro. Se o pacote diz 10 min, tire com 8. Vai finalizar no molho quente por mais 1-2 min.', tip: 'Prove um fio 1 minuto antes de escorrer. Deve ter uma resistência leve ao morder, sem gosto de cru.' },
          { title: 'Reserve uma xícara da água', text: 'ANTES de escorrer, tire uma xícara da água do cozimento. Ela tem amido e sal — na hora de misturar com o molho, adicione um pouco para o molho grudar perfeito na massa.' },
        ],
      },
      {
        id: 'feijao',
        title: 'Cozinhar feijão do zero',
        summary: 'Feijão gostoso, saindo caldo cremoso — do remolho até o refogado.',
        difficulty: 'easy',
        time: '1h30 (com remolho)',
        imageUrl: 'image/feijao.png',
        imageAlt: 'Feijão cozido',
        thumb: ART.feijao,
        materials: ['2 xícaras de feijão (carioca ou preto)', '6 xícaras de água', '2 dentes de alho', '1 cebola pequena', '2 folhas de louro', 'Óleo, sal, pimenta'],
        steps: [
          { title: 'Escolha e lave o feijão', text: 'Espalhe o feijão numa mesa clara. Tire pedrinhas, feijões escuros/quebrados e sujeira. Depois lave em água corrente 2 vezes.', warn: 'Uma pedrinha esquecida pode quebrar um dente. Não pule essa etapa.' },
          { title: 'Deixe de molho (ideal 8h ou noite toda)', text: 'Cubra com água (dedo de água acima do feijão) e deixe. Isso reduz o gás, deixa mais macio e diminui o tempo de cozimento pela metade. Se não tem tempo, pule — só demora mais.' },
          { title: 'Descarte a água do molho', text: 'Jogue fora a água do remolho (leva antinutrientes e o que causa gases). Enxágue o feijão de novo.' },
          { title: 'Cozinhe na pressão', text: 'Coloque o feijão na panela de pressão com 6 xícaras de água limpa e 1 folha de louro. Feche, ligue no fogo alto. Quando começar a chiar, abaixe para o mínimo e conte 20 min (com remolho) ou 40 min (sem).', art: ART.feijao, warn: 'Nunca abra a panela de pressão sem toda a pressão sair. Deixe esfriar ou passe água fria na tampa por fora.' },
          { title: 'Faça o refogado (tempero)', text: 'Enquanto o feijão descansa, numa frigideira aqueça 2 colheres de óleo, refogue cebola picadinha até dourar, depois alho amassado por 30 seg. Adicione a outra folha de louro. Sal e pimenta a gosto.' },
          { title: 'Misture e engrosse o caldo', text: 'Abra a pressão. Retire 1 concha de feijão sem caldo e amasse com garfo — devolve à panela. Adicione o refogado. Ferva sem tampa por 5 minutos, mexendo, até o caldo engrossar.' },
        ],
      },
    ],
  },
  {
    id: 'casa',
    name: 'Casa & Limpeza',
    icon: ICONS.house,
    color: '#f0e6f5',
    tasks: [
      {
        id: 'lavar a maquina',
        title: 'Lavar roupas na máquina',
        summary: 'Separar, dosar sabão certo e escolher o programa — muita gente erra e estraga peças.',
        difficulty: 'easy',
        time: '5 min de preparo',
        imageUrl: 'image/maquinalavar.png',
        imageAlt: 'Máquina de lavar roupas',
        thumb: ART.washer,
        materials: ['Sabão em pó ou líquido', 'Amaciante (opcional)', 'Sacos protetores para lingerie/roupas delicadas'],
        steps: [
          { title: 'Separe por cor e tipo', text: 'Faça 3 montinhos: brancas, claras/coloridas, escuras. Roupas delicadas e íntimas vão em saquinhos separados. Toalhas e lençóis lavam separado das roupas normais (soltam fiapos).' },
          { title: 'Cheque os bolsos', text: 'Guardanapos de papel, moedas, batons — tudo vira desastre na máquina. Vire bolsos, tire tudo.', warn: 'Papel dentro da máquina se desmancha e gruda em todas as peças. Nota mais 30 minutos de trabalho tirando fiapo.' },
          { title: 'Escolha o programa certo', text: 'Roupa comum: NORMAL ou DIÁRIO. Roupa suja pesada (jardim, óleo): PESADO. Delicadas (renda, lã): DELICADO. Cama e banho: CAMA E BANHO ou PESADO.', tip: 'Água fria (frio) preserva a cor e serve para quase tudo. Água quente só para brancas ou muita sujeira.' },
          { title: 'Dose o sabão certo', text: 'MENOS é MAIS. A colher-medida ou tampinha do produto já indica. Sabão em excesso deixa resíduo, incomoda a pele e desregula a máquina. Máquina pequena: 1 medida. Grande e cheia: 2.' },
          { title: 'Não sobrecarregue', text: 'A máquina precisa ter espaço para as roupas se movimentarem. Se está enfiada até em cima, encolha a quantidade.', art: ART.washer },
          { title: 'Tire assim que terminar', text: 'Deixar molhado dentro por horas causa mofo e mau cheiro. Estenda ao ar livre para secar naturalmente sempre que possível.' },
        ],
      },
      {
        id: 'pendurar um quadro',
        title: 'Pendurar um quadro reto na parede',
        summary: 'Nada de martelar no chute — em 5 minutos você pendura reto e no lugar certo.',
        difficulty: 'easy',
        time: '10 min',
        imageUrl: 'image/quadro.png',
        imageAlt: 'Quadro pendurado na parede',
        thumb: ART.hammer,
        materials: ['Prego, gancho ou bucha+parafuso (depende do peso)', 'Martelo ou furadeira', 'Lápis', 'Fita métrica', 'Um nível (ou app de nível no celular)'],
        steps: [
          { title: 'Meça a altura ideal', text: 'A regra é: centro do quadro à altura dos olhos (~1,55 m do chão). Acima de móvel (sofá, aparador): 15 a 25 cm acima do encosto.' },
          { title: 'Descubra o tipo de parede', text: 'Bata com o dedo: som ÔCO = parede de gesso (drywall) — precisa bucha própria de gesso. Som MACIÇO = alvenaria — bucha comum ou prego direto.', tip: 'Quadro leve (<2kg) em alvenaria: um prego 17x21 já segura.' },
          { title: 'Marque o ponto exato', text: 'Segure o quadro no lugar desejado. Marque com lápis onde ficará o topo. Depois meça a distância do topo do quadro até o ponto onde a fixação encosta (arame/gancho atrás) e desça essa medida no lápis. Esse é o ponto do prego.', art: ART.hammer },
          { title: 'Faça o furo ou bata o prego', text: 'Alvenaria + quadro leve: martele o prego em ângulo de 45° para cima. Alvenaria + quadro pesado: fure com broca, coloque bucha e parafuso. Gesso: bucha específica de drywall (borboleta ou expansiva).' },
          { title: 'Pendure e nivele', text: 'Pendure o quadro. Use o nível (ou o app do celular) em cima da moldura. Ajuste puxando um lado até a bolha ficar no centro.' },
          { title: 'Múltiplos quadros?', text: 'Recorte papel do tamanho de cada um, cole na parede com fita crepe até achar a composição, depois fure direto no papel. Método usado por decorador.' },
        ],
      },
      {
        id: 'organizara a geladeira',
        title: 'Organizar a geladeira certo',
        summary: 'Cada zona tem temperatura diferente — colocar no lugar errado estraga comida antes.',
        difficulty: 'easy',
        time: '20 min',
        imageUrl: 'image/geladeira.png',
        imageAlt: 'Geladeira organizada',
        thumb: ART.fridge,
        materials: ['Panos de limpeza', 'Recipientes com tampa', 'Um pouco de bicarbonato (elimina odor)'],
        steps: [
          { title: 'Esvazie e limpe primeiro', text: 'Tire tudo e verifique validade. Jogue fora o que passou. Limpe as prateleiras com água morna + detergente neutro. Passe pano seco depois.' },
          { title: 'Prateleira superior — mais quente', text: 'Fica na parte mais quente da geladeira. Coloque aqui: sobras cozidas, alimentos prontos, iogurtes, sobremesas. Nada de carne crua.', art: ART.fridge },
          { title: 'Prateleira do meio — laticínios', text: 'Queijos, manteiga, leite aberto. Temperatura estável e ideal para produtos que estragam rápido.' },
          { title: 'Prateleira de baixo — carnes cruas', text: 'É o local MAIS FRIO. Peixes, carnes cruas e frango vão aqui, sempre em pote fechado (para não pingar em outros alimentos).', warn: 'Carne crua acima de comida pronta pode contaminar por gotejamento. Sempre embaixo.' },
          { title: 'Gaveta de baixo — verduras e frutas', text: 'Gaveta tem umidade controlada. Guarde separado: frutas de um lado, verduras do outro (algumas frutas soltam gás que amadurece verduras rápido).' },
          { title: 'Porta — o que resiste a variação', text: 'É a parte MENOS FRIA (abre e fecha o tempo todo). Bom para: molhos, geleias, bebidas, ovos (se sua caixa vier de lá). NUNCA guarde leite nem carne na porta.', tip: 'Deixe uma tigelinha com bicarbonato no fundo da geladeira — absorve cheiro por até 2 meses.' },
        ],
      },
      {
        id: 'identificar um mofo',
        title: 'Identificar e remover mofo em casa',
        summary: 'Mofo passa de "só umidade" para problema de saúde. Como remover e prevenir.',
        difficulty: 'easy',
        time: '30 min',
        imageUrl: 'image/mofo.png',
        imageAlt: 'Mofo em ambiente doméstico',
        thumb: ART.mold,
        materials: ['Água sanitária ou vinagre branco', 'Bicarbonato', 'Escova velha', 'Luvas e máscara', 'Pano seco'],
        steps: [
          { title: 'Use proteção', text: 'Coloque luvas, máscara e óculos antes de começar. Esporos de mofo em suspensão irritam olhos, garganta e podem causar alergia respiratória séria.', warn: 'Nunca misture água sanitária com amônia ou vinagre — libera gás tóxico.' },
          { title: 'Ventile o ambiente', text: 'Abra todas as janelas e portas. Se possível, ligue um ventilador virado para fora. Nunca limpe mofo em ambiente fechado.' },
          { title: 'Superfícies duras (azulejo, plástico, vidro)', text: 'Misture 1 parte de água sanitária com 4 partes de água. Borrife, deixe 10 min, esfregue com escova, enxágue.', art: ART.mold },
          { title: 'Paredes pintadas', text: 'Vinagre branco puro (não use água sanitária — descolora a tinta). Borrife, aguarde 15 min, esfregue leve com pano, seque.' },
          { title: 'Tecidos (cortinas, roupas)', text: 'Sol direto por 2 horas mata mofo em tecidos. Depois lave com sabão + 1 xícara de vinagre no enxágue.' },
          { title: 'Prevenção — a parte mais importante', text: 'Mofo vive de UMIDADE. Deixe janelas abertas por 30 min/dia, não estenda roupa dentro de casa, use desumidificador em ambientes fechados. Se voltar sempre no mesmo lugar, tem infiltração — chame um pedreiro.', tip: 'Mofo com mais de 1m² ou dentro de parede pede especialista, não faça sozinho.' },
        ],
      },
    ],
  },
  {
    id: 'tecnologia',
    name: 'Tecnologia',
    icon: ICONS.wifi,
    color: '#e6f5ef',
    tasks: [
      {
        id: 'resetar o wifi',
        title: 'Resetar o roteador Wi-Fi',
        summary: 'Internet caindo, lenta ou "sem acesso" — 80% das vezes reiniciar resolve.',
        difficulty: 'easy',
        time: '5 min',
        imageUrl: 'image/moldem.png',
        imageAlt: 'Modem ou roteador Wi-Fi',
        thumb: ART.router,
        materials: ['Só o roteador'],
        steps: [
          { title: 'Localize o roteador', text: 'É a caixinha com antenas e luzes piscando, geralmente perto da entrada da internet. Alguns têm modem e roteador na mesma caixa.', art: ART.router },
          { title: 'Desligue da tomada', text: 'Tire o cabo de energia do roteador. NÃO só aperte o botão de liga/desliga — precisa cortar energia por completo.' },
          { title: 'Espere 30 segundos', text: 'Não pule essa parte. O roteador precisa desligar completamente para "esquecer" as conexões travadas. 30 segundos é o mínimo — 1 minuto é ideal.', tip: 'Se seu provedor deu modem separado, desligue os dois e religue o modem PRIMEIRO, depois o roteador (30 seg depois).' },
          { title: 'Religue e aguarde', text: 'Coloque o cabo de volta. As luzes vão piscar por 1 a 2 minutos até estabilizar. Espere todas ficarem verdes/azuis fixas antes de testar.' },
          { title: 'Se não resolver, reset de fábrica', text: 'Atrás do roteador tem um furinho com o botão RESET. Segure com um clipe por 10 segundos. Cuidado: isso apaga sua senha do Wi-Fi — vai precisar reconfigurar (senha padrão fica embaixo do aparelho).', warn: 'Não faça reset de fábrica se não souber a senha do provedor (PPPoE). Você pode ficar sem internet até chamar o suporte.' },
        ],
      },
      {
        id: 'senha forte',
        title: 'Criar e gerenciar senhas fortes',
        summary: '"123456" e "nome+ano" são invadidos em segundos. Como criar senhas realmente seguras.',
        difficulty: 'easy',
        time: '10 min',
        imageUrl: 'image/seguro.png',
        imageAlt: 'Segurança de senha',
        thumb: ART.password,
        materials: ['Um gerenciador de senhas grátis (Bitwarden, KeePass, ou o do seu navegador)'],
        steps: [
          { title: 'Entenda o que é senha forte', text: 'Mínimo 12 caracteres, misturando maiúsculas, minúsculas, números e símbolos. Sem palavras óbvias (nome, data, cidade). Sem sequências (abc, 123).', tip: 'Ex ruim: Joao1990. Ex bom: Chuva#Rosa42-mira!' },
          { title: 'Método da frase secreta', text: 'Pegue uma frase que só você sabe e transforme. "Meu cachorro come 3 vezes por dia!" vira Mccc3vpd! — fácil de lembrar, quase impossível de adivinhar.', art: ART.password },
          { title: 'NUNCA reutilize senha', text: 'Cada site precisa ter senha única. Se um site é hackeado (acontece toda semana), sua senha vaza e criminosos testam ela em outros — Netflix, banco, e-mail.' },
          { title: 'Use um gerenciador de senhas', text: 'Você só precisa decorar UMA senha mestre. O gerenciador cria e guarda o resto. Bitwarden (grátis) e o gerenciador do Chrome/Firefox são bons pontos de partida.', tip: 'Anote a senha mestre em um papel e guarde em local físico seguro (não no computador).' },
          { title: 'Ative autenticação de 2 fatores (2FA)', text: 'Nos serviços importantes (e-mail, banco, redes sociais): ative o "verificação em 2 etapas". Com 2FA, mesmo se descobrirem sua senha, não entram sem o código do celular.', warn: 'PRIORIDADE MÁXIMA: proteja seu e-mail principal com 2FA. Se hackearem seu e-mail, resetam a senha de tudo.' },
          { title: 'Confira se sua senha vazou', text: 'Entre em haveibeenpwned.com (site oficial de segurança). Digite seu e-mail — mostra em quais vazamentos conhecidos ele apareceu. Troque as senhas dos serviços listados.' },
        ],
      },
      {
        id: 'reconhecer golpes',
        title: 'Reconhecer golpes online (phishing)',
        summary: 'SMS falso do banco, e-mail de "prêmio", link suspeito no WhatsApp — como identificar.',
        difficulty: 'easy',
        time: '5 min de leitura',
        imageUrl: 'image/virus.png',
        imageAlt: 'Proteção contra golpes online',
        thumb: ART.phishing,
        materials: ['Atenção — a única ferramenta necessária'],
        steps: [
          { title: 'Regra de ouro: senso de urgência = fraude', text: '"Sua conta será BLOQUEADA em 24h!". "APROVEITE agora ou perde!". "URGENTE, é seu filho!". Bandidos usam pressa para você agir sem pensar. Banco de verdade NÃO ameaça bloquear por SMS.' },
          { title: 'Confira o endereço do link', text: 'Passe o mouse (no PC) ou segure o dedo (no celular) sobre o link ANTES de clicar. Veja o URL que aparece. bancoo-brasii.com não é bradesco.com.br.', art: ART.phishing, tip: 'Fraudes usam letras trocadas: 0 no lugar de o, l no lugar de i, hifens estranhos. Sempre digite você mesmo o site oficial.' },
          { title: 'Nunca clique em link de banco/governo por SMS', text: 'Banco, Receita e INSS NUNCA mandam link por SMS ou WhatsApp. Se receber, abra o app do banco você mesmo. Se tiver algo urgente, aparece lá.' },
          { title: 'Ligações fingindo ser o banco', text: 'Se alguém liga dizendo ser do banco pedindo senha, código, ou para transferir para "conta segura" — desligue. Ligue de volta pelo número que está NO SEU CARTÃO, nunca pelo que a pessoa deu.', warn: 'Banco NUNCA pede senha por telefone. NUNCA. Se pedir, é golpe.' },
          { title: 'WhatsApp clonado — "sou seu filho, novo número"', text: 'Golpe clássico: mensagem de número novo se passando por parente pedindo Pix. Ligue para o número ANTIGO da pessoa para confirmar. Ou pergunte algo que só ela sabe.' },
          { title: 'Achou que caiu no golpe? Aja rápido', text: 'Se transferiu Pix: registre BO online e ligue no banco para pedir MED (Mecanismo Especial de Devolução). Se digitou senha: troque IMEDIATAMENTE em todos os lugares onde usa aquela senha.' },
        ],
      },
    ],
  },
  {
    id: 'emergencias',
    name: 'Emergências',
    icon: ICONS.aid,
    color: '#fde3dc',
    tasks: [
      {
        id: 'engasgo',
        title: 'Socorrer alguém engasgado (Manobra de Heimlich)',
        summary: 'Alguém não consegue tossir, respirar ou falar após engolir algo. Aja em segundos.',
        difficulty: 'hard',
        time: 'segundos',
        imageUrl: 'image/engasgo.png',
        imageAlt: 'Socorro para engasgamento',
        thumb: ART.heimlich,
        materials: ['Apenas você'],
        steps: [
          { title: 'Confirme o engasgo', text: 'Pergunte: "Você está engasgado?" Se a pessoa TOSSE E FALA, deixe-a tossir — a tosse é a maneira mais eficiente do próprio corpo. NÃO faça a manobra.', warn: 'Só faça a manobra se a pessoa NÃO CONSEGUE tossir, falar ou respirar. Sinal universal: mão no pescoço.' },
          { title: 'Peça para alguém chamar 192 (SAMU)', text: 'Se tiver outra pessoa, mande chamar imediatamente. Se estiver sozinho e a pessoa perder consciência, chame antes de continuar.' },
          { title: 'Posicione-se atrás da pessoa', text: 'Fique em pé atrás dela. Passe os braços por baixo dos dela e envolva o abdômen (entre o umbigo e o osso do peito).', art: ART.heimlich },
          { title: 'Faça a compressão em J', text: 'Feche uma mão em punho, encaixe o polegar no abdômen (dedão dedos virado para dentro, acima do umbigo). Segure com a outra mão. Faça um puxão firme para DENTRO e para CIMA, formando um J.', tip: 'É força mesmo. Cinco compressões seguidas. Não bata nas costas.' },
          { title: 'Repita até desobstruir ou chegar socorro', text: 'Continue ciclos de 5 compressões até o objeto sair ou a pessoa começar a respirar. Se ela desmaiar, deite-a e comece RCP (compressões torácicas) e continue chamando socorro.' },
          { title: 'Depois: leve ao pronto-socorro', text: 'Mesmo se o objeto saiu e a pessoa parece bem, procure atendimento médico — pode ter machucado costelas ou órgãos internos com a manobra.' },
        ],
      },
      {
        id: 'corte',
        title: 'Estancar um pequeno corte',
        summary: 'Corte de faca, vidro ou tesoura em casa — o que fazer nos 5 primeiros minutos.',
        difficulty: 'easy',
        time: '10 min',
        imageUrl: 'image/curativo.png',
        imageAlt: 'Curativo para pequeno corte',
        thumb: ART.cut,
        materials: ['Água limpa', 'Gaze ou pano limpo (nunca algodão direto)', 'Sabonete neutro', 'Curativo/band-aid', 'Antisséptico (soro fisiológico ou clorexidina)'],
        steps: [
          { title: 'Pressione para estancar', text: 'Antes de qualquer coisa, faça pressão firme com um pano ou gaze limpa direto no corte por pelo menos 5 minutos SEM tirar para "ver como está". Tirar rompe o coágulo que está começando a se formar.', art: ART.cut, warn: 'Sangue jorrando em jato, corte fundo (vê gordura ou músculo), ou corte com mais de 2 cm — vá para emergência. Continue pressionando no caminho.' },
          { title: 'Lave com água corrente', text: 'Depois de estancar, lave o local com água corrente limpa por 1 a 2 minutos. Se tem sujeira/detrito, use sabonete neutro ao redor (não em cima da ferida aberta).' },
          { title: 'Desinfete', text: 'Aplique soro fisiológico ou clorexidina aquosa. Evite álcool e água oxigenada — machucam o tecido novo e atrasam a cicatrização.', tip: 'Iodo (Povidine) só se não tiver alternativa e por curto tempo.' },
          { title: 'Cubra com curativo', text: 'Seque ao redor (não em cima). Cubra com band-aid ou gaze + esparadrapo. Troque o curativo pelo menos uma vez por dia ou se molhar/sujar.' },
          { title: 'Observe nos próximos dias', text: 'Sinais de infecção que pedem médico: vermelhidão que espalha, pus, calor, dor crescendo, febre. Se tiver, procure médico.' },
          { title: 'Vacina antitetânica', text: 'Ferimento causado por objeto sujo/enferrujado ou você não sabe quando tomou a última? Reforço de tétano em até 72 horas.' },
        ],
      },
      {
        id: 'queimadura',
        title: 'Tratar uma queimadura',
        summary: 'Óleo quente, forno, ferro de passar — primeiros passos que decidem se vai deixar cicatriz.',
        difficulty: 'medium',
        time: '15 min',
        imageUrl: 'image/queimadura.png',
        imageAlt: 'Cuidados com queimadura',
        thumb: ART.aid,
        materials: ['Água corrente FRIA (não gelada)', 'Gaze estéril ou pano limpo', 'Filme plástico (para queimaduras grandes)'],
        steps: [
          { title: 'Afaste do calor imediatamente', text: 'Tire a pessoa da fonte de calor. Se roupa pegou fogo: PARE, DEITE, ROLE no chão (não corra, o vento aumenta o fogo).' },
          { title: 'Água CORRENTE fria por 20 minutos', text: 'Coloque a queimadura embaixo de água corrente FRIA (não gelada, não com gelo) por PELO MENOS 20 minutos. Esse é o passo que mais reduz a lesão profunda.', warn: 'Gelo direto na pele piora — congela e mata mais tecido. Água da torneira normal é o certo.' },
          { title: 'NÃO passe pasta de dente, manteiga ou pó de café', text: 'Nenhuma "receita de vó" funciona — todas contaminam a ferida e pioram. A única coisa que ajuda nos primeiros minutos é a ÁGUA.', tip: 'Nunca fure bolha. A bolha é a proteção natural da pele nova por baixo. Furando, entra bactéria.' },
          { title: 'Avalie o tamanho', text: '1º grau (só vermelha, dói): trata em casa. 2º grau (bolhas): pequena (menor que a palma da mão), pode cuidar em casa; grande, procure médico. 3º grau (pele branca, marrom ou preta, sem dor): SEMPRE emergência.' },
          { title: 'Cubra com pano LIMPO ou filme plástico', text: 'Depois dos 20 min de água, cubra suavemente. Filme plástico (PVC de cozinha) é ideal para queimadura grande: não gruda e mantém úmido até chegar ao hospital.' },
          { title: 'Quando ir ao pronto-socorro', text: 'Queimadura em: rosto, mãos, pés, genitais, articulações. Queimadura maior que a palma da mão da pessoa. Queimadura em criança ou idoso. Queimadura elétrica (sempre). Queimadura por químico.' },
        ],
      },
      {
        id: 'febre alta',
        title: 'Baixar febre alta',
        summary: 'Termômetro acima de 39°C precisa de intervenção antes do médico chegar.',
        difficulty: 'easy',
        time: '30 min',
        imageUrl: 'image/dor.png',
        imageAlt: 'Alívio de febre e dor',
        thumb: ART.aid,
        materials: ['Termômetro', 'Água morna (não gelada)', 'Panos', 'Antitérmico (paracetamol/dipirona) — dose correta para idade/peso'],
        steps: [
          { title: 'Meça a temperatura corretamente', text: 'Axila: normal até 37,5°C, febre acima. Deixe o termômetro digital por 2 min ou até apitar, com o braço bem fechado.', warn: 'Bebê < 3 meses com qualquer febre = pronto-socorro imediato. Sem exceção.' },
          { title: 'Tire o excesso de roupa', text: 'Deixe apenas roupa leve. Cobertor pesado ou várias camadas pioram tudo. Ambiente ventilado (janela aberta ou ventilador longe, não direto no corpo).' },
          { title: 'Ofereça líquidos', text: 'Febre desidrata rápido. Ofereça água, água de coco, chá morno, soro caseiro em pequenos goles a cada 10 min. Não force grandes volumes de uma vez.' },
          { title: 'Compressa MORNA (não gelada)', text: 'Molhe um pano em água MORNA (temperatura corporal, ~35°C). Passe pela testa, nuca, axilas, virilha e dobra dos joelhos. Refaça a cada 10 min.', tip: 'Compressa gelada ou banho frio dá tremedeira, e tremedeira AUMENTA a temperatura. Sempre morna.' },
          { title: 'Antitérmico com cuidado na dose', text: 'Adulto: paracetamol 500-750mg ou dipirona 500mg. Crianças: peso é essencial — 10-15mg/kg. Espere 6 horas antes de repetir. Anote horário para não errar dose.', warn: 'Nunca dê aspirina para criança com febre viral (risco de síndrome de Reye).' },
          { title: 'Quando ir ao PS urgente', text: 'Febre acima de 39,5°C que não baixa após 1h. Confusão mental, sonolência excessiva, rigidez de nuca, manchas roxas na pele, dificuldade para respirar. Bebê ou idoso: procure mais rápido.' },
        ],
      },
    ],
  },
  {
    id: 'sobrevivencia',
    name: 'Sobrevivência na Natureza',
    icon: ICONS.compass,
    color: '#e6f5ef',
    tasks: [
      {
        id: 'purificar a agua',
        title: 'Purificar água na natureza',
        summary: 'Rio, lago, poça — nenhuma água natural é segura sem tratamento. Métodos possíveis sem equipamento.',
        difficulty: 'medium',
        time: '30 min',
        imageUrl: 'image/filtrar.png',
        imageAlt: 'Filtragem de água',
        thumb: ART.water,
        materials: ['Recipiente (garrafa, panela)', 'Fogo ou sol forte', 'Pano limpo (t-shirt, meia limpa)', 'Areia + carvão + pedrinhas (para filtro improvisado)'],
        steps: [
          { title: 'Priorize a fonte menos ruim', text: 'Melhor: nascente de rocha, água pingando de folhas. Depois: rio rápido em altitude. Pior: lago parado, poça. NUNCA use água perto de fezes de animais, cadáveres ou plantação (agrotóxico).' },
          { title: 'Coe as sujeiras grossas', text: 'Passe a água em pano limpo (camiseta serve). Isso tira folhas, insetos, areia — não mata germes ainda, mas prepara para o próximo passo.', tip: 'Sem pano? Faça um filtro em garrafa PET cortada: areia fina no fundo, carvão de fogueira no meio, pedrinhas em cima.' },
          { title: 'Ferver — método mais confiável', text: 'Ferva a água por PELO MENOS 1 minuto em fervura forte. Acima de 2.000m de altitude: 3 minutos (água ferve mais frio).', art: ART.boilwater, warn: 'Água só clara não significa segura. Bactérias e vírus são invisíveis. Ferva ou trate SEMPRE.' },
          { title: 'Sem fogo? Método SODIS (solar)', text: 'Encha garrafa PET transparente com água (já filtrada), deixe deitada em local com sol DIRETO por 6 horas (dia claro) ou 2 dias (nublado). O UV solar mata a maioria dos micróbios.' },
          { title: 'Sem fogo nem sol? Cloro', text: '2 gotas de água sanitária comum (2,5%) por litro de água. Mexa, espere 30 minutos. Deve sentir cheirinho leve de cloro — se não sentir, adicione mais 2 gotas e espere mais 15 min.' },
          { title: 'Coleta de orvalho / chuva', text: 'Chuva é o mais limpo. Colete estendendo lonas, roupas. Orvalho de amanhecer: passe um pano em folhas grandes e esprema no recipiente. Cada gota conta.' },
        ],
      },
      {
        id: 'nos básicos',
        title: 'Dar 3 nós essenciais',
        summary: 'Lais-de-guia, volta do fiel e nó cego — servem para 90% das situações.',
        difficulty: 'medium',
        time: '15 min',
        imageUrl: 'image/nos.png',
        imageAlt: 'Nós com corda',
        thumb: ART.knot,
        materials: ['Uma corda ou cordão de pelo menos 1 metro para praticar'],
        steps: [
          { title: 'Nó cego (o mais simples)', text: 'Passe a ponta por cima da outra parte, contorne, e enfie por dentro do laço formado. É o nó que todo mundo dá em cadarço. Serve para: fazer um "batente" para não deslizar. NÃO se abre depois de puxado — só corte.' },
          { title: 'Lais-de-guia — a "rainha dos nós"', text: 'Faz alça FIXA que não aperta nem escorrega, mas desfaz fácil. Uso: içar alguém, prender a algo, resgate. "Coelho sai do buraco, dá a volta na árvore e volta para o buraco."', art: ART.knot },
          { title: 'Volta do fiel — para amarrar em objetos', text: 'Duas voltas cruzadas no objeto (poste, tronco, mastro). Trava sob tensão. Uso: prender lona em varal, animal em árvore, barco em ancoradouro.', tip: 'Se a corda vai receber peso variado, dê o nó em pé — quanto mais puxa, mais trava.' },
          { title: 'Nó direito (para juntar duas cordas do mesmo tamanho)', text: 'Cruze as duas pontas em X. Depois volte a fazer X invertido. "Direita sobre esquerda, esquerda sobre direita." Não use para juntar cordas de tamanhos diferentes — escorrega.', warn: 'NUNCA use nó direito para escalada ou peso de vida. É pouco confiável para segurança.' },
          { title: 'Pratique 20 vezes cada', text: 'Nó só serve quando você faz sem pensar. Treine cada nó 20 vezes, depois de olhos fechados. Emergência não avisa e não tem tempo de lembrar tutorial.' },
        ],
      },
      {
        id: 'abrigo de emergência',
        title: 'Montar um abrigo de emergência',
        summary: 'Perdeu-se e vai anoitecer? Como se proteger de chuva e frio com o que tem.',
        difficulty: 'medium',
        time: '1h',
        imageUrl: 'image/cabana.png',
        imageAlt: 'Abrigo de emergência na natureza',
        thumb: ART.shelter,
        materials: ['Faca ou pedra afiada', 'Galhos longos e retos', 'Folhas grandes ou galhos com folhas', 'Cordas ou cipós'],
        steps: [
          { title: 'Escolha o lugar certo', text: 'Terreno alto (não baixio: chuva forma poça, animais peçonhentos concentram). Perto de árvore VIVA e forte. NUNCA embaixo de galhos secos (podem cair). Longe de trilha de animal grande.', warn: 'Não durma em beira de rio — chuva rio acima enche em minutos. Suba pelo menos 5 metros acima do nível atual.' },
          { title: 'Abrigo do tipo "cunha"', text: 'Encoste um galho longo (viga central) entre uma árvore baixa e o chão, formando uma rampa. Esse é o "espinhaço" do abrigo.', art: ART.shelter },
          { title: 'Costelas laterais', text: 'Encoste galhos menores em ângulo dos dois lados da viga, formando um telhado em V. Deixe uma abertura numa das pontas para entrar/sair. Cabeça vai para o lado FECHADO.' },
          { title: 'Cobertura (o mais importante)', text: 'Cubra tudo com folhas grandes, samambaias, galhos com folhas — camada bem grossa, quanto mais melhor. Pense em telhado mesmo, começando de baixo pra cima (como telha, para chuva escorrer).', tip: 'Camada de 20-30 cm de folhagem impede quase toda chuva.' },
          { title: 'Isolamento do chão (crítico)', text: 'O chão rouba MUITO mais calor que o ar. Forre o interior com 15-20 cm de folhas secas, capim, roupa extra. Nunca durma diretamente na terra.' },
          { title: 'Fogo em frente à abertura', text: 'Se tiver como fazer fogo, mantenha do lado aberto (calor entra, fumaça sai). Coloque uma pedra grande ou tronco do outro lado do fogo — reflete calor para dentro do abrigo.' },
        ],
      },
      {
        id: 'fazer fogueira',
        title: 'Acender fogo sem isqueiro',
        summary: 'Isqueiro molhou ou acabou? Método com fricção, lupa e faísca de pedra.',
        difficulty: 'hard',
        time: '30-90 min',
        imageUrl: 'image/fogueira.png',
        imageAlt: 'Fogueira acesa',
        thumb: ART.fireart,
        materials: ['Madeira seca (galhos, gravetos, palito)', 'Isca (algodão, folhas secas, buchas de fibra)', 'Lupa OU pedra ferro OU dois pedaços de madeira dura'],
        steps: [
          { title: 'Prepare a isca antes de tudo', text: 'Junte 3 tamanhos: (1) ISCA fina como fio de cabelo (algodão desfiado, folha seca esmigalhada, casca de árvore fibrosa) — pega faísca. (2) GRAVETINHOS finos como palito. (3) GRAVETOS finos como dedo. Não adianta faísca se não tem para onde ir.', tip: 'Bola de algodão + vaselina pega fogo instantaneamente. Vale a pena carregar no kit.' },
          { title: 'Monte a estrutura', text: 'Faça uma "tenda" com os gravetos finos apoiados uns nos outros, com espaço para o ar circular. Isca fina bem no meio. Gravetos maiores por perto, prontos para colocar quando pegar.', art: ART.fireart, warn: 'Nunca sopre a chama fraca de cima — apaga. Sopre pela BASE, direcionando ar para debaixo da chama.' },
          { title: 'Método 1: Lupa (dia de sol)', text: 'Segure a lupa acima da isca. Ajuste a distância até formar o menor ponto brilhante possível na isca. Mantenha imóvel — em 30-60 seg começa a soltar fumacinha. Sopre suave, chama nasce.' },
          { title: 'Método 2: Faísca de pedra (ferro + sílex)', text: 'Firestarter magnesium (kit sobrevivência) ou aço + sílex natural. Raspe firme e rápido, direcionando as faíscas para dentro da isca. Precisa PRÁTICA.' },
          { title: 'Método 3: Fricção (mais difícil)', text: 'Método do arco: madeira mole (base) + eixo giratório + arco improvisado (galho + cordinha). O atrito gera pó preto quente que forma um "carvãozinho". Só peça isso em último caso — leva de 30 min a 2 horas.' },
          { title: 'Alimente do menor pro maior', text: 'Quando a chama pegar: primeiro só gravetinhos, depois de estabilizar coloca gravetos médios, depois lenha maior. Colocar lenha grande no começo apaga tudo.' },
        ],
      },
      {
        id: 'orientação',
        title: 'Se orientar sem bússola nem GPS',
        summary: 'Perdido e sem sinal? O sol, as estrelas e a natureza mostram os pontos cardeais.',
        difficulty: 'medium',
        time: 'variável',
        imageUrl: 'image/localizar.png',
        imageAlt: 'Orientação e localização',
        thumb: ART.bearing,
        materials: ['Um relógio analógico (útil, não essencial)', 'Uma vareta reta', 'O céu'],
        steps: [
          { title: 'Regra básica do sol', text: 'No Brasil (hemisfério sul), o sol NASCE aproximadamente a LESTE, ao meio-dia está mais para o NORTE, e se PÕE a OESTE. Manhã: sombra aponta para o oeste. Tarde: sombra aponta para o leste.' },
          { title: 'Método da vareta (mais preciso)', text: 'Fixe uma vareta reta na vertical no chão em local ensolarado. Marque a ponta da sombra com pedrinha. Espere 30 minutos e marque de novo. Ligue os dois pontos: essa linha é LESTE-OESTE. O primeiro ponto é oeste, o segundo é leste.', art: ART.bearing, tip: 'Ficando de frente para o leste, o norte é à sua esquerda e o sul à sua direita.' },
          { title: 'Método do relógio (analógico)', text: 'Ponha o relógio deitado, ponteiro DAS HORAS apontando para o sol. Divida ao meio o ângulo entre o ponteiro e a marca do 12h — essa direção aponta para o NORTE (no hemisfério sul).' },
          { title: 'À noite: Cruzeiro do Sul', text: 'Ache o Cruzeiro do Sul (4 estrelas em forma de cruz + 2 apontadoras). Prolongue mentalmente a haste maior da cruz 4,5 vezes para baixo. Esse ponto no horizonte é o SUL.' },
          { title: 'Sinais da natureza', text: 'Tronco de árvores em campo aberto: musgo cresce mais no lado com MENOS sol (lado sul, no BR). Formigueiros costumam ter abertura virada para o LESTE (evitar chuva vinda do oeste). Não são infalíveis — combine sinais.' },
          { title: 'Se perdeu, PARE', text: 'Regra STOP: Stop (pare) — Think (pense) — Observe — Plan (planeje). Continue andando ao acaso PIORA. Faça sinal (fumaça, cor viva, pilhas de pedra) e fique próximo de rio/trilha, que levam à civilização.', warn: 'Se souber que alguém sabe onde você foi, ficar parado facilita muito o resgate.' },
        ],
      },
      {
        id: 'plantas comestiveis',
        title: 'Teste de planta comestível',
        summary: 'Sem certeza absoluta, uma planta pode matar em horas. Método científico para reduzir risco.',
        difficulty: 'hard',
        time: '24 horas',
        imageUrl: 'image/fruta.png',
        imageAlt: 'Planta ou fruta comestível',
        thumb: ART.compass,
        materials: ['Uma planta desconhecida', 'Muita paciência'],
        steps: [
          { title: 'Regra geral: NA DÚVIDA, NÃO COMA', text: 'Fome de 3-5 dias não mata adulto saudável. Planta errada mata em horas. Sempre prefira ficar com fome a arriscar.', warn: 'Cogumelos: NUNCA teste. Toxinas de vários cogumelos mortais não dão sintoma nas primeiras 24h — quando aparece, já destruíram fígado.' },
          { title: 'Descarte automaticamente', text: 'Rejeite plantas com: seiva branca leitosa, cheiro de amêndoa amarga, espinhos exagerados, formato de umbela (parece salsa selvagem = pode ser cicuta). Frutas roxas/pretas = 90% chance de ser tóxica.' },
          { title: 'Teste de contato — pele', text: 'Esfregue folha esmagada no interior do pulso. Espere 15 min. Vermelhidão, coceira, bolha? Descarte a planta.' },
          { title: 'Teste de contato — lábio', text: 'Encoste um pedacinho da planta no lábio inferior por 3 min. Ardência, dormência, gosto muito amargo ou sabão? Descarte.' },
          { title: 'Teste da boca (sem engolir)', text: 'Coloque pedacinho pequeno na língua por 15 min. Não engula. Qualquer sensação estranha (queimor, dormência, gosto de metal): cuspa, enxágue muito e descarte.' },
          { title: 'Se passou de tudo — pequena porção', text: 'Coma um pedaço pequeno (colher de chá). ESPERE 8 HORAS SEM COMER OU BEBER OUTRA COISA. Sem sintoma (dor, vômito, tontura)? Ainda espere mais 16h. Só então considere comestível — e mesmo assim, coma pouco no começo.', tip: 'Regra melhor: aprender antes 5 plantas comestíveis DA SUA REGIÃO (banana-de-macaco, palmito juçara, ora-pro-nóbis, taioba, capuchinha) e comer só o que reconhece com 100% de certeza.' },
        ],
      },
    ],
  },
  {
    id: 'sobrevivencia-urbana',
    name: 'Sobrevivência Urbana',
    icon: ICONS.fire,
    color: '#fef2d8',
    tasks: [
      {
        id: 'kit de sobrevivencia',
        title: 'Montar kit de emergência para 72h',
        summary: 'Enchente, apagão, terremoto, quarentena — o kit básico que toda casa deveria ter.',
        difficulty: 'easy',
        time: '2 horas montando',
        imageUrl: 'image/kit.png',
        imageAlt: 'Kit de emergência',
        thumb: ART.bugout,
        materials: ['Mochila resistente', 'Itens listados abaixo'],
        steps: [
          { title: 'Água — a prioridade absoluta', text: '4 litros por pessoa por dia (beber + higiene mínima) = 12 litros por pessoa para 3 dias. Garrafas plásticas fechadas duram 6 meses. Também: 1 pastilha de cloro por litro (backup).' },
          { title: 'Alimentos não perecíveis', text: 'Comida que não precisa de refrigeração nem cozinhar (ou só água quente): barras de cereal, biscoito, frutas secas, castanhas, sardinha enlatada, atum, leite em pó, mel. Escolha o que sua família come — comida diferente estressa em crise.', art: ART.bugout, tip: 'Troque a comida a cada 6 meses (use as antigas em piquenique, reponha novas).' },
          { title: 'Lanterna + rádio + pilhas', text: 'Lanterna de LED (dura muito com pouca pilha). Rádio a pilha (ou de manivela). Pilhas AA e AAA extras. Vela + fósforo à prova d\'água como último recurso.', warn: 'Vela em emergência tem risco de incêndio. Prefira lanterna sempre.' },
          { title: 'Primeiros socorros', text: 'Band-aid variados, gaze, esparadrapo, álcool 70%, soro fisiológico, analgésico (paracetamol), antitérmico, antialérgico, seus medicamentos de uso contínuo (5-7 dias extra), termômetro, luvas descartáveis.' },
          { title: 'Documentos + dinheiro', text: 'Cópia (papel + pen drive protegido) de RG, CPF, comprovante de residência, contatos importantes. Dinheiro em espécie (R$300 mínimo em notas pequenas — cartão não funciona sem energia).' },
          { title: 'Higiene + roupas', text: 'Papel higiênico, sabonete, escova/pasta, absorventes, fralda (se for o caso). 1 muda de roupa por pessoa, agasalho, capa de chuva, sapato fechado.' },
          { title: 'Ferramentas + comunicação', text: 'Canivete multiuso, fita silver tape, sacos de lixo grandes (viram capa de chuva, coletor de água), apito (pede ajuda gastando menos energia que gritar), carregador solar ou power bank carregado.' },
          { title: 'Onde guardar', text: 'Mochila única, próxima da porta de saída, conhecida por todos da casa. Reveja e atualize a cada 6 meses.' },
        ],
      },
      {
        id: 'apagao',
        title: 'Passar por um apagão longo',
        summary: 'Luz caiu por horas ou dias — como manter a comida, segurança e informação.',
        difficulty: 'easy',
        time: 'contínuo',
        imageUrl: 'image/semluz.png',
        imageAlt: 'Casa sem energia elétrica',
        thumb: ART.bolt,
        materials: ['Lanternas', 'Rádio a pilha', 'Água armazenada', 'Cooler/isopor'],
        steps: [
          { title: 'Confirme se é geral ou só seu', text: 'Olhe pela janela: rua toda escura? Vizinho com luz? Se só sua casa, provavelmente disjuntor caiu ou queimou fusível. Se é geral, é da rua.' },
          { title: 'Desligue aparelhos sensíveis', text: 'Desconecte TV, computador, geladeira das tomadas. Quando a energia voltar, pode vir com pico de tensão que queima. Deixe uma lâmpada ligada — ela avisa quando voltar.' },
          { title: 'Proteja a comida da geladeira', text: 'GELADEIRA FECHADA: comida dura ~4 horas. FREEZER FECHADO cheio: dura até 48h. Só abra quando necessário e o mais rápido possível.', tip: 'Coloque garrafas de água no freezer sempre — em apagão viram gelo para o cooler.' },
          { title: 'Ilumine com segurança', text: 'Lanternas SEMPRE antes de velas. Se usar vela: base firme, longe de cortina, nunca em quarto de criança, nunca dormindo com acesa.' },
          { title: 'Água pode faltar também', text: 'Prédios sem energia = bomba d\'água parada. Encha banheiras, baldes, panelas com água nas primeiras horas. Aquecedor de água tem 100-200L limpos guardados (registro embaixo).' },
          { title: 'Informação', text: 'Ligue rádio a pilha na estação AM local — em desastre, é o meio de comunicação oficial. Economize bateria do celular (modo avião, tela mínima).' },
          { title: 'Cuidado com gerador', text: 'Se usar gerador: NUNCA dentro de casa ou garagem fechada. Monóxido de carbono mata em silêncio. Sempre em local aberto, longe de janelas.', warn: 'Vizinhos silenciosos por muitas horas em prédio: verifique idosos e pessoas doentes. Elevadores parados isolam gente.' },
        ],
      },
      {
        id: 'incendio em casa',
        title: 'Agir em um incêndio em casa',
        summary: 'A cada segundo, o fogo dobra de tamanho. O que fazer nos primeiros 60 segundos.',
        difficulty: 'hard',
        time: 'segundos',
        imageUrl: 'image/incendio.png',
        imageAlt: 'Incêndio doméstico',
        thumb: ART.fire,
        materials: ['Extintor (idealmente)', 'Pano molhado', 'Celular para 193'],
        steps: [
          { title: 'Descubra o tipo de fogo antes de agir', text: 'Fogo em ÓLEO/GORDURA (frigideira): NUNCA jogue água — explode e espalha. Abafe com tampa da panela, pano molhado ou desligue o gás. Fogo ELÉTRICO: NUNCA água. Desligue o disjuntor primeiro.', warn: 'Água em óleo quente é uma das causas mais comuns de queimaduras graves em casa.' },
          { title: 'Fogo pequeno, controlável', text: 'Se cabe na cesta de lixo ou frigideira, você tenta apagar: extintor (se tiver), pano molhado, tampa, muita água (se for madeira/papel, NÃO óleo/eletricidade).' },
          { title: 'Fogo maior — SAIA JÁ', text: 'Se o fogo já subiu na cortina, colchão ou cômodo — NÃO tente apagar. Feche a porta do cômodo (contém o fogo), avise todos, saia. Chame 193 de fora da casa.' },
          { title: 'Fumaça: rasteje', text: 'Ar respirável fica nos primeiros 30 cm do chão. Fumaça sobe. Se tem fumaça, deite e ande de quatro (ou rastejando) até a saída. A morte em incêndio geralmente é por fumaça, não por fogo.', tip: 'Cubra nariz e boca com pano MOLHADO — filtra parte da fumaça.' },
          { title: 'Porta quente = não abra', text: 'Antes de abrir qualquer porta na rota de fuga: encoste as COSTAS DA MÃO na porta e na maçaneta. Se está quente, tem fogo do outro lado. Procure outra saída.' },
          { title: 'Prédio: NUNCA use elevador', text: 'Elevador pode parar entre andares e virar armadilha. Use escada. Se prédio alto e escada bloqueada: entre num apartamento, feche a porta, vede fresta embaixo com pano molhado, vá para a janela e sinalize.' },
          { title: 'Roupa pegou fogo: PARE-DEITE-ROLE', text: 'Não corra (vento aumenta o fogo). PARE onde está, DEITE no chão, ROLE cobrindo o rosto com as mãos. Ajude outros a fazer o mesmo se necessário.' },
        ],
      },
      {
        id: 'preso no elevador',
        title: 'Elevador travou — o que fazer',
        summary: 'Ficou preso no elevador? A pior coisa a fazer é entrar em pânico. Segunda pior: tentar sair.',
        difficulty: 'easy',
        time: 'até o resgate',
        imageUrl: 'image/elevador.png',
        imageAlt: 'Elevador',
        thumb: ART.house,
        materials: ['Celular (se pegar sinal)', 'Calma'],
        steps: [
          { title: 'Respire e mantenha a calma', text: 'Elevadores têm múltiplos sistemas de segurança: cabos redundantes, freios de emergência, batentes. Cair em queda livre é praticamente impossível em elevadores modernos.' },
          { title: 'Aperte o botão de alarme (sino)', text: 'Existe um botão amarelo com sino ou "alarme". Aperte e mantenha por 5-10 segundos. Em prédios brasileiros, isso aciona a portaria diretamente.' },
          { title: 'Use o interfone do elevador', text: 'A maioria tem interfone com portaria. Se não funcionar, ligue do celular para a portaria do prédio ou 193 (bombeiros).' },
          { title: 'NÃO tente forçar a porta', text: 'Elevador pode estar entre andares. Abrir a porta expõe você ao poço do elevador. Já morreu gente que caiu por tentar sair sozinha.', warn: 'Regra número 1: NUNCA saia de elevador travado sem o resgate. Espere. Sempre é seguro esperar.' },
          { title: 'Sente-se e economize ar/energia', text: 'Elevador tem ventilação — não vai faltar ar. Sente encostado, respire tranquilo, economize bateria do celular. Bombeiro chega em 20-40 minutos em cidade média.' },
          { title: 'Se estiver claustrofóbico ou passando mal', text: 'Foque na respiração 4-7-8: inspire por 4 seg, segure 7, solte 8. Repita. Ligue para alguém pelo celular — conversa distrai. Peça no interfone que priorizem.' },
          { title: 'Depois: registre a ocorrência', text: 'Depois do resgate, avise administração do prédio para providenciar manutenção. Se houve ferimento, registre em BO — elevador com histórico de problemas pode gerar responsabilização.' },
        ],
      },
      {
        id: 'assalto',
        title: 'Agir em um assalto',
        summary: 'Ninguém quer, mas em muitas cidades brasileiras é realidade. Priorize sua vida.',
        difficulty: 'medium',
        time: 'segundos',
        imageUrl: 'image/assalto.png',
        imageAlt: 'Situação de assalto',
        thumb: ART.aid,
        materials: ['Cabeça no lugar'],
        steps: [
          { title: 'Regra número 1: coisa material não vale sua vida', text: 'Celular, carteira, carro — TUDO pode ser recuperado ou substituído. Você não pode. Entregue tudo o que for pedido sem discussão.', warn: 'Estatística: 80% das mortes em assalto no Brasil acontecem por reação da vítima, não por decisão inicial do bandido.' },
          { title: 'Não faça movimentos bruscos', text: 'Mãos SEMPRE à vista. Movimentos lentos e telegrafados: "Vou tirar a carteira do bolso, tá?" Assaltante nervoso é o mais perigoso — não o assuste.' },
          { title: 'Não olhe fixo nos olhos', text: 'Olhar fixo é interpretado como desafio ou "tá gravando meu rosto". Olhe para as mãos dele (para saber se tem arma e onde), mas evite encarar olhos.' },
          { title: 'Fale pouco, obedeça', text: 'Nada de "mas eu preciso desse celular pro trabalho", "por favor, deixa a aliança"... Cada segundo a mais que ele fica com você é risco. Quanto mais rápido termina, melhor.' },
          { title: 'Se pedir para deitar / ir para outro lugar', text: 'Situação MUITO PIOR — pode ser tentativa de sequestro ou pior. Se for na rua com testemunhas: você pode tentar não sair do local ("prefiro ficar aqui, pega tudo") ou reagir a fugir. Julgue o momento.' },
          { title: 'Depois do assalto', text: 'Espere pelo menos 1-2 minutos após ele sair antes de se mexer. Chame 190 imediatamente. Bloqueie celular e cartões pelo app do banco (do celular de alguém). Registre BO online.' },
          { title: 'Prevenção diária', text: 'Não fique em pé olhando o celular na rua. Bolsa/mochila do lado oposto do trânsito. Corrente/joia embaixo da blusa. Rotinas variadas (mesmo caminho todo dia = fácil de emboscar).', tip: 'Configure senha oculta no app do banco (Nubank, Itaú, etc.). Se te obrigarem a mostrar saldo, mostra saldo falso.' },
        ],
      },
      {
        id: 'desmaio',
        title: 'RCP — a primeira hora conta',
        summary: 'Alguém desmaiou, não respira e não tem pulso. Seus próximos 4 minutos decidem tudo.',
        difficulty: 'hard',
        time: 'até socorro chegar',
        imageUrl: 'image/infarto.png',
        imageAlt: 'Atendimento a parada cardíaca',
        thumb: ART.cpr,
        materials: ['Suas duas mãos e força'],
        steps: [
          { title: 'Confirme a parada', text: 'Chame pela pessoa alto: "Você está bem?!". Balance o ombro. Olhe se o peito sobe/desce. Sem resposta E sem respirar (ou respira "agonicamente") = parada cardíaca.' },
          { title: 'Peça socorro AGORA', text: 'Grite pedindo ajuda. Se tiver alguém, mande CHAMAR SAMU 192 e trazer DEA (desfibrilador — em muitos locais públicos, shoppings, aeroportos). Se estiver sozinho, ligue com o celular no viva-voz e continue.', warn: 'Cada minuto sem RCP reduz chance de sobrevivência em 10%. Depois de 10 min sem, quase zero.' },
          { title: 'Posicione a pessoa e as mãos', text: 'Pessoa deitada de costas em superfície DURA (chão). Ajoelhe do lado dela. Encaixe a base da palma da mão no CENTRO DO PEITO (linha dos mamilos, sobre o osso esterno). Outra mão em cima, dedos entrelaçados.', art: ART.cpr },
          { title: 'Comprima FORTE e RÁPIDO', text: 'Empurre 5-6 cm para baixo. Ritmo de 100-120 vezes por minuto (batida da música "Stayin\' Alive" ou "Despacito"). Não pare para respiração boca-a-boca — só compressão salva.', tip: 'Se for adulto e você não é treinado, faça SÓ compressões. Melhor que nada, e é o que os protocolos atuais recomendam para leigos.' },
          { title: 'Permita o peito voltar', text: 'Entre compressões, deixe o peito voltar totalmente sozinho — não retire as mãos, só alivie a pressão. Isso permite o coração encher de sangue de novo.' },
          { title: 'Chegou o DEA? Use', text: 'DEA (desfibrilador) fala com você em português. Ligue, cole os adesivos como mostra no desenho, siga as instruções faladas. Ele decide sozinho se dá choque — você só aperta o botão quando ele mandar.' },
          { title: 'Não pare até…', text: '(1) A pessoa se mexer/respirar, (2) chegar socorro médico, (3) você não conseguir mais (troque com alguém a cada 2 min se possível). Continuar cansado é melhor que parar.' },
        ],
      },
    ],
  },
];
