import { motion } from "framer-motion";

const OnlyMobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-yankeesBlue h-full flex justify-center items-center text-softWhite"
    >
      <h1 className="text-center">
        Solo en móviles en posición vertical actualmente
      </h1>
    </motion.div>
  );
};

export default OnlyMobile;
