import React from 'react';
import ColorBox from '../components/ColorBox';

function ColorPage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Color Changing Box</h1>
        <ColorBox />
      </div>
    </main>
  );
}

export default ColorPage;