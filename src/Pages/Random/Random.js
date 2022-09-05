import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dice from "../../Components/Dice/Dice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Random() {
  const location = useLocation();
  // state url , name agents
  const infoAgents = location.state;

  // amount round , announce the winner
  const [round, setRound] = useState(1);

  // checking all player 
  const [runNumber, setRunNumber] = useState(0);

  // score each of player
  const [scoreFromRandom, setScoreFromRandom] = useState([]);

  // check end game
  const [gameOver, setGameOver] = useState(false);

  // show turn player
  const [nameTurnPlayer, setNameTurnPlayer] = useState(infoAgents[0].name);

  // set dice
  const [diceOne, setDiceOne] = useState(6);

  // Set default value of player

  const handleDefaultScoreArray = () => {
    const updateScoreArray = [];
    infoAgents.forEach(() => {
      updateScoreArray.push(0);
    });

    setScoreFromRandom(updateScoreArray);
  };

  useEffect(() => {
    handleDefaultScoreArray();
  }, []);

  const handleReset = () => {
    setRound(1);
    setRunNumber(0);
    setScoreFromRandom([]);
    setGameOver(false);
    setNameTurnPlayer(infoAgents[0].name);
    handleDefaultScoreArray();
  };

  const amountRound = (scoreArrayForFindMaxVal) => {

    // config round in the game

    if (round >= 5) {
      
      // Mapping for checking whether who is the winner

      let max = -99;
      let indexPlayer = 0;
      scoreArrayForFindMaxVal.map((score, index) => {
        if (score > max) {
          max = score;
          indexPlayer = index;
        }
      });
      setRound(infoAgents[indexPlayer].name);

      // end game

      setGameOver(true);

      return;
    }
    setRound((prv) => (prv += 1));
  };

  // function for random dice by math

  const handleDice = () => {
    const ran = Math.floor(Math.random() * (7 - 1) + 1);
    setDiceOne(ran);
    return ran;
  };

  const handleRandom = () => {
    if (gameOver) return;

    // Call function for random dice number

    let randomDice = handleDice();

    // Plus score in array
    // Mapping player by run number index

    const newArrayScore = [...scoreFromRandom];
    newArrayScore[runNumber] += randomDice;
    setScoreFromRandom(newArrayScore);

    // Checking whether all player have played yet?

    if (runNumber >= infoAgents.length - 1) {
      setRunNumber(0);
      amountRound(newArrayScore);
      return;
    }
    setNameTurnPlayer(infoAgents[runNumber + 1].name);
    setRunNumber((prv) => (prv += 1));
  };

  return (
    <div className="Sections ">
      <img
        className="landing"
        src="./images/Darkness.jpg"
        alt="MonsterOrange"
      />
      <div className="Containers text-white">
        <div className="flex flex-col gap-2 w-full items-center z-[99] justify-center mt-10">
          <div className="WrapperButtonBack">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="BackButton text-[#222] text-xl bg-[#fff] font-bold"
            >
              <Link to="/Players">Back</Link>
            </motion.div>
          </div>

          {/* Turn of player */}

          <div className="ShowTurnPlayer">{nameTurnPlayer}</div>

          <div className="flex justify-between w-full z-[99] items-center">
            {/* Player 1 */}

            <div className="flex flex-col justify-center items-center">
              <h1>{infoAgents[0].name}</h1>
              <img
                className="readyMonsterPic"
                src={infoAgents[0].url}
                alt="agent1"
              />
              <h1>Score {scoreFromRandom[0]}</h1>
            </div>

            {/* Winner  and Round*/}
            <div className="ButtonShowRoundAndWinner">
              {gameOver ? "The Winner is" : "Round"} {round}
            </div>

            {/* Player 2 */}

            <div className="flex flex-col justify-center items-center">
              <h1>{infoAgents[1].name}</h1>
              <img
                className="readyMonsterPic"
                src={infoAgents[1].url}
                alt="agent1"
              />
              <h1>Score {scoreFromRandom[1]}</h1>
            </div>
          </div>

          {/* Dice random */}

          <span className="flex ">
            <Dice faceDice={diceOne} />
          </span>

          {/* Button play random */}

          <div className="flex gap-10 mt-5">
            <div onClick={handleRandom} className="ButtonPlayGameRandom">
              Random
            </div>

            {/* Button Reset */}

            <div onClick={handleReset} className="ButtonResetRandom">
              Reset
            </div>
          </div>

          <div className="flex justify-between w-full z-[99]">
            {/* Player 3 */}

            {infoAgents[2] ? (
              <div className="flex flex-col justify-center items-center">
                <h1>{infoAgents[2].name}</h1>
                <img
                  className="readyMonsterPic"
                  src={infoAgents[2].url}
                  alt="agent1"
                />
                <h1>Score {scoreFromRandom[2]}</h1>
              </div>
            ) : null}

            {/* Player 4 */}

            {infoAgents[3] ? (
              <div className="flex flex-col justify-center items-center">
                <h1>{infoAgents[3].name}</h1>
                <img
                  className="readyMonsterPic"
                  src={infoAgents[3].url}
                  alt="agent1"
                />
                <h1>Score {scoreFromRandom[3]}</h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Random;
