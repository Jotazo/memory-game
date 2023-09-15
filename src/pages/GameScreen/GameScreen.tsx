import { motion } from "framer-motion";

import Header from "./Header";
import Grid from "./Grid/Grid";
import Footer from "./Footer/Footer";

const GameScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[calc(100vh-3rem)] container p-6 flex flex-col justify-between"
    >
      <Header />
      <Grid />
      <Footer />
    </motion.div>
  );
};

export default GameScreen;
