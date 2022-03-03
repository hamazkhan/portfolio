import styled from "styled-components";

export const SCImage = styled.img`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  height: 220px;
  width: 220px;
  border-radius: 110px;
  margin: 15px;
`;
