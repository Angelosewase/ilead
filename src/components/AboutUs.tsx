import { SectionHeader } from "./utils";

interface AboutUsFacts {
  stat: number;
  descritption: string;
}

const AboutUsFacts = ({ stat, descritption }: AboutUsFacts) => {
  return (
    <>
      <div className="flex rounded-lg items-center justify-center flex-col w-[300px] lg:w-[200px] bg-gray-100 py-2">
        <p className="text-2xl font-semibold">{stat}</p>
        <p className="text-xs text-gray-400">{descritption}</p>
      </div>
    </>
  );
};

function AboutUs() {
  return (
    <div className="h-[100vh] pt-20">
      <SectionHeader title="About us" />

      <div className="mt-14 px-2 md:px-10 lg:px-40  flex md:flex-col lg:flex-row justify-center align items-center gap- lg:flex-nowrap flex-wrap flex-1">

        <div className="flex-1 border border-gray-200 rounded-xl p-4 shadow-sm">
          <p className="text-blue-500 font-semibold">How it started</p>
          <h1 className=" text-4xl lg:text-6xl font-bold my-8 ">
            Our Dream is to shape future leaders through the ilead program
            online{" "}
          </h1>
          <p className="text-gray-400 text-sm leading-4 mt-14 mb-8 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quo
            eveniet esse, neque sint laboriosam, placeat reprehenderit
            laudantium corporis quaerat totam quis accusamus consequuntur facere
            obcaecati odio possimus! Doloribus, aperiam? Ab quia reiciendis,
            quas minus similique accusamus libero necessitatibus praesentium
            enim fuga, id cupiditate. Maiores dolorum voluptatem porro commodi
            explicabo exercitationem a ratione pariatur aperiam, eum iure quod
            culpa vel?
          </p>
        </div>
        <div className="flex-1 flex flex-col   justify-between gap-10  items-center box-border p-2 ">
          <div className="flex-1">
            <img
              src="./src/assets/Rectangle 15.png"
              alt="this is the image"
              className="h-72 lg:w-[450px] md:w-[800px] w-[355px]"
            />
          </div>

          <div className="flex-1 flex items-center  justify-center flex-col   gap-2 border border-gray-200 rounded-xl shadow-sm  py-3 px-5">
            <div className="flex  gap-5 flex-col md:flex-row">
              <AboutUsFacts
                stat={24}
                descritption="lorem psunt dolor sit amet"
              />
              <AboutUsFacts
                stat={24}
                descritption="lorem psunt dolor sit amet"
              />
            </div>


            <div className="flex  gap-5 flex-col md:flex-row">
              <AboutUsFacts
                stat={24}
                descritption="lorem psunt dolor sit amet"
              />
              <AboutUsFacts
                stat={24}
                descritption="lorem psunt dolor sit amet"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
