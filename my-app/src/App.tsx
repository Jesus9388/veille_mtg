import React, { useEffect } from "react";
import * as Scry from "scryfall-sdk";
import "./App.css";

function App() {

  const asyncShit = async () => {
    const chalice = await Scry.Cards.byName("Chalice of the Void");
    console.log(chalice);
  }

  useEffect(() => {
    asyncShit();
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">WE ARE REACTING</h1>
    </>
  );
}

export default App;
