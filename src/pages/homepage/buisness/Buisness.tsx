import React from 'react';
import ExportBuisness from '../../../assets/exportBuisness';

const Buisness = () => {
  return (
    <div className="flex flex-row justify-evenly items-center  py-[50px] phone:flex-col phone:text-center">
      <div>
        <div className="text-4xl font-semibold phone:text-2xl">
          <h1 className="text-[#717171]">Helping a local</h1>
          <h1 className="text-[#4caf4f]">business reinvent itself</h1>
        </div>
        <p className="text-l phone:text-sm">
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
