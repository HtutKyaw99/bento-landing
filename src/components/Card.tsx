import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button";

interface VariantProps {
  variants?: Variants;
  Imm: string;
  style: string;
  label: string;
}

const Card = ({ variants, style, Imm, label }: VariantProps) => {
  return (
    <motion.div variants={variants} className={style}>
      <img
        src={Imm}
        className="w-full h-[85%] object-top rounded-b-3xl object-cover"
        alt="sci fi image"
      />
      <div className="flex items-center justify-between w-[85%] mx-auto h-[15%]">
        <h3 className="font-semibold text-lg">{label}</h3>
        <Button bgColor="black">
          <ArrowRight color="#ffffff" className="-rotate-45" />
        </Button>
      </div>
    </motion.div>
  );
};

export default Card;
