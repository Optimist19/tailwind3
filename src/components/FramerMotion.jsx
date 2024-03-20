import Marquee from "react-fast-marquee";

import pic1 from "../img/Clip path group (1).png";
import pic2 from "../img/Clip path group (2).png";
import pic3 from "../img/Clip path group (3).png";
import pic4 from "../img/Clip path group (4).png";

import pic5 from "../img/Clip path group.png";
import pic6 from "../img/Group.png";

function FramerMotion() {
  return (
    <section className="w-full py-4 px-3">
      <Marquee pauseOnHover speed={10} delay={4}>
        <div>
          <img src={pic1} alt="" className="my-[8px] mx-[30px]" />
        </div>
        <div>
          <img src={pic2} alt="" className="my-[8px] mx-[30px]" />
        </div>
        <div>
          <img src={pic3} alt="" className="my-[8px] mx-[30px]" />
        </div>
        <div>
          <img src={pic4} alt="" className="my-[8px] mx-[30px]" />
        </div>
        <div>
          <img src={pic5} alt="" className="my-[8px] mx-[30px]" />
        </div>
        <img src={pic6} alt="" className="my-[8px] mx-[30px]" />
        <div></div>
      </Marquee>
    </section>
  );
}

export default FramerMotion;
