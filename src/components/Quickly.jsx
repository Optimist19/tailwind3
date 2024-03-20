import { FaArrowRight } from "react-icons/fa6";

import bluepic from "../img/Div [saf-of].png";
import employee1 from "../img/Link [group] (1).png";
import employee2 from "../img/Link [group].png";
import Canvas from "../img/Canvas.png";
import Canvas1 from "../img/Canvas1.png";

function Quickly() {
  return (
    <section className="py-10 px-3">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4 sm:items-center sm:flex-row-reverse sm:gap-5">
          <div className="">
            <div className="flex flex-col gap-4">
              <h1 className="text-[12px]">EXPAND GLOBALLY</h1>
              <h2 className="text-3xl text-center font-bold font-bold">
                Quickly expand your workforce
              </h2>
              <p className="text-[12px]">
                Take advantage of our full suite of Employer of Record products
                and solutions to hire who you want, wherever you want &#8212;
                without setting up new entities.
              </p>

              <button className="flex items-center gap-2  text-[#0000FF] cursor-pointer">
                <span>Learn more </span>
                <FaArrowRight />
              </button>

              <div className="flex items-center gap-2">
                <div>
                  <img
                    src={employee1}
                    alt=""
                    className="cursor-pointer rounded-md"
                  />
                </div>
                <div>
                  <img
                    src={employee2}
                    alt=""
                    className="cursor-pointer rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={bluepic} alt="" className="rounded-md" />
          </div>
        </div>

        <div className="flex flex-col gap-4  sm:items-center sm:flex-row-reverse">
          <div className="flex flex-col gap-4">
            <h1 className="text-[12px] mt-8">MANAGE GLOBAL TEAMS</h1>
            <h2 className="text-3xl text-center font-bold">
              Manage your teams at every step.
            </h2>
            <p className="text-[12px]">
              Support your teams with tools that cover the entire employment,
              time off, expense management and more.
            </p>

            <button className="flex items-center gap-2  text-[#0000FF] cursor-pointer">
              <span>Learn more </span>
              <FaArrowRight />
            </button>
          </div>

          <div>
            <div>
              <img src={Canvas} alt="" className="rounded-md" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:items-center sm:flex-row-reverse">
          <div className="flex flex-col gap-4">
            <h1 className="text-[12px] mt-3 font-bold">
              UNLOCK GLOBAL INSIGHTS
            </h1>
            <h2 className="text-3xl text-center">
              Use deeper data to scale faster.
            </h2>
            <p className="text-[12px]">
              Gain the insights you need to make better expansion decisions
              &#8212; including valuable salary data and employer cost burdern
              calculations &#8212; all in one, unified platform.
            </p>

            <button className="flex items-center gap-2  text-[#0000FF] cursor-pointer">
              <span>Learn more </span>
              <FaArrowRight />
            </button>
          </div>

          <div>
            <div>
              <img src={Canvas1} alt="" className="rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quickly;
