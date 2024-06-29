import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";


const containerVariantss={
  hidden:{
   opacity:0,
  },
  visible:{
    opacity:1,
    transition:{
       duration:1,
       ease:'easeOut',
        delay:0.5
    }
  }
}

function Hero() {
  return (
    <motion.div
      className="hero lg:min-h-[100vh] md:min-h-[80vh]  min-h-[100vh]  lg:px-10 mt-20 md:mt-10 "
     variants={containerVariantss}
     initial='hidden'
     animate="visible"
  
    >
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="relative ">
          <img
            src="./src/assets/Vector 4.png"
            className="md:w-[60vw] w-[100vw] "
            alt="Background"
          />
          <div className="absolute inset-0 flex items-center justify-center flex-1 z-10">
            <img
              src="./src/assets/Vector 3.png"
              className="md:w-[90%] bg-transparent"
              alt="Overlay"
            />
          </div>
          <div className="flex rounded-xl bg-slate-600 w-32 py-1.5 items-center justify-center text-white font-semibold absolute z-10 top-28 left-0">
            Intergrity
          </div>
          <div className="flex rounded-xl bg-zinc-300 w-32 py-1.5 items-center justify-center text-white font-semibold absolute z-10 top-24 right-0">
            Honesty
          </div>
          <div className="flex rounded-xl bg-sky-300 w-32 py-1.5 items-center justify-center text-white font-semibold absolute z-10 bottom-20 left-0">
            Honesty
          </div>
          <div className="flex rounded-xl bg-blue-300 w-32 py-1.5 items-center justify-center text-white font-semibold absolute z-10 bottom-24 right-0">
            Honesty
          </div>
        </div>

        <div>
          <div className="flex flex-row items-center gap-2">
            <p className="w-10 h-0.5 bg-gray-900 border"></p>
            <motion.p
              className="text-sm text-gray-400 "
              initial={{ x: "-10vw" }}
              animate={{ x: 0 }}
              transition={{ duration: 1, ease: "easeOut", type:'spring',stiffness:120}}
            >
              Beta Version of iLead For you{" "}
            </motion.p>
          </div>
          <motion.h1
            className="text-4xl lg:text-6xl font-bold text-black"
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut"}}
          >
            I lead Session website here for you!
          </motion.h1>
          <motion.p
            className="py-6"
            initial={{ opacity: 0, x: "10vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </motion.p>

          <div className="flex gap-4 items-center">
            <button className=" bg-blue-600 text-white hover:scale-110  transition-all px-8 py-2  rounded-2xl border border-blue-500 hover:cursor-pointer ring-offset-1 ring-gray-100 flex flex-row items-center gap-2 ">
              Get Started
              <ArrowRightIcon
                width={20}
                height={20}
                color="#ffffff"
                className=""
              />
            </button>
            <div className="flex items-center gap-1">
              <ArrowRightCircleIcon
                width={15}
                height={15}
                className="-rotate-45"
              />
              <p className="text-sm underline font-semibold">
                <a href="">Check out work </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
