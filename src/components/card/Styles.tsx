import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  max-width: 1290px;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 140px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.div<{src: string}>`
  background-image: url(${({src}) => src});
  background-size: cover;
  border-radius: 8px 0 0 8px;
  height: 100%;
  width: 160px;
`;

export const Content = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.2em;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 10px;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 1.2em;
  line-height: 1.1;
  color: #242424;
  margin-bottom: 10px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 1em;
  color: #242424;
`;
