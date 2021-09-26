import { useEffect, useState } from "react";
import { ICharacter } from "./types";

import "./App.css";

const END_POINT = "http://hp-api.herokuapp.com/api/characters";

const Characters: React.FC = () => {
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

  if (isLoading) {
    return <div className="loading">is loading...</div>;
  }

  return (
    <div>
      {!!characters.length &&
        characters.map((character) => (
          <p key={character.name} className="character_name">
            {character.name}
          </p>
        ))}
    </div>
  );
};

export default Characters;
