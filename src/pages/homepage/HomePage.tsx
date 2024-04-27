import Header from './header_page/Header';
import OurClients from './ourclients/OurClients';
import Comunity from './comunity/Comunity';
import Pixelgrade from './pixelgrade/Pixelgrade';
import Buisness from './buisness/Buisness';
import HowToDesignSite from './howtodesingsite/HowToDesignSite';
import BritishDragon from './britishdragon/BritishDragon';
import Marketing from './marketing/Marketing';
import Suscipit from './suscipit/Suscipit';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#fff]">
        <OurClients />
        <Comunity />
        <Pixelgrade />
      </div>
      <Buisness />
      <div className="bg-[#fff]">
        <HowToDesignSite />
      </div>
      <BritishDragon />
      <div className="bg-[#fff]">
        <Marketing />
      </div>
      <Suscipit />;
    </div>
  );
};

export default HomePage;
