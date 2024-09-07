import { motion, Variants } from "framer-motion";

import HVideo from "/images/highlight.mp4";

interface VariantProps {
  variants?: Variants;
}

const VideoCard = ({ variants }: VariantProps) => {
  return (
    <motion.div
      variants={variants}
      className="row-span-3 col-span-2 rounded-3xl w-full h-full overflow-hidden"
    >
      <video
        src={HVideo}
        loop
        muted
        autoPlay={true}
        className="w-[100%] h-full object-cover"
      />
    </motion.div>
  );
};

export default VideoCard;
