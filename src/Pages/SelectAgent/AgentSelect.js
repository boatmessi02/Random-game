import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const listAgent = [
  { url: "./images/MonsterPink.JPG", color: "#FF71BA", name: "PingPing" },
  { url: "./images/MonsterOrange.JPG", color: "orange", name: "SanSan" },
  { url: "./images/MonsterGreen.JPG", color: "green", name: "Hukky" },
  { url: "./images/MonsterBlue.JPG", color: "blue", name: "GuGoo" },
];

const AgentSelect = () => {

  // get value from amount players
  const location = useLocation();

  // array of agents selected
  const [agentSelected, setAgentSelected] = useState([]);

  // Next page
  const navigate = useNavigate();
  const nextPageRandom = (alreadyAgents) => {
    if (alreadyAgents.length > 0) {
      navigate("/Random", { state: alreadyAgents });
    }
  };

  // function selected put agents into array
  const handleSelectAgent = (url, nameAgentSelected) => {
    if (agentSelected.length === location.state) return;

    // check repeater
    if (agentSelected.length > 0) {
      if (agentSelected.some((agent) => agent.url === url)) return;
    }

    setAgentSelected([...agentSelected, { url: url, name: nameAgentSelected }]);

  };
  
  console.log("state", agentSelected);

  return (
    <div className="Sections ">
      <img
        className="landing"
        src="./images/Darkness.jpg"
        alt="MonsterOrange"
      />
      <div className="Containers text-white">
        <div className="WrapperButtonBack">
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="BackButton text-[#222] text-xl bg-[#fff] font-bold"
          >
            <Link to="/Players">Back</Link>
          </motion.div>
        </div>

        {/* Show Agent Selected */}

        <div className="WrapperBoxAgentSelect">
          <div className="WrapperAgentCol">
            <div className="WrapperReadyAgent">
              {agentSelected.map((items, index) => (
                <div key={index} className="ReadyAgents">
                  <div className="coverAgents">
                    <img
                      className="readyMonsterPic"
                      src={items.url}
                      alt="MonsterPink"
                    />
                  </div>
                  <p className="readyNamePlayers  text-white">{items.name}</p>
                </div>
              ))}
            </div>

            {/* Agent Select */}

            <div className="WrapperSelectAgent">
              {listAgent.map((agents, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectAgent(agents.url, agents.name)}
                  className="coverMonster"
                >
                  <p
                    className={`nameAgent text-center  text-[white]`}
                    style={{ background: agents.color }}
                  >
                    {agents.name}
                  </p>
                  <img className="Monsters" src={agents.url} alt={agents.url} />
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => nextPageRandom(agentSelected)}
            className="buttonStartGame"
          >
            Start
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentSelect;
