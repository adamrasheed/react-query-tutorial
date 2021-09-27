import useCharacters from "./UseCharacters";
import "./App.css";

const Characters: React.FC = () => {
  const { isLoading, characters } = useCharacters();

  if (isLoading) {
    return <div className="loading">is loading...</div>;
  }

  return (
    <div>
      {!!characters?.length &&
        characters.map((character) => (
          <p key={character.name} className="character_name">
            {character.name}
          </p>
        ))}
    </div>
  );
};

export default Characters;
