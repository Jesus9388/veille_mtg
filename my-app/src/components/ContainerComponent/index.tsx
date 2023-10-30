import { useState } from "react";
import DropDown from "../DropDown";
import TextReader from "../TextReader";
import IllegalCards from "../IllegalCards";
import { Card } from "../../model/magic";
import faith from "../../audio/have-some-god-damn-faith.mp3"
import jellybeans from "../../audio/jellybeans.mp3"
import KekOrCringe from "../../audio/KekOrCringe.mp3"
import lumbago from "../../audio/lumbago.mp3"
import Muneh from "../../audio/Muneh.mp3"
import plan from "../../audio/plan.mp3"

const ContainerComponent = () => {
  const [format, setFormat] = useState<string>("");
  const [illegalCards, setIllegalCards] = useState<Card[]>([]);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const changeIllegalCards = (illegalCards: Card[]) => {
    setHasBeenSubmitted(true);
    setIllegalCards(illegalCards);
  };

  const makeSpin = () => {
    const audio = new Audio(determineAudio());

    audio.play();

    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  const determineAnimation = () => {
    let animations : String[] = [
      "animate-spin",
      "animate-ping",
      "animate-pulse",
      "animate-bounce",
      "animate-wiggle"
    ];

    return animations[Math.floor(Math.random() * 5)];
  }

  const determineAudio = () => {
    let audios : string[] = [
      faith,
      jellybeans,
      lumbago,
      Muneh,
      plan
    ];

    return audios[Math.floor(Math.random() * 5)];
  }

  const determineClassNames = () => {
    let classNames = "container content-center ";
    if (isSpinning) {
      classNames += determineAnimation();
    }

    return classNames;
  };

  return (
    <div className={determineClassNames()}>
      <DropDown format={format} setFormat={setFormat} />
      <TextReader setIllegalCards={changeIllegalCards} chosenFormat={format} />
      <IllegalCards
        illegalCards={illegalCards}
        hasBeenSubmitted={hasBeenSubmitted}
        makeSpin={makeSpin}
      />
    </div>
  );
};

export default ContainerComponent;
