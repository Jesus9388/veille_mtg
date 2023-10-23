import { useEffect, useState } from "react";
import TextReader from "../TextReader";
import { getCards } from "../../services/mtg";

const NameToBeDetermined = () => {
    const [deckList, setDeckList] = useState<string[]>([]);

    useEffect(() => {
        getCards(deckList)
        .then((cards) => {
            console.log(cards.data);
        })
        .catch((error) => {
            console.log(error)
        })
    })

    return (
        <div>
            <TextReader setDeckList={setDeckList}></TextReader>
        </div>
    );
}

export default NameToBeDetermined;