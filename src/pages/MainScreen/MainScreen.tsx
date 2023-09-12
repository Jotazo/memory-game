import { motion } from "framer-motion";

import CardLayout from "../../layouts/CardLayout";

import MainMenu from "./MainMenu/MainMenu";

const MainScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-yankeesBlue h-full"
    >
      <div className="h-[calc(100vh-7rem)] flex flex-col justify-center items-center gap-12">
        <h2 className="text-softWhite">memory</h2>
        <CardLayout>
          <MainMenu />
        </CardLayout>
      </div>
    </motion.div>
  );
};

export default MainScreen;
