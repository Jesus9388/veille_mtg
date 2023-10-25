import { useState } from "react";
import DropDown from "../DropDown";
import TextReader from "../TextReader";
import IllegalCards from "../IllegalCards";
import { Card } from "../../model/magic";

const NameToBeDetermined = () => {
  const [format, setFormat] = useState<string>("");
  const [illegalCards, setIllegalCards] = useState<Card[]>([]);

  return (
    <div className="container content-center">
      <DropDown format={format} setFormat={setFormat} />
      <TextReader />
      <IllegalCards illegalCards={illegalCards}/>
    </div>
  );
};

export default NameToBeDetermined;
