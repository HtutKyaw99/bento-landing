import { motion, Variants } from "framer-motion";
import Card from "./Card";

import Imm1 from "/images/image1.jpg";
import Imm2 from "/images/image2.jpg";
import Header from "./Header";
import VideoCard from "./VideoCard";

const LayoutB = () => {
  const container: Variants = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className="grid grid-cols-4 grid-rows-3 gap-2 h-[calc(100vh-74px)] w-full"
    >
      <Header variants={item} />
      <Card
        variants={item}
        Imm={Imm1}
        label="New Collection"
        style="row-span-2 row-start-2 row-end-4 col-start-1 bg-slate-300 rounded-3xl overflow-hidden"
      />
      <Card
        variants={item}
        Imm={Imm2}
        label="What is coming?"
        style="row-span-2 row-start-2 row-end-4 col-start-2 bg-slate-300 rounded-3xl overflow-hidden"
      />
      <VideoCard variants={item} />
    </motion.div>
  );
};

export default LayoutB;
