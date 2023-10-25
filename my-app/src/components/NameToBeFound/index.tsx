import { useState } from "react";
import DropDown from "../DropDown";
import TextReader from "../TextReader";

const NameToBeDetermined = () => {
  const [format, setFormat] = useState<string>("");

  return (
    <div className="container content-center">
      <DropDown format={format} setFormat={setFormat} />
      <TextReader />
    </div>
  );
};

export default NameToBeDetermined;
