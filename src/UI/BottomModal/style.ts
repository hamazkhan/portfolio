import styled from "styled-components";
import { Button } from "../Button";

export const SCBottomModal = styled.div`
  display: ${(props) =>
    props.show ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s;

  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const SCBottomModalContent = styled.div`
  background-color: green; /* Fallback color */
  position: fixed;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s;

  @-webkit-keyframes slideIn {
    from {
      bottom: -300px;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      bottom: -300px;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }
`;
export const SCBottomModalButton = styled(Button)``;
export const SCBottomModalHeader = styled.div`
  padding: 2px 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const SCBottomModalBody = styled(SCBottomModalHeader)`
  display: flex;
  flex-direction: column;
  background-color: #232023;
`;
export const SCBottomModalFooter = styled(SCBottomModalHeader)`
  background-color: transparent;
`;
