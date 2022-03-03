import styled from "styled-components";

export const SCButton = styled.button`
  display: flex;
  padding: ${(props) => (props.small ? "2px" : "10px 25px")};
  border: none;
  outline: none;
  color: #fff;
  background: #000000;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  margin: 5px;
  font-size: 16px;
  align-items: center;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #000000,
      #000000,
      #006203,
      #0f9200,
      #30cb00,
      #4ae54a,
      #a4fba6,
      #a4fba6,
      #4ae54a,
      #30cb00,
      #0f9200,
      #006203,
      #000000,
      #000000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: ${(props) => (props.glowing ? "1" : "0")};
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    animation: glowing 35s linear infinite;
  }
  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
