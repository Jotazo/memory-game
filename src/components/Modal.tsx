import { motion } from "framer-motion";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-zinc-950 opacity-70"></div>
      {children}
    </motion.div>
  );
};

export default Modal;
