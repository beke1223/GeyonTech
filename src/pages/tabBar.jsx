
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TabBar = () => {
  const navigate =useNavigate();
  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-lg">Geyon</div>
        <div className="flex space-x-4">
          <TabItem label="Learn" dropdownOptions={['Option 1', 'Option 2']} />
          <button onClick={()=>navigate('/about-us')}><TabItem label="About us" /></button>
          <TabItem label="Business" />
          <TabItem label="Government" />
          <button className="text-white font-bold text-lg bg-green">Log In </button>
          <TabItem label="Log In" />
          <TabItem label="Join for Free" />
        </div>
      </div>
    </div>
  );
};

const TabItem = ({ label, dropdownOptions }) => {
  return (
    <div className="relative group">
      <button className="text-white focus:outline-bold">
        {label}
      </button>
      {dropdownOptions && (
        <div className="absolute hidden bg-gray-700 text-white py-2 space-y-2 group-hover:block">
          {dropdownOptions.map((option, index) => (
            <div key={index} className="px-4 py-2">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TabBar;
