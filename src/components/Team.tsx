import { SectionHeader } from "./utils";

interface teamItem {
  title: string;
  description: string;
}

const TeamItem = ({ title, description }: teamItem) => {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold my-5">{title}</h2>
        <p className="text-sm leading-4 text-gray-400">{description}</p>
      </div>
    </>
  );
};

function Team() {
  return (
    <div className=" mt-[600px] md:mt-10">
      <SectionHeader title="our team" />
      <div className="flex  mt-14 px-2 md:px-10 lg:px-40 gap-20 flex-col lg:flex-row">
        <div className="flex-1 flex items-center justify-center flex-col">
          <img
            src="./src/assets/Vector 5.png"
            alt=""
            className=" h-[400px] md:h-[500px] -mb-28 md:-mb-40"
          />
          <img src="./src/assets/Vector 6.png" alt="" className=" h-[400px] md:h-[500px] " />
        </div>
        <div className="flex-1  flex flex-col justify-evenly ">
          <TeamItem
            title="Who we are ...?"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quo eveniet esse, neque sint laboriosam, placeat reprehenderit laudantium corporis quaerat totam quis accusamus consequuntur facere obcaecati odio possimus! "
          />
          <TeamItem
            title="Who we are ...?"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quo eveniet esse, neque sint laboriosam, placeat reprehenderit laudantium corporis quaerat totam quis accusamus consequuntur facere obcaecati odio possimus! "
          />
          <TeamItem
            title="Who we are ...?"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quo eveniet esse, neque sint laboriosam, placeat reprehenderit laudantium corporis quaerat totam quis accusamus consequuntur facere obcaecati odio possimus! "
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
