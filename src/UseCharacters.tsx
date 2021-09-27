import { useQuery } from "react-query";
import { ICharacter } from "./types";

const END_POINT = "http://hp-api.herokuapp.com/api/characters";

const useCharacters = () => {
  const {
    data: characters,
    isLoading,
    error,
  } = useQuery<ICharacter[]>("characters", () =>
    fetch(END_POINT).then((resp) => resp.json())
  );

  return { characters, isLoading, error };
};

export default useCharacters;
