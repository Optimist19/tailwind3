import { FaArrowRight } from "react-icons/fa6";

import officeman from "../img/Screenshot 2024-02-26 at 2.38 1.png";

function Global() {
  return (
    <section>
      <div className="px-3 py-10 sm:flex items-center gap-3">
        <div>
          <h1 className="text-3xl py-3 font-bold text-center">
            Global <span className="text-[#0000FF]">hiring</span> made possible.
          </h1>
          <p className="py-3">
            Our Global Growth Platform <sup>TM</sup> pairs the industry&apos;s
            most compliant Employer of Record (EOR) solutions with best-in-class
            Payroll and HCM solutions, making it easy to hire and manage teams
            in 180+ countries &#8212; without setting up entities.
          </p>
          <div className="flex justify-between items-center py-4">
            <div>
              <button className="py-3 px-4 bg-[#0000FF] text-white rounded-full flex items-center gap-2">
                <FaArrowRight /> <span>Book a demo</span>
              </button>
            </div>
            <div>
              <button className="rounded-full bg-[#E1E9F4] py-3 px-4">
                Watch our platform
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:block sm:w-[40%] sm:min-w-[280px]">
          <img src={officeman} alt="" className="w-[100%]"/>
        </div>
      </div>
    </section>
  );
}

export default Global;
