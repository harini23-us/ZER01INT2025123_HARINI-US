import React, { useState } from 'react';

const ColorBox = () => {
  const [boxColor, setBoxColor] = useState('black');

  const changeColor = () => {
    setBoxColor('purple');
  };

  const resetColor = () => {
    setBoxColor('black');
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div 
        className="w-80 h-80 rounded-lg transition-colors duration-300"
        style={{ backgroundColor: boxColor }}
      ></div>
      <div className="space-x-4">
        <button 
          onClick={changeColor}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Change Color
        </button>
        <button 
          onClick={resetColor}
          className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ColorBox;