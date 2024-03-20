import pic1 from "../img/Image [undefined].png";
import pic2 from "../img/Div [col-span-12].png";

function Globe() {
  return (
    <section className="w-full h-full bg-[#0000FF] text-white pt-7 px-3">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-[12px]">GLOBALPEDIA</h1>
          <h2 className="text-2xl text-center">
            Let our world of knowledge be your trusted guide.
          </h2>
          <p className="text-[12px] text-center">
            Globalpedia is your go-to-guide with the lastes labor laws, norms,
            and regulations. Whether you&apos;re hiring a single person or
            growing your global workforce through an Employer or Record,
            you&apos;ll know what to expect.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="my-5 w-[20vw] ">
            <img src={pic1} alt="" className="w-full" />
          </div>
        </div>
      </div>

      <div className="my-6">
        <div className="border bg-white h-1 mx-[9%]"></div>
      </div>

      <div className="flex items-center justify-center">
        <div className=" w-[30vw]">
          <img src={pic2} alt="" className="w-[100%]" />
        </div>
      </div>
    </section>
  );
}

export default Globe;
