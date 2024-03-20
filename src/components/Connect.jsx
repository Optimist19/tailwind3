import pic1 from "../img/29]].png";
import pic2 from "../img/Image [h-full].png";

import { FaArrowRight } from "react-icons/fa6";

function Connect() {
  return (
    <section className="w-full py-7">
      <div className="h-full flex flex-col items-center justify-center py-7 px-3">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl py-7 font-bold">
            Connect your existing HCM
            <br />
            systems to our global network
            <br /> with
            <span className="text-[#0000FF]"> powerful integrations</span>.
          </h1>


          <div>
            <div className="flex flex-col items-center gap-9 sm:flex-row sm:items-center">
              <div className="flex flex-col gap-4 my-7">
                <div className="flex flex-col items-center">
                  <img src={pic1} alt="" className="h-[300px] w-[500px]"/>
                </div>
                <h3 className="text-2xl font-bold text-center">
                  Plug-and-play integrations.
                </h3>
                <p className="  text-center">
                  Connect to existing HCM systems and create a single source of
                  truth for insights into your workforce population.
                </p>
                <div className="flex flex-col items-center">
                  <button className="flex items-center gap-2  text-[#0000FF] cursor-pointer rounded-full px-2 py-2 tex-[14px]">
                    <span>Explore integrations </span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4  my-7">
                <div className="">
                  <img src={pic2} alt="" className="h-[300px] w-[500px]"/>
                </div>
                <h3 className="text-2xl font-bold text-center">Powerful partner ecosytem.</h3>
                <p className=" text-center">
                  Best-in-class HCM and payroll partners choose G-P for our
                  leading EOR solutions, support and compliance.
                </p>
                <div className="">
                  <button className="flex items-center gap-2  text-[#0000FF] cursor-pointer rounded-full px-2 py-2 tex-[14px]">
                    <span>See partners </span>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
