import styled from "styled-components";

export const SCWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 200px;
  border-radius: 2px;
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 1px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    background-size: 500% auto;
    animation: gradient 5s linear infinite;
    animation-direction: alternate;
  }

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;
export const SCInput = styled.input`
  width: 100%;
  background-color: transparent;
  color: white;
  font-size: 16px;
  line-height: 16px;
`;
