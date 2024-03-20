import logo from "../img/Image [false].png";

import { FaRegEnvelope } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <section className="w-full">
      <div className="px-3 py-6">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center flex-col gap-5">
            <select>
              <option value="english">English</option>
            </select>
            <div>
              <p className="font-bold">Talk to an expert</p>
              <p>+1 (888)-855-5238</p>
            </div>
            <div>
              <p className="font-bold">Support:</p>
              <p>Contact Us</p>
            </div>
            <div className="flex items-center justify-between w-[15vw]">
              <IoLogoTwitter className="text-3xl cursor-pointer mr-1" />
              <AiFillInstagram className="text-3xl cursor-pointer mr-1" />
              <FaYoutube className="text-3xl cursor-pointer mr-1" />
              <FaLinkedinIn className="text-3xl cursor-pointer mr-1" />
              <FaEnvelope className="text-3xl cursor-pointer mr-1" />
              <FaRegEnvelope className="text-3xl cursor-pointer mr-1" />;
            </div>
          </div>
        </div>

		<div className="flex items-center justify-between flex-wrap gap-3 my-4">
			<p className="font-bold">Terms of Service</p>
			<p className="font-bold">Privacy Policy</p>
			<p className="font-bold">Candidate Privacy Notice</p>
			<p className="font-bold">Modern Slavery Statement</p>
			<p className="font-bold">Accessibilty</p>
			<p className="font-bold">Pay Equity compliance</p>
		</div>
		<small className="text-[#66717F]">Copyright @ 2024. All Rights Reserved.</small>
      </div>
    </section>
  );
}

export default Footer;
