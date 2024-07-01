import Logo from "../components/Logo";
import { PasswordInput, SociaLoginComponent } from "./Login";

function SignUp() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className=" w-full md:w-[80%] h-[90%]  flex">
        <div className="hidden lg:block flex-1">
          <img src="/imgs/Group 4.png" alt="" className="h-full " />
        </div>
        <div className=" w-full lg:w-[55%]  p-2 lg:p-10 flex flex-col md:pt-20  pt-4 ">
          <Logo />
          <h1 className="text-3xl font-semibold mt-4">Sign up </h1>
          <p className="font-light  text-sm">
            Let'as get all your details set up to access your personal account
          </p>
          <div className="mt-4 w-full  ">
            <form action="">
              <div className="flex gap-5 w-full flex-wrap">
                <fieldset className="border  border-black rounded px-4 pt-1 pb-1.5 flex items-center flex-1">
                  <legend className="text-xs ">First name</legend>
                  <input
                    type="text"
                    placeholder="first name"
                    className="flex-1 outline-none placeholder:text-black placeholder:opacity-70"
                  />
                </fieldset>{" "}
                <fieldset className="border  border-black rounded px-4 pt-1 pb-1.5 flex items-center flex-1">
                  <legend className="text-xs ">last name</legend>
                  <input
                    type="text"
                    placeholder="last name"
                    className="flex-1 outline-none placeholder:text-black placeholder:opacity-70"
                  />
                </fieldset>
              </div>
              <div className="flex gap-5 mt-3 flex-wrap">
                <fieldset className="border  border-black rounded px-4 pt-1 pb-1.5 flex items-center flex-1">
                  <legend className="text-xs ">Email</legend>
                  <input
                    type="text"
                    placeholder="johnDoe@gmail.com"
                    className="flex-1 outline-none placeholder:text-black placeholder:opacity-70"
                  />
                </fieldset>{" "}
                <fieldset className="border  border-black rounded px-4 pt-1 pb-1.5 flex items-center flex-1">
                  <legend className="text-xs ">Phone number</legend>
                  <input
                    type="tel"
                    placeholder="+250 7886 18 600 "
                    className="flex-1 outline-none placeholder:text-black placeholder:opacity-70"
                  />
                </fieldset>
              </div>
              <fieldset className="border  border-black rounded px-4 pt-1 pb-1.5 flex items-center mt-3 flex-1">
                <legend className="text-xs ">School</legend>
                <input
                  type="text"
                  placeholder="RWANDA CODING ACADEMY"
                  className="flex-1 outline-none placeholder:text-black placeholder:opacity-70"
                />
              </fieldset>
              <fieldset className="border  border-black rounded px-4 pt-1 pb-1.5 flex items-center mt-3">
                <legend className="text-xs ">Password</legend>
               <PasswordInput />
              </fieldset>
              <label className="flex mt-4">
                <input type="checkbox" name="" id=""  className="mr-1 ml-1 "/>
                 <p className="text-xs font-semibold ">I agree all a <span className="text-red-500">terms</span>  and <span className="text-red-500">Privacy policy</span>   </p>
                </label>
                <button type="submit" value="" className=" bg-sky-500 rounded text-white text-center font-semibold w-full text-sm  py-2  mt-6 " > create account</button>
                <p className="text-xs w-full text-center mt-2 cursor-pointer">Already have an account? <a href="/login" className=" ml-1 font-semibold text-red-500 hover:underline">Login</a></p>
            </form>
            <SociaLoginComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
