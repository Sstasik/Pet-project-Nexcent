import React, { useState } from 'react';
import PurpleLogo from './icons/PurpleLogo.svg';
import Logo2 from './icons/Logo2.svg';
import Logo3 from './icons/Logo3.svg';
import Logo4 from './icons/Logo4.svg';
import Logo5 from './icons/Logo5.svg';
import Logo6 from './icons/Logo6.svg';
import Logo7 from './icons/Logo7.svg';
import RightArrow from './icons/RightArrow.svg';

const ExportTeslaItems = () => {
  interface LogoProps {
    logo: string;
    alt: string;
  }

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const LogoArray = [PurpleLogo, Logo2, Logo3, Logo4, Logo5, Logo6];

  const LogosShow = ({ logo, alt }: LogoProps): JSX.Element => {
    return <img src={logo} alt={alt} />;
  };
  return (
    <div className="flex flex-row gap-[40px] py-[20px] items-center phone:flex-wrap phone:justify-center">
      {LogoArray.map((logo, index) => (
        <LogosShow key={index} logo={logo} alt={`Logo${index + 1}`} />
      ))}
      {showMore && <LogosShow logo={Logo7} alt="Logo7" />}
      <span>
        <button
          onClick={toggleShowMore}
          className="flex flex-row text-[#4CAF4F] font-bold">
          {showMore ? 'Hide' : 'Meet all customers'}
          <div className="transition-transform duration-300 ease-in-out">
            <img
              src={RightArrow}
              alt="RightArrow"
              className={`transform transition-transform duration-300 ease-in-out ${
                showMore ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>
      </span>
    </div>
  );
};

export default ExportTeslaItems;
