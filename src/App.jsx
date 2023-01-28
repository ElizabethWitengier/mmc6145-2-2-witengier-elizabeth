import React, { useState } from "react";
import CardGame from "./components/cardGame";
import Header from "./components/header";
import Modal from "./components/modal";
import { useTimer } from "./util/customHooks";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const {
    time,
    start: timerStart,
    stop: timerStop,
    reset: timerReset,
    previousTime,
    bestTime
  } = useTimer();

  

  const cardTexts = [
    "Bunny 🐰",
    "Frog 🐸",
    "Panda 🐼",
    "Doggy 🐶",
    "Kitty 😺",
    "Duck 🦆",
  ];

  return (
    <>
      <Header
        previousTime={previousTime}
        bestTime={bestTime}

        time={time}// add time, bestTime, previousTime props
        openModal={() => setShowModal(true)}
      />
      <CardGame
        onGameStart={timerStart} 
        onGameEnd={timerReset}
       // add onGameStart, onGameEnd props
        cardTexts={cardTexts}
      />
      <Modal isShown={showModal} close={() => setShowModal(false)} />
    </>
  );
}

