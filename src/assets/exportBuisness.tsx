import React from 'react';
import MemberIcon from './icons/membersIcon.svg';
import PaymentIcon from './icons/paymentIcon.svg';
import EventIcon from './icons/eventIcon.svg';
import ClubIcon from './icons/clubsIcon.svg';
const ExportBuisness = () => {
  const Info = [
    {
      id: 1,
      svg: MemberIcon,
      alt: 'MemberIcon',
      count: '2,245,341',
      desc: 'Members',
    },
    {
      id: 2,
      svg: ClubIcon,
      alt: 'ClubIcon',
      count: '46,328',
      desc: 'Clubs',
    },
    {
      id: 3,
      svg: EventIcon,
      alt: 'EventIcon',
      count: '828,867',
      desc: 'Event Bookings',
    },
    {
      id: 4,
      svg: PaymentIcon,
      alt: 'PaymentIcon',
      count: '1,926,436',
      desc: 'Payments',
    },
  ];
  return (
    <div className="flex flex-wrap max-w-[400px] phone:max-w-[300px]">
      {Info.map((cart) => (
        <div key={cart.id} className="w-[50%] h-[50%] p-[10px]">
          <div className="flex flex-row gap-[20px]" key={cart.id}>
            <div>
              <img
                className="size-[50px] phone:size-[30px]"
                src={cart.svg}
                alt={cart.alt}
              />
            </div>
            <div>
              <h2 className="font-bold text-[#4D4D4D] text-2xl phone:text-sm">
                {cart.count}
              </h2>
              <p className="text-[#717171] text-l phone:text-xs">{cart.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExportBuisness;
