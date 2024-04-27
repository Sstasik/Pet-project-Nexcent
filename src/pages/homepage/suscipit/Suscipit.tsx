import React from 'react';
import RightArrowWhite from '../../../assets/icons/RightArrowWhite.svg';
function Suscipit() {
  return (
    <>
      <div className="flex flex-col items-center text-center text-[#263238] pt-[35px] pb-[35px]">
        <h1 className="text-7xl font-bold mb-[40px] phone:text-3xl">
          Pellentesque suscipit
          <br /> fringilla libero eu.
        </h1>

        <button className="flex items-center text-center text-white bg-[#4CAF4F] rounded-md px-[30px] py-[15px] phone:p-[15px]">
          Get a Demo
          <img src={RightArrowWhite} alt="RightArrow" />
        </button>
      </div>
    </>
  );
}

export default Suscipit;
