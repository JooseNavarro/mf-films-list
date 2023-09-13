import {Character, CharacterResult, KeyAndValue} from "../../core/interfaces";
import {
  CardContainer,
  GridContainer,
  Image,
  Content,
  Title,
  SubTitle,
  Description,
} from "./Styles";

interface Props {
  translate: KeyAndValue;
  characters: Character;
}
export function Card({characters, translate}: Props) {
  return (
    <>
      <Title>{characters.title}</Title>
      <GridContainer>
        {characters.results.map((character: CharacterResult) => (
          <CardContainer>
            <Image src={character.image} />
            <Content>
              <SubTitle>{character.name}</SubTitle>
              <Description>
                {translate.DESCRIPTION}: {character.description}
              </Description>
            </Content>
          </CardContainer>
        ))}
      </GridContainer>
    </>
  );
}
