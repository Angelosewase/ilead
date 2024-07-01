import { useState } from "react";
import Logo from "../components/Logo";

interface option {
  url: string;
  text: string;
  setState?:(state:boolean)=>void;
   state?:boolean
}

const optionsData: Array<option> = [
  {
    url: "/imgs/person-reading.png",
    text: "Am a student ,Looking Forward to ILead sessions",
  },
  {
    url: "/imgs/Group.png",
    text: "Am a student ,a  facilitator of a certain round table , I need to mark for attendance  i need easy by easy use of this App",
  },
  {
    url: "/imgs/person-sneezing.png",
    text: "Am an overall facilitator, i need help to  manage ilead at school ",
  },
  {
    url: "/imgs/person-reading.png",
    text: "Am a student ,a  facilitator of a certain round table , I need to mark for attendance  i need easy by easy use of this App",
  },
];

function Get_started() {
const [selected,setSelected]=useState<boolean>(false)

  return (
    <div className=" px-3 lg:px-20 md:px-10 h-[100vh]">
      <div className="mt-10">
     <Logo />
      </div>
      <div className="w-full   flex mt-16 flex-col align-middle items-center">
        <h2 className="text-4xl  font-semibold">
          Join us as a student, Coordinator or overall Coordinator
        </h2>
        <div className="   mt-10   grid grid-cols-1 md:grid-cols-2 gap-4">
          {optionsData.map((option, idx) => (
            <SelectElement {...option} key={idx} setState={setSelected} state={selected}/>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center flex-col items-center">
        <button className={`px-6 py-2   rounded-3xl  text-white text-base font-semibold mt-8    transition-all ${selected ? 'hover:scale-110 bg-blue-500': 'bg-gray-200'}`}>
          create account
        </button>
        <p className="font-semibold mt-2 cursor-pointer">
          alreay have an account ?{" "}
          <span className="text-blue-500 underline">
            <a href="/login">log in</a>
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

const SelectElement: React.FC<option> = ({ text, url ,setState,state}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  function handleClick() {
    setIsClicked(!isClicked);
    if(setState){
        setState(!state)

    }
  }

  return (
    <>
      <div
        className={`   flex p-4 rounded-xl max-w-[430px] transition-all delay-75 ${
          isHovered || isClicked
            ? "border-blue-400 border-[3px]"
            : "border-gray-400 border-2  "
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="flex flex-col gap-10  max-w-[90%]">
          <img
            src={url}
            alt="this is the person leading"
            className="h-16 w-16 "
          />
          <p className="text-lg font-semibold leading-6 ">{text}</p>
        </div>
        <button
          className={`w-6 h-6 border  rounded-full transition-all ${
            isHovered || isClicked
              ? "border-blue-400 border-[3px]"
              : "border-gray-400 border-2  "
          } ${isClicked && "bg-blue-400"}`}
        />
      </div>
    </>
  );
};

export default Get_started;
