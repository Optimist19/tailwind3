import { FaArrowRight } from "react-icons/fa6";

import pic1 from "../img/Link [icon-link].png";
import pic2 from "../img/Link [icon-link] (1).png";
import pic3 from "../img/Link [icon-link] (2).png";
import pic4 from "../img/Link [icon-link] (3).png";
import pic5 from "../img/Link [icon-link] (4).png";
import pic6 from "../img/Link [icon-link] (5).png";
import pic7 from "../img/Link [icon-link] (6).png";

function Accelerate() {
  return (
    <section className="w-full bg-[#F6F8FC]">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-[12px]">OUR PRODUCTS</h1>
          <h2 className="text-3xl text-center pb-7">Accelerate your growth with</h2>
          <p className="px-3 text-center">
            No one matches the streamlined flexibilty of G-P Meridian Suite
            <sup>TM</sup> the industry&apos;s first fully customizable suite
            global employment products.
          </p>
          <div>
            <button className="flex items-center gap-2  text-[#0000FF] cursor-pointer rounded-full px-2 py-2 tex-[14px]">
              <FaArrowRight />
              <span>Explore our products </span>
            </button>
          </div>
          <div className="flex bg-white py-2">
            <div>
              <img src={pic1} alt="" className="w-full" />
            </div>
            <div>
              <img src={pic2} alt="" className="w-full" />
            </div>
            <div>
              <img src={pic3} alt="" className="w-full" />
            </div>
            <div>
              <img src={pic4} alt="" className="w-full" />
            </div>
            <div>
              <img src={pic5} alt="" className="w-full" />
            </div>
            <div>
              <img src={pic6} alt="" className="w-full" />
            </div>
            <div>
              <img src={pic7} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accelerate;
