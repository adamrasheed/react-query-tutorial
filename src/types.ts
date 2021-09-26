export type ICharacter = {
  name: string;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: IWand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alive: boolean;
  image: string;
};

export type IWand = {
  wood: string;
  core: string | null;
  length: number;
};
