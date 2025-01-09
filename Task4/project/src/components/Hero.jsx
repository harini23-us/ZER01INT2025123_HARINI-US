import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">Introduction</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-200 rounded-lg p-4">
            <img 
              src="https://via.placeholder.com/400x300"
              alt="Placeholder"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="flex items-center">
            <p className="text-gray-700">
              This is a description section. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;