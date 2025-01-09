import React from 'react';
import ColorBox from './components/ColorBox';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Color Changing Box</h1>
      <ColorBox />
    </div>
  );
}

export default App;