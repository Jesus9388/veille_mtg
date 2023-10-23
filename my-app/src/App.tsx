import "./App.css";
import TextReader from "./components/TextReader";

const setText = (text: string) => {
  console.log(text);
}

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">WE ARE GATHERING</h1>
      <TextReader setText={setText}></TextReader>
    </>
  );
}

export default App;
