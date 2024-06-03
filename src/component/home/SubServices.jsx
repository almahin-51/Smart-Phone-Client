import { BiSolidDiscount } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const SubServices = () => {
  return (
    <div className="flex bg-[#f9f9f9] py-10 justify-evenly px-24">
      <div className="flex gap-6 items-center">
        <TbTruckDelivery className="text-6xl" />
        <div>
          <h3 className="uppercase text-lg font-semibold">free shipping</h3>
          <h3 className="text-lg text-[#bababa]">For orders over $50</h3>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <BiSolidDiscount className="text-6xl" />
        <div>
          <h3 className="uppercase text-lg font-semibold">official discount</h3>
          <h3 className="text-lg text-[#bababa]">Save Big on next product</h3>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <MdOutlineSupportAgent className="text-6xl" />
        <div>
          <h3 className="uppercase text-lg font-semibold">24/7 helpline</h3>
          <h3 className="text-lg text-[#bababa]">Care till the end</h3>
        </div>
      </div>
    </div>
  );
};

export default SubServices;
