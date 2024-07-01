import { useState } from "react";
import Logo from "../components/Logo";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
function Login() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className=" w-full md:w-[80%] h-[90%]  flex">
        <div className="flex-1 p-2 lg:p-10 flex flex-col md:pt-20  pt-4">
          <Logo />
          <h1 className="text-3xl font-semibold mt-4">Login </h1>
          <p className="font-light  text-sm">
            Login to access your ilead account
          </p>
          <div className="mt-4 w-full md:w-[90%] lg:w-[80%]">
            <form action="">
              <fieldset className="border  border-black rounded px-4 pt-1 pb-1.5 flex items-center">
                <legend className="text-xs ">Email</legend>
                <input
                  type="text"
                  placeholder="johnDoe@gmail.com"
                  className="flex-1 outline-none placeholder:text-black placeholder:opacity-70"
                />
              </fieldset>
              <fieldset className="border  border-black rounded px-4 pt-1 pb-1.5 flex items-center mt-3">
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
              <div className="mt-3 flex justify-between w-[]">
                <label className="flex ">
                <input type="checkbox" name="" id=""  className="mr-1 ml-1 "/>
                 <p className="text-sm ">Remember me </p>
                </label>
                  <a href="/" className="text-red-400 text-xs ">forgot password </a>
              </div>

              <button type="submit" value="" className=" bg-sky-500 rounded text-white text-center font-semibold w-full text-sm  py-2  mt-6 " > Log in</button>
         <p className="text-xs w-full text-center mt-2 cursor-pointer">Don't have an account <a href="/signup" className=" ml-1 font-semibold text-red-500 hover:underline">Sign up</a></p>
            </form>
        <SociaLoginComponent />

          </div>
        </div>


        <div className="hidden lg:block">
          <img src="/imgs/Frame 1.png" alt="" className="h-full " />
        </div>
      </div>
    </div>
  );
}

export default Login;

export function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-1 items-center">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
        className="flex-1 outline-none placeholder:text-black placeholder:opacity-70"
      />
      <span className="eye-icon" onClick={toggleShowPassword}>
        {showPassword ? <EyeSlashIcon  className="w-4"/> : <EyeIcon  className="w-4"/>}
      </span>
    </div>
  );
}


export const SocialLogin=({img}:{img:string})=>{
  return <>
  <button className="px-10 md:px-14 py-2 border border-sky-500 rounded  ">
    <img src={`/imgs/${img}`} alt="" className="w-6 h-6 " />
  </button>
  </>
}

export const SociaLoginComponent=()=>{
  return<>
  <div className="mt-12 flex justify-evenly">

    <SocialLogin img="google.png"/>
    <SocialLogin img="facebook.png"/>
    <SocialLogin img="apple.png"/>
  </div>
  </>
}
