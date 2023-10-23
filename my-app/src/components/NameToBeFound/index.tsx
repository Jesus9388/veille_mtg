import { useState } from "react";
import TextReader from "../TextReader";

const NameToBeDetermined = () => {
    const [deckList, setDeckList] = useState<string[]>([]);

    return (
        <div>
            <TextReader setDeckList={setDeckList}></TextReader>
        </div>
    );
}

export default NameToBeDetermined;