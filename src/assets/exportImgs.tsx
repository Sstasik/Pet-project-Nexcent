import React from 'react';
import Logo1 from './icons/Logo1.svg';
import Logo2 from './icons/Logo2.svg';
import Logo3 from './icons/Logo3.svg';
import Logo4 from './icons/Logo4.svg';
import Logo5 from './icons/Logo5.svg';
import Logo6 from './icons/Logo6.svg';
import Logo7 from './icons/Logo7.svg';

const ExportImgs = () => {
  interface LogoProps {
    logo: string;
    alt: string;
  }

  const LogoArray = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

  const LogosShow = ({ logo, alt }: LogoProps): JSX.Element => {
    return <img src={logo} alt={alt} />;
  };

  return (
    <div className="flex flex-row justify-evenly p-[20px] phone:flex-wrap">
      {LogoArray.map((logo, index) => (
        <LogosShow key={index} logo={logo} alt={`Logo${index + 1}`} />
      ))}
    </div>
  );
};

export default ExportImgs;
