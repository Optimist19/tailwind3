import { FaArrowRight } from "react-icons/fa6";

function BuildTeams() {
  return (
    <section className="w-full py-[10vh]">
      <div className="flex flex-col gap-7 px-3 sm:flex-row sm:items-center lg:items-center lg:justify-center">
        <div className="flex flex-col gap-3 lg:w-[25vw]">
          <h1 className="text-[12px]">OUR SOLUTIONS</h1>
          <h2 className="text-3xl text-center font-bold sm:text-left">Build teams quickly and compliantly on our</h2>
          <h3 className="text-2xl text-[#0000FF] text-center sm:text-left">#1 Global Growth Platform</h3>
        </div>
        <div className="flex flex-col gap-3 lg:w-[25vw]">
          <p className="text-[12px]">
            Start in minutes with unmatched EOR solutions, generative AI-powered
            tools, and global guidance from the industry&apos;s largest team of
            HR and legal expert&apos;s
          </p>
          <div>
            <div>
              <button className="py-3 px-4 bg-[#0000FF] text-white rounded-full flex items-center gap-2">
                <FaArrowRight /> <span>Discover our solutions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildTeams;
