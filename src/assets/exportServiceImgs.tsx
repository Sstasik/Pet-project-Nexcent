import ServiceImg1 from './imgs/ServiceImg1.jpg';
import ServiceImg2 from './imgs/ServiceImg2.jpg';
import ServiceImg3 from './imgs/ServiceImg3.jpg';
import ServiceImg4 from './imgs/ServiceImg4.jpg';
import ServiceImg5 from './imgs/ServiceImg5.jpg';
import ServiceImg6 from './imgs/ServiceImg6.jpg';
import ServiceImg7 from './imgs/ServiceImg7.jpg';
import ServiceImg8 from './imgs/ServiceImg8.jpg';

const ServiceImgs = [
  {
    id: 1,
    img: ServiceImg1,
    alt: 'img1',
    text: 'SOCIAL MEDIA MANAGEMENT',
  },
  {
    id: 2,
    img: ServiceImg2,
    alt: 'img2',
    text: 'SEO MANAGEMENT',
  },
  {
    id: 3,
    img: ServiceImg3,
    alt: 'img3',
    text: 'CONTENT MARKETING',
  },
  {
    id: 4,
    img: ServiceImg4,
    alt: 'img4',
    text: 'WEB DESIGN',
  },
  {
    id: 5,
    img: ServiceImg5,
    alt: 'img5',
    text: 'BRANDING',
  },
  {
    id: 6,
    img: ServiceImg6,
    alt: 'img6',
    text: 'DIGITAL ADS',
  },
  {
    id: 7,
    img: ServiceImg7,
    alt: 'img7',
    text: 'VIDEO PRODUCTION',
  },
  {
    id: 8,
    img: ServiceImg8,
    alt: 'img8',
    text: 'GOOGLE ANALYTICS 4',
  },
];

const ServiceImg = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-[40px] justify-center my-[40px] ">
        {ServiceImgs.map((service) => (
          <div
            key={service.id}
            className="max-w-[350px] shadow-md bg-[#4CAF4F] m-[10px] rounded-lg cursor-pointer hover:scale-110 transform transition-transform duration-300">
            <div className="flex flex-col items-center " key={service.id}>
              <img
                className="h-[200px] w-[300px] rounded-t-lg"
                src={service.img}
                alt={service.alt}
              />
              <h2 className=" font-bold text-center  px-[10px] py-[5px]  text-[#fff]">
                {service.text}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceImg;
