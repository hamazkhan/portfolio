import styled from "styled-components";
import { SCButton } from "../Button/style";

export const SCNavbar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SCBtnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    display: ${(props) => (props.visibility ? "display" : "none")};
  }
`;

export const SCMainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
  }
`;

export const SCMenuBtnWrapper = styled.div`
  display: none;
  font-size: 70px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavElement = styled(SCButton)`
  @media (max-width: 768px) {
  }
`;
