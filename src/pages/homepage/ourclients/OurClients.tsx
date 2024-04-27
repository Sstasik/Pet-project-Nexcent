import React from 'react';
import ExportImgs from '../../../assets/exportImgs';

const OurClients = () => {
  return (
    <div className=" py-[40px]">
      <div className="flex items-center flex-col phone:text-center">
        <h1 className="text-4xl font-semibold text-[#4D4D4D] pb-[5px] phone:text-2xl">
          Our Clients
        </h1>
        <p className="text-[#717171] text-l phone:text-sm">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="py-[20px]">
        <ExportImgs />
      </div>
    </div>
  );
};

export default OurClients;
