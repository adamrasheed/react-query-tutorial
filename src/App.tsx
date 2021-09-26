import { FC, useEffect, useState } from "react";
import { ICharacter } from "./types";

import "./App.css";

const END_POINT = "http://hp-api.herokuapp.com/api/characters";

const Character: FC<ICharacter> = ({ name }) => (
  <p className="character_name white">{name}</p>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(END_POINT)
      .then((resp) => resp.json())
      .then((data) => {
        setCharacters(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <h1 className="title white">List of Character</h1>
      {isLoading && <div className="loading">Is Loading...</div>}
      {!!characters.length &&
        characters?.map((character) => (
          <Character key={character.name} {...character} />
        ))}
    </div>
  );
}

export default App;
