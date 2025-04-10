// Improved TypeScript/React calculator layout with proper button rows

import React, { useState } from 'react';

const buttonRows = [
  ['SHIFT', 'ALPHA', 'MODE', 'ON', ''],
  ['x⁻¹', 'x²', '√', 'DEL', 'AC'],
  ['7', '8', '9', '/', 'log'],
  ['4', '5', '6', '*', 'ln'],
  ['1', '2', '3', '-', 'cos'],
  ['0', '.', '=', '+', 'sin'],
  ['(', ')', 'EXP', '^', 'tan'],
  ['Ans', 'ENG', 'M+', 'n!', 'π']
];

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value: string) => {
    if (value === 'AC') {
      setDisplay('');
    } else if (value === 'DEL') {
      setDisplay(display.slice(0, -1));
    } else if (value === '=') {
      try {
        setDisplay(eval(display));
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <div className="display bg-gray-100 text-black w-full max-w-xs text-right p-4 rounded shadow mb-4 text-xl">
        {display || '0'}
      </div>
      <div className="flex flex-col gap-2 w-full max-w-xs">
        {buttonRows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-5 gap-2">
            {row.map((btn, idx) => (
              <button
                key={idx}
                className={`p-2 rounded shadow text-sm font-semibold bg-gray-200 hover:bg-gray-300 ${btn === '' ? 'invisible' : ''}`}
                onClick={() => btn && handleClick(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
