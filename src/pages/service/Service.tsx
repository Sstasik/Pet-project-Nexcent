import ServiceImg from '../../assets/exportServiceImgs';

const Service = () => {
  return (
    <div className="flex flex-col items-center mt-[20px]">
      <div className="flex flex-col gap-[5px] phone:text-center">
        <h1 className="text-3xl">Services</h1>
        <h1 className="text-xl">CORE CAPABILITIES</h1>
        <p className="max-w-[500px] phone:max-w-[300px]">
          As a full-service digital marketing agency, our capabilities stretch
          across platforms to cover nearly every tactic that an organization can
          utilize to grow and better represent their business. Explore our main
          capabilities below.
        </p>
      </div>

      <div>
        <ServiceImg />
      </div>
    </div>
  );
};

export default Service;
