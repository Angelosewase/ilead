import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

interface bookItem {
  image: string;
  title: string;
  description: string;
  style?: any;
}

const BookItem = ({ image, title, description, style }: bookItem) => {
  return (
    <>
      <div
        className="flex  shadow-md  pr-4 rounded-xl gap-3 flex-wrap "
        style={{ ...style }}
      >
        <img src={image} alt="" className="w-20 " />
        <div className="flex-1 flex flex-col pt-1">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-xs text-gray-700">{description}</p>
          <ArrowRightIcon
            width={20}
            height={20}
            color="#000000"
            className="self-end"
          />
        </div>
      </div>
    </>
  );
};

export default function Books() {



  return (
    <motion.div
      className="px-2 md:px-10 lg:px-40 flex justify-between gap-8 md:flex-nowrap flex-wrap"
      initial={{opacity:0}}
      animate={{opacity:1}}
       transition={{delay:1 ,duration:2}}
    >
      <BookItem
        image="./src/assets/Rectangle 6.png"
        title="I choose"
        description="lorem ipsum dolor sit amit, consecteteur  adisping eut"
      />{" "}
      <BookItem
        image="./src/assets/Rectangle 6.png"
        title="I choose"
        description="lorem ipsum dolor sit amit, consecteteur  adisping eut"
      />{" "}
      <BookItem
        image="./src/assets/Rectangle 6.png"
        title="I choose"
        description="lorem ipsum dolor sit amit, consecteteur  adisping eut"
      />
    </motion.div>
  );
}
