import React from 'react';
import ExportBuisness from '../../../assets/exportBuisness';

const Buisness = () => {
  return (
    <div className="flex flex-row justify-evenly items-center  py-[50px]">
      <div>
        <div className="text-4xl font-semibold">
          <h1 className="text-[#717171]">Helping a local</h1>
          <h1 className="text-[#4caf4f]">business reinvent itself</h1>
        </div>
        <p className="text-l">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="">
        <ExportBuisness />
      </div>
    </div>
  );
};

export default Buisness;
