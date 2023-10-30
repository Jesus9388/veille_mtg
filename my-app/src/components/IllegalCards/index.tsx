import { Card } from "../../model/magic";
import IllegalCard from "./IllegalCard";

interface Props {
  illegalCards: Card[];
  hasBeenSubmitted: boolean;
  makeSpin: () => void;
}

const IllegalCards = ({ illegalCards, hasBeenSubmitted, makeSpin }: Props) => {
  if (!hasBeenSubmitted) return <></>;

  return (
    <div className="mt-3">
      {illegalCards.length === 0 ? (
        <div className="text-center">No illegal cards!</div>
      ) : (
        illegalCards.map((card) => {
          return (
            <IllegalCard
              illegalCard={card}
              makeSpin={makeSpin}
              key={card.name}
            />
          );
        })
      )}
    </div>
  );
};

export default IllegalCards;
