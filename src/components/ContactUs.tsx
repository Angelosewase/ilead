import { SectionHeader } from "./utils";

function ContactUs() {
  return (
    <div className=" min-h-[80vh] flex flex-col  px-2 md:px-10 lg:px-40  items-center  ">
      <SectionHeader title="Contact us" />

      <div className="flex gap-3 mt-10 ">
        <button className="px-4 py-1 border rounded border-blue-500 bg-blue-500 text-white ">
          General inquiries{" "}
        </button>
        <button className="px-4 py-1 border border-gray-200 rounded-">
          System inquiries
        </button>
      </div>

      <div className="w-full md:w-[95%] lg:w-[70%]  flex flex-col  mt-8 items-center gap-4 ">
        <div className="w-full flex  flex-col md:flex-row items-center justify-center gap-1 ">
          <input
            type="text"
            name=""
            id=""
            placeholder="your  name"
            className="border border-gray-300 outline-none w-full md:flex-1 px-2 py-1"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
            className="border border-gray-300 outline-none w-full  md:flex-1 px-2 py-1"
          />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="subject"
          className="border border-gray-300 outline-none w-full p-2"
        />

        <textarea
          name=""
          id=""
          placeholder="Message"
          className="border border-gray-30o outline-none w-full h-[200px] box-border p-2"
        ></textarea>

        <button className="px-6 py-1.5 rounded-lg  bg-blue-500 text-white font-semibold  ">send</button>
      </div>
    </div>
  );
}

export default ContactUs;
