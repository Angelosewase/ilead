import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <div className="bg-black w-[100%] min-h-[60vh] px-2 md:px-10 lg:px-40 text-white pt-10 md:pt-20">
      <hr className="w-full  bg-white mb-10 lg:mb-20" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-5 md:mb-10">
        <div className="col-span-2 ">
          <h3 className="font-thin">I LEAD program </h3>
          <p className="text-xs mb-4 text-gray-200 opacity-80 font-serif font-light leading-6">
            shaping the future leaders through i lead program
          </p>

          <h1 className="text-2xl font-semibold font-serif">
            Subscribe to out newsLetter{" "}
          </h1>
          <p className="text-xs mb-4 text-gray-200 opacity-80 font-serif font-light leading-6">
            keep updated on new updated and whatever happening on Ilead program{" "}
          </p>

          <label className=" bg-gray-900 rounded flex items-center px-2 py-1">
            <input
              type="text"
              name=""
              id=""
              placeholder="email address "
              className="placeholder:text-white py-2 bg-gray-900 flex-1 outline-none placeholder:opacity-80"
            />
            <button className="px-1 py-1 rounded bg-sky-500 flex items-center justify-center">
              <PaperAirplaneIcon
                className=""
                height={20}
                width={20}
                color="#ffffff"
              />
            </button>
          </label>
        </div>
        <div className="flex flex-col gap-2 ">
          <h1 className="text-lg font-semibold">useful links</h1>
          <a className="font-extralight text-sm opacity-80"> Home</a>
          <a className="font-extralight text-sm opacity-80">About</a>
          <a className="font-extralight text-sm opacity-80">News</a>
          <a className="font-extralight text-sm opacity-80">Attendance</a>
          <a className="font-extralight text-sm opacity-80">Contacts</a>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">Quick actions</h1>
          <a href="" className="font-extralight text-sm opacity-80">check books</a>
          <a href="" className="font-extralight text-sm opacity-80">Get in touch</a>
          <a href="" className="font-extralight text-sm opacity-80">Check news</a>
        </div>
        <div>
        <h1 className="text-lg font-semibold">Contact us</h1>
        </div>
      </div>
      <div className=" px-2 md:px-10 flex items-center justify-center flex-col ">
        <hr className="w-full bg-white opacity-10"/>
         <div className="w-full flex justify-between items-center text-xs font-extralight opacity-20 mt-5 ">
            <p>copyright &#169 2025 ILEAD .all rights reserved </p>
            <p> privacy policy | Terms and Conditions | User Agreement | License </p>
         </div>
      </div>
    </div>
  );
}
