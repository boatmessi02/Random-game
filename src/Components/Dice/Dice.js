import React from "react";
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from "react-icons/bs";

const Dice = (props) => {
  if (props.faceDice === 1) {
    return <BsDice1 className="die" />;
  }
  if (props.faceDice === 2) {
    return <BsDice2 className="die" />;
  }
  if (props.faceDice === 3) {
    return <BsDice3 className="die" />;
  }
  if (props.faceDice === 4) {
    return <BsDice4 className="die" />;
  }
  if (props.faceDice === 5) {
    return <BsDice5 className="die" />;
  }
  if (props.faceDice === 6) {
    return <BsDice6 className="die" />;
  }

  return null;
};

export default Dice;
