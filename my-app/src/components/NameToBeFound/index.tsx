import { useState } from "react";
import DropDown from "../DropDown";
import TextReader from "../TextReader";
import IllegalCards from "../IllegalCards";
import { Card } from "../../model/magic";

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
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
    }, 1000);
  };

  const determineClassNames = () => {
    let classNames = "container content-center ";
    if (isSpinning) {
      classNames += "animate-ping";
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
