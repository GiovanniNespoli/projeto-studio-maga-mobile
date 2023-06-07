import styled from "styled-components/native";

interface IBackgroundStyles {
  marginStyle: number;
}

export const BackgroundGrid = styled.View<IBackgroundStyles>`
  height: 100%;
  width: 90%;
  margin-top: ${({ marginStyle }) => marginStyle}px;
`;
