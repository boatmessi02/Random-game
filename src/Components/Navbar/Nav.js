import React from "react";
import "../../Styles/globals.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiRollingDices } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="NavContainer ">
        <motion.div whileTap={{ scale: 0.9 }} className="headerLogo justify-between">
          <Link
            className="flex text-white text-4xl gap-2"
            to="/"
          >
            <GiRollingDices />
            RandomForWinner
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Nav;
