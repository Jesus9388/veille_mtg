import { useState } from "react";
import { Card } from "../../../model/magic";

interface Props {
  illegalCard: Card;
  makeSpin: () => void;
}

interface Position {
  x: number;
  y: number;
}

const IllegalCard = ({ illegalCard, makeSpin }: Props) => {
  const [hasBeenHovered, setHasBeenHovered] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const onHover = () => {
    setIsHovering(true);
    setHasBeenHovered(true);
  };

  const onHoverEnd = () => setIsHovering(false);

  const determineCardURI = () => {
    if (!illegalCard.image_uris) return "";

    return illegalCard.image_uris["small"] ?? "";
  }

  return (
    <div
      className="relative"
      onMouseEnter={onHover}
      onClick={makeSpin}
      onMouseLeave={onHoverEnd}
      onMouseMove={(event) =>
        setPosition({ x: event.clientX, y: event.clientY })
      }
    >
      {!hasBeenHovered && (
        <span className="absolute flex h-3 w-3 right-0 top-0">
          <span className="animate-ping h-full w-full absolute inline-flex rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      )}
      {isHovering && (
        <div
          className="fixed"
          style={{ top: `${position.y - 150}px`, left: `${position.x + 20}px` }}
        >
          <img src={determineCardURI()} alt="Shit broke yo"></img>
        </div>
      )}
      <div className="border-dashed border-2 text-center mb-2 p-3 border-red-500 border-opacity-50 hover:border-opacity-100 hover:bg-red-500 hover:text-white rounded-lg">
        {illegalCard.name}
      </div>
    </div>
  );
};

export default IllegalCard;
