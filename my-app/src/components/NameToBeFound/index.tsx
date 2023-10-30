import { useState } from "react";
import DropDown from "../DropDown";
import TextReader from "../TextReader";
import IllegalCards from "../IllegalCards";
import { Card } from "../../model/magic";
import faith from "../../audio/have-some-god-damn-faith.mp3"

const NameToBeDetermined = () => {
  const [format, setFormat] = useState<string>("");
  const [illegalCards, setIllegalCards] = useState<Card[]>([]);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState<boolean>(false);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const changeIllegalCards = (illegalCards: Card[]) => {
    setHasBeenSubmitted(true);
    setIllegalCards(illegalCards);
  };

  const makeSpin = () => {
    const audio = new Audio(faith);

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

export default NameToBeDetermined;
