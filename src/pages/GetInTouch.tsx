import React, { ReactNode } from "react";
import NavbBar from "../components/NavbBar";
import { PaperAirplaneIcon, PhoneIcon } from "@heroicons/react/16/solid";
function GetInTouch() {
  return (
    <>
      <div className=" w-full h-[100vh]">
        <NavbBar />
        <div className=" flex-1 h-full flex items-center justify-center gap-10 pt-20 bg-slate-50">
          <div className="w-5/12 h-[85vh] shadow-xl shadow-gray-100  rounded-lg   bg-white p-4">
            <div className=" border-b border-gray-200 pb-4">
              <h3 className="text-blue-500 font-semibold">Get In touch</h3>
              <h1 className="text-2xl font-semibold mt-2 ">
                Let’s Get Your Ilead Info, Fill The Following form{" "}
              </h1>
              <p className="text-sm text-gray-400 leading-5 w-9/12 mt-2   ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis nisl vitae leo sagittis mattis. Fusce id lacus sit amet
                eros tincidunt aliquet.
              </p>
            </div>

            <div className="">
              <form className=" flex justify-between px-10 ">
                <div>
                  <Input name="facilitator" placeholder=" full name" />
                  <Input name="member_1" placeholder=" full name" />
                  <Input name="member_3" placeholder=" full name" />
                  <Input name="member_5" placeholder=" full name" />
                  <Input name="member_7" placeholder=" full name" />
                  <Input name="member_9" placeholder=" full name" />
                </div>
                <div>
                  <Input name="round table " placeholder="enter full name" />
                  <Input name="member_2" placeholder=" full name" />
                  <Input name="member_4" placeholder=" full name" />
                  <Input name="member_6" placeholder=" full name" />
                  <Input name="member_8" placeholder=" full name" />
                </div>
              </form>
            </div>
          </div>
          <div className="w-4/12 h-[85vh] flex flex-col gap-8 ">
            <div className="w-full h-[40%] ">
              <img
                src="/src/assets/ilead.png"
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className=" w-full flex-1  shadow-2xl shadow-gray-100  rounded-xl   bg-white h-5/12 p-4">
              <h3 className="text-blue-500 font-semibold">In any problem</h3>
              <h1 className="text-2xl font-bold mt-2 ">
              Reach Out to us, We are here to Help 
              </h1>
              <div className="flex flex-col gap-2  mt-6">
                
                <ContactItem Icon={<PaperAirplaneIcon className="text-blue-500 h-6 -rotate-45 " />} name="Email" details="lollie@gmail.com"/>
                <ContactItem Icon={<PhoneIcon  className="text-blue-500 h-6 "/>} name="Phone" details="+250725578690"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetInTouch;

interface inputData {
  name: string;
  placeholder: string;
  //state to manage
}

export const Input: React.FC<inputData> = ({ name, placeholder }) => {
  return (
    <>
      <label className="flex flex-col gap-0.5 my-3  w-56  ">
        <p className="font-medium ">{name}</p>
        <input
          type="text"
          placeholder={placeholder}
          className="bg-gray-50 px-2 py-1 rounded placeholder:text-gray-400"
        />
      </label>
    </>
  );
};


interface contactItem{
    Icon:ReactNode
    name:string
    details:string
}

export const ContactItem:React.FC<contactItem> =({Icon, name, details})=>{
    return <>
    <div className="flex gap-1 hover:cursor-pointer">
        {Icon}
        <div className="flex flex-col ">
            <p className="font-bold -mb-1">{name}</p>
            <p className="text-gray-300 text-xs">{details}</p>
        </div>
    </div>
    </>
}