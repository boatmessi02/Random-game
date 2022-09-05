import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Players() {
  const navigate = useNavigate();

  // push change url and state
  
  const nextPageAgentSelect = (amountPlayer) => {
    navigate("/AgentSelect", { state: amountPlayer });
  };

  return (
    <div className="Sections ">
      <img
        className="landing"
        src="./images/Darkness.jpg"
        alt="MonsterOrange"
      />
      <div className="Containers ">
        <div className="WrapperPlayersButton text-white text-xl">
          <motion.div
            onClick={() => nextPageAgentSelect(2)}
            whileTap={{ scale: 0.9 }}
            className="playButton bg-[#A64ADB] font-bold"
          >
            2 Players
          </motion.div>

          <motion.div
            onClick={() => nextPageAgentSelect(3)}
            whileTap={{ scale: 0.9 }}
            className="playButton bg-[#E24A8D] font-bold"
          >
            3 Players
          </motion.div>

          <motion.div
            onClick={() => nextPageAgentSelect(4)}
            whileTap={{ scale: 0.9 }}
            className="playButton bg-[#47F0F3] font-bold"
          >
            4 Players
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Players;
