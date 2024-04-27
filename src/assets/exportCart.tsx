import PeopleIcon from './icons/peopleicon.svg';
import HandsIcon from './icons/handsicon.svg';
import HouseIcon from './icons/houseicon.svg';

const Carts = [
  {
    id: 1,
    svg: PeopleIcon,
    alt: 'PeopleIcon',
    title: 'Membership Organisations',
    desc: 'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    id: 2,
    svg: HouseIcon,
    alt: 'HouseIcon',
    title: 'National Associations',
    desc: 'Our membership management software provides full automation of membership renewals and payments',
  },
  {
    id: 3,
    svg: HandsIcon,
    alt: 'HandsIcon',
    title: 'Clubs And Groups',
    desc: 'Our membership management software provides full automation of membership renewals and payments',
  },
];

const ExportCart = () => {
  return (
    <div className="flex flex-row justify-evenly py-[30px] phone:flex-col phone:items-center">
      {Carts.map((cart) => (
        <div
          key={cart.id}
          className="max-w-[350px] shadow-md px-[30px] pb-[30px] pt-[15px] rounded-md">
          <div className="flex flex-col items-center " key={cart.id}>
            <img className="size-[80px]" src={cart.svg} alt={cart.alt} />
            <h2 className="text-3xl font-bold text-center max-w-[200px] py-[10px] text-[#4D4D4D]">
              {cart.title}
            </h2>
            <p className="text-center text-[#717171]">{cart.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExportCart;
