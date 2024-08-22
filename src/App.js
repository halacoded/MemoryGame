import "./App.css";
import { Howl } from "howler";
import { CardList } from "./componet/CardList";
import { useEffect } from "react";

function App() {
  const backgoundsound = new Howl({
    src: [require("./assest/sounds/soundtracksong-66467.mp3")],
  });

  useEffect(() => {
    backgoundsound.play();
  });

  return (
    <div className="container">
      <CardList />
    </div>
  );
}

export default App;
