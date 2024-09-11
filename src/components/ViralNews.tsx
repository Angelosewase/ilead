import { SectionHeader } from "./utils";

interface News {
  img: string;
  title: string;
  description: string;
}

const news: Array<News> = [
  {
    img: "./src/assets/Rectangle 26.png",
    title: " Lorem ipsum dolor sit amet consectetur   ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat, ipsam blanditiis nulla cumque debitis ",
  },
  {
    img: "./src/assets/Rectangle 25.png",
    title: " Lorem ipsum dolor sit amet consectetur ,",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat, ipsam blanditiis nulla cumque debitis ",
  },
  {
    img: "./src/assets/Rectangle 24.png",
    title: " Lorem ipsum dolor sit amet consectetur ,",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Fugiat, ipsam blanditiis nulla cumque debitis ",
  },
];

const NewsComponent = ({ img, title, description }: News) => {
  return (
    <div className="flex-1 flex flex-col md:flex-row gap-2">
      <img src={img} alt="" className="w-full md:w-[70%]  h-40 md:h-32" />
      <div className=" flex flex-col md:w-[25%]  ">
        <h1 className="text-xs font-bold   mb-2">{title}</h1>
        <p className="text-gray-400 text-xs flex-1">{description}</p>
      </div>
    </div>
  );
};

function ViralNews() {
  return (
    <div className="min-h-[90vh]  flex flex-col  mt-10 px-2 md:px-10 lg:px-40  items-center gap-8 justify-center">
      <SectionHeader title="News" />
      <div className="flex-1 ">
        <h1 className="text-xl font-bold mb-10">Viral News</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className=" w-full lg:w-[48%] ">
            <img
              src="./src/assets/Rectangle 23.png"
              alt=""
              className="h-[350px] w-full"
            />
            <div className=" flex flex-col md:flex-row mt-4 gap-2">d
              <h1 className="text-lg font-bold flex-1">
                Lorem ipsum dolor sit amet consectetur ,
              </h1>
              <p className="text-gray-400 text-sm flex-1 leading-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Fugiat, ipsam blanditiis nulla cumque debitis dolorum quis ex
                dicta provident impedit deserunt facilis
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2 ">
            {news.map((element, idx) => (
              <NewsComponent
                title={element.title}
                img={element.img}
                description={element.description}
                key={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViralNews;
