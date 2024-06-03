import camera from "../../assets/pic/camera.jpg";

const SubDetails = () => {
  return (
    <div className="text-center mx-24 my-16">
      <h1 className="text-4xl font-semibold">
        WHAT MAKES THE ESSENTIAL DIFFERENT?
      </h1>
      <p className="text-[#8a8a8a] text-md mt-2 tracking-[tracking-[.25em]]">
        EXPERIENCE HIGH PERFORMANCE AND SECURE
      </p>
      <div className="grid grid-cols-2 gap-12 mt-12">
        <div className="text-justify ml-12 flex flex-col justify-center">
          <h3 className="text-xl font-semibold mb-2">
            42 FRONT CAMERA FOR PERFECT SHOT
          </h3>
          <p className="text-[#8a8a8a] text-lg">
            Porem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui official.
          </p>
          <p className="text-[#8a8a8a] mt-3">
            Diam vulputate ut pharetra sit. Elit ut aliquam purus sit amet
            luctus venenatis lectus. Lorem dolor sed viverra ipsum nunc aliquet.
            Ut consequat semper viverra nam libero. Velit ut tortor aremn.
          </p>
        </div>
        <div>
          <img src={camera} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SubDetails;
