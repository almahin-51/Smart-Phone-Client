import one from "../../assets/pic/ic12.png";
import two from "../../assets/pic/ic13.png";
import three from "../../assets/pic/ic11.png";

const DifferentSection = () => {
  return (
    <div className="py-24 text-center">
      <h1 className="text-4xl font-semibold">
        WHAT MAKES THE ESSENTIAL DIFFERENT?
      </h1>
      <p className="text-[#8a8a8a] text-md mt-2">
        EXPERIENCE HIGH PERFORMANCE AND SECURE
      </p>
      <div className="flex justify-evenly py-10">
        <div className="flex flex-col items-center">
          <img src={one} alt="" className="my-12" />
          <h4 className="text-md uppercase font-semibold">prefect cut</h4>
          <h3 className="text-lg font-semibold uppercase">dual camera</h3>
          <p className="text-[#8a8a8a]">
            Tristique senectus et netus et malesuada ant reiet fames.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={two} alt="" className="my-12" />
          <h4 className="text-md uppercase font-semibold">PRETTY</h4>
          <h3 className="text-lg font-semibold uppercase">
            INTELLIGENT PROCESSING
          </h3>
          <p className="text-[#8a8a8a]">
            Consequat ac habit amet asse felis donec et odio pellentesque diam.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={three} alt="" className="my-12" />
          <h4 className="text-md uppercase font-semibold">MOST POPULAR</h4>
          <h3 className="text-lg font-semibold uppercase">8GB DDR5 RAM</h3>
          <p className="text-[#8a8a8a]">
            Tristique senectus et netus et malesuada ant reiet fames.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifferentSection;
