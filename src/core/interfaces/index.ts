export interface KeyAndValue {
  [key: string]: any;
}

export interface Character {
  title: string;
  results: CharacterResult[];
}

export interface CharacterResult {
  id: string;
  name: string;
  description: string;
  image: string;
}
