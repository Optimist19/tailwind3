import { useState } from "react";
import logo from "../../img/Image [false].png";
import { GiHamburgerMenu } from "react-icons/gi";

function Nav2() {
  const [toggle, setToggle] = useState(false);

  function toggleFtn() {
    setToggle(!toggle);
  }

  return (
    <nav className="w-full p-3">
      {/* <header>
        <div>
          <div>
            <div>
              <img src={logo} alt="" className="w-full" />
            </div>
          </div>
          <ul></ul>
        </div>
      </header> */}

      <header className="pt-[14vh] pb-3">
        <div className="flex items-center">
          <div className="flex items-center flex-1 gap-9">
            <div>
              <div className="w-[12vw]">
                <img src={logo} alt="" className="w-full" />
              </div>
            </div>

            <ul className="hidden sm:flex sm:items-center gap-4 ">
              <li>Solutions</li>
              <li>Products</li>
              {/* <li>Global Guidance</li> */}
              <li>Partners</li>
              <li>Resources</li>
            </ul>
          </div>

          <div>
            <p className="hidden sm:block sm:py-2 sm:px-2 sm:bg-[#0000FF] sm:text-white rounded-full">Request a proposal</p>
            <GiHamburgerMenu
              className="block text-2xl sm:hidden"
              onClick={toggleFtn}
            />
          </div>
        </div>
        {toggle && (
          <div className="flex items-center justify-center">
            <ul className="mobile flex flex-col items-center gap-3 sm:hidden ">
              <li className="cursor-pointer hover:text-xl hover:text-[#0000FF] hover:font-bold">Solutions</li>
              <li className="cursor-pointer hover:text-xl hover:text-[#0000FF] hover:font-bold">Products</li>
              <li className="cursor-pointer hover:text-xl hover:text-[#0000FF] hover:font-bold">Global Guidance</li>
              <li className="cursor-pointer hover:text-xl hover:text-[#0000FF] hover:font-bold">Partners</li>
              <li className="cursor-pointer hover:text-xl hover:text-[#0000FF] hover:font-bold">Resources</li>
            </ul>
          </div>
        )}
      </header>
    </nav>
  );
}

export default Nav2;
