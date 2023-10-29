import { Card } from "../../model/magic";

interface Props {
  illegalCards: Card[];
  hasBeenSubmitted: boolean;
}

const IllegalCards = ({ illegalCards, hasBeenSubmitted }: Props) => {
  if (!hasBeenSubmitted) return <></>;

  return (
    <>
      {illegalCards.length === 0 ? (
        <div className="text-center">No illegal cards!</div>
      ) : (
        illegalCards.map((card) => {
          return (
            <div
              className="border-dashed border-2 text-center my-2 p-3 border-red-500 border-opacity-50 hover:border-opacity-100 hover:bg-red-500 hover:text-white rounded-lg"
              key={card.name}
            >
              {card.name}
            </div>
          );
        })
      )}
    </>
  );
};

export default IllegalCards;
