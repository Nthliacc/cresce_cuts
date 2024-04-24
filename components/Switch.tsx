'use client';
import { useState } from 'react';

interface SwitchProps {
  label?: string;
  active?: boolean;
  onClick?: () => void;
}

const Switch = ({active, label, onClick}: SwitchProps ) => {
  const [ligado, setLigado] = useState(active || false);

  const alternarSwitch = () => {
    setLigado((prevLigado) => !prevLigado);
  };

  return (
    <label className="flex items-center cursor-pointer px-2">
      {label && <div className="mr-3">{label}</div>}
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={ligado}
          onChange={alternarSwitch}
        />
        <div className="w-10 h-6 ml-4 m-1 -mr-2 bg-blue opacity-40 rounded-full shadow-inner"></div>
        <div
          className={`absolute top-0 left-0 w-8 h-8 rounded-full shadow-md transform transition-transform ${
            ligado ? 'translate-x-full bg-blue' : 'bg-grayDark'
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Switch;