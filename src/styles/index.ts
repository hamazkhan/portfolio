import styled from "styled-components";

//Header FC Style
export const SCHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
//Header FC Style

//Main FC Style
export const SCMain = styled.div`
  margin: 0 auto;
  text-align: left;
  display: grid;
  grid-template-areas: "text photo" "buttons photo" "qrcode photo";
  grid-template-columns: auto 300px;
  max-width: 90%;

  @media (max-width: 768px) {
    max-width: 98%;
    grid-template-columns: auto;
    grid-template-areas:
      "photo"
      "text"
      "buttons"
      "qrcode";
  }
`;
export const SCMainText = styled.div`
  width: 100%;
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    height: 100%;
  }
`;
export const SCMainButtons = styled(SCMainText)`
  grid-area: buttons;
  flex-direction: row;

  @media (max-width: 768px) {
  }
`;
export const SCMainQR = styled(SCMainButtons)`
  grid-area: qrcode;

  @media (max-width: 768px) {
  }
`;
export const SCMainPhoto = styled(SCMainButtons)`
  grid-area: photo;
  align-content: left;
  flex-direction: column;

  @media (max-width: 768px) {
  }
`;
//Main FC Style

//Skills FC Style
export const SCSkills = styled(SCMain)`
  grid-template-areas:
    "mainSkills langsSkills"
    "mainSkills toolsSkills"
    "softSkills otherSkills";
  grid-template-columns: auto auto;
  color: #ffffff;
  min-height: 100vh;

  @media (max-width: 768px) {
    grid-template-areas: "mainSkills" "langsSkills" "toolsSkills" "otherSkills" "softSkills";
    grid-template-columns: auto;
  }
`;
export const SCMainSkills = styled(SCMainText)`
  grid-area: mainSkills;

  @media (max-width: 768px) {
  }
`;
export const SCLangSkills = styled(SCMainText)`
  grid-area: langsSkills;

  @media (max-width: 768px) {
  }
`;
export const SCOtherSkills = styled(SCMainText)`
  grid-area: otherSkills;

  @media (max-width: 768px) {
  }
`;
export const SCSoftSkills = styled(SCMainText)`
  grid-area: softSkills;

  @media (max-width: 768px) {
  }
`;
export const SCToolsSkills = styled(SCMainText)`
  grid-area: toolsSkills;

  @media (max-width: 768px) {
  }
`;
//Skills FC Style

//Projects FC Style
export const SCProjects = styled(SCMain)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
  }
`;
//Projects FC Style

export const SCEductaion = styled(SCMain)`
  display: block;
  text-align: center;

  @media (max-width: 768px) {
  }
`;

export const SCContacts = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const SCContactsText = styled.div`
  height: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
  }
`;
export const SCContactsButtons = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
  }
`;
