interface Props {
    setText: (text: string) => void;
}

const TextReader = ({setText} : Props) => {
    return (
        <div className="container content-center">
            <textarea placeholder="Please input your deck list in MTGA format" className="min-h-[200px] w-full rounded bg-white border-2 border-black"></textarea>
            <button className="w-full text-center border-black border bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
    );
};

export default TextReader;