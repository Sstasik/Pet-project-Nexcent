import React from 'react';
import Frame35 from '../../../assets/imgs/Frame35.png';
const Pixelgrade = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-[70px] py-[50px] phone:flex-col">
        <div>
          <img src={Frame35} alt="frame35" />
        </div>
        <div className="max-w-[600px]">
          <div className="">
            <h1 className="text-4xl font-semibold text-[#717171] phone:text-2xl">
              The unseen of spending three
              <br /> years at Pixelgrade
            </h1>
            <p className="text-[#727272] py-[25px] max-w-[550px] text-sm phone:text-xs phone:max-w-[300px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <button className="bg-[#4CAF4F] text-[#fff] px-[20px] py-[10px] rounded-[5px] phone:p-[10px] phone:text-xs">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default Pixelgrade;
