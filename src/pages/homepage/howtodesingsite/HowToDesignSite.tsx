import PhoneImg from '../../../assets/imgs/phone.png';
function HowToDesignSite() {
  return (
    <div className="flex flex-row items-center justify-center gap-[70px] py-[50px] phone:flex-col">
      <div>
        <img src={PhoneImg} alt="PhoneImg" />
      </div>
      <div className="max-w-[600px] phone:max-w-[300px]">
        <div className="">
          <h1 className="text-4xl font-semibold text-[#717171] phone:text-2xl">
            How to design your site footer like we did
          </h1>
          <p className="text-[#727272] py-[25px] max-w-[550px] text-sm">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
        </div>
        <button className="bg-[#4CAF4F] text-[#fff] px-[20px] py-[10px] rounded-[5px] phone:p-[10px] phone:text-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default HowToDesignSite;
