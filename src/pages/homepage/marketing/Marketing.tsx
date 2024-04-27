import ExportMarketing from '../../../assets/exportMarketing';

const Marketing = () => {
  return (
    <div className="pb-[150px] pt-[40px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-semibold text-5xl text-[#4D4D4D] mb-[15px] phone:text-2xl">
          Caring is the new marketing
        </h1>
        <p className="text-[20px] text-[#717171] mb-[20px] phone:text-sm">
          The Nexcent blog is the best place to read about the latest membership
          insights, <br /> trends and more. See who's joining the community,
          read about how our community
          <br /> are increasing their membership income and lot's more.​
        </p>
      </div>
      <div>
        <ExportMarketing />
      </div>
    </div>
  );
};

export default Marketing;
