import { Card } from "../../model/magic";

interface Props {
  illegalCards: Card[];
}

const IllegalCards = ({ illegalCards }: Props) => {
  return (
    <>
      {illegalCards.map((card) => {
        return <div className="text-red-600">{card.name}</div>;
      })}
    </>
  );
};

export default IllegalCards;
