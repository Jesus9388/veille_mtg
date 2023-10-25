import { useState } from "react";
import { getCards } from "../../services/mtg";

const TextReader = () => {
    const [unformattedDeckList, setUnformattedDeckList] = useState<string>("");

    const formatDeckList = () => {
        let listNames = unformattedDeckList.split("\n");
        let formattedDeckList = [];
        for (let i = 0; i < listNames.length; i++) {
            let splitCardName = listNames[i].split(" ");
            let cardName = "";
            for (let j = 1; j < splitCardName.length; j++) {
                cardName = cardName + splitCardName[j] + " ";
            }
            cardName = cardName.trim();
            formattedDeckList.push("!\"" + cardName + "\"");
        }
        console.log(formattedDeckList);
        
        getCards(formattedDeckList)
            .then((cards) => {
                console.log(cards.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <textarea
                onChange={(event) => {
                    setUnformattedDeckList(event.target.value);
                }}
                placeholder="Please input your deck list in MTGO format"
                className="min-h-[200px] w-full rounded bg-white border-2 border-black p-3"
            />
            <button
                onClick={formatDeckList}
                className="text-center border-black border bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded font-medium text-gray-900"
            >
                Submit
            </button>
        </>
    );
};

export default TextReader;