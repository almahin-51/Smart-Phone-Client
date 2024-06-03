import one from "../../assets/pic/phono-slider-1.jpg";
import two from "../../assets/pic/phono-slider-2.jpg";
import three from "../../assets/pic/phono-slider-3.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="carousel w-full h-screen carousel-img">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={one} className="w-full" />
          <div className="uppercase absolute text-white text-center w-2/5 top-1/3 right-20">
            <p className="text-3xl font-bold">Zania Black Edition</p>
            <h1 className="text-8xl font-bold w-full my-6">
              Curvy Bevel Dual Audio
            </h1>
            <button className="btn btn-outline text-white rounded-full px-10 text-xl bg-black mt-6">
              SHOP NOW
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={two} className="w-full" />
          <div className="uppercase absolute text-black text-center w-2/5 top-1/3 left-20">
            <p className="text-3xl font-bold">4K Resolution</p>
            <h1 className="text-8xl font-bold w-full my-6">
              Exclusive Steel Frame
            </h1>
            <button className="btn btn-outline text-white rounded-full px-10 text-xl bg-black mt-6">
              BUY NOW
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={three} className="w-full" />
          <div className="uppercase absolute text-white text-center w-2/5 top-1/3 right-20">
            <p className="text-3xl font-bold">Delta Zertiga Processor</p>
            <h1 className="text-8xl font-bold w-full my-6">
              Full Screen Display
            </h1>
            <button className="btn btn-outline text-white rounded-full px-10 text-xl bg-black mt-6">
              SHOP NOW
            </button>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
