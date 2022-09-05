import React from "react";
import "../../Styles/globals.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="SectionsHome  h-screen">
      <img
        className="landing"
        src="./images/Darkness.jpg"
        alt="MonsterOrange"
      />
      <div className="Containers  text-[gray]">
        <motion.div whileTap={{ scale: 0.9 }} className="playButton bg-[white] text-[red]">
          <Link className="text-4xl" to="/Players">
            PLAY
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
