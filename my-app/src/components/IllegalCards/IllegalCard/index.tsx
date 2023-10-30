import { useState } from "react";
import { Card } from "../../../model/magic";

interface Props {
  illegalCard: Card;
  makeSpin: () => void;
}

const IllegalCard = ({ illegalCard, makeSpin }: Props) => {
  const [hasBeenHovered, setHasBeenHovered] = useState<boolean>(false);

  const onHover = () => {
    setHasBeenHovered(true);
  }

  return (
    <div className="relative" onMouseEnter={onHover} onClick={makeSpin}>
      {!hasBeenHovered && (
        <span className="absolute flex h-3 w-3 right-0 top-0">
          <span className="animate-ping h-full w-full absolute inline-flex rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
      <div className="border-dashed border-2 text-center mb-2 p-3 border-red-500 border-opacity-50 hover:border-opacity-100 hover:bg-red-500 hover:text-white rounded-lg">
        {illegalCard.name}
      </div>
    </div>
  );
};

export default IllegalCard;
