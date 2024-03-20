import { FaArrowRight } from "react-icons/fa6";

function GlobalThinking() {
  return (
    <section className="w-full h-full bg-[#0000FF] text-white">
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="flex justify-center items-center  flex-col" >
          <h1 className="text-4xl text-center">Global thinking. Global growth. Let&apos;s go</h1>
          <div className="flex items-center gap-8 mt-8">
            <div>
              <button className="rounded-full bg-white text-black flex gap-1 items-center py-2 px-3 text-[15px] cursor-pointer">
                <FaArrowRight /> <span>Book a demo</span>
              </button>
            </div>
            <div>
              <button className="rounded-full border border-white py-2 px-3 text-[15px] cursor-pointer">Get in touch</button>
            </div>
          </div>
        </div>

		<div className="flex flex-col  gap-4 mt-7 sm:flex-row">
			<div className="flex flex-col gap-3 items-center cursor-pointer">
				<p className="sm:text-3xl font-bold">180+</p>
				<p>countries available</p>
			</div>
			<div className="flex flex-col gap-3 items-center cursor-pointer">
				<p className="sm:text-3xl font-bold">99%</p>
				<p>payroll accuracy</p>
			</div>
			<div className="flex flex-col gap-3 items-center cursor-pointer">
				<p className="sm:text-3xl font-bold">500+</p>
				<p>global partners</p>
			</div>
			<div className="flex flex-col gap-3 items-center cursor-pointer">
				<p className="sm:text-3xl font-bold">96%</p>
				<p>customer satisfaction</p>
			</div>
		</div>
      </div>
    </section>
  );
}

export default GlobalThinking;
