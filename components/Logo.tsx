import React from 'react';
import { LOGO_SVG } from '../constants';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      {LOGO_SVG}
      <span className="font-bold text-xl tracking-tighter text-gray-900 dark:text-white">
        Other<span className="text-otherx-green">X</span>
      </span>
    </div>
  );
};
