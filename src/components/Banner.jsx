import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import images from '../constants/images';

const Banner = () => {
  return (
    <div className="relative">
      <div className=" absolute h-32 w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image loading="lazy" src={images.carouselOne} alt="" />
        </div>
        <div>
          <Image loading="lazy" src={images.carouselTwo} alt="" />
        </div>
        <div>
          <Image loading="lazy" src={images.carouselThree} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
