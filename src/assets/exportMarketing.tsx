import React from 'react';
import Img18 from '../assets/imgs/image18.png';
import Img19 from '../assets/imgs/image19.png';
import Img20 from '../assets/imgs/image20.png';
import RightArrow from '../assets/icons/RightArrow.svg';
const ExportMarketing = () => {
  const Cards = [
    {
      id: 1,
      svg: Img18,
      alt: 'PeopleIcon',
      desc: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      id: 2,
      svg: Img19,
      alt: 'LaptopImg',
      desc: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
      id: 3,
      svg: Img20,
      alt: 'MacbookImg',
      desc: 'Revamping the Membership Model with Triathlon Australia',
    },
  ];
  return (
    <div>
      <div className="flex flex-row justify-center gap-[30px]">
        {Cards.map((card) => (
          <div key={card.id} className="relative">
            <div className="z-[0]">
              <img src={card.svg} alt={card.alt} />
            </div>
            <div className="absolute rounded-xl left-[26px] right-[26px]  bottom-[-70px] bg-[#FFF] shadow-md z-[1] ">
              <div className="flex justify-center text-center">
                <h1 className="text-[21px] p-[15px] font-semibold text-[#717171]">
                  {card.desc}
                </h1>
              </div>
              <span className="flex justify-center">
                <button className="text-[#4CAF4F] text-xl font-bold  mb-[25px] flex items-center  ">
                  Readmore <img src={RightArrow} alt="RightArrow" />
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExportMarketing;
