import InstagramIcon from './imgs/InstagramIcon.png';
import YoutubeIcon from './imgs/YoutubeIcon.png';
import TwiterIcon from './imgs/TwiterIcon.png';
import SocialIcon from './imgs/SocialIcons.png';

const ExportFolow = () => {
  const Items = [
    {
      id: 1,
      svg: InstagramIcon,
      alt: 'InstagramIcon',
      link: 'https://www.instagram.com',
    },
    {
      id: 2,
      svg: SocialIcon,
      alt: 'SocialIcon',
      link: 'https://chat.openai.com',
    },
    {
      id: 3,
      svg: TwiterIcon,
      alt: 'TwiterIcon',
      link: 'https://twitter.com/',
    },
    {
      id: 4,
      svg: YoutubeIcon,
      alt: 'YoutubeIcon',
      link: 'https://www.youtube.com/',
    },
  ];
  return (
    <div className="flex flex-row gap-[20px]">
      {Items.map((item) => (
        <div key={item.id}>
          <a href={item.link} className="cursor-pointer">
            <img src={item.svg} alt={item.alt} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ExportFolow;
