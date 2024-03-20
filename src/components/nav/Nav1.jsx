import { RxCaretDown } from "react-icons/rx";
import { GrFormSearch } from "react-icons/gr";

function nav1() {
  return (
    <div className="w-full bg-[#F9F9F9] fixed z-10">
      <header className="flex items-center justify-end gap-3 p-3 text-[#66717F] text-[10px]">
        <ul className="flex items-center gap-3">
          <li className="cursor-pointer">+1(888)-855-5328</li>
          <li className="cursor-pointer">Contact Us</li>
          <li className="cursor-pointer">Sign</li>
          <li className="cursor-pointer">English</li>
        </ul>
        <div className="flex items-center gap-3">
          <RxCaretDown className="cursor-pointer" />
          <GrFormSearch className="cursor-pointer" />
        </div>
      </header>
    </div>
  );
}

export default nav1;
