import { motion, Variants } from "framer-motion";

interface VariantProps {
  variants?: Variants;
}

const Header = ({ variants }: VariantProps) => {
  return (
    <motion.div
      variants={variants}
      className="col-span-2 bg-slate-300 rounded-3xl"
    >
      <h1 className="uppercase text-3xl font-bold m-8">sirreal.ai</h1>
      <p className="m-8 text-xl">Going places one more time</p>
      <p className="m-8 text-lg">@sirreal.ai</p>
    </motion.div>
  );
};

export default Header;
