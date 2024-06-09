import { SectionHeader } from "./utils";

function Attendance() {
  return (
    <div className="min-h-[85vh]  flex flex-col  mt-8 px-2 md:px-10 lg:px-40  gap-8 mb-4   ">
      <SectionHeader title="Attendance" />

      <div className="flex-1 flex flex-col-reverse lg:flex-row gap-4 ">
        <div className=" flex-1 flex flex-col  py-4">
          <h2 className="text-xl text-gray-400 mb-8">Attendance</h2>
          <h1 className="text-3xl font-bold mb-4">
            Make your work work flow easy faster and easy to understanf plus
            simple and efficient working with{" "}
          </h1>
          <p className="text-xs text-gray-400 self-end mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sunt quae dolorem natus ullam sed libero optio molestias. Ea maiores
            dolorem sunt expedita accusamus. Non iste dignissimos nemo
            recusandae nulla? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Molestiae sunt quae dolorem natus ullam sed libero optio
            molestias. Ea maiores dolorem sunt expedita accusamus. Non iste
            dignissimos nemo recusandae nulla?
          </p>
          <div className="flex gap-4  items-center ">
            <button className="bg-blue-500 text-white p-3 rounded-lg font-semibold n">
              Get Started
            </button>
            <button className="border border-blue-400 rounded-lg bg-gray-50 font-sembold p-3">
              Explore more
            </button>
          </div>
        </div>

        <div className=" flex-1 mb-2  flex items-center justify-center overflow-hidden h-[70vh]">
          <img
            src="./src/assets/Group 2015.png"
            alt=""
            className="h-auto  md:h-[600px] lg:h-[650px] mb-40"
          />
        </div>
      </div>
    </div>
  );
}

export default Attendance;
