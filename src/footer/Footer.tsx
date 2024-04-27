import sendImg from '../assets/imgs/send.png';
import WhiteLogo from '../assets/imgs/WhiteLogo.png';
import ExportFolow from '../assets/exportFolow';
function Footer() {
  return (
    <div className="text-[#FFF] flex flex-row justify-center py-[60px] gap-[250px] bg-[#263238] phone:gap-[10px]">
      <div className="flex flex-col gap-[40px] ">
        <img src={WhiteLogo} alt="NexcentLogo" />
        <div className="text-[#F5F7FA] phone:text-sm">
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
        </div>
        <div className="">
          <ExportFolow />
        </div>
      </div>

      <div className="flex flex-row gap-[100px] phone:gap-[20px]">
        <div>
          <h1 className="text-xl mb-[20px] phone:text-sm">Company</h1>
          <ul className="flex flex-col gap-[15px] text-[#D9DBE1] phone:gap-[8px] phone:text-xs">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div>
          <h1 className="ext-xl mb-[20px] phone:text-sm">Support</h1>
          <ul className="flex flex-col gap-[15px] text-[#D9DBE1] phone:gap-[8px] phone:text-xs">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-[30px] phone:text-sm">Stay up to date</h1>
          <div className=" flex flex-row justify-center bg-gray-600 items-center px-[10px] py-[5px] rounded-lg">
            <input
              className="text-[#D9DBE1] bg-gray-600 outline-none phone:text-xs phone:max-w-[0px]"
              type="text"
              placeholder="Your email address"
            />
            <button>
              <img className="size-[18px]" src={sendImg} alt="sendImg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
