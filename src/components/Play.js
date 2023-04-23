import React from 'react';

import { Link } from 'react-router-dom';
import "../Styles/Play.css"
const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <Link to="/game">
        <div id="paper" onClick={setChoice} className="icon icon--paper">
          Paper
        </div>
      </Link>
      <Link to="/game">
        <div
          id="scissors"
          onClick={setChoice}
          className="icon icon--scissors"
        >
          Scissors
        </div>
      </Link>
      <Link to="/game">
        <div id="rock" onClick={setChoice} className="icon icon--rock">
          Rock
        </div>
      </Link>
    </div>
  );
};

export default Play;
