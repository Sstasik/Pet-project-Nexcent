import React, { useState } from 'react';
import HeaderImg from '../../../assets/imgs/Illustration.png';
import Registration from '../../../Login_Registration/Registration';
const Header = () => {
  const [isOpenRegistration, setopenRegistration] = useState(false);

  const openRegistration = () => {
    setopenRegistration(true);
  };

  const closeRegistration = () => {
    setopenRegistration(false);
  };

  return (
    <div className="flex flex-row  justify-around pt-[150px] pb-[100px] ">
      <div className="flex flex-col justify-center  items-start mr-[60px]">
        <h1 className="text-7xl leading-tight font-bold text-[#4D4D4D] text-stroke text-shadow">
          Lessons and insights
        </h1>
        <h1 className="text-7xl leading-tight font-bold text-[#4CAF4F] text-stroke">
          from 8 years
        </h1>
        <p className="text-[#717171] text-[19px] my-[20px]">
          Where to grow your business as a photographer: site or social media?
        </p>

        <button
          onClick={openRegistration}
          className="bg-[#4CAF4F] text-[#fff] py-[15px] px-[25px] rounded-[5px]">
          Register
        </button>
      </div>
      <div className="ImgSection">
        <img src={HeaderImg} alt="HeaderImg" className="size-[400px]" />
      </div>
      <div>
        <Registration isOpen={isOpenRegistration} onClose={closeRegistration} />
      </div>
    </div>
  );
};

export default Header;
