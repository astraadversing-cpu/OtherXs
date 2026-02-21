import React from 'react';

export const LOGO_SVG = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
    <path d="M20 5L35 30H5L20 5Z" stroke="#00ff88" strokeWidth="2" fill="none" />
    <path d="M20 12L28 26H12L20 12Z" fill="#00ff88" fillOpacity="0.5" />
    <circle cx="20" cy="20" r="18" stroke="#00ff88" strokeWidth="1" strokeOpacity="0.3" />
  </svg>
);

export const FAKE_NAMES = [
  "Lucas-M", "Ana-P", "Marcos-S", "Julia-R", "Pedro-H", "Sofia-L", "Carlos-E", "Mariana-B",
  "Rafael-K", "Beatriz-M", "Gustavo-F", "Camila-D", "Felipe-A", "Larissa-C", "Thiago-N",
  "Roberto-J", "Fernanda-T", "Ricardo-V", "Patricia-G", "Eduardo-X", "Vanessa-L"
];

export const INITIAL_HISTORY = [
  { id: 'h1', date: '03/2024', description: 'Depósito Inicial', amount: 1000.00, status: 'Completed' },
  { id: 'h2', date: '14/06', description: 'Rendimento CDI', amount: 5.56, status: 'Completed' },
  { id: 'h3', date: '15/06', description: 'Rendimento CDI', amount: 5.61, status: 'Completed' },
  { id: 'h4', date: '16/06', description: 'Rendimento CDI', amount: 5.68, status: 'Completed' },
] as const;
